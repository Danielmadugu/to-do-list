document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const newTodoInput = document.querySelector('#new-todo');
    const toDoList = document.querySelector('.toDoList');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!newTodoInput.value.trim()) return;

        const newTodo = document.createElement('li');
        newTodo.classList.add('toDoList__item');
        newTodo.innerText = newTodoInput.value.trim();

        const deleteButton = document.createElement('span');
        deleteButton.classList.add('delete');
        deleteButton.innerText = 'X';
        newTodo.appendChild(deleteButton);

        toDoList.appendChild(newTodo);
        newTodoInput.value = '';

        newTodo.addEventListener('click', () => {
            newTodo.classList.toggle('completed');
        });

        deleteButton.addEventListener('click', () => {
            newTodo.remove();
        });
    
    });
    
});
