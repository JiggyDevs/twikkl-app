import { entity, persistence } from "simpler-state";
import { remoteStorage } from "./entityHelpers";
import { Group } from "../../app/Discover";

interface IGroupEntity {
  group: null | Group;
}
const defaultState: IGroupEntity = {
  group: null,
};

export const groupEntity = entity(defaultState, [
  persistence("twikklAuth", {
    storage: remoteStorage,
    serializeFn: (val) => JSON.stringify(val),
    deserializeFn: (val) => (val === "null" ? {} : JSON.parse(val)),
  }),
]);

export const updateGroup = (group: Group) =>
  groupEntity.set(() => ({
    group,
  }));
