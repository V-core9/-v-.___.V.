const {expect, test} = require('@oclif/test')

describe('test_internal-ip', () => {
  test
  .stdout()
  .command(['test_internal-ip'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['test_internal-ip', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
