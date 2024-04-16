import { AlertType } from '../enums/alertType.enum'

export interface IAlert {
    type: AlertType;
    message: string;
    isVisible: boolean;
}
