
import { Link } from "react-router";
import {
  ArrowUpRight, ArrowRight, GraduationCap,
  BookOpen, Target, Lightbulb, TrendingUp,
  Sparkles, CheckCircle2, Globe2
} from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";

const principles = [
  {
    icon: BookOpen,
    title: "Knowledge First",
    text: "Understand the concepts and strategies that make digital marketing work."
  },
  {
    icon: Target,
    title: "Practical Thinking",
    text: "Connect what you learn with real marketing situations and applications."
  },
  {
    icon: Lightbulb,
    title: "Creative Exploration",
    text: "Explore new approaches, experiment with ideas and build creative confidence."
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    text: "Develop skills and habits that help you keep learning as technology evolves."
  }
];

export default function About() {
  return (
    <>
      <style>{`
        .bvs-about {
          background: white;
          color: #11223c;
        }

        .bvs-about-container {
          max-width: 1240px;
          margin: auto;
          padding: 0 24px;
        }

        .bvs-about-section {
          padding: 105px 0;
        }

        .bvs-about-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #0758be;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 25px;
        }

        .bvs-about-kicker::before {
          content: "";
          width: 25px;
          height: 2px;
          background: #ebae29;
        }

        .bvs-about h1,
        .bvs-about h2,
        .bvs-about h3 {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .bvs-about h1 {
          font-size: clamp(44px, 5.3vw, 71px);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -3.5px;
        }

        .bvs-about h2 {
          font-size: clamp(34px, 3.7vw, 49px);
          font-weight: 800;
          line-height: 1.22;
          letter-spacing: -2px;
        }

        .bvs-about h1 em,
        .bvs-about h2 em {
          font-style: normal;
          color: #0758be;
        }

        .bvs-about p {
          color: #69798e;
          line-height: 1.9;
          font-size: 16px;
        }

        .bvs-about-hero {
          padding: 100px 0 110px;
          background:
            radial-gradient(circle at 80% 50%, #eaf3ff, transparent 35%),
            #fbfcff;
          overflow: hidden;
        }

        .bvs-about-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 65px;
        }

        .bvs-about-hero h1 {
          margin-bottom: 26px;
        }

        .bvs-about-hero p {
          max-width: 560px;
          margin-bottom: 33px;
        }

        .bvs-about-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #0758be;
          color: white;
          font-size: 14px;
          font-weight: 800;
          padding: 16px 25px;
          border-radius: 8px;
          transition: .3s;
        }

        .bvs-about-btn:hover {
          background: #04489e;
          transform: translateY(-2px);
        }

        .bvs-about-art {
          height: 450px;
          position: relative;
          display: grid;
          place-items: center;
        }

        .bvs-about-circle {
          position: absolute;
          width: 405px;
          height: 405px;
          border-radius: 50%;
          border: 1px solid #bcd4f7;
        }

        .bvs-about-circle.two {
          width: 322px;
          height: 322px;
          border-style: dashed;
        }

        .bvs-about-center-art {
          width: 255px;
          height: 255px;
          border-radius: 50%;
          background: #0758be;
          color: white;
          box-shadow: 0 25px 70px #0758be36;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 18px;
          position: relative;
          z-index: 1;
        }

        .bvs-about-center-art strong {
          font-size: 18px;
        }

        .bvs-about-center-art small {
          font-size: 10px;
          letter-spacing: 1.5px;
        }

        .bvs-about-float {
          position: absolute;
          z-index: 2;
          background: white;
          padding: 15px 18px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 15px 45px #11223c20;
          font-size: 12px;
          font-weight: 800;
        }

        .bvs-about-float svg {
          color: #0758be;
        }

        .bvs-about-float.one { top: 25px; left: 10px; }
        .bvs-about-float.two { right: 0; top: 165px; }
        .bvs-about-float.three { bottom: 15px; left: 35px; }

        .bvs-about-story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 105px;
        }

        .bvs-about-story-text p + p {
          margin-top: 22px;
        }

        .bvs-about-highlight {
          margin-top: 32px;
          padding: 25px;
          border-left: 3px solid #ebae29;
          background: #f1f6ff;
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 16px;
          font-weight: 800;
          border-radius: 8px;
        }

        .bvs-about-highlight svg {
          color: #0758be;
          flex-shrink: 0;
        }

        .bvs-about-values {
          background: #f6f9fd;
        }

        .bvs-about-heading {
          text-align: center;
          max-width: 740px;
          margin: 0 auto 55px;
        }

        .bvs-about-heading p {
          margin-top: 19px;
        }

        .bvs-about-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .bvs-about-value {
          border: 1px solid #e4eaf3;
          background: white;
          padding: 31px 25px;
          border-radius: 13px;
          transition: .3s;
        }

        .bvs-about-value:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px #11223c0c;
        }

        .bvs-about-value > span {
          color: #abb9ca;
          font-size: 12px;
          font-weight: 800;
        }

        .bvs-about-value-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: #eaf2ff;
          color: #0758be;
          display: grid;
          place-items: center;
          margin: 29px 0;
        }

        .bvs-about-value h3 {
          font-size: 19px;
          margin-bottom: 13px;
        }

        .bvs-about-value p {
          font-size: 13px;
        }

        .bvs-about-journey {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 100px;
          align-items: center;
        }

        .bvs-about-journey > div:first-child > p {
          margin: 22px 0;
        }

        .bvs-about-step {
          display: grid;
          grid-template-columns: 45px 1fr 30px;
          align-items: center;
          gap: 20px;
          border-bottom: 1px solid #e5ebf3;
          padding: 24px 0;
        }

        .bvs-about-step:first-child {
          border-top: 1px solid #e5ebf3;
        }

        .bvs-about-step > span {
          font-size: 13px;
          font-weight: 800;
          color: #0758be;
        }

        .bvs-about-step h3 {
          font-size: 19px;
          margin-bottom: 7px;
        }

        .bvs-about-step p {
          font-size: 13px;
        }

        .bvs-about-step > svg {
          color: #99abc3;
        }

        .bvs-about-banner {
          margin-bottom: 85px;
        }

        .bvs-about-banner-inner {
          padding: 60px;
          border-radius: 16px;
          background: #0758be;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          color: white;
        }

        .bvs-about-banner h2 {
          font-size: 34px;
          color: white;
        }

        .bvs-about-banner span {
          font-size: 11px;
          letter-spacing: 1.5px;
          font-weight: 800;
          color: #d6e7ff;
          display: block;
          margin-bottom: 16px;
        }

        .bvs-about-banner a {
          padding: 16px 24px;
          border-radius: 8px;
          background: white;
          color: #0758be;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          white-space: nowrap;
        }

        @media(max-width:900px) {
          .bvs-about-hero-grid,
          .bvs-about-story,
          .bvs-about-journey {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .bvs-about-values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(max-width:600px) {
          .bvs-about-container { padding: 0 18px; }
          .bvs-about-section { padding: 65px 0; }
          .bvs-about-hero { padding: 65px 0; }

          .bvs-about h1 {
            font-size: 41px;
            letter-spacing: -2px;
          }

          .bvs-about h2 {
            font-size: 32px;
            letter-spacing: -1.3px;
          }

          .bvs-about p { font-size: 14px; }

          .bvs-about-art { height: 315px; }
          .bvs-about-circle { width: 275px; height: 275px; }
          .bvs-about-circle.two { width: 220px; height: 220px; }
          .bvs-about-center-art { width: 175px; height: 175px; }
          .bvs-about-center-art svg { width: 48px; }
          .bvs-about-center-art strong { font-size: 12px; }
          .bvs-about-center-art small { font-size: 7px; }

          .bvs-about-float {
            padding: 10px;
            font-size: 9px;
          }

          .bvs-about-float svg { width: 16px; }
          .bvs-about-float.one { top: 0; left: 0; }
          .bvs-about-float.two { top: 135px; }
          .bvs-about-float.three { bottom: 0; left: 5px; }

          .bvs-about-values-grid { grid-template-columns: 1fr; }
          .bvs-about-value { padding: 27px; }

          .bvs-about-banner-inner {
            padding: 35px 25px;
            flex-direction: column;
            align-items: flex-start;
          }

          .bvs-about-banner h2 { font-size: 28px; }
          .bvs-about-banner { margin-bottom: 65px; }
        }
      `}</style>

      <main className="bvs-about">
        <section className="bvs-about-hero">
          <div className="bvs-about-container bvs-about-hero-grid">
            <div data-aos="fade-right">
              <span className="bvs-about-kicker">
                ABOUT BHVESA
              </span>

              <h1>
                Great things begin with a{" "}
                <em>curious mind.</em>
              </h1>

              <p>
                At Bhvesa, we believe learning should inspire
                creativity, build understanding and open doors
                to new possibilities in the digital world.
              </p>

              <Link to="/courses" className="bvs-about-btn">
                Explore Our Courses <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="bvs-about-art" data-aos="zoom-in">
              <div className="bvs-about-circle" />
              <div className="bvs-about-circle two" />

              <div className="bvs-about-center-art">
                <GraduationCap size={75} />
                <strong>Learn. Create. Grow.</strong>
                <small>BASICS TO BRILLIANCE</small>
              </div>

              <div className="bvs-about-float one">
                <Lightbulb size={20} /> DISCOVER
              </div>

              <div className="bvs-about-float two">
                <Target size={20} /> PRACTICE
              </div>

              <div className="bvs-about-float three">
                <TrendingUp size={20} /> GROW
              </div>
            </div>
          </div>
        </section>

        <section className="bvs-about-section">
          <div className="bvs-about-container bvs-about-story">
            <div data-aos="fade-right">
              <span className="bvs-about-kicker">
                OUR PHILOSOPHY
              </span>

              <h2>
                From understanding the basics to{" "}
                <em>discovering possibilities.</em>
              </h2>
            </div>

            <div className="bvs-about-story-text" data-aos="fade-left">
              <p>
                Digital marketing brings together strategy,
                creativity, communication, technology and data.
                Understanding how these areas work together
                is what makes learning meaningful.
              </p>

              <p>
                Bhvesa's learning vision is to make these subjects
                approachable through structured concepts,
                industry-relevant tools, practical exercises
                and project-oriented understanding.
              </p>

              <div className="bvs-about-highlight">
                <Sparkles size={27} />
                Basics to Brilliance — one skill at a time.
              </div>
            </div>
          </div>
        </section>

        <section className="bvs-about-section bvs-about-values">
          <div className="bvs-about-container">
            <div className="bvs-about-heading">
              <span className="bvs-about-kicker">
                WHAT DEFINES US
              </span>

              <h2>
                A thoughtful approach to{" "}
                <em>learning.</em>
              </h2>

              <p>
                Four essential principles that guide
                the Bhvesa learning experience.
              </p>
            </div>

            <div className="bvs-about-values-grid">
              {principles.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    className="bvs-about-value"
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 70}
                  >
                    <span>0{index + 1}</span>

                    <div className="bvs-about-value-icon">
                      <Icon size={28} />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bvs-about-section">
          <div className="bvs-about-container bvs-about-journey">
            <div data-aos="fade-right">
              <span className="bvs-about-kicker">
                THE LEARNING JOURNEY
              </span>

              <h2>
                Every skill starts with{" "}
                <em>one step.</em>
              </h2>

              <p>
                A learning path from understanding the
                fundamentals to applying your knowledge
                through practical projects.
              </p>

              <Link to="/batches" className="bvs-about-btn">
                Explore Batches <ArrowRight size={18} />
              </Link>
            </div>

            <div data-aos="fade-left">
              {[
                ["01", "Discover", "Explore new ideas.", Lightbulb],
                ["02", "Understand", "Learn essential concepts.", BookOpen],
                ["03", "Practice", "Apply your knowledge.", Globe2],
                ["04", "Grow", "Develop your capabilities.", TrendingUp]
              ].map(([num, title, text, Icon]) => (
                <div className="bvs-about-step" key={num}>
                  <span>{num}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <Icon size={23} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bvs-about-banner">
          <div className="bvs-about-container">
            <div className="bvs-about-banner-inner">
              <div>
                <span>YOUR FUTURE STARTS HERE</span>
                <h2>Curiosity today. Possibilities tomorrow.</h2>
              </div>

              <Link to="/courses">
                View Courses <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        <EnquiryForm
          title="The next chapter begins with you."
          subtitle="Have questions about our training programs? Get in touch with Bhvesa."
        />
      </main>
    </>
  );
}
