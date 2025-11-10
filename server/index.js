import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor rodando' })
})

// Todas as outras rotas vão para o frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
