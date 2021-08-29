const {expect, test} = require('@oclif/test')

describe('wifi_delete-connection', () => {
  test
  .stdout()
  .command(['wifi_delete-connection'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['wifi_delete-connection', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
