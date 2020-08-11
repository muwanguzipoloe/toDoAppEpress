loadEvents();

// load every event in the page
function loadEvents(){
    document.querySelector('form').addEventListener('submit', submit);
}

// submit data function
function submit(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTask(input.vale);
    input.value = '';
}

// add tasks
function addTask(task){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="delete">x</span><input type="checkbox"><label>${task}</label>`;
    ul.appendChild(li);
    document.querySelector('.taskBoard').style.display = 'block';
}