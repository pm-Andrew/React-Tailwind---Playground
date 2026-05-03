# Tailwind CSS Crash Course

Tailwind is a **utility-first CSS framework**. Instead of writing custom CSS, you apply pre-built classes directly in your HTML.

---

## The Core Idea

Traditional CSS:
```css
.heading {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
}
```

Tailwind equivalent:
```html
<h2 class="text-2xl text-white mb-4">Hello</h2>
```

Same result, no CSS file needed.

---

## Spacing (Margin & Padding)

Tailwind uses a numeric scale where `1 = 0.25rem (4px)`.

| Class | What it does |
|---|---|
| `m-4` | margin all sides |
| `mt-4` | margin top |
| `mb-4` | margin bottom |
| `ml-4` | margin left |
| `mr-4` | margin right |
| `mx-4` | margin left + right |
| `my-4` | margin top + bottom |
| `p-4` | padding all sides |
| `pt-4` | padding top |
| `px-4` | padding left + right |
| `py-4` | padding top + bottom |

---

## Typography

| Class | What it does |
|---|---|
| `text-sm` | small text |
| `text-base` | default size |
| `text-lg` | large |
| `text-xl` | extra large |
| `text-2xl` | 2x large |
| `text-3xl` | 3x large |
| `text-4xl` | 4x large |
| `font-normal` | normal weight |
| `font-medium` | medium weight |
| `font-semibold` | semibold |
| `font-bold` | bold |
| `text-center` | center align |
| `text-left` | left align |
| `text-right` | right align |
| `uppercase` | ALL CAPS |
| `leading-tight` | tight line height |
| `leading-relaxed` | relaxed line height |
| `tracking-wide` | wider letter spacing |

---

## Colors

Tailwind has a full color palette. The pattern is `{property}-{color}-{shade}`.

Shades go from `100` (lightest) to `900` (darkest).

```html
<p class="text-blue-500">Blue text</p>
<div class="bg-gray-900">Dark background</div>
<button class="bg-green-600 text-white">Button</button>
<div class="border border-red-400">Red border</div>
```

Common colors: `gray`, `red`, `orange`, `yellow`, `green`, `blue`, `purple`, `pink`, `white`, `black`

---

## Sizing

| Class | What it does |
|---|---|
| `w-full` | width 100% |
| `w-1/2` | width 50% |
| `w-64` | width 16rem |
| `h-full` | height 100% |
| `h-screen` | height 100vh |
| `max-w-lg` | max width large |
| `max-w-xl` | max width extra large |
| `max-w-2xl` | max width 2x large |
| `min-h-screen` | min height 100vh |

---

## Display & Layout

| Class | What it does |
|---|---|
| `block` | display block |
| `inline` | display inline |
| `inline-block` | display inline-block |
| `hidden` | display none |
| `flex` | display flex |
| `grid` | display grid |

---

## Flexbox

```html
<div class="flex items-center justify-between">
  <p>Left</p>
  <p>Right</p>
</div>
```

| Class | What it does |
|---|---|
| `flex` | enable flexbox |
| `flex-row` | horizontal (default) |
| `flex-col` | vertical |
| `items-center` | align center (cross axis) |
| `items-start` | align start |
| `items-end` | align end |
| `justify-center` | justify center (main axis) |
| `justify-between` | space between |
| `justify-around` | space around |
| `gap-4` | gap between flex items |
| `flex-wrap` | allow wrapping |

---

## Grid

```html
<div class="grid grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

| Class | What it does |
|---|---|
| `grid` | enable grid |
| `grid-cols-2` | 2 columns |
| `grid-cols-3` | 3 columns |
| `grid-cols-4` | 4 columns |
| `gap-4` | gap between all cells |
| `col-span-2` | span 2 columns |

---

## Borders & Rounded Corners

| Class | What it does |
|---|---|
| `border` | 1px border |
| `border-2` | 2px border |
| `border-gray-300` | border color |
| `rounded` | small border radius |
| `rounded-md` | medium border radius |
| `rounded-lg` | large border radius |
| `rounded-full` | fully rounded (pill/circle) |

---

## Shadows

| Class | What it does |
|---|---|
| `shadow-sm` | small shadow |
| `shadow` | default shadow |
| `shadow-md` | medium shadow |
| `shadow-lg` | large shadow |
| `shadow-xl` | extra large shadow |

---

## Responsive Design

Tailwind is **mobile-first**. You apply a base style, then override at larger breakpoints.

| Prefix | Breakpoint |
|---|---|
| *(none)* | all screens (mobile first) |
| `sm:` | 640px and up |
| `md:` | 768px and up |
| `lg:` | 1024px and up |
| `xl:` | 1280px and up |
| `2xl:` | 1536px and up |

```html
<h1 class="text-xl sm:text-2xl md:text-4xl">
  Gets bigger on larger screens
</h1>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  1 col on mobile, 2 on tablet, 3 on desktop
</div>
```

---

## Hover & Focus States

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white">
  Hover me
</button>

<input class="border focus:border-blue-500 focus:outline-none">
```

| Prefix | When it applies |
|---|---|
| `hover:` | on mouse hover |
| `focus:` | on keyboard focus |
| `active:` | while clicking |
| `disabled:` | when disabled |

---

## Positioning

| Class | What it does |
|---|---|
| `relative` | position relative |
| `absolute` | position absolute |
| `fixed` | position fixed |
| `sticky` | position sticky |
| `top-0` | top: 0 |
| `left-0` | left: 0 |
| `z-10` | z-index 10 |
| `z-50` | z-index 50 |

---

## Opacity & Visibility

| Class | What it does |
|---|---|
| `opacity-0` | fully transparent |
| `opacity-50` | 50% transparent |
| `opacity-100` | fully visible |
| `invisible` | hidden but takes up space |

---

## Quick Reference: Common Patterns

**Centered container:**
```html
<div class="max-w-4xl mx-auto px-4">
```

**Navbar:**
```html
<nav class="flex items-center justify-between px-6 py-4 bg-gray-900">
```

**Card:**
```html
<div class="bg-white rounded-lg shadow-md p-6">
```

**Button:**
```html
<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
```

**Hero section:**
```html
<section class="min-h-screen flex flex-col items-center justify-center text-center px-4">
```

---

## Tips

- You can stack as many classes as you need
- Order of classes doesn't matter
- Use responsive prefixes (`sm:`, `md:`, `lg:`) constantly — think mobile first
- If you find yourself repeating the same class combos, consider extracting them into a component
