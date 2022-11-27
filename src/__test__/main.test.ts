/**
 * @jest-environment jsdom
 */

import * as fn from "../ts/functions";
import * as functions from "../ts/main";
import { Todo } from "../ts/models/Todo";

//Testar clearTodos() som anropar removeAllTodos och createHTML
describe("clearTodos function", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("should call removeAllTodos", () => {
    //Arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let spy = jest.spyOn(fn, "removeAllTodos").mockReturnValue();
    let todo: Todo[] = [new Todo("Simma", true)];

    //Act
    functions.clearTodos(todo);

    //Assert
    expect(spy).toHaveBeenCalled();
  });

  test("should call createHTML", () => {
    //Arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
    let todo: Todo[] = [new Todo("Ät mat", true)];

    //Act
    functions.clearTodos(todo);

    //Assert
    expect(spy).toHaveBeenCalled();
  });
});

//Testar createHTML inuti toggleTodo, det gick inte att anropa funktionen inuti describe toggleTodo så fick lägga den utanför
test("should call createHtml", () => {
  document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
  let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
  let todo: Todo = new Todo("Gå ut med hunden", true);

  functions.toggleTodo(todo);

  expect(spy).toHaveBeenCalled();
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

describe("submitform", () => {
  test("should add eventListener", () => {
    //Arrange
    let spy = jest.spyOn(functions, "submitform").mockReturnValue();
    document.body.innerHTML = `<form id="newTodoForm"></form>`;
    functions.submitform();

    //Act
    document.getElementById("newTodoText")?.click();

    //Assert
    expect(spy).toHaveBeenCalled();
  });

  test("should create toDoText", () => {
    //Arrange
    let toDoText = document.getElementById("newTodoText") as HTMLInputElement;
    let toDo = toDoText;

    // document.getElementById("newTodoText") as HTMLInputElement;

    //Act
    functions.submitform();

    //Assert
    expect(toDo).toBe(toDoText);
  });
});

describe("createhtml", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

test("createhtml", () => {
  //Arrange
  document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
  let todosContainer = document.getElementById("todos") as HTMLUListElement;
  let todos :Todo[] = [new Todo("Ät mat", true)];

  //Act
  functions.createHtml(todos);

  //Assert
  expect(todosContainer.innerHTML).toBe(`<li class=\"todo__text--done todo__text"\>Ät mat</li>`)
});

test("eventlistener li", () => {

})
});

/**   li.addEventListener("click", () => {
      toggleTodo(todos[i]);
    }); */