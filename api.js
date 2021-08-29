document.getElementById("refresh").addEventListener("click", randomize);
// EventListener to pull data when button is clicked

// Function which randomizes a number between 1 and 83 and fetches the JSON data
function randomize(){
    let randomNumber = Math.floor((Math.random() *83))

    fetch(`https://swapi.dev/api/people/${randomNumber}`)
        .then(response => response.json())
        .then(data => console.log(data));
}