const fs = require("fs")

//read files
function readFileJS(fileName) {
    fs.readFile("./docs/" + fileName, (err, data) => {
        if (err) {
            console.log(err)
        }

        console.log(data.toString())
    })

    console.log("last line")
}

//write files
function writeFileJS(fileName) {
    fs.writeFile("./docs/" + fileName, "Hello Wordl!!!", () => {
        console.log("File was updated...")
        readFileJS(fileName)
    })
}

//directories
function createFolderJS(folderName) {
    if (!fs.existsSync("./" + folderName)) {
        fs.mkdir("./" + folderName, (err) => {
            if (err) {
                console.log(err)
            }

            console.log("folder created...")
        })
    }
    else {
        fs.rmdir("./" + folderName, () => {
            console.log("folder deleted!!!")
        })
        //console.log("folder already exists!!!")
    }
}

//delete files
function deleteFileJS(fileName) {
    if (fs.existsSync("./docs/" + fileName)) {
        fs.unlink("./docs/" + fileName, (err) => {
            if (err) {
                console.log(err)
            }

            console.log("file deleted!!!")
        })
    }
}


//executable source code
var fileName = "blog1.txt"

//readFileJS(fileName)
//writeFileJS(fileName)
//createFolderJS("assets")
deleteFileJS("deleteme.txt")
