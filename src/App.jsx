import { Route, Routes } from "react-router-dom"
import HomeScreen from './components/home/HomeScreen'
import LoginScreen from './components/login/LoginScreen'
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes'
import CartScreen from './components/Cart/CartScreen'
import PurchasesScreen from './components/purchases/PurchasesScreen'
import HeaderScreen from './components/shared/HeaderScreen'
import { useDispatch} from "react-redux";
import ProductsScreen from "./components/products/ProductsScreen"
import { getAllProducts } from "./store/slices/products.slice"
import { useEffect } from "react"
import axios from "axios"

function App() {

/* cree el usuario */
  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   const user = {
      
  //       firstName: "hernan",
  //       lastName: "nashe",
  //       email: "wep@gmail.com",
  //       password: "holahola",
  //       phone: "1234567891",
  //       role: "admin"
    
  //   }
  //   axios.post(URL, user)
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err))
  // }, [])

const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="App">
    <HeaderScreen/>
     <Routes>
      <Route path='/' element={<HomeScreen/> }/>
      <Route path='/login' element={<LoginScreen/>}/>

      <Route element={<ProtectedRoutes isLgged={true}/>}>
        <Route path='/cart' element={<CartScreen/>}/>
        <Route path='/purchases' element={<PurchasesScreen/>}/>
      </Route>
      <Route path='/shop/:id' element={<ProductsScreen/>}/>
     </Routes>
    </div>
  )
}

export default App
