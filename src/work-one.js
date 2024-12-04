const returnArr = () => {
  return [1, 2, 3]
}

const test = returnArr()
console.log(test)

test.forEach((item, idx) => {
  test[idx] = item + 1
})

console.log(test)

const testTwo = test.map((item) => {
  return item + 1
})
.map((item) => {
  return item + 10
})

console.log(testTwo)