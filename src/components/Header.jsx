
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
const logo = "/assets/images/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "Batches", path: "/batches" },
  { label: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <style>{`
        .bvs-header {
          position: sticky;
          top: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(255,255,255,.97);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid #eaf0f6;
        }

        .bvs-header-inner {
          max-width: 1240px;
          padding: 0 24px;
          height: 91px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
        }

        .bvs-header-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          width: 165px;
        }

        .bvs-header-logo img {
          width: 100%;
          height: 73px;
          object-fit: contain;
        }

        .bvs-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 37px;
        }

        .bvs-nav a {
          font-family: "DM Sans", sans-serif;
          color: #334155;
          font-size: 14px;
          font-weight: 700;
          position: relative;
          padding: 34px 0;
          transition: color .2s;
        }

        .bvs-nav a::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          background: #0758be;
          bottom: 26px;
          left: 0;
          transition: width .3s;
        }

        .bvs-nav a:hover,
        .bvs-nav a.active {
          color: #0758be;
        }

        .bvs-nav a:hover::after,
        .bvs-nav a.active::after {
          width: 100%;
        }

        .bvs-header-btn {
          background: #0758be;
          color: white;
          padding: 15px 21px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 13px;
          display: inline-flex;
          align-items: center;
          gap: 11px;
          white-space: nowrap;
          transition: .3s;
        }

        .bvs-header-btn:hover {
          background: #04489e;
          transform: translateY(-2px);
        }

        .bvs-menu-toggle {
          display: none;
          background: transparent;
          border: 0;
          color: #11223c;
          cursor: pointer;
        }

        .bvs-mobile {
          display: none;
        }

        @media(max-width: 950px) {
          .bvs-header-inner {
            height: 76px;
          }

          .bvs-header-logo {
            width: 145px;
          }

          .bvs-header-logo img {
            height: 64px;
          }

          .bvs-nav,
          .bvs-desktop-cta {
            display: none;
          }

          .bvs-menu-toggle {
            display: grid;
            place-items: center;
          }

          .bvs-mobile {
            display: block;
            position: absolute;
            top: 76px;
            left: 0;
            width: 100%;
            background: #fff;
            padding: 19px 24px 28px;
            box-shadow: 0 20px 35px #11223c15;
            max-height: calc(100dvh - 76px);
            overflow-y: auto;
          }

          .bvs-mobile nav {
            display: flex;
            flex-direction: column;
          }

          .bvs-mobile nav a {
            padding: 16px 5px;
            color: #263b57;
            font-weight: 700;
            font-size: 15px;
            border-bottom: 1px solid #eef1f6;
          }

          .bvs-mobile nav a.active {
            color: #0758be;
          }

          .bvs-mobile .bvs-header-btn {
            width: 100%;
            margin-top: 22px;
            justify-content: center;
          }
        }
      `}</style>

      <header className="bvs-header">
        <div className="bvs-header-inner">
          <Link to="/" className="bvs-header-logo">
            <img src={logo} alt="Bhvesa - Basics to Brilliance" />
          </Link>

          <nav className="bvs-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="bvs-header-btn bvs-desktop-cta"
          >
            Enquire Now <ArrowUpRight size={17} />
          </Link>

          <button
            type="button"
            className="bvs-menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {open && (
          <div className="bvs-mobile">
            <nav aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <Link
              to="/contact"
              className="bvs-header-btn"
              onClick={() => setOpen(false)}
            >
              Enquire Now <ArrowUpRight size={17} />
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
