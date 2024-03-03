import Toast, { ToastShowParams } from "react-native-toast-message";

export const toast = ({
  type = "toastWidget",

  position = "top",

  visibilityTime = 4000,

  autoHide = true,

  topOffset = 0,

  bottomOffset = 0,
  props,
  ...params
}: ToastShowParams) =>
  Toast.show({
    type,

    position,

    visibilityTime,

    topOffset,

    bottomOffset,
    props,

    ...params,
  });

export const toastError = (message: string) =>
  toast({
    props: { message, messageType: "error" },
  });

export const toastSuccess = (message: string) =>
  toast({
    props: { message, messageType: "success" },
  });

export const toastWarning = (message: string) =>
  toast({
    props: { message, messageType: "warning" },
  });

export const bottomToastInfo = (message: string) =>
  toast({
    props: { message, messageType: "info" },
    position: "bottom",
    bottomOffset: 40,
    visibilityTime: 1000,
  });

export const toastInfo = (message: string) =>
  toast({
    props: { message, messageType: "info" },
  });

export const isValidFormSubmit = (form: object, excludeFields: string[] = []) => {
  const excludeFieldsLowerCase = excludeFields.map((field) => field.toLowerCase());

  const fieldsToValidate = excludeFieldsLowerCase.length
    ? Object.entries(form).filter((field) => !excludeFieldsLowerCase.includes(field[0].toLowerCase()))
    : Object.entries(form);

  return fieldsToValidate.every((value) => {
    return String(value[1]).trim() !== "";
  });
};

// data search filter
export const searchFilter = <T extends any[]>(data: T, query: string, filterBy?: keyof T[number]): Array<any> => {
  if (!(data && query)) return [];
  return filterBy
    ? data.filter((datum) => {
        const _query = query.toLowerCase();
        const datumQuery = datum[filterBy].toLowerCase();

        return datumQuery.includes(_query);
      })
    : data.filter((datum) => {
        const _query = query.toLowerCase();
        const datumQuery = datum.toLowerCase();
        return datumQuery.includes(_query);
      });
};
