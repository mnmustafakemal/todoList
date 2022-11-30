//*****************                          TODO LIST                                      ********************/

let textDOM = document.getElementById("text")
let addbtnDOM = document.getElementById("addbtn")
let clearbtnDOM = document.getElementById("clrbtn")
let todoListDOM = document.getElementById("todoList")
let tododivDOM = document.getElementById("tododiv")
let text = document.createElement("li")

addbtnDOM.addEventListener("click", addtext)
clearbtnDOM.addEventListener("click", cleartext)


function addtext (e) {
    let tododivDOM = document.getElementById("tododiv")
    let text = document.createElement("li")
    let aDOM = document.querySelector("a")
    e.preventDefault();
    

    text.classList.add("list-group-item", "border", "p-2")
    text.innerHTML = `<li class="list-group-item">
        <label class="form-check-label ms-4" for="firstCheckbox"><a href="#">${textDOM.value}</a></label>
    </li>
    `

    textDOM.value = ""

    aDOM.addEventListener("click", function(){
        if (this.style.textDecoration == "none"){
            this.style.textDecoration = "line-through"
        }
        else {
            this.style.textDecoration = "none"
        }
    })


    tododivDOM.prepend(text)
    return
}


function cleartext (e){
    e.preventDefault()
    tododivDOM.innerHTML = `                <ul class="list-group" id="todolist">
    <li class="list-group-item">
        <label class="form-check-label ms-3" for="firstCheckbox"><a href="#">Yazdığım görevler burada listelernir</a></label>
    </li>
</ul>`
}
//********** if click a, text decoration be line-through ************/



