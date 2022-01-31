// Format user input.
function sanitizeUserInput(choice : string) : string{
  return choice
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\w/), s => s.toUpperCase())
    .replace(" ","");
}

// Leave the line below for tests to work properly.
export { sanitizeUserInput };
