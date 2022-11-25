
import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
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

test("should toggle between boolean", () => {
    //Arrange
    let todo :Todo = new Todo("Äta mat", true)

    //Act
    changeTodo(todo);

    //Assert
    expect(todo.done).toBe(false);

});

test("should push string into list if the lenght is bigger than 2", () => {
    //Arrange
    let todo :string = "Gymma";
    let myList :Todo[] = [];

    //Act
    addTodo(todo, myList);

    //Arrange
    expect(todo.length).toBeGreaterThan(2);
    expect(myList.length).toBe(1);

});

test("should show error message if its less than 2", () => {
    let todo :string = "A";
    let myList :Todo[] = [];

    addTodo(todo, myList);

    expect(todo.length).toBeLessThan(2);
});
