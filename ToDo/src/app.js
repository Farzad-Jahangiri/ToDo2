const inputTodoTitle = document.getElementById("inputToDoTitle");
const inputTodoDate = document.getElementById("inputToDoDate");
const submit = document.getElementById("submit");

const task = document.getElementById("Task");
const doing = document.getElementById("Doing");
const completed = document.getElementById("completed");



let taslList = [];
let doingList = [];
let completedList = [];


submit.addEventListener("click", () => {
    let title = "";
    let startDate = "";
    let endDate = "2002-22-2";
    title = inputTodoTitle.value;
    startDate = inputTodoDate.value;
    task.innerHTML += creatCard(title, startDate, endDate);
    taslList.push({ Title: title, StartDate: startDate, EndDate: endDate });
    localStorage.setItem("ToDo", JSON.stringify([taslList, doingList, completedList]));
});

function creatCard(title, startDate, endDate, start = "start:", end = "end:") {
    let card = `<div  class="header-card flex flex-col h-170px bg-white border-radius-5 m-5">
<div class="flex-grow-1">
    <div class="flex flex-grow-1">
        <div class="flex flex-grow-1 justify-start align-center">
            <p id="title">${title}</p>
        </div>
        <div class="flex flex-grow-1 justify-end">
            <img id="remove" onclick="remove(this)" src="/icon/close_icon.png" class="w-2 pointer"  alt="image">
        </div>
    </div>
</div>
<div class="flex align-center flex-grow-1">
    <div class=" flex flex-col gap-10">
        <p id="start">${start}${startDate}</p>
        <p id="end">${end}${endDate}</p>
    </div>
</div>
<div class="flex-grow-1 flex align-center">
    <div class="flex justify-between flex-grow-1" >
        <div id="back" onclick="moveTask(this)" style="background-color: aquamarine;" class="w-3 h-2 flex align-center justify-center pointer border-radius-5">
            <img src="/icon/minus_icon.png" class="w-1" alt="image">
        </div>
        <div onclick="moveTask(this)" style="background-color: aquamarine;" class="w-3 h-2 flex align-center justify-center pointer border-radius-5">
            <img src="/icon/question_icon.png" class="w-1" alt="image">
        </div>
        <div id="next" onclick="moveTask(this)" style="background-color: aquamarine;" class="w-3 h-2 flex align-center justify-center pointer border-radius-5">
            <img src="/icon/check_icon.png" class="w-1" alt="image">
        </div>
    </div>
</div>
</div>`;

    return card;
}

function remove(event) {
    let title = event.parentNode.parentNode.parentNode.querySelector("#title").textContent;
    let start = event.parentNode.parentNode.parentNode.parentNode.querySelector("#start").textContent;
    let end = event.parentNode.parentNode.parentNode.parentNode.querySelector("#end").textContent;
    let name = event.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    console.log(name);
    event.parentNode.parentNode.parentNode.parentNode.remove()
    if (name == "Task")
        removeList(taslList, { Title: title, StartDate: start, EndDate: end });
    else if (name == "Doing")
        removeList(doingList, { Title: title, StartDate: start, EndDate: end });
    else
        removeList(completedList, { Title: title, StartDate: start, EndDate: end });

    localStorage.clear();
    localStorage.setItem("ToDo", JSON.stringify([taslList, doingList, completedList]));
}

function removeList(list, value) {
    let index = 0;
    console.log(list);
    list.forEach(el => {
        if (el.Title == value.Title)
            list.splice(index, 1);

        index++;
    });
}

function removeLocalStorage(name, value) {
    const taslValue = JSON.parse(localStorage.getItem(name));
    console.log(taslValue);
}



