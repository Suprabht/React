import CustomError from "../../framework/utils/customError";

export default class TodoServices{
    private httpClient:any;    
    constructor(httpClient:any){
        this.httpClient = httpClient;
    }

    async getTodos(){
        try{
            const response = await this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
            return response.json();
        }catch(error:any){
            CustomError.log("todoService.tsa :: TodoService :: getTodos :: Handling service call to get Todos", error)
        }
    }

    async createTodo(todo:any){
        try{
            const response = await this.httpClient.post('https://jsonplaceholder.typicode.com/todos', todo);
            return response.json();
        }catch(error:any){
            CustomError.log("todoService.tsa :: TodoService :: getTodos :: Handling service call to get Todos", error)
        }
    }
}