const controller = {
    index: (req, res) => {
        res.render('index')
    },
    contact:(req,res) => {
        res.render('contact')
    },
    prueba:(req,res) => {
        res.render('prueba')
    }
}

module.exports = controller