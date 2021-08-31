const {expect, test} = require('@oclif/test')

describe('sample_screenshot-desktop', () => {
  test
  .stdout()
  .command(['sample_screenshot-desktop'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_screenshot-desktop', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
