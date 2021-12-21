export const validateEmail = (email) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
}

export const validateUserName = (username) => {
    const pattern =  /^[a-zA-Z ]+$/
    return pattern.test(username);
}

export const validatePassword = (password) => {
    const pattern = /^(?=.{6,})/;
    return pattern.test(password);
}