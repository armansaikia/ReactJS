import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import UserInfo from './UserInfo';
import ProductsComponent from './Products';

function App() {

  return (
    <div className="App">
      <Navbar/>
      {/* <UserInfo /> */}
      <ProductsComponent/>
      <Footer />
    </div>  
  );
}

export default App;
