//closure happens on a nested function

function nums(){
    const a = 2;
    console.log({a})
    function add(){
      const b = 3;
      console.log(a+b)
    };
    add();
}

nums();


/**Asynchronous Function Assignment
Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
The function should log the message to the console after the specified delay time.*/
/*const message = false;
const newMessage = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(`resolve`)
  },2000
  )
        resolve(`Message received`);
    }else{
        reject(`No message received`)
    }
})
.catch((error)=>{
    console.log({error});
    console.log(`Can another message be sent`)
})
newMessage.then((response)=>{
    console({response});
    console.log(`We got the message`)
}
)
console.log({newMessage})

async function messagereceived(){
    try{
console.log(`Welcome to AkiraChix`)
await newMessage
}
catch{
    console.log(`We got the message`)
}
}

messagereceived()

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
  asyncCall();
  */

  /**Asynchronous Function Assignment
Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
The function should log the message to the console after the specified delay time.*/
/*const message = true
  const newMessage = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Message received`);
    }, 1000); 
  });
  
  async function messagereceived() {
    try {
      console.log(`Welcome to AkiraChix`);
      await newMessage;
      console.log(`We got the message`);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
  
  messagereceived();
  */
/*You have an array of user IDs and a function getUserData(id) that returns a Promise with user data 
when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID 
one by one, in sequence.*/

// function getUserData(id) {

// }

/*You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task 
is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom 
success message if the task is successful, and a custom error message if there's an error.

Retry Logic:
Scenario:
Write a function unstableTask that:

1.Accepts a taskName and failureProbability (a number between 0 and 1).
2. Returns a Promise that:
Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
Write another function executeWithRetry that:

Accepts a taskName, retries, and failureProbability.
Uses a retry mechanism to attempt the unstableTask up to retries times.
Logs whether the task succeeded or failed after all attempts.


// Example function skeleton
function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue > failureProbability) {
            resolve(`${taskName} succeeded`);
        } else {
            reject(`${taskName} failed`);
        }
    });
}

async function executeWithRetry(taskName, retries, failureProbability) {
    // Write your code here
}

executeWithRetry("SampleTask", 3, 0.5);



 */