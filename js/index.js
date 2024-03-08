document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("proceedBtn").addEventListener("click", () => {
 
        if (document.getElementById("promiseCheck").checked) {
            window.location.href = "question.html";
            console.log("Vai alla question");
        } else {
            document.getElementsByClassName("msg-error")[0].style.display = "block";
            setTimeout(() => {
                document.getElementsByClassName("msg-error")[0].style.display = "none";
            }, 1500);
        }
    })  
});