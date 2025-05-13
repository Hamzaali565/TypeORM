import { app } from "./src/app";
import { dbConfig } from "./src/database/dbconfig";

const port = process.env.PORT || 3001;

dbConfig
  .initialize()
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
