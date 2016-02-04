/* globals document, alert */

(function() {

  "use strict";

  var Site = {

    init: function() {
      this.kickOffAnimations();
      this.bindEventAnimations();
    },

    kickOffAnimations: function() {
      
    },

    bindEventAnimations: function() {
      
    },

    drawPath: function(id) {

      var path = document.getElementById(id);

      var length = path.getTotalLength();

      path.style.transition = path.style.WebkitTransition =
        "none";

      path.style.strokeDasharray = length + " " + length;
      path.style.strokeDashoffset = length;

      path.getBoundingClientRect();

      path.style.transition = path.style.WebkitTransition =
        "stroke-dashoffset 1s ease-in-out";
      
      path.style.strokeDashoffset = "0";

    }

  };

  Site.init();

})();
