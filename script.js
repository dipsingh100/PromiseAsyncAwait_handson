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


//-----------------------------------Promise Chaining---------------------------

function fetchData(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("prepbytes")
    },1000) 
  })
}

function processData(data){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(`${data} is processed`)
    },1000) 
  })
}

function calculateData(data){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(data.length)
    },1000) 
  })
}

fetchData().then((data)=>{
  console.log("first task done", data)
  return processData(data)
}).then((data2)=>{
  console.log("second task is also done",data2)
  return calculateData(data2)
}).then((data3)=>{
  console.log("final task is also done",data3)
})


//----------------Async Await----------
function try1(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve("Hello World");
    },1000);  
  });
}

async function run(){
  let data = await try1()
  console.log("ans is ",data)
}

run();