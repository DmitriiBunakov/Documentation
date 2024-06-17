// const baseUrl = 'https://api.telegram.org/bot';
// const token = '7307127354:AAGSe8U2uIyb-1W9yyYq3aq2M4RIU5ivvHA';
// const apiUrl = baseUrl + token;

// const METHODS = {
//     getMe: 'getMe',
//     sendMessage: 'sendMessage',
//     getUpdates: 'getUpdates',
//     setWebhook: 'setWebhook',
// }

// function generateApiUrl(method) {
//     return `${apiUrl}/${method}`;
// }


// class Requests {
//     getMe() {
//         return fetch(generateApiUrl(METHODS.getMe))
//             .then(response => response.json())
//     }

//     sendMessage(params) {
//         return fetch(`${generateApiUrl(METHODS.sendMessage)}${params}`, {
//             method: 'POST',
//         })
//         .then(response => response.json())
//     }

//     getUpdates() {
//         return fetch(generateApiUrl(METHODS.getUpdates))
//             .then(response => response.json())
//     }

//     setWebhook() {
//         return fetch(generateApiUrl(METHODS.setWebhook))
//             .then(response => response.json())
//     }
// }


// const requestsService = new Requests();


// requestsService.getMe()
//     .then(console.log)


// const params = new URLSearchParams();
// params.append('chat_id', 957884125);
// params.append('text', 'test');

// requestsService.sendMessage(`?${params.toString()}`)
//     .then(console.log)


// requestsService.getUpdates()
//     .then(console.log)

// requestsService.setWebhook()
//     .then(console.log)
