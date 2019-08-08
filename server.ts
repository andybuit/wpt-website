import next from 'next';
import express from "express";
import nextI18NextMiddleware from 'next-i18next/middleware';
import nextI18next from "./i18n";
import connect from "./src/utils/mongodb";

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, dir: './src' })
const handle = nextApp.getRequestHandler()

console.log(process.env.MONGO_URI)

nextApp.prepare().then(async () => {

  const server = express();

  server.use(nextI18NextMiddleware(nextI18next))

  server.get('/a', (req, res) => {
    return nextApp.render(req, res, '/a', req.query)
  })

  server.get('/b', (req, res) => {
    return nextApp.render(req, res, '/b', req.query)
  })

  server.get('/posts/:id', (req, res) => {
    return nextApp.render(req, res, '/posts', { id: req.params.id })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })

  connect({db: process.env.MONGO_URI});
})
