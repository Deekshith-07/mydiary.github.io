function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


document.getElementById("storiesButton").addEventListener("click", function () {
    window.location.href = "stories.html";
});

document.getElementById("poemsButton").addEventListener("click", function () {
    window.location.href = "poems.html";
});

// document.getElementById("submitButton").addEventListener("click", function () {
//     // Redirect to the contact.html page
//     window.location.href = "submission.html";
// });