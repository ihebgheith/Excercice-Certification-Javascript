function logArgs() {
  for (const arg of arguments) {
    console.log(arg);
  }
}

logArgs(1, 2, 3);

logArgs("dog", "chicken", "cat"); // true
logArgs("dog", "chicken", "horse")); // false
