const {expect, test} = require('@oclif/test')

describe('sample_cli-progress', () => {
  test
  .stdout()
  .command(['sample_cli-progress'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_cli-progress', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
