
import { Link } from "react-router";
import {
  ArrowUpRight, ArrowRight, MessagesSquare,
  BookOpen, CalendarDays, Sparkles,
  Clock3, GraduationCap
} from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";

const options = [
  {
    icon: BookOpen,
    title: "Explore Our Courses",
    desc: "Discover our digital marketing programs, modules and skills.",
    link: "/courses",
    button: "View Courses"
  },
  {
    icon: CalendarDays,
    title: "Find Your Batch",
    desc: "Compare weekend, evening and regular class schedules.",
    link: "/batches",
    button: "Explore Batches"
  },
  {
    icon: MessagesSquare,
    title: "General Enquiry",
    desc: "Have a different question? Share it with us.",
    link: "#enquiry",
    button: "Send an Enquiry"
  }
];

export default function Contact() {
  return (
    <>
      <style>{`
        .bvs-contact {
          background: #fff;
          color: #11223c;
        }

        .bvs-contact-container {
          max-width: 1240px;
          margin: auto;
          padding: 0 24px;
        }

        .bvs-contact h1,
        .bvs-contact h2,
        .bvs-contact h3 {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .bvs-contact-kicker {
          color: #0758be;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 25px;
        }

        .bvs-contact-kicker::before {
          content: "";
          width: 25px;
          height: 2px;
          background: #ebae29;
        }

        .bvs-contact-hero {
          background:
            radial-gradient(circle at 85% 45%, #e5f1ff, transparent 39%),
            #fbfcff;
          padding: 110px 0;
          overflow: hidden;
        }

        .bvs-contact-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 80px;
        }

        .bvs-contact-hero h1 {
          font-size: clamp(42px, 5vw, 67px);
          font-weight: 800;
          line-height: 1.17;
          letter-spacing: -3px;
          max-width: 690px;
        }

        .bvs-contact-hero h1 span {
          color: #0758be;
        }

        .bvs-contact-hero p {
          color: #6b7b91;
          font-size: 17px;
          line-height: 1.9;
          margin: 25px 0 33px;
          max-width: 550px;
        }

        .bvs-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #0758be;
          color: white;
          padding: 16px 25px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 800;
          transition: .3s;
        }

        .bvs-contact-btn:hover {
          background: #04489e;
          transform: translateY(-2px);
        }

        .bvs-contact-art {
          position: relative;
          height: 420px;
          display: grid;
          place-items: center;
        }

        .bvs-contact-circle {
          width: 290px;
          height: 290px;
          border-radius: 50%;
          background: #0758be;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          gap: 22px;
          box-shadow: 0 27px 65px #0758be33;
        }

        .bvs-contact-circle strong {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .bvs-contact-message {
          position: absolute;
          background: white;
          padding: 17px 21px;
          display: flex;
          gap: 10px;
          align-items: center;
          border-radius: 12px;
          box-shadow: 0 17px 45px #11223c1c;
          font-size: 13px;
          font-weight: 800;
        }

        .bvs-contact-message.one {
          top: 26px;
          left: 0;
        }

        .bvs-contact-message.two {
          bottom: 25px;
          right: 0;
        }

        .bvs-contact-message svg {
          color: #ebae29;
        }

        .bvs-contact-options-section {
          padding: 105px 0;
        }

        .bvs-contact-heading {
          max-width: 720px;
          margin: 0 auto 55px;
          text-align: center;
        }

        .bvs-contact-heading h2 {
          font-size: clamp(33px, 3.6vw, 48px);
          letter-spacing: -2px;
          font-weight: 800;
        }

        .bvs-contact-heading p {
          font-size: 15px;
          color: #69798e;
          line-height: 1.8;
          margin-top: 18px;
        }

        .bvs-contact-options {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 24px;
        }

        .bvs-contact-option {
          padding: 35px 30px;
          border: 1px solid #e3eaf3;
          border-radius: 14px;
          background: white;
          transition: .3s;
        }

        .bvs-contact-option:hover {
          transform: translateY(-5px);
          border-color: #0758be;
          box-shadow: 0 16px 40px #11223c0b;
        }

        .bvs-contact-option-icon {
          height: 62px;
          width: 62px;
          border-radius: 12px;
          background: #eaf2ff;
          color: #0758be;
          display: grid;
          place-items: center;
          margin-bottom: 29px;
        }

        .bvs-contact-option h3 {
          font-size: 20px;
          margin-bottom: 15px;
        }

        .bvs-contact-option p {
          color: #69798e;
          font-size: 13px;
          line-height: 1.9;
          min-height: 78px;
        }

        .bvs-contact-option > a {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #0758be;
          font-size: 13px;
          font-weight: 800;
          margin-top: 23px;
        }

        .bvs-contact-info {
          background: #f5f8fd;
          padding: 100px 0;
        }

        .bvs-contact-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 95px;
          align-items: center;
        }

        .bvs-contact-info h2 {
          font-size: clamp(32px, 3.5vw, 48px);
          font-weight: 800;
          letter-spacing: -2px;
        }

        .bvs-contact-info h2 span {
          color: #0758be;
        }

        .bvs-contact-info p {
          color: #69798e;
          line-height: 1.9;
          font-size: 15px;
          margin-top: 22px;
        }

        .bvs-contact-info-card {
          background: white;
          padding: 42px;
          border: 1px solid #e3eaf3;
          border-radius: 14px;
        }

        .bvs-contact-info-card > svg {
          color: #0758be;
        }

        .bvs-contact-info-card h3 {
          font-size: 23px;
          margin: 25px 0 12px;
        }

        .bvs-contact-info-card a {
          color: #0758be;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 800;
          margin-top: 25px;
        }

        @media(max-width:900px) {
          .bvs-contact-hero-grid,
          .bvs-contact-info-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .bvs-contact-options {
            grid-template-columns: repeat(2,1fr);
          }

          .bvs-contact-option:last-child {
            grid-column: span 2;
          }
        }

        @media(max-width:600px) {
          .bvs-contact-container { padding: 0 18px; }
          .bvs-contact-hero { padding: 65px 0; }
          .bvs-contact-hero h1 { font-size: 40px; letter-spacing: -2px; }
          .bvs-contact-hero p { font-size: 15px; }
          .bvs-contact-art { height: 305px; }
          .bvs-contact-circle { width: 205px; height: 205px; }
          .bvs-contact-circle svg { width: 52px; }
          .bvs-contact-circle strong { font-size: 9px; }
          .bvs-contact-message { padding: 12px; font-size: 10px; }
          .bvs-contact-message.one { top: 4px; }
          .bvs-contact-message.two { bottom: 5px; }
          .bvs-contact-options-section, .bvs-contact-info { padding: 65px 0; }
          .bvs-contact-heading h2, .bvs-contact-info h2 { font-size: 32px; }
          .bvs-contact-options { grid-template-columns: 1fr; }
          .bvs-contact-option:last-child { grid-column: auto; }
          .bvs-contact-option p { min-height: 0; }
          .bvs-contact-info-card { padding: 29px; }
        }
      `}</style>

      <main className="bvs-contact">
        <section className="bvs-contact-hero">
          <div className="bvs-contact-container bvs-contact-hero-grid">
            <div data-aos="fade-right">
              <span className="bvs-contact-kicker">
                LET'S CONNECT
              </span>

              <h1>
                Every Great Journey Begins with a{" "}
                <span>Conversation.</span>
              </h1>

              <p>
                Curious about digital marketing? Want to know
                more about courses, timings or learning options?
                We're here to help you explore what's next.
              </p>

              <a href="#enquiry" className="bvs-contact-btn">
                Send an Enquiry <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="bvs-contact-art" data-aos="zoom-in">
              <div className="bvs-contact-circle">
                <MessagesSquare size={80} />
                <strong>LET'S TALK LEARNING</strong>
              </div>

              <div className="bvs-contact-message one">
                Hello, Bhvesa! <Sparkles size={17} />
              </div>

              <div className="bvs-contact-message two">
                Ready when you are.
              </div>
            </div>
          </div>
        </section>

        <section className="bvs-contact-options-section">
          <div className="bvs-contact-container">
            <div className="bvs-contact-heading">
              <span className="bvs-contact-kicker">
                HOW CAN WE HELP?
              </span>

              <h2>Let's Find What You're Looking For.</h2>

              <p>
                Select the topic you're interested in
                and discover the next step.
              </p>
            </div>

            <div className="bvs-contact-options">
              {options.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    className="bvs-contact-option"
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 70}
                  >
                    <div className="bvs-contact-option-icon">
                      <Icon size={29} />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>

                    {item.link.startsWith("#") ? (
                      <a href={item.link}>
                        {item.button} <ArrowUpRight size={18} />
                      </a>
                    ) : (
                      <Link to={item.link}>
                        {item.button} <ArrowUpRight size={18} />
                      </Link>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bvs-contact-info">
          <div className="bvs-contact-container bvs-contact-info-grid">
            <div>
              <span className="bvs-contact-kicker">
                GOOD TO KNOW
              </span>

              <h2>
                We're Here for{" "}
                <span>Your Questions.</span>
              </h2>

              <p>
                Tell us about your learning interests,
                questions or preferred schedule.
                Official phone number, email and institute
                address can be added once confirmed.
              </p>
            </div>

            <div className="bvs-contact-info-card">
              <Clock3 size={31} />
              <h3>Looking for Batch Timings?</h3>

              <p>
                Explore our weekend, evening and regular
                batch options to find the learning schedule
                that suits you.
              </p>

              <Link to="/batches">
                Explore Batch Timings <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <EnquiryForm
          title="Let's talk about your learning goals."
          subtitle="Submit your course enquiry or ask us anything about Bhvesa."
        />
      </main>
    </>
  );
}
