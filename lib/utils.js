'use babel';

import path from "path";
import fs from "fs";

export function isPathValid(filePath) {
  return [".ttf", ".otf", ".woff", ".woff2"].includes(path.extname(filePath)) && fs.existsSync(filePath);
}
