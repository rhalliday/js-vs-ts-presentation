function multiArgTS(name: string, age: number, hasHair: boolean): void {
  console.log(
    `${name} is ${age} years old and has ${hasHair ? "hair" : "no hair"}`
  );
}

// success
multiArgTS("bob", 39, false);

// compile time error
// multiArgTS("bob", "thirty nine", "false");

// compile time error
// multiArgTS();
