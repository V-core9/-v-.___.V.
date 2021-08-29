const {expect, test} = require('@oclif/test')

describe('test_public-ip', () => {
  test
  .stdout()
  .command(['test_public-ip'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['test_public-ip', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
