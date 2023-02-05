import { execSync } from "child_process";
import fs from "fs";
import path from "path";

import { importer } from "@coderline/alphatab";
import admZip from "adm-zip";
import type { File } from "formidable";
import formidable from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";

import AlphaTexExporter from "../../helpers/AlphaTexExporter";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    const file = files.file as File;
    if (!file) return res.status(500).end("no fileName");
    const fileName = file.originalFilename || "";
    await saveFile(file);
    const mxlFileName = await recognizeFile(fileName);
    const data = fs.readFileSync(
      path.join(basePath, path.parse(fileName).name, mxlFileName)
    );
    const zip = new admZip(data);
    const zipEntry = zip.getEntries()[0];
    if (!zipEntry) return res.status(500).end("no zipEntry");

    const score = importer.ScoreLoader.loadScoreFromBytes(
      new Uint8Array(zipEntry.getData())
    );
    const exporter = new AlphaTexExporter();
    exporter.Export(score);
    // remove cache
    await fs.rmdirSync(path.join(basePath, path.parse(fileName).name), {
      recursive: true,
    });
    await fs.unlinkSync(path.join(basePath, fileName));
    return res.status(201).end(exporter.ToTex());
  });
};

const basePath = path.join(".", "public");

const saveFile = async (file: File) => {
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(path.join(basePath, file.originalFilename || ""), data);
  await fs.unlinkSync(file.filepath);
};

const recognizeFile = async (fileName: string) => {
  const stdout = await execSync(
    `java -cp 'audiveris/Audiveris-5.2.5/lib/*' Audiveris -batch -export -output '${basePath}' '${path.join(
      basePath,
      fileName
    )}'`
  );
  console.log(stdout);
  return path.parse(fileName).name + ".mxl";
};

const audiveris = async (req: NextApiRequest, res: NextApiResponse) => {
  req.method === "POST"
    ? await handler(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default audiveris;
