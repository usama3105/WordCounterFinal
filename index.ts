#!/usr/bin/env node
import inquirer from 'inquirer';

async function main() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter your text:',
            validate: (input) => input.trim().length > 0,
        },
    ]);

    const wordCount = userInput.text.trim().split(/\s+/).length;
    console.log(`Word count: ${wordCount}`);
}

main();
