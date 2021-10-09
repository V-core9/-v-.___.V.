const {expect, test} = require('@oclif/test')

describe('sys_docker_all', () => {
  test
  .stdout()
  .command(['sys_docker_all'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_docker_all', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
