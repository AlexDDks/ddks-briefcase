const controller = {

    photos: (req, res) => {
        res.render('photos')
    },
    photo1: (req, res) => {
        res.render('photo1')
    },
    photo2: (req, res) => {
        res.render('photo2')
    },
    photo3: (req, res) => {
        res.render('photo3')
    },
    photo4: (req, res) => {
        res.render('photo4')
    },
    photo5: (req, res) => {
        res.render('photo5')
    }
}

module.exports = controller