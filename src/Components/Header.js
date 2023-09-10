import { BsMoon } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { useModeContext } from "../context";

function Header() {
  const [mode, setMode] = useModeContext();
  return (
    <div className="header shadow">
      <div className="header__heading">Where is the world?</div>
      <div className="header__toggle" onClick={() => setMode(!mode)}>
        {mode ? (
          <p>
            <MdOutlineLightMode /> <span>Light Mode</span>
          </p>
        ) : (
          <p>
            <BsMoon /> <span>Dark Mode</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Header;
