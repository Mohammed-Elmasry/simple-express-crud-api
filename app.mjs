import express from "express";
import db from "./models/index.js";
import bodyParser from "body-parser";

const EmployeeModel = db.Employee;

const app = express();
const PORT = 3000;

app.use(bodyParser.json({extended: true}));

app.post("/employees", (req, res) => {
    EmployeeModel.create(req.body);
    res.status(201).send({"response": "Created"});
});

app.get("/employees/:id", (req, res) => {
    (async (model, res) => {
            res.status(200).send(await model.findAll({
                where: {
                    id: req.params.id
                }
            }));
        }
    )(EmployeeModel, res);
});

app.put("/employees/:id", (req, res) => {
    (async (model, res) => {
        let employee = await model.findAll({
            where: {id: req.params.id}
        });

        await employee[0].update({
            first_name: req.body['first_name'],
            last_name: req.body['last_name']
        });

        res.status(200).send({"response": "Updated"});
    })(EmployeeModel, res);
});


app.listen(PORT, console.log(`Server is running on port ${PORT}`));
