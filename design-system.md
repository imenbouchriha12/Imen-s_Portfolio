# Lumina Portfolio System - Design System

## Project: Luminous Dev Portfolio (17713584184029272829)

### Overview
Design system for a high-end software engineering portfolio with a sophisticated, feminine, and tech-forward aesthetic using glassmorphism.

### Theme Configuration

- **Color Mode**: DARK
- **Primary (Electric Pink)**: #fbabff (#d946ef override)
- **Secondary (Vibrant Violet)**: #d0bcff (#8b5cf6 override)
- **Tertiary**: #adc6ff (#3b82f6 override)
- **Background**: #0b1326
- **Neutral**: #0f172a
- **Roundness**: ROUND_EIGHT
- **Font**: Montserrat (headlines) / Inter (body + labels)
- **Spacing Scale**: 2
- **Color Variant**: FIDELITY

### Typography

| Token | Font | Size | Weight | Line Height |
|-------|------|------|--------|-------------|
| display | Montserrat | 64px | 800 | 1.1 |
| display-mobile | Montserrat | 40px | 800 | 1.2 |
| headline-lg | Montserrat | 32px | 700 | 1.3 |
| headline-sm | Montserrat | 24px | 600 | 1.4 |
| body-lg | Inter | 18px | 400 | 1.6 |
| body-md | Inter | 16px | 400 | 1.6 |
| label-caps | Inter | 12px | 700 | 1 |

### Spacing

| Token | Value |
|-------|-------|
| container-max | 1280px |
| gutter | 2rem |
| margin-x | 1.5rem |
| stack-lg | 4rem |
| stack-md | 1.5rem |
| stack-sm | 0.5rem |

### Named Colors (Material 3)

```json
{
  "background": "#0b1326",
  "primary": "#fbabff",
  "primary_container": "#e14ef6",
  "secondary": "#d0bcff",
  "secondary_container": "#571bc1",
  "tertiary": "#adc6ff",
  "tertiary_container": "#4d8eff",
  "error": "#ffb4ab",
  "error_container": "#93000a",
  "surface": "#0b1326",
  "surface_dim": "#0b1326",
  "surface_bright": "#31394d",
  "surface_container": "#171f33",
  "surface_container_low": "#131b2e",
  "surface_container_lowest": "#060e20",
  "surface_container_high": "#222a3d",
  "surface_container_highest": "#2d3449",
  "surface_variant": "#2d3449",
  "on_surface": "#dae2fd",
  "on_surface_variant": "#d6c0d3",
  "on_background": "#dae2fd",
  "on_primary": "#580065",
  "on_primary_container": "#4d0059",
  "on_secondary": "#3c0091",
  "on_secondary_container": "#c4abff",
  "on_tertiary": "#002e6a",
  "on_tertiary_container": "#00285d",
  "on_error": "#690005",
  "on_error_container": "#ffdad6",
  "outline": "#9f8b9d",
  "outline_variant": "#524251",
  "inverse_surface": "#dae2fd",
  "inverse_on_surface": "#283044",
  "inverse_primary": "#a200ba",
  "surface_tint": "#fbabff"
}
```

### Style Guidelines
- **Glassmorphism** as primary structural metaphor with `backdrop-filter: blur(12px)`
- Surface gradients: linear gradient Secondary-to-Primary at 135° with 15-25% opacity
- Borders: 1px solid with 20% white opacity
- Shadows: colored ambient shadows (Violet/Pink) at 10% opacity
- Buttons: pink-to-violet gradient with white inner-glow, hover scale 1.05x
- Cards: glass panels with "glass shine" diagonal effect on hover
- Tags: semi-transparent capsules with 1px border, fill on hover
- Corners: 1rem standard, 1.5rem large containers, pill-shaped buttons
