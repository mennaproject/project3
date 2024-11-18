var x = document.getElementById("copy-btn")
x.onclick = () => {
    alert("Do you want to confirm sending your feedback!");
}
var y = document.getElementById("copy-btn2")
y.onclick = () => {
    alert("Do you want to confirm sending your feedback!");
}
// /////////////////////////////////////////////////////////////////////////////////////////////////// //
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
// ///////////////////////////////////////////////////////////////////////////////////////////////// //
