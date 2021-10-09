const {expect, test} = require('@oclif/test')

describe('sys_docker_info', () => {
  test
  .stdout()
  .command(['sys_docker_info'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_docker_info', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
