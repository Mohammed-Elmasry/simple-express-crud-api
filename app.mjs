import express from "express";
const app = express();

const PORT = 3000;

app.get("/employee/:id", (req, res) => {
    console.log(req.params);
    res.send({"message": "Employee retrieved"});
});

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
