import { useState } from "react";
import "./Avatar.css";

type AvatarSize = "sm" | "md" | "lg";

type AvatarProps = {
  imageUrl: string;
  name: string;
  size?: AvatarSize;
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({ imageUrl, name, size = "md" }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`avatar avatar--${size}`}>
      {!failed ? (
        <img
          src={imageUrl}
          alt={name}
          className="avatar__image"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="avatar__initials">{getInitials(name)}</span>
      )}
    </div>
  );
}
