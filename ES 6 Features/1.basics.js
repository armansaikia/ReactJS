const trainList = [
    {
      name : "SECUNDERABAD JN - BAREILLY",
      trainNo: '2222222',
      DEPARTURE: "12:30",
      Arrival: "12:30",

    },

    {
        name : "INDB BARELLY EX",
        trainNo: '2222222',
        DEPARTURE: "12:30",
        Arrival: "12:30",
  
      },


      {
        name : "KACHEGUDA - BAREILLY",
        trainNo: '2222222',
        DEPARTURE: "12:30",
        Arrival: "12:30",
  
      },


      {
        name : "RMR EXPRESS",
        trainNo: '2222222',
        DEPARTURE: "12:30",
        Arrival: "12:30",
  
      }
]

// console.log(trainList[3].name)

// In case we need to fetch data of 100 trains we will use for-loop

// for(let i=0;i<trainList.length;i++){

//     console.log("Train List:" ,trainList[i].name);
// }



//Instead of using for-loop we will use forEach to iterate data in an array (ALTERNATIVE FOR for-loop)

// trainList.forEach(function(TRAIN_INFO){

//     console.log(TRAIN_INFO.name,TRAIN_INFO.Arrival)

// })




//to use arrow function we will remove the function keyword followed by =>

trainList.forEach((TRAIN_INFO) => {

    console.log(TRAIN_INFO.name,TRAIN_INFO.Arrival)

})

