'use babel';

import {View} from "space-pen";
import path from "path";

export default class FontPreviewView extends View {
  static content() {
    this.div({class: "font-preview"}, () => {
      this.p("The quick brown fox jumps over the lazy dog.")
    })
  }

  initialize(filePath) {
    this.filePath = path.resolve(filePath).replace(/\\/g, '/');
    const font = new FontFace("fp", `url(${this.filePath})`, {});
    font.load().then((loadedFace) => {
      document.fonts.add(loadedFace)
      this.find('p').css("font-family", "fp")
    })
  }

  getIconName() {
    return 'eye';
  }

  getTitle() {
    return `${path.basename(this.filePath)} - Font Preview`;
  }
}
