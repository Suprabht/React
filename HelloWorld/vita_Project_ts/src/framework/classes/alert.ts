import { IAlert } from "../Interfaces/iAlert";
import { AlertType } from "../enums/alertType.enum";

export default class Alert implements IAlert {
    type: AlertType;
    message:string;
    isVisible:boolean;

    constructor();
    constructor(object: IAlert);
    constructor(object?: any) {
        this.type = object && object.type || AlertType.Success
        this.message = object && object.message || "Default Message!!"
        this.isVisible = object && object.isVisible || false;
    }
}
