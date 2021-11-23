window._ = require("lodash");

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
window.axios.defaults.headers.common.crossDomain = true;
window.axios.defaults.baseURL = "/api";
window.axios.defaults.headers[""]

let token = document.head.querySelector('meta[name="csrf-token"]');

// window.axios.defaults.headers["Authorization"] = 
// "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYzNTE2Mjk4NX0.DA6oSUgku3S3dHZEnOyKVYLVH5CK3SUFR6w3nF1KMV4";

// console.log('TESTTT BOOSTRAP')

// console.log("HAHAHA", window.axios.defaults.headers.common)

if (token) {
    window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token.content;
    window.axios.defaults.headers.common["Authorization"] = `Bearer ${token.content}`;
} else {
    console.error("CSRF token not found: https://adonisjs.com/docs/4.1/csrf");
}

window.Pusher = require("pusher-js");
