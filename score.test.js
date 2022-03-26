const score = require('./score')

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
  const frame1 = [0, 0]
  const expected = 0
  const actual = score.scoreFrame(frame1)
  expect(actual).toBe(expected)
})

test('scores a normal frame', () => {
  const frame1 = [2, 3]
  const expected = 5
  const actual = score.scoreFrame(frame1)
  expect(actual).toBe(expected)
})

test('scores a spare frame', () => {
  const frame1 = [5, 5]
  const frame2 = [2, 4]
  const expected = 12
  const actual = score.spare(frame1, frame2)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
  const frame1 = [10, 0]
  const frame2 = [2, 5]
  const expected = 17
  const actual = score.singleStrike(frame1, frame2)
  expect(actual).toBe(expected)
})

test('scores a double strike frame', () => {
  const frame1 = [10, 0]
  const frame2 = [10, 0]
  const frame3 = [2, 3]
  const expected = 22
  const actual = score.doubleStrike(frame1, frame2, frame3)
  expect(actual).toBe(expected)
})

test('scores the frames of a game', () => {
  const frames = [
    [4, 5],
    [4, 5],
    [4, 5],
    [4, 5],
    [4, 5],
    [4, 5],
    [4, 5],
    [4, 5],
    [4, 5],
    [4, 5],
  ]
  const expected = 90
  const actual = score.scoreAGame(frames)
  expect(actual).toBe(expected)
})

test('scores the frames of a game with spare in the last frame', () => {
  const frames = [
    [4, 5],
    [4, 5],
    [4, 5],
    [4, 5],
    [4, 5],
    [4, 5],
    [4, 5],
    [4, 5],
    [4, 5],
    [5, 5, 6],
  ]
  const expected = 97
  const actual = score.scoreAGame(frames)
  expect(actual).toBe(expected)
})

test('scores the frames of a game with a strike in the last frame', () => {
  const frames = [
    [4, 5],
    [4, 5],
    [10, 0],
    [10, 0],
    [4, 5],
    [1, 3],
    [4, 5],
    [2, 6],
    [4, 5],
    [10, 5, 5],
  ]
  const expected = 120
  const actual = score.scoreAGame(frames)
  expect(actual).toBe(expected)
})
