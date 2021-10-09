const {expect, test} = require('@oclif/test')

describe('sys_inetchecksite', () => {
  test
  .stdout()
  .command(['sys_inetchecksite'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_inetchecksite', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
