var express = require('express');
var app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const ListTask = require('./models/data');
const User = require('./models/user');

const task = new ListTask({userId: 1, title:'test', completed: false});

app.use(cors({origin: 'http://localhost:3000'}));

app.get('/api/list', async (req, res) => {
    const list = await ListTask.find({});
    res.json(list)
})

app.get('/api/list/:id', async (req, res) => {
    const one = await ListTask.findById({_id: req.params.id});
    res.json(one);
})


app.post('/api/create', function (req, res) {
    res.send('ok');
    const tmp = req.query;
    tmp.userId = 1;
    
    const task = new ListTask(data);
    task.save((err, user) => {
        if (err) {
          console.log('err', err)
        }
    })
});

app.post('/api/user/create', (req, res) => {
    res.send('save user');
    const user = new User(req.query);
    user.save((err, user) => {
        if (err) {
            console.log('err', err)
        }
    })

})


mongoose.connect("mongodb+srv://nefedov:183264@cluster0-wcn4h.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});