const {expect, test} = require('@oclif/test')

describe('sample_os-monitor', () => {
  test
  .stdout()
  .command(['sample_os-monitor'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_os-monitor', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
