const {expect, test} = require('@oclif/test')

describe('sample_simple-git-push', () => {
  test
  .stdout()
  .command(['sample_simple-git-push'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_simple-git-push', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
