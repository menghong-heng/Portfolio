import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion, type Variants } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowUpRight,
  ChevronDown,
  GitBranch,
  Mail,
  MapPin,
  Send,
} from 'lucide-react'

type Highlight = {
  title: string
  description: string
}

type SocialLink = {
  label: string
  handle: string
  href: string
  icon: LucideIcon
}

const highlights: Highlight[] = [
  {
    title: 'Current focus',
    description:
      'Fourth-year Applied Mathematics and Statistics student focused on data science, machine learning, analytics, and applied AI.',
  },
  {
    title: 'Data portfolio',
    description:
      'ETL pipelines, data cleaning, exploratory analysis, feature engineering, BI-ready layers, NLP, and classification models.',
  },
  {
    title: 'Availability',
    description:
      'Open to data science, data analyst, and machine learning internship opportunities in Cambodia or remote-friendly teams.',
  },
]

const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    handle: 'menghong-heng',
    href: 'https://github.com/menghong-heng',
    icon: GitBranch,
  },
  {
    label: 'Email',
    handle: 'heng.menghong.321@gmail.com',
    href: 'mailto:heng.menghong.321@gmail.com',
    icon: Mail,
  },
  {
    label: 'Telegram',
    handle: 't.me/menghong_hengg',
    href: 'https://t.me/menghong_hengg',
    icon: Send,
  },
  {
    label: 'Location',
    handle: 'Phnom Penh, Cambodia',
    href: '#contact',
    icon: MapPin,
  },
]

const listVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
}

const profileImage = `${import.meta.env.BASE_URL}images/Heng_Menghong.png`

export function GlassmorphismPortfolioBlock() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="premium-card relative overflow-hidden rounded-3xl p-6 md:p-10 lg:p-12"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(212,175,94,0.06),transparent_38%,rgba(91,143,185,0.04)_72%,transparent)]"
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="premium-chip inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest"
              >
                Data Science & Analytics
              </Badge>

              <div className="space-y-5">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="premium-hero-title max-w-3xl text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl"
                >
                  Transforming complex data into{' '}
                  <span className="premium-display-accent text-primary/80">
                    actionable intelligence.
                  </span>
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="premium-divider !mx-0 !ml-0"
                  style={{ transformOrigin: 'left' }}
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="premium-hero-copy max-w-2xl text-base leading-relaxed text-foreground/60 md:text-lg"
                >
                  Applied Mathematics & Statistics student specializing in
                  end-to-end data science: Python, SQL, machine learning, NLP,
                  ETL pipelines, and analytics-ready dashboards.
                </motion.p>
              </div>

              <div className="grid gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ y: -3 }}
                    className="premium-card group relative rounded-2xl p-5 transition-all"
                  >
                    <div className="relative space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary/60">
                        {item.title}
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/65">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="h-12 gap-2 rounded-full px-8 text-sm font-semibold uppercase tracking-wider"
                >
                  View Projects
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    window.open('https://github.com/menghong-heng', '_blank')
                  }
                  className="h-12 gap-2 rounded-full px-8 text-sm font-semibold uppercase tracking-wider"
                >
                  GitHub
                  <GitBranch className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            <div className="relative">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-primary/12 bg-[#0a0c14] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] md:p-8">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-6"
                  >
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-primary/40 via-primary/15 to-transparent">
                      <img
                        src={profileImage}
                        alt="Heng Menghong"
                        className="relative h-36 w-36 rounded-full border-2 border-[#0a0c14] object-cover shadow-[0_28px_80px_rgba(0,0,0,0.62)]"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-2"
                  >
                    <h2 className="premium-profile-name text-2xl font-semibold text-foreground">
                      Heng <span className="accent text-primary/75">Menghong</span>
                    </h2>
                    <div className="premium-divider mx-auto my-3" />
                    <p className="premium-profile-role text-xs font-semibold uppercase tracking-widest text-foreground/40">
                      Data Science · ML · Analytics
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="premium-profile-copy mt-4 max-w-sm text-sm leading-relaxed text-foreground/60"
                  >
                    Fourth-year AMS student at ITC, specializing in data science,
                    applied AI, analytics, NLP, and machine learning.
                  </motion.p>
                </div>

                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className="mt-8 flex flex-col gap-3"
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        variants={itemVariants}
                        href={social.href}
                        target={
                          social.href.startsWith('#') ? undefined : '_blank'
                        }
                        rel={
                          social.href.startsWith('#')
                            ? undefined
                            : 'noopener noreferrer'
                        }
                        className="group flex items-center justify-between rounded-2xl border border-primary/10 bg-[#090b12] px-4 py-3 text-left shadow-[0_12px_34px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:bg-[#0d0f18]"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.985 }}
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/14 bg-[#070910] text-primary shadow-[0_10px_28px_rgba(0,0,0,0.24)] transition-all">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground">
                              {social.label}
                            </p>
                            <p className="truncate text-xs text-foreground/50">
                              {social.handle}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary/60" />
                      </motion.a>
                    )
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-foreground/35 transition hover:text-primary/60 md:flex"
      >
        Discover More
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  )
}
