document.getElementsByClassName("toggle-password")[0].addEventListener("mousedown", ()=>{
  console.log("hello")
  document
    .getElementsByClassName("toggle-password")[0]
    .classList.remove("fa-eye-slash");
  document.getElementById("password-field").type = "text"



})




document
  .getElementsByClassName("toggle-password")[0]
  .addEventListener("mouseup", () => {
    document
    .getElementsByClassName("toggle-password")[0]
    .classList.add("fa-eye-slash");

  document.getElementById("password-field").type = "password";

    
  });