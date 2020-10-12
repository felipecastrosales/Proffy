// server
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// configurar nunjucks (template engine)

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

// start and configurations server

server
// receive datas in req.body
.use(express.urlencoded({ extended: true }))
// configure folders estatics (css, scripts, images)
.use(express.static("public"))
//
// aplication roots 
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start server
.listen(5500)
