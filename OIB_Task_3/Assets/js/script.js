// Get references to the input and button elements
const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');

// Add event listeners for button click and Enter key press
btn.addEventListener('click', addList);
input.addEventListener('keyup', (e) => {
    // Check if the Enter key was pressed (keycode 13)
    (e.keyCode === 13 ? addList(e) : null);
});

// Function to add a new task to the list
function addList(e) {
    // Get references to the "notCompleted" and "Completed" task lists
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');

    // Create new elements for the task item, check button, and delete button
    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    // Set the inner HTML content for the new elements
    newLi.innerHTML = '<i class="card_txt"></i>';
    checkBtn.innerHTML = '<i class="fa fa-check chk_btn"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash dlt_btn"></i>';

    // Check if the input value is not empty
    if (input.value !== '') {
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

    // Add event listener for the check button (to mark task as completed)
    checkBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
        delBtn.innerHTML = '<i class="fa fa-trash dlt_btn2"></i>';
    });

    // Add event listener for the delete button (to remove task)
    delBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
    });
}
