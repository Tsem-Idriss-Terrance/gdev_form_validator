import React from "react";
const Navigation = () => {
  return (
    <nav
      className={`width-250 flex-shrink-0 position-sticky px-3 tablet-width-200 ipad-d-none mobile-d-none`}
      style={{height: "calc(100vh - 80px)", top: "80px"}}
    >
        <div className="border-b-1 border-color-jira py-2">
            <span className="fw-bold wh-2">Overview</span>
        </div>
       
      <ul>
        <a href="/#supportedInputTypes" className="text-decoration-none">
          <li className="py-2 fw-bold cursor-ptr gt-4 wh-2">Input types</li>
        </a>

        <a href="/#design" className="text-decoration-none">
          <li className="py-2 fw-bold cursor-ptr gt-4 wh-2">Designs</li>
        </a>
        <a href="/#installation" className="text-decoration-none">
          <li className="py-2 fw-bold cursor-ptr gt-4 wh-2">Installation</li>
        </a>
        <div>
          <li className="py-2 fw-bold  gt-4 wh-2">Usage</li>
          <ul>
            <a href="/#classic" className="text-decoration-none">
              <li className="gt-3 fw-bold cursor-ptr py-1 wh-2">
                Classic design
              </li>
            </a>
            <a href="/#fl" className="text-decoration-none">
              <li className="gt-3 fw-bold cursor-ptr py-1 wh-2">
                Floating-label design
              </li>
            </a>
            <a href="/#design" className="text-decoration-none">
              <li className="gt-3 fw-bold cursor-ptr py-1 wh-2">
                Ifta-label design
              </li>
            </a>
          </ul>
        </div>
        <a href="/#attributes" className="text-decoration-none">
          <li className="py-2 fw-bold cursor-ptr gt-4 wh-2">Form Attributes</li>
        </a>
        <a href="/#response" className="text-decoration-none">
          <li className="py-2 fw-bold cursor-ptr gt-4 wh-2">
            Validation Response
          </li>
        </a>
        <a href="/#errorMessages" className="text-decoration-none">
          <li className="py-2 fw-bold cursor-ptr gt-4 wh-2">Error Messages</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navigation;
