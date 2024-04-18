
import {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './App.css'
import Header from './components/app/Header';

import Navigation from './components/app/Navbar';
import Config from "../config.json";
import CustomError from './framework/utils/customError'
import MenuItem from './menuItem';

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
 
  /**
   * This onerror function is an special function to handle all unhandled error
   * This is a centralize methord which will be applicable to all pages.
   */
  onerror = (message, source, lineno, colno, error) => {
    
   CustomError.logUnhandledError(message,source, lineno, colno, error);
    return (!Config.ShowUnHandledException);
  };

  /**
   * Below code is to disable some of the events related to browser.
   */
  /*
  document.addEventListener('contextmenu', event => event.preventDefault());

  document.addEventListener('copy', event => event.preventDefault());

  document.addEventListener('cut', event => event.preventDefault());

  document.addEventListener('paste', event => event.preventDefault());

  document.onkeydown = function (event) {
    //prevent key F12
    if (event.keyCode === 123) {
      event.preventDefault();
    }

    //prevent CTRL + Shift + I
    if(event.ctrlKey && event.shiftKey && event.keyCode == 'I'.charCodeAt(0)){
        return false;
    }

    //prevent CTRL + Shift + J
    if(event.ctrlKey && event.shiftKey && event.keyCode == 'J'.charCodeAt(0)){
        return false;
    }

    //prevent CTRL + Shift + C
    if(event.ctrlKey && event.shiftKey && event.keyCode == 'C'.charCodeAt(0)){
       return false;
    }

    //prevent CTRL + U 
    if(event.ctrlKey && event.keyCode == 'U'.charCodeAt(0)){ 
       return false; 
    } 
  };

  document.onmousedown = function (event) {
    if (event.target === document.querySelector('.devtools-icon')) {
      event.preventDefault();
    }
  };
*/


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
    </>
  )

}

export default App
