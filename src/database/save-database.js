import fs from 'fs'
import { storagePath } from './storage-path.js'

const saveDataBase = (saveData) => {
  fs.writeFile(storagePath, JSON.stringify(saveData), (err) => {
    if(err) return console.error("파일 쓰기 실패")
    console.log('파일이 저장되었습니다.')
  })
}

export default saveDataBase