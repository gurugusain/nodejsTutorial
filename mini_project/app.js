import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("\nTodo List Menu:");
  console.log("1. Add Todo");
  console.log("2. View Todos");
  console.log("3. Remove Todo");
  console.log("4. Exit");

  rl.question("Choose an option: ", handleInput);
};

const handleInput = (option) => {
  switch (option) {
    case "1":
      rl.question("Enter todo: ", (todo) => {
        todos.push(todo);
        console.log(`Todo "${todo}" added.`);
        showMenu();
      });
      break;
    case "2":
      console.log("Your Todos List:", todos.length === 0 ? "No todos available." : "");
      if (todos.length > 0) {   
        todos.forEach((todo, index) => {
          console.log(`${index + 1}: ${todo}`);
        });
      }
      rl.question("Press Enter to continue...", () => {
        
        showMenu();
      });
      break;
    case "3":
      rl.question("Enter index of todo to remove: ", (index) => {
        if (index >= 0 && index < todos.length) {
          const removed = todos.splice(index, 1);
          console.log(`Removed todo: "${removed}"`);
        } else {
          console.log("Invalid index.");
        }
        showMenu();
      });
      break;
    case "4":
      console.log("Exiting...");
      rl.close();
      break;
    default:
      console.log("Invalid option. Please try again.");
      showMenu();
  }
};

showMenu();
