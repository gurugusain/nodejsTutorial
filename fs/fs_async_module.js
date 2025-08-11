const fs = require('fs');
const path = require('path');

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname,fileName);


// Create a new file 

const newFile = fs.writeFile(filePath,"this is the new async file","utf-8",(err)=>{
    if(err) console.error(err)
        else console.log("fiel has been added")

})





// Read the file  

// const readFile = fs.readFile(filePath,'utf-8',(err,data)=>{
//     if(err) console.log(err)
//         else console.log(data);
// })





// update the file 

// const updateFile = fs.appendFile(filePath,"\nThis is the new file udpated in the async fs module",'utf-8',()=> {
//     if(err) console.log(err)
//         else console.log("data has updated in the file");
// })




// Delete the file in the fs 

// const deleteFile = fs.unlink(filePath,(err)=>{
//     if(err) console.log(err)
//         else console.log("File is deleted from the fs path")
// })





