###
  Created by Ramiro Jr. Franco
  See MIT-LICENSE.txt if you're concerned about that.
###

$ = jQuery

$.fn.extend
  counter: (count, options) ->
    limit = 140
    settings =
      alt_placement: false
      regular_color: '#48a029'
      low_color: '#ffe400'
      out_color: '#e31616'
      debug: false

    settings = $.extend settings, options
    if count then limit = count

    # Define how updates are made
    updateCount = (field, counter, limit) ->
      if field.val().length > limit
        field.val(field.val().substring 0, limit)
      else
        cc = field.val().length
        if cc < .8 * limit
          color = settings.regular_color
        else if cc < .9 * limit 
          color = settings.low_color
        else
          color = settings.out_color
        new_count = limit - field.val().length
        counter.css('color', color).text(new_count)

    return @each () ->
      # Make this easier to get to :-)
      field = $(this)
      # Define the counter element
      span = "<span class=\"counter\">You have <span class=\"remaining\">#{}</span> characters left.</span>"

      # Set counter field
      if settings.alt_placement
        alt = $(settings.alt_placement)
        alt.after span
        counter = alt.next().find('.remaining').first()
      else
        field.after span
        counter = field.next().find('.remaining').first()

      # Start make updates
      updateCount(field, counter, limit)
      field.keyup ->
        updateCount(field, counter, limit)
