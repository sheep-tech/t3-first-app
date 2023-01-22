export type flowState = "browsing poster" | "reading movie info" | "choosing seat";
type PosterActionType = "set poster flow state";

interface PosterAction {
  type: PosterActionType;
  payload: flowState;
}
interface PosterState {
  state: flowState;
}

export default function PosterReducer(
  state: PosterState,
  action: PosterAction
) {
  const { type, payload } = action;
  switch (type) {
    case "set poster flow state":
      return {
        ...state,
        state: payload,
      };
    default:
      return state;
  }
}
