const {expect, test} = require('@oclif/test')

describe('volume_mute', () => {
  test
  .stdout()
  .command(['volume_mute'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['volume_mute', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
