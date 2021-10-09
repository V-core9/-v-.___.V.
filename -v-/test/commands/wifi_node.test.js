const {expect, test} = require('@oclif/test')

describe('wifi_node', () => {
  test
  .stdout()
  .command(['wifi_node'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['wifi_node', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
