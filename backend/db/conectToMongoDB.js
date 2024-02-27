import mongoose from "mongoose";


const conectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI,)
        console.log("conect to MongoDB")

    } catch (error) {
        console.log("error,conecting to MongoDB", error.message)
    }
}

export default conectToMongoDB;
