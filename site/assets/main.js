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

  // Scroll-triggered entry animations for repeated content (cards, stats, steps).
  // Elements get the class here (not in markup) so a page with JS disabled
  // never ends up with hidden content.
  var revealSelectors = [
    '.p-card', '.team-card', '.i-card', '.loc-card', '.process-step',
    '.trust-item', '.stat', '.other-card', '.mode-card', '.story-col',
    '.story-panel', '.section-head', '.foot-office', '.contact-form',
    '.contact-info', '.memberships .chip'
  ];
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(revealSelectors.join(',')));
  var groupIndex = new Map();
  revealEls.forEach(function(el){
    el.classList.add('reveal');
    var parent = el.parentElement;
    var idx = groupIndex.get(parent) || 0;
    groupIndex.set(parent, idx + 1);
    el.style.transitionDelay = (Math.min(idx, 5) * 70) + 'ms';
  });

  if ('IntersectionObserver' in window && revealEls.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, {threshold: 0.12, rootMargin: '0px 0px -40px 0px'});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('is-visible'); });
  }
});
