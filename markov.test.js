const mm = require('./markov')


const testArr = ['cat', 'in', 'the', 'hat']

test('check for array', function() {
    let res = new mm.modules.MarkovMachine('cat in the hat')
    console.log(res.words, ' in the test')
    expect(res.words).toEqual(testArr)
})