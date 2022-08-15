const tzOffset = (timeZone: string) => {
	const now = new Date()
	const parts = new Intl.DateTimeFormat('en-US', {
		timeZone,
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		hourCycle: 'h23',
		minute: '2-digit',
		second: '2-digit',
	}).formatToParts(now)

	const [year, month, ...rest] = [
		'year',
		'month',
		'day',
		'hour',
		'minute',
		'second',
	].map((type) => Number(parts.find((part) => part.type === type)!.value))
	const utc = Date.UTC(year!, month! - 1, ...rest, now.getMilliseconds())

	return (utc - now.getTime()) / 6e4
}

export const withTz = (date: number | string | Date, timeZone: string) => {
	date = new Date(date)
	date.setMinutes(
		date.getMinutes() + date.getTimezoneOffset() + tzOffset(timeZone),
	)
	return date
}

export default tzOffset
