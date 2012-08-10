/*
  Created by Ramiro Jr. Franco
  See MIT-LICENSE.txt if you're concerned about that.
*/


(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    counter: function(count, options) {
      var limit, settings, updateCount;
      limit = 140;
      settings = {
        alt_placement: false,
        regular_color: '#48a029',
        low_color: '#ffe400',
        out_color: '#e31616',
        debug: false
      };
      settings = $.extend(settings, options);
      if (count) {
        limit = count;
      }
      updateCount = function(field, counter, limit) {
        var cc, color, new_count;
        if (field.val().length > limit) {
          return field.val(field.val().substring(0, limit));
        } else {
          cc = field.val().length;
          if (cc < .8 * limit) {
            color = settings.regular_color;
          } else if (cc < .9 * limit) {
            color = settings.low_color;
          } else {
            color = settings.out_color;
          }
          new_count = limit - field.val().length;
          return counter.css('color', color).text(new_count);
        }
      };
      return this.each(function() {
        var alt, counter, field, span;
        field = $(this);
        span = "<span class=\"counter\">You have <span class=\"remaining\">" + "</span> characters left.</span>";
        if (settings.alt_placement) {
          alt = $(settings.alt_placement);
          alt.after(span);
          counter = alt.next().find('.remaining').first();
        } else {
          field.after(span);
          counter = field.next().find('.remaining').first();
        }
        updateCount(field, counter, limit);
        return field.keyup(function() {
          return updateCount(field, counter, limit);
        });
      });
    }
  });

}).call(this);
