// First principle - Thread of execution : JS executes code line by line

// Second principle - Memory/env variable : While executing code line by line, it saves  'data' like strings and array in its memory for later use.
// We can also save  code "functions".

const num = 3;
function multiplyBy2(inputNumber){
    const result = inputNumber*2;

    return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);


//Execution Context : This is created every time our function is invoked/executed/run/call
// It is created to run the code of a function.
// Has 2 parts: Thread of execution  and memory


// Third Principle : Call Stack is meant to keep track of what function is currently running.(Where's the thread of execution)
// Every time we run a fucntion we add it to a call stack.
// When the function finishes running - JS removes it from the call.