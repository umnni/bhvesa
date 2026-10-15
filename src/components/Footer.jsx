
import { Link } from "react-router";
import {
  ArrowUpRight, ArrowRight,
  GraduationCap, BookOpen, Mail
} from "lucide-react";
import {
  FaInstagram, FaFacebookF,
  FaLinkedinIn, FaYoutube
} from "react-icons/fa";
const logo = "/assets/images/logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Batches", path: "/batches" },
  { name: "Contact Us", path: "/contact" }
];

const courseNames = [
  "SEO & Search Marketing",
  "Google Ads & PPC",
  "Social Media & Meta Ads",
  "Content & Creative Marketing",
  "Analytics & Performance",
  "AI & Marketing Automation"
];

export default function Footer() {
  return (
    <>
      <style>{`
        .bvs-footer {
          background: #101e34;
          color: white;
          padding: 75px 0 0;
        }

        .bvs-footer-container {
          max-width: 1240px;
          margin: auto;
          padding: 0 24px;
        }

        .bvs-footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          border-bottom: 1px solid #ffffff1b;
          padding-bottom: 55px;
        }

        .bvs-footer-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #e7bb5b;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 23px;
        }

        .bvs-footer-top h2 {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(33px, 4vw, 49px);
          line-height: 1.22;
          letter-spacing: -2px;
          font-weight: 800;
        }

        .bvs-footer-top h2 span {
          color: #f0bc47;
        }

        .bvs-footer-cta {
          background: #ebae29;
          color: #11223c;
          padding: 17px 24px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          font-size: 13px;
          white-space: nowrap;
          transition: .3s;
        }

        .bvs-footer-cta:hover {
          background: white;
          transform: translateY(-2px);
        }

        .bvs-footer-main {
          display: grid;
          grid-template-columns: 1.45fr .75fr 1.1fr 1.1fr;
          gap: 50px;
          padding: 65px 0;
        }

        .bvs-footer-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: white;
          padding: 8px;
          border-radius: 13px;
          width: 165px;
        }

        .bvs-footer-logo img {
          width: 100%;
          height: 135px;
          object-fit: contain;
        }

        .bvs-footer-tagline {
          margin-top: 20px;
          color: #ebae29;
          font-size: 13px;
          font-weight: 800;
        }

        .bvs-footer-description {
          font-size: 13px;
          color: #adbed3;
          line-height: 1.9;
          margin-top: 16px;
          max-width: 300px;
        }

        .bvs-footer-socials {
          display: flex;
          gap: 10px;
          margin-top: 25px;
        }

        .bvs-footer-socials a {
          width: 37px;
          height: 37px;
          border-radius: 7px;
          background: #ffffff10;
          display: grid;
          place-items: center;
          color: #c9d6e7;
          transition: .3s;
        }

        .bvs-footer-socials a:hover {
          background: #0758be;
          color: white;
        }

        .bvs-footer-column {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 15px;
        }

        .bvs-footer-column h3 {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          margin-bottom: 12px;
          color: white;
        }

        .bvs-footer-column > a {
          color: #adbed3;
          font-size: 13px;
          line-height: 1.7;
          transition: .2s;
        }

        .bvs-footer-column > a:hover {
          color: #ebae29;
        }

        .bvs-footer-contact > p {
          font-size: 13px;
          line-height: 1.9;
          color: #adbed3;
          margin-bottom: 9px;
        }

        .bvs-footer-contact a {
          display: inline-flex;
          align-items: center;
          gap: 9px;
        }

        .bvs-footer-bottom {
          border-top: 1px solid #ffffff1b;
          padding: 25px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .bvs-footer-bottom p {
          color: #9eb0c7;
          font-size: 12px;
        }

        .bvs-footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 17px;
          color: #9eb0c7;
          font-size: 12px;
        }

        .bvs-footer-bottom-links a:hover {
          color: #ebae29;
        }

        @media(max-width:1050px) {
          .bvs-footer-main {
            grid-template-columns: repeat(2, 1fr);
            gap: 45px;
          }
        }

        @media(max-width:600px) {
          .bvs-footer { padding-top: 55px; }
          .bvs-footer-container { padding: 0 18px; }
          .bvs-footer-top { flex-direction: column; align-items: flex-start; }
          .bvs-footer-top h2 { font-size: 34px; }
          .bvs-footer-main { grid-template-columns: 1fr; padding: 48px 0; gap: 36px; }
          .bvs-footer-logo { width: 150px; }
          .bvs-footer-logo img { height: 115px; }
          .bvs-footer-column { gap: 12px; }
          .bvs-footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <footer className="bvs-footer">
        <div className="bvs-footer-container">
          <div className="bvs-footer-top">
            <div>
              <span className="bvs-footer-eyebrow">
                <GraduationCap size={18} />
                YOUR FUTURE STARTS HERE
              </span>

              <h2>
                Learn the Skills.
                <br />
                <span>Shape Your Future.</span>
              </h2>
            </div>

            <Link to="/contact" className="bvs-footer-cta">
              Let's Get Started <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="bvs-footer-main">
            <div>
              <Link to="/" className="bvs-footer-logo">
                <img
                  src={logo}
                  alt="Bhvesa - Basics to Brilliance"
                />
              </Link>

              <p className="bvs-footer-tagline">
                Basics to Brilliance.
              </p>

              <p className="bvs-footer-description">
                Explore digital marketing through structured
                learning, modern tools and practical skills.
                Discover your possibilities with Bhvesa.
              </p>

              <div className="bvs-footer-socials">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FaInstagram size={17} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FaFacebookF size={17} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn size={17} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                  <FaYoutube size={17} />
                </a>
              </div>
            </div>

            <div className="bvs-footer-column">
              <h3>Quick Links</h3>

              {links.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="bvs-footer-column">
              <h3>Our Courses</h3>

              {courseNames.map((course) => (
                <Link key={course} to="/courses">
                  {course}
                </Link>
              ))}
            </div>

            <div className="bvs-footer-column bvs-footer-contact">
              <h3>Get In Touch</h3>

              <p>
                Interested in learning digital marketing?
                Explore our programs and find a suitable batch.
              </p>

              <Link to="/contact">
                <Mail size={17} /> Send an Enquiry
              </Link>

              <Link to="/courses">
                <BookOpen size={17} /> Explore Courses
              </Link>

              <Link to="/batches">
                View Batches <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="bvs-footer-bottom">
            <p>
              © {new Date().getFullYear()} Bhvesa.
              All Rights Reserved.
            </p>

            <div className="bvs-footer-bottom-links">
              <Link to="/">Home</Link>
              <span>•</span>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
