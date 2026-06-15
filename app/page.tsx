type ScheduleEvent = {
  day: string;
  time: string;
  title: string;
  category: "Internship" | "Class" | "Work" | "Study" | "Social" | "Rest";
  detail: string;
};

type Recommendation = {
  label: string;
  time: string;
  reason: string;
};

type StudyBlock = {
  course: string;
  time: string;
  focus: string;
};

type Warning = {
  title: string;
  description: string;
};

const weekStats = [
  { label: "Committed hours", value: "43.5", helper: "work, class, plans" },
  { label: "Open focus time", value: "11", helper: "hours available" },
  { label: "Rest score", value: "Fair", helper: "2 light evenings" },
];

const scheduleEvents: ScheduleEvent[] = [
  {
    day: "Mon",
    time: "9:00 AM",
    title: "CSC148 lecture",
    category: "Class",
    detail: "Campus, 2 hours",
  },
  {
    day: "Mon",
    time: "2:00 PM",
    title: "Product internship",
    category: "Internship",
    detail: "Remote sprint planning",
  },
  {
    day: "Tue",
    time: "11:00 AM",
    title: "Study session",
    category: "Study",
    detail: "Data structures review",
  },
  {
    day: "Tue",
    time: "6:00 PM",
    title: "Cafe shift",
    category: "Work",
    detail: "Dinner rush coverage",
  },
  {
    day: "Wed",
    time: "1:00 PM",
    title: "Internship deep work",
    category: "Internship",
    detail: "Prototype handoff",
  },
  {
    day: "Thu",
    time: "10:00 AM",
    title: "CSC148 lab",
    category: "Class",
    detail: "Recursion practice",
  },
  {
    day: "Fri",
    time: "7:00 PM",
    title: "Dinner with friends",
    category: "Social",
    detail: "Keep evening open",
  },
  {
    day: "Sat",
    time: "10:30 AM",
    title: "Recovery block",
    category: "Rest",
    detail: "No commitments",
  },
];

const recommendedShifts: Recommendation[] = [
  {
    label: "Best shift",
    time: "Wednesday, 5:00 PM - 9:00 PM",
    reason: "You have a lighter Thursday morning and no late plans after work.",
  },
  {
    label: "Backup shift",
    time: "Saturday, 1:00 PM - 5:00 PM",
    reason: "Works if you protect Saturday morning as rest time.",
  },
  {
    label: "Avoid",
    time: "Tuesday evening",
    reason: "Stacking work after study time creates a long, low-energy day.",
  },
];

const studyBlocks: StudyBlock[] = [
  {
    course: "CSC148",
    time: "Tuesday, 11:00 AM - 1:00 PM",
    focus: "Trace recursion problems before lab.",
  },
  {
    course: "Stats assignment",
    time: "Thursday, 2:30 PM - 4:30 PM",
    focus: "Finish first draft while campus time is fresh.",
  },
  {
    course: "Portfolio review",
    time: "Sunday, 3:00 PM - 4:30 PM",
    focus: "Light planning only, no heavy coding.",
  },
];

const warnings: Warning[] = [
  {
    title: "This week may be overloaded",
    description:
      "Three late commitments plus internship blocks leave little recovery time before Friday.",
  },
  {
    title: "Tuesday needs a buffer",
    description:
      "Move one task out of Tuesday evening so your cafe shift does not crowd study time.",
  },
];

const preferences = [
  "Prefer no shifts before 10:00 AM",
  "Keep Friday night social time open",
  "Limit paid work to 12 hours per week",
  "Protect at least 7 hours of sleep",
];

const categoryStyles: Record<ScheduleEvent["category"], string> = {
  Internship: "border-sky-200 bg-sky-50 text-sky-900",
  Class: "border-indigo-200 bg-indigo-50 text-indigo-900",
  Work: "border-emerald-200 bg-emerald-50 text-emerald-900",
  Study: "border-amber-200 bg-amber-50 text-amber-900",
  Social: "border-rose-200 bg-rose-50 text-rose-900",
  Rest: "border-teal-200 bg-teal-50 text-teal-900",
};

function SectionCard({
  title,
  subtitle,
  children,
}: Readonly<{
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
        {subtitle ? (
          <p className="mt-1 text-sm leading-6 text-slate-600">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-5 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
              Don&apos;t Overbook Me
            </p>
            <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
              Weekly planning dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              A mock AI planner for balancing internship hours, shifts, study
              time, social plans, and rest before the week gets too crowded.
            </p>
          </div>
          <div className="rounded-lg border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-teal-950">
            <p className="font-semibold">Week of June 15</p>
            <p className="mt-1 text-teal-800">Mock data only</p>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {weekStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-medium text-slate-500">
                {stat.label}
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-950">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{stat.helper}</p>
            </div>
          ))}
        </section>

        <div className="grid gap-6 xl:grid-cols-[1.45fr_1fr]">
          <SectionCard
            title="Weekly schedule overview"
            subtitle="A simple view of the commitments the planner is trying to balance."
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {scheduleEvents.map((event) => (
                <article
                  key={`${event.day}-${event.time}-${event.title}`}
                  className={`rounded-lg border p-4 ${categoryStyles[event.category]}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">{event.day}</p>
                      <h3 className="mt-1 text-base font-semibold">
                        {event.title}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-md bg-white/70 px-2 py-1 text-xs font-semibold">
                      {event.time}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6">{event.detail}</p>
                </article>
              ))}
            </div>
          </SectionCard>

          <div className="flex flex-col gap-6">
            <SectionCard
              title="Recommended shift availability"
              subtitle="Suggested around class load, study blocks, and rest."
            >
              <div className="space-y-4">
                {recommendedShifts.map((shift) => (
                  <div
                    key={shift.label}
                    className="border-l-4 border-teal-500 pl-4"
                  >
                    <p className="text-sm font-semibold text-teal-800">
                      {shift.label}
                    </p>
                    <h3 className="mt-1 font-semibold text-slate-950">
                      {shift.time}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {shift.reason}
                    </p>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="Warnings">
              <div className="space-y-3">
                {warnings.map((warning) => (
                  <article
                    key={warning.title}
                    className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-950"
                  >
                    <h3 className="font-semibold">{warning.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-amber-900">
                      {warning.description}
                    </p>
                  </article>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <SectionCard
            title="Suggested study blocks"
            subtitle="Beginner-friendly recommendations that could later come from AI."
          >
            <div className="space-y-4">
              {studyBlocks.map((block) => (
                <article
                  key={block.course}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-semibold text-slate-950">
                      {block.course}
                    </h3>
                    <p className="text-sm font-medium text-indigo-700">
                      {block.time}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {block.focus}
                  </p>
                </article>
              ))}
            </div>
          </SectionCard>

          <SectionCard
            title="User preferences"
            subtitle="Static controls for the MVP. These can become real settings later."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Weekly work limit
                </span>
                <input
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-teal-600 focus:ring-2"
                  defaultValue="12 hours"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Best study time
                </span>
                <select
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-teal-600 focus:ring-2"
                  defaultValue="late-morning"
                >
                  <option value="morning">Morning</option>
                  <option value="late-morning">Late morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </label>
            </div>

            <div className="mt-5 space-y-3">
              {preferences.map((preference) => (
                <label
                  key={preference}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3"
                >
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-700"
                    defaultChecked
                  />
                  <span className="text-sm leading-6 text-slate-700">
                    {preference}
                  </span>
                </label>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </main>
  );
}
