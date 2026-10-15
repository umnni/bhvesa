
import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight, ArrowUpRight, ArrowDown,
  Search, Target, Megaphone, PenTool,
  BarChart3, Bot, Code2, ShoppingBag,
  Check, CheckCircle2, CalendarDays,
  Clock3, BookOpen, Users, Lightbulb,
  BriefcaseBusiness, Sparkles, Play,
  Globe2, MousePointer2, TrendingUp,
  ChevronDown, Send, GraduationCap,
  MonitorPlay, BadgeCheck,
} from "lucide-react";

const courses = [
  {
    icon: Search,
    number: "01",
    name: "SEO & Search Marketing",
    desc: "Master search visibility, keywords, technical SEO and organic growth strategies.",
    tags: ["SEO", "Google Search Console"],
    color: "blue",
  },
  {
    icon: Target,
    number: "02",
    name: "Google Ads & PPC",
    desc: "Understand paid campaigns, search ads, conversion tracking and optimization.",
    tags: ["Google Ads", "PPC"],
    color: "gold",
  },
  {
    icon: Megaphone,
    number: "03",
    name: "Social Media & Meta Ads",
    desc: "Learn Instagram, Facebook, audience targeting, ad creatives and campaigns.",
    tags: ["Meta Ads", "Social Media"],
    color: "sky",
  },
  {
    icon: PenTool,
    number: "04",
    name: "Content & Creative Marketing",
    desc: "Create impactful content, design visuals and build engaging brand stories.",
    tags: ["Canva", "Content Strategy"],
    color: "peach",
  },
  {
    icon: BarChart3,
    number: "05",
    name: "Analytics & Performance",
    desc: "Explore GA4, tracking, performance metrics and marketing reports.",
    tags: ["GA4", "Reporting"],
    color: "mint",
  },
  {
    icon: Bot,
    number: "06",
    name: "AI & Marketing Automation",
    desc: "Work with AI tools, automated workflows and modern marketing technology.",
    tags: ["AI Tools", "Automation"],
    color: "violet",
  },
];

const benefits = [
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    desc: "A clear learning path covering fundamentals, advanced strategies and practical applications.",
  },
  {
    icon: MousePointer2,
    title: "Practical Learning",
    desc: "Work through assignments, campaign exercises and realistic marketing scenarios.",
  },
  {
    icon: Globe2,
    title: "Industry Tools",
    desc: "Explore platforms such as Google Ads, Meta Ads Manager, Canva and Google Analytics.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Portfolio-Focused Skills",
    desc: "Understand how to turn your learning into projects that demonstrate your abilities.",
  },
];

const batches = [
  {
    label: "WEEKEND LEARNING",
    name: "Weekend Batch",
    days: "Saturday & Sunday",
    timing: "Timings Coming Soon",
    description: "A flexible learning option for professionals and students with busy weekdays.",
    features: ["Weekend classes", "Structured modules", "Practical assignments"],
  },
  {
    label: "EVENING LEARNING",
    name: "Evening Batch",
    days: "Evening Sessions",
    timing: "6:00 - 8:00 PM",
    description: "A convenient evening learning option designed around your daily routine.",
    features: ["Evening timing", "Course-based learning", "Practical activities"],
    featured: true,
  },
  {
    label: "WEEKDAY LEARNING",
    name: "Regular Batch",
    days: "Monday - Friday",
    timing: "3-6 PM / 6-9 PM",
    description: "A regular learning schedule with two available daily time slots.",
    features: ["Weekday sessions", "Two timing options", "Regular skill development"],
  },
];

