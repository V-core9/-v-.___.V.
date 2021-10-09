const {expect, test} = require('@oclif/test')

describe('sample_prompts', () => {
  test
  .stdout()
  .command(['sample_prompts'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sample_prompts', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
