const express = require("express");
const cors = require("cors");
require("./db");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/user"));
app.use("/post", require("./routes/post"));

app.listen(5000, () => console.log("Server running on port 5000"));
