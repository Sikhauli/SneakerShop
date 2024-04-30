const {
    login,
    logout,
    register, 
    update,
    authenticateUser
} = require("./controller");

const router = require("express").Router();

router.post("/login", login);

router.post("/register", register);

router.patch("/update/:id", update)

router.get("/authenticate", authenticateUser);

router.get("/logout", logout);

// router.get("/authenticate", authenticateUser);

// router.post("/forgot-password", forgotPassword);

// router.post("/email-verification", verifyEmail);

// router.post("/validate-code", confirmVerificationCode);

module.exports = router;
