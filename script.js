let btnChange = document.getElementById('btn-contact');
btnChange.addEventListener("click", onClickContact)

function onClickContact() {
    btnChange.innerHTML = "נשלח";
    btnChange.style.backgroundColor = "gray";
}