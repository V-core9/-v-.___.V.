const {expect, test} = require('@oclif/test')

describe('sample_enquirer', () => {
  test
  .stdout()
  .command(['sample_enquirer'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_enquirer', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
