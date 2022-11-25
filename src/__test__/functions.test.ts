
import { changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

//Testar removeAllTodos funktionen
test("should remove all in list", () => {
    //Arrange
    let myList :Todo[] = [new Todo("Titta på tv", true), new Todo("Gå ut med hunden", true)];

    //Act
    removeAllTodos(myList);

    //Assert
    expect(myList.length).toBe(0);
});


/**export function changeTodo(todo: Todo) {
  todo.done = !todo.done;
}
 */

test("should toggle between boolean", () => {
    //Arrange
    let todo :Todo = new Todo("Äta mat", true)

    //Act
    changeTodo(todo);

    //Assert
    expect(todo.done).toBe(false);

});