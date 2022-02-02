type ReceivedObject = {
  a: string;
  b: number;
};

function transformObject<ReceivedObject>(object : ReceivedObject) : (string|number)[]{
  return Object.values(object)
}



// const receivedObject = {
//   a: 'somestring',
//   b: 42
// }

// Leave the line below for tests to work properly.
export { transformObject };
