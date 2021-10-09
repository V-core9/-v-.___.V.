const {expect, test} = require('@oclif/test')

describe('sys_inet_latency', () => {
  test
  .stdout()
  .command(['sys_inet_latency'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_inet_latency', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
