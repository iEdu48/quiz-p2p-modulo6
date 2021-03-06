// GET /quizes/question
exports.question = function(req, res) {
    res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

// GET /quizes/answer
exports.answer = function(req, res) {
    if (req.query.respuesta === "Roma") {
        res.render('quizes/answer', {respuesta: 'Correcta'});
    } else {
        res.render('quizes/answer', {respuesta: 'Incorrecta'});
    }
};


// GET /author
exports.author = function(req, res) {
    var data = [];
    var autor = new Object;
    autor['nombre'] = 'Eduardo García';
    autor['imagen'] = '/images/author1.jpg';
    autor['video'] = '/images/Video30sg.MOV';
    data.push(autor);
    //repetir aquí las tres lineas anteriores, para añadir otro autor
    res.render('author', {autores: data});
};
