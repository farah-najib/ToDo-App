var taskInput=document.getElementById("new-task");
var addButton=document.getElementById("additem");
var TaskHolder=document.getElementById("listtasks");

var createNewTaskElement=function(taskString){

	var listItem=document.createElement("li");
	var label=document.createElement("label");
	var editInput=document.createElement("input");
	var editButton=document.createElement("button");
	var deleteButton=document.createElement("button");
	label.innerText=taskString;
	editInput.type="text";
	editButton.innerText="Edit";
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}



var addTask=function(){
	console.log("Add Task...");
	var listItem=createNewTaskElement(taskInput.value);
	TaskHolder.appendChild(listItem);
	bindTaskEvents(listItem);
	taskInput.value="";

}



var editTask=function(){
console.log("Edit Task...");
console.log("Change 'edit' to 'save'");
var listItem=this.parentNode;
var editInput=listItem.querySelector('input[type=text]');//var editInput=taskInput;
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode");
		if(containsClass){

			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		listItem.classList.toggle("editMode");
}

var deleteTask=function(){
		console.log("Delete Task...");

		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		ul.removeChild(listItem);
}




addButton.addEventListener("click",addTask);



var bindTaskEvents=function(taskListItem){
	console.log("bind list item events");

	
	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton=taskListItem.querySelector("button.delete");

			editButton.onclick=editTask;
			deleteButton.onclick=deleteTask;
		
}

	for (var i=0; i<TaskHolder.children.length;i++){
		bindTaskEvents(TaskHolder.children[i],taskCompleted);
	}