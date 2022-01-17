import { baseUrl } from './config';

export const sleep = (millis) => {
    return new Promise( (resolve, reject) => {
        setTimeout(resolve, millis);
    });
};

export const sanitizeUrl = (url) => {
    let webdevUrl = '';
    if (typeof window === 'undefined') {
        webdevUrl = baseUrl;
    }
    const sanitized = url[0] == '/' ? webdevUrl + '/' + url.slice(1) : url;
    return sanitized;
};
