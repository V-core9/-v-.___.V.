const {expect, test} = require('@oclif/test')

describe('test_globaly-installed', () => {
  test
  .stdout()
  .command(['test_globaly-installed'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['test_globaly-installed', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
