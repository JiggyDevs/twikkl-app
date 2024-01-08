import { useCallback, useEffect, useRef, useState } from "react";

export const useFormField = <T extends Record<string, any>>(defaultFormFields: T) => {
  const [form, setForm] = useState<T>(defaultFormFields);

  const updateField = (field: keyof T, value: any) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
  };

  const clearForm = () => {
    setForm(defaultFormFields);
  };

  return {
    form,
    updateField,
    clearForm,
  };
};

export const useCountdown = (durationInSec: number = 60, delay: number = 1000, countDiff: number = 1) => {
  const [countDown, setCountDown] = useState(durationInSec);
  const timerId = useRef<NodeJS.Timer | null>(null);

  const handleCountDownInterval = useCallback(() => {
    const id = setInterval(() => {
      setCountDown((currentCountDown) => {
        if (currentCountDown > 0) {
          return currentCountDown - countDiff;
        } else {
          timerId.current && clearInterval(timerId.current);
          return 0;
        }
      });
    }, delay);
    timerId.current = id;
  }, []);

  const restartCountDown = useCallback((timeDuration: number = durationInSec) => {
    if (timerId.current) clearInterval(timerId.current);
    if (timeDuration !== 0 && timeDuration > countDiff) {
      setCountDown(timeDuration);
      handleCountDownInterval();
    } else {
      console.log("invalid duration/countdiff value");
    }
  }, []);
  const cancelResetCountDown = useCallback(() => {
    setCountDown(0);
    if (timerId.current) clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (durationInSec !== 0 && durationInSec > countDiff) {
      handleCountDownInterval();
    } else {
      console.log("invalid duration/countdiff value");
    }

    return () => {
      cancelResetCountDown();
    };
  }, []);

  return { countDown, restartCountDown, cancelResetCountDown };
};
