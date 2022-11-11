import { FallingLines } from "react-loader-spinner";

import css from "./Loader.module.css";

function LoaderComponent() {
  return (
    <div className={css.Overlay}>
      <FallingLines
        color="violet"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
}

export default LoaderComponent;
