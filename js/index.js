document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("proceedBtn").addEventListener("click", () => {
 
        if (document.getElementById("promiseCheck").checked) {
            window.location.href = "../question.html";
            console.log("Vai alla question");
        } else {
            window.location.href = "../index.html";
            console.log("Rimani nella index");
        }
    })  
});