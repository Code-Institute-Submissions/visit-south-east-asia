# TESTING

## Google Developer Tools

Used to test the responsiveness of the website. Issues with Bootstrap grid identified and amended. The console was used to correct Javascript and loading errors."
Changes to HTML and CSS were tested "on the fly".

Rather than have a top image with functions below I changed it to a background image. This was to make better use of space and improve the overall look of the site.
The idea of having three alternating images was dropped to simplify the design.
This allowed the mobile format to be refuced to one page for improved easy of use and removing the need for a menu option.
This results field was removed from mobile format as it was deemed unnessary and took up too much space.
A "search Area" button was instead next to the "reset" button (for all viewports) in order to improve the ability of the user to easily perform multiple searches.

wireframes had not been uploaded to the current repository. This was amended.

## VALIDATOR W3

the following issues were found and amended HTML:

Warning: The type attribute is unnecessary for JavaScript resources.

script type="text/javascript" src=https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js  

Warning: The type attribute is unnecessary for JavaScript resources.

type="text/javascript" was deleted.

Error: Stray end tag div.

From line 153, column 1; to line 153, column 6

Stray div tag deleted.

## RESPONSINATOR

 used to view how site looks on different formats [responsinator](https://responsinator.com)

All formats were working except footer floating when in landscape view. I created a wrapper div with a min height of 100%. Still not working. 

## ESPREMA SYNTAX VALIDATOR

[esprema](https://esprima.org/demo/validate.html) used for js script validation.

Code was syntactically valid 

## MARKDOWNLINT 

[markdonwlint](https://dlaa.me/markdownlint/)
Used to test .md syntax.

All errors were amended except trailing spaces as none were found. Also line 53 was deemed to be sorrounded by empty lines.

## Manual testing

All countries were tested for correct pan and zoom. Multiple cities were searched for in each country.
After each search scroll and zoom was used to test teh "search area" button to ensure it was returning the correct result.
After each search the "Reset Map" button was tested.

/