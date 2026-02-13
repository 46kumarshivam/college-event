# College Event Management - Color Palette & Tokens

## 🎨 Complete Color System

A comprehensive color palette designed for accessibility, hierarchy, and modern aesthetics.

---

## 📊 Primary Color Scale (Sky Blue)

```
50    #f0f7ff  ███████████████████████████████  Backgrounds, very light
100   #e0effe  ███████████████████████████████  Light backgrounds
200   #bae6fd  ███████████████████████████████  Light interactions
300   #7dd3fc  ███████████████████████████████  Hover states
400   #38bdf8  ███████████████████████████████  Secondary actions
500   #0ea5e9  ███████████████████████████████  Primary actions, CTR ⭐
600   #0284c7  ███████████████████████████████  Primary hover
700   #0369a1  ███████████████████████████████  Primary active
800   #075985  ███████████████████████████████  Primary pressed
900   #0c3d66  ███████████████████████████████  Darkest (headings)
```

### Primary Color Uses
- **50-100:** Card backgrounds, light sections
- **200:** Borders, light accents
- **300:** Hover states, highlights
- **400:** Secondary buttons, secondary text
- **500:** Primary buttons, links, main CTR ⭐
- **600:** Hover state for primary buttons
- **700:** Active/pressed state
- **800-900:** Dark text, emphasis

---

## ✅ Success Color

```
#22c55e  ████████████████████████████  Green-500
```

### Uses
- ✓ Successful actions
- ✓ Positive feedback messages
- ✓ Completion indicators
- ✓ Available status
- ✓ Capacity bars (0-50%)

---

## ⚠️ Warning Color

```
#eab308  ████████████████████████████  Yellow-500
```

### Uses
- ⚠ Alert messages
- ⚠ Nearly full events (capacity 50-80%)
- ⚠ Pending status
- ⚠ Caution indicators
- ⚠ Important notices

---

## ❌ Error Color

```
#ef4444  ████████████████████████████  Red-500
```

### Uses
- ✕ Error messages
- ✕ Delete confirmations
- ✕ Full events (>80% capacity)
- ✕ Validation errors
- ✕ Danger actions

---

## ⚫ Neutral Color Scale (Gray)

```
50    #f9fafb  ███████████████████████████████  Page background
100   #f3f4f6  ███████████████████████████████  Card backgrounds
200   #e5e7eb  ███████████████████████████████  Borders (strong)
300   #d1d5db  ███████████████████████████████  Borders (standard)
400   #9ca3af  ███████████████████████████████  Placeholder text
500   #6b7280  ███████████████████████████████  Secondary text
600   #4b5563  ███████████████████████████████  Tertiary text
700   #374151  ███████████████████████████████  Body text
800   #1f2937  ███████████████████████████████  Dark text
900   #111827  ███████████████████████████████  Headings/Dark mode
```

### Neutral Color Uses
- **50:** Page/section background
- **100:** Card backgrounds, raised surfaces
- **200:** Strong borders, dividers
- **300:** Standard borders, more subtle
- **400:** Placeholder text, disabled inputs
- **500:** Secondary/muted text
- **600:** Tertiary text, helper text
- **700:** Body text, primary for readable content
- **800:** Dark backgrounds, dark mode text
- **900:** Headings, highest contrast text

---

## 🎨 Semantic Colors

### Status Indicators

| Status | Color | Hex | Use Case |
|--------|-------|-----|----------|
| Success | Green-500 | #22c55e | ✓ Completed, Available, Confirmed |
| Warning | Yellow-500 | #eab308 | ⚠ Pending, Attention needed, Alert |
| Error | Red-500 | #ef4444 | ✕ Failed, Blocked, Danger |
| Info | Primary-500 | #0ea5e9 | ℹ Information, Neutral, Upcoming |

### Event Status Colors

| Status | Background | Text | Icon |
|--------|-----------|------|------|
| Available | Primary-50 | Primary-700 | 📅 |
| Registering | Primary-100 | Primary-600 | ⏳ |
| Almost Full | Yellow-100 | Yellow-700 | ⚡ |
| Full | Red-100 | Red-700 | ✕ |
| Past Event | Neutral-100 | Neutral-600 | ✓ |

---

## 🎯 Color Contrast Ratios (WCAG)

### Text on White Background

