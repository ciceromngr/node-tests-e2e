import { LessonsRepository } from "../repositories/LessonsRepository";

interface CreateLessonRequest {
    title: string
    description?: string
}

export default class LessonsService {
    constructor(
        private readonly lessonsRepository: LessonsRepository
    ){}

    async execute({ title, description }: CreateLessonRequest) {
        if(!title) throw new Error("title is required")
        await this.lessonsRepository.create({ title, description })
    }

}