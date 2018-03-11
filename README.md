# Express mini auth middleware

```
npm install --save @wdalmut/mini-auth
```

A simple auth middleware to simplify the authentication layer

```js
const auth = require('mini-auth');
app.get("/", auth(all), homePage);
```

## Allow

to create a authentication method just prepare a function that returns a
promise.

```js
let all = () => {
    return Promise.resolve({
        id: 1,
        username: "wdalmut",
    });
};
```

The promise information will be propagated to the application in the `req.user`
field.

## Deny

If the promise will be rejected the auth layer fails and will reply with 401.

```js
let deny = () => {
    return Promise.reject({
        error: "no body in here",
    });
};
```

