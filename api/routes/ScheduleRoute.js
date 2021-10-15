const { Router } = require("express");
const ScheduleController = require("../controllers/ScheduleController");

const router = Router();

router.post("/schedules", ScheduleController.addSchedule);
router.get("/schedules", ScheduleController.catchScheduleByInstructor);
router.patch("/schedules/:id", ScheduleController.updateSchedule);
router.delete(
    "/schedules/:id/themes/:themeId",
    ScheduleController.deleteScheduleTheme
);
router.post("/schedules/:id/themes", ScheduleController.addScheduleTheme);

module.exports = router;
