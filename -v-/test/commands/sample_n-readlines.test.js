const {expect, test} = require('@oclif/test')

describe('sample_n-readlines', () => {
  test
  .stdout()
  .command(['sample_n-readlines'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_n-readlines', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
