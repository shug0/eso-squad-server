import fs from 'fs'
import http from 'http'
import pictures from '/'

function saveImageToDisk (url, localPath) {
  const file = fs.createWriteStream(localPath)
  http.get(url, function (response) {
    response.pipe(file)
  })
}

pictures.forEach(item =>
  saveImageToDisk(item.url, `./assets/${item.name}.jpg`)
)
