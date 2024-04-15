
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/app/Header';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Page404 from './pages/Page404'
import Navigation from './components/app/Navbar';
const App = () => {
  return (
    <>
      <h1 className='content'>My App Page....</h1>
      <Header></Header>
      <BrowserRouter>
        <Navigation></Navigation>   
        <Routes>        
          <Route index element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          <Route path="/*" element={<Page404></Page404>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
