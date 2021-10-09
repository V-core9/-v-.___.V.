const {expect, test} = require('@oclif/test')

describe('sample_cliui', () => {
  test
  .stdout()
  .command(['sample_cliui'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_cliui', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
