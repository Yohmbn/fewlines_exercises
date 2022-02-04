import { helloSailor } from ".";

test("it should call console.log the default phrase", () => {
  expect.assertions(2);
   const fakeLog = jest.spyOn(console, "log");
   fakeLog.mockImplementation(() => {});
   helloSailor();
   expect(fakeLog).toHaveBeenCalled();
   expect(fakeLog).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
   fakeLog.mockRestore();
 });

 test("it should call console.log a message with the user's input", () => {
  expect.assertions(2);
   const fakeLog = jest.spyOn(console, "log");
   fakeLog.mockImplementation(() => {});
   helloSailor("Captain Blackbeard");
   expect(fakeLog).toHaveBeenCalled();
   expect(fakeLog).toHaveBeenCalledWith("Howdy Captain Blackbeard!");
   fakeLog.mockRestore();
 });
