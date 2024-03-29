const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const hungNghiem = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    

    connection.query(
        `INSERT INTO 
        Users (email, name, city) 
        VALUES (?, ?, ?)`,
        [email, name, city],
        function(err, results) {
            console.log(results);

            res.send('Created user succeed')
        }
    )

}

module.exports = {
    getHomepage,
    hungNghiem, 
    postCreateUser
}