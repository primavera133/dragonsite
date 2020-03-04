export default (...args) => {
  switch (args.length) {
    // If one argument generate between 0 and arg
    case 1:
      return Math.floor(Math.random() * (args[0] + 1))

    // If two arguments generate between arg[0] and arg[1]
    case 2:
      return Math.floor(Math.random() * (args[1] - args[0] + 1)) + args[0]

    // Otherwise generate between 0 and 1
    default:
      return Math.random()
  }
}
