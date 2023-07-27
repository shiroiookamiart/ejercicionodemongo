const express = require("express");
const Empleados = require("../models/Empleados");
const Sexo = require("../models/Sexo");
const Departamentos = require("../models/Departamentos");
const Jefes = require("../models/Jefes");

const app = express();

app.get("/", (req, res) => {
    Jefes.find({}).then(function (jefes) {
        Sexo.find({}).then(function (sexo) {
            Departamentos.find({}).then(function (departamentos) {
                res.render('index.ejs',{
                    title:"Ejercicio 3 De Base de Datos",
                    jefes: jefes,
                    sexo: sexo,
                    departamentos:departamentos
                });
            });    
        });    
    });
});

app.post("/registro", async (request, response) => {
    const empleados = new Empleados(request.body);
    try {
        await empleados.save();
        Empleados.find({}).then(function (empleados) {
            response.render("list.ejs",{
                title:"Ejercicio 3 De Base de Datos",
                success:"Almacenamiento completado",
                e:empleados
            });
        });    
    } catch (error) {
        Empleados.find({}).then(function (empleados) {
            response.render("list.ejs",{
                title:"Ejercicio 3 De Base de Datos",
                success:"Se ha producido un error",
                e:empleados
            });
        });    
    }
});

app.get("/eliminar/:id", async (req, response) => {
    var id = req.params.id;
    try{
        await Empleados.findOneAndDelete({ _id: id })
        response.redirect("/listado")
    }catch (error) {
        response.redirect("/listado")
    }      
})

app.get("/listado", (request, response) => {
    Empleados.find({}).then(function (empleados) {
        response.render("list.ejs",{
            title:"Ejercicio 3 De Base de Datos",
            e:empleados
        });
    });
})

app.get("/update/:id", (req, res) => {
    var id = req.params.id;
    Jefes.find({}).then(function (jefes) {
        Sexo.find({}).then(function (sexo) {
            Departamentos.find({}).then(function (departamentos) {
                Empleados.findById({_id: id}).then( (DBitems) => {
                    res.render('update.ejs',{
                        title:"Ejercicio 3 De Base de Datos",
                        jefes: jefes,
                        sexo: sexo,
                        departamentos:departamentos,
                        id: id,
                        data: DBitems
                    });
                });    
            });    
        });    
    });
});

app.post("/update", async (req, res) => {
    var id = req.body._id;
    try{
        await Empleados.findByIdAndUpdate(id, {
            name:req.body.name,
            apellido: req.body.apellido,
            dni:req.body.dni,
            sexo:req.body.sexo,
            departamento:req.body.departamento,
            jefe:req.body.jefe
        }, { new:  true, runValidators:  true })
        res.redirect("/listado")
    }catch (error) {
        res.status(500).send(error);
    }   
});


app.get("/insertar-registros", async (request, response) => {
    const jefes = new Jefes({name:"Luisa"});
    const sexos = new Sexo({name:"Otro"});
    const departamentos = new Departamentos({name:"Dirección"});
    try {
        await jefes.save()
        await sexos.save()
        await departamentos.save()
    } catch (error) {
        response.status(500).send(error);
    }    
})

module.exports = app;