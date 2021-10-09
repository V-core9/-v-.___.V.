const {expect, test} = require('@oclif/test')

describe('wifi-name', () => {
  test
  .stdout()
  .command(['wifi-name'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['wifi-name', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
