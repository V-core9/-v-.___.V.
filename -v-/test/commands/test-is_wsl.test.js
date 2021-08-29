const {expect, test} = require('@oclif/test')

describe('test-is_wsl', () => {
  test
  .stdout()
  .command(['test-is_wsl'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['test-is_wsl', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
