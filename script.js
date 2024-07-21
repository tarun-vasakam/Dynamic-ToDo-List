function addtask() {
    let newli= document.querySelector('.inputbox').value
    if (newli!==""){
        let li= document.createElement("li")
        li.innerText= newli
        li.classList.add("list-ele")
        let newtask= document.querySelector(".addinto")
        newtask.appendChild(li)
        document.querySelector('.inputbox').value= ""

        let del= document.createElement("button")
        del.innerText= "Delete"
        del.classList.add("delete-btn")
        del.onclick= function del(){
            li.remove()
        }
        li.appendChild(del)
    } 
    else {
        alert("Add a task first!")
    }
}