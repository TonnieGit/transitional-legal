document.addEventListener('DOMContentLoaded', function(){
  var exitBtn = document.getElementById('quickExit');
  if (exitBtn){
    exitBtn.addEventListener('click', function(){
      window.location.replace('https://www.bom.gov.au/');
    });
  }
  window.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
      window.location.replace('https://www.bom.gov.au/');
    }
  });

  var toggle = document.getElementById('menuToggle');
  var panel = document.getElementById('mobilePanel');
  if (toggle && panel){
    toggle.addEventListener('click', function(){
      var open = panel.style.display === 'block';
      panel.style.display = open ? 'none' : 'block';
      toggle.setAttribute('aria-expanded', String(!open));
    });
  }

  var form = document.getElementById('enquiryForm');
  if (form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var note = document.getElementById('formNote');
      if (note){ note.textContent = 'This is a concept form — nothing was sent. On the live site this would reach the team directly.'; }
    });
  }
});
