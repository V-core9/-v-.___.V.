const {expect, test} = require('@oclif/test')

describe('wifi_get-current-connections', () => {
  test
  .stdout()
  .command(['wifi_get-current-connections'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['wifi_get-current-connections', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
