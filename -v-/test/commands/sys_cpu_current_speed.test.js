const {expect, test} = require('@oclif/test')

describe('sys_cpu_current_speed', () => {
  test
  .stdout()
  .command(['sys_cpu_current_speed'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_cpu_current_speed', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
