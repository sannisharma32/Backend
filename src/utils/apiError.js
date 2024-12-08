class ApiError extends Error {
    constructor(
        message = "Something went wrong ",
        status,
        code,
        errors = [],
        stack = ""
    ) {
        super(message)
        this.statusCode = this.statusCode
        this.data = null
        this.message = message
        this.success = flase;
        this.errors = errors

        if (stack) {
            this.stack = stack

        }
        else {
            Error.captureStackTrace(this, this.constructor)
        }


    }

}
export {ApiError}