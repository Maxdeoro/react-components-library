function Header({title,children}){
  return (
    <header className="app-header">
        <h1>{title}</h1>
        <p>Explore reusable and customizable components</p>
        <div className="header-buttons">
          {children}
        </div>
      </header>
  )
};

export default Header;