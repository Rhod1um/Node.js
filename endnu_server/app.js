const express = require("express")
const app = express()



//app.listen(8080)  kan være port som variabel:
const PORT = 8080
app.listen(PORT, (error) => {
    if (error){
        console.log("Error er", error)
        return //return gør at den går ud af funktionen så det nedre console.log ikke udskrives
    }
    console.log("Server is running on port", PORT)
})
//hvilken datatype er error? undefined
//så her, hvis noget er undefined 

//man får mange fejl med at porten er i brug
