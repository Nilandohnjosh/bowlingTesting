let totalSum = 0
let trueTotal = 0

function doubleStrike(frame1, frame2, frame3) {
  if (frame1[0] === 10 && frame2[0] === 10) {
    totalSum = 20 + frame3[0]
    return totalSum
  }
}

function singleStrike(frame1, frame2) {
  if (frame1[0] === 10) {
    totalSum = 10 + frame2[0] + frame2[1]
    return totalSum
  }
}

function spare(frame1, frame2) {
  if (frame1[0] + frame1[1] === 10) {
    totalSum = 10 + frame2[0]
    return totalSum
  }
}

function scoreFrame(frame1) {
  totalSum += frame1[0] + frame1[1]
  return totalSum
}

function scoreAGame(frames) {
  // Game
  let totalSum = 0

  // Function that gets the sum of frames 1-9 including spares and strikes.
  function getSum() {
    let sum = 0
    for (let i = 0; i < frames.length - 1; i++) {
      let currentFrame = frames[i]
      let nextFrame = frames[i + 1]

      if (currentFrame[0] === 10 && nextFrame[0] === 10) {
        i === 8 ? (sum = 20 + frames[9][1]) : (sum = 20 + frames[i + 2][0])
      } else if (currentFrame[0] === 10) {
        sum = 10 + nextFrame[0] + nextFrame[1]
      } else if (currentFrame[0] + currentFrame[1] === 10) {
        sum = 10 + nextFrame[0]
      } else {
        sum = currentFrame[0] + currentFrame[1]
      }
      totalSum += sum
      console.log(totalSum)
    }
    return totalSum
  }
  // ----------------------------------------------

  // function to add last frame with added logic
  function getLastFrame() {
    let lastFrame = frames[9]
    let sum = lastFrame[0] + lastFrame[1]

    if (lastFrame[0] === 10) sum = 10 + lastFrame[1] + lastFrame[2]
    if (lastFrame[0] + lastFrame[1] === 10) sum = 10 + lastFrame[2]
    return sum
  }
  // ------------------------------------------

  totalSum = getSum() + getLastFrame()
  console.log(totalSum)
  return totalSum
}

module.exports = {
  scoreFrame,
  spare,
  singleStrike,
  doubleStrike,
  scoreAGame,
}
