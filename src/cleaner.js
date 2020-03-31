const vscode = require('vscode');

class Cleaner {
	async clearConsoleLogs() {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('There is no open text editor');
			return;
		}

		const doc = editor.document;
		const logRegex = /(console.log\(\)|console.log\(.+\));/;
		const commentRegex = /\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm;
		let lineCount = doc.lineCount;
		let flag = false;
		for (let lineNumber = 0; lineNumber < lineCount; ++lineNumber) {
			const codeLine = doc.lineAt(lineNumber);
			if (
				!codeLine.text.match(commentRegex) &&
				codeLine.text.match(logRegex)
			) {
				await editor.edit(editBuilder => {
					editBuilder.insert(
						new vscode.Position(lineNumber, 0),
						'// '
					);
					flag = true;
				});
			}
		}
		return flag;
	}
	async clearSystemOutPrint() {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('There is no open text editor');
			return;
		}

		const doc = editor.document;
		const logRegex = /System\.out\.print[^)]+[)]\s*/;
		const commentRegex = /\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm;
		let lineCount = doc.lineCount;
		let flag = false;
		for (let lineNumber = 0; lineNumber < lineCount; ++lineNumber) {
			const codeLine = doc.lineAt(lineNumber);
			if (
				!codeLine.text.match(commentRegex) &&
				codeLine.text.match(logRegex)
			) {
				await editor.edit(editBuilder => {
					editBuilder.insert(
						new vscode.Position(lineNumber, 0),
						'// '
					);
					flag = true;
				});
			}
		}
		return flag;
	}
	async clearCout() {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('There is no open text editor');
			return;
		}

		const doc = editor.document;
		const logRegex = /(cout\.*)/;
		const commentRegex = /\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm;
		let lineCount = doc.lineCount;
		let flag = false;
		for (let lineNumber = 0; lineNumber < lineCount; ++lineNumber) {
			const codeLine = doc.lineAt(lineNumber);
			if (
				!codeLine.text.match(commentRegex) &&
				codeLine.text.match(logRegex)
			) {
				await editor.edit(editBuilder => {
					editBuilder.insert(
						new vscode.Position(lineNumber, 0),
						'// '
					);
					flag = true;
				});
			}
		}
		return flag;
	}
	async clearPrint() {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('There is no open text editor');
			return;
		}

		const doc = editor.document;
		const logRegex = /print[/s]?(?! e)(.)+/;
		const commentRegex = /#\.*/;
		let lineCount = doc.lineCount;
		let flag = false;
		for (let lineNumber = 0; lineNumber < lineCount; ++lineNumber) {
			const codeLine = doc.lineAt(lineNumber);
			if (
				!codeLine.text.match(commentRegex) &&
				codeLine.text.match(logRegex)
			) {
				await editor.edit(editBuilder => {
					editBuilder.insert(
						new vscode.Position(lineNumber, 0),
						'# '
					);
					flag = true;
				});
			}
		}
		return flag;
	}
}

module.exports = Cleaner;
