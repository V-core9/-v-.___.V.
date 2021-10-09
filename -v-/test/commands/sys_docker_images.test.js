const {expect, test} = require('@oclif/test')

describe('sys_docker_images', () => {
  test
  .stdout()
  .command(['sys_docker_images'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sys_docker_images', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
