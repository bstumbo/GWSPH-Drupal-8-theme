(function ($) {

  "use strict";
  
  Drupal.behaviors.tinynav = {
  attach: function (context, settings) {
    $('#nav').tinyNav({header: 'Section Pages'});
  }
  };
  
})(jQuery);
