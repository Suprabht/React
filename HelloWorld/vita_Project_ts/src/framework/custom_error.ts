import Config from "../../config.json";
import CustomConsole from "./custom_console";

/**
 * Custom Error class for handeling error
 */
class CustomError{
    /**
     * This methord is use to log error in handled error inside try catch block
     * @param message Custom Message while handling the error
     * @param errorObject Error object from Exception
     */
    static log(message:string, errorObject:Object)
    {
        if(Config.IsErrorLogEnabled)
        {
            const error =({
                "Language":navigator.language,
                "Geolocation":navigator.geolocation,
                "OnLine":navigator.onLine,
                "Platform":navigator.platform,
                "Cookie Enabled":navigator.cookieEnabled,
                "Service Worker":navigator.serviceWorker,
                "User Agent":navigator.userAgent,
                "User Agent Data":(window.navigator as any).userAgentData,
                "Window Location Host":window.location.host,
                "Window Location Host Name":window.location.hostname,
                "Window Location Port":window.location.port,
                "Window Location Pathname":window.location.pathname,
                "Window Location Origin":window.location.origin,
                "Window Inner Height":window.innerHeight,
                "Window Inner Width":window.innerWidth,
                "Window Outer Width":window.outerWidth,
                "Window Outer Height":window.outerHeight,
                "Browser Language": window.navigator.language || (window.navigator as any).userLanguage,
                "Error Type": "Handled Errors",
                "Error Message": message,
                "Error Object": JSON.stringify(errorObject)
            });
            CustomConsole.log(error);
            //TODO: `Need to save to server
        }
    }

    static logUnhandledError(message:any, source:any, lineno:any, colno:any, errorObject:any)
    {
        if(Config.IsErrorLogEnabled)
        {
            const error =({
                "Source":source,
                "Lineno":lineno,
                "Colno":colno,
                "Language":navigator.language,
                "Geolocation":navigator.geolocation,
                "OnLine":navigator.onLine,
                "Platform":navigator.platform,
                "Cookie Enabled":navigator.cookieEnabled,
                "Service Worker":navigator.serviceWorker,
                "User Agent":navigator.userAgent,
                "User Agent Data":(window.navigator as any).userAgentData,
                "Window Location Host":window.location.host,
                "Window Location Host Name":window.location.hostname,
                "Window Location Port":window.location.port,
                "Window Location Pathname":window.location.pathname,
                "Window Location Origin":window.location.origin,
                "Window Inner Height":window.innerHeight,
                "Window Inner Width":window.innerWidth,
                "Window Outer Width":window.outerWidth,
                "Window Outer Height":window.outerHeight,
                "Browser Language": window.navigator.language || (window.navigator as any).userLanguage,
                "Error Type": "Handled Errors",
                "Error Message": message,
                "Error Object": JSON.stringify(errorObject)
            });
            CustomConsole.log(error);
            //TODO: `Need to save to server
        }
    }

}
export default CustomError;