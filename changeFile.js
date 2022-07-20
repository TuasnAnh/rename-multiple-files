const { readdirSync, rename } = require("fs");
const { resolve } = require("path");

// Get path to image directory
const imageDirPath = resolve(__dirname, "images");

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

const name = "";
let index = 0;
// Loop through each file that was retrieved
files.forEach((file) => {
   const newName = file.replace("Archer", "Alicial");
   console.log(newName);
   rename(imageDirPath + `/${file}`, imageDirPath + `/${newName}`, (err) => console.log(err));
   index++;
});
