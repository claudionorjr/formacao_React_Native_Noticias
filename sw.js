var cacheName = 'noticespwa'
var filesToCache = [
	'/',
	'/index.html',
	'/src/images/code7-icon-144.png',
	'/src/images/error-404-1429x750.png',
	'/src/statics/css/bootstrap.css',
	'/src/statics/css/bootstrap-grid.css',
	'/src/statics/css/bootstrap-grid.css.map',
	'/src/statics/css/bootstrap-grid.min.css',
	'/src/statics/css/bootstrap-grid.min.css.map',
	'/src/statics/css/bootstrap-reboot.css',
	'/src/statics/css/bootstrap-reboot.css.map',
	'/src/statics/css/bootstrap-reboot.min.css',
	'/src/statics/css/bootstrap-reboot.min.css.map',
	'/src/statics/css/bootstrap.css.map',
	'/src/statics/css/bootstrap.min.css',
	'/src/statics/css/bootstrap.min.css.map',
	'/src/statics/font-awesome/font-awesome.css',
	'/src/statics/font-awesome/font-awesome.min.css',
	'/src/statics/fonts/FontAwesome.otf',
	'/src/statics/fonts/fontawesome-webfont.eot',
	'/src/statics/fonts/fontawesome-webfont.svg',
	'/src/statics/fonts/fontawesome-webfont.ttf',
	'/src/statics/fonts/fontawesome-webfont.woff',
	'/src/statics/fonts/fontawesome-webfont.woff2',
	'/src/statics/js/bootstrap.js',
	'/src/statics/js/bootstrap.bundle.js',
	'/src/statics/js/bootstrap.bundle.js.map',
	'/src/statics/js/bootstrap.bundle.min.js',
	'/src/statics/js/bootstrap.bundle.min.js.map',
	'/src/statics/js/bootstrap.js.map',
	'/src/statics/js/bootstrap.min.js',
	'/src/statics/js/bootstrap.min.js.map',
	'/src/statics/native-bootstrap/bootstrap-native.min.js',
	'/src/scripts/index.js',
	'/tests/testNotices.js',
	'/src/scripts/component/CardComponent.js',
	'/src/scripts/component/CardToFavoriteComponent.js',
	'/src/scripts/component/ModalComponent.js',
	'/src/scripts/component/USDateToBRDate.js',
	'/src/scripts/controller/NoticeViewController.js',
	'/src/scripts/controller/NoticeController.js',
	'/src/scripts/controller/data/db.js',
	'/src/scripts/controller/data/api.js',
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
