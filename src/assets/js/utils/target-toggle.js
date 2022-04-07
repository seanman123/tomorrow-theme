import on from 'dom-event'
import select from 'dom-select'
import { contains } from 'utils/general'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default el => {
  const body = select('body')

  select.all('.js-target-toggle', el).map(element => {
    const target = element.hash.replace('#', '')
    const classToToggle = element.dataset.toggleClass
    const bodyClassToggle = element.dataset.bodyClass
    const targetToFocus = element.dataset.targetFocus
    const noScrollToggle = 'noScroll' in element.dataset
    const setHeight = 'setHeight' in element.dataset

    on(element, 'click', event => {
      event.preventDefault()

      if (!classToToggle) {
        return true
      }

      select(`#${target}`).classList.toggle(classToToggle)
      const isShown = contains(select(`#${target}`), classToToggle)

      if (bodyClassToggle) {
        body.classList.toggle(bodyClassToggle)
      }

      if (isShown && targetToFocus) {
        select(targetToFocus).focus()
      }

      if (!noScrollToggle) {
        return true
      }

      if (isShown) {
        setHeight && (
          select(`#${target}`).style.height = `${window.innerHeight}px`
        )
        disableBodyScroll(body)
      } else {
        setHeight && (
          select(`#${target}`).style.height = ''
        )
        enableBodyScroll(body)
      }
    })
  })
}
