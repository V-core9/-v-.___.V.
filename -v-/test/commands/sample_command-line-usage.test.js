const {expect, test} = require('@oclif/test')

describe('sample_command-line-usage', () => {
  test
  .stdout()
  .command(['sample_command-line-usage'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_command-line-usage', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
