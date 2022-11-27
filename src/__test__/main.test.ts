/**
 * @jest-environment jsdom
 */

import * as fn from "../ts/functions";
import * as functions from "../ts/main";
import { Todo } from "../ts/models/Todo";

//Testar clearTodos() som anropar removeAllTodos och createHTML
describe("clearTodos function", () => {
  test("should call removeAllTodos", () => {
    //Arrange
    let spy = jest.spyOn(fn, "removeAllTodos").mockReturnValue();
    let todo: Todo[] = [new Todo("Simma", true)];

    //Act
    functions.clearTodos(todo);

    //Assert
    expect(spy).toHaveBeenCalled();
  });

  test("should call createHTML", () => {
    //Arrange
    let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
    let todo: Todo[] = [new Todo("Ät mat", true)];

    //Act
    functions.clearTodos(todo);

    //Assert
    expect(spy).toHaveBeenCalled();
  });
});

//Testar addeventListener som anropar funktionen clearTodos()
test("should be able to click", () => {
  //Arrange
  let spy = jest.spyOn(functions, "init").mockReturnValue();
  document.body.innerHTML = `<button type="button" id="clearTodos">Rensa lista</button>`;
  functions.init();

  //Act
  document.getElementById("clearTodos")?.click();

  //Assert
  expect(spy).toHaveBeenCalled();
});

//Testar toggleTodos som anropar changeTodo och createHTML
describe("toggleTodo function", () => {
  test("shold call changeTodo", () => {
    //Arrange
    let spy = jest.spyOn(fn, "changeTodo").mockReturnValue();
    let todo: Todo = new Todo("simma", true);

    //Act
    functions.toggleTodo(todo);

    //Assert
    expect(spy).toHaveBeenCalled();
  });

  test("should call createHtml", () => {
    let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
    let todo: Todo = new Todo("Ät mat", true);

    //Act
    functions.toggleTodo(todo);

    //Assert
    expect(spy).toHaveBeenCalled();
  });
});


