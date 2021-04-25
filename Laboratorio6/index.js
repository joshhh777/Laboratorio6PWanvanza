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

const tamaño = personas.length
const tiempo = new Date().toString()
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
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(personas))
  })

  app.get('/api/personas/info', (request, response) => {
    response.send ("<h1>La agenda tiene informacion para "+tamaño + " personas</h1>" + 
                     " <h2>La solicitud se hizo en el tiempo de " + tiempo +"</h2>") 
    
  })

  app.get('/api/personas/:id', (request, response) => {
    const id = Number(request.params.id)
    const persona = personas.find(persona =>  persona.id === id)
    if(persona){
      response.json(persona)
      }else{
        response.status(404).end()
      }
    })

  app.post('/api/notes', (request, response) => {
    console.log(request.body.important)
    response.json(personas)
  })
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })