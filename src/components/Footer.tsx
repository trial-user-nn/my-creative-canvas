import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link to="/" className="font-serif text-xl font-semibold text-foreground">
              Writer.
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Crafting stories that resonate.
            </p>
          </div>

          <nav className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/work" className="hover:text-foreground transition-colors">Work</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
