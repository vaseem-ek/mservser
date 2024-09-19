
const jsonServer=require('json-server')


const mpServer=jsonServer.create()


const middleware=jsonServer.defaults()

const router =jsonServer.router('db.json')

mpServer.use(middleware)
mpServer.use(router)

const PORT=3000 || process.env.PORT
mpServer.listen(PORT,()=>{
    console.log('server running at:' +PORT);
    
})