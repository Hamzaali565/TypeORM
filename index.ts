import { app } from "./src/app";
import { AppDataSource } from "./src/database/dbconfig";
import routes from "./src/routes/user.route";
const port = process.env.PORT || 3001;

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Server running on port ${port} with successfull database connection`
      );
    });
  })
  .catch((error) => {
    console.log("databse connection failed with error", error);
  });

app.use(routes);
