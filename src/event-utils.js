
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  }

]
// console.log( "new time string" + " = " +  INITIAL_EVENTS[0].id  + "," + INITIAL_EVENTS[0].title + "," + INITIAL_EVENTS[0].start);
export function createEventId() {
  return String(eventGuid++)
}
