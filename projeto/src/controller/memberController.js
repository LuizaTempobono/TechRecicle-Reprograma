//importar o json/banco de dados
const MemberSchema = require("../models/memberSchema")

//Listar todos os alunos da academia (GET)
const getAll = async (request, response) => {
    try {
        const allMembers = await MemberSchema.find()
        response.status(200).send(allMembers)({
        "mensagem": "Esses são os alunos cadastrados em nossa academia",
        MemberSchema
    })
    } catch (error) {
        console.error(error)
    }
}

//Listar alunos por id (GET)
const getById = async (request, response) => {
    try {
        //identificar o id do parâmetro
        const findId = await MemberSchema.findById(request.params.id)
        response.status(200).json(findId)
    } catch(error) {
        response.status(500).json({
            message: error.message
        })
    }
}

//Listar alunos por nome, se tiver nome social, trazer o nome social (GET)
const getByName = async (request, response) => {
    try {
        const name = request.query.name
        const findSocialName = await MemberSchema.find({ socialName: `${name}`})
        const findName = await MemberSchema.find({ name: `${name}`})
                
        if(findName.length == 0 && findSocialName.length == 0) {
            throw new Error("Nome não encontrado")
        } else if(findSocialName.length > 0) {
            response.status(200).json({
                "mensagem": "Aluno encontrado",
                findSocialName
            })
        } else if(findName.length > 0) {
            response.status(200).json({
                "mensagem": "Aluno encontrado",
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

//Cadastrar aluno da academia (POST)
const createMember = async (request, response) => {
    try {
        const { 
            name, socialName, age, address,
            telephone, cpf
        } = request.body

        if (!name || !address || !cpf) {
            return response
                .status(400)
                .json({ message: "Os campos não podem ser vazios" })
        }

        const newMember = await MemberSchema.create({ name, socialName, age, address, telephone, cpf })
        console.log("Novo aluno cadastrado", newMember)

        const savedMember = await newMember.save()
        console.log("Aluno salvo no banco", savedMember)

        if(savedMember) {
            response.status(201).send({ 
                "message": "Aluno cadastrado com sucesso",
                savedMember
            })
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}

//Atualizar cadastro de um aluno (PUT)
const updateMember = async (request, response) => {
    try {
        const findId = await MemberSchema.findById(request.params.id)
        console.log("Aluno encontrado", findId)

        if(!findId) {
            response.status(404).send({
                "message": "Aluno não encontrado", 
                "statusCode": 404
            })
        }

       findId.name = request.body.name || findId.name
       findId.socialName = request.body.socialName || findId.socialName
       findId.age = request.body.age || findId.age
       findId.address = request.body.address || findId.address
       findId.telephone = request.body.telephone || findId.telephone 
       
       const savedMember = await findId.save()

       response.status(200).send({
            "message": "Aluno atualizado com sucesso", 
            savedMember
       })
    } catch (error) {
        console.error(error)
    }      
}

//Deletar cadastrado de um aluno (DELETE)
const deleteMember = async (request, response) => {
    try {
        const deleteMember = await MemberSchema.findByIdAndDelete(request.params.id)

        response.status(200).send({
            "message": "Aluno deletado do sistema com sucesso",
            deleteMember
        })
    } catch (error) {
        console.error(error)
    }    
}

//Exportar as variaveis do controller
module.exports = {
    getAll,
    getById,
    getByName,
    createMember,
    updateMember,
    deleteMember
}