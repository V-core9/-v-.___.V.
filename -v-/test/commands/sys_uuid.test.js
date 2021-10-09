const {expect, test} = require('@oclif/test')

describe('sys_uuid', () => {
  test
  .stdout()
  .command(['sys_uuid'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_uuid', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
