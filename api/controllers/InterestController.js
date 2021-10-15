const database = require("../models");

class InterestController {
    /*
        FALTA:
            -AUTENTICAÇÃO
            -IMPLEMENTAR VERIFICAÇÃO
    */
    static async createInterest(req, res) {
        const newInterest = {
            ...req.body,
        };
        try {
            //PESQUISA SE JÁ EXISTE NO BANCO
            const searchInterest = database.Interests.findOne({
                // where:
            });
            //CASO NÃO EXISTA, SALVAR NO BANCO
            const interest = await database.Interests.create(newInterest);
            return res.status(201).json(interest);
        } catch (error) {}
    }

    /*
        FALTA:
            -AUTENTICAÇÃO
            -RETORNAR ERRO 403 CASO USUARIO TENTE EXCLUIR
             INTERESSE QUE NÃO SEJA SEU
    */

    static async deleteInterest(req, res) {
        const { id } = req.params;
        try {
            await database.Interests.destroy({
                where: { id: Number(id) },
            });
            return res.status(204);
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    }

    /*
        FALTA:
            SÓ TUDO :'(
    */
    static async getInterests(req, res) {}
}

module.exports = InterestController;
