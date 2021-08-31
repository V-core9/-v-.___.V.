const {expect, test} = require('@oclif/test')

describe('sample_simple-git-add-all', () => {
  test
  .stdout()
  .command(['sample_simple-git-add-all'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_simple-git-add-all', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
