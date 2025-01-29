import mysql from "mysql2";
import path from "path";
import dotenv from "dotenv";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Pool of connections
const pool = mysql.createPool({
  host: "yndj7t.stackhero-network.com",
  user: "root",
  password: "HFZ1afleytcpHCADUf21GSsODcJNWZ2V",
  database:
    "mysql://root:HFZ1afleytcpHCADUf21GSsODcJNWZ2V@yndj7t.stackhero-network.com:5873/root?useSSL=true&requireSSL=true",
  port: 5873,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const promisePool = pool.promise();

export { promisePool };
