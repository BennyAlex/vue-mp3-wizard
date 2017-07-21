const path = require('path')
const guessMetadata = require('guess-metadata');
const jsmediatags = require('jsmediatags')
const nodeID3 = require('node-id3')

export default class Tagger {
  static wordsToRemove = []

  static getTags (filePath) {
    return new Promise(resolve => {
      let fileNameWithoutExt = path.basename(filePath, '.mp3')
      this.removeUnwantedWords(fileNameWithoutExt).then(filename => {
        const tags = guessMetadata(filename)
        if (tags.artist && tags.title) {
          // remove Tracknumber
          const tracknumMatch = tags.artist.match(/^(?:(\d+)\s+)?(.+)$/);
          if (tracknumMatch[1]) tags.artist = tracknumMatch[2]
          tags.artist = this.normalizeTag(tags.artist)
          tags.title = this.normalizeTag(tags.title)
          resolve({path: filePath, tags: tags})
        }
        else resolve()
      })
    })
  }

  static writeTags (tags, filePath) {
    let res = nodeID3.write(tags, filePath)
    return {success: res, file: filePath}
  }

  static normalizeTag (tag) {
    if (!tag) console.warn('tag missing')
    if (tag) {
      tag = tag.toLowerCase()
      let t = tag.split(' ')
      if (t.length) {
        for (let i = 0; i < t.length; i++) {
          let first = t[i][0].toUpperCase()
          let rest = t[i].slice(1)
          t[i] = first + rest
        }
      }
      tag = t.join(' ')
    }
    return tag
  }

  static hasExistingTags (filePath) {
    return new Promise(resolve => {
      new jsmediatags.Reader(filePath)
        .setTagsToRead(['title', 'artist', 'album', 'year', 'genre', 'picture', 'lyrics'])
        .read({
          onSuccess: function (tag) {
            let version = parseInt(tag.version.replace('.', '')) // remove ID3 Tags != 2.3.0
            let majaor = tag.major

            if (version !== 23 || majaor !== 3) {
              nodeID3.removeTags(filePath)
              if (tag.tags.title && tag.tags.artist) resolve({path: filePath, tags: tag.tags}) // check if old tags had title and artist
              else resolve({path: filePath})
            }
            else if (!(tag.tags.title && tag.tags.artist)) resolve({path: filePath}) // file doesnt have an artist or a title -> lets tag it
            else resolve() // file already tagged
          },
          onError: function () {
            resolve({path: filePath}) // for the file exists no suitable tag reader, so the file dosnt have tags -> lets tag it
          }
        })
    })
  }

  static removeUnwantedWords (fileName) {
    return new Promise(resolve => {
      let initialFilename = fileName;
      this.wordsToRemove.forEach(item => {
        fileName = fileName.replace(new RegExp(item, 'gim'), '')
      })
      if (!fileName) fileName = initialFilename
      return resolve(fileName)
    })
  }
}
