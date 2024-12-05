import {DatabaseSync} from 'node:sqlite'
const db = new DatabaseSync(':memory:')

// 객체의 키와 타입을 생성한다.
db.exec(`
  CREATE TABLE data(
    name TEXT PRIMARY KEY,
    value TEXT,
    bio TEXT
  ) STRICT
`)
// 자리에 맞춰 키와 값을 넣을 수 있다.
// name : 첫번째 ?, value : 두번째 ?, bio : 세번째 ?
const insert = db.prepare('INSERT INTO data (name, value, bio) VALUES (?, ?, ?)')

// 순서에 맞게 값들을 삽입한다.
insert.run('안녕', 'hello', '좋아')
insert.run('반가워', 'world', "나도")
// insert.run('안녕', 'world', "나도") 
// -> PRIMARY KEY 부분에 같은 값이 들어가면 오류가 생긴다

// 생성된 전체 데이터를 읽어온다.
const query = db.prepare('SELECT * FROM data ORDER BY name')
// Execute the prepared statement and log the result set.
console.log(query.all())

// node --experimental-sqlite src/sql-lite/sqlite-database.js <- 실행 명령어