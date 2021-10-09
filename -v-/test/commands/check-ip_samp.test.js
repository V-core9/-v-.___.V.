const {expect, test} = require('@oclif/test')

describe('check-ip_samp', () => {
  test
  .stdout()
  .command(['check-ip_samp'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['check-ip_samp', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
