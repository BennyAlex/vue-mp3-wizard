const path = require('path')
const fs = require('fs-extra')
const klaw = require('klaw')
const through2 = require('through2')

const getNonExistingFileName = (filePath) => {
  if (!filePath) return console.error('filePath missing!')
  const basePath = path.dirname(filePath)
  const ext = path.extname(filePath)
  const fileName = path.basename(filePath, ext)
  let i = 1
  while (fs.existsSync(filePath)) {
    filePath = basePath + '\\' + fileName + ' (' + i + ')' + ext
    i++
  }
  return filePath
}

const loadFilesFromFolder = (folderPath, ignoreFolder, onlyExt) => {
  if (!folderPath) return console.error('folderPath missing!')
  function ignoreFolderFilter (item) {
    if (ignoreFolder) return path.basename(item) !== ignoreFolder
    else return true
  }

  const excludeDirAndOnlyExt = through2.obj(function (item, enc, next) {
    if (onlyExt) {
      if (!item.stats.isDirectory() && path.extname(item.path) === onlyExt) this.push(item)
    }
    else if (!item.stats.isDirectory()) this.push(item)
    next()
  })

  const items = []
  return new Promise((resolve, reject) => {
    klaw(folderPath, {filter: ignoreFolderFilter})
      .pipe(excludeDirAndOnlyExt)
      .on('data', function (item) {
        items.push(item.path) // only items of none ignored folders will reach here
      })
      .on('error', function (error, item) {
        reject('error:', error.message, 'file:', item.path)
      })
      .on('end', function () {
        resolve(items) // array of files without directories
      })
  })
}

const moveFile = (filePath, targetDir, newFileName) => {
  if (!targetDir || !filePath) return console.error('filePath or targetDir missing!')
  let newFile
  if (newFileName && targetDir) newFile = targetDir + '\\' + newFileName
  else newFile = targetDir + '\\' + path.basename(filePath)
  fs.ensureDirSync(targetDir)
  const nonExistingFileName = getNonExistingFileName(newFile)
  fs.moveSync(filePath, nonExistingFileName)
  return {oldPath: filePath, newPath: nonExistingFileName}
}

export {loadFilesFromFolder, moveFile}
