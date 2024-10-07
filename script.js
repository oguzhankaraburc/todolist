let taskInput = document.getElementById("task");
let list = document.getElementById("list");

let successToast = document.querySelector('.toast.success');
let errorToast = document.querySelector('.toast.error');

function showToast(toastElement) {
  let toast = new bootstrap.Toast(toastElement);
  toast.show();
}

function newElement() {
  let taskValue = taskInput.value.trim(); 

  if (taskValue === "") {
    showToast(errorToast);
  } else {
    let li = document.createElement("li");
    li.textContent = taskValue;

    li.addEventListener("click", function() {
      li.classList.toggle("checked");
    });

    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("close");
    deleteBtn.onclick = function() {
      this.parentElement.remove();
    };
    
    li.appendChild(deleteBtn); 
    list.appendChild(li); 

    
    showToast(successToast);
    
    taskInput.value = ""; 
  }
}


taskInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    newElement();
  }
});
