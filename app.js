/**
 * Express server | Backend me-API
 */

"use strict";
require('dotenv').config();

const port = 3080;
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const morgan = require("morgan");
// const SECRET_KEY = require("./config/config");
const routeIndex = require("./routes/index");
const routeReports = require("./routes/reports");
const routeAccount = require("./routes/account");
const middleware = require("./middleware/index");
const app = express();

app.use(cors());

app.use(middleware.logIncomingToConsole);
app.use(cookieParser());
app.use("/", routeIndex);
app.use("/reports", routeReports);
app.use("/account", routeAccount);

// if (process.env.NODE_ENV !== "test") {
//     
// }
app.listen(port, logStartUpDetailsToConsole);

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

// const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// module.exports = server;
