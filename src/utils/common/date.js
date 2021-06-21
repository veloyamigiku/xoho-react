export function getDayOfWeekStr (year, month, day) {
  return ['日', '月', '火', '水', '木', '金', '土'][getDayOfWeek(year, month, day)]
}

export function getDayOfWeek (year, month, day) {
  const date = new Date(year, month - 1, day)
  return date.getDay()
}
