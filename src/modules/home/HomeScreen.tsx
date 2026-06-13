import { Layout } from "../../shared/components/Layout";
import { Button } from "../../shared/components/Button";
import { strings } from "../../shared/i18n/strings";
import "./HomeScreen.css";

type HomeScreenProps = {
  onStart: () => void;
};

export function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <Layout>
      <div className="home">
        <p className="home__eyebrow">{strings.home.eyebrow}</p>
        <h1 className="home__title">{strings.home.title}</h1>
        <p className="home__subtitle">{strings.home.subtitle}</p>
        <Button onClick={onStart} fullWidth>
          {strings.home.startButton}
        </Button>
      </div>
    </Layout>
  );
}
