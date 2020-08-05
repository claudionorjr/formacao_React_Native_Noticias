var cacheName = 'noticespwa'
var filesToCache = [
  '/',
  '/index.html',
  '/src/scripts/statics/css/bootstrap.css',
  '/src/scripts/statics/css/bootstrap-grid.css',
  '/src/scripts/statics/css/bootstrap-grid.css.map',
  '/src/scripts/statics/css/bootstrap-grid.min.css',
  '/src/scripts/statics/css/bootstrap-grid.min.css.map',
  '/src/scripts/statics/css/bootstrap-reboot.css',
  '/src/scripts/statics/css/bootstrap-reboot.css.map',
  '/src/scripts/statics/css/bootstrap-reboot.min.css',
  '/src/scripts/statics/css/bootstrap-reboot.min.css.map',
  '/src/scripts/statics/css/bootstrap.css.map',
  '/src/scripts/statics/css/bootstrap.min.css',
  '/src/scripts/statics/css/bootstrap.min.css.map',
  '/src/scripts/statics/font-awesome/font-awesome.css',
  '/src/scripts/statics/font-awesome/font-awesome.min.css',
  '/src/scripts/statics/fonts/FontAwesome.otf',
  '/src/scripts/statics/fonts/fontawesome-webfont.eot',
  '/src/scripts/statics/fonts/fontawesome-webfont.svg',
  '/src/scripts/statics/fonts/fontawesome-webfont.ttf',
  '/src/scripts/statics/fonts/fontawesome-webfont.woff',
  '/src/scripts/statics/fonts/fontawesome-webfont.woff2',
  '/src/scripts/statics/js/bootstrap.js',
  '/src/scripts/statics/js/bootstrap.bundle.js',
  '/src/scripts/statics/js/bootstrap.bundle.js.map',
  '/src/scripts/statics/js/bootstrap.bundle.min.js',
  '/src/scripts/statics/js/bootstrap.bundle.min.js.map',
  '/src/scripts/statics/js/bootstrap.js.map',
  '/src/scripts/statics/js/bootstrap.min.js',
  '/src/scripts/statics/js/bootstrap.min.js.map',
  '/src/scripts/statics/native-bootstrap/bootstrap-native.min.js',
  '/src/scripts/index.js',
  '/src/scripts/component/CardComponent.js',
  '/src/scripts/component/CardToFavoriteComponent.js',
  '/src/scripts/component/ModalComponent.js',
  '/src/scripts/component/USDateToBRDate.js',
  '/src/scripts/controller/NoticeViewController.js',
  '/src/scripts/controller/NoticeController.js',
  '/src/scripts/controller/data/api.js',
  '/src/scripts/controller/data/db.js',
  '/src/scripts/controller/model/NoticeModel.js'
]


/**
 * Descrição: Vai inciar um Worker, abrir um cache e adicionar os arquivos em cache.
 */
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache)
    })
  )
})

/* Pegar os arquivos em cache e exibir quando estiver offline */
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request)
    })
  )
})
