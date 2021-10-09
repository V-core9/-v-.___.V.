const {expect, test} = require('@oclif/test')

describe('sys_docker_volumes', () => {
  test
  .stdout()
  .command(['sys_docker_volumes'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_docker_volumes', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
