const route = require("express").Router();
const controller = require("../contoller/controller");
const store = require("../middleware/multer");


route.get("/", controller.home);

route.post("/uploadmultiple", store.array('images', 5), controller.uploads);

module.exports = route;