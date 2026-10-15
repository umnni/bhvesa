
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";
import {
  Search,
  Target,
  Megaphone,
  PenTool,
  BarChart3,
  Bot,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Sparkles,
  Layers3,
  X,
} from "lucide-react";

import EnquiryForm from "../components/EnquiryForm";

/* =========================================
   ALL DIGITAL MARKETING COURSES
========================================= */

const courses = [
  {
    id: "01",
    title: "SEO & Search Marketing",
    category: "Organic Growth",
    icon: Search,
    theme: "blue",
    desc: "Learn how search engines work and how brands improve their visibility with effective organic search strategies.",
    tags: ["SEO", "Keyword Research", "Search Console"],
    modules: [
      {
        title: "SEO Fundamentals",
        topics: [
          "Introduction to Search Engine Optimization",
          "How Search Engines Work",
          "Crawling, Indexing and Ranking",
          "Organic vs Paid Search",
          "Understanding Search Intent",
          "Google Search Algorithms",
        ],
      },
      {
        title: "Keyword Research",
        topics: [
          "Keyword Research Tools",
          "Short-tail and Long-tail Keywords",
          "Keyword Search Volume",
          "Keyword Competition Analysis",
          "Competitor Keyword Research",
          "Keyword Mapping",
          "Keyword Strategy Development",
        ],
      },
      {
        title: "On-Page SEO",
        topics: [
          "Title Tags and Meta Descriptions",
          "Heading Tags H1–H6",
          "SEO-Friendly URLs",
          "Image Optimization",
          "Internal Linking",
          "Content Optimization",
          "Schema Markup Basics",
        ],
      },
      {
        title: "Technical SEO",
        topics: [
          "XML Sitemaps",
          "Robots.txt",
          "Canonical Tags",
          "Website Speed Optimization",
          "Core Web Vitals",
          "Mobile-Friendly SEO",
          "HTTPS and Website Security",
          "Indexing Issues",
        ],
      },
      {
        title: "Off-Page & Local SEO",
        topics: [
          "Backlink Fundamentals",
          "Link Building Strategies",
          "Guest Posting Concepts",
          "Google Business Profile",
          "Local SEO Optimization",
          "Local Citations",
          "Online Reputation Management",
        ],
      },
      {
        title: "SEO Analytics & Reporting",
        topics: [
          "Google Search Console",
          "Google Analytics 4",
          "Complete Website SEO Audit",
          "Keyword Ranking Reports",
          "Organic Traffic Analysis",
          "SEO Reporting",
          "AI Search Visibility Introduction",
        ],
      },
    ],
  },
  {
    id: "02",
    title: "Google Ads & PPC",
    category: "Paid Advertising",
    icon: Target,
    theme: "gold",
    desc: "Understand paid search, display, shopping and video advertising campaigns with tracking and optimization.",
    tags: ["Google Ads", "PPC", "Conversions"],
    modules: [
      {
        title: "Google Ads Fundamentals",
        topics: [
          "Introduction to Google Ads",
          "Google Ads Account Setup",
          "Campaign Account Structure",
          "Advertising Objectives",
          "Google Ad Auction",
          "Quality Score",
          "Google Ads Policies",
        ],
      },
      {
        title: "Search Advertising",
        topics: [
          "Search Campaign Setup",
          "Keyword Match Types",
          "Negative Keywords",
          "Ad Groups",
          "Responsive Search Ads",
          "Ad Assets",
          "Search Campaign Optimization",
        ],
      },
      {
        title: "Display & Video Advertising",
        topics: [
          "Google Display Network",
          "Display Campaign Setup",
          "Audience Targeting",
          "YouTube Advertising",
          "Video Ad Formats",
          "Remarketing Basics",
          "Creative Planning",
        ],
      },
      {
        title: "Advanced Campaign Types",
        topics: [
          "Performance Max",
          "Google Shopping Ads",
          "Google Merchant Center",
          "Demand Gen Campaigns",
          "Audience Signals",
          "Product Feed Basics",
        ],
      },
      {
        title: "Bidding & Budget Strategy",
        topics: [
          "Manual and Automated Bidding",
          "Campaign Budget Planning",
          "Target CPA",
          "Target ROAS",
          "Ad Scheduling",
          "Campaign Optimization",
          "A/B Testing Concepts",
        ],
      },
      {
        title: "Conversion Tracking & Reporting",
        topics: [
          "Google Tag Manager",
          "Conversion Actions",
          "Google Analytics Integration",
          "Cost Per Conversion",
          "CTR and CPC",
          "Campaign Performance Reports",
          "ROI and ROAS Analysis",
        ],
      },
    ],
  },
  {
    id: "03",
    title: "Social Media & Meta Ads",
    category: "Social Marketing",
    icon: Megaphone,
    theme: "sky",
    desc: "Explore organic social media growth, audience research, Meta advertising and campaign performance.",
    tags: ["Instagram", "Facebook", "Meta Ads"],
    modules: [
      {
        title: "Social Media Fundamentals",
        topics: [
          "Introduction to Social Media Marketing",
          "Social Media Marketing Strategy",
          "Audience Research",
          "Competitor Analysis",
          "Content Pillars",
          "Social Media Content Calendars",
        ],
      },
      {
        title: "Organic Social Media",
        topics: [
          "Instagram Marketing",
          "Facebook Marketing",
          "LinkedIn Marketing",
          "YouTube Marketing",
          "Reels and Short Videos",
          "Community Management",
          "Organic Engagement Strategy",
        ],
      },
      {
        title: "Meta Business Tools",
        topics: [
          "Meta Business Suite",
          "Meta Business Portfolio",
          "Facebook Page Management",
          "Instagram Professional Accounts",
          "Meta Ads Manager",
          "Ad Account Setup",
        ],
      },
      {
        title: "Meta Advertising",
        topics: [
          "Campaign Objectives",
          "Campaign, Ad Set and Ad Structure",
          "Audience Targeting",
          "Lead Generation Campaigns",
          "WhatsApp Advertising",
          "Retargeting",
          "Advertising Creative Testing",
        ],
      },
      {
        title: "Tracking & Performance",
        topics: [
          "Meta Pixel",
          "Conversions API Introduction",
          "Custom Audiences",
          "Lookalike Audiences",
          "Cost Per Lead",
          "Cost Per Acquisition",
          "Return on Ad Spend",
          "Campaign Reporting",
        ],
      },
    ],
  },
  {
    id: "04",
    title: "Content & Creative Marketing",
    category: "Creative Skills",
    icon: PenTool,
    theme: "peach",
    desc: "Develop content strategies, visual design skills, copywriting and short-form video marketing techniques.",
    tags: ["Canva", "Copywriting", "Reels"],
    modules: [
      {
        title: "Content Marketing Fundamentals",
        topics: [
          "Content Marketing Strategy",
          "Audience Research",
          "Brand Voice",
          "Content Planning",
          "Marketing Storytelling",
          "Content Distribution",
        ],
      },
      {
        title: "Copywriting",
        topics: [
          "Social Media Captions",
          "Advertising Copywriting",
          "Content Hooks",
          "Call-to-Action Writing",
          "Landing Page Copywriting",
          "Blog Writing",
          "Email Marketing Copy",
        ],
      },
      {
        title: "Graphic Design & Canva",
        topics: [
          "Canva Fundamentals",
          "Typography",
          "Color Theory",
          "Social Media Post Design",
          "Carousel Design",
          "Advertising Creatives",
          "Banner Design",
          "Thumbnail Design",
        ],
      },
      {
        title: "Video & Reels",
        topics: [
          "Short-Form Video Strategy",
          "Instagram Reels Creation",
          "CapCut Fundamentals",
          "Basic Video Editing",
          "Transitions and Text Effects",
          "Reel Cover Design",
          "Content Repurposing",
        ],
      },
      {
        title: "Creative Campaign Planning",
        topics: [
          "Creative Briefs",
          "Content Calendars",
          "Campaign Visuals",
          "Brand Guidelines",
          "Creative A/B Testing",
          "Content Performance Analysis",
        ],
      },
    ],
  },
  {
    id: "05",
    title: "Analytics & Performance",
    category: "Data & Insights",
    icon: BarChart3,
    theme: "mint",
    desc: "Understand marketing metrics, analytics platforms, tracking systems and performance reporting.",
    tags: ["GA4", "Tag Manager", "Reporting"],
    modules: [
      {
        title: "Marketing Analytics",
        topics: [
          "Introduction to Digital Analytics",
          "Marketing KPIs",
          "Website Traffic Sources",
          "Marketing Funnels",
          "Attribution Fundamentals",
          "Campaign Measurement",
        ],
      },
      {
        title: "Google Analytics 4",
        topics: [
          "GA4 Account Setup",
          "Users and Sessions",
          "Events and Key Events",
          "Traffic Acquisition Reports",
          "Engagement Reports",
          "Audience Analysis",
          "Conversion Analysis",
        ],
      },
      {
        title: "Google Tag Manager",
        topics: [
          "Introduction to GTM",
          "Tags, Triggers and Variables",
          "Event Tracking",
          "Conversion Tracking",
          "UTM Parameters",
          "Consent Fundamentals",
        ],
      },
      {
        title: "Reporting & Dashboards",
        topics: [
          "Looker Studio",
          "Dashboard Creation",
          "Google Sheets for Reporting",
          "Campaign Performance Analysis",
          "Marketing Report Presentation",
          "Data-Driven Recommendations",
        ],
      },
    ],
  },
  {
    id: "06",
    title: "AI & Marketing Automation",
    category: "Future Skills",
    icon: Bot,
    theme: "violet",
    desc: "Discover how artificial intelligence and marketing automation can support modern marketing workflows.",
    tags: ["AI Tools", "Automation", "ChatGPT"],
    modules: [
      {
        title: "AI Marketing Fundamentals",
        topics: [
          "Introduction to Artificial Intelligence",
          "AI in Digital Marketing",
          "Prompt Engineering",
          "Marketing Research with AI",
          "AI Limitations and Verification",
          "Practical AI Use Cases",
        ],
      },
      {
        title: "AI Content Creation",
        topics: [
          "AI Copywriting",
          "Social Media Content Generation",
          "AI Image Generation",
          "AI Video Workflows",
          "Creative Brainstorming",
          "AI-Assisted SEO Content",
        ],
      },
      {
        title: "Marketing Automation Tools",
        topics: [
          "Introduction to Automation",
          "Make Fundamentals",
          "Zapier Fundamentals",
          "n8n Introduction",
          "Workflow Mapping",
          "Automation Triggers and Actions",
        ],
      },
      {
        title: "Practical Automation",
        topics: [
          "Lead Notifications",
          "CRM Automation Concepts",
          "Email Automation",
          "Marketing Reporting Automation",
          "Content Workflow Automation",
        ],
      },
      {
        title: "Responsible AI",
        topics: [
          "AI Privacy Fundamentals",
          "Content Verification",
          "Data Protection Basics",
          "Human Review",
          "Responsible AI Workflows",
        ],
      },
    ],
  },
];

