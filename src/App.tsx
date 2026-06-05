import { useState, type FormEvent } from 'react'
import { motion, type Variants } from 'framer-motion'
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Calendar,
  Database,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Sparkles,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GlassmorphismPortfolioBlock } from '@/components/ui/glassmorphism-portfolio-block-shadcnui'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
]

const education = [
  {
    school: 'Institute of Technology of Cambodia',
    program: 'Bachelor of Engineering, Applied Mathematics & Statistics',
    meta: 'Year IV · Phnom Penh, Cambodia',
    period: 'Feb 2023 - Present',
  },
  {
    school: 'Royal University of Phnom Penh - IFL',
    program: 'Bachelor\'s Degree, Department of English',
    meta: 'Phnom Penh, Cambodia',
    period: 'Feb 2024 - Present',
  },
]

const experience = [
  {
    role: 'Data Analyst & NLP Lead',
    org: 'KeyEZ Team',
    period: '2025 - Present',
    points: [
      'Co-founded KeyEZ, an AI-powered Khmer typing assistant for Romanized Khmer conversion, spelling correction, and grammar support.',
      'Analyzed survey, interview, and user-feedback data to identify Khmer writing challenges.',
      'Prepared Khmer text datasets and built feedback-analysis workflows to support NLP model improvement.',
      'Achieved Top 10 Candidate at the Innovative Tech Challenge Season 3.',
    ],
  },
  {
    role: 'Freelance Developer - Local Food Ordering System',
    org: 'Independent Project',
    period: '2026 - Present',
    points: [
      'Developed a small food ordering web application for a local client, covering menu browsing, order placement, and order-status tracking.',
      'Designed PostgreSQL data models for menus, tables, and orders to support reliable data storage and retrieval.',
      'Managed deployment, documentation, and client handover for non-technical users.',
    ],
  },
]

const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'SQL', 'R', 'C', 'C++', 'LaTeX'],
  },
  {
    title: 'Data Science & Analytics',
    skills: [
      'Pandas',
      'NumPy',
      'PySpark',
      'Jupyter Notebook',
      'Exploratory Data Analysis',
      'Data Cleaning',
      'Feature Engineering',
    ],
  },
  {
    title: 'Machine Learning & NLP',
    skills: [
      'Scikit-learn',
      'PyTorch',
      'Random Forest',
      'Logistic Regression',
      'TF-IDF',
      'Sentiment Analysis',
      'Text Classification',
    ],
  },
  {
    title: 'Data Engineering & BI',
    skills: [
      'PostgreSQL',
      'MySQL',
      'Oracle DB',
      'Apache Kafka',
      'SQLAlchemy',
      'Power BI',
      'Streamlit',
    ],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Railway', 'MLflow'],
  },
  {
    title: 'Languages',
    skills: ['Khmer - Native', 'English - Upper Intermediate'],
  },
]

