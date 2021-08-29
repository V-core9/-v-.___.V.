const {expect, test} = require('@oclif/test')

describe('sample_multiview', () => {
  test
  .stdout()
  .command(['sample_multiview'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_multiview', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
