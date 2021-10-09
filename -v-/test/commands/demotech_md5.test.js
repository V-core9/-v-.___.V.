const {expect, test} = require('@oclif/test')

describe('demotech_md5', () => {
  test
  .stdout()
  .command(['demotech_md5'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['demotech_md5', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
