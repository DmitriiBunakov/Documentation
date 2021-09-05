/*АССИНХРОННОСТЬ ASYNC EVENTLOOP*/
/*
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICBjb25zb2xlLmxvZygnY2xpY2snKQp9KTsKCmNvbnNvbGUubG9nKCJIaSEiKTsKCi8vIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dCgpIHsKLy8gICAgIGNvbnNvbGUubG9nKCJDbGljayB0aGUgYnV0dG9uISIpOwovLyB9LCA1MDAwKTsKCmNvbnNvbGUubG9nKCJlbmQiKTsKY29uc29sZS5sb2coImVuZCIpOwpjb25zb2xlLmxvZygiZW5kIik7CmNvbnNvbGUubG9nKCJlbmQiKTtjb25zb2xlLmxvZygiZW5kIik7Y29uc29sZS5sb2coImVuZCIpOwpjb25zb2xlLmxvZygiZW5kIik7CmNvbnNvbGUubG9nKCJlbmQiKTsKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwpjb25zb2xlLmxvZygiZW5kIik7CmNvbnNvbGUubG9nKCJlbmQiKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
Принцип работы: сначала браузер бежит по коду и вызывает методы и т.д. Все это попадает в stack
Синхронные функции выполняются сразу, и идет дальше
Обработчики событий сначала попадают в stack и регистрируют обработчик, а затем в webapi, где ждут событие,
как только клик произойдет функция, которую вызываем в обработчике попадет в очередь, и будет ждать выполнения
всего кода, пока stack не будет пустым она будет ждать. Затем она попадет в stack ,вызовется и выведет результат.

Ловушка SetTimeout, если установить его в 0, все равно код будет асинхронным, т.к. сначала все равно код попадет
в Webapi, а затем в очередь и только потом в stack
И дело в том, что он еще устанавливает по умолчанию 10милисекунд
*/
// console.log('start');
// console.log('start 2');
// window.setTimeout(() => {
//     console.log('timeout 500ms start 3');
// }, 500)
// console.log('start 4');






















//!====================================================================================================
// XMLHTTP and Fetch
let urlReq5435 = 'https://jsonplaceholder.typicode.com/users';
function doRequest(method, url, data = null) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.responseType = 'json';
        xhr.onload = function () {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }
        xhr.onerror = function () {
            reject(xhr.response);
        }
        xhr.send(JSON.stringify(data));
    })
}
// doRequest('GET', urlReq5435)
//     .then(res => { console.log(res); })
//     .catch(error => { console.log(error); });

// doRequest('POST', urlReq5435, { name: 'Dima', age: 22 })
//     .then(res => { console.log(res); })
//     .catch(err => console.log(err));


//?====================================================================================================
// https://learn.javascript.ru/fetch
// https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://developer.mozilla.org/ru/docs/Web/HTTP/CORS
/*Fetch */

// fetch(urlReq5435, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify({ name: 'Dima', age: 22 }),
//     credentials: 'include',
// })
//     .then(res => {
//         console.log(res);
//         if (res.ok) {
//             return res.json()
//         } else {
//             throw new Error(res.status)
//         }
//     })
//     .then(res => { console.log(res); })
//     .catch(err => { console.log(err); });


/*=================================================================================================*/
async function doReq(url, method = 'GET', body = null) {
    let res = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body),
        credentials: 'include',
    })
    if (!res.ok) {
        throw new Error(res.status);
    }
    return await res.json();
}
// doReq(urlReq5435, 'POST', { age: 22, name: 'Igor' })
//     .then(res => console.log(res))
//     .catch(err => { console.log(err) });





//!====================================================================================================
/*LOCALSTORAGE
может работать ТОЛЬКО со строками
*/
// localStorage.setItem('SomeName', 5); //если значение есть, перезапишется значение
// localStorage.getItem('SomeName');
// localStorage.removeItem('SomeName');
// localStorage.clear(); // Очистить полность
// Можно записывать обьекты, данные какие то. Обьекты записываются в формате JSON(нужно перевести в него)



//!====================================================================================================
/*CORS COOCKIE ПЕЧЕНЬКА */
/*
COOCKIE файл, который цепляется для передачи на сервер при любом запросе.
Например логинизация. Мы отправляем запрос на сервер с паролем и логином, и нам возвращается coockie в которую
сервер записал наш ID в закодированном виде, если мы переходим например во вкладку сообщения, то мы отправляем с
запросом coockie в котором уже есть ID наш и сервер говорит, да, это ты, ты залогинен, и отдает сообщения, которые
нам принадлежат.
Запомнить меня это время жизни coockie условно говоря. Т.е. без нее живет пол часа после завершения сессии, с ней
допустим месяц.


Браузер не отправляет coockie если идет кросс доменный запрос.
Нужно указывать дополнительные параметры, чтобы разрешить передавать cockie.
В axios нужно установить в axios вторым аргументом обьект с настройками, в котором withCredentials = true, также там
можно установить headers: {}.
*/





//? Создание своего плеера, Плеер, Video, Audio, Player, HTMLMediaElement
//? https://developer.mozilla.org/ru/docs/Web/API/HTMLMediaElement

