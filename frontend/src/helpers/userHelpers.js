import { setUser } from "../redux/slices/userSlice"

export const setUserFromLocalStorage = (dispatch) => {
    const userDataFromLocalStorage = localStorage.getItem('user');
    if (userDataFromLocalStorage) {
        const userData = JSON.parse(userDataFromLocalStorage);
        const currentTime = new Date().getTime();
        if (userData.expirationTime && currentTime < userData.expirationTime) {
            // User data is still valid, use it
            dispatch(setUser(userData));
        } else {
            // User data has expired, clear it from localStorage
            localStorage.removeItem('user');
        }
    }
};
