import SectionHeader from "../../components/common/SectionHeader";

import IncidentList from "../../components/communications/IncidentList";
import BroadcastPanel from "../../components/communications/BroadcastPanel";
import AIMessageGenerator from "../../components/communications/AIMessageGenerator";
import CommunicationLog from "../../components/communications/CommunicationLog";

export default function Communications() {

  return (

    <div>

      <SectionHeader
        title="Communications"
        subtitle="AI-powered emergency communication and public announcement system."
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <IncidentList />

        <BroadcastPanel />

        <AIMessageGenerator />

        <CommunicationLog />

      </div>

    </div>

  );

}