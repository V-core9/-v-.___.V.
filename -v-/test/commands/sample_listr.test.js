const {expect, test} = require('@oclif/test')

describe('sample_listr', () => {
  test
  .stdout()
  .command(['sample_listr'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_listr', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
