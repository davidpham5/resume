# Resume 

My resume as presented as a web app. Using AngularJS, Grunt, Bower, and Yo stack, illustrates my abilities as a front-end developer.

# How To Run
1. run `npm install bower grunt-cli yo` for initial setup.
2. execute `bower install` and next
3. for a local setup, do `grunt` and then `grunt serve`. 
4. to setup github pages, you will need to change some paths
	- `app/app.js` uncomment the templateUrl paths. Make sure to comment the other one.
	- `app/views/main.html` uncomment the path to image and `work-experience.html`. Make sure to comment the other one
	- Then follow the [github pages tutorial](https://help.github.com/articles/creating-project-pages-manually/) to manually generate the pages

