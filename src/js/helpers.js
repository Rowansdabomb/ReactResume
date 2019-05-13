const makeWebSafe = (str) => {
  return str.toLowerCase().replace(' ', '-');
}

const makeReactKey = (str, index) => {
  return `${makeWebSafe(str)}-${index.toString(10)}`;
}

const makeDateRange = (start, end) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const startDate = new Date( Date.parse(start) )
  const endDate = new Date( Date.parse(end) )
  return `${months[startDate.getMonth()]}, ${startDate.getFullYear()} - ${months[endDate.getMonth()]}, ${endDate.getFullYear()}`
}

export {
  makeWebSafe,
  makeReactKey,
  makeDateRange
}