import mongoose from "mongoose";

mongoose.connect("mongodb+srv://<LucasMichalski>:<123>@nodeexpress.hmwsauw.mongodb.net/NodeExpress");

let db = mongoose.connection;

export default db;