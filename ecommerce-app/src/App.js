import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';


function App() {

  //variable
  var userDetails = {
    firstName: "ARMAN",
    lastName: "SAIKIA",
    email: 'armansaikia12@gmail.com',
    phoneNo: 9876544321,
  };

//functions
  const trigger = () => {
    console.log("EVENT TRIGGERED"); //without parameters
  };

  const showFirstName = (firstName) => {
    console.log(firstName); //anonymous function with parameters
  };

  //return keyword
  return (
    <div className="App">
      <Navbar/>
      <h5>FirstName: {userDetails.firstName}</h5>
      <h5>lastName: {userDetails.lastName}</h5>
      <h5>email: {userDetails.email}</h5>
      <h5>phoneNo: {userDetails.phoneNo}</h5>

      <button onClick = {trigger}> TRIGGERED </button>

      <button onClick={() => showFirstName(userDetails.firstName)}>FIRST NAME</button>  


    </div>
  );
}

export default App;

