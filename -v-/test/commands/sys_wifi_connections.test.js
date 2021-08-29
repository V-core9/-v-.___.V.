const {expect, test} = require('@oclif/test')

describe('sys_wifi_connections', () => {
  test
  .stdout()
  .command(['sys_wifi_connections'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_wifi_connections', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
