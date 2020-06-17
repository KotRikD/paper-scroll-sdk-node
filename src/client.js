const { NotImplementedError, ApiError } = require("./exceptions");
const axios = require("axios");

class PaperScrollClient {
    constructor(access_token, merchant_id) {
        if (!access_token) {
            throw NotImplementedError("Access token is not specified")
        }
        
        if (!merchant_id) {
            throw NotImplementedError("Merchant ID is not specified")
        }

        this.access_token = access_token;
        this.merchant_id = merchant_id;

        this.token = Buffer.from(`${this.merchant_id}:${this.access_token}`).toString('base64');

        this.client = axios.create({
            baseURL: "https://paper-scroll.ru/api/",
            headers: {'Authorization': `Basic ${this.token}`}
        }); 
    }

    async request(method, params) {
        try {
            let result = await this.client.post(method, params);
            if ('error' in result.data) {
                throw new ApiError(
                    result.data['error']['error_code'],
                    result.data['error']['error_msg'],
                    result.data['error']['error_text'],
                )
            }

            return result.data['response']
        } catch(e) {
            if (!(e instanceof ApiError) && ('response' in e) && e.response.status === 400) {
                throw new ApiError(
                    e.response.data['error']['error_code'],
                    e.response.data['error']['error_msg'],
                    e.response.data['error']['error_text'],
                )
            }

            throw e
        }
    }
}

module.exports = PaperScrollClient;
