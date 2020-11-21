"use strict";

const $ = selector => document.querySelector(selector);

const scores = [];

const addScore = () => {
    // copy code from part 1 here..
};

const deleteScore = () => {

};

document.addEventListener('DOMContentLoaded', () => {
    $('#add_score').addEventListener('click', addScore);
    $('#delete_score').addEventListener('click', deleteScore);
    
});