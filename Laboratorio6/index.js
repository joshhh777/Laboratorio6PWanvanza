const express = require('express')
const app = express()

app.use(express.json())

let personas = [
  {
    id: 1,
    name:"Pablo Perez",
    number:"+51980567123"
  },
  {
    id: 2,
    name:"Jose Cancino",
    number:"+51932199913"
  },
  {
    id: 3,
    name:"Marta Garcia",
    number:"+51980012332"
  },
  
  {
    id: 4,
    name:"Noel Santiago",
    number:"+51980012332"
  },
  
  {
    id: 5,
    name:"Bad Bunny",
    number:"+51992005123"
  }
]

/*
const [notas, setNota] = useState([])
 notas = notes
function nuevo(){
  const nuevaNot= {
    id: persona.length+1,
    content: content,
    date: date,
    important: false
  }
  setNota([
    ...notas,
    nuevaNot,
  ])      
  console.log("hola")
  return(
    {notes}
  )
}

*/

app.get('/', (request, response) => {
    response.send('<h1>Hola Jose Cancino</h1>')
  })
  
  app.get('/api/personas', (request, response) => {
    response.json (personas)
  })

  app.post('/api/notes', (request, response) => {
    console.log(request.body.important)
    response.json(personas)
  })
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })