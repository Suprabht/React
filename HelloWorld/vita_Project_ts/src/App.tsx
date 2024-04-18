
import {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './App.css'
import Header from './components/app/Header';

import Navigation from './components/app/Navbar';
import MenuItem from './menuItem';
import GlobalHandlers from './components/app/GlobalHandlers';

const App = () => {
  const[theme, setTheme] = useState("day");
   const { t, i18n } = useTranslation();
  
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])

  const toggleTheme = () => {
    setTheme((theme === "day")?"night":"day")
  }
 
  return (
    <>      
      <Header></Header>
      <div className={`theme-${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
        <BrowserRouter>
        <Navigation></Navigation>   
          <Routes>
            {MenuItem.Routes().map((route:any, index:any) => (
              <Route
                key={index}
                path={route.route}
                Component={route.component}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
      <GlobalHandlers></GlobalHandlers>
    </>
  )

}

export default App
