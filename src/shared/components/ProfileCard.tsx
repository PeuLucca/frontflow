import type { ProfileVariant } from "../data/profiles";
import "./ProfileCard.css";

type ProfileCardProps = {
  initials: string;
  name: string;
  role: string;
  tagline: string;
  variant: ProfileVariant;
};

export function ProfileCard({ initials, name, role, tagline, variant }: ProfileCardProps) {
  return (
    <div className={`profile-card profile-card--${variant}`}>
      <div className="profile-card__avatar" aria-hidden="true">
        <span className="profile-card__initials">{initials}</span>
      </div>
      <div className="profile-card__info">
        <h3 className="profile-card__name">{name}</h3>
        <p className="profile-card__role">{role}</p>
        <p className="profile-card__tagline">{tagline}</p>
      </div>
    </div>
  );
}
