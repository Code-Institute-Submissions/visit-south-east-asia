# VISIT SOUTH EAST ASIA

## Code Institute - Milestone Project Two

The objective of this project was to create a simple easy to use interactive website for planning a stay in South East Asia
It is meant to provide a platform where information about hotels in different countries and regions of the area can be obtained.



![bali-boats](https://i.pinimg.com/originals/be/4f/95/be4f95d00fe550eb9048260a72620feb.jpg)

## UX

* Build a website that will be emmidiately approachable for the user. 
* The singular aim of the site should be instantly clear to the user. 
* The user should be able to choose a country and use a search function. 
* This will be with the aim of narrowing down and simplifying the search.
* The site will aim to make it easy for the user to make multiple searches of different areas. 
* The user will also be able to zoom the map in/out in order to narrow/widen the search.
* An easy way to contact the owner will be provided.


## UI

* Mobile first approach to design. 
* No navigation links should be necessary. The reason being that all functions of the site should be easily accesable without it.
* An option to choose the country and city/town the user is interested in visiting.
* The map will zoom to that country/chosen location and provide a list of hotels in the chosen region. 
* Each individual hotel will be clickable in order for the user to link to further information and hotel website.
* A reset button which allow the user to make multiple searches. 
* A contacts form with a text area for the user to contact owner with any issues/questions/requests. 
* Email notification of any request will be provided to owner.
* Links to all company social media accounts. 

## USER STORY

* I am someone who is considering visiting Bali and want an easy way to search for hotels without having to sign up to any travel sites.
* I want to get an idea of what quality/price of hotles in bali are like.



## DEPLOYMENT

## TESTING

### Google Developer Tools. used to test the responsiveness of the website. Issues with Bootstrap grid easily identified and amended. The console was used to correct Javascript and loading errors."
Changes to HTML and CSS were tested "on the fly".

Issue with the follwing function: 
function onPlaceChanged() {
        var place = autocomplete.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(8);
          search();
        } else {
          document.getElementById('autocomplete').placeholder = 'Enter a city';
        }
      }
The map is not panning to the place.geometry.location.
### VALIDATOR W3 used

the following issues were found and amended HTML:


Warning: The type attribute is unnecessary for JavaScript resources.

From line 10, column 5; to line 10, column 106

ript>↩    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js">↩	</sc

Warning: The type attribute is unnecessary for JavaScript resources.

From line 12, column 2; to line 12, column 32

/script>↩	<script type="text/javascript">↩		

Error: Stray end tag div.

From line 153, column 1; to line 153, column 6

>↩↩</div>↩</div>↩↩<div

 ### responsinator used to view how site looks on different formats.
### ESPREMA SYNTAX VALIDATOR for js script validation


## TECHNOLOGIES USED

* HTML
* CSS
* Javascript

## TOOLS 
*e-mailJS 
Balsamiq 3 mockups
Google Maps API 
Github and Gitpod 

## CREDITS:

## Navbar
Bootstrap grid. 

## Map and search boxes
Code adapted from Stack Overflow, Google Maps API and W3schools 

## Social Media Icons 
adapted from font awsome.

## Footer 
Bootstrap grid used.

## INSPIRATION

* Code Institute Student examples







### NOTE: 
This is the second repository created. The branch of the original was not allowing me to maintain version control.
The original repository is: https://github.com/andershup/Visit-South-East-Asia-Milestone-project-two 


## disclaimer:

This website is for aducational purposes only