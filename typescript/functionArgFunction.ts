/**
 * Calls the passed in function with "hello" and 5
 * @param cb function to call with the args
 */
function functionArgTS(cb: (name: string, value: number) => void) {
  cb("hello", 5);
}

functionArgTS((name: string, value: number) => console.log(name, value));

/*
functionArgTS((times: number, value: number) => {
  console.log(times * value);
});
*/
