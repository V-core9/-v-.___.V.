const {expect, test} = require('@oclif/test')

describe('volume_get', () => {
  test
  .stdout()
  .command(['volume_get'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['volume_get', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
