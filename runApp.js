var auth = require('./middleware/auth');
var main = require('./routes/main');


function runApp(app) {
    
    app.use(auth);
    app.use(main);
    
    app.listen(1717);
    console.log('Challengee running on 1717');
};

module.exports = runApp;