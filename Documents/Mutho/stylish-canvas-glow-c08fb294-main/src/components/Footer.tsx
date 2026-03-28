const Footer = () => {
  return (
    <footer className="gradient-primary text-primary-foreground text-center py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm">&copy; {new Date().getFullYear()} MUTHOKINJU HARDWARE. All rights reserved.</p>
        <p className="text-xs mt-2 opacity-80">Paints & Cement — Built to Last</p>
      </div>
    </footer>
  );
};

export default Footer;
