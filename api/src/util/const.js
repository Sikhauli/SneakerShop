const COOKIE_MAX_AGE = 1000 * 60 * 60; //1h

const BCRYPT_SALT = 10;
const MAX_LOGIN_ATTEMPTS = 4;
const MAX_CONFIRM_EMAIL_ATTEMPTS = 5;

const USERS = {
    ADMIN: "admin",
    USER: "user",
};

<<<<<<< HEAD
const FILE_STORAGE_PATH = {
    sneakerImages: "sneakers/images/",
=======

const FILE_STORAGE_PATH = {
    // vehicleImages: "vehicles/images/",
    sneakerImages: "sneaker/images/",
>>>>>>> c87c7d467163fa0c3aee553d0510d24317e6eddc
    userAvatars: "users/avatars/",
};

module.exports = {
    COOKIE_MAX_AGE,
    USERS,
    BCRYPT_SALT,
    FILE_STORAGE_PATH,
    MAX_LOGIN_ATTEMPTS,
    MAX_CONFIRM_EMAIL_ATTEMPTS,
};
