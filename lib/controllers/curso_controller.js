import Curso from '../models/curso';

export const index = async (req, res) => {
    const curso = await Curso.findAll({});
    res.json({ data: curso.map((curso) => curso.toJSON()) });
};

export const show = async (req, res) => {
    const curso = await Curso.findByPk(req.params.id);
    if (curso) {
        res.json({ data: curso.toJSON() });
    } else {
        res
            .status(404)
            .json({ message: `404 not found papa${req.params.id}` });
    }
};

export const create = async (req, res) => {
    try {
        if (req.body.horario !== undefined) {
            const curso = await Curso.create({ horario: req.body.horario, id_materia: req.body.id_materia, id_profesor: req.body.id_profesor });
            res.status(200).send({ id: curso.id });
        } else {
            res.status(400).json('Nombre no recibido')
        }
    } catch (err) {
        return res.status(500).send(err)
    }
}

export const update = async (req, res) => {
    try {
        if (req.body.horario !== undefined) {
            const curso = await Curso.findByPk(req.params.id);
            curso.horario = req.body.horario;
            curso.id_materia = req.body.id_materia;
            curso.id_profesor = req.body.id_profesor;
            await curso.save();
            res.status(200).send({ id: curso.id });
        } else {
            res.status(400).json("Nombre no recibido");
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};