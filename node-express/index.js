const express = require('express')
const app = express()

app.get(`/api/number/:id`, (req, res) => {
    const id = parseInt(req.params.id)
    const array = new Array()
    if (id % 2 == 0) {
        for (let i = 0; i < id; i++) {
            array.push(i)
        }
        res.json(array)
    } else {
        res.status(500).send("Error 500")
    }
});


app.listen(3000, () => {
    console.log("Server running on port 3000")
})