const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://scontent.ftjl2-1.fna.fbcdn.net/v/t1.0-9/13332978_973537952759492_8325836182095936166_n.jpg?_nc_cat=110&_nc_sid=daf655&_nc_oc=AQls4Ij8pUNDezwaFhz1zUdlxmG2W3AzZsc4vyqNJfO14nz_IcmFwE71FqucD1ascbU&_nc_ht=scontent.ftjl2-1.fna&oh=19384920b3345dd1599b78ce6c8ec0dd&oe=5EEE7D49",
        name: "Régis skate",
        role: "O melhor skatista do mundo",
        description: 'Ele é bom mesmo antes de ter nascido, <a href="https://www.instagram.com/regisskate/" target="_blank">Régis Skate</a> tambem detona no BMX!!!',
        links: [
            { name: "Github", url: "https://github.com/regisskate"},
            { name: "Twitter", url: "https://twitter.com/RegisSkatee"},
            { name: "Linkedin", url: "https://www.linkedin.com/in/reginaldo-jos%C3%A9-dos-santos-b143391a2/"}
        ]
    }
    return res.render("about", { about})
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: videos})
})

server.listen(5000, function () {
    console.log("server is running")
})