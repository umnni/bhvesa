
import { useState } from "react";
import { Send, CheckCircle2, Sparkles } from "lucide-react";

const courseOptions = [
  "Complete Digital Marketing",
  "SEO & Search Marketing",
  "Google Ads & PPC",
  "Social Media & Meta Ads",
  "Content & Creative Marketing",
  "Analytics & Performance",
  "AI & Marketing Automation",
];

export default function EnquiryForm({
  title = "Your next chapter starts here.",
  subtitle = "Tell us what you would like to learn."
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const [notice, setNotice] = useState("");

  const update = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    setNotice(
      "Form preview is working. Email submission will be enabled when the backend is connected."
    );
  };

  return (
    <>
      <style>{`
        .bvs-enquiry {
          padding: 95px 0;
          background: #f5f8fd;
        }

        .bvs-enquiry-container {
          max-width: 1240px;
          padding: 0 24px;
          margin: auto;
        }

        .bvs-enquiry-box {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 65px #17334f0b;
        }

        .bvs-enquiry-left {
          padding: 65px 50px;
          background: #11223c;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .bvs-enquiry-label {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #f4c45c;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .bvs-enquiry-left h2 {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(32px, 3.5vw, 47px);
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -1.8px;
          position: relative;
          z-index: 1;
        }

        .bvs-enquiry-left > p {
          color: #c2d0e3;
          font-size: 15px;
          line-height: 1.9;
          margin-top: 23px;
          position: relative;
          z-index: 1;
        }

        .bvs-enquiry-points {
          display: grid;
          gap: 17px;
          margin-top: 35px;
          position: relative;
          z-index: 1;
        }

        .bvs-enquiry-points span {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
        }

        .bvs-enquiry-points svg {
          color: #ebae29;
        }

        .bvs-enquiry-decor {
          position: absolute;
          right: -5px;
          bottom: -95px;
          font-size: 290px;
          color: #ffffff09;
          font-weight: 800;
        }

        .bvs-enquiry-right {
          padding: 55px 50px;
        }

        .bvs-enquiry-right h3 {
          font-size: 26px;
          letter-spacing: -.8px;
          font-weight: 800;
          color: #11223c;
        }

        .bvs-enquiry-right > p {
          color: #78879a;
          font-size: 14px;
          margin: 9px 0 30px;
        }

        .bvs-enquiry-form {
          display: grid;
          gap: 20px;
        }

        .bvs-enquiry-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .bvs-enquiry-form label {
          display: flex;
          flex-direction: column;
          gap: 9px;
          font-size: 12px;
          font-weight: 700;
          color: #374761;
        }

        .bvs-enquiry-form input,
        .bvs-enquiry-form select,
        .bvs-enquiry-form textarea {
          padding: 14px;
          width: 100%;
          min-width: 0;
          border: 1px solid #dce5ef;
          background: #fafcff;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 400;
          outline: none;
          color: #17233b;
          transition: .2s;
        }

        .bvs-enquiry-form input:focus,
        .bvs-enquiry-form select:focus,
        .bvs-enquiry-form textarea:focus {
          border-color: #0758be;
          background: #fff;
        }

        .bvs-enquiry-form textarea {
          resize: vertical;
        }

        .bvs-enquiry-submit {
          background: #0758be;
          color: #fff;
          border: 0;
          padding: 16px 25px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: fit-content;
          font-size: 14px;
          font-weight: 800;
        }

        .bvs-enquiry-submit:hover {
          background: #04489e;
        }

        .bvs-form-notice {
          font-size: 13px;
          color: #0758be;
          line-height: 1.6;
        }

        .bvs-enquiry-form > small {
          font-size: 11px;
          color: #8492a5;
          line-height: 1.7;
        }

        @media(max-width:900px) {
          .bvs-enquiry-box {
            grid-template-columns: 1fr;
          }

          .bvs-enquiry-left,
          .bvs-enquiry-right {
            padding: 45px;
          }
        }

        @media(max-width:600px) {
          .bvs-enquiry {
            padding: 65px 0;
          }

          .bvs-enquiry-container {
            padding: 0 18px;
          }

          .bvs-enquiry-left,
          .bvs-enquiry-right {
            padding: 35px 25px;
          }

          .bvs-enquiry-left h2 {
            font-size: 33px;
          }

          .bvs-enquiry-row {
            grid-template-columns: 1fr;
          }

          .bvs-enquiry-submit {
            width: 100%;
          }
        }
      `}</style>

      <section className="bvs-enquiry" id="enquiry">
        <div className="bvs-enquiry-container">
          <div className="bvs-enquiry-box">
            <div className="bvs-enquiry-left" data-aos="fade-right">
              <span className="bvs-enquiry-label">
                <Sparkles size={18} />
                BEGIN WITH BHVESA
              </span>

              <h2>{title}</h2>
              <p>{subtitle}</p>

              <div className="bvs-enquiry-points">
                <span><CheckCircle2 size={18} /> Explore Our Courses</span>
                <span><CheckCircle2 size={18} /> Discover Batch Timings</span>
                <span><CheckCircle2 size={18} /> Ask Your Questions</span>
              </div>

              <div className="bvs-enquiry-decor">B.</div>
            </div>

            <div className="bvs-enquiry-right" data-aos="fade-left">
              <h3>Let's Get Started.</h3>
              <p>Fill in your details below.</p>

              <form className="bvs-enquiry-form" onSubmit={submit}>
                <div className="bvs-enquiry-row">
                  <label>
                    Full Name *
                    <input
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={update}
                      required
                    />
                  </label>

                  <label>
                    Email Address *
                    <input
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={form.email}
                      onChange={update}
                      required
                    />
                  </label>
                </div>

                <div className="bvs-enquiry-row">
                  <label>
                    Phone Number *
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={update}
                      pattern="[0-9+() -]{10,20}"
                      title="Enter a valid phone number"
                      required
                    />
                  </label>

                  <label>
                    Interested Course *
                    <select
                      name="course"
                      value={form.course}
                      onChange={update}
                      required
                    >
                      <option value="">Select a course</option>
                      {courseOptions.map((course) => (
                        <option value={course} key={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label>
                  Your Message
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us what you would like to learn..."
                    value={form.message}
                    onChange={update}
                  />
                </label>

                <button type="submit" className="bvs-enquiry-submit">
                  Submit Enquiry <Send size={17} />
                </button>

                {notice && <p className="bvs-form-notice" role="status">{notice}</p>}

                <small>
                  This is a frontend preview. No information is sent yet.
                </small>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
