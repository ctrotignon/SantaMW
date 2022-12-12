const categoriesRoute = (app,db) => {

    app.get('/', (req,res) => {
        res.json('Bien connecté')
    })

    app.get('/categories',async (req,res) => {
        const responseDB = await db.query("SELECT * FROM categories")     
        res.json({status: 200, responseDB})
    })

    app.get('/categories/:id',async (req,res) => {
        const {id} = req.params;
        const responseDB = await db.query("SELECT * FROM categories WHERE id = (?) ",[id])
        res.json({status:200, responseDB})
        
    })

    app.post('/categories/add', async(req,res) => {

        const {name} = req.body;

        const responseDB = await db.query("INSERT INTO categories (name) VALUES (?)",[name])
        res.json({status:200, responseDB})
        
    })

    app.put('/categories/update/:id', async (req,res) => {
        const {id} = req.params
        const {name} = req.body;
        const responseDB = await db.query("UPDATE categories SET name=? WHERE id=?",[name, id])
        res.json({status:200, responseDB})
    })

    app.delete('/categories/delete/:id', async(req,res) => {
        const {id} = req.params;
        const responseDB = await db.query("DELETE FROM categories WHERE id=?", [id])
        res.json({status:200, responseDB})   
    })
}

module.exports = categoriesRoute;