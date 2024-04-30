const todoForm=document.querySelector(".form-todo");
const todoInput=document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list")
// console.log(todoInput)//...not working


todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodoText=todoInput.value;          //...not working
    const newLi=document.createElement("li");
    const newLiInnerHTML=`  
        <span class="text">${newTodoText}</span>
                <div class="todo buttons">
                    <button class="todo-btn done">done</button>
                    <button class="todo-btn remove">remove</button>

                </div>`;
    newLi.innerHTML=newLiInnerHTML;
    todoList.append(newLi);
    todoInput.value="";
});
todoList.addEventListener("click",(e)=>{
if(e.target.classList.contains("remove")){
    const targetedLi=e.target.parentNode.parentNode;
    targetedLi.remove();
}
if(e.target.classList.contains("done")){
    const liSpan=e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration="line-through";
}
})