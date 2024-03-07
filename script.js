function getComputerChoice() {
    let options = ["rock", "paper", "scissor"];
    selectedOption = options[Math.floor(Math.random() * options.length)];
    return selectedOption;
}