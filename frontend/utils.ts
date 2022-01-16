import { baseUrl } from './config';

export const sleep = (millis) => {
    return new Promise( (resolve, reject) => {
        setTimeout(resolve, millis);
    });
};

export const sanitizeUrl = (url) => {
    let webdevUrl;
    webdevUrl = 'http://134.122.104.112:8009';
    if (typeof window === 'undefined' && process.env.NODE_ENV === 'production') {
        webdevUrl = baseUrl;
    }
    const sanitized = url[0] == '/' ? webdevUrl + '/' + url.slice(1) : url;
    return sanitized;
};
