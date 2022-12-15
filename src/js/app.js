import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  setTimeout(()=>{
    window.document.title = "One new message";
    console.log("changing Title");
    
    },3000);

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
