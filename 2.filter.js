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
  
  const filteredUsers = trainList.filter(function(TRAIN_INFO) {
    return TRAIN_INFO.Arrival === "12:30"; // we have to use return statement 
  });

  const filteredUsers2 = trainList.filter(function(TRAIN_INFO) {
    return TRAIN_INFO.Arrival === "13:30"; // we have to use return statement 
  });
  
   console.log(filteredUsers);
   console.log(filteredUsers2);
  
   //console.log(TRAIN_INFO.name)



