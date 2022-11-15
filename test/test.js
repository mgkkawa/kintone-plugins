const wait = sec => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, sec * 1000)
    //setTimeout(() => {reject(new Error("エラー！"))}, sec*1000);
  }).then()
}

const countUp = async sec => {
  let i = 0
  while (i <= sec) {
    console.log(i + '秒')
    await wait(1)
    ++i
  }
  console.log('完了！！')
}

countUp(5)
