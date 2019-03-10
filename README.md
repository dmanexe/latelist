
# LateList
An simple example MySQL + Node.js CRUD app. Hopefully, this sample app can help people trying to learn Node.js with simple MySQL integration.

Includes a `list` page, `/add` page, `/edit` page and `/delete` function.

# Installation
Go to `/`  and run the following commands.

	npm build
	npm install

# Notes
Make sure you update `app.js` with your local MySQL settings. The settings in the repo for `MySQL` are default settings for XAMPP/MAMP/WAMP, etc.

# Execution
I like to use `forever` to run my server with the following command.
    
    forever start -w ./app.js

I usually refrain from installing anything with `-g` but forever is so useful. You can install `forever` globally with `npm` using the following command.

    npm install -g forever

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
