# Image Strategy Spec

## Goal

Every character must appear with a real image.

## MVP

Use static images.

```txt
public/images/characters
```

Example:

```txt
public/images/characters/georgina.jpg
public/images/characters/antonela.jpg
public/images/characters/gigi.jpg
```

## Character Object

```ts
{
  imageUrl: "/images/characters/georgina.jpg"
}
```

## Fallback

If image fails:

- show placeholder
- show initials
- never break UI

## Mobile Considerations

- Avatar sizes (`sm` / `md` / `lg`) must remain proportional and legible
  on 360px-wide screens - large avatars should not force horizontal
  scrolling or push action buttons off-screen.
- Reserve image dimensions in CSS so a loading/failed image does not
  cause layout shift on small viewports.
- The initials fallback uses the character's real `name` and is
  unaffected by the pt-BR interface language.

## Future

Later:

- image management panel
- cloud storage
- image optimization