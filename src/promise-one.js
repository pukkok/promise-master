const first = new Promise((resolve, reject) => {
  let myName = "민석"  
  
  resolve(myName)
  // 성공하면 매개변수 전달해줄게.
})

first
  .then(res => {
    res += '이는 '
    console.log(res)
    const result = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(res)
      }, 3000)
    })
    return result
  })
  .then(res => {
    console.log(res)
    res += '빠르지롱 '
    const result = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(res)
      }, 2000)
    })
    return result
  })
  .then(res => {
    res += '욱재와 다르지롱'
    console.log(res)

    setTimeout(() => {
      console.log(res += ' 빠르지롱')
    }, 1000)

  })
