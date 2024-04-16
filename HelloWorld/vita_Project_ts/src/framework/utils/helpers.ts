/*
How to use Helper calss
1. import Utils from './utils'
2. Helper.areNullOrUndefined(["test"]);
*/

export default class Helpers {
    static areNullOrUndefined(array: any[]): boolean
    {
        for (var i = 0; i < array.length; i++) {
            var item = array[i];
            if (item === null || item === undefined) {
                return true;
            }
         }
         return false;
    }

    static convertToBoolean(input:any) : boolean
    {
        if(input ===null || input === undefined){
            return false;
        }

        switch(input) {
            case 'false': {
                return false;
            }
            case 'true': {
                return true;
            }
            case '0':{
                return false;
            }
            case '1':{
                return true;
            }
            case 0:{
                return false;
            }
            case 1:{
                return false;
            }
            default: {
                return false;
            }
         }
    }

    static isNullOrEmpty(str: string): boolean {
        return !str.trim();
    }
}