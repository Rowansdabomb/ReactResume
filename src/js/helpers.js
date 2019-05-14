const makeWebSafe = (str) => {
  return str.replace(/\s+/g, '-').toLowerCase()
}

const makeReactKey = (str, index) => {
  return `${makeWebSafe(str)}-${index.toString(10)}`;
}

const makeDateRange = (start, end) => {
  if (start || end) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    if (start && end) {
      const startDate = new Date( Date.parse(start) )
      const endDate = new Date( Date.parse(end) )
      return `${months[startDate.getMonth()]}, ${startDate.getFullYear()} - ${months[endDate.getMonth()]}, ${endDate.getFullYear()}`
    }
    if (!start && end) {
      const endDate = new Date( Date.parse(end) )
      return `${months[endDate.getMonth()]}, ${endDate.getFullYear()}`
    }
    if (start && !end) {
      const startDate = new Date( Date.parse(start) )
      return `${months[startDate.getMonth()]}, ${startDate.getFullYear()}`
    }
  }


  return ''
}

export {
  makeWebSafe,
  makeReactKey,
  makeDateRange
}