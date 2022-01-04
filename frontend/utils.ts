import { baseUrl } from './config';

export const sleep = (millis) => {
    return new Promise( (resolve, reject) => {
        setTimeout(resolve, millis);
    });
};

export const sanitizeUrl = (url) => {
    return url[0] == '/' ? baseUrl + '/' + url.slice(1) : url;
};
