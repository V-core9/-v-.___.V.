const {expect, test} = require('@oclif/test')

describe('sample_robotjs-base-demo', () => {
  test
  .stdout()
  .command(['sample_robotjs-base-demo'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_robotjs-base-demo', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