function moveTask(event) {
    switch (event.id) {
        case "next":
            if (event.parentNode.parentNode.parentNode.parentNode.id == "Task") {
                event.parentNode.parentNode.parentNode.remove();
                let title = event.parentNode.parentNode.parentNode.querySelector("#title").innerHTML;
                let start = event.parentNode.parentNode.parentNode.querySelector("#start").innerHTML;
                let end = event.parentNode.parentNode.parentNode.querySelector("#end").innerHTML;
                doing.innerHTML += creatCard(title, start, end, "", "");
                doingList.push({ Title: title, StartDate: start, EndDate: end });
                // taslList = taslList.filter(item => item !== { Title: title, StartDate: start, EndDate: end });
                removeList(taslList, { Title: title, StartDate: start, EndDate: end });
                localStorage.clear();
                localStorage.setItem("ToDo", JSON.stringify([taslList, doingList, completedList]));
            }
            else if (event.parentNode.parentNode.parentNode.parentNode.id == "Doing") {
                event.parentNode.parentNode.parentNode.remove();
                let title = event.parentNode.parentNode.parentNode.querySelector("#title").innerHTML;
                let start = event.parentNode.parentNode.parentNode.querySelector("#start").innerHTML;
                let end = event.parentNode.parentNode.parentNode.querySelector("#end").innerHTML;
                completed.innerHTML += creatCard(title, start, end, "", "");
                completedList.push({ Title: title, StartDate: start, EndDate: end });
                // doingList = doingList.filter(item => item !== { Title: title, StartDate: start, EndDate: end });
                removeList(doingList, { Title: title, StartDate: start, EndDate: end });
                localStorage.clear();
                localStorage.setItem("ToDo", JSON.stringify([taslList, doingList, completedList]));
            }
            break;

        case "back":
            if (event.parentNode.parentNode.parentNode.parentNode.id == "completed") {
                event.parentNode.parentNode.parentNode.remove();
                let title = event.parentNode.parentNode.parentNode.querySelector("#title").innerHTML;
                let start = event.parentNode.parentNode.parentNode.querySelector("#start").innerHTML;
                let end = event.parentNode.parentNode.parentNode.querySelector("#end").innerHTML;
                doing.innerHTML += creatCard(title, start, end, "", "");
                doingList.push({ Title: title, StartDate: start, EndDate: end });
                // completedList = completedList.filter(item => item !== { Title: title, StartDate: start, EndDate: end });
                removeList(completedList, { Title: title, StartDate: start, EndDate: end });
                localStorage.clear();
                localStorage.setItem("ToDo", JSON.stringify([taslList, doingList, completedList]));
            }
            else if (event.parentNode.parentNode.parentNode.parentNode.id == "Doing") {
                event.parentNode.parentNode.parentNode.remove();
                let title = event.parentNode.parentNode.parentNode.querySelector("#title").innerHTML;
                let start = event.parentNode.parentNode.parentNode.querySelector("#start").innerHTML;
                let end = event.parentNode.parentNode.parentNode.querySelector("#end").innerHTML;
                task.innerHTML += creatCard(title, start, end, "", "");
                taslList.push({ Title: title, StartDate: start, EndDate: end });
                // doingList = doingList.filter(item => item !== { Title: title, StartDate: start, EndDate: end });
                removeList(doingList, { Title: title, StartDate: start, EndDate: end });
                localStorage.clear();
                localStorage.setItem("ToDo", JSON.stringify([taslList, doingList, completedList]));
            }
            break;

        default:
            break;
    }
}

function local() {

    if (localStorage.getItem("ToDo")) {
        const list = JSON.parse(localStorage.getItem("ToDo"));
        let taskDoingcompleted = [task, doing, completed];
        let taskDoingcompletedList = [taslList, doingList, completedList];
        let index = 0;
        list.forEach(element => {
            element.forEach(el => {
                taskDoingcompleted[index].innerHTML += creatCard(el.Title, el.StartDate, el.EndDate,"","");
                taskDoingcompletedList[index].push(el);
            });
            index++;
        });
    }

    console.log(localStorage.getItem("ToDo"));
}

local();