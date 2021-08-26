const {expect, test} = require('@oclif/test')

describe('test-is_cmd', () => {
  test
  .stdout()
  .command(['test-is_cmd'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['test-is_cmd', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
