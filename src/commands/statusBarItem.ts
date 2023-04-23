import * as vscode from "vscode";

export class ReadmeStatusBarItem {
  private statusBarItem: vscode.StatusBarItem;

  constructor() {
    this.statusBarItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Right,
      100
    );
    this.statusBarItem.text = "$(file) Generate README";
    this.statusBarItem.tooltip = "Click to generate a README";
    this.statusBarItem.command = "create-readme-openai.create-readme";
    this.statusBarItem.show();
  }

  dispose() {
    this.statusBarItem.dispose();
  }
}