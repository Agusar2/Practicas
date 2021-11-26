import Materia from '../models/materia';

export const index = async (req, res) => {
    const materia = await Materia.findAll({});
    res.json({ data: materia.map((materia) => materia.toJSON()) });
};

export const show = async (req, res) => {
    const materia = await Materia.findByPk(req.params.id);
    if (materia) {
        res.json({ data: materia.toJSON() });
    } else {
        res
            .status(404)
            .json({ message: `404 not found papa${req.params.id}` });
    }
};

export const create = async (req, res) => {
    try {
        if (req.body.name !== undefined) {
            const materia = await Materia.create({ name: req.body.name, id_carrera: req.body.id_carrera });
            res.status(200).send({ id: materia.id });
        } else {
            res.status(400).json('Nombre no recibido')
        }
    } catch (err) {
        return res.status(500).send(err)
    }
}

export const update = async (req, res) => {
    try {
        if (req.body.name !== undefined) {
            const materia = await Materia.findByPk(req.params.id);
            materia.name = req.body.name;
            materia.id_carrera = req.body.id_carrera;
            await materia.save();
            res.status(200).send({ id: materia.id });
        } else {
            res.status(400).json("Nombre no recibido");
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};