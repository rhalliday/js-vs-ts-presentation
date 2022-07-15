/**
 * Calls the passed in function with "hello" and 5
 * @param {function} cb function to call the args with
 */
function functionArgJS(cb) {
  cb("hello", 5);
}

functionArgJS((name, value) => console.log(name, value));

functionArgJS((times, value) => {
  console.log(times * value);
});
