
import * as my from "./my_module.js";

console.log('Hello Project.');

// one way to call
my.sum().then(obj => obj.foo());

// another way to call
(async() => {
        let res = await my.sum();
        res.foo();
    }
)()
