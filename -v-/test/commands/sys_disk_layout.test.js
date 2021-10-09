const {expect, test} = require('@oclif/test')

describe('sys_disk_layout', () => {
  test
  .stdout()
  .command(['sys_disk_layout'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_disk_layout', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
