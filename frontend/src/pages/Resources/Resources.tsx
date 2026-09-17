import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import resourcesShelf from '../../assets/images/resources-shelf.png'
import {
  ArrowRight,
  BookOpen,
  Brain,
  ChevronRight,
  Clock3,
  Compass,
  GraduationCap,
  Heart,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Moon,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  WalletCards,
} from 'lucide-react'

type Resource = {
  title: string
  description: string
  tags: string[]
  type: string
  icon: React.ElementType
  iconStyle: string
  path?: string
  available: boolean
}

const resources: Resource[] = [
  {
    title: 'Stress & Overwhelm',
    description:
      'Understand stress, recognise overwhelm, and explore practical ways to cope when everything starts feeling like too much.',
    tags: ['Stress', 'Coping'],
    type: 'Guide',
    icon: Brain,
    iconStyle: 'bg-purple-50 text-purple-600',
    path: '/resources/stress-and-overwhelm',
    available: true,
  },
  {
    title: 'Academic Pressure',
    description:
      'Practical ideas for exams, deadlines, assignments, procrastination, performance pressure and fear of failure.',
    tags: ['Study', 'Stress'],
    type: 'Guide',
    icon: GraduationCap,
    iconStyle: 'bg-blue-50 text-blue-600',
    available: false,
  },
  {
    title: 'Sleep & Rest',
    description:
      'Learn about healthy sleep habits, winding down, routines and creating more space for proper rest.',
    tags: ['Sleep', 'Habits'],
    type: 'Guide',
    icon: Moon,
    iconStyle: 'bg-indigo-50 text-indigo-600',
    available: false,
  },
  {
    title: 'Confidence & Self-Esteem',
    description:
      'Explore self-confidence, self-talk, comparison and ways to build a kinder relationship with yourself.',
    tags: ['Confidence', 'Self'],
    type: 'Guide',
    icon: Heart,
    iconStyle: 'bg-rose-50 text-rose-500',
    available: false,
  },
  {
    title: 'Healthy Habits',
    description:
      'Small, realistic habits around movement, routines, food, rest and everyday wellbeing.',
    tags: ['Habits', 'Wellbeing'],
    type: 'Guide',
    icon: Leaf,
    iconStyle: 'bg-green-50 text-green-600',
    available: false,
  },
  {
    title: 'Relationships & Friendship',
    description:
      'Thoughtful guidance around friendships, boundaries, communication, loneliness and social pressure.',
    tags: ['Relationships', 'Social'],
    type: 'Guide',
    icon: Users,
    iconStyle: 'bg-pink-50 text-pink-500',
    available: false,
  },
  {
    title: 'Managing Change',
    description:
      'Support for transitions such as starting university, moving away from home, changing courses or entering a new phase of life.',
    tags: ['Change', 'Life'],
    type: 'Guide',
    icon: Compass,
    iconStyle: 'bg-teal-50 text-teal-600',
    available: false,
  },
  {
    title: 'Focus & Productivity',
    description:
      'Simple approaches to concentration, planning, procrastination and getting things done without burning yourself out.',
    tags: ['Focus', 'Study'],
    type: 'Guide',
    icon: Target,
    iconStyle: 'bg-orange-50 text-orange-600',
    available: false,
  },
  {
    title: 'Money & Student Life',
    description:
      'Information and practical ideas for handling financial pressure, budgeting and common student-life concerns.',
    tags: ['Money', 'Life'],
    type: 'Guide',
    icon: WalletCards,
    iconStyle: 'bg-emerald-50 text-emerald-600',
    available: false,
  },
  {
    title: 'Finding Support',
    description:
      'Understand when reaching out may help and explore ways to find trusted people and professional support.',
    tags: ['Support', 'Help'],
    type: 'Guide',
    icon: HeartHandshake,
    iconStyle: 'bg-sky-50 text-sky-600',
    available: false,
  },
]

const categories = [
  'All',
  'Stress',
  'Study',
  'Sleep',
  'Confidence',
  'Habits',
  'Relationships',
  'Support',
]

