import config from "../../../config.json";

/**
 * Custom Console class for handeling console
 */
export default class CustomConsole{
    static log(text:any)
    {
        if(config.IsConsoleEnabled)
        {
            console.log(text)
        }
    }
    /*
    * TODO: - Refactor to add more methords of console
    *       - add other overloaded methords
    * */
}