const faqItems = [
  {
    q: "Do I need prior digital marketing experience?",
    a: "The proposed curriculum begins with digital marketing fundamentals, making it suitable for beginners. Advanced subjects build on those foundations.",
  },
  {
    q: "What subjects are covered?",
    a: "Topics include SEO, Google Ads, Meta Ads, social media marketing, content, design, websites, analytics, AI tools and more. Exact coverage depends on your selected course.",
  },
  {
    q: "What batch timings are available?",
    a: "We have planned a Saturday-Sunday batch, an evening batch from 6 to 8 PM, and regular Monday-Friday slots from 3 to 6 PM or 6 to 9 PM. Weekend timings and evening batch days are to be confirmed.",
  },
  {
    q: "Can I enquire about a specific course?",
    a: "Yes. Select your preferred course in the enquiry form and share any questions in the message field.",
  },
];

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      <span className="eyebrow">
        <span className="eyebrow-line" /> {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" data-aos="fade-left">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />

      <div className="hero-mini-card hero-mini-top">
        <span className="mini-icon gold">
          <Sparkles size={20} />
        </span>
        <div>
          <strong>Digital Skills</strong>
          <small>Learn. Create. Grow.</small>
        </div>
      </div>

      <div className="hero-dashboard">
        <div className="dashboard-top">
          <div className="dashboard-dots">
            <i /><i /><i />
          </div>
          <span>YOUR LEARNING SPACE</span>
          <div className="dashboard-menu" />
        </div>

        <div className="dashboard-body">
          <div className="dashboard-intro">
            <div className="dashboard-avatar">
              <GraduationCap size={26} />
            </div>
            <div>
              <span className="dashboard-overline">WELCOME TO BHVESA</span>
              <h3>Explore your potential.</h3>
              <p>Your digital marketing journey starts here.</p>
            </div>
          </div>

          <div className="dashboard-chart">
            <div className="chart-title">
              <span>Learning & Growth</span>
              <TrendingUp size={18} />
            </div>
            <div className="chart-bars">
              {[38, 53, 45, 68, 61, 83, 75, 96].map((n, i) => (
                <span key={i} style={{ height: `${n}%` }} />
              ))}
            </div>
            <div className="chart-labels">
              <span>START</span>
              <span>PROGRESS</span>
              <span>GROWTH</span>
            </div>
          </div>

          <div className="dashboard-skills">
            <span><CheckCircle2 size={14} /> SEO</span>
            <span><CheckCircle2 size={14} /> Meta Ads</span>
            <span><CheckCircle2 size={14} /> AI Tools</span>
          </div>
        </div>
      </div>

      <div className="hero-mini-card hero-mini-bottom">
        <span className="mini-icon blue">
          <BadgeCheck size={20} />
        </span>
        <div>
          <strong>Learn by Doing</strong>
          <small>Practical skill building</small>
        </div>
      </div>

      <span className="hero-decor-star"><Sparkles size={28} /></span>
    </div>
  );
}

