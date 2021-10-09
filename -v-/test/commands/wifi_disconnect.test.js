const {expect, test} = require('@oclif/test')

describe('wifi_disconnect', () => {
  test
  .stdout()
  .command(['wifi_disconnect'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['wifi_disconnect', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
