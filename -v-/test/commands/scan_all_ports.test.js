const {expect, test} = require('@oclif/test')

describe('scan_all_ports', () => {
  test
  .stdout()
  .command(['scan_all_ports'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['scan_all_ports', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
