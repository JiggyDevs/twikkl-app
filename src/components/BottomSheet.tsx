import React, { ReactElement, RefObject, useCallback, useEffect, useMemo, useRef } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

const AppBottomSheet = ({
  children,
  closeModal,
  disablebackDrop = false,
  height = "40%",
  //@ts-ignore
  // eslint-disable-next-line react-hooks/rules-of-hooks
  modalRef = useRef<RefObject<BottomSheetModal>>(null),
  backgroundColor = "rgba(57, 56, 56, 0.45)",
}: {
  children: ReactElement;
  closeModal?: Function;
  disablebackDrop?: boolean;
  height?: string;
  modalRef?: BottomSheetModal;
  backgroundColor?: string;
}) => {
  const snapPoints = useMemo(() => ["1%", height], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  useEffect(() => {
    //@ts-ignore
    modalRef.current?.present();
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={1}
        opacity={0.3}
        enableTouchThrough
        pressBehavior={disablebackDrop ? "none" : "close"}
      />
    ),
    [],
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        detached
        onDismiss={() => {
          closeModal?.();
        }}
        style={{
          // borderTopLeftRadius: 30,
          // borderTopRightRadius: 30,
          shadowOffset: {
            width: 0,
            height: -1,
          },
          shadowRadius: 3,
          shadowColor: "rgba(0,0,0,0.2)",
          shadowOpacity: 0.7,
          elevation: 10,
          flex: 1,
        }}
        backgroundStyle={{ backgroundColor: backgroundColor }}
        //@ts-ignore
        ref={modalRef}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={false}
        enableOverDrag={false}
        index={1}
        enableContentPanningGesture={false}
        enableHandlePanningGesture={false}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        android_keyboardInputMode="adjustPan"
        handleComponent={() => null}
      >
        <BottomSheetScrollView contentContainerStyle={{ flex: 1 }}>{children}</BottomSheetScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default AppBottomSheet;
