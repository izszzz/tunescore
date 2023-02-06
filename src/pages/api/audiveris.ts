import { execSync } from "child_process";
import fs from "fs";
import path from "path";

import { importer } from "@coderline/alphatab";
import admZip from "adm-zip";
import type { File } from "formidable";
import formidable from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";
import * as R from "remeda";

import AlphaTexExporter from "../../helpers/AlphaTexExporter";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    const { file } = files;
    if (!file) return res.status(500).end("not uploaded file");
    if (Array.isArray(file))
      return res.status(500).end("can not upload multiple file");

    const uploadedFile = file,
      fileName = uploadedFile.originalFilename || "",
      fileBaseName = path.parse(fileName).name,
      savedFilePathName = path.join(basePath, fileName),
      audiverisFolderPathName = path.join(basePath, fileBaseName),
      xmlFileName = fileBaseName + ".mxl",
      xmlFilePathName = path.join(audiverisFolderPathName, xmlFileName),
      exporter = new AlphaTexExporter();

    try {
      saveFile(uploadedFile);
    } catch {
      return res.status(500).end("upload failed");
    }
    try {
      recognizeFile(savedFilePathName);
    } catch {
      return res.status(500).end("recognize failed");
    }

    const alphaTex = R.pipe(
      fs.readFileSync(xmlFilePathName),
      (buffer) => new admZip(buffer),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (zip) => zip.getEntries()[0]!.getData(),
      (buffer) =>
        importer.ScoreLoader.loadScoreFromBytes(new Uint8Array(buffer)),
      (score) => {
        exporter.Export(score);
        return exporter.ToTex();
      }
    );

    // remove cache
    fs.unlinkSync(uploadedFile.filepath);
    fs.unlinkSync(savedFilePathName);
    fs.rmdirSync(audiverisFolderPathName, {
      recursive: true,
    });

    return res.status(201).end(alphaTex);
  });
};

const basePath = path.join(".", "public");

const saveFile = (file: File) => {
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(path.join(basePath, file.originalFilename || ""), data);
};

const recognizeFile = (savedFilePathName: string) =>
  execSync(
    `java -cp 'audiveris/Audiveris-5.2.5/lib/*' Audiveris -batch -export -output '${basePath}' '${savedFilePathName}'`
  );

const audiveris = async (req: NextApiRequest, res: NextApiResponse) =>
  await handler(req, res);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default audiveris;
