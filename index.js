async function fetchTodos() {
    const response = await fetch('https://ffb3-2409-40f0-11dd-ffc1-d5b1-1b46-a6ac-8c79.ngrok-free.app/todos', {
  headers: {
    'ngrok-skip-browser-warning': 'true'  // Add this header to skip the warning page
  }});

    const todos = await response.json();
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach(todo => {
      const li = document.createElement('li');
      li.textContent = todo.text;
      todoList.appendChild(li);
    });
  }

  async function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value;
    if (todoText) {
      await fetch('https://ffb3-2409-40f0-11dd-ffc1-d5b1-1b46-a6ac-8c79.ngrok-free.app/todos', {
        method: 'POST',
        headers: {
          'ngrok-skip-browser-warning': 'true' ,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: todoText }),
      });
      todoInput.value = '';
      fetchTodos();
    }
  }

  fetchTodos();