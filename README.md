# Registration Numbers Webapp

Create a web application that displays a registration number plate. Users should be able to type any registration number in the input text field and add it to the list. Users should be able to
filter throw for any registration number of the given towns and be able to see all the registrations add.

## Getting Started

In your projects folder create a registration_numbers_webapp folder. Create an ExpressJS server instance in a index.js file.

Create a file called registration_number.css for your CSS. create a public folder in your projects root folder. You will need to configure express.static middleware to expose your CSS to your route templates.


### Prerequisites

# ExpressJS

.. Setup an ExpressJS server
.. Create a get route with a dynamic parameter
.. Start an ExpressJS server
.. Add a ExpressJS middleware to serve client side files such as CSS & JavaScript using      express.static middleware
.. Use the HttpResponse object’s .send` method to response to the browser.
.. Handlebars

.. Create a Handlebars template file on disk
.. Read the Handlebars template file from disk and store it in a variable
.. Compile the Handlebars template variable
.. Use the compiled Handlebars template to create a Registration number HTML string

### Installing

```
 npm express --save
```


```
 npm express-flash --save
```

```
 npm express-session --save
```

```
 npm express-handlebars --save
```

```
 npm mongoose --save
```

## Deployment

This app has been deployed on heroku configured also datase on mlab

* [registration_numbers_webapp](http://reg-num.herokuapp.com/) - Available

## Built With

* [Bootstrap](http://getbootstrap.com/) - The web framework used

## Authors

* **Yanga Zukelwa** - *Initial work* - [Portfolio](https://yanga93.github.io/portfolio)


## Acknowledgments

* codeX-Team
