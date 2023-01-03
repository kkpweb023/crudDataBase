const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 4000 ;
require('../crudDataBase/config');
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
const Students = require('../crudDataBase/StudentSchema');


app.post('/studentsAdd', jsonParser, async (req, res) => {

    const emailData = await Students.findOne({ email: req.body.email })

    if (emailData) {
        res.send("Email already registered");
    } else if (req.body.email == "") {
        res.send("Email Required");
    } else {
        let data = new Students({
            _id: Math.floor(Math.random() * 1000),
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        })
        let student = await data.save();
        res.send(student)
    }

})

app.get('/studentList', async (req, res) => {
    const studentList = await Students.find({});
    res.send(studentList)
})

app.delete('/delete-student/:_id', async (req, res) => {
    const studentDel = await Students.deleteOne({ _id: req.params._id });
    res.send(studentDel)
})


app.get('/studentView/:_id', async (req, res) => {
    const studentView = await Students.findOne({ _id: req.params._id });
    res.send(studentView)
})


app.put('/studentEdit/:_id', jsonParser, async (req, res) => {

    let result = await Students.updateOne(
        { _id: req.params._id },
        { $set: req.body }
    )
    res.send(result);

})






app.listen(port, () => {
    console.log(`from my port ${port}`)

})