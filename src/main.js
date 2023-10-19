// const { welcome, goodbye, tell } = require("../utils/fortune-teller");

// const question = "Will the weather be nice today"

// const promise = tell(question);

// promise

// .then((fortune) => {
//     console.log(question)
//     console.log(fortune)

// })
// .catch(console.error);


//This Can be Modified like this:
//a.
const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = ""

tell(question)
.then((fortune) => {
    console.log(question)
    console.log(fortune)

})
.catch(console.error); //it isnot necessary to put catch statements at he end because if there's an error catch will be called first.

//b.
welcome()
  .then(console.log) // Logs the result of welcome()
  .then(() => goodbye().then(console.log)) // .then inside of another .then
  .catch(console.error); // Logs error from welcome() or goodbye()