/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
  .prompt([
    {
        /* Pass your questions in here */
        type: 'input',
        name: 'website',
        message: "Enter a website URL to generate a QR code:",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
    const url = answers.website;
    var qr_svg = qr.image(url, { type: 'svg' });
    qr_svg.pipe(fs.createWriteStream('qr-code.svg'));

    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr-code.png'));
    fs.writeFile('website.txt', url, (err) => {
      if (err) throw err;
      console.log('The website URL has been saved to website.txt!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
    } else {
      // Something else went wrong
        console.error("An error occurred:", error);
    }
  });