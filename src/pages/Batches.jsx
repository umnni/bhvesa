
import { Link } from "react-router";
import {
  CalendarDays, Clock3, Check, ArrowUpRight,
  ArrowRight, Info, BookOpen, Sun, Moon
} from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";

const batches = [
  {
    id: "01",
    title: "Weekend Batch",
    label: "WEEKEND LEARNING",
    days: "Saturday & Sunday",
    time: "Timings to be confirmed",
    icon: CalendarDays,
    description: "A flexible option for students and professionals with busy weekdays.",
    points: ["Weekend learning", "Structured modules", "Practical assignments"]
  },
  {
    id: "02",
    title: "Evening Batch",
    label: "EVENING LEARNING",
    days: "Class days to be confirmed",
    time: "6:00 PM – 8:00 PM",
    icon: Moon,
    description: "Designed for learners who prefer to develop new skills during the evening.",
    points: ["Evening sessions", "Guided learning", "Practical activities"]
  },
  {
    id: "03",
    title: "Regular Batch",
    label: "WEEKDAY LEARNING",
    days: "Monday – Friday",
    time: "3–6 PM / 6–9 PM",
    icon: Sun,
    description: "Regular weekday learning with two separate timing options to choose from.",
    points: ["Monday to Friday", "Two time slots", "Consistent practice"]
  }
];

