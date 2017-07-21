const jsmediatags = require('jsmediatags')
const path = require('path')

export default class Tagger {
  static getNewFileName (filePath) {
    const clearString = (str) => {
      while (['.', ',', ' ', '/', '\\'].indexOf(str.charAt(str.length - 1)) > 0) {
        str = str.slice(0, -1)
      }
      return str
    }

    return new Promise((resolve, reject) => {
      new jsmediatags.Reader(filePath)
        .setTagsToRead(['title', 'artist', 'album'])
        .read({
          onSuccess: function (tag) {
            let res = {oldFile: filePath, newName: null}
            let ext = path.extname(filePath)
            let artist = tag.tags.artist
            let title = tag.tags.title
            // let album = tag.tag.album
            if (artist && title) res.newName = clearString(artist) + ' - ' + clearString(title) + ext
            resolve(res)
          },
          onError: function (error) {
            console.error('error:', error.type, ', ', error.info, ', file:', filePath)
            reject(error)
          }
        })
    })
  }
}
