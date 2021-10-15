const bodyParser = require("body-parser");
const schedules = require("./ScheduleRoute");

module.exports = (app) => {
    app.use(bodyParser.json(), schedules);
};
