import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <header>
      <div className="container header">
        <Link to="/" className="no-decoration color-inherit hover-accent">
          <span className="app-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8.75 11.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm4.835-14.414l5.829 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.172c.028 0 .055.004.082.007a.63.63 0 0 0 .059.007c.215.015.427.056.624.138c.057.024.112.056.166.087l.05.029l.047.024a.652.652 0 0 1 .081.044c.078.053.148.116.219.18a.63.63 0 0 0 .036.03a.491.491 0 0 1 .049.04ZM18 20.5a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5h12Zm-.622-12L13.5 4.621V8a.5.5 0 0 0 .5.5h3.378Z"
              />
            </svg>
          </span>
          <span className="app-title">Notes</span>
        </Link>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">
                <span className="app-icon" title="Archives">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M9.75 10.5a.75.75 0 0 0 0 1.5h3.477a.75.75 0 0 0 0-1.5H9.75Zm-5-8.5A1.75 1.75 0 0 0 3 3.75v2.5c0 .698.409 1.3 1 1.582v7.918a3.75 3.75 0 0 0 3.75 3.75h7.5A3.75 3.75 0 0 0 19 15.75V7.832c.591-.281 1-.884 1-1.582v-2.5A1.75 1.75 0 0 0 18.25 2H4.75Zm.75 13.75V8h12v7.75A2.25 2.25 0 0 1 15.25 18h-7.5a2.25 2.25 0 0 1-2.25-2.25Zm-1-12a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v2.5a.25.25 0 0 1-.25.25H4.75a.25.25 0 0 1-.25-.25v-2.5Zm17 8a3.743 3.743 0 0 0-1.5-3v7.5a4.25 4.25 0 0 1-4.25 4.25h-8.5c.684.91 1.773 1.5 3 1.5h5.5a5.75 5.75 0 0 0 5.75-5.75v-4.5Z"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
