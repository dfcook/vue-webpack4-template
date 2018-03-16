import { shallow } from '@vue/test-utils'
import WelcomeMessage from '@/components/Home/WelcomeMessage'

describe('WelcomeMessage.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'tester'

    const wrapper = shallow(WelcomeMessage, {
      propsData: { name }
    })

    expect(wrapper.text()).toBe('Hello tester from my Vue.js page, built with Webpack 4!')
  })
})
