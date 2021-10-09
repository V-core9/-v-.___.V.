const {expect, test} = require('@oclif/test')

describe('sample_cli-width', () => {
  test
  .stdout()
  .command(['sample_cli-width'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_cli-width', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
