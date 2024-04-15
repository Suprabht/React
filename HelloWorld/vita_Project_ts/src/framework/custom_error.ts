import config from "../../config.json";
import Console from "./custom_console";

class CustomError{
    static log(message:string, errorObject:object)
    {
        if(config.IsErrorLogEnabled)
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
                "Error Message": message,
                "Error Object": errorObject
            });
            Console.log(error);
            Console.log(JSON.stringify(error));
        }
    }
}
export default CustomError;