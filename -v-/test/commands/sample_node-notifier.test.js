const {expect, test} = require('@oclif/test')

describe('sample_node-notifier', () => {
  test
  .stdout()
  .command(['sample_node-notifier'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_node-notifier', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
