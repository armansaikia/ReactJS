//some--------------------->IT checks for every single statements and returns TRUE/FALSE (LOGICAL OR OPEARATOR)



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
  
  const isRMREXPRESSexist = trainList.some(function(TRAIN_INFO) {
    return TRAIN_INFO.name === "RMR EXPRESS"
  });
  
  console.log("Is RMR eXPESS AVAILABLE", isRMREXPRESSexist);