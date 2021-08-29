
// EventListener to pull data when button is clicked
document.getElementById("refresh").addEventListener("click", randomize);

// Function which randomizes a number between 1 and maxRecord and fetches the JSON data
function randomize(){

    // Determination for which category to pull
    let randomCat = Math.floor((Math.random() *5)+1)
    let categories = ["people", "planets", "films", "species", "vehicles", "starships"];
    let category =(`` +categories[randomCat]);

    // Max records for each category
    let maxRecords = [81,59,5,36,38,35];
    let maxRecord = (+maxRecords[randomCat]);
    let randomNumber = Math.floor((Math.random() *`${maxRecord}`)+1)

    // Fetching data with the provided variables from the previous steps
    fetch(`https://swapi.dev/api/${category}/${randomNumber}`)
        .then(response => response.json())
        .then(data => console.log(data));
}