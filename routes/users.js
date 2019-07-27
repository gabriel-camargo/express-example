module.exports = app => {
    app.get('/users', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users: [{
                name: 'Gabriel',
                email: 'gabriel@email.com',
                id: 8,
                app: 'express - consign'
            }]
        });
    });
    
    app.post('/users', (req, res) => {
        
        res.json(req.body);

    });
}