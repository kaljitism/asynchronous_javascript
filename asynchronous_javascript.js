//**
// JavaScript has three ways of doing this -
// 1. Promise API
// 2. Callback API
// 3. Synchronous API
// **//

// // ***** Promise API ***** //

const fs_promise = require('fs/promises');

(
 async () => {
     try {
         await fs_promise.copyFile("command.txt", "copied-promise.txt")
         console.log((await fs_promise.readFile("copied-promise.txt")).toString("utf8"))
     } catch (error) {
         console.log(error)
     }
 }) ()

//***** Callback API ***** //

const fs = require('fs')

fs.copyFile("command.txt", "copied-callback.txt", (error) => {
    if (error) console.log(error)
    fs.readFile("copied-callback.txt", "utf8", (error, data) => {
        if (error) console.log(error)
        console.log(data)
    })
})


// ***** Synchronous API ***** //

const fs_sync = require('fs')

fs_sync.copyFileSync("command.txt", "copied-sync.txt")
console.log(fs_sync.readFileSync("copied-sync.txt", "utf8", ))