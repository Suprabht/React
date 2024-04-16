import { IUser } from "../Interfaces/iUser";

export default class User implements IUser {
    userId: string;
    userEmailId: string;

    constructor();
    constructor(object: IUser);
    constructor(object?: any) {
        this.userId = object && object.userId || null;
        this.userEmailId = object && object.userEmailId || "";
    }
}
