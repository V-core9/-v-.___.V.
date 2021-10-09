const {expect, test} = require('@oclif/test')

describe('sys_audio', () => {
  test
  .stdout()
  .command(['sys_audio'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_audio', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
