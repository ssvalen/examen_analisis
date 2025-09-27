import { Router } from 'express'
import { fetchAllUsers, fetchUser } from '../services/usuarios.js'
import { fetchAllSongs } from '../services/canciones.js'
const router = Router()

router.get('/api/usuarios', async (req, res) => {
  try {
    const users = await fetchAllUsers()
    res.json(users)
  } catch (error) {
    console.error('Error al obtener usuarios:', error)
    res.status(500).send('Error al obtener mensajes')
  }
})

router.get('/api/canciones', async (req, res) => {
  try {
    const songs = await fetchAllSongs()
    res.json(songs)
  } catch (error) {
    console.error('Error al obtener cancione:', error)
    res.status(500).send('Error al obtener canciones')
  }
})

router.get('/api/obtenerUsuario/:id', async (req, res) => {
  try {
    if(req.params.id) {
      const user = await fetchUser(req.params.id)
      res.json(user)
    } else {
      res.json({msg: 'Debe proporcionar un id de usuario'})
    }
    
  } catch (error) {
    console.error('Error al obtener usuarios:', error)
    res.status(500).send('Error al obtener mensajes')
  }
})

router.get('/api/canciones', async (req, res) => {
  try {
    const users = await fetchAllSongs()
    res.json(users)
  } catch (error) {
    console.error('Error al obtener usuarios:', error)
    res.status(500).send('Error al obtener mensajes')
  }
})

export default router
