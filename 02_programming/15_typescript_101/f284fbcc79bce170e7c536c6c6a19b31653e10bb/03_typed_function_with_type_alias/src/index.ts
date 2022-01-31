type MyTuple = [string,number];


function handleTuple( tuple : MyTuple ): void{
  if (typeof tuple[0]=== "string"){
  console.log( `${tuple[0]} is a string`);
  }
  if(typeof tuple[1]==="number"){
  console.log(`${tuple[1]} is a number`);
  }
  // Code the function here.
}

console.log(handleTuple(["foo",42]))

// Leave the line below for tests to work properly.
export { handleTuple };
