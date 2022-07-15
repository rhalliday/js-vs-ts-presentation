/**
 * Greet someone
 *
 * @param {string} name name of the person to greet
 * @returns {string} the greeting
 */
function greetingJS(name) {
  if (typeof name !== "string") {
    throw Error("greeting expects a string name");
  }
  return `hello ${name}`;
}

// this works
const messageJS = greetingJS("bob");

// this causes a runtime error
const noMessageJS = greetingJS(1);

// this causes a runtime error
const noMessage2JS = greetingJS();
