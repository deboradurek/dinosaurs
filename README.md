# Dinosaurs Project

This project is part of the requirements for the Intermediate JavaScript Nanodegree Program, by Udacity.

## Overview

The goal of this project is to provide practice with:

- Object-Oriented Programming.
- Objects, arrays, classes and functions.
- Methods, scope and closures.
- IIEFs - Immediately-Invoked Function Expressions.
- Constructor functions.
- The `this` keyword.
- Prototypal inheritance
- Design patterns for property privacy.

## About Dinosaurs Project

- This application generates an **infographic** comparing human data and dino data.
- The main page displays a form, where the user should enter some personal data, such as: their name, height (feet and inches), weight, and also the ability to select a diet option.
- When pressing the "Compare Me!" button, the infographic will be created based on the data the user entered and the dino data set in this project. The form will no longer be visible.
- There are a total of 9 tiles, with the human in the center. Each title contains the species, an image, and a fact. For the human tile, only the name is displayed
- The facts displayed are randomly chosen. They can be a comparison of height, weight, diet, or simply a fact for each species.
- The tile with a pigeon always displays the same fact: “All birds are living dinosaurs.”

A simple starter template was provided by Udacity to save time. It contained a static example of the CSS and HTML markup to be used. Modification to these files were made as it was needed.

## Extra Features

Features that were not required by the project rubric were added. They are mentioned here:

- Validate the form data to ensure the data is acceptable and complete.
- Allow the user to generate a new infographic.

## Getting Started

- Initiate the local server by running `npx http-server` inside the project folder.
- If you would like to run it in development mode, make sure to run `npx http-server . -c-1` and hard reload the browser to clean the cache.