function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const update = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    // Backend integration will be added later.
    setStatus("Form preview ready. Backend connection is pending.");
  };

  return (
    <section className="enquiry-section section-pad" id="enquiry">
      <div className="container">
        <div className="enquiry-wrapper">
          <div className="enquiry-copy" data-aos="fade-right">
            <span className="eyebrow light">
              <span className="eyebrow-line" /> TAKE THE FIRST STEP
            </span>
            <h2>
              Your next chapter
              <br />
              starts <span>here.</span>
            </h2>
            <p>
              Interested in learning digital marketing? Tell us
              a little about yourself and the course you're
              interested in.
            </p>

            <div className="enquiry-benefits">
              <span><Check size={17} /> Explore available courses</span>
              <span><Check size={17} /> Find a suitable batch</span>
              <span><Check size={17} /> Ask your questions</span>
            </div>

            <div className="enquiry-watermark">B.</div>
          </div>

          <div className="enquiry-form-wrap" data-aos="fade-left">
            <div className="form-heading">
              <h3>Enquire About a Course</h3>
              <p>Fill in your details below.</p>
            </div>

            <form onSubmit={submit} className="enquiry-form">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="home-name">Full Name *</label>
                  <input
                    id="home-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={update}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="home-email">Email Address *</label>
                  <input
                    id="home-email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={update}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="home-phone">Phone Number *</label>
                  <input
                    id="home-phone"
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    value={form.phone}
                    onChange={update}
                    required
                    minLength={10}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="home-course">Interested Course *</label>
                  <select
                    id="home-course"
                    name="course"
                    value={form.course}
                    onChange={update}
                    required
                  >
                    <option value="">Select a course</option>
                    <option>Complete Digital Marketing</option>
                    {courses.map((course) => (
                      <option key={course.name}>{course.name}</option>
                    ))}
                    <option>Website & E-commerce Marketing</option>
                    <option>Other / Not Sure Yet</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="home-message">Your Message</label>
                <textarea
                  id="home-message"
                  name="message"
                  rows="4"
                  placeholder="Tell us what you would like to learn..."
                  value={form.message}
                  onChange={update}
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Submit Enquiry <Send size={17} />
              </button>

              {status && <p className="form-status">{status}</p>}
              <p className="form-note">
                This is a frontend preview. Enquiries will be delivered
                after the backend is connected.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main>
      {/* HERO */}
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-content" data-aos="fade-up">
            <span className="hero-badge">
              <span className="badge-dot" />
              WELCOME TO BHVESA
            </span>

            <h1>
              Learn Today.
              <br />
              <span className="hero-blue">Lead Tomorrow.</span>
            </h1>

            <p className="hero-subtitle">
              From the basics of digital marketing to the skills
              that drive real growth. Explore SEO, performance
              advertising, social media, creative marketing,
              AI tools and more.
            </p>

            <div className="hero-buttons">
              <Link to="/courses" className="btn btn-primary">
                Explore Our Courses <ArrowUpRight size={19} />
              </Link>
              <Link to="/batches" className="btn btn-outline">
                View Batches <ArrowRight size={18} />
              </Link>
            </div>

            <div className="hero-trust">
              <div className="hero-trust-icons">
                <span><BookOpen size={21} /></span>
                <span><Target size={21} /></span>
                <span><MonitorPlay size={21} /></span>
              </div>
              <div>
                <strong>Learn. Practice. Grow.</strong>
                <small>A practical approach to digital skills</small>
              </div>
            </div>
          </div>

          <HeroVisual />
        </div>

        <div className="container hero-bottom">
          <div className="hero-bottom-line" />
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={17} />
        </div>
      </section>

      {/* EXPERTISE STRIP */}
      <section className="expertise-strip">
        <div className="container expertise-inner">
          <span>EXPLORE WHAT'S POSSIBLE</span>
          <div>
            <span>SEO</span>
            <i />
            <span>GOOGLE ADS</span>
            <i />
            <span>META ADS</span>
            <i />
            <span>ANALYTICS</span>
            <i />
            <span>AI TOOLS</span>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="about-preview section-pad">
        <div className="container about-preview-grid">
          <div data-aos="fade-right">
            <SectionHeading
              eyebrow="GET TO KNOW BHVESA"
              title={<>Where curiosity meets <em>capability.</em></>}
            />
          </div>

          <div className="about-preview-text" data-aos="fade-left">
            <p>
              At Bhvesa, we believe meaningful learning begins
              with strong fundamentals and grows through
              practical understanding.
            </p>
            <p>
              Our digital marketing curriculum is designed to
              introduce learners to the strategies, platforms,
              creative processes and technologies used in
              today's digital world.
            </p>
            <Link to="/about" className="text-link">
              More About Bhvesa <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>

        <div className="container">
          <div className="learning-pillars">
            {[
              ["01", "Understand the Fundamentals"],
              ["02", "Explore Modern Tools"],
              ["03", "Apply What You Learn"],
            ].map(([num, title]) => (
              <div className="pillar" key={num} data-aos="fade-up">
                <span>{num}</span>
                <h3>{title}</h3>
                <ArrowUpRight size={20} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="courses-section section-pad" id="courses">
        <div className="container">
          <div className="section-top-row">
            <SectionHeading
              eyebrow="EXPLORE OUR COURSES"
              title={<>Skills that open <em>new doors.</em></>}
              description="Explore different areas of digital marketing, from search engines and paid campaigns to analytics, content creation and AI."
            />
            <Link to="/courses" className="btn btn-outline section-button">
              All Courses <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="courses-grid">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Link
                  to="/courses"
                  className={`course-card course-${course.color}`}
                  key={course.name}
                  data-aos="fade-up"
                  data-aos-delay={index % 3 * 90}
                >
                  <div className="course-card-top">
                    <span className="course-icon"><Icon size={27} /></span>
                    <span className="course-number">{course.number}</span>
                  </div>

                  <h3>{course.name}</h3>
                  <p>{course.desc}</p>

                  <div className="course-tags">
                    {course.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="course-card-bottom">
                    <span>Explore Course</span>
                    <span className="course-arrow">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY BHVESA */}
      <section className="why-section section-pad">
        <div className="container">
          <div className="why-header">
            <SectionHeading
              eyebrow="THE BHVESA APPROACH"
              title={<>Learning designed for <em>real progress.</em></>}
              description="Our proposed learning approach combines concepts, tools, practical exercises and project-based development."
              center
            />
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  className="benefit-card"
                  key={benefit.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className="benefit-icon"><Icon size={27} /></div>
                  <span className="benefit-index">
                    0{index + 1} / LEARN MORE
                  </span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section className="journey-section section-pad">
        <div className="container journey-grid">
          <div data-aos="fade-right">
            <SectionHeading
              eyebrow="YOUR LEARNING JOURNEY"
              title={<>From basics to <em>brilliance.</em></>}
              description="Every skill begins with a first step. Build your understanding and move towards confident application."
            />
            <Link to="/courses" className="btn btn-primary">
              Start Exploring <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="journey-steps" data-aos="fade-left">
            {[
              {
                num: "01",
                title: "Discover",
                desc: "Explore the fundamentals and understand how digital marketing works.",
                icon: Lightbulb,
              },
              {
                num: "02",
                title: "Learn",
                desc: "Study strategies, platforms and essential industry concepts.",
                icon: BookOpen,
              },
              {
                num: "03",
                title: "Practice",
                desc: "Apply your knowledge through activities and real-world scenarios.",
                icon: Code2,
              },
              {
                num: "04",
                title: "Build",
                desc: "Develop projects and strengthen your portfolio of skills.",
                icon: TrendingUp,
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div className="journey-step" key={step.num}>
                  <span className="journey-num">{step.num}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                  <Icon size={23} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BATCHES */}
      <section className="batches-section section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="CHOOSE YOUR SCHEDULE"
            title={<>Learning that fits <em>your life.</em></>}
            description="Choose from our proposed weekend, evening and regular learning schedules."
            center
          />

          <div className="batches-grid">
            {batches.map((batch, index) => (
              <div
                className={`batch-card ${batch.featured ? "featured" : ""}`}
                key={batch.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="batch-head">
                  <span className="batch-label">{batch.label}</span>
                  <CalendarDays size={22} />
                </div>

                <h3>{batch.name}</h3>
                <p>{batch.description}</p>

                <div className="batch-timing">
                  <Clock3 size={21} />
                  <div>
                    <strong>{batch.timing}</strong>
                    <span>{batch.days}</span>
                  </div>
                </div>

                <div className="batch-features">
                  {batch.features.map((feature) => (
                    <span key={feature}>
                      <Check size={16} /> {feature}
                    </span>
                  ))}
                </div>

                <Link to="/batches" className="batch-btn">
                  Explore Batch <ArrowUpRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="container">
          <div className="home-cta-inner" data-aos="zoom-in">
            <div className="cta-decor"><Sparkles size={80} /></div>
            <span className="eyebrow light">
              <span className="eyebrow-line" /> YOUR NEXT STEP
            </span>
            <h2>
              The future belongs to
              <br />
              those who <em>keep learning.</em>
            </h2>
            <p>
              Discover courses that help you understand and
              navigate the digital marketing world.
            </p>
            <Link to="/contact" className="btn btn-white">
              Let's Talk About Your Goals <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section section-pad">
        <div className="container faq-grid">
          <div>
            <SectionHeading
              eyebrow="FREQUENTLY ASKED QUESTIONS"
              title={<>Have questions? <em>We have answers.</em></>}
              description="A few things you might want to know before getting started."
            />
            <Link to="/contact" className="text-link">
              Still Have Questions? <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="faq-list">
            {faqItems.map((faq, index) => (
              <div
                className={`faq-item ${activeFaq === index ? "open" : ""}`}
                key={faq.q}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  aria-expanded={activeFaq === index}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={20} />
                </button>
                {activeFaq === index && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryForm />
    </main>
  );
}