export default function Batches() {
  return (
    <>
      <style>{`
        .bvs-batches {
          color: #11223c;
          background: white;
        }

        .bvs-batches-container {
          max-width: 1240px;
          padding: 0 24px;
          margin: auto;
        }

        .bvs-batches h1,
        .bvs-batches h2,
        .bvs-batches h3 {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .bvs-batches-kicker {
          color: #0758be;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          display: inline-flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 23px;
        }

        .bvs-batches-kicker::before {
          content: "";
          width: 25px;
          height: 2px;
          background: #ebae29;
        }

        .bvs-batches-hero {
          background: #f5f8fd;
          padding: 105px 0 0;
          text-align: center;
        }

        .bvs-batches-hero h1 {
          font-size: clamp(44px, 5.5vw, 72px);
          line-height: 1.14;
          letter-spacing: -3px;
          font-weight: 800;
        }

        .bvs-batches-hero h1 span {
          color: #0758be;
        }

        .bvs-batches-hero p {
          max-width: 630px;
          margin: 25px auto 60px;
          color: #6a7a8f;
          line-height: 1.9;
          font-size: 16px;
        }

        .bvs-batches-hero-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid #dfe7f1;
          padding: 24px 0;
          gap: 20px;
        }

        .bvs-batches-hero-strip span {
          color: #0758be;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.2px;
        }

        .bvs-batches-section {
          padding: 105px 0;
        }

        .bvs-batches-heading {
          max-width: 720px;
          text-align: center;
          margin: 0 auto 55px;
        }

        .bvs-batches-heading h2,
        .bvs-batches-comparison h2 {
          font-size: clamp(33px, 3.5vw, 48px);
          letter-spacing: -2px;
          font-weight: 800;
        }

        .bvs-batches-heading p,
        .bvs-batches-comparison p {
          color: #69798e;
          line-height: 1.9;
          font-size: 15px;
          margin-top: 18px;
        }

        .bvs-batches-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 24px;
        }

        .bvs-batch-card {
          padding: 35px 29px;
          border-radius: 15px;
          background: white;
          border: 1px solid #e1e9f3;
          display: flex;
          flex-direction: column;
          transition: .3s;
        }

        .bvs-batch-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 45px #11223c0d;
        }

        .bvs-batch-card.featured {
          border: 2px solid #0758be;
          box-shadow: 0 20px 50px #0758be0e;
        }

        .bvs-batch-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 36px;
          color: #0758be;
        }

        .bvs-batch-card-top span {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.3px;
        }

        .bvs-batch-card h3 {
          font-size: 25px;
          letter-spacing: -.8px;
          margin-bottom: 15px;
        }

        .bvs-batch-card > p {
          font-size: 14px;
          line-height: 1.85;
          color: #69798e;
          min-height: 83px;
        }

        .bvs-batch-time {
          margin: 25px 0;
          padding: 19px;
          border-radius: 9px;
          background: #f0f6ff;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .bvs-batch-time svg {
          color: #0758be;
          flex-shrink: 0;
        }

        .bvs-batch-time strong {
          display: block;
          font-size: 16px;
          line-height: 1.4;
        }

        .bvs-batch-time span {
          display: block;
          font-size: 12px;
          color: #73829a;
          margin-top: 6px;
        }

        .bvs-batch-features {
          display: grid;
          gap: 15px;
          padding: 0 0 30px;
        }

        .bvs-batch-features span {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #52667e;
        }

        .bvs-batch-features svg {
          color: #209d70;
        }

        .bvs-batch-btn {
          margin-top: auto;
          padding: 16px;
          border-radius: 8px;
          background: #edf4ff;
          color: #0758be;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 800;
          transition: .2s;
        }

        .bvs-batch-card.featured .bvs-batch-btn,
        .bvs-batch-btn:hover {
          background: #0758be;
          color: white;
        }

        .bvs-batches-note {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          color: #69798e;
          font-size: 12px;
          line-height: 1.8;
          margin-top: 23px;
        }

        .bvs-batches-note svg {
          color: #0758be;
          flex-shrink: 0;
        }

        .bvs-batches-comparison {
          padding: 100px 0;
          background: #f6f9fd;
        }

        .bvs-batches-comparison-grid {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 90px;
          align-items: center;
        }

        .bvs-batches-comparison h2 span {
          color: #0758be;
        }

        .bvs-batches-table-wrap {
          overflow-x: auto;
          border: 1px solid #e1e8f3;
          border-radius: 12px;
          background: white;
        }

        .bvs-batches-table {
          border-collapse: collapse;
          min-width: 510px;
          width: 100%;
          text-align: left;
        }

        .bvs-batches-table th,
        .bvs-batches-table td {
          padding: 20px;
          border-bottom: 1px solid #e5ebf3;
          font-size: 13px;
          line-height: 1.6;
        }

        .bvs-batches-table th {
          background: #eaf2ff;
          color: #11223c;
          font-weight: 800;
        }

        .bvs-batches-table tbody tr:last-child td {
          border-bottom: 0;
        }

        .bvs-batches-cta {
          padding: 0 0 85px;
          background: #f6f9fd;
        }

        .bvs-batches-cta-inner {
          padding: 58px;
          background: #0758be;
          border-radius: 17px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 35px;
        }

        .bvs-batches-cta h2 {
          font-size: 35px;
          letter-spacing: -1.4px;
          margin-top: 12px;
        }

        .bvs-batches-cta-inner > div > span {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #d9e8ff;
        }

        .bvs-batches-cta a {
          background: white;
          color: #0758be;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 25px;
          border-radius: 8px;
          font-weight: 800;
          font-size: 14px;
          white-space: nowrap;
        }

        @media(max-width:950px) {
          .bvs-batches-grid {
            grid-template-columns: repeat(2, minmax(0,1fr));
          }

          .bvs-batches-comparison-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media(max-width:650px) {
          .bvs-batches-container { padding: 0 18px; }
          .bvs-batches-hero { padding-top: 70px; }
          .bvs-batches-hero h1 { font-size: 42px; letter-spacing: -2px; }
          .bvs-batches-hero p { font-size: 14px; }
          .bvs-batches-hero-strip span { font-size: 9px; letter-spacing: 0; }
          .bvs-batches-section, .bvs-batches-comparison { padding: 65px 0; }
          .bvs-batches-grid { grid-template-columns: 1fr; }
          .bvs-batch-card > p { min-height: 0; }
          .bvs-batches-heading h2, .bvs-batches-comparison h2 { font-size: 32px; }
          .bvs-batches-cta { padding-bottom: 65px; }
          .bvs-batches-cta-inner { padding: 35px 25px; flex-direction: column; align-items: flex-start; }
          .bvs-batches-cta h2 { font-size: 29px; }
        }
      `}</style>

      <main className="bvs-batches">
        <section className="bvs-batches-hero">
          <div className="bvs-batches-container">
            <span className="bvs-batches-kicker">
              FLEXIBLE LEARNING SCHEDULES
            </span>

            <h1>
              Make Time for
              <br />
              <span>Your Future.</span>
            </h1>

            <p>
              Every learner has a different routine.
              Choose from weekend, evening or regular
              learning schedules designed around your time.
            </p>

            <div className="bvs-batches-hero-strip">
              <span>01 / WEEKEND</span>
              <span>02 / EVENING</span>
              <span>03 / REGULAR</span>
            </div>
          </div>
        </section>

        <section className="bvs-batches-section">
          <div className="bvs-batches-container">
            <div className="bvs-batches-heading">
              <span className="bvs-batches-kicker">
                FIND YOUR LEARNING RHYTHM
              </span>

              <h2>Three Ways to Begin.</h2>
              <p>
                Compare schedules and choose the learning
                option that best fits your lifestyle.
              </p>
            </div>

            <div className="bvs-batches-grid">
              {batches.map((batch, index) => {
                const Icon = batch.icon;

                return (
                  <article
                    className={`bvs-batch-card ${index === 1 ? "featured" : ""}`}
                    key={batch.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                  >
                    <div className="bvs-batch-card-top">
                      <span>{batch.label}</span>
                      <Icon size={25} />
                    </div>

                    <h3>{batch.title}</h3>
                    <p>{batch.description}</p>

                    <div className="bvs-batch-time">
                      <Clock3 size={23} />
                      <div>
                        <strong>{batch.time}</strong>
                        <span>{batch.days}</span>
                      </div>
                    </div>

                    <div className="bvs-batch-features">
                      {batch.points.map((point) => (
                        <span key={point}>
                          <Check size={17} />
                          {point}
                        </span>
                      ))}
                    </div>

                    <a href="#enquiry" className="bvs-batch-btn">
                      Enquire Now <ArrowUpRight size={18} />
                    </a>
                  </article>
                );
              })}
            </div>

            <p className="bvs-batches-note">
              <Info size={18} />
              Weekend timing, evening class days, fees,
              batch start dates and course duration will
              be confirmed before enrolment.
            </p>
          </div>
        </section>

        <section className="bvs-batches-comparison">
          <div className="bvs-batches-container bvs-batches-comparison-grid">
            <div>
              <span className="bvs-batches-kicker">
                SCHEDULE COMPARISON
              </span>

              <h2>
                Choose the Right
                <br />
                <span>Learning Schedule.</span>
              </h2>

              <p>
                Quickly compare all three batch options
                before submitting your enquiry.
              </p>
            </div>

            <div className="bvs-batches-table-wrap">
              <table className="bvs-batches-table">
                <thead>
                  <tr>
                    <th>Batch</th>
                    <th>Days</th>
                    <th>Timing</th>
                  </tr>
                </thead>

                <tbody>
                  {batches.map((batch) => (
                    <tr key={batch.id}>
                      <td>{batch.title}</td>
                      <td>{batch.days}</td>
                      <td>{batch.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bvs-batches-cta">
          <div className="bvs-batches-container">
            <div className="bvs-batches-cta-inner">
              <div>
                <span>NEED SOME GUIDANCE?</span>
                <h2>Let's Find Your Ideal Batch.</h2>
              </div>

              <Link to="/contact">
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <EnquiryForm
          title="Choose your time. Start learning."
          subtitle="Tell us your preferred course and batch schedule."
        />
      </main>
    </>
  );
}
