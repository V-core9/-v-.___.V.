const {expect, test} = require('@oclif/test')

describe('sys_cpu_temp', () => {
  test
  .stdout()
  .command(['sys_cpu_temp'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_cpu_temp', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
