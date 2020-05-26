class NotImplementedError extends Error {
    constructor(message) {
        super()
        this.msg = message
    }
}

class ApiError extends Error {
    constructor(error_code, error_msg, error_text) {
        super()
        this.error_code = error_code
        this.error_msg = error_msg
        this.error_text = error_text
    }
}

module.exports = { ApiError, NotImplementedError }