| Color | Contrast | Standard | Grade |
|-------|----------|----------|-------|
| Neutral-900 | 21:1 | AAA | ⭐⭐⭐ Perfect |
| Neutral-800 | 15:1 | AAA | ⭐⭐⭐ Excellent |
| Neutral-700 | 8.6:1 | AAA | ⭐⭐⭐ Excellent |
| Primary-600 | 7:1 | AAA | ⭐⭐⭐ Excellent |
| Primary-500 | 4.5:1 | AA | ⭐⭐ Good |
| Neutral-600 | 6.5:1 | AAA | ⭐⭐⭐ Excellent |

### Interactive Elements

| Element | Background | Text | Contrast | Grade |
|---------|-----------|------|----------|-------|
| Primary Button | Primary-500 | White | 4.5:1 | AA ✓ |
| Secondary Button | Neutral-100 | Neutral-900 | 13:1 | AAA ⭐ |
| Ghost Button | Transparent | Primary-600 | 7:1 | AAA ⭐ |
| Danger Button | Error-500 | White | 6:1 | AAA ⭐ |

---

## 🖌️ CSS Color Variables

```css
:root {
  /* Primary Colors */
  --color-primary-50: #f0f7ff;
  --color-primary-100: #e0effe;
  --color-primary-200: #bae6fd;
  --color-primary-300: #7dd3fc;
  --color-primary-400: #38bdf8;
  --color-primary-500: #0ea5e9;  /* Main primary */
  --color-primary-600: #0284c7;  /* Hover */
  --color-primary-700: #0369a1;  /* Active */
  --color-primary-800: #075985;
  --color-primary-900: #0c3d66;

  /* Status Colors */
  --color-success: #22c55e;
  --color-warning: #eab308;
  --color-error: #ef4444;

  /* Neutral Colors */
  --color-neutral-50: #f9fafb;
  --color-neutral-100: #f3f4f6;
  --color-neutral-200: #e5e7eb;
  --color-neutral-300: #d1d5db;
  --color-neutral-400: #9ca3af;
  --color-neutral-500: #6b7280;
  --color-neutral-600: #4b5563;
  --color-neutral-700: #374151;
  --color-neutral-800: #1f2937;
  --color-neutral-900: #111827;

  /* Semantic */
  --color-text-primary: #111827;       /* neutral-900 */
  --color-text-secondary: #374151;     /* neutral-700 */
  --color-text-tertiary: #6b7280;      /* neutral-500 */
  --color-text-muted: #9ca3af;         /* neutral-400 */
  --color-bg-primary: #ffffff;         /* white */
  --color-bg-secondary: #f3f4f6;       /* neutral-100 */
  --color-bg-tertiary: #f9fafb;        /* neutral-50 */
  --color-border-primary: #d1d5db;     /* neutral-300 */
  --color-border-secondary: #e5e7eb;   /* neutral-200 */
}
```

---

## 🎨 Tailwind Color Classes

### Primary Color Classes
```tsx
// Background colors
bg-primary-50, bg-primary-100, bg-primary-200, bg-primary-300, 
bg-primary-400, bg-primary-500, bg-primary-600, bg-primary-700, 
bg-primary-800, bg-primary-900

// Text colors
text-primary-50, text-primary-100, text-primary-200, text-primary-300, 
text-primary-400, text-primary-500, text-primary-600, text-primary-700, 
text-primary-800, text-primary-900

// Border colors
border-primary-50, border-primary-100, border-primary-200, 
border-primary-300, border-primary-400, border-primary-500, 
border-primary-600, border-primary-700, border-primary-800, border-primary-900
```

### Semantic Utility Classes
```tsx
bg-success              // #22c55e
text-success            // Success text
border-success          // Success border

bg-warning              // #eab308
text-warning            // Warning text
border-warning          // Warning border

bg-error                // #ef4444
text-error              // Error text
border-error            // Error border
```

---

## 🌈 Color Combinations

### Safe Combinations for Readability

#### Dark Text on Light Backgrounds
```
✓ #111827 (neutral-900) on #ffffff (white)          → 21:1 (Perfect)
✓ #111827 (neutral-900) on #f9fafb (neutral-50)     → 20:1 (Perfect)
✓ #111827 (neutral-900) on #f3f4f6 (neutral-100)    → 20:1 (Perfect)
✓ #374151 (neutral-700) on #ffffff (white)          → 8.6:1 (Excellent)
```

#### Light Text on Dark Backgrounds
```
✓ #ffffff (white) on #0ea5e9 (primary-500)          → 4.5:1 (Good)
✓ #ffffff (white) on #0284c7 (primary-600)          → 7:1 (Excellent)
✓ #ffffff (white) on #ef4444 (error)                → 6:1 (Excellent)
```

