const $ = (selector) => document.querySelector(selector);

let names = [];

class Student {
    constructor(firstName, lastName, score) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.score = score;
    }
}

const displayScores = function () {

    //If the array is empty, read the values from localStorage and populate the array if data exists
    if (names.length === 0) {
        if (localStorage.names)
            names = JSON.parse(localStorage.names);
    }
    console.log(names);

    //Work out the average and write to 'Average Score' textbox
    const total = names.reduce((total, current) => total += current.score, 0);
    if (total > 0) {
        $("#average_score").value = total / names.length;
    }

    //Print the names and scores in the textarea
    const nameString = names.reduce((acc, current) => {
        return acc += `${current.lastName}, ${current.firstName} : ${current.score}\n`;
    }, "");

    $("#scores").value = nameString;

};

const addScore = function () {
    //Read the name and score from the input textboxes and create a student object
    const firstName = $("#first_name").value;
    const lastName = $("#last_name").value;
    const score = parseInt($("#score").value);

    const s1 = new Student(firstName, lastName, score);

    //Add the student object to the array of student objects
    names.push(s1);

    //Write the array to localStorage
    localStorage.names = JSON.stringify(names);

    //Clear the input textboxes
    $("#first_name").value = "";
    $("#last_name").value = "";
    $("#score").value = "";

    //Call the displayScores function to display the scores
    displayScores();
};

const clearScores = function () {
    //Delete all the data from the array and localStorage  
    names.length = 0;
    localStorage.removeItem("names");
    $("#average_score").value = "";
    $("#scores").value = "";

    displayScores();
};

const sortByLastName = function () {
    //sort the array by last name and call displayScores   
    names.sort((a, b) => {
        const name1 = a.lastName.toUpperCase();
        const name2 = b.lastName.toUpperCase();

        if (name1 < name2) {
            return -1;
        } else if (name1 > name2) {
            return 1;
        }
        return 0;
    });
    displayScores();
};

const sortByScore = function () {
    //sort the array by score and call displayScores
    names.sort((a, b) => a.score - b.score);
    displayScores();
};

window.addEventListener('load', () => {
    $("#add_button").addEventListener('click', addScore);
    $("#clear_button").addEventListener('click', clearScores);
    $("#sort_name").addEventListener('click', sortByLastName);
    $("#sort_score").addEventListener('click', sortByScore);
    $("#first_name").focus();
    displayScores();
});

