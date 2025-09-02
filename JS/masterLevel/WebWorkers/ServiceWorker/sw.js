let version = "v1";

self.addEventListener("install",e=>{
    console.log("instalando service worker");

    // Cache use:
    caches.open(version).then(cache=>{
        cache.add("index.html").then(res=>{
            console.log("info cacheada")
        }).catch(e=>{
            console.log(e)
        })
    })
})

self.addEventListener("activate",()=>{
    caches.keys().then(key=>{
        return Promise.all(
            key.map(cache=>{
                if (cache !== version){
                    console.log("cache antiguo eliminado")
                    return caches.delete(cache);
                    
                }
            })
        )
    })
})

self.addEventListener("fetch",e=>{
    e.respondWith(async function(){
        const resCache= await caches.match(e.request);
        if (resCache) return resCache;
        return e.request;
    });
})

self.addEventListener("message",e=>{
    console.log("se ha recibido el siguiente mensaje:");
    console.log(e.data);
    e.source.postMessage("Hola, que tal?")
})