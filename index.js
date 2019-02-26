const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const fs = require('fs');

const app = express();
const dbfile = 'exercice.db';
const db = new sqlite3.Database(dbfile);




db.serialize( () => {
    if (!fs.existsSync(dbfile)){
        db.run('CREATE TABLE products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, price FLOAT, photo TEXT, like BOOLEAN)');
}
    
    db.run('INSERT INTO products (name,price,photo,like) VALUES (?, ?, ?, ?)','bag','200','images/sac.jpg','true');
    db.run('INSERT INTO products (name,price,photo,like) VALUES (?, ?, ?, ?)','t-shirt','15','images/t-shirt.jpg','false');
    db.run('INSERT INTO products (name,price,photo,like) VALUES (?, ?, ?, ?)','shoes','59','images/chaussures.jpg','false');

    db.all('SELECT * FROM products', function (error, data) {
        if (!error) console.log(data);
        else console.log(error);
          });
    });
    
app.get('/',function (request, response){
    db.all('SELECT * FROM products', function (error, data){
        response.send(data);
    })
});
app.listen(3000, function (error){
   if(!error) console.log('app listening port 3000');
})