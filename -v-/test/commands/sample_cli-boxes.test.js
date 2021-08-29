const {expect, test} = require('@oclif/test')

describe('sample_cli-boxes', () => {
  test
  .stdout()
  .command(['sample_cli-boxes'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_cli-boxes', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
