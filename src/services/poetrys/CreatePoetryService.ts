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
        } else if (title.length < 3) {
            throw new Error(`Seu título deve conter no mínimo 3 caracteres.`);
        }

        if (!content) {
            throw new Error(`Seu poema ${title} deve conter um conteúdo.`);
        } else if (content.length < 34) {
            throw new Error(`Seu poema deve conter no mínimo 34 caracteres.`);
        }

        if (!tags.length) {
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
