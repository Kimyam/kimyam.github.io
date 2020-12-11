var version = '1'

this.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(version).then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/js/lib/jquery-3.5.1.min.js',
                '/js/lib/dayjs-1.9.6.min.js',
                '/js/main.js',
                '/js/widget.js',
                '/css/main.css',
                '/assets/img/background3.jpg',
                '/assets/img/baidu.svg'
            ])
        })
    )
})

this.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(res) {
            return res || fetch(e.request).then(function(response) {
                return caches.open(version).then(function(cache) {
                    cache.put(e.request, response.clone())
                    return response
                })
            })
        })
    )
})

this.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(k) {
                if (k !== VERSION) {
                    return caches.delete(k)
                }
            }))
        })
    )
})
