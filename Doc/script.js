


let test = document.querySelector('#test');
let inside = document.querySelector('#inside');

console.log('clientHeight', test.clientHeight);
console.log('clientWidth', test.clientWidth);
console.log('clientLeft', test.clientLeft);
console.log('clientTop', test.clientTop);
console.log('offsetParent', test.offsetParent);
console.log('offsetTop', test.offsetTop);
console.log('offsetLeft', test.offsetLeft);
console.log('offsetWidth', test.offsetWidth);
console.log('offsetHeight', test.offsetHeight);
console.log('scrollHeight', test.scrollHeight);
console.log('scrollTop', test.scrollTop);
console.log('contentWidth', test.clientWidth - parseFloat(getComputedStyle(test).paddingLeft) - parseFloat(getComputedStyle(test).paddingRight));
