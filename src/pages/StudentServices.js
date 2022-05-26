import Pinned from "../components/Pinned";
import Events from "../components/Events";

function StudentServicesPage() {
  return (
    <dir>
      <Pinned />
      <Events type="StudentService"/>
    </dir>
  );
}

export default StudentServicesPage;
