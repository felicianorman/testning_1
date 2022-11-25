import { IAddResponse } from "./models/IAddResult";
import { Todo } from "./models/Todo";

//Funktion som tillåter oss att addera nya Todos i vår Todo[]
export function addTodo(todoText: string, todos: Todo[]): IAddResponse {
  //Om texten är längre än 2 pushar vi todo i listan
  if (todoText.length > 2) {
    let newTodo = new Todo(todoText, false);
    todos.push(newTodo);
    return { success: true, error: "Du måste ange minst två bokstäver" };
    //Annars vår vi ett felmeddelande
  } else {
    return { success: false, error: "Du måste ange minst två bokstäver" };
  }
}

//Togglar mellan boolean done från models/Todo
export function changeTodo(todo: Todo) {
  todo.done = !todo.done;
}

//Funktion som tar bort alla Todos
export function removeAllTodos(todos: Todo[]) {
  todos.splice(0, todos.length);
}
