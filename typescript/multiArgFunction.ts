/**
 * Log out the person, their age and the folical status
 * @param name name of the person
 * @param age age of the person
 * @param hasHair whether the person has hair
 */
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
