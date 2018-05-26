# burger
<h1> 🍔 Eat Da Burger!🍔 </h1>

<h2>Overview</h2>
A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them! Check out the launched app on Heroku <a href="https://guarded-fjord-72010.herokuapp.com/?">HERE</a>

<h2>Functionality</h2>

<b>READ</b> all entries from the MySQL database and display them to the DOM using Handlebars.

<b>UPDATE</b> a selected burger by clicking "Devour It", which hits an /burger/eat/:id route in Express to change its "devoured" status in the MySQL database re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars).

<b>CREATE</b> a new burger using the "Place Order" form, which hits a /burger/create route in Express to insert a new burger into the MySQL database re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars).
