const express = require ('express');
const app = express ();
const path = require ('path');
const publicFolderPath= path.resolve (__dirname, './public');
app.use (express.static (publicFolderPath));

/*app.listen (3000, () => {
   console.log('Servidor corriendo en el puerto 3000'); 
});*/ //Correr servidor local

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register', (req, res) => {
   res.sendFile(path.resolve(__dirname, './views/register.html'));
})
app.get('/login', (req, res) => {
   res.sendFile(path.resolve(__dirname, './views/login.html'));
})

//Correr servidor externo o local
app.set("puerto", process.env.PORT || 3000);
app.listen (app.get('puerto'), ()=> console.log(`Servidor corriendo de manera satisfactoria  ${app.get('puerto')}` ));