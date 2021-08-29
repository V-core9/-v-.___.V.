const {expect, test} = require('@oclif/test')

describe('wifi-password', () => {
  test
  .stdout()
  .command(['wifi-password'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['wifi-password', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
