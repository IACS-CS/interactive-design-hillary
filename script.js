console.log("Hello, Interactive Graphic Design!");
// This is the main JavaScript file for the Interactive Graphic Design project.
// grab all the flipper cards on the page
const allFlippers = document.querySelectorAll(".flipper");

// loop through each flipper card
for (let i = 0; i < allFlippers.length; i++) {
  const currentFlipper = allFlippers[i]; // grab the current flipper
  
  // add a click listener to each flipper
  currentFlipper.addEventListener(
    "click", // when the user clicks
    function () {
      // do this:
      currentFlipper.classList.toggle("flipped"); // add or remove the "flipped" class
    }
  );
}