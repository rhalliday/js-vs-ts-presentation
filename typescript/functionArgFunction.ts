function functionArgTS(cb: (name: string, value: number) => void) {
  cb("hello", 5);
}

functionArgTS((name: string, value: number) => console.log(name, value));

/*
functionArgTS((times: number, value: number) => {
  console.log(times * value);
});
*/
