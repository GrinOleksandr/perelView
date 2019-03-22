# PerelView test-project

**Task:** Create an HTML5 mobile web application.

**Description:**
We are looking for a frontend developer who will be responsible for the creation of a modern HTML5 web app. In this assignment, you need to create such application using a PSD template attached below. The template is for mobile view only (we will not check the desktop version). It also contains a form which should submit data without page reloading.
Additionally (but not required), you can add Google Tag Manager Data Layer.

**Functional requirements:**
The first section contains a slider that should work on all modern phones (starting at iPhone 6, Samsung galaxy 6). We’re using Slick or Owl Carousel, but you also have an option to use your own. 
The second section contains a “Contact form”. The form should submit user data without page reloading. You are not required to send form data, simply log it in the console.
The footer section contains a “Click to Call” button, which will allow the user to make a call.
To submit a GTM event, after form submission you need to push the event into the global dataLayer array, for ex.: 
dataLayer.push({ event: “submitContactForm”, formData: {...} })

## Client-side
This site is fully responsive, so it looks well on any davice including desktop.

I used HTML5, CSS, JavaScript.

A responsive slider built using Slick.

**Preview** - https://grinoleksandr.github.io/perelView/

### The form has dynamic validation and uses such pattern for Hebrew:
    let legalCharsAndSymbols = new RegExp("^[a-zA-Z\u0590-\u05fe '\"-]+$");
    let  emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
    let regPhoneNumber = /^(02|03|04|06|08|09|072|074|076|077|078|079|050|051|052|053|054|055|056|058|059)((?:(?![1,0]{1}))\d{7})$/,

This website also has ServiceWorker serving it. So it can be used both, online and offline. It uses "Network or cache" caching strategie.

This website is Progressive Web App, so you can install it on any device.

## Server-side
I also created a server, running on Node.JS to retrieve a time in Israel timezone, and to check, if contact center is closed or not, and, if it is closed - hide "Click to call button".

Server returns whether contact center is closed or not on https://perelview.herokuapp.com/isclosed
### Contact center works hours:
Sunday-Thursday 8:00-17:00
Friday          8:00-12:00

### Server uses:
Node.JS, Express, moment.js

Server is deployed on heroku

**Sources** - https://github.com/GrinOleksandr/perelViewServer















       