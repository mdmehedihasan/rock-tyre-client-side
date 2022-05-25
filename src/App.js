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
import Purchase from './Pages/Dashboard/Purchase';


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
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/addreview' element={<AddReview></AddReview>}></Route>

        <Route path='/product/:productId' element={<Purchase></Purchase>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
