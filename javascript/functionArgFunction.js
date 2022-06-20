function functionArgJS(cb) {
  cb("hello", 5);
}

functionArgJS((name, value) => console.log(name, value));

functionArgJS((times, value) => {
  console.log(times * value);
});
