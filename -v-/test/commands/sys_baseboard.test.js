const {expect, test} = require('@oclif/test')

describe('sys_baseboard', () => {
  test
  .stdout()
  .command(['sys_baseboard'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_baseboard', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
