const form = document.querySelector("form");
const input = document.querySelector("[name='todo']");
const todoList = document.getElementById("todos")

const existingTodos = JSON.parse(localStorage.getItem('todos'));
const todoData = existingTodos || [];

function addTodo(todoText) {
    todoData.push(todoText);
    const li = document.createElement('li');
    li.innerHTML = todoText;
    li.classList.add("w-[100%]", "h-8", "text-center", "pt-1", "box-border", "odd:bg-extraone", "even:bg-extraTwo", "selection:bg-dark", "selection:text-light", "selection:underline", "font-mono");
    todoList.appendChild(li);
    localStorage.setItem('todos', JSON.stringify(todoData));
}

todoData.forEach(todo => {
    addTodo(todo);
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value.trim(); // Trim whitespace from the input
    if (todoText) {
        addTodo(todoText);
        input.value = "";
    }
});