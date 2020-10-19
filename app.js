const input = document.querySelector("input");
const button = document.querySelector("button");
const h2 = document.querySelector("h2");

const answers = ["YES", "NO", "Maybe", "Maybe Not", "Probably"];

button.addEventListener("click", () => {
    if (!input.value) {
        input.focus()
    } else if(input.value) {
           let answer = answers[Math.floor(Math.random() * answers.length)];
        input.value = "";
        h2.innerText = answer;
    }
});
