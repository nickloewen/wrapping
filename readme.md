# Wrapping Paper Generator

A web page which generates random text based on simple text input (ie someone’s
name), intended to be printed and used as wrapping paper. Fills the page with
the text when it is printed from the browser.

## Notes

* Browsers insist on adding margins in order to make the printed output fit the page.
  Firefox adds larger margins than Chrome.

## Potential Improvements ('To Do')

* handle long input better: insure that the input is returned in order at least once
* provide an option to highlight the first (or every) instance of the input
  which appears in the correct order

## Bugs (also 'To Do')

* text generated without spaces doesn't print properly (presumably fixable
  with a word-break setting)
