/**
 * Greet a person
 *
 * @param name the name of the person to greet
 * @returns a greeting
 */
function greetingTS(name: string): string {
  return `hello ${name}`;
}

// message is now of type string
const messageTS = greetingTS("bob");

// this causes a compiler time error
// const noMessageTS = greetingTS(1);

// this causes a compile time error
// const noMessage2TS = greetingTS();
