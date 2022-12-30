console.log('my_module.js');

export async function sum(){
    console.log("Function Sum");

    return {
        foo: function() {
            console.log("Function Foo");
        }
    }
}
