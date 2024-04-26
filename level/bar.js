$(document).ready(function() {
    projectProgression(0); // Appel initial pour initialiser la barre à 0%
    switchStatut();
});

$(document).ready(function() {
    projectProgression();
    switchStatut();
  });
  
  function projectProgression(level) {
    var totalLevels = 5;
    var progress = ((level - 1) / (totalLevels - 1)) * 100;
    $(".progress-bar").css("width", progress + "%");
}

  
  function switchStatut() {
      $('#projectName li').on('click', function() {
          var classe = $(this).attr("class");
          if (classe === "li-done") {
              $(this).attr('class', 'li-undone');
              projectProgression();
          } else if (classe === "li-undone") {
              $(this).attr('class', 'li-done');
              projectProgression();
          }
      });
  }