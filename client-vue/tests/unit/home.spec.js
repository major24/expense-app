import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders static verbiage in home page', () => {
    const wrapper = shallowMount(Home, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.find('h1').html()).toContain('Expense Application')
  })
})
