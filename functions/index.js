import { AutoRouter } from 'itty-router'
import { collections } from '../web/src/app/collections'

const router = AutoRouter()

router
  .get('/api/collections', () => {
    return new Response(JSON.stringify(collections), {
      headers: { 'Content-Type': 'application/json' },
    })
  })
  .get('/api/collections/:id', ({ params }) => {
    const collection = collections.find((c) => c.id === params.id)
    if (collection) {
      return new Response(JSON.stringify(collection), {
        headers: { 'Content-Type': 'application/json' },
      })
    } else {
      return new Response('Collection not found', { status: 404 })
    }
  })
  .get('/api/collections/:id/metadata', ({ params }) => {
    const collection = collections.find((c) => c.id === params.id)
    if (collection) {
      return new Response(JSON.stringify(collection), {
        headers: { 'Content-Type': 'application/json' },
      })
    } else {
      return new Response('Collection not found', { status: 404 })
    }
  })
  .get('/hello/:name', ({ name }) => `Hello, ${name}!`)
  .get('/json', () => [1, 2, 3])
  .get('/promises', () => Promise.resolve('foo'))

export default { ...router }
