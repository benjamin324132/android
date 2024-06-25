

"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarWidget() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="w-full bg-teal-200 rounded-3xl p-4 shadow-md">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="w-full"
    />
    </div>
  )
}
