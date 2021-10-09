const {expect, test} = require('@oclif/test')

describe('sample_cli-spinners', () => {
  test
  .stdout()
  .command(['sample_cli-spinners'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_cli-spinners', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
