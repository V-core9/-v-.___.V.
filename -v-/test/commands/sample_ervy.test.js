const {expect, test} = require('@oclif/test')

describe('sample_ervy', () => {
  test
  .stdout()
  .command(['sample_ervy'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_ervy', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
