const COOKIE_MAX_AGE = 1000 * 60 * 60; //1h

const BCRYPT_SALT = 10;
const MAX_LOGIN_ATTEMPTS = 4;
const MAX_CONFIRM_EMAIL_ATTEMPTS = 5;

const USERS = {
    ADMIN: "admin",
    USER: "user",
};

const FILE_STORAGE_PATH = {
    sneakerImages: "sneakers/images/",
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
