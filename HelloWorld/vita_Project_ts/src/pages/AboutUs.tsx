
import {useState} from 'react';
import CustomConsole from '../framework/utils/customConsole'
import CustomError from '../framework/utils/customError'
const AboutUs = () =>{
    const[inputText, setInputText] = useState("");
  
    const buttonHandler = () => {
      let txt:any = Math.random();
      setInputText(txt) ;
      CustomConsole.log(txt);
      (document.getElementById("demo") as any).value = 123
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