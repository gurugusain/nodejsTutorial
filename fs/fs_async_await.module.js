const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncAwaitFile.txt";
const filePath = path.join(__dirname, fileName);

const file = __dirname;
console.log(file);

// const readFolder = async () =>{
//     try {
//         const res = await fs.promises.readdir(file)
//         console.log(res);

//     } catch (error) {
//         console.log(error)

//     }

// }
// readFolder();

// creating a new file using async await

const writeFile = async () => {
  try {
    const createFile = await fs.writeFile(
      filePaths,
      "In this file the data is for async await in the file system for the node js",
      "utf-8"
    );
    console.log("File is created successfully");
  } catch (error) {
    console.error("error is this",error.message);
  }
};

writeFile();




// Reading the file using async await 


// const readFile = async () => {
//   try {
//     const readFile = await fs.readFile(
//       filePath,
//       "utf-8"
//     );
//     console.log(readFile);
//   } catch (error) {
//     console.error(error);
//   }
// };

// readFile();




// Updating the file using async await in the fs 
// const updateFile = async () => {
//   try {
//     const updateFile = await fs.appendFile(
//       filePath,
//       "\nThis line is the proof that this line is updated after the creation of the file",
//       "utf-8"
//     );
//     console.log("File is udpated successfully in the folder");
//   } catch (error) {
//     console.error(error);
//   }
// };

// updateFile();







// Deleting the record from the file system 

// const deleteFile = async () => {
//   try {
//     const deleteFile = await fs.unlink(
//       filePath
//     );
//     console.log("File is deleted successfully in the folder");
//   } catch (error) {
//     console.error(error);
//   }
// };

// deleteFile();





