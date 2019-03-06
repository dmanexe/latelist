const fs = require('fs');

module.exports = {
    addSpotPage: (req, res) => {
        res.render("add-location.ejs", {
            title: "LateList | New Spot",
            message: ''
        });
    },
    addSpot: (req, res) => {
        if (!req.files) {
            return res.status(400).send("No files were uploaded.");
        }
        /*
        let message = '';
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let position = req.body.position;
        let number = req.body.number;
        let username = req.body.username;
        */
        let message = '';
        let uploadedFile = req.files.image;
        let image_name = uploadedFile.name;
        let spot_title = req.body.spot_title;
        let spot_address = req.body.spot_address;
        let spot_locale = req.body.spot_locale;
        let spot_description = req.body.spot_description;
        let spot_username = req.body.spot_username;
        let fileExtension = uploadedFile.mimetype.split('/')[1];
        image_name = spot_username + '.' + fileExtension;

        let usernameQuery = "SELECT * FROM `spots` WHERE spot_username = '" + spot_username + "'";

        db.query(usernameQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Spot name already exists';
                res.render('add-location.ejs', {
                    title: "LateList | New Spot",
                    message
                });
            } else {
                // check the filetype before uploading it
                if (uploadedFile.mimetype === 'image/png' || uploadedFile.mimetype === 'image/jpeg' || uploadedFile.mimetype === 'image/gif') {
                    // upload the file to the /public/assets/img directory
                    uploadedFile.mv(`public/assets/img/${image_name}`, (err ) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        // send the spot's details to the database
                        //let query = "INSERT INTO `locations` (first_name, last_name, position, number, image, user_name) VALUES ('" +
                            //first_name + "', '" + last_name + "', '" + position + "', '" + number + "', '" + image_name + "', '" + username + "')";
                        let query = "INSERT INTO `spots` (spot_title, spot_address, spot_locale, spot_description, spot_username, image) VALUES ('" +
                            spot_title + "', '" + spot_address + "', '" + spot_locale + "', '" + spot_description + "', '" + spot_username + "', '" + image_name + "')";

                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            res.redirect('/');
                        });
                    });
                } else {
                    message = "Invalid File format. Only 'gif', 'jpeg' and 'png' images are allowed.";
                    res.render('add-location.ejs', {
                        message,
                        title: "LateList | New Spot"
                    });
                }
            }
        });
    },
    editSpotPage: (req, res) => {
        let spotId = req.params.id;
        let query = "SELECT * FROM `spots` WHERE id = '" + spotId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-location.ejs', {
                title: "Edit Spot",
                spot: result[0],
                message: ''
            });
        });
    },
    editSpot: (req, res) => {
        /* let playerId = req.params.id;
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let position = req.body.position;
        let number = req.body.number; */

        //let uploadedFile = req.files.image;
        //let image_name = uploadedFile.name;
        
        let spotId = req.params.id;
        let spot_title = req.body.spot_title;
        let spot_address = req.body.spot_address;
        let spot_locale = req.body.spot_locale;
        let spot_description = req.body.spot_description;
        let spot_username = req.body.spot_username;

        let query = "UPDATE `spots` SET `spot_title` = '" + spot_title + "', `spot_address` = '" + spot_address + 
            "', `spot_locale` = '" + spot_locale + "', `spot_description` = '" + spot_description + "' WHERE `spots`.`id` = '" + spotId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    deleteSpot: (req, res) => {
        let spotId = req.params.id;
        let getImageQuery = 'SELECT image from `spots` WHERE id = "' + spotId + '"';
        let deleteUserQuery = 'DELETE FROM spots WHERE id = "' + spotId + '"';

        db.query(getImageQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            let image = result[0].image;

            fs.unlink(`public/assets/img/${image}`, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
                db.query(deleteUserQuery, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
            });
        });
    }
};
