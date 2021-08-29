const {expect, test} = require('@oclif/test')

describe('sys_wifi_networks', () => {
  test
  .stdout()
  .command(['sys_wifi_networks'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_wifi_networks', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
