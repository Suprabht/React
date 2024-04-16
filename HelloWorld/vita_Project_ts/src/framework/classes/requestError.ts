export default class requestError {
    requestUrl: string;
    request: string;
    headerOptions:string;
    errorResponse:string;
    errorCode:number;
    errorMessage:string;
    targetSite:string;

    constructor();
    constructor(object: requestError);
    constructor(object?: any) {
        this.requestUrl = object && object.requestUrl || "NO URL";
        this.request = object && object.request || "Null request";
        this.headerOptions = object && object.headerOptions || "No data";
        this.errorResponse = object && object.errorResponse || "No Error Response";
        this.errorCode = object && object.errorCode || 0;
        this.errorMessage = object && object.errorMessage || "No Error Message";
        this.targetSite = object && object.targetSite || window.location.href;
    }
   /* constructor(requestUrl: string, request:string, headerOptions:string, errorResponse:string ) {
        this.requestUrl = requestUrl;
        this.request = request;
        this.headerOptions = headerOptions;
        this.errorResponse = errorResponse;
    } */
}
