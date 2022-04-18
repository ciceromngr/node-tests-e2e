import InMemoryLessonsRepository from "../../tests/repositories/InMemoryLessonsRepository"
import LessonsService from "./LessonsService"

const makeSut = () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository()
    const lessonsService = new LessonsService(inMemoryLessonsRepository)
    return {
        inMemoryLessonsRepository,
        lessonsService
    }
}

describe('Create Lesson', () => {
    it('should be able to create a new Lesson', async () => {
      
        const { lessonsService, inMemoryLessonsRepository } = makeSut()

        await expect(lessonsService.execute({ title: 'Nova Aula' }))
            .resolves
            .not
            .toThrow()

        expect(inMemoryLessonsRepository.items).toEqual(expect.arrayContaining([
            expect.objectContaining({
                title: 'Nova Aula'
            })
        ]))
    })

    it('should NOT be able to create a new Lesson with invalid title', async () => {
        const { lessonsService, inMemoryLessonsRepository } = makeSut()

        await expect(lessonsService.execute({ title: '' }))
            .rejects
            .toThrow()

        expect(inMemoryLessonsRepository.items).toEqual([])
    })
})