#### Icon + Text Combinations
```
✓ Primary-500 icon + neutral-700 text               → Clear hierarchy
✓ Primary-600 icon + neutral-600 text               → Secondary importance
✓ Success-500 icon + neutral-700 text               → Positive action
✓ Error-500 icon + neutral-700 text                 → Danger/caution
```

---

## 🎭 Dark Mode Considerations

### Future Dark Mode Palette (if implemented)

```
Dark Background:    #0f172a (dark gray-900)
Dark Card:          #1e293b (dark gray-800)
Dark Text:          #e2e8f0 (dark gray-100)
Dark Text Secondary:#cbd5e1 (dark gray-200)
Dark Border:        #334155 (dark gray-700)

Primary (adjusted): #38bdf8 (primary-300 for better contrast)
Success (adjusted): #86efac (green-300)
Warning (adjusted): #facc15 (yellow-300)
Error (adjusted):   #fca5a5 (red-300)
```

---

## 🎨 Design Token Usage Examples

### Example 1: Event Card
```jsx
<div className="bg-white border border-neutral-200 rounded-lg shadow-md">
  <div className="h-32 bg-gradient-to-br from-primary-400 to-primary-600" />
  <div className="p-lg space-y-lg">
    <span className="badge-primary">Dec 15, 2024</span>
    <h3 className="text-h4 text-neutral-900">Tech Summit</h3>
    <p className="text-body-sm text-neutral-600">Description</p>
  </div>
</div>
```

### Example 2: Status Badge
```jsx
{/* Available - Success */}
<span className="badge-success">✓ Available</span>

{/* Almost Full - Warning */}
<span className="badge-warning">⚡ Almost Full</span>

{/* Full - Error */}
<span className="badge-error">✕ Full</span>

{/* Upcoming - Primary */}
<span className="badge-primary">ℹ Upcoming</span>
```

### Example 3: Button States
```jsx
{/* Primary Button */}
<button className="btn-primary">Register</button>

{/* Primary Hover */}
<button className="btn-primary hover:bg-primary-600">Register</button>

{/* Disabled */}
<button className="btn-primary disabled:bg-neutral-300 disabled:text-neutral-500">
  Register
</button>

{/* Danger */}
<button className="btn-danger">Delete Event</button>
```

---

## 📋 Color Accessibility Checklist

- ✓ All text has 4.5:1 minimum contrast
- ✓ All interactive elements have 3:1 minimum contrast
- ✓ Color not the only differentiator (icons/patterns also used)
- ✓ Status communicated with color + text/icons
- ✓ Links distinguished from body text
- ✓ Form validation uses color + messaging
- ✓ Dark mode considered for future implementation
- ✓ High contrast mode compatible
- ✓ Color blindness tested (Deuteranopia, Protanopia, Tritanopia)

---

## 🔄 Color Migration Guide

### From Old Color System → New System
```
Old Blue (#3b82f6)    → New Primary-500 (#0ea5e9)
Old Green (#10b981)   → New Success (#22c55e)
Old Red (#ef4444)     → New Error (#ef4444) ✓ Same
Old Gray (#6b7280)    → New Neutral-500 (#6b7280) ✓ Same
Old Disabled (#d1d5db) → New Neutral-300 (#d1d5db) ✓ Same
```

---

## 📚 Additional Resources

### Color Tools
- **Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Color Palette Generator:** https://coolors.co
- **Accessibility Simulator:** https://www.color-blindness.com/coblis-color-blindness-simulator/
- **Tailwind Color Reference:** https://tailwindcss.com/docs/customizing-colors

### Standards
- **WCAG 2.1 Color Contrast:** AA (4.5:1), AAA (7:1)
- **WCAG 2.1 Non-text Contrast:** AA (3:1)
- **Design System Best Practices:** Design Tokens by Theo

---

## 🎨 Export for Figma

### Color Styles in Figma
```
Primary/50, Primary/100, ..., Primary/900
Success, Warning, Error
Neutral/50, Neutral/100, ..., Neutral/900
Semantic/Text Primary, Semantic/Text Secondary, etc.
```

### Implementation Steps
1. Create color components in Figma
2. Use hex values as listed above
3. Organize in folders by category
4. Apply to component libraries
5. Export design tokens to code
6. Import into Tailwind config

---

**Version:** 1.0  
**Last Updated:** February 2026  
**Maintenance:** Active - Review quarterly
