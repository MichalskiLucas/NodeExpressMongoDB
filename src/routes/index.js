import express from "express";
import router from "./livrosRoutes";
import livros from "./livrosRoutes";

const routes = (app) => {
    app.routes('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de node"})
    })

    app.use(
        express.json(),
        livros
    )
}

export default routes