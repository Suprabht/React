import config from "../../config.json";

class CustomConsole{
    static log(text:any)
    {
        if(config.IsConsoleEnabled)
        {
            console.log(text)
        }
    }
}
export default CustomConsole;