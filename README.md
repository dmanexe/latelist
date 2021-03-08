# About LateList
Author: Dan Birlem
Author URL: https://danbirlem.com

An simple example MySQL + Node.js CRUD app. Hopefully, this sample app can help people trying to learn Node.js with simple MySQL integration.

Includes a `list` page, `/add` page, `/edit` page and `/delete` function.

# Installation
1. From app root, run `npm install`
1. Import `latelist.sql.zip` to your local database for the three sample listings
1. Update `app.js` with your local MySQL settings. The settings in the repo for `MySQL` are the default settings for what I believe is XAMPP/MAMP/WAMP, etc

# Reccommended: forever
I like to use `forever` to run node servers. You can install with `npm install -g forever`. From the app root, run:
    
    forever start -w ./app.js

Alternatively, if you just want to run the server alone, issue the following command.

    node ./app.js

# Credits

1. **Atauba Prince**  [@achowba > github](http://github.com/achowba) 
2. [Inspiration Project Code](https://dev.to/achowba/build-a-simple-app-using-node-js-and-mysql-19me)
2. [Bootstrap](https://getbootstrap.com/)
3. [npm@body-parser](https://www.npmjs.com/package/body-parser)
4. [npm@ejs](https://www.npmjs.com/package/ejs)
5. [npm@express](https://www.npmjs.com/package/express)
6. [npm@express-fileupload](https://www.npmjs.com/package/express-fileupload)
7. [npm@mysql](https://www.npmjs.com/package/mysql)
8. [npm@req-flash](https://www.npmjs.com/package/req-flash)
9. [npm@forever](https://www.npmjs.com/package/forever)
10. [favicon.cc](https://favicon.cc)
