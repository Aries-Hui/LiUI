const delay = (delayTime = 25): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, delayTime)
  })

export default {
  delay,
}
