const {expect, test} = require('@oclif/test')

describe('cross-zip', () => {
  test
  .stdout()
  .command(['cross-zip'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['cross-zip', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
