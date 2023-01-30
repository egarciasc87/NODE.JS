//global object
console.log(global)

function testCode_1() {
    setTimeout(() => {
        console.log('in the timeout')
        clearInterval(int)
    }, 3000)

    const int = setInterval(() => {
        console.log("in the interval")
    }, 1000)
}


//testCode_1()
console.log(__dirname)
console.log(__filename)
console.log(document.querySelector)

