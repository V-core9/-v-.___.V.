const {expect, test} = require('@oclif/test')

describe('chalk_demo_sample', () => {
  test
  .stdout()
  .command(['chalk_demo_sample'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['chalk_demo_sample', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
