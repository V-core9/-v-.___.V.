const {expect, test} = require('@oclif/test')

describe('sys_docker_container_stats', () => {
  test
  .stdout()
  .command(['sys_docker_container_stats'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_docker_container_stats', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
