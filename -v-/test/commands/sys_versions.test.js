const {expect, test} = require('@oclif/test')

describe('sys_versions', () => {
  test
  .stdout()
  .command(['sys_versions'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_versions', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
