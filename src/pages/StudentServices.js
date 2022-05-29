import Pinned from "../components/Pinned";
import Events from "../components/Events";

function StudentServicesPage() {
  return (
    <dir>
      <Pinned type="StudentService" />
      <Events type="StudentService" />
    </dir>
  );
}

export default StudentServicesPage;
