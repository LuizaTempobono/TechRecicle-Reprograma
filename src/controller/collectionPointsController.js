const CollectionPointsSchema = require("../models/collectionPointsSchema")

const getAll = async (request, response) => {
    try {
        const allPoints= await CollectionPointsSchema.find()
        response.status(200).send(allPoints)({
        "mensagem": "Esses são os pontos de coleta cadastrados em nosso sistema",
        CollectionPointsSchema
    })
    } catch (error) {
        console.error(error)
    }
}

const getById = async (request, response) => {
    try {
        const findId = await CollectionPointsSchema.findById(request.params.id)
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
        const findName = await CollectionPointsSchema.find({ name: `${name}`})
        CollectionPointsSchema.find({ name: `${name}`}),(error, data) => {
            console.log(data)
        }
                
        if(findName.length == 0) {
            throw new Error("Ponto de coleta não encontrado")
        } else if(findName.length > 0) {
            response.status(200).json({
                "mensagem": "Ponto de coleta encontrado",
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

const getByAddress = async (request, response) => {
    try {
        const address = request.query.address
        CollectionPointsSchema.find({ address : {
                                        $regex: new RegExp(address)
                                    }
                                }, 
                                { _id: 0, __v: 0,createdAt: 0},
                                 function (err, data) {
                                    if(data.length > 0){
                                        response.status(200).json({message: "Endereço encontrado", data
                                    })
                                    }else{
                                        response.status(500).json({message: "Endereço não encontrado"})
                                    }
                                })

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}

const getByEwaste = async (request, response) => {
    try {
        const ewaste = request.query.ewaste.toLowerCase()
        CollectionPointsSchema.find({ ewaste : {
            $regex: new RegExp(ewaste)
        }
    }, 
    { _id: 0, __v: 0,createdAt: 0},
     function (err, data) {
        if(data.length > 0){
            response.status(200).json({message: "Tipo de resíduo encontrado", data
        })
        }else{
            response.status(500).json({message: "Tipo de resíduo não encontrado"})
        }
    })
    
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}

const createPoint = async (request, response) => {
    try {
        const { 
            name, email, address, telephone, openingTime, ewaste
        } = request.body

        if (!name || !email || !address || !telephone || !openingTime || !ewaste) {
            return response
                .status(400)
                .json({ message: "Os campos não podem ser vazios" })
        }

        const newPoint = await CollectionPointsSchema.create({ name, email, address, telephone, openingTime, ewaste })
        console.log("Novo ponto de coleta cadastrado", newPoint)

        const savedPoint = await newPoint.save()
        console.log("Ponto de coleta salvo no banco", savedPoint)

        if(savedPoint) {
            response.status(201).send({ 
                "message": "Ponto de coleta cadastrado com sucesso",
                savedPoint
            })
        }
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}

const updatePoint = async (request, response) => {
    try {
        const findId = await CollectionPointsSchema.findById(request.params.id)
        console.log("Ponto de coleta encontrado", findId)

        if(!findId) {
            response.status(404).send({
                "message": "Ponto de coleta não encontrado", 
                "statusCode": 404
            })
        }

       findId.name = request.body.name || findId.name
       findId.email = request.body.email || findId.email
       findId.address = request.body.address || findId.address
       findId.telephone = request.body.telephone || findId.telephone 
       findId.openingTime = request.body.openingTime || findId.openingTime
       findId.ewaste = request.body.ewaste || findId.ewaste
       
       const savedPoint = await findId.save()

       response.status(200).send({
            "message": "Ponto de coleta atualizado com sucesso", 
            savedPoint
       })
    } catch (error) {
        console.log(error)
    }      
}

const deletePoint = async (request, response) => {
    try {
        const deletePoint = await CollectionPointsSchema.findByIdAndDelete(request.params.id)

        response.status(200).send({
            "message": "Ponto de coleta deletado do sistema com sucesso",
            deletePoint
        })
    } catch (error) {
        console.log(error)
    }    
}

module.exports = {
    getAll,
    getById,
    getByName,
    getByAddress,
    getByEwaste,
    createPoint,
    updatePoint,
    deletePoint
}