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

## Future

Later:

- image management panel
- cloud storage
- image optimization