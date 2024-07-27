const express = require('express');
const app = express();
const mysql = require('mysql2');
const PORT = 3001;
const cors = require('cors');

const {encrypt,decrypt} = require('./EncryptionHandler');

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'your_password',
    database: 'PasswordManager',
});

app.post('/addPassword', (req,res)=>{
    const {password, title} = req.body;
    const hashedPassword = encrypt(password);

    db.query("INSERT INTO passwords (password,title,iv) VALUES (?,?,?)",
        [hashedPassword.password, title, hashedPassword.iv],
        (err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send("Success");
            }
    });
});

app.post('/decryptPassword', (req,res)=>{
    res.send(decrypt(req.body));
});

app.get('/showPasswords', (req,res)=>{
    db.query("SELECT * FROM passwords;" , (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    });
});

app.listen(PORT, ()=>{
    console.log("Server is running");
});