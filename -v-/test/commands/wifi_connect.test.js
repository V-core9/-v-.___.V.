const {expect, test} = require('@oclif/test')

describe('wifi_connect', () => {
  test
  .stdout()
  .command(['wifi_connect'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['wifi_connect', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
