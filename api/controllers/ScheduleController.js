const database = require("../models");

class ScheduleController {
    /*
        FALTA:
            -ELE TODO :'(
    */
    //POST/schedules
    static async addSchedule(req, res) {}

    /*
        FALTA:
            - AUTENTICAÇÃO
            - PAGINAÇÃO
            - totalPages, totalItens, data
    */
    //GET/schedules
    static async catchScheduleByInstructor(req, res) {
        const { id, instructorId, type } = req.params; //acho que ta errado, acho não, ctz rs, não sei como pegar esses parâmetros sem pegar da req
        if (type !== "instructor") {
            return res.status(403).json({ message: "user without permission" });
        }
        try {
            const allSchedules = await database.Schedules.findAll({
                where: {
                    id: Number(id),
                    instructorId: Number(instructorId),
                },
            });
            return res.status(200).json(allSchedules);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    /*
        FALTA: 
            -AUTENTICAÇÃO,
            -VALIDAÇÃO DA DATA
    */

    //PATCH/schedules/{id}
    static async updateSchedule(req, res) {
        const { id, instructorId } = req.params;
        const newValue = req.body;
        const newValueChecked = [];

        if (newValue.id || newValue.instructorId) {
            return res.status(400).json({ message: "field cannot be updated" });
        }

        try {
            await database.Schedules.update(newValueChecked, {
                where: {
                    id: Number(id),
                    instructorId: Number(instructorId),
                },
            });
        } catch (error) {
            return res.status;
        }
    }

    /* FALTA: 
        -AUTENTICAÇÃO
        -EMITIR ERRO CASO INSTRUTOR ESTEJA TENTANDO EXCLUIR 
         TEMA DE AGENDA QUE NÃO CRIOU
    */
    //DELETE/schedules/{id}/themes/{themeId}
    static async deleteScheduleTheme(req, res) {
        const { id, themeId } = req.params;
        try {
            await database.Schedules_Themes.destroy({
                where: {
                    scheduleId: Number(id),
                    themeId: Number(themeId),
                },
            });
            return res.status(204);
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    }

    /*
        FALTA: 
            -AUTENTICAÇÃO, 
            -EMITIR ERRO CASO INSTRUTOR TENTE ADICIONAR TEMA
             EM AGENDA QUE ELE NÃO CRIOU
    */
    //POST/schedules/{id}/themes
    static async addScheduleTheme(req, res) {
        const { id } = req.params;
        const newTheme = {
            ...req.body,
            scheduleId: Number(id),
        };
        try {
            await database.Schedules_Themes.create(newTheme);
            return res.status(204);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

module.exports = ScheduleController;
