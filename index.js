const prompt = require("prompt-sync")({ sigint: true });

class CoffeeHouse {
  constructor() {
    this.menu = [
      ["Product/Add-on", "Milk ", "Cream", "Latte"],
      ["Espresso      ", "60   ", "75   ", "100"],
      ["Cappuccino    ", "80   ", "90   ", "125"],
      ["Latte         ", "100  ", "125  ", "150"],
    ];

    this.orders = [];

    this.display();
  }

  display() {
    console.log(this.menu);
    this.order();
  }

  order() {
    const yourOrder = [];
    let choice = true;
    while (choice) {
      let coffee = prompt("Enter Coffee Number: 1 Espresso, 2 Cappuccino, 3 Latte :-");
      let addon = prompt("Enter Addon Number: 1 Milk, 2 Cream, 3 Latte :-");
      let freq = prompt("How many coffee do you want: ");
      let temp_choice = prompt("Do you want to order more coffee 1/0: ");

      choice = temp_choice == "1" ? true : false;

      this.orders.push([coffee, addon, freq]);
      console.log("\n");
    }

    this.printReceipt();
  }

  printReceipt() {
    console.log("Receipt");
    let netTotal = 0;
    this.orders.forEach((order) => {
      console.log(
        [this.menu[order[0] - 0][0], this.menu[0][order[1] - 0], order[2]].join(
          " | "
        ) +
          " | " +
          `${this.menu[order[0] - 0][order[1] - 0] * (order[2] - 0)}`
      );

      netTotal += this.menu[order[0] - 0][order[1] - 0] * (order[2] - 0);
    });

    console.log(`Your total bill is: ${netTotal}`);
    console.log("\n");
  }
}

const ob = new CoffeeHouse();