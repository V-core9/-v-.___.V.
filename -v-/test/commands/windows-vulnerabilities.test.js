const {expect, test} = require('@oclif/test')

describe('windows-vulnerabilities', () => {
  test
  .stdout()
  .command(['windows-vulnerabilities'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['windows-vulnerabilities', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