const projects = [
  {
    title: 'Job Market Analysis Pipeline - Cambodia',
    period: '2026',
    stack:
      'Python, BeautifulSoup, Pandas, PostgreSQL, SQLAlchemy, Power BI, Docker, Jupyter Notebook',
    description:
      'Built a local-first ETL pipeline scraping public job postings from 13 Cambodian job boards, targeting 12,000+ records. Cleaned job titles, salaries, locations, and skills, then designed Power BI-ready fact, dimension, and summary layers.',
    href: 'https://github.com/menghong-heng/job-market-analysis',
    tags: ['ETL', 'Power BI', 'Analytics'],
  },
  {
    title: 'Real-Time Stock Market Pipeline & Forecasting Dashboard',
    period: '2026',
    stack: 'Python, PySpark, PostgreSQL, FastAPI, Streamlit, MLflow, Plotly, Docker',
    description:
      'Built a stock-market data pipeline using Finnhub API, PySpark ETL, and PostgreSQL Bronze, Silver, and Gold data layers. Engineered price features for MLflow-tracked forecasting experiments and created a Streamlit dashboard for 8 major stocks.',
    href: 'https://github.com/menghong-heng/Stock_Market_realtime',
    tags: ['Data Engineering', 'Forecasting', 'Dashboard'],
  },
  {
    title: 'E-Commerce Sales Analysis',
    period: '2026',
    stack: 'Python, Pandas, PySpark, MySQL, SQLAlchemy, Jupyter Notebook',
    description:
      'Loaded Amazon Sale Report dataset into MySQL via Python ETL, analyzing sales trends and category performance with PySpark and SQL.',
    href: 'https://github.com/menghong-heng/E_Commerce_Analysis',
    tags: ['EDA', 'SQL', 'PySpark'],
  },
  {
    title: 'Trustpilot Sentiment Scraper & Classifier',
    period: '2025',
    stack: 'Python, BeautifulSoup, Scikit-learn, TF-IDF, Logistic Regression, Streamlit',
    description:
      'Scraped multi-star Trustpilot reviews across 6 e-commerce merchants, trained a TF-IDF + Logistic Regression sentiment classifier, serialized the model and vectorizer, and deployed a Streamlit prediction app.',
    href: 'https://github.com/menghong-heng/beautiful_soup_scrape',
    tags: ['NLP', 'Classification', 'Web Scraping'],
  },
]

const certificates = [
  {
    title: 'Python Fundamentals',
    detail: 'Course Completion Certificate',
    href: 'https://drive.google.com/file/d/1or89fBA16QMAW4YAvR-_wSHneGIGXUKG/view?usp=drive_link',
  },
  {
    title: 'ASEAN Data Science Explorers 2025',
    detail: 'Enablement Session: SAP Analytics Cloud Training',
    href: 'https://drive.google.com/file/d/1cDJIRLiy4BoS5oo6xSRFuSo9xfqhgjRa/view?usp=drive_link',
  },
  {
    title: 'AI in Education Online Bootcamp',
    detail: 'Introduction to AI with Teachable Machine',
    href: '',
  },
]

const metrics = [
  { value: '12K+', label: 'Job records targeted' },
  { value: '13', label: 'Job boards scraped' },
  { value: '8', label: 'Stock tickers monitored' },
  { value: 'Top 10', label: 'Innovation challenge result' },
]

const awards = [
  {
    title: 'Top 10 Candidate - Innovative Tech Challenge Season 3',
    period: '2025',
    description:
      'Represented startup team KeyEZ in a nationwide university innovation competition, reaching the Top 10 out of all competing teams.',
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <div className="premium-divider mb-5" />
      <Badge variant="outline" className="premium-chip mb-4 uppercase tracking-widest">
        {eyebrow}
      </Badge>
      <h2 className="section-title-display text-4xl text-foreground sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-foreground/55">
        {description}
      </p>
    </motion.div>
  )
}

