const mongoose= require('mongoose')
const urlbd="monfodb://localhost:27017"
mongoose.connect()
.then(()=> {
    

    console.log("esta madre si jala :D")


})

.catch((error)=>{
console.log("esta madre no funciona jaja", error)


})

const EsquemaAlumnos = new mongoose.Schema({
    

        name:{
            type: String
        },
        

            appeat:{
                type:String
            },

        age:{
            type:Number
        }
        

        

    

})

const modeloAlumnos= new mongoose.model("tabla de alumnnos", EsquemaAlumnos)

modeloAlumnos.create({

    name:"Diego",
    apepat:"salvador",
    edad:21

})

