function Navbar({ activeSection, onNavigate, sectionItems }) {
  return (
    <header className="topbar">
      <div className="brand-block">
        <span className="eyebrow">Arul Earth Movers</span>
        <h1>Mini Excavator Services in Tamil Nadu</h1>
      </div>
      <nav className="nav-links" aria-label="Main Navigation">
        {sectionItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-item${activeSection === item.id ? " active" : ""}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
