const {expect, test} = require('@oclif/test')

describe('mem-info', () => {
  test
  .stdout()
  .command(['mem-info'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['mem-info', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
