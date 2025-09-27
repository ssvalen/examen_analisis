import express from 'express'
import gatewayeRouter from './routes/gateway.js'

const app = express()

app.use(express.json())
app.use(express.static('public'))

// Rutas
app.use('/api/gateway', gatewayeRouter)

export default app