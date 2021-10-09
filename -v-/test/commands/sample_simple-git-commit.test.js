const {expect, test} = require('@oclif/test')

describe('sample_simple-git-commit', () => {
  test
  .stdout()
  .command(['sample_simple-git-commit'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_simple-git-commit', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
