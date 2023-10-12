const handleChange = () => {
    const input = document.querySelector("input");
    const val = input.value;
    const ul = document.querySelector(".display-contents");

    const li = document.createElement("li");
    li.textContent = val;

    const button = document.createElement("button");
    button.textContent = "Remove";
    button.classList.add("submit-button")
    button.addEventListener("click", () => {
        ul.removeChild(li);
    });

    li.appendChild(button);
    ul.appendChild(li);

    // Clear the input value after appending the elements
    input.value = "";
};
