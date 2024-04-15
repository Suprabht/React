
import {useState} from 'react';
import CustomConsole from '../framework/custom_console'
import CustomError from './../framework/custom_error'
const AboutUs = () =>{
    const[inputText, setInputText] = useState("");
  
    const buttonHandler = () => {
      let txt:any = Math.random();
      setInputText(txt) ;
      CustomConsole.log(txt);
        try {
            (document.getElementById("demo") as any).value = 123
        } catch (err:any) {
            //throw new Error("New error message", { cause: err });
            CustomError.log("Custome error message", err)
            
        }
    }
    return(
        <div>
            <h2>This is AboutUs</h2>
            <button type="button" onClick={buttonHandler} >Click Me!</button>
            <span>{inputText}</span>
        </div>
    );
};
export default AboutUs;