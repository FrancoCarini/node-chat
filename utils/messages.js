const generateMessage = (username, text) => {
  return {
    username,
    text,
    cretedAt: new Date().getTime()
  }
}

module.exports = {
  generateMessage
}