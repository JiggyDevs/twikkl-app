import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Camera } from "expo-camera";
import { ResizeMode, Video } from "expo-av";
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
  const getAudioRecordingPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (status !== "granted") {
      console.log("Audio recording permission denied!");
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
      await getAudioRecordingPermission();
    })();
  }, []);

  return (
    <>
      <View style={styles.wrapper}>
        {videoUri ? (
          <Pressable onPress={() => setShouldPlay(!shouldPlay)} style={{ flex: 1 }}>
            <Video
              shouldPlay={shouldPlay}
              source={{ uri: videoUri }}
              resizeMode={ResizeMode.COVER}
              style={[StyleSheet.absoluteFill]}
              isLooping
              onError={(error) => console.log("Video Error:", error)}
            />
            <View style={styles.viewContainer}>
              <View style={styles.center}>
                <Text style={styles.textLight}>Live Video</Text>
                <View style={styles.modeBorderLive} />
              </View>
              <View style={styles.topSelect}>
                <Pressable onPress={() => setVideoUri(null)}>
                  <Cancel />
                </Pressable>
                <Pressable>
                  <Send />
                </Pressable>
              </View>
            </View>
          </Pressable>
        ) : (
          <>
            <Camera style={[StyleSheet.absoluteFill]} ref={(ref) => setCameraRef(ref)} />
            <View style={styles.container}>
              <View>
                {isRecording ? (
                  <View style={styles.center}>
                    <Text style={styles.textLight}>Live Video</Text>
                    <View style={styles.modeBorderLive} />
                  </View>
                ) : (
                  <View style={styles.topSelect}>
                    <Pressable onPress={() => router.push("Home")}>
                      <Back />
                    </Pressable>
                    <View style={styles.flex}>
                      <View style={styles.center}>
                        <Text style={styles.textLight}>Live Video</Text>
                        <View style={styles.modeBorder} />
                      </View>
                      <View style={styles.center}>
                        <Pressable onPress={pickImage}>
                          <Text style={styles.textCenter}>Upload Video</Text>
                        </Pressable>
                      </View>
                    </View>
                    <View />
                  </View>
                )}
                {!isRecording && (
                  <Pressable style={styles.addSound}>
                    <Text>Add Sound</Text>
                  </Pressable>
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
                      <View style={styles.justifyCenter}>
                        {speedArr.map((item) => (
                          <Pressable key={item} onPress={() => setSpeed(item)}>
                            <View style={styles.center}>
                              <Text style={{ color: speed === item ? "#fff" : "rgba(255, 255, 255, 0.45)" }}>
                                {item}
                              </Text>
                              {speed === item && <View style={styles.modeBorder} />}
                            </View>
                          </Pressable>
                        ))}
                      </View>
                    )}
                    {actions === "Timer" && (
                      <View style={styles.justifyCenter}>
                        {timerArr.map((item) => (
                          <Pressable key={item} onPress={() => setTimer(item)}>
                            <View style={styles.center}>
                              <Text style={{ color: timer === item ? "#fff" : "rgba(255, 255, 255, 0.45)" }}>
                                {item}
                              </Text>
                              {timer === item && <View style={styles.modeBorder} />}
                            </View>
                          </Pressable>
                        ))}
                      </View>
                    )}
                  </>
                )}
                {actions !== "Effect" && (
                  <View style={styles.recordLine}>
                    {!isRecording && <Image source={require("../assets/imgs/left.png")} />}
                    <View style={{ ...styles.recordWrapper, marginBottom: isRecording ? 70 : 0 }}>
                      <Pressable
                        onPress={isRecording ? stopRecording : startRecording}
                        style={{ ...styles.record, backgroundColor: isRecording ? "#A10000" : "#fff" }}
                      />
                    </View>
                    {!isRecording && <Image source={require("../assets/imgs/right.png")} />}
                  </View>
                )}
                {actions !== "Effect" && !isRecording && (
                  <View style={{ ...styles.topSelect, gap: 20, marginTop: 25 }}>
                    {actionArr.map(({ text, icon, focused }) => (
                      <Pressable key={text} onPress={() => setActions(text)}>
                        <View style={styles.center}>
                          {actions === text ? focused : icon}
                          <Text
                            style={{
                              ...styles.textCenter,
                              color: actions === text ? "#fff" : "rgba(255, 255, 255, 0.45)",
                            }}
                          >
                            {text}
                          </Text>
                        </View>
                      </Pressable>
                    ))}
                  </View>
                )}
              </View>
            </View>
          </>
        )}
      </View>
      {actions === "Effect" && (
        <AppBottomSheet closeModal={() => setActions(null)}>
          <Effects />
        </AppBottomSheet>
      )}
    </>
  );
};

export default CreateUploadvideo;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 40,
  },
  flex: {
    flexDirection: "row",
    gap: 20,
  },
  center: {
    alignItems: "center",
  },
  justifyCenter: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 45,
  },
  topSelect: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: "5%",
    paddingBottom: "3%",
    paddingHorizontal: "5%",
  },
  viewContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: "5%",
    paddingBottom: "15%",
    paddingHorizontal: "17%",
  },
  textCenter: {
    color: "rgba(255, 255, 255, 0.45)",
  },
  textLight: {
    color: "#f1fcf2",
  },
  addSound: {
    marginVertical: 15,
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: "#f1fcf2",
    alignSelf: "center",
  },
  record: {
    width: 70,
    height: 70,
    borderRadius: 99,
  },
  recordWrapper: {
    border: "8px solid rgba(255, 255, 255, 0.45)",
    borderRadius: 99,
  },
  modeBorder: {
    width: 5,
    height: 5,
    borderRadius: 99,
    marginTop: "0.5%",
    backgroundColor: "#f1fcf2",
  },
  modeBorderLive: {
    width: 5,
    height: 5,
    borderRadius: 99,
    marginTop: "0.5%",
    backgroundColor: "#a10000",
  },
  recordLine: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    alignItems: "center",
    marginTop: "4%",
  },
});
