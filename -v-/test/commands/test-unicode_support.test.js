const {expect, test} = require('@oclif/test')

describe('test-unicode_support', () => {
  test
  .stdout()
  .command(['test-unicode_support'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['test-unicode_support', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
