import {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './App.css'
import Header from './components/app/Header';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Page404 from './pages/Page404'
import Navigation from './components/app/Navbar';
const App = () => {
  const[theme, setTheme] = useState("day");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;

  const toggleTheme = () => {
    setTheme((theme === "day")?"night":"day")
  }

  return (
    <>      
      <div className={`theme-${theme}`}>
        <h1 className='content'>
           {t('greeting.hello')} 
          {/*t('translations:hello_world')*/}<br></br>
<span>
  Browser Language: {lng}
</span>
        </h1><button onClick={toggleTheme}>Toggle Theme</button>
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
      </div>
    </>
  )
}

export default App