function Resources() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredResources = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return resources.filter((resource) => {
      const matchesSearch =
        query.length === 0 ||
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some((tag) => tag.toLowerCase().includes(query))

      const matchesCategory =
        activeCategory === 'All' ||
        resource.tags.some(
          (tag) => tag.toLowerCase() === activeCategory.toLowerCase(),
        )

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#f8fffd] via-white to-[#fbf9ff] text-slate-800">
      {/* =========================================================
          SOFT BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-teal-100/30 blur-3xl" />
        <div className="absolute -right-32 top-[30%] h-96 w-96 rounded-full bg-purple-100/25 blur-3xl" />
        <div className="absolute bottom-0 left-[30%] h-80 w-80 rounded-full bg-blue-100/20 blur-3xl" />
      </div>

      {/* =========================================================
          PAGE CONTAINER
      ========================================================= */}
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:px-10">
        {/* =======================================================
            SMALL PAGE LABEL
        ======================================================= */}
        <div className="mb-6 flex items-center gap-2 text-sm font-medium text-teal-700">
          <BookOpen size={17} />
          <span>Thrive Resource Library</span>
        </div>

        {/* =======================================================
            RESOURCE INTRO + IMAGE
        ======================================================= */}
        <section className="grid items-center gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Find something that{' '}
              <span className="text-teal-600">helps.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore practical information about stress, study pressure,
              sleep, confidence, relationships and everyday wellbeing.
              Start wherever feels most useful to you.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-2 text-xs font-semibold text-teal-700">
                <Sparkles size={14} />
                Practical &amp; student-friendly
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-2 text-xs font-semibold text-purple-700">
                <ShieldCheck size={14} />
                Educational &amp; supportive
              </div>
            </div>
          </div>

          {/* Bookshelf image */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-teal-100/40 via-transparent to-purple-100/40 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-3 shadow-sm backdrop-blur">
              <img
                src="/src/assets/images/resources-shelf.png"
                alt="A calm bookshelf representing learning and wellbeing resources"
                className="h-[220px] w-full rounded-[1.5rem] object-cover sm:h-[260px]"
              />

              <div className="absolute bottom-7 left-7 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <BookOpen size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Explore
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      Learn at your own pace
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================
            SEARCH
        ======================================================= */}
        <section className="mt-10">
          <div className="relative mx-auto max-w-4xl">
            <Search
              size={21}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search resources, topics or wellbeing areas..."
              className="w-full rounded-2xl border border-slate-200 bg-white/90 py-4 pl-14 pr-5 text-[15px] text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-teal-300 focus:ring-4 focus:ring-teal-50"
              aria-label="Search resources"
            />
          </div>

          {/* Search status */}
          {(searchQuery || activeCategory !== 'All') && (
            <div className="mx-auto mt-3 max-w-4xl px-2 text-sm text-slate-500">
              Showing {filteredResources.length}{' '}
              {filteredResources.length === 1 ? 'resource' : 'resources'}
              {searchQuery && (
                <>
                  {' '}
                  for <span className="font-medium">"{searchQuery}"</span>
                </>
              )}
            </div>
          )}
        </section>

        {/* =======================================================
            CATEGORY FILTERS
        ======================================================= */}
        <section className="mt-5">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((category) => {
              const active = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </section>

        {/* =======================================================
            SECTION HEADER
        ======================================================= */}
        <section className="mt-12">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                Explore
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Resources for where you are right now.
              </h2>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Clock3 size={15} />
              <span>More resources are being developed</span>
            </div>
          </div>
        </section>

        {/* =======================================================
            RESOURCE LIST
        ======================================================= */}
        <section className="mt-6">
          {filteredResources.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {filteredResources.map((resource) => {
                const Icon = resource.icon

                const cardContent = (
                  <>
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${resource.iconStyle} transition-transform duration-300 ${
                          resource.available
                            ? 'group-hover:scale-105'
                            : ''
                        }`}
                      >
                        <Icon size={23} strokeWidth={1.8} />
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          resource.available
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {resource.available ? 'Available now' : 'Coming soon'}
                      </span>
                    </div>

                    {/* Main content */}
                    <div className="mt-6">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                          {resource.type}
                        </span>
                      </div>

                      <h3 className="mt-2 text-xl font-bold text-slate-900">
                        {resource.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                        {resource.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {resource.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom action */}
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                      {resource.available ? (
                        <>
                          <span className="text-sm font-semibold text-teal-700">
                            Explore resource
                          </span>

                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-teal-600 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">
                            <ArrowRight
                              size={17}
                              className="transition-transform duration-300 group-hover:translate-x-0.5"
                            />
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-sm font-medium text-slate-400">
                            Content in development
                          </span>

                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400">
                            <ChevronRight size={17} />
                          </span>
                        </>
                      )}
                    </div>
                  </>
                )

                /* =================================================
                   AVAILABLE RESOURCE = CLICKABLE
                   ================================================= */
                if (resource.path && resource.available) {
                  return (
                    <Link
                      key={resource.title}
                      to={resource.path}
                      className="group block rounded-[1.75rem] border border-slate-100 bg-white/90 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-teal-100 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-50"
                    >
                      {cardContent}
                    </Link>
                  )
                }

                /* =================================================
                   COMING SOON RESOURCE = NORMAL CARD
                   ================================================= */
                return (
                  <article
                    key={resource.title}
                    className="rounded-[1.75rem] border border-slate-100 bg-white/75 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {cardContent}
                  </article>
                )
              })}
            </div>
          ) : (
            /* =====================================================
               NO SEARCH RESULTS
            ===================================================== */
            <div className="rounded-[2rem] border border-dashed border-slate-200 bg-white/70 px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400">
                <Search size={25} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-800">
                Nothing matched that search.
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Try a different word or browse all of the wellbeing areas
                above.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('All')
                }}
                className="mt-5 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Show all resources
              </button>
            </div>
          )}
        </section>

        {/* =======================================================
            QUICK RESOURCE TIP
        ======================================================= */}
        <section className="mt-14">
          <div className="rounded-[2rem] border border-purple-100 bg-gradient-to-br from-purple-50/70 via-white to-teal-50/60 p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-purple-600 shadow-sm">
                <Lightbulb size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  You do not need to read everything.
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                  Start with the topic that feels closest to what you are
                  experiencing today. A few useful ideas can be more valuable
                  than trying to work through everything at once.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================
            TRUST / EDUCATIONAL NOTE
        ======================================================= */}
        <section className="mt-6">
          <div className="flex gap-3 rounded-2xl border border-slate-100 bg-white/60 p-5">
            <ShieldCheck
              size={19}
              className="mt-0.5 shrink-0 text-purple-500"
            />

            <p className="text-xs leading-6 text-slate-500 sm:text-sm">
              Thrive resources are intended to provide general educational
              information and practical wellbeing ideas. They are not a
              diagnosis and do not replace professional medical or mental
              health care.
            </p>
          </div>
        </section>

        {/* =======================================================
            SUPPORT CONNECTION
        ======================================================= */}
        <section className="mt-8">
          <div className="flex flex-col gap-5 rounded-[1.75rem] border border-teal-100 bg-teal-50/50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-sm">
                <HeartHandshake size={21} />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Looking for support rather than information?
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Visit Thrive&apos;s Support section to explore ways of
                  reaching out and finding appropriate help.
                </p>
              </div>
            </div>

            <Link
              to="/support"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
            >
              Go to Support
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Resources