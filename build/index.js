"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/app");
const dbconfig_1 = require("./src/database/dbconfig");
const user_route_1 = __importDefault(require("./src/routes/user.route"));
const port = process.env.PORT || 3001;
dbconfig_1.AppDataSource.initialize()
    .then(() => {
    app_1.app.listen(port, () => {
        console.log(`Server running on port ${port} with successfull database connection`);
    });
})
    .catch((error) => {
    console.log("databse connection failed with error", error);
});
app_1.app.use(user_route_1.default);
