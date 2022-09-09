const dotenv = require('dotenv')
const mongoose = require('mongoose')



dotenv.config({path: './config.env'})
const app = require('./app')

 
mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(con => {
    // console.log(con.connections)
    console.log('数据库连接成功！！')
}).catch(err => {
    console.log('数据库连接失败！！')
})
 

const port = 1000
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...............`);
})


process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1)
    })
    
})
