import { baseUrl } from './config';

export const sleep = (millis) => {
    return new Promise( (resolve, reject) => {
        setTimeout(resolve, millis);
    });
};

export const sanitizeUrl = (url) => {
    let webdevUrl;
    try {
        window == undefined;
        webdevUrl = (new URL(window.location as any)).origin;
    } catch {
        webdevUrl = baseUrl;
    }
    const sanitized = url[0] == '/' ? webdevUrl + '/' + url.slice(1) : url;
    console.log('sanitized', sanitized);
    return sanitized;
};
