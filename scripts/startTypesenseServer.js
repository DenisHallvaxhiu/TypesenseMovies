const { exec } = require("child_process");

require("dotenv").config();

const API_KEY = process.env.TYPESENSE_ADMIN_API_KEY;
const PORT = 8108;
const CONTAINER_NAME = "my-typesense-container"; // Replace with your desired container name

const currentDirectory = __dirname;

const command = `docker run -d -p ${PORT}:8108 -v ${currentDirectory}/typesense-server-data/:/data --name ${CONTAINER_NAME} typesense/typesense:0.22.0.rcu6 --data-dir /data --api-key=${API_KEY} --listen-port ${PORT} --enable-cors`;

exec(command, (err, stdout, stderr) => {
  if (!err && !stderr) {
    console.log("Typesense Server running");
  }
  if (err) {
    console.error("Typesense Server error", err);
  }
  if (stderr) {
    console.log("Error running server: ", stderr);
  }

  if (stdout) {
    console.log("Server output: ", stdout);
  }
});
