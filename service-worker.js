let cacheName = 'perelviewPWA-v2';
let dataCacheName = 'perelviewData-v2';
let filesToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/css/fonts.css',
    '/css/normalize.css',
    '/css/style.css',
    '/android-chrome-144x144.png',
    '/apple-touch-icon.png',
    '/browserconfig.xml',
    '/favicon.ico',
    '/favicon-16x16.png',
    '/favicon-32x32.png',
    '/safari-pinned-tab.svg',
    '/mstile-150x150.png',
    '/fonts/NarkisTam-Bold_MFW/NarkisTam-Bold_MFW.eot',
    '/fonts/NarkisTam-Bold_MFW/NarkisTam-Bold_MFW.ttf',
    '/fonts/NarkisTam-Bold_MFW/NarkisTam-Bold_MFW.woff',
    '/fonts/NarkisTam-Bold_MFW/NarkisTam-Bold_MFW.woff2',
    '/fonts/NarkisTam-Medium_MFW/NarkisTam-Medium_MFW.eot',
    '/fonts/NarkisTam-Medium_MFW/NarkisTam-Medium_MFW.svg',
    '/fonts/NarkisTam-Medium_MFW/NarkisTam-Medium_MFW.ttf',
    '/fonts/NarkisTam-Medium_MFW/NarkisTam-Medium_MFW.woff',
    '/fonts/NarkisTamMFW-Regular/NarkisTamMFW-Regular.eot',
    '/fonts/NarkisTamMFW-Regular/NarkisTamMFW-Regular.ttf',
    '/fonts/NarkisTamMFW-Regular/NarkisTamMFW-Regular.woff',
    '/fonts/NarkisTamMFW-Regular/NarkisTamMFW-Regular.woff2',
    '/img/attention.png',
    '/img/avatar.png',
    '/img/brackets.png',
    '/img/Background_copy.png',
    '/img/call_icon.png',
    '/img/close.png',
    '/img/divider.png',
    '/img/Layer_576.png',
    '/img/logo_hadera.png',
    '/img/logo_shikun.png',
    '/img/next_button.png',
    '/img/open.png',
    '/img/prev_button.png',
    '/img/select_arrow.png',
    '/img/Shape_1_copy_7.jpg',
    '/img/slider_left_background.png',
    '/img/slider_right_background.png',
    '/img/x.png',
    '/js/lib/slick/fonts/slick.eot',
    '/js/lib/slick/fonts/slick.svg',
    '/js/lib/slick/fonts/slick.ttf',
    '/js/lib/slick/fonts/slick.woff',
    '/js/lib/slick/ajax-loader.gif',
    '/js/lib/slick/config.rb',
    '/js/lib/slick/slick.js',
    '/js/lib/slick/slick.min.js',
    '/js/lib/slick/slick.less',
    '/js/lib/slick/slick.scss',
    '/js/lib/slick/slick-theme.less',
    '/js/lib/slick/slick-theme.scss',
    'js/lib/slick/slick-theme.css',
    'js/lib/slick/slick.css',
    '/js/call.js',
    '/js/closeModal.js',
    '/js/contactForm.js',
    '/js/ctcBtnRemover.js',
    '/js/ellipsis.js',
    '/js/serviceWorkerInstaller.js',
    '/js/slick.js',
    '/js/sliderOnClick.js',
    '/js/utmHandler.js'
];

let weatherAPIUrlBase = 'http://perelview.herokuapp.com/';

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName && key !== dataCacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', function(e) {
    if (e.request.url.startsWith(weatherAPIUrlBase)) {
        e.respondWith(
            fetch(e.request)
                .then(function(response) {
                    return caches.open(dataCacheName).then(function(cache) {
                        cache.put(e.request.url, response.clone());
                        console.log('[ServiceWorker] Fetched & Cached', e.request.url);
                        return response;
                    });
                })
        );
    } else {
        e.respondWith(
            caches.match(e.request).then(function(response) {
                console.log('[ServiceWorker] Fetch Only', e.request.url);
                return response || fetch(e.request);
            })
        );
    }
});
