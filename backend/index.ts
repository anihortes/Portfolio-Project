import bodyParser from 'body-parser'
import cors from 'cors'
import express, { NextFunction, Request, response, Response } from 'express'

const app = express()
const router = express.Router()
const port = 3000
const rootFilePath = './assets'

app.use(cors({ origin: "http://localhost:4200" }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

router.get('/', (request: Request, response: Response) => {
  response.json({ info: 'temp string' })
})

router.get('/logo', async (request: Request, response: Response) => {
  await response.download(`${rootFilePath}/logo.png`, 'myLogo.png')
})

type User = {
  id: number
  firstName: string
  lastName: string
  email: string
}

type Note = {
  id: number
  day: number
  month: number
  comments: string
}

const notes: Note[] = [
  {
    id: 0,
    day: 20,
    month: 1,
    comments: "notes"
  },

  {
    id: 1,
    day: 29,
    month: 2,
    comments: "other notes"
  }
]

const users: User[] = [
  {
    id: 0,
    firstName: 'Jo',
    lastName: 'Smith',
    email: 'jo.smith@gmail.com'
  },
  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@gmail.com'
  },
  {
    id: 2,
    firstName: 'Bob',
    lastName: 'Brown',
    email: 'bob.brown@gmail.com'
  },
]

router.post('note', createNote)
router.delete('/note/:noteID', deleteUser)
router.get('/note/:noteID', getNote)
router.get('/notes', getNotes)
router.put('/note/:noteID', updateNote)


router.post('/user', createUser)
router.delete('/user/:userID', deleteUser)
router.get('/user/:userID', getUser)
router.get('/users', getUsers)
router.put('/user/:userID', updateUser)

/** List of HTTP response status codes https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses */

async function createNote(request: Request, response: Response, next: NextFunction){
  const note = request.body as Note
  const randomID = parseInt(crypto.randomUUID())

  note.id = randomID

  notes.push(note)

  response.status(201).json(note)
}

async function createUser(request: Request, response: Response, next: NextFunction) {
  const user = request.body as User
  const randomID = parseInt(crypto.randomUUID())

  user.id = randomID

  users.push(user)

  response.status(201).json(user)
}

async function deleteNote(request: Request, response: Response, next: NextFunction){
  const noteID = parseInt(request.params.noteID)
  const noteIndex = notes.findIndex(note => note.id == noteID)

  if (noteID > -1){
    notes.splice(noteIndex, 1)

    response.status(200).send()
  }
  else{
    response.status(404).send()
  }

}

async function deleteUser(request: Request, response: Response, next: NextFunction) {
  const userID = parseInt(request.params.userID)
  const userIndex = users.findIndex(user => user.id == userID)

  if (userIndex > -1) {
    users.splice(userIndex, 1)

    response.status(200).send()
  } else {
    response.status(404).send()
  }
}

async function getNote(request: Request, response: Response, next: NextFunction){
  const noteID = parseInt(request.params.noteID)
  const note: Note = notes.find(note => note.id == noteID)

  if (note) {
    response.status(200).json(note)
  } else {
    response.status(404).send()
  }
}

async function getUser(request: Request, response: Response, next: NextFunction) {
  const userID = parseInt(request.params.userID)
  const user: User = users.find(user => user.id == userID)

  if (user) {
    response.status(200).json(user)
  } else {
    response.status(404).send()
  }
}

async function getNotes(request: Request, response: Response, next: NextFunction) {
  response.status(200).json(notes)
}


async function getUsers(request: Request, response: Response, next: NextFunction) {
  response.status(200).json(users)
}

async function updateNote(request: Request, response: Response, next: NextFunction) {
  const noteID = parseInt(request.params.noteID)
  const noteIndex = notes.findIndex(note => note.id == noteID)
  const note = request.body as Note

  if (noteIndex > -1) {
    notes[noteIndex] = note

    response.status(200).send()
  } else {
    response.status(404).send()
  }
}

async function updateUser(request: Request, response: Response, next: NextFunction) {
  const userID = parseInt(request.params.userID)
  const userIndex = users.findIndex(user => user.id == userID)
  const user = request.body as User

  if (userIndex > -1) {
    users[userIndex] = user

    response.status(200).send()
  } else {
    response.status(404).send()
  }
}