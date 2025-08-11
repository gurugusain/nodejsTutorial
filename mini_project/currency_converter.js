import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apikey = "e19de117c64843723169a2c7";

const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

https.get(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk;
  });
  response.on("end", () => {
    const exchangeRates = JSON.parse(data).conversion_rates;
    console.log(exchangeRates);

    rl.question("Enter the amount in USD: ", (amount) => {
      const numAmount = Number(amount);
      if (isNaN(numAmount) || numAmount <= 0) {
        console.log(chalk.red("Please enter a valid amount."));
        rl.close();
        return;
      } else {
        rl.question("Enter the target currency code (e.g., EUR, INR): ", (currencyCode) => {
          const rate = exchangeRates[currencyCode.toUpperCase()];
          if (rate) {
            const convertedAmount = (numAmount * rate).toFixed(2);
            console.log(`${numAmount} USD is equal to ${convertedAmount} ${currencyCode.toUpperCase()}`);
            rl.close();
          } else {
            console.log(chalk.red("Invalid currency code. Please try again."));
            rl.close();
          }
        });
      }
    });
  });   
}).on("error", (err) => {
  console.error(chalk.red("Error fetching exchange rates:", err.message));
  rl.close();
});
    
