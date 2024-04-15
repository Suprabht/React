import config from "./../../config.json";

class Console{
    static log(text)
    {
        if(config.IsConsoleEnabled)
        {
            console.log(text)
        }
    }
}
export default Console;