 // - Cache - //

 // Save all the information from archives that can be use when reloading the page, so that takes less than usual

"use strict";

caches.open("archivos-estaticos").then(cache => { // Create a DB 
    cache.add("script.js") // Add an archive
    cache.addAll(["script.js","indext.html"]) // Add All
    cache.match("script.js").then(res =>{ // Get an archive, funciona con promesas y se resuleve retornando el Archivo
        console.log(res)
    })
    cache.delete("index.html")

    cache.keys().then(res=>{ // Return all the data in cache
        console.log(res)
    })
}) 

