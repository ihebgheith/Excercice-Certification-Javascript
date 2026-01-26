// 1. Declare an empty array named inventory
let inventory = [];

// 2. Function to find product index by name (case-insensitive)
function findProductIndex(productName) {
  const lowerName = productName.toLowerCase();
  return inventory.findIndex(product => product.name === lowerName);
}

// 3. Function to add product
function addProduct(product) {
  const name = product.name.toLowerCase();
  const quantity = product.quantity;

  const index = findProductIndex(name);

  if (index !== -1) {
    // Product exists, update quantity
    inventory[index].quantity += quantity;
    console.log(`${name} quantity updated`);
  } else {
    // Product does not exist, add to inventory
    inventory.push({ name: name, quantity: quantity });
    console.log(`${name} added to inventory`);
  }
}

// 4. Function to remove product
function removeProduct(productName, quantity) {
  const name = productName.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  if (inventory[index].quantity < quantity) {
    console.log(`Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`);
    return;
  }

  // Subtract quantity
  inventory[index].quantity -= quantity;

  if (inventory[index].quantity === 0) {
    // Remove product if quantity is zero
    inventory.splice(index, 1);
  }

  console.log(`Remaining ${name} pieces: ${inventory[index]?.quantity || 0}`);
}
addProduct({name: "FLOUR", quantity: 10}); // flour added to inventory
addProduct({name: "Flour", quantity: 5});  // flour quantity updated
addProduct({name: "Rice", quantity: 20});  // rice added to inventory

removeProduct("FLOUR", 5); // Remaining flour pieces: 10
removeProduct("FLOUR", 15); // Not enough flour available, remaining pieces: 10
removeProduct("SUGAR", 5); // sugar not found
removeProduct("RICE", 20); // Remaining rice pieces: 0 (removed)
