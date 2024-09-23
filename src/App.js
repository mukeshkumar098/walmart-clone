
import './App.css';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Home from "./Component/Home/Home"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Contect from './Component/Contect/Contect';
import Login from './Component/Login/Login';
import Items from './Component/Items/Item'
import Product from './Component/Products/Product';
import ProductItem from './Component/ProductsItem/ProductItem'
import Footer from './Component/Footer/Footer';

// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return ( 
       <div className = "App">

        <BrowserRouter>
        <Routes>
            <Route path='/' element={<><Header/><Main/><Items/><Product/><Footer/></>} />
            <Route path='/login' element={<><Login/></>}/>
            <Route path='/product-details' element={<><Header/><ProductItem/></>}/>
        </Routes>
        </BrowserRouter>
        </div>
    
    );
}
export default App;