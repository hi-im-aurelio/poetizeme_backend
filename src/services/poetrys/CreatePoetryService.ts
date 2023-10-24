import database from "../../prisma";

interface Poetry {
    title: string;
    content: string;
    tags: string[];
    authorId: string;
}

class CreatePoetryService {
    async execute({ title, content, tags, authorId }: Poetry) {
        if (!title) {
            throw new Error(`Forneça um título para seu poema.`);
        }

        if (!content) {
            throw new Error(`Seu poema ${title} deve conter um conteúdo.`);
        }

        if (!tags) {
            throw new Error(`Seu poema deve conter pelo menos uma tag.`);
        }

        if (!authorId) {
            throw new Error(`Forneça o id do autor do poema.`);
        } else {
            const authorExists = await database.author.findUnique({
                where: { id: authorId }
            });

            if (!authorExists) {
                throw new Error(`Author não encontrado. Forneça um id de autor válido.`);
            }
        }

        const poetry = await database.poetry.create({
            data: {
                title: title,
                content: content,
                tags: tags,
                authorId: authorId
            }
        });

        return poetry;
    }
}

export { CreatePoetryService };
