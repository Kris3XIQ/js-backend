/**
 * Express server | Backend me-API
 */

"use strict";
require('dotenv').config();

// const port = 3080;
const port = 8333;
const express = require("express");
const app = express();
// const server = app.listen(port, logStartUpDetailsToConsole);
// const io = require("socket.io")(server, { origins: "*:*" });
const server = require("http").createServer(app);
const io = require("socket.io")(server, { origins: "*:*" });

const cookieParser = require("cookie-parser");
const dbfunc = require("./db/dbfunctions.js");
const cors = require("cors");
// const morgan = require("morgan");
// const SECRET_KEY = require("./config/config");

const routeIndex = require("./routes/index");
const routeReports = require("./routes/reports");
const routeAccount = require("./routes/account");
const routeChat = require("./routes/chat");
const middleware = require("./middleware/index");

const getTime = require("./models/time.js");

app.use(cors());

app.use(middleware.logIncomingToConsole);
app.use(cookieParser());
app.use("/", routeIndex);
app.use("/reports", routeReports);
app.use("/account", routeAccount);
app.use("/chat", routeChat);

// if (process.env.NODE_ENV !== "test") {
//     app.listen(port, logStartUpDetailsToConsole);
// }
// if (process.env.NODE_ENV !== "test") {
//     io.on("connect", function(socket) {
//         const time = new Date;
//         const now = getTime.getTimeStamp(time);

//         socket.on("chat message", ({ nick, msg }) => {
//             io.emit("chat message", { now, nick, msg });
//         });
//     });
// }
if (process.env.NODE_ENV !== "test") {
    io.on("connect", function(socket) {
        const time = new Date;
        const now = getTime.getTimeStamp(time);

        socket.on("chat message", ({ nick, msg }) => {
            io.emit("chat message", { now, nick, msg });
            if (nick != "") {
                dbfunc.addEntry({ now, nick, msg });
            }
        });
    });
}

/**
 * Log app details to console when starting up.
 *
 * @return {void}
 */
function logStartUpDetailsToConsole() {
    let routes = [];

    // Find what routes are supported
    app._router.stack.forEach((middleware) => {
        if (middleware.route) {
            // Routes registered directly on the app
            routes.push(middleware.route);
        } else if (middleware.name === "router") {
            // Routes added as router middleware
            middleware.handle.stack.forEach((handler) => {
                let route;

                route = handler.route;
                route && routes.push(route);
            });
        }
    });

    console.info(`Server is listening on port ${port}.`);
    console.info("Available routes are:");
    console.info(routes);
}

// const testserver = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.listen(port, logStartUpDetailsToConsole);
module.exports = server;
