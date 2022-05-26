import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import Login from './Pages/Login/Login';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/Shared/NotFound';
import AddReview from './Pages/Dashboard/AddReview';
import AddProduct from './Pages/Dashboard/AddProduct';
import Purchase from './Pages/Dashboard/Purchase';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/review' element={<AddReview></AddReview>}></Route>

        <Route path='/product/:productId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='product' element={<AddProduct></AddProduct>}></Route>

        </Route>

      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
