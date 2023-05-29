import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Camera } from "expo-camera";
import { ResizeMode, Video } from "expo-av";
import styled from "styled-components/native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Speed from "@assets/svg/Speed";
import Timer from "@assets/svg/Timer";
import Effect from "@assets/svg/Effect";
import Back from "@assets/svg/Back";
import Cancel from "@assets/svg/Cancel";
import Send from "@assets/svg/Send";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import AppBottomSheet from "@twikkl/components/BottomSheet";
import { Bar } from "react-native-progress";
import Effects from "@twikkl/components/Effects";

const Wrapper = styled.View`
  flex: 1;
`;
export const Flex = styled.View`
  flex-direction: row;
`;
const TopSelect = styled(Flex)`
  justify-content: space-between;
`;
const JustifyCenter = styled(Flex)`
  justify-content: center;
  gap: 45px;
`;
export const Center = styled.View`
  align-items: center;
`;
const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-top: ${hp(5)}px;
  padding-bottom: ${hp(3)}px;
  padding-horizontal: ${wp(5)}px;
`;
const ViewContainer = styled(Container)`
  padding-bottom: ${hp(15)}px;
  padding-horizontal: ${wp(17)}px;
`;
const TextCenter = styled.Text`
  color: rgba(255, 255, 255, 0.45);
`;
const TextLight = styled.Text`
  color: #f1fcf2;
`;
const AddSound = styled.Pressable`
  margin-vertical: 15px;
  padding: 9px 12px;
  border-radius: 16px;
  background-color: #f1fcf2;
  align-self: center;
`;
const Record = styled.Pressable`
  width: 70px;
  height: 70px;
  border-radius: 99px;
`;
const RecordWrapper = styled.View`
  border: 8px solid rgba(255, 255, 255, 0.45);
  border-radius: 99px;
`;
const ModeBorder = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 99px;
  margin-top: ${hp(0.5)}px;
  background-color: #f1fcf2;
`;
const ModeBorderLive = styled(ModeBorder)`
  background-color: #a10000;
`;
const RecordLine = styled(JustifyCenter)`
  align-items: center;
  margin-top: ${hp(4)}px;
  gap: 20px;
`;

const actionArr = [
  { icon: <Speed />, text: "Speed", focused: <Speed focused={1} /> },
  { icon: <Effect />, text: "Effect", focused: <Effect focused={1} /> },
  { icon: <Timer />, text: "Timer", focused: <Timer focused={1} /> },
];
const speedArr = ["0.25x", "0.5x", "1x", "1.5x", "2x"];
const timerArr = ["15s", "30s", "60s", "3m", "5m"];

