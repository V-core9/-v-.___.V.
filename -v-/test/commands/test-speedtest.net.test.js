const {expect, test} = require('@oclif/test')

describe('test-speedtest.net', () => {
  test
  .stdout()
  .command(['test-speedtest.net'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['test-speedtest.net', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
