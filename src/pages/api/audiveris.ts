import { execSync } from "child_process";
import fs from "fs";
import path from "path";

import type { File } from "formidable";
import formidable from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async function (err, fields, files) {
    const filePath = await saveFile(files.file as File);
    const folderPath = await recognizeFile(filePath);
    await fs.rmdirSync(folderPath, { recursive: true });
    return res.status(201).send("");
  });
};

const saveFile = async (file: File) => {
  const data = fs.readFileSync(file.filepath);
  const filePath = path.join(".", "public", file.originalFilename || "");
  fs.writeFileSync(filePath, data);
  await fs.unlinkSync(file.filepath);
  return filePath;
};
const recognizeFile = async (filePath: string) => {
  const stdout = await execSync(
    `java -cp 'audiveris/Audiveris-5.2.5/lib/*' Audiveris -batch -export -output './public' '${filePath}'`
  );
  console.log(`stdout: ${stdout?.toString()}`);
  return path.join(".", "public", path.parse(filePath).name);
};

const audiveris = async (req: NextApiRequest, res: NextApiResponse) => {
  req.method === "POST"
    ? handler(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};

export default audiveris;