/* =========================================
   PREMIUM SYLLABUS POPUP
========================================= */

function SyllabusModal({ course, onClose }) {
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [onClose]);

  const totalTopics = course.modules.reduce(
    (total, module) => total + module.topics.length,
    0
  );

  return createPortal(
    <div
      className="bvs-syllabus-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="bvs-syllabus-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bvs-syllabus-title"
        aria-describedby="bvs-syllabus-description"
      >
        {/* POPUP HEADER */}

        <div className="bvs-modal-header">
          <div className="bvs-modal-header-text">
            <span className="bvs-modal-eyebrow">
              <span className="bvs-modal-eyebrow-line" />
              COMPLETE COURSE CURRICULUM
            </span>

            <h2 id="bvs-syllabus-title">
              {course.title}
            </h2>

            <p id="bvs-syllabus-description">
              Explore the complete learning modules and
              topics included in this course.
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="bvs-modal-close"
            aria-label="Close syllabus popup"
            onClick={onClose}
          >
            <X size={23} />
          </button>
        </div>

        {/* SCROLLABLE MODAL BODY */}

        <div className="bvs-modal-scroll">
          <div className="bvs-modal-summary">
            <div className="bvs-modal-stat">
              <Layers3 size={19} />

              <div>
                <strong>{course.modules.length}</strong>
                <span>Learning Modules</span>
              </div>
            </div>

            <div className="bvs-modal-stat">
              <BookOpen size={19} />

              <div>
                <strong>{totalTopics}</strong>
                <span>Learning Topics</span>
              </div>
            </div>

            <div className="bvs-modal-stat">
              <Sparkles size={19} />

              <div>
                <strong>Practical</strong>
                <span>Learning Focus</span>
              </div>
            </div>
          </div>

          {/* MODULES */}

          <div className="bvs-modal-modules">
            {course.modules.map((module, index) => (
              <article
                className="bvs-modal-module"
                key={module.title}
              >
                <div className="bvs-modal-module-heading">
                  <span>
                    MODULE {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{module.title}</h3>
                </div>

                <ul>
                  {module.topics.map((topic) => (
                    <li key={topic}>
                      <CheckCircle2 size={16} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* FIXED MODAL FOOTER */}

        <div className="bvs-modal-footer">
          <div>
            <strong>Interested in this course?</strong>
            <p>Take the next step with Bhvesa.</p>
          </div>

          <a
            href="#enquiry"
            className="bvs-modal-enquire"
            onClick={onClose}
          >
            Enquire Now
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* =========================================
   MAIN COURSES PAGE
========================================= */

export default function Courses() {
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = courses.filter((course) => {
    const searchableText = [
      course.title,
      course.category,
      course.desc,
      ...course.tags,
      ...course.modules.flatMap((module) => [
        module.title,
        ...module.topics,
      ]),
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(search.toLowerCase().trim());
  });

  return (
    <>
      <style>{`
        /* =================================
           COURSES PAGE BASE
        ================================= */

        .bvs-courses-page {
          background: #ffffff;
          color: #11223c;
        }

        .bvs-courses-container {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
        }

        .bvs-courses-page h1,
        .bvs-courses-page h2,
        .bvs-courses-page h3,
        .bvs-courses-page h4 {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        /* =================================
           HERO
        ================================= */

        .bvs-courses-hero {
          background: #0758be;
          color: #ffffff;
          padding: 105px 0 95px;
          position: relative;
          overflow: hidden;
        }

        .bvs-courses-hero::after {
          content: "";
          position: absolute;
          right: -180px;
          top: -220px;
          width: 620px;
          height: 620px;
          border: 1px solid #ffffff25;
          border-radius: 50%;
          box-shadow:
            0 0 0 85px #ffffff08,
            0 0 0 175px #ffffff05;
          pointer-events: none;
        }

        .bvs-courses-hero-content {
          position: relative;
          z-index: 2;
          max-width: 790px;
        }

        .bvs-courses-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 27px;
        }

        .bvs-courses-kicker::before {
          content: "";
          width: 27px;
          height: 2px;
          background: #ebae29;
        }

        .bvs-courses-hero h1 {
          font-size: clamp(44px, 5.5vw, 72px);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -3px;
        }

        .bvs-courses-hero h1 span {
          color: #f5ca69;
        }

        .bvs-courses-hero p {
          color: #dae9ff;
          font-size: 17px;
          line-height: 1.9;
          max-width: 610px;
          margin-top: 25px;
        }

        .bvs-courses-hero-info {
          display: flex;
          flex-wrap: wrap;
          gap: 27px;
          margin-top: 35px;
        }

        .bvs-courses-hero-info span {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 700;
        }

        /* =================================
           MAIN SECTION
        ================================= */

        .bvs-courses-section {
          padding: 105px 0;
        }

        .bvs-courses-intro {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 35px;
        }

        .bvs-courses-intro h2 {
          font-size: clamp(33px, 3.7vw, 48px);
          letter-spacing: -1.8px;
          font-weight: 800;
          margin-bottom: 17px;
        }

        .bvs-courses-intro p {
          font-size: 15px;
          line-height: 1.85;
          color: #68798e;
          max-width: 620px;
        }

        .bvs-courses-count {
          color: #0758be;
          font-size: 12px;
          font-weight: 800;
          white-space: nowrap;
        }

        /* SEARCH */

        .bvs-courses-search {
          display: flex;
          align-items: center;
          gap: 14px;
          max-width: 580px;
          height: 57px;
          background: #f9fbff;
          border: 1px solid #dce6f1;
          border-radius: 9px;
          padding: 0 19px;
          margin-bottom: 36px;
          color: #0758be;
        }

        .bvs-courses-search input {
          width: 100%;
          min-width: 0;
          background: transparent;
          border: 0;
          outline: none;
          font-size: 14px;
          color: #11223c;
        }

        /* =================================
           FIXED 3x2 GRID
        ================================= */

        .bvs-courses-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
          align-items: stretch;
        }

        .bvs-course-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 365px;
          padding: 30px;
          background: #ffffff;
          border: 1px solid #e3eaf3;
          border-radius: 16px;
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .bvs-course-card:hover {
          transform: translateY(-5px);
          border-color: #bcd2ef;
          box-shadow: 0 20px 45px #11223c12;
        }

        .bvs-course-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 25px;
        }

        .bvs-course-icon {
          display: grid;
          place-items: center;
          width: 64px;
          height: 64px;
          border-radius: 13px;
          color: #0758be;
          background: #eaf2ff;
        }

        .bvs-course-card-top > span {
          font-size: 12px;
          font-weight: 800;
          color: #a5b4c7;
        }

        .bvs-theme-gold .bvs-course-icon {
          background: #fff2d9;
          color: #a9760c;
        }

        .bvs-theme-sky .bvs-course-icon {
          background: #e3f7ff;
          color: #0586b4;
        }

        .bvs-theme-peach .bvs-course-icon {
          background: #fff0e8;
          color: #c96b4b;
        }

        .bvs-theme-mint .bvs-course-icon {
          background: #e7f7ed;
          color: #198f6b;
        }

        .bvs-theme-violet .bvs-course-icon {
          background: #f0ebff;
          color: #7256bf;
        }

        .bvs-course-category {
          color: #0758be;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .bvs-course-card h3 {
          font-size: 21px;
          line-height: 1.45;
          font-weight: 800;
          letter-spacing: -.5px;
          margin-bottom: 14px;
        }

        .bvs-course-description {
          color: #68798e;
          font-size: 13px;
          line-height: 1.85;
        }

        .bvs-course-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 20px 0;
        }

        .bvs-course-tags span {
          background: #f2f5f9;
          color: #65768b;
          font-size: 10px;
          padding: 7px 10px;
          border-radius: 5px;
          font-weight: 700;
        }

        .bvs-course-view {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          width: 100%;
          margin-top: auto;
          padding: 19px 0 0;
          border: 0;
          border-top: 1px solid #e9edf4;
          background: transparent;
          color: #0758be;
          font-size: 13px;
          font-weight: 800;
          text-align: left;
          cursor: pointer;
          transition: color .2s;
        }

        .bvs-course-view:hover {
          color: #04489e;
        }

        .bvs-course-view svg {
          transition: transform .25s;
        }

        .bvs-course-view:hover svg {
          transform: translate(3px, -3px);
        }

        /* EMPTY SEARCH */

        .bvs-courses-empty {
          text-align: center;
          padding: 60px 0;
          color: #69798e;
          font-size: 15px;
        }

        /* =================================
           BOTTOM CTA
        ================================= */

        .bvs-courses-extra {
          padding: 95px 0;
          background: #f6f9fd;
        }

        .bvs-courses-extra-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }

        .bvs-courses-extra h2 {
          font-size: clamp(32px, 3.6vw, 48px);
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -2px;
        }

        .bvs-courses-extra h2 span {
          color: #0758be;
        }

        .bvs-courses-extra p {
          font-size: 15px;
          color: #69798e;
          line-height: 1.85;
          margin-top: 20px;
          max-width: 600px;
        }

        .bvs-courses-extra a {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          background: #0758be;
          color: #ffffff;
          border-radius: 8px;
          padding: 16px 25px;
          font-size: 14px;
          font-weight: 800;
          transition: .25s;
        }

        .bvs-courses-extra a:hover {
          background: #04489e;
        }

        /* =================================
           POPUP BACKDROP
        ================================= */

        .bvs-syllabus-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(10, 22, 42, .74);
          backdrop-filter: blur(7px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: bvsOverlayIn .2s ease both;
        }

        @keyframes bvsOverlayIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* MODAL WINDOW */

        .bvs-syllabus-modal {
          width: min(100%, 980px);
          max-height: min(88dvh, 850px);
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 35px 100px #00000040;
          animation: bvsModalIn .3s ease both;
          font-family: "DM Sans", sans-serif;
        }

        @keyframes bvsModalIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* MODAL HEADER */

        .bvs-modal-header {
          padding: 30px 38px 26px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 25px;
          border-bottom: 1px solid #e5edf5;
          flex-shrink: 0;
        }

        .bvs-modal-header-text {
          flex: 1;
          min-width: 0;
        }

        .bvs-modal-eyebrow {
          color: #0758be;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }

        .bvs-modal-eyebrow-line {
          width: 23px;
          height: 2px;
          background: #ebae29;
        }

        .bvs-modal-header h2 {
          color: #11223c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(23px, 3vw, 31px);
          font-weight: 800;
          line-height: 1.3;
          letter-spacing: -1px;
        }

        .bvs-modal-header p {
          color: #75869b;
          font-size: 13px;
          line-height: 1.7;
          margin-top: 10px;
        }

        .bvs-modal-close {
          flex-shrink: 0;
          width: 43px;
          height: 43px;
          background: #f3f7fc;
          border: 1px solid #e1e8f1;
          border-radius: 10px;
          color: #11223c;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: .2s;
        }

        .bvs-modal-close:hover {
          background: #0758be;
          color: #ffffff;
          border-color: #0758be;
        }

        /* SCROLLABLE CONTENT */

        .bvs-modal-scroll {
          padding: 27px 38px 35px;
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          overscroll-behavior: contain;
        }

        .bvs-modal-scroll::-webkit-scrollbar {
          width: 7px;
        }

        .bvs-modal-scroll::-webkit-scrollbar-track {
          background: #f2f5fa;
        }

        .bvs-modal-scroll::-webkit-scrollbar-thumb {
          background: #c9d8ec;
          border-radius: 10px;
        }

        /* MODAL SUMMARY */

        .bvs-modal-summary {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 28px;
        }

        .bvs-modal-stat {
          display: flex;
          align-items: center;
          gap: 13px;
          background: #f0f6ff;
          padding: 13px 16px;
          border-radius: 10px;
          color: #0758be;
        }

        .bvs-modal-stat > svg {
          flex-shrink: 0;
        }

        .bvs-modal-stat strong {
          display: block;
          color: #11223c;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.3;
        }

        .bvs-modal-stat span {
          display: block;
          color: #6b7e98;
          font-size: 10px;
          margin-top: 4px;
        }

        /* MODULE CARDS */

        .bvs-modal-modules {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .bvs-modal-module {
          padding: 24px;
          background: #f8faff;
          border: 1px solid #e5edf6;
          border-radius: 12px;
          min-width: 0;
        }

        .bvs-modal-module-heading {
          margin-bottom: 19px;
        }

        .bvs-modal-module-heading > span {
          display: block;
          color: #0758be;
          font-size: 10px;
          letter-spacing: 1.2px;
          font-weight: 800;
          margin-bottom: 9px;
        }

        .bvs-modal-module h3 {
          color: #11223c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          font-weight: 800;
          line-height: 1.45;
        }

        .bvs-modal-module ul {
          display: grid;
          gap: 11px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .bvs-modal-module li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #64758b;
          font-size: 13px;
          line-height: 1.65;
        }

        .bvs-modal-module li svg {
          flex-shrink: 0;
          margin-top: 3px;
          color: #19a475;
        }

        /* MODAL FOOTER */

        .bvs-modal-footer {
          border-top: 1px solid #e5ebf3;
          background: #ffffff;
          padding: 20px 38px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-shrink: 0;
        }

        .bvs-modal-footer strong {
          display: block;
          color: #11223c;
          font-size: 13px;
          font-weight: 800;
        }

        .bvs-modal-footer p {
          color: #66778c;
          font-size: 12px;
          margin-top: 5px;
        }

        .bvs-modal-enquire {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          background: #0758be;
          color: #ffffff;
          padding: 15px 23px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 800;
          white-space: nowrap;
          transition: .25s;
        }

        .bvs-modal-enquire:hover {
          background: #04489e;
        }

        /* =================================
           RESPONSIVE - TABLET
        ================================= */

        @media (max-width: 1000px) {
          .bvs-courses-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* =================================
           RESPONSIVE - MOBILE
        ================================= */

        @media (max-width: 700px) {
          .bvs-courses-container {
            width: calc(100% - 36px);
          }

          .bvs-courses-hero {
            padding: 75px 0;
          }

          .bvs-courses-hero h1 {
            font-size: 42px;
            letter-spacing: -2px;
          }

          .bvs-courses-hero p {
            font-size: 15px;
          }

          .bvs-courses-section {
            padding: 65px 0;
          }

          .bvs-courses-intro {
            flex-direction: column;
            align-items: flex-start;
          }

          .bvs-courses-intro h2 {
            font-size: 32px;
          }

          .bvs-courses-grid {
            grid-template-columns: 1fr;
          }

          .bvs-course-card {
            min-height: 0;
            padding: 26px;
          }

          .bvs-courses-extra {
            padding: 65px 0;
          }

          .bvs-courses-extra-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .bvs-courses-extra h2 {
            font-size: 32px;
          }

          /* MOBILE MODAL */

          .bvs-syllabus-overlay {
            padding: 10px;
          }

          .bvs-syllabus-modal {
            width: 100%;
            max-height: 94dvh;
            border-radius: 15px;
          }

          .bvs-modal-header {
            padding: 22px 19px;
            gap: 12px;
          }

          .bvs-modal-header h2 {
            font-size: 22px;
          }

          .bvs-modal-header p {
            font-size: 12px;
          }

          .bvs-modal-close {
            width: 38px;
            height: 38px;
          }

          .bvs-modal-scroll {
            padding: 21px 17px;
          }

          .bvs-modal-summary {
            gap: 8px;
          }

          .bvs-modal-stat {
            padding: 11px;
            gap: 9px;
          }

          .bvs-modal-stat strong {
            font-size: 13px;
          }

          .bvs-modal-modules {
            grid-template-columns: 1fr;
          }

          .bvs-modal-module {
            padding: 21px;
          }

          .bvs-modal-footer {
            padding: 16px 19px;
            flex-direction: column;
            align-items: stretch;
            gap: 14px;
          }

          .bvs-modal-enquire {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bvs-syllabus-overlay,
          .bvs-syllabus-modal {
            animation: none;
          }
        }
      `}</style>

      <main className="bvs-courses-page">
        {/* =================================
            HERO SECTION
        ================================= */}

        <section className="bvs-courses-hero">
          <div className="bvs-courses-container">
            <div className="bvs-courses-hero-content" data-aos="fade-up">
              <span className="bvs-courses-kicker">
                DISCOVER YOUR NEXT SKILL
              </span>

              <h1>
                One World.
                <br />
                <span>Endless Possibilities.</span>
              </h1>

              <p>
                Explore the core disciplines of digital marketing,
                from search and advertising to creativity,
                analytics and artificial intelligence.
              </p>

              <div className="bvs-courses-hero-info">
                <span>
                  <BookOpen size={19} />
                  6 Core Courses
                </span>

                <span>
                  <Sparkles size={19} />
                  Practical Learning Focus
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================
            COURSE LISTING
        ================================= */}

        <section className="bvs-courses-section">
          <div className="bvs-courses-container">
            <div className="bvs-courses-intro">
              <div>
                <h2>Explore What You Can Learn.</h2>

                <p>
                  Discover all six courses in one place.
                  Click View Full Syllabus to explore
                  the complete learning modules and topics.
                </p>
              </div>

              <span className="bvs-courses-count">
                {filteredCourses.length} COURSES
              </span>
            </div>

            {/* SEARCH BAR */}

            <div className="bvs-courses-search">
              <Search size={20} />

              <input
                type="search"
                aria-label="Search courses"
                placeholder="Search SEO, Google Ads, Canva, AI..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />
            </div>

            {/* 3 x 2 COURSE GRID */}

            <div className="bvs-courses-grid">
              {filteredCourses.map((course) => {
                const Icon = course.icon;

                return (
                  <article
                    key={course.id}
                    className={`bvs-course-card bvs-theme-${course.theme}`}
                  >
                    <div className="bvs-course-card-top">
                      <div className="bvs-course-icon">
                        <Icon size={29} />
                      </div>

                      <span>{course.id}</span>
                    </div>

                    <span className="bvs-course-category">
                      {course.category}
                    </span>

                    <h3>{course.title}</h3>

                    <p className="bvs-course-description">
                      {course.desc}
                    </p>

                    <div className="bvs-course-tags">
                      {course.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="bvs-course-view"
                      onClick={() => setSelectedCourse(course)}
                      aria-label={`View full syllabus for ${course.title}`}
                    >
                      View Full Syllabus
                      <ArrowUpRight size={20} />
                    </button>
                  </article>
                );
              })}
            </div>

            {filteredCourses.length === 0 && (
              <div className="bvs-courses-empty">
                No matching courses found. Try another keyword.
              </div>
            )}
          </div>
        </section>

        {/* =================================
            BATCHES CTA
        ================================= */}

        <section className="bvs-courses-extra">
          <div className="bvs-courses-container bvs-courses-extra-inner">
            <div>
              <h2>
                Skills for Today.
                <br />
                <span>Possibilities for Tomorrow.</span>
              </h2>

              <p>
                Find a class schedule that works for you
                and take the next step in your learning journey.
              </p>
            </div>

            <Link to="/batches">
              Explore Batches
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* COMMON ENQUIRY FORM */}

        <EnquiryForm
          title="Discover the right course for you."
          subtitle="Tell us which digital marketing skill interests you and share your questions."
        />
      </main>

      {/* =================================
          SYLLABUS MODAL
          RENDERED OUTSIDE MAIN VIA PORTAL
      ================================= */}

      {selectedCourse && (
        <SyllabusModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </>
  );
}
