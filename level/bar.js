// Description: Script to manage the progression bar of the project
// The script contains a function called projectProgression that takes in the level of the project as a parameter.
// The function calculates the progress of the project based on the level and updates the progression bar accordingly.
// The script also contains a function called switchStatut that switches the status of the project when a project is clicked.
// The script initializes the project progression and status when the document is ready.

$(document).ready(function() {
    let savedLevel = localStorage.getItem('progressLevel');
    if(savedLevel !== null) {
        projectProgression(parseInt(savedLevel)); 
    } else {
        projectProgression(0); 
    }
    switchStatut();
});

// Function to update the progression bar
function projectProgression(level) {
    let totalLevels = 10;
    let progress = ((level - 1) / (totalLevels - 1)) * 100;
    $(".progress-bar").css("width", progress + "%");
    localStorage.setItem('progressLevel', level);
}

// Function to switch the status of the project
function switchStatut() {
      $('#projectName li').on('click', function() {
          let classe = $(this).attr("class");
          if (classe === "li-done") {
              $(this).attr('class', 'li-undone');
              projectProgression();
          } else if (classe === "li-undone") {
              $(this).attr('class', 'li-done');
              projectProgression();
          }
      });
  }