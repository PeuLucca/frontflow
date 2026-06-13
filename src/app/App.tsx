import { useReducer } from "react";
import {
  createInitialGameState,
  gameReducer,
} from "../modules/game/game.reducer";
import { HomeScreen } from "../modules/home/HomeScreen";
import { IntroScreen } from "../modules/intro/IntroScreen";
import { DraftScreen } from "../modules/draft/DraftScreen";
import { RivalDraftScreen } from "../modules/rival/RivalDraftScreen";
import { SeasonScreen } from "../modules/season/SeasonScreen";
import { ResultScreen } from "../modules/result/ResultScreen";

function App() {
  const [state, dispatch] = useReducer(gameReducer, createInitialGameState());

  switch (state.status) {
    case "home":
      return <HomeScreen onStart={() => dispatch({ type: "START_INTRO" })} />;

    case "intro":
      return (
        <IntroScreen
          state={state}
          onContinue={() => dispatch({ type: "START_DRAFT" })}
        />
      );

    case "draft":
      return (
        <DraftScreen
          state={state}
          onPick={(characterId) =>
            dispatch({ type: "PICK_CHARACTER", characterId })
          }
        />
      );

    case "rival_draft":
      return (
        <RivalDraftScreen
          state={state}
          onContinue={() => dispatch({ type: "CONTINUE_TO_SEASON" })}
        />
      );

    case "season":
      return (
        <SeasonScreen
          state={state}
          onContinue={() => dispatch({ type: "SHOW_RESULT" })}
        />
      );

    case "result":
      return (
        <ResultScreen
          state={state}
          onRestart={() => dispatch({ type: "RESTART" })}
        />
      );

    default:
      return null;
  }
}

export default App;
