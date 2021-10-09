const {expect, test} = require('@oclif/test')

describe('volume_unmute', () => {
  test
  .stdout()
  .command(['volume_unmute'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['volume_unmute', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
