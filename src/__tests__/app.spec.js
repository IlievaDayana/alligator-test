import { mount } from '@vue/test-utils'
import App from './../../src/App.vue'

describe('Mounted App', () => {
    const wrapper = mount(App);

    test('to have proper header', () => {
        const h1 = wrapper.get('button')

        expect(h1.text()).toBe('click here')
    })
    test('emits an event when clicked', () => {
        wrapper.find('button').trigger('click')
        wrapper.find('button').trigger('click')

        expect(wrapper.emitted()).toHaveProperty('increment')
        const incrementEvent = wrapper.emitted('increment')

        // We have "clicked" twice, so the array of `increment` should
        // have two values.
        expect(incrementEvent).toHaveLength(2)

        // Assert the result of the first click.
        // Notice that the value is an array.
        expect(incrementEvent[0]).toEqual([1])

        // Then, the result of the second one.
        expect(incrementEvent[1]).toEqual([2])
    })

})