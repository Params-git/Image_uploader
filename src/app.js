const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const hbs = require("hbs");
const routes = require("../server/router/route");
require("../server/database/database");


const static_path = path.join(__dirname, "../public");
const view_path = path.join(__dirname, "../templates/views");

app.use(routes);
app.set('view engine', 'hbs');
app.set('views', view_path);
app.use(express.json());
app.use(express.static(static_path));


app.listen(port, () => {
    console.log(`server start at port ${port}`)
});