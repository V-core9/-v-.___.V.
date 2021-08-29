const {expect, test} = require('@oclif/test')

describe('wifi_scan', () => {
  test
  .stdout()
  .command(['wifi_scan'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['wifi_scan', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
