module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `spots` ORDER BY id ASC"; 
        // query database to get all the locations

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render("index.ejs", {
                title: "LateList | View Spots",
                spots: result
            });
        });
    },
    getContactPage: (req, res) => {
        res.render("contact.ejs", {
            title: "LateList | Contact Us",
            message: ''
        });
    }
};