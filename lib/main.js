'use babel';

import FontPreviewView from "./font-preview-view";
import {CompositeDisposable} from "atom";
import {isPathValid} from "./utils";

export function activate() {
  this.subscriptions = new CompositeDisposable();

  this.subscriptions.add(atom.workspace.addOpener(function(uri){
    if (isPathValid(uri))
      return new FontPreviewView(uri)
  }));
}
