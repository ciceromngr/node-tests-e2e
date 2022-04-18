import { Lesson } from "@prisma/client";
import { CreateLessonData, LessonsRepository } from "../../src/repositories/LessonsRepository";
import crypto from 'crypto'

export default class InMemoryLessonsRepository implements LessonsRepository{
    
    public items: Lesson[] = []
    
    async create(data: CreateLessonData): Promise<void> {
        this.items.push({
            id: crypto.randomUUID(),
            title: data.title,
            description: data.description ?? null
        })
    }
    
}