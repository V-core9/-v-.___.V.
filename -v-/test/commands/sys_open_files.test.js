const {expect, test} = require('@oclif/test')

describe('sys_open_files', () => {
  test
  .stdout()
  .command(['sys_open_files'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_open_files', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
