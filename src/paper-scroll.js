const PaperScrollClient = require("./client");
const PaperScrollMethods = require("./methods");

class PaperScroll {
    constructor(merchant_id, access_token) {
        this.access_token = access_token
        this.merchant_id = merchant_id

        this.client = new PaperScrollClient(access_token, merchant_id)
        this.api = new PaperScrollMethods(this.client)
    }

    getApi() {
        return this.api
    }

    getClient() {
        return this.client
    }
}

module.exports = PaperScroll