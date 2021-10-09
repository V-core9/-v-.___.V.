const {expect, test} = require('@oclif/test')

describe('sample_os-monitor-is-running', () => {
  test
  .stdout()
  .command(['sample_os-monitor-is-running'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_os-monitor-is-running', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
