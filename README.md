# jQuery Field Counter
## A plugin to count and limit the amount of characters typed into a textarea

Useage once completed should be pretty straight forward, something along the lines of:

```javascript
$('#some-textarea').counter();
```

The default amount of characters ( 140 ) can be adjusted by passing a number into the plugin like so:

```javascript
$('#some-textarea').counter(200);
```

Finally, there are a couple of other options that you can pass into the plugin.

```javascript
$('#some-textarea').counter(165, {
  alt_placement: '#other-element',    // Places the counter text after some other element
  regular_color: '#555',              // Default is #48a029
  low_color: '#222',                  // Default is #ffe400
  out_color: 'red'                    // Default is #e31616
});
```

The alt_placement can be any valid sizzle selector (ie '#box > .child-thing'), in case you're wondering.

This should limit the amount of allowed characters to 140, and create a span above the element that counts how many characters you have left.