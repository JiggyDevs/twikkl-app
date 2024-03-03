import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { Fragment, useState } from "react";
import DriveBackupIcon from "@assets/svg/DriveBackupIcon";
import ManualBackupIcon from "@assets/svg/ManualBackupIcon";
import OptionCard from "@twikkl/components/OptionCard";
import RecoveryPhaseConfirmation from "@twikkl/components/RecoveryPhaseConfirmation";

export const recovery = [
  { icon: <DriveBackupIcon />, text: "Google drive backup", desc: "Not set" },
  { icon: <ManualBackupIcon />, text: "Manual backup", desc: "Active" },
];

const Recovery = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <View style={{ gap: 20 }}>
        {recovery.map(({ icon, text, desc }, itemIndex) => (
          <Fragment key={itemIndex}>
            <OptionCard icon={icon} text={text} desc={desc} />
          </Fragment>
        ))}
      </View>
      <RecoveryPhaseConfirmation showModal={showModal} onContinue={() => setShowModal(false)} />
    </>
  );
};
export default Recovery;
