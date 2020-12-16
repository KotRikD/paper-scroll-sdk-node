class PaperScrollMethods {
    /**
     * Создание экземпляра
     *
     * @param {PaperScrollClient} client объект клиента PaperScrollClient
     */
    constructor(client) {
        this.client = client
    }

    /**
     *  Возвращает информацию о магазинах по их идентификаторам
     *
     * @param {Object} merchant_ids ID магазинов, не больше 100 элементов. По умолчанию — идентификатор текущего магазина.
     * @returns {*|Promise<AxiosResponse<T>>|Promise<*>}
     */
    getMerchants(merchant_ids = []) {
        return this.client.request("merchants.get", {
            merchant_ids: merchant_ids
        })
    }

    /**
     *  Редактирует информацию о текущем магазине
     *
     * @param {Object} newMerchantObject Объект мерчанта, состоящий из name, group_id, avatar
     * @returns {*|Promise<AxiosResponse<T>>|Promise<*>}
     */
    editMerchant(newMerchantObject) {
        return this.client.request("merchants.edit", newMerchantObject)
    }

    /**
     * Возвращает информацию о пользователях по их идентификаторам
     *
     * @param {Object} user_ids ID пользователей, не больше 100 элементов. Если профиль пользователя ещё не был создан в приложении, то объекта с его данными в ответе не будет.
     * @returns {*|Promise<AxiosResponse<T>>|Promise<*>}
     */
    getUsers(user_ids) {
        return this.client.request("users.get", {
            user_ids: user_ids
        })
    }

    /**
     * Возвращает информацию о балансах пользователей по их идентификаторам
     *
     * @param {Object} user_ids ID пользователей, не больше 250 элементов
     * @returns {*|Promise<AxiosResponse<T>>|Promise<*>}
     */
    getUsersBalances(user_ids) {
        return this.client.request("users.getBalances", {
            user_ids: user_ids
        })
    }

    /**
     * Запускает выполнение нового перевода
     *
     * @param {Object} transferObject объект перевода состоящий из peer_id, object_type, object_type_id, amount, message
     * @returns {*|Promise<AxiosResponse<T>>|Promise<*>}
     */
    createTransfer(transferObject = {}) {
        return this.client.request("transfers.create", transferObject)
    }

    /**
     * Возвращает список переводов по их идентификаторам
     *
     * @param {Object} transfer_ids ID пользователей, не больше 100 элементов. Если профиль пользователя ещё не был создан в приложении, то объекта с его данными в ответе не будет.
     * @returns {*|Promise<AxiosResponse<T>>|Promise<*>}
     */
    getTransfers(transfer_ids) {
        return this.client.request("transfers.get", {
            transfer_ids: transfer_ids
        })
    }

    /**
     * Возвращает список последних переводов
     *
     * @param {Number} offset Смещение относительно первого найденного перевода
     * @param {Number} limit Количество возвращаемых переводов, не больше 250 элементов.
     * @returns {*|Promise<AxiosResponse<T>>|Promise<*>}
     */
    getHistoryTransfers(offset = 0, limit = 50) {
        return this.client.request("transfers.getHistory", {
            offset: offset,
            limit: limit
        })
    }

    /**
     * Возвращает информацию об имеющихся средствах защиты в инвентаре
     *
     * @returns {*|Promise<AxiosResponse<T>>|Promise<*>}
     */
    getDisinfectantsStorage() {
        return this.client.request("storage.getDisinfectants", {})
    }

    /**
     * Возвращает информацию об имеющихся предметах в инвентаре
     *
     * @returns {*|Promise<AxiosResponse<T>>|Promise<*>}
     */
    getItemsStorage() {
        return this.client.request("storage.getItems", {})
    }

    /**
     * Возвращает информацию о текущем установленном сервере или ошибку при его отсутствии
     *
     * @returns {*|Promise<AxiosResponse<T>>|Promise<*>}
     */
    getWebhook() {
        return this.client.request("webhooks.get", {})
    }

    /**
     * Настраивает Webhook для отправки уведомлений о событиях
     *
     * @param {string} url URL для отправки уведомлений
     * @param {Object} events Типы отправляемых событий на сервер
     * @returns {*|Promise<AxiosResponse<T>>|Promise<*>}
     */
    createWebhook(url, events) {
        return this.client.request("webhooks.create", {
            url: url,
            events: events
        })
    }

    /**
     * Удялает текущий используемый сервер
     *
     * @returns {*|Promise<AxiosResponse<T>>|Promise<*>}
     */
    deleteWebhook() {
        return this.client.request("webhooks.delete", {})
    }

    /**
     * Возвращает информацию о последних 20 ошибках при отправке событий
     *
     * @returns {*|Promise<AxiosResponse<T>>|Promise<*>}
     */
    getLogsWebhook() {
        return this.client.request("webhooks.getLogs", {})
    }

    /**
     * Вызывает кастомный метод с апи, при необходимости
     *
     * @param {string} method Метод апи
     * @param {Object} params Параметры метода
     * @returns {*|Promise<AxiosResponse<T>>|Promise<*>}
     */
    callMethod(method, params) {
        return this.client.request(method, params)
    }
}


module.exports = PaperScrollMethods