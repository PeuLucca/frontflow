import { Layout } from "../../shared/components/Layout";
import { Button } from "../../shared/components/Button";
import "./HomeScreen.css";

type HomeScreenProps = {
  onStart: () => void;
};

export function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <Layout>
      <div className="home">
        <p className="home__eyebrow">A Fashion Agency Rivalry</p>
        <h1 className="home__title">Front Row</h1>
        <p className="home__subtitle">
          Build your roster. Outshine Velvet House. Own the season.
        </p>
        <Button onClick={onStart} fullWidth>
          Start Season
        </Button>
      </div>
    </Layout>
  );
}
