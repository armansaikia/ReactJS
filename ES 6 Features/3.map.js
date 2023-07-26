//map------------------------> whenver we want to modify the data present inside the array we will use map without modifying the source code

const trainList = [
    {
      name: "SECUNDERABAD JN - BAREILLY",
      trainNo: '2222222',
      DEPARTURE: "12:30",
      Arrival: "10:30",
    },
    {
      name: "INDB BARELLY EX",
      trainNo: '2222222',
      DEPARTURE: "12:30",
      Arrival: "12:30",
    },
    {
      name: "KACHEGUDA - BAREILLY",
      trainNo: '2222222',
      DEPARTURE: "12:30",
      Arrival: "13:30",
    },
    {
      name: "RMR EXPRESS",
      trainNo: '2222222',
      DEPARTURE: "12:30",
      Arrival: "11:30",
    }
  ];
  
  const Users = trainList.map(function(TRAIN_INFO) {
    return { ...TRAIN_INFO, name: TRAIN_INFO.name.toLowerCase() }; // converts to lowercase we can do for uppercase as well
    // we use spread operator here ...TRAIN_INFO which creates a new object by extracting from the previous object.
  });
  
  console.log(Users);
  
   
  
 



