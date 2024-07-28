
//--------------------------------------------v1----------------------------------------

// const {createPool} = require("mysql2");
// const pool = createPool({
//     host:"localhost",
//     user:"root",
//     password:"1234",
//     database:"studentinfo",
//     connectionLimit: 10
// })
// pool.query('SELECT * FROM students',(err, result, fail)=>{
//     if(err){
//         return console.log(err)
//     }
//     return console.log(result)
// })

//--------------------------------------------v2----------------------------------------

// const {createPool, createConnection} = require("mysql2");
// const connct = createConnection({
//     host:"localhost",
//     user:"root",
//     password:"1234",
// })
// connct.connect((err)=>{
// if(err){
//     return console.log (err);
// }
// console.log("connection successful")
// })