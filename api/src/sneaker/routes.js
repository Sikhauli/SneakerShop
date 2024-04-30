const {
    getSneakers,
    addSneaker,
    getSneaker,
    updateSneaker,
    deleteSneaker, 
} = require("../sneaker/controller");

const { FILE_STORAGE_PATH } = require("../util/const");
const uploadFiles = require("../middlewares/upload");


const router = require("express").Router();

// const { authMiddleware } = require("../middlewares/authMiddleware");

router.get("/", getSneakers);

router.post("/add",
    uploadFiles(FILE_STORAGE_PATH.sneakerImages).array("images[]"),
    addSneaker);

router.get("/:id", getSneaker);

router.patch(
    "/:id",
    uploadFiles(FILE_STORAGE_PATH.sneakerImages).array("images[]"),
    updateSneaker
);

router.delete("/:id", deleteSneaker);

module.exports = router;
