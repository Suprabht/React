import {useState} from 'react';
import './App.css'
import Console from './../../framework/console'
import CustomError from './../../framework/custom_error'


const App = () => {
  const[inputText, setInputText] = useState("");
  
  const buttonHandler = () => {
    let txt = Math.random();
    setInputText(txt) ;
    Console.log(txt);
    try {
      document.getElementById("demo").value = 123
    } catch (err) {
      //throw new Error("New error message", { cause: err });
      CustomError.log("Custome error message", err)
    }
  }

  return (
    <>
      <h1 className='content'>My 1st Project....</h1>
      <button type="button" onClick={buttonHandler} >Click Me!</button>
      <span>{inputText}</span>
     
    </>
  )
}

export default App
