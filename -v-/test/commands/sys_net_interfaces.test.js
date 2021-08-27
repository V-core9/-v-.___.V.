const {expect, test} = require('@oclif/test')

describe('sys_net_interfaces', () => {
  test
  .stdout()
  .command(['sys_net_interfaces'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_net_interfaces', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
