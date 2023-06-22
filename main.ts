import prompt from "prompt";

interface AssertPalindromeArgs {
  value: string | null;
}

function assertPalindrome({ value }: AssertPalindromeArgs): boolean | never {
  try {
    if (value === null)
      throw new Error(
        "The entered value was null. The process cannot be executed. Try again."
      );

    // Removing spaces.
    value = value.replace(/\s/g, "");
    // Ignoring sensitive case.
    value = value.toLocaleLowerCase();

    // Loop only through half of the string
    for (let pos = 0; pos < value.length / 2; pos++) {
      // Get the char in the current position.
      const char = value[pos];
      // Get the char in the opposite side of the string value.
      const mirrorChar = value[value.length - pos - 1];

      // Characters comparison
      if (char !== mirrorChar) return false;
    }

    return true;
  } catch (error) {
    console.error(
      "Something has failed. Unable to determine if string is a palindrome."
    );

    throw error;
  }
}

prompt.start();

console.log("Enter the string wanted to assert if is a palindrome: ");

prompt.get(["value"], (err, res) => {
  if (err) return console.error(err);

  const value = String(res.value);
  const result = assertPalindrome({ value });

  console.log(`Result of '${value}': ${result}`);
});
