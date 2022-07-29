const interactionSchema = require("../models/interactionSchema")
const userSchema = require("../models/userSchema")
const collectionPointsSchema = require("../models/collectionPointsSchema")

const getAll = async (request, response) => {
    try {
        const allInteractions = await interactionSchema.find()
        response.status(200).json(allInteractions)({
        "mensagem": "Essas são as interações cadastradas em nosso sistema",
        allInteractions
    })
    } catch (error) {
        console.error(error)
    }
}

const getById = async (request, response) => {
    try {
        const findId = await interactionSchema.findById(request.params.id)
        response.status(200).json(findId)
    } catch(error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const createInteraction = async (request, response) => {
    try {
        const { 
            userId, collectionPointsId, discardedEwaste, discardedAt
        } = request.body

        let user = await userSchema.findById(userId)
        let collectionPoints = await collectionPointsSchema.findById(collectionPointsId)
        const done = false

        if (!user || !collectionPoints || !discardedEwaste) {
            return response
                .status(400)
                .json({ message: "Os campos não podem ser vazios" })
        }

        const newInteraction = await interactionSchema.create({ userId, collectionPointsId, discardedEwaste, done })
        console.log("Nova interação cadastrada", newInteraction)

        const savedInteraction = await newInteraction.save()
        console.log("Interação salva no banco", savedInteraction)

        if(savedInteraction) {
            user.points = user.points + 1

           const savedUser = await user.save()
            response.status(201).send({ 
                "message": "Interação cadastrada com sucesso",
                savedInteraction
            })
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}

const updateInteraction = async (request, response) => {
    try {
        const findId = await interactionSchema.findById(request.params.id)
        console.log("Interação encontrada", findId)

        if(!findId) {
            response.status(404).send({
                "message": "Interação não encontrado", 
                "statusCode": 404
            })
        }

       findId.userId = findId.userId
       findId.collectionPointsId = findId.collectionPointsId
       findId.discardedEwaste =  findId.discardedEwaste
       findId.done = request.body.done || findId.done
       findId.discardedAt = findId.discardedAt 

       const savedInteraction = await findId.save()

       response.status(200).send({
            "message": "Interação atualizada com sucesso", 
            savedInteraction
       })
    } catch (error) {
        console.log(error)
    }      
}

const deleteInteraction = async (request, response) => {
    try {
        const deleteInteraction = await interactionSchema.findByIdAndDelete(request.params.id)

        response.status(200).send({
            "message": "Interação deletada do sistema com sucesso",
            deleteInteraction
        })
    } catch (error) {
        console.log(error)
    }    
}

module.exports = {
    getAll,
    getById,
    createInteraction,
    updateInteraction,
    deleteInteraction
}