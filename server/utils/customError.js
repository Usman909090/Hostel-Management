class CustomError extends Error {
    constructor(message, statusCode = 500) {
        super(message)
        this.statusCode = statusCode
        this.message = message
    }
}

tryCatchWrapper = controller => async (req, res, next) => {
    try {
        await controller(req, res, next)
    }
    catch (error) {
        console.log("wrapper error", error)
        next(new CustomError(error?.message, error?.statusCode))
    }
}

module.exports = { CustomError, tryCatchWrapper }