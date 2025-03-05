import express from "express";
import dbconnect from "./db/dbconnect.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import { fileURLToPath } from "url";
import path from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();  
const PORT = process.env.PORT || 3000;


app.use(cors({
    origin: [process.env.CLIENT_PORT],
    credentials: true,
}));



app.use(express.json()); 
app.use(cookieParser()); 

app.use("/api/auth", authRoutes);


if (process.env.NODE_ENV === "production") {
    const clientPath = path.join(__dirname, "../client/dist"); 
    console.log("Serving static files from:", clientPath);

    app.use(express.static(clientPath));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(clientPath, "index.html"));
    });
}


app.listen(PORT, () => {     
    dbconnect();      
    console.log("Server started on port: ", PORT);
});


