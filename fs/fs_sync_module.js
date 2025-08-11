const fs = require('fs');
const path = require('path');

const filename = "test.txt";

//  UTF-8 meaning ----->>>  8-bit  Unicode Transformation Format 

const filepath = path.join(__dirname,filename);
console.log(filepath);




// Create a file using 
// const writeFile = fs.writeFileSync(filepath,"This is my first fs file and updated", "utf-8");




// reading the fileusing

// const readFile = fs.readFileSync(filepath,"utf-8");
// console.log(readFile);


// update the file
// const updateFile =  fs.appendFileSync(filepath,"\nTHis is the new commetn","utf-8");



// deleting the file 
// const deleteFile = fs.unlinkSync(filepath);
// console.log(deleteFile)


// update the filename  

const newName = "udpated.txt";
const newFilePath = path.join(__dirname,newName);

const renameFile = fs.renameSync(filepath, newFilePath);





