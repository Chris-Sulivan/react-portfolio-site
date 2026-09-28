export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      © {currentYear} Chris Sojio — built with React
    </footer>
  );
}