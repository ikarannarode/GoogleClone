
var wname = document.querySelector('#name');
var url = document.querySelector('#url');
let mainbtn = document.querySelector('.add-fav');
let shortcutLink = document.querySelector('.btn-event');
const btn = document.querySelector('#proceed');
url.addEventListener('keyup', () => {
    if (url.value.length > 2) {
        btn.setAttribute('class', "btn btn-secondary modal-btn active")
        btn.addEventListener('click', Add)


    }
    else {
        btn.setAttribute('class', "btn btn-secondary modal-btn inactive")

    }
})


function Add() {
    let val1 = url.value;
    let val2 = wname.value;

    btn.setAttribute('data-dismiss', 'modal');
    //Element Creation
    mainbtn.innerHTML = ` 
        <button class="circle"><div class="cir">${val2[0]}</div>
        </button><span class='add-fav-txt'>${val2}</span>`
    shortcutLink.setAttribute("href", `${val1}`);
    mainbtn.removeAttribute('data-toggle');
    mainbtn.removeAttribute('data-target');
};





