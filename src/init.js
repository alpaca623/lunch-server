import "./db";
import app from "./server";

import config from "./config";

const PORT = process.env.PORT || config.PORT;

app.listen(PORT, () => console.log("✅ open lunch server!!"));
