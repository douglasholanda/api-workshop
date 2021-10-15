const { Router } = require("express");
const InterestController = require("../controllers/InterestController");

const router = Router();

router.post("/interests", InterestController.createInterest);
router.delete("/interests/:id", InterestController.deleteInterest);
router.get("/interests", InterestController.getInterests);

module.exports = router;
