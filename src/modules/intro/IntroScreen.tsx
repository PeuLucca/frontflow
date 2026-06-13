import { useState } from "react";
import type { GameState } from "../game/game.types";
import { Layout } from "../../shared/components/Layout";
import { Button } from "../../shared/components/Button";
import { ProfileCard } from "../../shared/components/ProfileCard";
import { PLAYER_PROFILE, RIVAL_PROFILE } from "../../shared/data/profiles";
import { strings } from "../../shared/i18n/strings";
import "./IntroScreen.css";

const STEP_COUNT = 4;

type IntroScreenProps = {
  state: GameState;
  onContinue: () => void;
};

export function IntroScreen({ state, onContinue }: IntroScreenProps) {
  const [step, setStep] = useState(0);
  const isLastStep = step === STEP_COUNT - 1;

  const handleAdvance = () => {
    if (isLastStep) {
      onContinue();
      return;
    }
    setStep((value) => value + 1);
  };

  return (
    <Layout>
      <div className="intro">
        <div className="intro__stage" key={step}>
          {step === 0 && <p className="intro__line">{strings.intro.step1}</p>}
          {step === 1 && (
            <p className="intro__line">{strings.intro.step2(state.rivalAgency.name)}</p>
          )}
          {step === 2 && <p className="intro__line">{strings.intro.step3}</p>}
          {step === 3 && (
            <div className="intro__reveal">
              <h1 className="intro__title">{state.playerAgency.name}</h1>
              <p className="intro__subtitle">{state.playerAgency.tagline}</p>
            </div>
          )}
        </div>

        {isLastStep && (
          <div className="intro__matchup">
            <p className="intro__matchup-label">
              {strings.profiles.matchupLabel(state.playerAgency.owner, state.rivalAgency.owner)}
            </p>
            <ProfileCard
              initials={PLAYER_PROFILE.initials}
              name={state.playerAgency.owner}
              role={strings.profiles.player.role(state.playerAgency.name)}
              tagline={strings.profiles.player.tagline}
              variant={PLAYER_PROFILE.variant}
            />
            <ProfileCard
              initials={RIVAL_PROFILE.initials}
              name={state.rivalAgency.owner}
              role={strings.profiles.rival.role(state.rivalAgency.name)}
              tagline={strings.profiles.rival.tagline}
              variant={RIVAL_PROFILE.variant}
            />
          </div>
        )}

        <div className="intro__progress" aria-hidden="true">
          {Array.from({ length: STEP_COUNT }, (_, index) => (
            <span
              key={index}
              className={`intro__dot ${index === step ? "intro__dot--active" : ""}`}
            />
          ))}
        </div>

        <Button onClick={handleAdvance} fullWidth>
          {isLastStep ? strings.intro.continueButton : strings.intro.nextButton}
        </Button>
      </div>
    </Layout>
  );
}
