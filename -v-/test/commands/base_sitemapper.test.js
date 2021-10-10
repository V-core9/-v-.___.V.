const {expect, test} = require('@oclif/test')

describe('base_sitemapper', () => {
  test
  .stdout()
  .command(['base_sitemapper'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['base_sitemapper', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
