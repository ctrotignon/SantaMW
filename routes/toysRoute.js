const toysRoute = (app, db) => {

    app.get('/', async (req,res) => {
        res.json('Bien connecté')
    })

    app.get('/toys/add', async (req,res) => {
        const responseDB = await db.query("SELECT * FROM toys")     
        res.json({status: 200, responseDB})
    })

    app.get('/toys/add/:id', async (req,res) => {
        const {id, name, description, category} = req.body;
        const price = parseInt(req.body.price)
        const responseDB = await db.query("SELECT * FROM toys WHERE id = (?) ",[id])
        res.json({status:200, responseDB})
    })


    app.post('/toys/add', async (req,res) => {
        const {id, name, description, category} = req.body;
        const price = parseInt(req.body.price)
        const responseDB = await db.query("INSERT INTO toys (id, name, description, category, price) SELECT (?, ?, ?, ?, ?) FROM toys WHERE ",[id, name, description, category, price])
        res.json({status:200, responseDB})
    })

    app.put('/toys/change',async (req,res) => {
        const {id} = req.params;
        const responseDB = await db.query("INSERT INTO toys (id, name SELECT (?, ?) FROM toys WHERE",[id, name])
        res.json({status:200, responseDB})
    })

    app.delete('/toys/delete', async(req,res) => {
        const responseDB = await db.query("DELETE FROM toys WHERE id = ?")
        res.json({status:200, responseDB}) 
    })

}

module.exports = toysRoute;