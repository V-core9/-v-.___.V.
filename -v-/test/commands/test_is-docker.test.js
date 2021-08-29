const {expect, test} = require('@oclif/test')

describe('test_is-docker', () => {
  test
  .stdout()
  .command(['test_is-docker'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['test_is-docker', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
