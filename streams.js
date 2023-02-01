const fs = require("fs")

const readStream = fs.createReadStream("./docs/blog3.txt", { encoding: "utf8"})
const writeStream = fs.createWriteStream("./docs/blog4.txt")

//pasing chunk by chunk
function copyChunkByChunk() {
    readStream.on("data", (chunk) => {
        console.log("---------------NEW CHUNK---------------")
        console.log(chunk)
        console.log("\n")

        writeStream.write("\nNEW CHUNK\n")
        writeStream.write(chunk)
    })
}


//piping
function copyByPiping() {
    readStream.pipe(writeStream)
}


copyByPiping()
