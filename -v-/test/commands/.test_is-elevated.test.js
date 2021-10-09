const {expect, test} = require('@oclif/test')

describe('test_is-elevated', () => {
  test
  .stdout()
  .command(['test_is-elevated'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['test_is-elevated', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
