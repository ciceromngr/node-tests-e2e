import express from 'express'
import PrismaLessonsRepository from './repositories/implementations/PrismaLessonsRepository'
import LessonsService from './services/LessonsService'

export const app = express()

app.use(express.json())

app.post("/lessons", async (request, response) => {
    const { title , description } = request.body

    const prismaLessonsrepository = new PrismaLessonsRepository()
    const lessonsService = new LessonsService(prismaLessonsrepository)

    try {
        await lessonsService.execute({ title, description })
        return response.status(201).send()
    } catch (error: any) {
        return response.status(400).json({
            err: error.message
        })
    }
})
