const {expect, test} = require('@oclif/test')

describe('volume_demo_example', () => {
  test
  .stdout()
  .command(['volume_demo_example'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['volume_demo_example', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
