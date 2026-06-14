import { Layout } from "../../shared/components/Layout";
import { Button } from "../../shared/components/Button";
import { strings } from "../../shared/i18n/strings";
import logo from "../../assets/logo/logo-full.svg";
import "./HomeScreen.css";

type HomeScreenProps = {
  onStart: () => void;
};

export function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <Layout showHeader={false}>
      <div className="home">
        <p className="home__eyebrow">{strings.home.eyebrow}</p>
        <h1 className="home__logo">
          <img src={logo} alt={strings.home.title} />
        </h1>
        <p className="home__subtitle">{strings.home.subtitle}</p>
        <Button onClick={onStart} fullWidth>
          {strings.home.startButton}
        </Button>
        <p className="home__credits">{strings.common.credits}</p>
      </div>
    </Layout>
  );
}
