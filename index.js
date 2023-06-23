let button = document.getElementById("jokeBtn");
let text = document.getElementById("jokeText");
let url = "https://apis.ccbp.in/jokes/random";
let spin = document.getElementById("spinner");

let option = {
    method: "GET"
}
button.onclick = function() {
    spin.classList.remove("d-none")
    fetch(url, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            spin.classList.add("d-none")
            text.textContent = data.value;
        })
}