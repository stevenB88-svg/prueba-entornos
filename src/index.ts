import express from 'express'
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/', (_req, res)=> {
    // console.log('ambiente develop :)')
    res.send('ambiente testing')
})

app.listen(PORT);
// app.listen(PORT, () => {
//     console.log('Sever run on port ${PORT}');
// });
