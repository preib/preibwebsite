const responseSuccess = (data) => {
    return { success: true, data }
};

const responseFailure = (msg) => {
    return { success: false, msg }
};

const resWriteFail = (res, msg, status=400) => {
    res.status(status).json(responseFailure(msg));
};

const resWriteSuccess = (res, data, status=200) => {
    res.status(status).json(responseSuccess(data));
};

module.exports = {
    responseSuccess,
    responseFailure,
    resWriteFail,
    resWriteSuccess
};
