const {expect, test} = require('@oclif/test')

describe('sys_bios', () => {
  test
  .stdout()
  .command(['sys_bios'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_bios', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
