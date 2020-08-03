var cacheName = 'notices-pwa'
var filesToCache = [
  '/',
  '/index.html',
  '/src/scripts/index.js',
  '/src/scripts/controller/NoticeViewController.js',
  '/src/scripts/controller/NoticeController.js',
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