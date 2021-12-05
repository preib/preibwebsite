const { ArgType, Integer, String, ArrayOfInts, StringArray } = require('./argtypes');
const { resWriteFail } = require("../response");
const { debugMode } = require('../../config');

const DefaultArg = new ArgType();
const IntegerArg = new Integer();
const StringArg = new String();
const IntArrayArg = new ArrayOfInts();
const StringArrayArg = new StringArray();

const QUERY = 'QUERY';
const ROUTE = 'ROUTE';

function createController( allParams, handler, routeName ) {
    allParams = Array.isArray(allParams) ? allParams : [ allParams ];
    
    let routeParams = allParams.filter( (param) => param.group == undefined || param.group == ROUTE );
    let queryParams = allParams.filter( (param) => param.group == QUERY );
        
    let requiredParams = queryParams.filter( (param) => param.required || param.required == undefined );
    
    let paramMap = queryParams.reduce( (obj, param) => { obj[param.name] = param; return obj }, {} );

    return async (req, res, next) => {
        debugMode && console.log(routeName, req.query, req.params);
        req.parsedParams = {};
        for (let param of routeParams) {
            let value = req.params[param.name];
            if (value == undefined) {
                resWriteFail(res, `Missing route parameter "${param.name}" of type "${param.type.name}"`);
                return;
            } else {
                let [valid, result] = param.type.transform(value)
                if (!valid) {
                    resWriteFail(res, `Route parameter "${param.name}" must be of type "${param.type.name}"`);
                    return;
                } else {
                    req.parsedParams[param.name] = result;
                    delete req[param.name];
                }
            }
        }

        req.parsedQuery = {};
        for (let param of requiredParams) {
            let value = req.query[param.name];
            if (value == undefined) {
                resWriteFail(res, `Missing query parameter "${param.name}" of type "${param.type.name}"`);
                return;
            } else {
                let [valid, result] = param.type.transform(value);
                if (!valid) {
                    resWriteFail(res, `Query parameter "${param.name}" must be of type "${param.type.name}"`);
                    return;
                } else {
                    req.parsedQuery[param.name] = result;
                    delete req.query[param.name];
                }
            }
        }

        for (let paramName in req.query) {
            let value = req.query[paramName];
            let param = paramMap[paramName];
            if (param == undefined) {
                resWriteFail(res, `Unknown parameter "${paramName}"`);
                return;
            } else {
                let [valid, result] = param.type.transform(value);
                if (!valid) {
                    resWriteFail(res, `Query parameter "${param.name}" must be of type "${param.type.name}"`);
                    return;
                } else {
                    req.parsedQuery[param.name] = result;
                    delete req.query[param.name];
                }
            }
        }

        let maybePromise = handler(req, res, next);
        if (maybePromise instanceof Promise) {
            await maybePromise;
        }
    }
}

module.exports = {
    DefaultArg,
    IntegerArg,
    StringArg,
    IntArrayArg,
    StringArrayArg,

    QUERY,
    ROUTE,

    createController
};
