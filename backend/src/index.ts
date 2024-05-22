import app from "./app.js"
import { connectToDatabase } from "./db/connection.js";
//connect
const PORT=process.env.PORT||5000
connectToDatabase().then(()=>{
    app.listen(PORT,()=>console.log("Server OK and DB connected"));
}).catch(err=>console.log(err));

