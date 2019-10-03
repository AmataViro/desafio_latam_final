var middleware = require("../../jwt/middleware");
const { encryptPassword } = require('../../crypto');

/**
 * 
 * @param {Express} app 
 * @param {Database} db 
 */
const productModule = (app, db) => {
    app.get("/api/product",middleware.ensureToken, async (req, res, next) => {
        var sql = "select * from product"
        var params = []
        db.all(sql, params, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            setTimeout(() => {
                res.json({
                    "message": "success",
                    "data": rows
                })
            }, 2000);
        });
    });


    app.get("/api/product/:id", (req, res, next) => {
        var sql = "select * from product where id = ?"
        var params = [req.params.id]
        db.get(sql, params, (err, row) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            setTimeout(() => {
                res.json({
                    "message": "success",
                    "data": row
                })
            }, 1000);
        });
    });

    // app.post("/api/product", middleware.ensureToken, async (req, res, next) => {
    app.post("/api/product", middleware.ensureToken,async (req, res, next) => {
        console.log(req);
        var errors = []
        if (!req.body.name) {
            errors.push("No name specified");
        }
        if (!req.body.description) {
            errors.push("No description specified");
        }
        if (!req.body.price) {
            errors.push("No price specified");
        }
        if (errors.length) {
            res.status(400).json({ "error": errors.join(",") });
            return;
        }
        var data = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        }
        var sql = 'INSERT INTO product (name, description, price) VALUES (?,?,?)'
        var params = [data.name, data.description, data.price]
        db.run(sql, params, function(err, result) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.json({
                "message": "success",
                "data": data,
                "id": this.lastID
            })
        });
    })



    app.put("/api/product/:id", middleware.ensureToken, async (req, res, next) => {
        var data = {
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        }
        db.run(
            `UPDATE product set 
               name = coalesce(?,name), 
               description = COALESCE(?,description), 
               price = coalesce(?,price) 
               WHERE id = ?`, [data.name, data.description, data.price, data.id],
            (err, result) => {
                if (err) {
                    res.status(400).json({ "error": res.message })
                    return;
                }
                res.json({
                    message: "success",
                    data: data
                })
            });
    })

    // app.delete("/api/product/:id", middleware.ensureToken, (req, res, next) => {
    app.delete("/api/product/:id", middleware.ensureToken, (req, res, next) => {
        db.run(
            'DELETE FROM product WHERE id = ?',
            req.params.id,
            function(err, result) {
                if (err) {
                    res.status(400).json({ "error": res.message })
                    return;
                }
                res.json({ "message": "deleted", rows: this.changes })
            });
    })


    // Root path
    app.get("/", (req, res, next) => {
        res.json({ "message": "Ok" })
    });
}


module.exports = productModule;