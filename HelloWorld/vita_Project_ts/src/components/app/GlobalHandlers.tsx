import CustomError from "../../framework/utils/customError";
import Config from "./../../../config.json";

export const GlobalHandlers = () =>{
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
  
    document.addEventListener('contextmenu', event => (Config.DisableRightClick) && event.preventDefault());

    document.addEventListener('copy', event => (Config.DisableCut) && event.preventDefault());

    document.addEventListener('cut', event => (Config.DisableCopy) && event.preventDefault());

    document.addEventListener('paste', event => (Config.DisablePaste) && event.preventDefault());

    document.onkeydown = function (event) {
        //prevent key F12
        if (event.keyCode === 123) {
            if(Config.PreventkeyF12)
                {
                    event.preventDefault();
                }
        }

        //prevent CTRL + Shift + I
        if(event.ctrlKey && event.shiftKey && event.keyCode == 'I'.charCodeAt(0)){
            return  (Config.PreventCTRLShiftI)? false: true;
            
        }

        //prevent CTRL + Shift + J
        if(event.ctrlKey && event.shiftKey && event.keyCode == 'J'.charCodeAt(0)){
            return (Config.PreventCTRLShiftJ)? false: true;
        }

        //prevent CTRL + Shift + C
        if(event.ctrlKey && event.shiftKey && event.keyCode == 'C'.charCodeAt(0)){
        return (Config.PreventCTRLShiftC)? false: true;
        }

        //prevent CTRL + U 
        if(event.ctrlKey && event.keyCode == 'U'.charCodeAt(0)){ 
        return (Config.PreventCTRLU)? false: true; 
        } 
    };

    document.onmousedown = function (event) {
        if (event.target === document.querySelector('.devtools-icon')) {
        event.preventDefault();
        }
    };

    return(
        <>
            <h1>GlobalHandlers</h1>
        </>
        
    );
};