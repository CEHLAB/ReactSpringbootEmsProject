import 'react';

const FooterComponent = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3 fixed-bottom">
      <div className="container">
        <span>© {new Date().getFullYear()} Employees Management System</span>
      </div>
    </footer>
  );
};

export default FooterComponent;
