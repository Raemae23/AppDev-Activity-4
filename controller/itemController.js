const itemController = {
    home: (req, res) => {
        res.render('index');
    },
    about: (req, res) => {
        res.render('about');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    services: (req, res) => {
        res.render('services');
    },
    portfolio: (req, res) => {
        res.render('portfolio');
    }
   
};

module.exports = itemController;