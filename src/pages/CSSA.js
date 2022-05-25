import Pinned from "../components/Pinned";
import Events from "../components/Events";

const CSSAPage = () => {
	return (
    <dir>
      <Pinned />
      <Events type="CSSA"/>
    </dir>
  );
}

export default CSSAPage;