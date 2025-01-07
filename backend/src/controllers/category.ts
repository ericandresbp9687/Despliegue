import { Request, Response } from 'express';
import Category from '../models/categories';



export const getCategories = async (req: Request, res: Response) => {
    const listCategories= await Category.findAll()

    res.json(listCategories)
}

export const getCategory = async (req: Request, res: Response) => {
    const { id } = req.params;
    const category = await Category.findByPk(id);

    if (category) {
        res.json(category)
    } else {
        res.status(404).json({
            msg: `No existe categoría con el id${id}`
        })
    }
}

export const deleteCategory = async (req: Request, res: Response) => {
    const { id } = req.params;
    const category = await Category.findByPk(id);

    if (!category) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    } else {
        await Category.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito!'
        })
    }

}

export const postCategory = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Category.create(body);

        res.json({
            msg: `La marca fue agregada con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const updateCategory = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const category = await Category.findByPk(id);

        if (category) {
            await category.update(body);
            res.json({
                msg: 'La Categoría fue actualizado con exito'
            })

        } else {
            res.status(404).json({
                msg: `No existe la categoría con el id ${id}`
            })
        }

    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }


}



