const {expect, test} = require('@oclif/test')

describe('sys_chassis', () => {
  test
  .stdout()
  .command(['sys_chassis'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_chassis', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
