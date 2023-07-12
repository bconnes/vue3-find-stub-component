import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('finds the helloworld component', () => {
    const wrapper = shallowMount(App, {})
    const componentStub = wrapper.find('helloworld-stub');
    expect(componentStub.html()).toBeTruthy();
  })
})