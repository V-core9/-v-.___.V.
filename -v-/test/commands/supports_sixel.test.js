const {expect, test} = require('@oclif/test')

describe('supports_sixel', () => {
  test
  .stdout()
  .command(['supports_sixel'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['supports_sixel', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
