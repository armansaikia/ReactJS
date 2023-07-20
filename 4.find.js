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
  
  const Users = trainList.find(function(TRAIN_INFO) {
    return TRAIN_INFO.name === "INDB BARELLY EX"
  });
  
  console.log(Users);