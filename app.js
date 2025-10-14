// 添加待办事项
function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    if (text === '') return;

    const todoList = document.getElementById('todoList');
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <span onclick="toggleComplete(this)">${text}</span>
        <button class="delete-btn" onclick="deleteTodo(this)">删除</button>
    `;
    todoList.appendChild(todoItem);
    input.value = '';
}

// 标记完成/未完成
function toggleComplete(element) {
    element.parentElement.classList.toggle('completed');
}

// 删除待办事项
function deleteTodo(element) {
    element.parentElement.remove();
}

// 按回车添加待办
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});