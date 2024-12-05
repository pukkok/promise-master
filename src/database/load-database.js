import fs from 'fs'
import { storagePath } from './storage-path.js'

// 스토리지 읽어오기
const loadDB = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(storagePath, (err, data) => {
      if(err) {
        // 데이터베이스가 없다면, 데이터 베이스를 생성한다.
        if(err.code === "ENOENT") {
          fs.writeFile(storagePath, "", (err) => {
            if(err) return console.error('파일 쓰기 실패')
              console.log("새로운 데이터베이스가 생성되었습니다.")
          })
          resolve("")
        }
      } else {
        resolve(JSON.parse(data.toString()))
      }
    })
  })

}

export default loadDB