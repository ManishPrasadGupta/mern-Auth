import mongoose from "mongoose";



const dbconnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            writeConcern: { w: "majority" }
          });
        console.log(`\n MONGODB connected!! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection failed" , error)
        process.exit(1)
    }
}

export default dbconnect;