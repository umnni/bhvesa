
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import {
  ArrowLeft, ArrowRight, ArrowUpRight,
  ChevronDown, CheckCircle2, BookOpen,
  Search, Target, Megaphone, PenTool,
  BarChart3, Bot, Layers3, GraduationCap
} from "lucide-react";
import { courses } from "../data/courses";
import EnquiryForm from "../components/EnquiryForm";

const iconMap = {
  Search, Target, Megaphone, PenTool, BarChart3, Bot
};

export default function CourseDetails() {
  const { slug } = useParams();
  const [activeModule, setActiveModule] = useState(0);

  const course = courses.find(c => c.slug === slug);

  useEffect(() => {
    setActiveModule(0);
  }, [slug]);

  if (!course) {
    return (
      <main className="bh-notfound container">
        <h1>Course Not Found</h1>
        <p>The requested course could not be found.</p>
        <Link to="/courses" className="bh-primary">
          Explore Courses <ArrowRight size={18} />
        </Link>
      </main>
    );
  }

  const Icon = iconMap[course.icon] || BookOpen;

  const related = courses
    .filter(c => c.slug !== course.slug)
    .slice(0, 3);

  return (
    <main className="bh-inner-page">

      <section className={`bh-detail-hero bh-color-${course.color}`}>
        <div className="container bh-detail-hero-grid">
          <div data-aos="fade-right">
            <Link to="/courses" className="bh-back-link">
              <ArrowLeft size={17} /> All Courses
            </Link>

            <span className="bh-kicker">{course.category}</span>

            <h1>{course.title}</h1>
            <p>{course.overview}</p>

            <div className="bh-detail-tags">
              {course.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <a href="#enquiry" className="bh-primary">
              Enquire About This Course <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="bh-detail-visual" data-aos="zoom-in">
            <div className="bh-detail-ring" />
            <div className="bh-detail-main-icon">
              <Icon size={88} strokeWidth={1.4} />
            </div>
            <span className="bh-detail-floating bh-detail-floating-one">
              <BookOpen size={19} /> LEARN
            </span>
            <span className="bh-detail-floating bh-detail-floating-two">
              <GraduationCap size={19} /> PRACTICE
            </span>
          </div>
        </div>
      </section>

      <section className="bh-section">
        <div className="container bh-detail-content">
          <div>
            <span className="bh-kicker">COURSE CURRICULUM</span>
            <h2>
              What you'll <em>explore.</em>
            </h2>
            <p>
              Navigate through the course modules and discover
              the subjects included in this proposed syllabus.
            </p>

            <div className="bh-syllabus-meta">
              <Layers3 size={22} />
              <span>{course.modules.length} Learning Modules</span>
            </div>
          </div>

          <div className="bh-syllabus-list">
            {course.modules.map((module, index) => (
              <article
                className={`bh-syllabus-item ${
                  activeModule === index ? "active" : ""
                }`}
                key={module.title}
              >
                <button
                  type="button"
                  aria-expanded={activeModule === index}
                  onClick={() =>
                    setActiveModule(activeModule === index ? -1 : index)
                  }
                >
                  <span>0{index + 1}</span>
                  <strong>{module.title}</strong>
                  <ChevronDown size={20} />
                </button>

                {activeModule === index && (
                  <div className="bh-syllabus-body">
                    {module.topics.map((topic) => (
                      <div key={topic}>
                        <CheckCircle2 size={17} />
                        {topic}
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bh-section bh-soft-bg">
        <div className="container bh-outcomes-grid">
          <div>
            <span className="bh-kicker">LEARNING OUTCOMES</span>
            <h2>Skills worth building.</h2>
            <p>
              Here are some of the practical abilities
              this course aims to help learners develop.
            </p>

            <div className="bh-outcome-list">
              {course.outcomes.map((outcome) => (
                <div key={outcome}>
                  <CheckCircle2 size={20} />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bh-tools-panel">
            <span className="bh-kicker">TOOLS & PLATFORMS</span>
            <h3>Explore Industry Tools</h3>
            <p>
              Get familiar with the platforms and tools
              relevant to this subject.
            </p>

            <div className="bh-tools-list">
              {course.tools.map((tool) => (
                <div key={tool}>
                  <span><CheckCircle2 size={17} /></span>
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bh-section">
        <div className="container">
          <div className="bh-catalog-heading">
            <div>
              <span className="bh-kicker">KEEP EXPLORING</span>
              <h2>You might also like.</h2>
            </div>
            <Link to="/courses" className="bh-text-link">
              View All <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="bh-related-grid">
            {related.map((item) => (
              <Link key={item.slug} to={`/courses/${item.slug}`}>
                <span>0{item.id}</span>
                <h3>{item.title}</h3>
                <ArrowUpRight size={21} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EnquiryForm
        key={course.slug}
        selectedCourse={course.title}
        heading={`Ready to explore ${course.title}?`}
      />
    </main>
  );
}
