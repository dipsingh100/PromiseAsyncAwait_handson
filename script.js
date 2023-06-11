function getSum(num1, num2, callback) {
  var sum = num1 + num2;
  callback(sum);
}

function displaySum(sum) {
  console.log("Sum is: " + sum);
}

getSum(2, 3, displaySum);

setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
      setTimeout(() => {
        console.log("4");
        setTimeout(() => {
          console.log("5");
          setTimeout(() => {
            console.log("6");
            setTimeout(() => {
              console.log("7");
            }, 7000);
          }, 6000);
        }, 5000);
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);


function delayPrint(number, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(number);
      }, delay);
    });
  }
  
  delayPrint(1,1000).then((val)=>{
      console.log(val)
      delayPrint(2,2000).then((val)=>{
          console.log(val)
          delayPrint(3,3000).then((val)=>{
              console.log(val)
              delayPrint(4,4000).then((val)=>{
                  console.log(val)
                  delayPrint(5,5000).then((val)=>{
                      console.log(val)
                      delayPrint(6,6000).then((val)=>{
                          console.log(val)
                          delayPrint(7,7000).then((val)=>{
                              console.log(val)
                          })
                      })
                  })
              })
          })
      })
  })