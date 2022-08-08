import app from './src/app.js'
const porta = process.env.PORT || 3000;


app.listen(porta, () => {
    console.log(`Servidor local rodando em http://localhost:${porta}`)
})