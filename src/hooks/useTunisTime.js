import { useEffect, useState } from 'react'

const timeFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Africa/Tunis',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

const now = () => timeFormatter.format(new Date())

export default function useTunisTime() {
  const [time, setTime] = useState(now)

  useEffect(() => {
    const id = setInterval(() => setTime(now()), 30000)
    return () => clearInterval(id)
  }, [])

  return time
}
