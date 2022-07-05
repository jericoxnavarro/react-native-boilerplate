const { green, blue } = require('kleur')

module.exports = {
  async apply(value, previousValues) {
    return new Promise(resolve => {
      console.log('\n')
      console.log(' React-Native Boilerplate initialized with success ! 🚀\n')
      console.log(blue('TYPESCRIPT VERSION 📘'))
      console.log('\n')

      console.log(
        '- 📚 If you need to read more about this boilerplate : https://github.com/jericoxnavarro/react-native-boilerplate',
      )
      console.log(
        '- 🤕 If you have some troubles : https://github.com/jericoxnavarro/react-native-boilerplate/issues',
      )
      console.log(
        '- ⭐ If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/jericoxnavarro/react-native-boilerplate',
      )
      resolve()
    })
  },
}
