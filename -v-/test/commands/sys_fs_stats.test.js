const {expect, test} = require('@oclif/test')

describe('sys_fs_stats', () => {
  test
  .stdout()
  .command(['sys_fs_stats'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_fs_stats', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
