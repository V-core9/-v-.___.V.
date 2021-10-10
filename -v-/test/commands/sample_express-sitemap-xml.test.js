const {expect, test} = require('@oclif/test')

describe('sample_express-sitemap-xml', () => {
  test
  .stdout()
  .command(['sample_express-sitemap-xml'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_express-sitemap-xml', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
