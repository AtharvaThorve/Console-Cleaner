const vscode = require('vscode');
const Cleaner = require('./cleaner');
/**
 * @param {vscode.ExtensionContext} context
 */
const activate = context => {
	let cleaner = new Cleaner();

	// Comments out all console logs
	let disposable = vscode.commands.registerCommand(
		'extension.ConsoleLog',
		async () => {
			if (await cleaner.clearConsoleLogs())
				vscode.window.showInformationMessage(
					'All console.log statements commented'
				);
			else vscode.window.showErrorMessage('No console.log found');
		}
	);

	// Comments out all System.out.print statements
	disposable = vscode.commands.registerCommand(
		'extension.SystemOutPrint',
		async () => {
			if (await cleaner.clearSystemOutPrint())
				vscode.window.showInformationMessage(
					'All System.out.print/ln/f statements commented'
				);
			else
				vscode.window.showErrorMessage(
					'No System.out.print/ln/f statements found'
				);
		}
	);

	disposable = vscode.commands.registerCommand(
		'extension.Cout',
		async () => {
			if (await cleaner.clearCout())
				vscode.window.showInformationMessage(
					'All cout statements commented'
				);
			else
				vscode.window.showErrorMessage(
					'No cout statements found'
				);
		}
	);

	disposable = vscode.commands.registerCommand(
		'extension.Print',
		async () => {
			if (await cleaner.clearPrint())
				vscode.window.showInformationMessage(
					'All print statements commented'
				);
			else
				vscode.window.showErrorMessage(
					'No print statements found'
				);
		}
	);
	context.subscriptions.push(disposable);
};
exports.activate = activate;

const deactivate = () => {};

module.exports = {
	activate,
	deactivate
};
