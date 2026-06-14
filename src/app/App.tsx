import { useEffect, useReducer, type ReactNode } from "react";
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import { ROUTES } from "./routes";

function GameRoutes() {
  const [state, dispatch] = useReducer(gameReducer, createInitialGameState());
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const target = ROUTES[state.status];
    if (location.pathname !== target) {
      navigate(target, { replace: true });
    }
  }, [state.status, location.pathname, navigate]);

  let screen: ReactNode;

  switch (state.status) {
    case "home":
      screen = <HomeScreen onStart={() => dispatch({ type: "START_INTRO" })} />;
      break;

    case "intro":
      screen = (
        <IntroScreen
          state={state}
          onContinue={() => dispatch({ type: "START_DRAFT" })}
        />
      );
      break;

    case "draft":
      screen = (
        <DraftScreen
          state={state}
          onPick={(characterId) =>
            dispatch({ type: "PICK_CHARACTER", characterId })
          }
        />
      );
      break;

    case "rival_draft":
      screen = (
        <RivalDraftScreen
          state={state}
          onContinue={() => dispatch({ type: "CONTINUE_TO_SEASON" })}
        />
      );
      break;

    case "season":
      screen = (
        <SeasonScreen
          state={state}
          onContinue={() => dispatch({ type: "SHOW_RESULT" })}
        />
      );
      break;

    case "result":
      screen = (
        <ResultScreen
          state={state}
          onRestart={() => dispatch({ type: "RESTART" })}
        />
      );
      break;
  }

  return (
    <Routes>
      <Route path={ROUTES.home} element={screen} />
      <Route path={ROUTES.intro} element={screen} />
      <Route path={ROUTES.draft} element={screen} />
      <Route path={ROUTES.rival_draft} element={screen} />
      <Route path={ROUTES.season} element={screen} />
      <Route path={ROUTES.result} element={screen} />
      <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
    </Routes>
  );
}

function App() {
  return (
    <HashRouter>
      <GameRoutes />
    </HashRouter>
  );
}

export default App;
