import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const name = "";

const showMenu = () => {
  console.log("\nFile Creation Menu:");
  rl.question("Enter the file name to create: ", (name) => {
    if (name.trim() === "") {
      console.log("File name cannot be empty. Please try again.");
      showMenu();
    } else {
      rl.question("Enter the content for the file: ", (content) => {
        import('fs').then(fs => {
          fs.writeFileSync(name, content, "utf-8");
          console.log(`File \"${name}\" created successfully with content.`);
          rl.close();
          console.log("Exiting...");
        }).catch(err => {
          console.error("Error creating file:", err);
          rl.close();
        });
      });
    }
  });
};

showMenu();
