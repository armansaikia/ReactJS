//Promises-- while we do API call , we will get response from server then we will deceide whether to call resolve function or reject function

// if resolved then it will go to then block else catch block for error









const taskPromise = new Promise(function(resolve, reject) {  
    const isCompleted = false;
    if (isCompleted) {
        resolve('Completed');
    } else {
        reject('Not Completed');
    }
});       // Based on API it will decide whether it is a succes response or failure response


          // below promise we are going to use in REACT

          // then is used for success response and catch is for failure response
​

    taskPromise.then(function(response) {        
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });


