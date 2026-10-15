
import { Link } from "react-router";
import {
  ShieldCheck, LockKeyhole, Mail,
  ArrowUpRight
} from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";

export default function PrivacyPolicy() {
  return (
    <main className="bh-inner-page">
      <section className="bh-privacy-hero">
        <div className="container">
          <ShieldCheck size={48} />
          <span className="bh-kicker">PRIVACY & TRANSPARENCY</span>
          <h1>Your privacy <em>matters.</em></h1>
          <p>
            We believe clear communication about information
            and privacy is an important part of building trust.
          </p>
        </div>
      </section>

      <section className="bh-section">
        <div className="container bh-privacy-grid">
          <aside className="bh-privacy-aside">
            <LockKeyhole size={32} />
            <h3>Protecting your information.</h3>
            <p>
              This policy is a draft and must reflect actual
              website data practices before publication.
            </p>
          </aside>

          <article className="bh-privacy-content">
            <h2>Privacy Policy — Draft</h2>
            <p><strong>Effective Date:</strong> To be confirmed.</p>

            <h3>1. Information We Collect</h3>
            <p>
              Once enquiry submission is enabled, we may collect
              your name, email address, phone number, selected
              course and message submitted through our forms.
            </p>

            <h3>2. How We Use Information</h3>
            <p>
              Information may be used to respond to enquiries,
              provide information about available courses and
              communicate about batch schedules or admissions,
              consistent with the consent and practices
              implemented on the website.
            </p>

            <h3>3. Third-Party Services</h3>
            <p>
              Hosting, email delivery or analytics providers
              may process information where those services
              are enabled. The final policy should identify
              relevant providers accurately.
            </p>

            <h3>4. Data Security and Retention</h3>
            <p>
              The website operator must confirm appropriate
              access controls, security measures, retention
              periods and deletion procedures.
            </p>

            <h3>5. Your Privacy Requests</h3>
            <p>
              Visitors should have a way to contact Bhvesa
              regarding applicable requests for access,
              correction or deletion of personal information.
            </p>

            <h3>6. Changes to This Policy</h3>
            <p>
              This policy may be updated when website
              features or information practices change.
            </p>

            <div className="bh-policy-notice">
              <Mail size={23} />
              <p>
                <strong>Before Launch:</strong> This is not a
                finalized legal policy. Review it against actual
                data collection, consent and applicable requirements.
              </p>
            </div>

            <Link to="/contact" className="bh-text-link">
              Contact Us <ArrowUpRight size={18} />
            </Link>
          </article>
        </div>
      </section>

      <EnquiryForm heading="Have questions? Let's connect." />
    </main>
  );
}
