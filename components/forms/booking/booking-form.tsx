"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
} from "lucide-react";
import { useMemo, useState } from "react";

export interface BookingFormData {
  name: string;
  email: string;
  date: string;
  time: string;
}

export interface BookingFormProps {
  brandName?: string;
  title?: string;
  description?: string;
  primaryColor?: string;
  buttonText?: string;
  serviceName?: string;
  serviceDuration?: string;
  location?: string;
  timeSlots?: string[];
  onSubmit?: (data: BookingFormData) => void | Promise<void>;
}

const defaultTimeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:30 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
];

export default function BookingForm({
  brandName = "YourBrand",
  title = "Book a meeting",
  description = "Choose a date and time that works best for you.",
  primaryColor = "#2563eb",
  buttonText = "Confirm booking",
  serviceName = "Strategy Consultation",
  serviceDuration = "45 minutes",
  location = "Online meeting",
  timeSlots = defaultTimeSlots,
  onSubmit,
}: BookingFormProps) {
  const [currentMonth, setCurrentMonth] = useState(
    new Date()
  );

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const monthLabel = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const startDay = firstDay.getDay();
    const totalDays = lastDay.getDate();

    const previousMonthLastDay = new Date(
      year,
      month,
      0
    ).getDate();

    const days: {
      date: number;
      currentMonth: boolean;
      value: string;
      disabled: boolean;
    }[] = [];

    for (let i = startDay - 1; i >= 0; i--) {
      const date = previousMonthLastDay - i;

      days.push({
        date,
        currentMonth: false,
        value: "",
        disabled: true,
      });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let date = 1; date <= totalDays; date++) {
      const value = [
        year,
        String(month + 1).padStart(2, "0"),
        String(date).padStart(2, "0"),
      ].join("-");

      const dateObject = new Date(
        year,
        month,
        date
      );

      days.push({
        date,
        currentMonth: true,
        value,
        disabled: dateObject < today,
      });
    }

    while (days.length % 7 !== 0) {
      const nextDate =
        days.length -
        (startDay + totalDays) +
        1;

      days.push({
        date: nextDate,
        currentMonth: false,
        value: "",
        disabled: true,
      });
    }

    return days;
  }, [currentMonth]);

  const selectedDateObject = selectedDate
    ? new Date(`${selectedDate}T00:00:00`)
    : null;

  const formattedSelectedDate = selectedDateObject
    ? selectedDateObject.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
    : "Select a date";

  const changeMonth = (direction: number) => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + direction,
        1
      )
    );
  };

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!selectedDate) {
      setError("Please select a date.");
      return;
    }

    if (!selectedTime) {
      setError("Please select a time.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      await onSubmit?.({
        name,
        email,
        date: selectedDate,
        time: selectedTime,
      });

      await new Promise((resolve) =>
        setTimeout(resolve, 800)
      );

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f7f5] px-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="w-full max-w-xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 180,
              delay: 0.1,
            }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 text-white"
          >
            <Check className="h-7 w-7" />
          </motion.div>

          <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
            Booking confirmed
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
            You're all set.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-500">
            Your {serviceName.toLowerCase()} has been scheduled.
            We'll send the confirmation to {email}.
          </p>

          <div className="mx-auto mt-10 max-w-sm border-y border-slate-200 py-5">
            <div className="flex items-center justify-between py-2 text-sm">
              <span className="text-slate-400">Date</span>
              <span className="font-medium text-slate-900">
                {formattedSelectedDate}
              </span>
            </div>

            <div className="flex items-center justify-between py-2 text-sm">
              <span className="text-slate-400">Time</span>
              <span className="font-medium text-slate-900">
                {selectedTime}
              </span>
            </div>

            <div className="flex items-center justify-between py-2 text-sm">
              <span className="text-slate-400">Duration</span>
              <span className="font-medium text-slate-900">
                {serviceDuration}
              </span>
            </div>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-slate-950">
      <div className="mx-auto max-w-[1380px] px-5 py-6 sm:px-8 lg:px-12">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-slate-200 pb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center bg-slate-950 text-white">
              <CalendarDays className="h-4 w-4" />
            </div>

            <span className="text-sm font-semibold tracking-tight">
              {brandName}
            </span>
          </div>

          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
            Appointment
          </span>
        </header>

        {/* Heading */}
        <section className="pb-10 pt-12 lg:pt-16">
          <div className="max-w-3xl">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: primaryColor }}
            >
              Schedule a conversation
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              {description}
            </p>
          </div>
        </section>

        {/* Main */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">
          {/* Calendar area */}
          <section>
            {/* Calendar header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-5">
              <div>
                <p className="text-xl font-semibold tracking-tight">
                  {monthLabel}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Select an available date
                </p>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => changeMonth(-1)}
                  className="flex h-9 w-9 items-center justify-center text-slate-400 transition hover:bg-white hover:text-slate-950"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => changeMonth(1)}
                  className="flex h-9 w-9 items-center justify-center text-slate-400 transition hover:bg-white hover:text-slate-950"
                  aria-label="Next month"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Calendar */}
            <div className="mt-7">
              <div className="grid grid-cols-7 border-b border-slate-200 pb-3">
                {[
                  "Sun",
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                ].map((day) => (
                  <span
                    key={day}
                    className="text-center text-[10px] font-semibold uppercase tracking-wider text-slate-400"
                  >
                    {day}
                  </span>
                ))}
              </div>

              <div className="mt-2 grid grid-cols-7">
                {calendarDays.map((day, index) => {
                  const active =
                    selectedDate === day.value;

                  return (
                    <button
                      key={`${day.value}-${index}`}
                      type="button"
                      disabled={day.disabled}
                      onClick={() => {
                        if (!day.disabled) {
                          setSelectedDate(day.value);
                          setError("");
                        }
                      }}
                      className={`relative flex aspect-square items-center justify-center text-sm transition ${
                        day.disabled
                          ? "cursor-default text-slate-300"
                          : "text-slate-700 hover:bg-white"
                      }`}
                    >
                      {day.currentMonth && (
                        <motion.span
                          animate={{
                            scale: active ? 1 : 0.95,
                          }}
                          className="relative flex h-10 w-10 items-center justify-center"
                          style={
                            active
                              ? {
                                  backgroundColor:
                                    primaryColor,
                                  color: "white",
                                }
                              : undefined
                          }
                        >
                          {day.date}
                        </motion.span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time */}
            <div className="mt-12 border-t border-slate-200 pt-8">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xl font-semibold tracking-tight">
                    Available times
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {selectedDate
                      ? formattedSelectedDate
                      : "Select a date first"}
                  </p>
                </div>

                <Clock3 className="h-5 w-5 text-slate-300" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-3">
                {timeSlots.map((time) => {
                  const active = selectedTime === time;

                  return (
                    <button
                      key={time}
                      type="button"
                      disabled={!selectedDate}
                      onClick={() => {
                        setSelectedTime(time);
                        setError("");
                      }}
                      className="relative border-b px-2 py-4 text-left text-sm transition"
                      style={{
                        borderColor: active
                          ? primaryColor
                          : "#e2e8f0",
                        color: active
                          ? primaryColor
                          : !selectedDate
                          ? "#cbd5e1"
                          : "#475569",
                      }}
                    >
                      <span className="flex items-center justify-between">
                        {time}

                        {active && (
                          <Check className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Summary */}
          <aside className="lg:pt-0">
            <div className="sticky top-8">
              <div className="border-t-2 border-slate-950 pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Your appointment
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                  {serviceName}
                </h2>

                <div className="mt-6 space-y-4 border-b border-slate-200 pb-6">
                  <SummaryItem
                    icon={<Clock3 className="h-4 w-4" />}
                    label="Duration"
                    value={serviceDuration}
                  />

                  <SummaryItem
                    icon={<MapPin className="h-4 w-4" />}
                    label="Location"
                    value={location}
                  />

                  <SummaryItem
                    icon={<CalendarDays className="h-4 w-4" />}
                    label="Date"
                    value={formattedSelectedDate}
                  />

                  <SummaryItem
                    icon={<Clock3 className="h-4 w-4" />}
                    label="Time"
                    value={selectedTime || "Not selected"}
                  />
                </div>

                {/* Details */}
                <div className="mt-7">
                  <p className="text-sm font-semibold">
                    Your details
                  </p>

                  <div className="mt-5 space-y-5">
                    <Input
                      label="Name"
                      placeholder="John Doe"
                      value={name}
                      onChange={setName}
                    />

                    <Input
                      label="Email"
                      placeholder="john@example.com"
                      type="email"
                      value={email}
                      onChange={setEmail}
                    />
                  </div>
                </div>

                {/* Error */}
                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: -5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="mt-5 text-xs font-medium text-red-500"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* CTA */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="mt-7 flex w-full items-center justify-between bg-slate-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span>Confirming...</span>

                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                    </>
                  ) : (
                    <>
                      <span>{buttonText}</span>

                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-[10px] leading-5 text-slate-400">
                  By confirming, you agree to the appointment
                  terms and scheduling policy.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function SummaryItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-slate-400">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-wider text-slate-400">
          {label}
        </p>

        <p className="mt-1 truncate text-sm font-medium text-slate-800">
          {value}
        </p>
      </div>
    </div>
  );
}

function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </span>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full border-b border-slate-200 bg-transparent px-0 text-sm text-slate-900 outline-none transition placeholder:text-slate-300 focus:border-slate-950"
      />
    </label>
  );
}