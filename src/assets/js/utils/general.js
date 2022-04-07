/**
 * A very simple helper function that checks
 * a single breakpoint. Note: this is a way to guess
 * at the device type, it is by no means the best way.
 */
export const isMobile = () => window.innerWidth < 768

/**
 * Checks to see if the device supports touch gestures.
 */
export const isTouch = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints
}

/**
 * A helper function to add a class
 * to a DOM element, or an array of DOM elements.
 *
 * @param {Node|Array} item A single DOM element or an Array
 * @param {String} selector  The class to add
 */
export const set = (item, selector) => {
  if (item instanceof Array) {
    for (const i of item) {
      i.classList.add(selector)
    }
  } else {
    item.classList.add(selector)
  }
}

/**
 * A helper function to remove a class
 * to a DOM element, or an array of DOM elements.
 *
 * @param {Node|Array} item A single DOM element or an Array
 * @param {String} selector  The class to remove
 */
export const unset = (item, selector) => {
  if (item instanceof Array) {
    for (const i of item) {
      i.classList.remove(selector)
    }
  } else {
    item.classList.remove(selector)
  }
}

/**
 * A helper function  that checks to
 * see if a DOM element has a class attached
 * to it.
 *
 * @param {Node} item A single DOM element
 * @param {String} selector  The class to check
 */
export const contains = (item, selector) => {
  return item.classList.contains(selector)
}

/**
 * A helper function to toggle the class
 * of a DOM element, or an array of DOM elements.
 *
 * @param {Node|Array} item A single DOM element or an Array
 * @param {String} selector  The class to toggle
 */
export const toggle = (item, selector) => {
  if (item instanceof Array) {
    for (const i of item) {
      i.classList.toggle(selector)
    }
  } else {
    item.classList.toggle(selector)
  }
}

/**
 * Get the height of a DOM element
 *
 * @param {Node} el
 */
export const getHeight = (el) => {
  return `${el.offsetHeight}px`
}

/**
 * Get the width of a DOM element
 *
 * @param {Node} el
 */
export const getWidth = (el) => {
  return `${el.offsetWidth}px`
}

/**
 * Clones a complex Javascript object. This is a
 * thorough way to ensure that the object is fully
 * cloned with no references kept in place.
 *
 * @param {Object} obj
 */
export const deepClone = obj => {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Formats a given integer to a standard fraction.
 *
 * @param {Integer} num A price, with cents
 * @param {Integer} fraction
 */
export const formatPrice = (num, fraction = 2) => {
  return '$' + (Number(num) / 100).toLocaleString('en-EN', {
    minimumFractionDigits: fraction
  })
}

/**
 * Removes whitespace within a string and makes all
 * characters lowercase.
 *
 * @param {String} str
 */
export const handleize = str => str.toLowerCase().replace(/[^\w\u00C0-\u024f]+/g, '-').replace(/^-+|-+$/g, '')
