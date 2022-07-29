const UserSchema = require("../models/userSchema")

const getAll = async (request, response) => {
    try {
        const allUsers = await UserSchema.find()
        response.status(200).send(allUsers)({
        "mensagem": "Esses são os usuários cadastrados em nosso sistema",
        UserSchema
    })
    } catch (error) {
        console.error(error)
    }
}

const getById = async (request, response) => {
    try {
        const findId = await UserSchema.findById(request.params.id)
        response.status(200).json(findId)
    } catch(error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const getByName = async (request, response) => {
    try {
        const name = request.query.name
        const findName = await UserSchema.find({ name: `${name}`})
                
        if(findName.length == 0) {
            throw new Error("Nome não encontrado")
        } else if(findName.length > 0) {
            response.status(200).json({
                "mensagem": "Usuário encontrado",
                findName
            })
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}

const createUser = async (request, response) => {
    try {
        const { 
            name, email, password, address, telephone
        } = request.body

        const points = 0

        if (!name || !email || !password || !telephone) {
            return response
                .status(400)
                .json({ message: "Os campos não podem ser vazios" })
        }

        const newUser = await UserSchema.create({ name, email, password, address, telephone, points })
        console.log("Novo usuário cadastrado", newUser)

        const savedUser = await newUser.save()
        console.log("Usuário salvo no banco", savedUser)

        if(savedUser) {
            response.status(201).send({ 
                "message": "Usuário cadastrado com sucesso",
                savedUser
            })
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}

const updateUser = async (request, response) => {
    try {
        const findId = await UserSchema.findById(request.params.id)
        console.log("Usuário encontrado", findId)

        if(!findId) {
            response.status(404).send({
                "message": "Usuário não encontrado", 
                "statusCode": 404
            })
        }

       findId.name = request.body.name || findId.name
       findId.email = request.body.email || findId.email
       findId.password = request.body.password || findId.password
       findId.address = request.body.address || findId.address
       findId.telephone = request.body.telephone || findId.telephone 

       const savedUser = await findId.save()

       response.status(200).send({
            "message": "Usuário atualizado com sucesso", 
            savedUser
       })
    } catch (error) {
        console.log(error)
    }      
}

const deleteUser = async (request, response) => {
    try {
        const deleteUser = await UserSchema.findByIdAndDelete(request.params.id)

        response.status(200).send({
            "message": "Usuário deletado do sistema com sucesso",
            deleteUser
        })
    } catch (error) {
        console.log(error)
    }    
}

module.exports = {
    getAll,
    getById,
    getByName,
    createUser,
    updateUser,
    deleteUser
}