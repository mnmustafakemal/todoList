const textDOM = document.getElementById("text")
const addbtnDOM = document.getElementById("addbtn")
const clearbtnDOM = document.getElementById("clrbtn")

addbtnDOM.addEventListener("click", addtext)
clearbtnDOM.addEventListener("click", cleartext)

function addtext () {
    const tododivDOM = document.getElementById("tododiv")
    let text = document.createElement("li")
    
    event.preventDefault();
    
    text.classList.add("list-group-item", "border", "p-2")
    text.innerHTML = `<input class="form-check-input me-1 ms-2" type="checkbox" value="" id="secondCheckbox">
    <label class="form-check-label" for="secondCheckbox">${textDOM.value}</label>
    <button type="button" class="btn-close  float-end me-2" aria-label="Close"></button>`

    textDOM.value = ""

    tododivDOM.prepend(text)
}

function cleartext() {
    textDOM.value = ""
}
