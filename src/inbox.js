import { format, compareAsc, isWithinInterval, addWeeks, sub } from "date-fns";
import { inbox } from "./object.js";
import { displayTodo } from "./todo.js";
import { projects, getData } from "./project.js";

let inboxTodos = inbox([]);
let weekInboxTodos = inbox([]);
let todayInboxTodos = inbox([]);

function sortDates(project) {
  format(new Date(), "MM-dd-yyyy");

  project.getTodos().sort(function (a, b) {
    let firstDate = new Date(a.getDuedate());
    let secondDate = new Date(b.getDuedate());
    return compareAsc(firstDate, secondDate);
  });
}

function addTodosToWeekInbox() {
  inboxTodos.getTodos().forEach(getTodo);

  function getTodo(todo) {
    if (
      isWithinInterval(new Date(todo.getDuedate()), {
        start: sub(new Date(), { days: 1 }),
        end: sub(addWeeks(new Date(), 1), { days: 1 }),
      })
    ) {
      weekInboxTodos.setTodo(todo);
    }
  }
}

function displayWeekInboxTodos() {
  weekInboxTodos = inbox([]);
  addTodosToWeekInbox();
  sortDates(weekInboxTodos);
  displayTodo(weekInboxTodos);
}

function addTodosToTodayInbox() {
  inboxTodos.getTodos().forEach(getTodo);

  function getTodo(todo) {
    if (
      isWithinInterval(new Date(todo.getDuedate()), {
        start: sub(new Date(), { days: 1 }),
        end: new Date(),
      })
    ) {
      todayInboxTodos.setTodo(todo);
    }
  }
}

function displayTodayInboxTodos() {
  todayInboxTodos = inbox([]);
  addTodosToTodayInbox();
  sortDates(todayInboxTodos);
  displayTodo(todayInboxTodos);
}

function addTodosToInbox() {
  projects.forEach(getProject);
  function getProject(project) {
    project.getTodos().forEach(getTodo);
    function getTodo(todo) {
      inboxTodos.setTodo(todo);
    }
  }
}

function displayInboxTodos() {
  getData();
  inboxTodos = inbox([]);
  addTodosToInbox();
  sortDates(inboxTodos);
  displayTodo(inboxTodos);
}

export {
  sortDates,
  displayInboxTodos,
  displayTodayInboxTodos,
  displayWeekInboxTodos,
};
