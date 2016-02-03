# NFQ Front-End Assignment
An application for NFQ Vilnius front-end developer position.
### Description
This is a single page user and group management system. Site visitor can add and remove users and groups, and assign users to multiple groups. There are two main pages - users and groups, both containing list of either users (name, surname etc. + groups they belong to) and groups (name, description + number of users in a specific group). Adding users and groups is possible by pressing add new red button. All content goes through validations (whether fields are empty). Only then the data is saved localy (in localStorage)
### Technologies used
HTML, CSS3 and Javascript were main markup and language tools used for developing application.
##### Javascript libraries:
* Require.js (for managing dependencies, modular pattern)
* Backbone.js (for MV structure and routing)
* Backbone.js localStorage adapter (for providing utilities to save, fetch, sync data to localStorage)
* Underscore.js (used _.each to itterate lists, and some other useful array function. Also used the templating engine)
* Underscore.js text templates plugin for require.js (allows to write text based templates in any directory relative to the project base directory. Templates are later compiled into the main file too. Good for getting rid of inline templates)
* jQuery (for Backbone $el. Also greatly simplified interaction with DOM).
* R.js (for building - bundling and minifying application)

The project took approximately 6 hours of working time. Application can be launched by opening index.html
