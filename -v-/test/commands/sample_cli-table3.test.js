const {expect, test} = require('@oclif/test')

describe('sample_cli-table3', () => {
  test
  .stdout()
  .command(['sample_cli-table3'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_cli-table3', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
