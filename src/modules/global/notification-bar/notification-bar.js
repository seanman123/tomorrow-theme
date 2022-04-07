import on from 'dom-event'
import select from 'dom-select'
import { set } from 'utils/general'

export default el => {
  on(select('.js-close', el), 'click', (event) => {
    event.preventDefault()

    set(el, 'is-hidden')
  })
}
