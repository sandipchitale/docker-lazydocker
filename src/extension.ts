'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as child_process from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('docker-lazydocker.launch', dockerLazydocker);
    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}

function dockerLazydocker() {
    const config = vscode.workspace.getConfiguration('docker-lazydocker');
    let lazydockerCommand = 'lazydocker';
    if (config && config.lazydockerCommand) {
        lazydockerCommand = config.lazydockerCommand;
    }

    var consoleProcess;
    if (process.platform === 'win32') {
        consoleProcess = child_process.spawn('cmd', ['/K', 'start', `${lazydockerCommand}`]);
    }
}

// function openConsoleAtLocation(location) {
//     if (isDirectory(location)) {
//       var consoleProcess;
//       if (process.platform === 'win32') {
//         consoleProcess = child_process.spawn('cmd', ['/K', 'start', 'cd', '/D', location]);
//       } else if (process.platform === 'darwin') {
//         consoleProcess = child_process.spawn('open', [
//           '-n',
//           '-a',
//           '/Applications/Utilities/Terminal.app',
//           location
//         ]);
//       } else if (process.platform === 'linux') {
//         consoleProcess = child_process.spawn('gnome-terminal', ['--working-directory=' + location]);
//       }
//       consoleProcess.on('exit', (code) => {
//         console.info(code);
//       });
//     }
//   }