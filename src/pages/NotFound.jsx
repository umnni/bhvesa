
import { Link } from "react-router";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bh-notfound">
      <div className="container">
        <div className="bh-notfound-icon">
          <SearchX size={43} />
        </div>
        <span className="bh-kicker">PAGE NOT FOUND</span>
        <h1>404</h1>
        <h2>Looks like you're off the map.</h2>
        <p>
          The page you're looking for doesn't exist
          or has moved to a different location.
        </p>
        <Link to="/" className="bh-primary">
          <ArrowLeft size={18} /> Back to Homepage
        </Link>
      </div>
    </main>
  );
}
