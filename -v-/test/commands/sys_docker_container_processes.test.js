const {expect, test} = require('@oclif/test')

describe('sys_docker_container_processes', () => {
  test
  .stdout()
  .command(['sys_docker_container_processes'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_docker_container_processes', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
