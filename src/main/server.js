"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv");
var express_1 = require("express");
var index_ts_1 = require("./v1/routes/index.ts");
var app = (0, express_1.default)();
var port = Deno.env.get("PORT") || 8080;
// await getConnectionDB().then(() => console.log("connected to database"))
// .catch((e) => console.error("Error on connect to database: "+e))
app.use(express_1.default.json());
app.use("/v1", index_ts_1.default);
app.listen(port, function () { return console.log("started in localhost:".concat(port)); });
