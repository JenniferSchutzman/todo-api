
const express = require('express')
const app = express()
const {find} = require('ramda')

const todos = [
  {"text":"cancel PF","completed":false,"id":2},
  {"text":"learn new ramda functions from friday","completed":false,"id":3},
  {"text":"laundry","completed":true,"id":4},
  {"text":"study level 5","completed":false,"id":5}
]

function getToDo (id){

  return find(todo => todo.id === Number(id) , todos)
}
//find is like filter but works in an object

app.get('/', (req, res) => res.send('GET to the home / route'))
//this app.get function is a "call back"
//this above is passing a function into a function
//app is the api server, get is pulling the data, and the rest in () is the handle on what to do with the data)
//path routh and endpoint all mean the same thing
//req is for request; res is for response

app.get('/todos',(req,res) => res.send(todos))

app.get('/todos', (req, res) => res.send(todos))

app.get('/todos/:todoID', (req,res) => res.send(getToDo(req.params.todoID)))

app.get('/practing',(req,res) => res.send('This is the practice page.'))

app.get('/apiTest',(req,res) => res.send('Yay we are testing api set up!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
