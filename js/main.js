//*****************                          TODO LIST                                      ********************/

let textDOM = document.getElementById("text")
let addbtnDOM = document.getElementById("addbtn")
let clearbtnDOM = document.getElementById("clrbtn")
let todoListDOM = document.getElementById("todoList")
let tododivDOM = document.getElementById("tododiv")
let text = document.createElement("li")
let alertDOM = document.getElementById("alert")
let successDOM = document.getElementById("success")
let aDOM = document.querySelector("a")

addbtnDOM.addEventListener("click", addtext)
clearbtnDOM.addEventListener("click", cleartext)

function addtext (e) {
    let tododivDOM = document.getElementById("tododiv")
    let text = document.createElement("li")
    let aDOM = document.querySelector("a")
    e.preventDefault();
    
    if(textDOM.value.length < 1){
        alertDOM.classList.remove("d-none")

        setTimeout(function(){alertDOM.classList.add("d-none")}, 5000)
    }
    else {
        text.classList.add("list-group-item", "border", "rounded", "p-2", "bg-white", "shadow-lg")
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

        successDOM.classList.remove("d-none")

        setTimeout(function(){successDOM.classList.add("d-none")}, 3000)

    }


    
    return
}


function cleartext (e){
    e.preventDefault()
    tododivDOM.innerHTML = `                <ul class="list-group" id="todolist">
    <li class="list-group-item">
        <label class="form-check-label ms-3" for="firstCheckbox"><a href="#">Yazdığım görevler burada listelenir</a></label>
    </li>
</ul>`
}

let alertclsbtnDOM = document.getElementById("alertclsbtn")
alertclsbtnDOM.addEventListener("click", function(){
    alertDOM.classList.add("d-none")
})
