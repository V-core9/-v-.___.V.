const {expect, test} = require('@oclif/test')

describe('cpu-info', () => {
  test
  .stdout()
  .command(['cpu-info'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['cpu-info', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
