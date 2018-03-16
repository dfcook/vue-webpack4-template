import { shallow } from 'vue-test-utils'
import WelcomeMessage from 'components/Home/WelcomeMessage.vue'

describe('WelcomeMessage.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'new message'
    const wrapper = shallow(WelcomeMessage, {
      propsData: { name }
    })

    expect(wrapper.text()).toBe(name)
  })
})
