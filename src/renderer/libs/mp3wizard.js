import Tagger from './tagger'
import Renamer from './renamer'
import Storage from './storage'
import {loadFilesFromFolder, moveFile} from './file-utils'

export default class Mp3Wizard {
  static tag (folderPath) {
    let targetDir = folderPath + '\\tagged'
    Tagger.wordsToRemove = Storage.wordsToRemove

    return new Promise(resolve1 => {
      return loadFilesFromFolder(folderPath, 'tagged', '.mp3').then(files => {
        return Promise.all(files.map(file => {
          return new Promise((resolve2, reject) => {
            Tagger.hasExistingTags(file).then(result => {
              if (result) {
                if (result.tags) return {path: result.path, tags: result.tags}
                else return Tagger.getTags(result.path)
              }
              else resolve2()
            }).then(pathAndTags => {
              if (pathAndTags) {
                if (pathAndTags.tags.title && pathAndTags.tags.artist) {
                  let res = Tagger.writeTags(pathAndTags.tags, pathAndTags.path)
                  if (res.success) return resolve2(moveFile(pathAndTags.path, targetDir))
                  else reject()
                }
              }
              else resolve2()
            })
          })
        })).then(resolve1).catch(console.error)
      })
    })
  }

  static rename (folderPath) {
    let targetDir = folderPath + '\\renamed'
    return new Promise(resolve1 => {
      return loadFilesFromFolder(folderPath, 'renamed', '.mp3').then(files => {
        return Promise.all(files.map(file => {
          return new Promise(resolve2 => {
            Renamer.getNewFileName(file).then(res => {
              if (res.newName) {
                return resolve2(moveFile(file, targetDir, res.newName))
              }
              else return resolve2()
            })
          })
        })).then(resolve1).catch(console.error)
      })
    })
  }

  static async renamePreview (folderPath) {
    return await loadFilesFromFolder(folderPath).then(files =>
      Promise.all(files.map(
        file => {
          return new Promise(resolve => {
            Renamer.getNewFileName(file).then(res => {
              if (res.newName) {
                return resolve({oldFilePath: file, newFileName: res.newName})
              }
              else return resolve()
            })
          })
        })
      )
    )
  }
}
