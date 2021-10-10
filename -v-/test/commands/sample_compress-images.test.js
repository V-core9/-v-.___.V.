const {expect, test} = require('@oclif/test')

describe('sample_compress-images', () => {
  test
  .stdout()
  .command(['sample_compress-images'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_compress-images', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
