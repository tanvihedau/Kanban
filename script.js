const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");

let draggedElement = null;

console.log(todo, progress, done);

const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    // console.log("dragging", e);
    draggedElement = task;
  });
});

function addDragEventsOnColumn(column) {
  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("hover-over");
  });
  column.addEventListener("dragleave", (e) => {
    e.preventDefault();
    column.classList.remove("hover-over");
  });

  column.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  column.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("Dropped", draggedElement, column);
    column.appendChild(draggedElement);
    column.classList.remove("hover-over");
  });
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

/*modal related logic*/ 

const toggleModalButton= document.querySelector("#toggle-modal");
const modalBg = document.querySelector(".modal .bg");
const modal= document.querySelector(".modal");

toggleModalButton.addEventListener("click", ()=>{
 modal.classList.toggle("active");
})
// modalBg.addEventListener("click", ()=>{
//  modal.classList.remove("active");
// })


 /*modal related logic*/   