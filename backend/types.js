const zod = require("zod");

const createtodo = zod.objectUtil({
    title: zod.ZodString(),
    description: zod.ZodString()
})

const updatetodo = zod.object({
    id: zod.string(),
})

module.export ={
    createtodo: createtodo,
    updatetodo: updatetodo
}
/* 
    {
        title: string,
        description: string,
    }
    {
        id: string,
    }
*/