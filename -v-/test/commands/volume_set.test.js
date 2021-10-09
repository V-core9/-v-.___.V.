const {expect, test} = require('@oclif/test')

describe('volume_set', () => {
  test
  .stdout()
  .command(['volume_set'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['volume_set', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
