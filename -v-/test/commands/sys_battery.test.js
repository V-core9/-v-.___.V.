const {expect, test} = require('@oclif/test')

describe('sys_battery', () => {
  test
  .stdout()
  .command(['sys_battery'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_battery', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
