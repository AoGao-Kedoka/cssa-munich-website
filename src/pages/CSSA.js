import Pinned from "../components/Pinned";
import Events from "../components/Events";

const CSSAPage = () => {
	return (
    <dir>
      <Pinned type="CSSA" />
      <Events type="CSSA" />
    </dir>
  );
}

export default CSSAPage;