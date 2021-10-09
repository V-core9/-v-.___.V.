const {expect, test} = require('@oclif/test')

describe('sys_graphics', () => {
  test
  .stdout()
  .command(['sys_graphics'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_graphics', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
