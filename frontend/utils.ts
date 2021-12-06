export const sleep = (millis) => {
    return new Promise( (resolve, reject) => {
        setTimeout(resolve, millis);
    });
};
