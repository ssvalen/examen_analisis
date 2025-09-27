import app from './app.js'
import gateway from './routes/gateway.js'

const port = process.env.PORT || 3000


app.use(gateway)






app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})