const CreateUploadvideo = () => {
  const router = useRouter();
  const [isRecording, setIsRecording] = useState(false);
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const [cameraRef, setCameraRef] = useState<any>(null);
  const [actions, setActions] = useState<"Speed" | "Effect" | "Timer" | string | null>(null);
  const [speed, setSpeed] = useState("1x");
  const [timer, setTimer] = useState("60s");
  const [progress, setProgress] = useState(0);
  const [shouldPlay, setShouldPlay] = useState(false);

  const iDuration =
    timer === "15s" ? 15000 : timer === "30s" ? 30000 : timer === "60s" ? 60000 : timer === "3m" ? 180000 : 300000;

  const getMediaLibraryPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (status !== "granted") {
      console.log("Permission denied!");
    }
  };

  const activateProgress = () => {
    const duration = iDuration;
    const interval = 100;
    const increment = interval / duration;
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + increment;
        if (newProgress >= 1) {
          clearInterval(timer);
          return 1;
        }
        return newProgress;
      });
    }, interval);

    return () => {
      clearInterval(timer);
    };
  };

  const pickImage = async () => {
    await getMediaLibraryPermission();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsMultipleSelection: true,
      aspect: [9, 16],
      base64: true,
      quality: 1,
    });
    if (!result.canceled) {
    }
  };

  const startRecording = async () => {
    setProgress(0);
    activateProgress();
    setIsRecording(true);
    setVideoUri(null);

    if (cameraRef) {
      try {
        setTimeout(stopRecording, iDuration);
        const { uri } = await cameraRef.recordAsync();
        setVideoUri(uri);
      } catch (error) {
        console.log("Error recording video:", error);
        setIsRecording(false);
      }
    }
  };

  const stopRecording = () => {
    if (cameraRef) {
      cameraRef.stopRecording();
      setIsRecording(false);
    }
  };

  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermissionsAsync();
    })();
  }, []);

  return (
    <>
      <Wrapper>
        {videoUri ? (
          <Pressable onPress={() => setShouldPlay(!shouldPlay)} style={{ flex: 1 }}>
            <Video
              shouldPlay={shouldPlay}
              source={{ uri: videoUri }}
              resizeMode={ResizeMode.COVER}
              style={[StyleSheet.absoluteFill]}
              isLooping
            />
            <ViewContainer>
              <Center>
                <TextLight>Live Video</TextLight>
                <ModeBorderLive />
              </Center>
              <TopSelect>
                <Pressable onPress={() => setVideoUri(null)}>
                  <Cancel />
                </Pressable>
                <Pressable>
                  <Send />
                </Pressable>
              </TopSelect>
            </ViewContainer>
          </Pressable>
        ) : (
          <>
            <Camera style={[StyleSheet.absoluteFill]} ref={(ref) => setCameraRef(ref)} />
            <Container>
              <View>
                {isRecording ? (
                  <Center>
                    <TextLight>Live Video</TextLight>
                    <ModeBorderLive />
                  </Center>
                ) : (
                  <TopSelect>
                    <Pressable onPress={() => router.push("Home")}>
                      <Back />
                    </Pressable>
                    <Flex style={{ gap: 20 }}>
                      <Center>
                        <TextLight>Live Video</TextLight>
                        <ModeBorder />
                      </Center>
                      <Center>
                        <Pressable onPress={pickImage}>
                          <TextCenter>Upload Video</TextCenter>
                        </Pressable>
                      </Center>
                    </Flex>
                    <View />
                  </TopSelect>
                )}
                {!isRecording && (
                  <AddSound>
                    <Text>Add Sound</Text>
                  </AddSound>
                )}
              </View>
              <View>
                {isRecording ? (
                  <Bar
                    progress={progress}
                    unfilledColor="#fff"
                    animated
                    borderWidth={0}
                    borderRadius={0}
                    color="#A20000"
                    width={null}
                  />
                ) : (
                  <>
                    {actions === "Speed" && (
                      <JustifyCenter>
                        {speedArr.map((item) => (
                          <Pressable key={item} onPress={() => setSpeed(item)}>
                            <Center>
                              <Text style={{ color: speed === item ? "#fff" : "rgba(255, 255, 255, 0.45)" }}>
                                {item}
                              </Text>
                              {speed === item && <ModeBorder />}
                            </Center>
                          </Pressable>
                        ))}
                      </JustifyCenter>
                    )}
                    {actions === "Timer" && (
                      <JustifyCenter>
                        {timerArr.map((item) => (
                          <Pressable key={item} onPress={() => setTimer(item)}>
                            <Center>
                              <Text style={{ color: timer === item ? "#fff" : "rgba(255, 255, 255, 0.45)" }}>
                                {item}
                              </Text>
                              {timer === item && <ModeBorder />}
                            </Center>
                          </Pressable>
                        ))}
                      </JustifyCenter>
                    )}
                  </>
                )}
                {actions !== "Effect" && (
                  <RecordLine>
                    {!isRecording && <Image source={require("../assets/imgs/left.png")} />}
                    <RecordWrapper
                      style={{
                        marginBottom: isRecording ? 70 : 0,
                      }}
                    >
                      <Record
                        onPress={isRecording ? stopRecording : startRecording}
                        style={{
                          backgroundColor: isRecording ? "#A10000" : "#fff",
                        }}
                      />
                    </RecordWrapper>
                    {!isRecording && <Image source={require("../assets/imgs/right.png")} />}
                  </RecordLine>
                )}
                {actions !== "Effect" && !isRecording && (
                  <TopSelect style={{ gap: 20, marginTop: 25 }}>
                    {actionArr.map(({ text, icon, focused }) => (
                      <Pressable key={text} onPress={() => setActions(text)}>
                        <Center>
                          {actions === text ? focused : icon}
                          <TextCenter style={{ color: actions === text ? "#fff" : "rgba(255, 255, 255, 0.45)" }}>
                            {text}
                          </TextCenter>
                        </Center>
                      </Pressable>
                    ))}
                  </TopSelect>
                )}
              </View>
            </Container>
          </>
        )}
      </Wrapper>
      {actions === "Effect" && (
        <AppBottomSheet closeModal={() => setActions(null)}>
          <Effects />
        </AppBottomSheet>
      )}
    </>
  );
};

export default CreateUploadvideo;
