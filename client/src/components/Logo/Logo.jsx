import MovingIcon from "@mui/icons-material/Moving";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo center" title="Taskify">
      <MovingIcon />
      <span className="logo-task">Taskify</span>
    </div>
  );
};

export default Logo;
