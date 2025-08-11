const fs = require('fs');
const path = require('path');

const fileName = "promiseFile.txt";
const filePath = path.join(__dirname,fileName);

const file = __dirname;

// Read directory
// fs.promises.readdir(file)
// .then((data)=> {
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err)
// })





// Create file in the fs using promises 

fs.promises.writeFile(filePath,"In this file promises data is updated in this","utf-8")
.then(console.log("data is created in this file"))
.catch((err)=> {
    console.log(`There is some error while creating the file which is this ${err}`)
})





// Reading the data 

// fs.promises.readFile(filePath,"utf-8")
// .then((data) => {
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err)
// })


// Update the data in the promises 


// fs.promises.appendFile(filePath,"\nIn this file promises data is updated in this which is used by the prmises using then and catch","utf-8")
// .then(console.log("data is udpated in this file"))
// .catch((err)=> {
//     console.log(`There is some error while creating the file which is this ${err}`)
// })



// delete the file using the promises 

// fs.promises.unlink(filePath)
// .then(console.log("data is udpated in this file"))
// .catch((err)=> {
//     console.log(`There is some error while creating the file which is this ${err}`)
// })













