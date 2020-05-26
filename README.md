# PaperScroll SDK для Node.JS
**PaperScroll SDK для Node.JS** простая реализация методов API PaperScroll

[![npm version](https://img.shields.io/npm/v/paper-scroll-sdk)](https://www.npmjs.org/package/paper-scroll-sdk)
[![install size](https://packagephobia.now.sh/badge?p=paper-scroll-sdk)](https://packagephobia.now.sh/result?p=paper-scroll-sdk)
[![npm downloads](https://img.shields.io/npm/dm/paper-scroll-sdk.svg)](http://npm-stat.com/charts.html?package=paper-scroll-sdk)
![license: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

[Документация PaperScroll API](https://paperscroll.docs.apiary.io)

### Установка

```js
$ npm i paper-scroll-sdk
```

### Пример использования

```js
const PaperScroll = require("paper-scroll-sdk");

const client = new PaperScroll(merchant_id, "access_token")
const api = client.getApi();

// Promise example
api.getMerchants().then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});

// async/await example
async function example() {
    try {
        result = await api.getMerchants();
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

example();
```

### Методы SDK

|       API Метод           |       Метод в коде       |
|---------------------------|--------------------------|
| merchants.get             | getMerchants             |
| merchants.edit            | editMerchant             |
| users.get                 | getUsers                 |
| users.getBalances         | getUsersBalances         |
| transfers.create          | createTransfer           |
| transfers.get             | getTransfers             |
| transfers.getHistory      | getHistoryTransfers      |
| storage.getDisinfectants  | getDisinfectantsStorage  |
| storage.getItems          | getItemsStorage          |
| webhooks.get              | getWebhook               |
| webhooks.create           | createWebhook            |
| webhooks.delete           | deleteWebhook            |
| webhooks.getLogs          | getLogsWebhook           |
| *                         | callMethod               |

### Баги и PR
Репозиторий открыт для изменений! Если вы заметили какую-то ошибку связанную с кодом, откройте ***Issue*** и если знаете, как эту ошибку решить, открывайте ***Pull Request***