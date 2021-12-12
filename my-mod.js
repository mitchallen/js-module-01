// File: my-mod.js

export function makeObject(options = {}) {
    let {
        name = 'Robbie'
    } = options;
    
    function hello() {
        console.log(`My name is ${name}`);
    }

    return {
        hello,
    }
}

export default {}