const {expect, test} = require('@oclif/test')

describe('sample_webp-converter', () => {
  test
  .stdout()
  .command(['sample_webp-converter'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_webp-converter', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
