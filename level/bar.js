$(document).ready(function() {
    let savedLevel = localStorage.getItem('progressLevel');
    if(savedLevel !== null) {
        projectProgression(parseInt(savedLevel)); 
    } else {
        projectProgression(0); 
    }
    switchStatut();
});

function projectProgression(level) {
    let totalLevels = 10;
    let progress = ((level - 1) / (totalLevels - 1)) * 100;
    $(".progress-bar").css("width", progress + "%");
    localStorage.setItem('progressLevel', level);
}
 
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