function App() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const subject = encodeURIComponent('Portfolio contact message')
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    )

    window.location.href = `mailto:heng.menghong.321@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(120deg,rgba(212,175,94,0.06),transparent_34%,rgba(91,143,185,0.04)_70%,transparent)]"
          animate={{ opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="premium-grid absolute inset-0" />
      </div>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="premium-nav fixed inset-x-0 top-0 z-50 border-b border-primary/8"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="premium-brand-mark flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 text-sm font-bold text-primary shadow-[0_0_24px_rgba(212,175,94,0.12)]">
              HM
            </span>
            <span className="premium-brand-name hidden text-sm font-semibold text-foreground sm:inline">
              Heng Menghong
            </span>
          </a>

          <motion.div
            className="premium-pill hidden items-center gap-1 rounded-full px-2 py-1 lg:flex"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredNav(item.href)}
                onFocus={() => setHoveredNav(item.href)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="premium-nav-link relative isolate overflow-hidden rounded-full px-3.5 py-2 text-[0.84rem] text-foreground/55 outline-none transition hover:text-foreground focus-visible:text-foreground"
              >
                {hoveredNav === item.href ? (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-x-3 bottom-1 -z-10 h-[2px] rounded-full bg-primary shadow-[0_0_12px_rgba(212,175,94,0.5)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open('mailto:heng.menghong.321@gmail.com')}
            className="gap-2"
          >
            <Mail className="h-4 w-4" />
            Contact
          </Button>
        </nav>
      </motion.header>

      <main>
        <GlassmorphismPortfolioBlock />

        {/* ── About ──────────────────────────────────────── */}
        <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="premium-card rounded-3xl p-6 sm:p-8"
            >
              <Sparkles className="mb-5 h-7 w-7 text-primary/70" />
              <h2 className="section-title-display text-3xl text-foreground">
                Building practical AI, data, and analytics solutions.
              </h2>
              <p className="mt-5 leading-relaxed text-foreground/55">
                As a 4th-year Applied Mathematics and Statistics student at
                ITC, I focus on practical data science — NLP, ETL pipelines,
                BI dashboards, and machine learning systems that transform
                raw data into actionable insights, clear visualizations,
                and decision-support dashboards.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {metrics.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="premium-card rounded-3xl p-6"
                >
                  <p className="section-title-display text-3xl text-primary">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-foreground/50">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Education (Timeline) ───────────────────────── */}
        <section id="education" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Education"
              title="Academic Background"
              description="A mathematics and statistics foundation paired with communication training and project-based technical practice."
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="timeline-line hidden md:block" style={{ left: '21px' }} />

              <div className="grid gap-4">
                {education.map((item) => (
                  <motion.article
                    key={item.school}
                    variants={fadeUp}
                    whileHover={{ y: -3 }}
                    className="premium-card rounded-3xl p-6 md:ml-12"
                  >
                    {/* Timeline dot (visible on md+) */}
                    <div className="absolute -left-[29px] top-8 hidden md:block">
                      <div className="timeline-dot" />
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary/70">
                          <GraduationCap className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {item.school}
                          </h3>
                          <p className="mt-1 text-sm text-foreground/60">
                            {item.program}
                          </p>
                          <p className="mt-2 text-sm text-foreground/40">
                            {item.meta}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/45">
                        <Calendar className="h-4 w-4" />
                        {item.period}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Experience ─────────────────────────────────── */}
        <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Experience"
              title="Professional Experience"
              description="Applying data science, NLP, and engineering to real-world products and business problems."
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-5 lg:grid-cols-2"
            >
              {experience.map((item) => (
                <motion.article
                  key={item.role}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="premium-card rounded-3xl p-6 sm:p-8"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-primary/70">{item.period}</p>
                      <h3 className="mt-2 text-xl font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-foreground/45">
                        {item.org}
                      </p>
                    </div>
                    <BriefcaseBusiness className="h-6 w-6 text-foreground/30" />
                  </div>
                  <div className="premium-divider-wide mb-5" />
                  <ul className="space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-foreground/60"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Skills ──────────────────────────────────────── */}
        <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Skills"
              title="Technical Proficiencies"
              description="A comprehensive data science stack covering programming, analytics, machine learning, NLP, data engineering, and BI."
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className="grid gap-5 md:grid-cols-2"
            >
              {skillGroups.map((group) => (
                <motion.article
                  key={group.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="premium-card rounded-3xl p-6"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <Database className="h-5 w-5 text-primary/60" />
                    <h3 className="skill-group-title text-foreground">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-primary/10 bg-primary/4 px-3 py-1.5 text-sm text-foreground/60 transition-colors hover:border-primary/20 hover:text-foreground/75"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Projects ───────────────────────────────────── */}
        <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Projects"
              title="Selected Work"
              description="End-to-end data science and analytics projects demonstrating pipeline design, machine learning, and dashboard development."
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.16 }}
              className="grid gap-5 lg:grid-cols-2"
            >
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  whileHover={{ y: -5, scale: 1.005 }}
                  className="premium-card group relative rounded-3xl p-6 transition"
                >
                  {/* Project number */}
                  <span className="project-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span className="text-sm text-foreground/40">
                      {project.period}
                    </span>
                  </div>
                  <p className="premium-tech mt-2 text-sm text-primary/60">
                    {project.stack}
                  </p>
                  <div className="premium-divider-wide my-4" />
                  <p className="leading-relaxed text-foreground/60">
                    {project.description}
                  </p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 transition group-hover:text-primary"
                  >
                    View repository
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Certificates ───────────────────────────────── */}
        <section id="certificates" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Certifications"
              title="Professional Development"
              description="Continuing education in data science, analytics, and artificial intelligence."
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4"
            >
              {certificates.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  className="premium-card rounded-3xl p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary/60">
                        <BookOpen className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-foreground/50">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-foreground/35 transition hover:text-primary"
                        aria-label={`View ${item.title} certificate`}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    ) : null}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Awards ─────────────────────────────────────── */}
        <section id="awards" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Recognition"
              title="Awards & Achievements"
              description="Competitive recognition and community engagement in technology and STEM outreach."
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex justify-center"
            >
              {awards.map((award) => (
                <motion.article
                  key={award.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="premium-card max-w-2xl w-full rounded-3xl p-6 sm:p-8"
                >
                  <Award className="mb-5 h-7 w-7 text-primary/60" />
                  <p className="text-sm font-medium text-primary/70">{award.period}</p>
                  <h3 className="section-title-display mt-2 text-2xl text-foreground">
                    {award.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-foreground/55">
                    {award.description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Contact ────────────────────────────────────── */}
        <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -4 }}
              className="premium-card rounded-3xl p-6 sm:p-8"
            >
              <Badge variant="outline" className="premium-chip mb-4 uppercase tracking-widest">
                Contact
              </Badge>
              <h2 className="section-title-display text-3xl text-foreground">
                Have an internship, data project, or research opportunity?
              </h2>
              <p className="mt-4 leading-relaxed text-foreground/55">
                I welcome inquiries regarding data science, analytics, NLP,
                and machine learning opportunities. Send a message and I
                will respond promptly.
              </p>
              <div className="mt-8 space-y-4 text-sm text-foreground/55">
                <a
                  href="mailto:heng.menghong.321@gmail.com"
                  className="flex items-center gap-3 transition hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  heng.menghong.321@gmail.com
                </a>
                <a
                  href="https://t.me/menghong_hengg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-primary"
                >
                  <Send className="h-4 w-4" />
                  t.me/menghong_hengg
                </a>
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" />
                  Phnom Penh, Cambodia
                </p>
              </div>
            </motion.div>

            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              onSubmit={handleContactSubmit}
              className="premium-card rounded-3xl p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-foreground/55">
                  Name
                  <input
                    name="name"
                    required
                    className="premium-input h-12 w-full rounded-2xl px-4 text-foreground outline-none transition focus:border-primary/50"
                  />
                </label>
                <label className="space-y-2 text-sm text-foreground/55">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="premium-input h-12 w-full rounded-2xl px-4 text-foreground outline-none transition focus:border-primary/50"
                  />
                </label>
              </div>
              <label className="mt-4 block space-y-2 text-sm text-foreground/55">
                Message
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="premium-input w-full resize-none rounded-2xl px-4 py-3 text-foreground outline-none transition focus:border-primary/50"
                />
              </label>
              <Button type="submit" size="lg" className="mt-5 w-full gap-2">
                Send Message
                <MessageSquare className="h-4 w-4" />
              </Button>
            </motion.form>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="px-4 py-10 text-center text-sm text-foreground/40">
        <div className="premium-divider-wide mx-auto mb-8 max-w-6xl" />
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <p className="font-medium text-foreground/50">Heng Menghong</p>
            <p className="text-xs text-foreground/30">
              © {new Date().getFullYear()} · Designed & Built by Heng Menghong
            </p>
          </div>
          <a
            href="https://github.com/menghong-heng"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-primary"
          >
            <GitBranch className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
