const express = require('express')
const app = express()
const PORT = 5000
const cors = require('cors')
const db = require('./db')
const path = require('path')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    try {
        res.sendFile()
    } catch (error) {
        console.error(error.message)
    }
})
app.get('/links', async (req, res) => {
    try {
        const getAll = await db.query('SELECT * FROM links')
        res.status(200).json(getAll.rows)
    } catch (error) {
        console.error(error.message)
    }
})
app.get('/links/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deleteLink = await db.query('SELECT name, url FROM link links WHERE id = $1', [id])
        res.json(deleteLink)
    } catch (error) {
        console.error(error.message)
    }
})
app.put('/links/:id', async (req, res) => {
    try {
        const { id } = req.params
        const linkInfo = req.body
        const editLink = await db.query('UPDATE links SET name = $1, url = $2 WHERE id = $3', [linkInfo.name, linkInfo.url, id])
    } catch (error) {
        console.error(error.message)
    }
})
app.post('/links', async (req, res) => {
    try {
        const linkInfo  = req.body
        const newLink = await db.query('INSERT INTO links (name, url) VALUES ($1, $2) RETURNING *', [linkInfo.name, linkInfo.url])
    } catch (error) {
        console.error(error.message)
    }
})
app.delete('/links/:id', async (req, res) => {
    try {
        const {id} = req.params
        const deleteLink = await db.query('DELETE FROM links WHERE id = $1', [id])
        res.json({message: "success"})
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`)
})