const $ = (selector) => document.querySelector(selector);

const names = [];

const studentArray = [];

const scoresArray = [];

class Student {
    constructor(first_name, last_name, score) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.score = score;
    }
}

const displayScores = function () {

    //If the array is empty, read the values from localStorage and populate the array

    //Work out the average and write to 'Average Score' textbox

    //Print the names and scores in the textarea


};

const addScore = function () {

    //Read the name and score from the input textboxes and create a student object
    const first_name = $("#first_name").value;
    const last_name = $("#last_name").value;
    const score = $("#score").value;

    //Add the student object to the array of student objects
    const student = new Student(first_name, last_name, score);
    studentArray.push(student);

    //Write the array to localStorage
    localStorage.setItem("studentArray", studentArray);

    //Clear the input textboxes
    const scores = $("#scores").value = "";

    //Call the displayScores function to display the scores
    displayScores();

    console.log();

};

const clearScores = function () {
    //Delete all the data from the array, localStorage and any textboxes that have data
};

const sortByLastName = function () {
    //sort the array by last name and call displayScores
};

const sortByScore = function () {
    //sort the array by score and call displayScores
};

window.addEventListener('load', () => {
    $("#add_button").addEventListener('click', addScore);
    $("#clear_button").addEventListener('click', clearScores);
    $("#sort_name").addEventListener('click', sortByLastName);
    $("#sort_score").addEventListener('click', sortByScore);
    $("#first_name").focus();
    displayScores();
});

