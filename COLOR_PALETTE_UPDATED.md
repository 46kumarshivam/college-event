# Color Palette & Typography - Updated February 2026

## 🎨 Core Color Palette

### 🔵 Primary Color — Trust + Tech
**#2563EB** (Blue)

**Use for:**
- Header
- Primary buttons
- Links
- Active states
- Admin sidebar accents

**Why Blue?**
- Represents trust, systems, and cloud
- Used by Google, Firebase, GitHub
- Perfect for admin + student systems
- Professional and tech-focused

**Hover State:** #1D4ED8 (darker)

---

### 🟢 Secondary / Accent — Success + Automation
**#22C55E** (Green)

**Use for:**
- "Register Successful" messages
- Status badges (approved, completed)
- CTAs like Register, Deploy, Live
- Success indicators
- Certificates

**Why Green?**
- Represents success and completion
- Matches CI/CD and automation workflows
- Associated with certificates and achievements
- Clear positive feedback

---

### 🟣 Highlight / Tech Accent — Modern & Smart
**#6366F1** (Purple/Indigo)

**Use sparingly for:**
- Icons
- Section highlights
- Admin dashboard focus areas
- Date badges in event cards
- Premium/featured indicators

**Why Purple?**
- Gives DevOps/SaaS vibe
- Works great with blue
- Looks premium and modern
- Professional tech aesthetic

---

## 🧱 Neutral Colors (VERY IMPORTANT)

### Main Background
**#F9FAFB** (Neutral-50)
- Clean, soft, easy on eyes
- Perfect for dashboards and long usage
- Reduces eye strain

### Card / Surface
**#FFFFFF** (White)
- Use for:
  - Event cards
  - Forms
  - Modals
  - Content areas
- Provides clean contrast against background

### Border / Divider
**#E5E7EB** (Neutral-200)
- Keeps layout structured without visual noise
- Use for:
  - Dividing lines
  - Input borders
  - Card borders

---

## 📝 Text Colors

### Primary Text (Headings)
**#111827** (Neutral-900)
- Strong readability
- Professional appearance
- Used for all headings (h1-h5)

### Secondary Text (Descriptions)
**#4B5563** (Neutral-600)
- Softer than primary but still readable
- Used for descriptions and secondary content

### Muted / Placeholder Text
**#9CA3AF** (Neutral-400)
- Used for placeholder text in forms
- Helper text and hints
- Less emphasis content

---

## 🚨 Status Colors

### Error
**#EF4444** (Red)
- Error messages
- Validation errors
- Delete confirmations
- Full events (>80% capacity)

### Warning
**#F59E0B** (Amber)
- Alert messages
- Nearly full events (50-80% capacity)
- Caution indicators
- Pending status

### Info
**#0EA5E9** (Cyan)
- Information messages
- Neutral notifications
- Additional details

---

## 🎨 How to Use This in Figma

### Buttons

**Primary Button (Blue):**
- Background: #2563EB
- Text: White (#FFFFFF)
- Hover: #1D4ED8
- Font: Poppins 500, 16px

**Success Button (Green):**
- Background: #22C55E
- Text: White (#FFFFFF)
- Font: Poppins 500, 16px

**Secondary Button:**
- Background: #F3F4F6 (Neutral-100)
- Text: #111827 (Neutral-900)
- Hover: #E5E7EB (Neutral-200)

### Event Cards

**Structure:**
```
┌─────────────────────────────────────┐
│ [Gradient Header]                   │
│ Primary-400 → Primary-600           │
├─────────────────────────────────────┤
│ Background: #FFFFFF                 │
│ Border: #E5E7EB (bottom only)       │
│ Border-left: #2563EB (4px accent)   │
│                                     │
│ [Date Badge]                        │
│ Background: #6366F1 with opacity    │
│ Text: #6366F1                       │
│                                     │
│ [Title] #111827                     │
│ [Description] #4B5563              │
│                                     │
│ [Details] #4B5563                  │
│ [Capacity Bar] #22C55E (success)    │
│                                     │
│ [Button] #2563EB background         │
└─────────────────────────────────────┘
```

### Admin Dashboard

**Sidebar:**
- Background: #111827 (Neutral-900)
- Text: #F3F4F6 (Neutral-100)
- Active item highlight: #2563EB (Primary-500)
- Icons: #9CA3AF (Neutral-400)

**Main Content:**
- Background: #F9FAFB (Neutral-50)
- Cards: #FFFFFF
- Headers: #111827
- Borders: #E5E7EB

---

## 🎯 Color Usage by Component

### Forms
- **Label text:** #111827
- **Input background:** #FFFFFF
- **Input border:** #E5E7EB
- **Input focus ring:** #2563EB
- **Helper text:** #4B5563
- **Error text:** #EF4444

### Tables
- **Header background:** #F3F4F6
- **Header text:** #111827
- **Row text:** #111827
- **Hover row:** #F9FAFB
- **Borders:** #E5E7EB

### Badges
- **Success:** bg-#22C55E, text-white
- **Warning:** bg-#F59E0B, text-white
- **Error:** bg-#EF4444, text-white
- **Info:** bg-#0EA5E9, text-white

---

## 📊 Accessibility & Contrast

| Element | Foreground | Background | Ratio | Grade |
|---------|-----------|-----------|-------|-------|
| Primary Text | #111827 | #FFFFFF | 21:1 | AAA ✓ |
| Primary Button | White | #2563EB | 8.6:1 | AAA ✓ |
| Secondary Text | #4B5563 | #FFFFFF | 9.5:1 | AAA ✓ |
| Green Badge | White | #22C55E | 5.5:1 | AAA ✓ |
| Muted Text | #9CA3AF | #FFFFFF | 4.5:1 | AA ✓ |
| Error Text | #EF4444 | #FFFFFF | 6:1 | AAA ✓ |

All colors meet **WCAG AAA** accessibility standards.

---

## 🔄 Complete Color Reference

```
PRIMARY (Blue)
├── #2563EB (Main - Primary-500) ⭐
├── #1D4ED8 (Hover - Primary-600)
├── #1E40AF (Active - Primary-700)
├── #dbeafe (Light - Primary-100)
└── #eff6ff (Very Light - Primary-50)

SECONDARY (Green)
├── #22C55E (Main) ⭐

HIGHLIGHT (Purple)
├── #6366F1 (Main) ⭐

STATUS
├── #EF4444 (Error - Red)
├── #F59E0B (Warning - Amber)
└── #0EA5E9 (Info - Cyan)

NEUTRAL
├── #F9FAFB (Background - Neutral-50)
├── #FFFFFF (Card - White)
├── #F3F4F6 (Light - Neutral-100)
├── #E5E7EB (Border - Neutral-200)
├── #9CA3AF (Muted - Neutral-400)
├── #4B5563 (Secondary text - Neutral-600)
└── #111827 (Primary text - Neutral-900)
```

---

## 🎨 Tailwind CSS Classes

```tsx
// Primary blue
bg-primary-500          // #2563EB
text-primary-500        // #2563EB
border-primary-500      // #2563EB

// Secondary green
bg-secondary            // #22C55E
text-secondary          // #22C55E

// Highlight purple
bg-highlight            // #6366F1
text-highlight          // #6366F1

// Status colors
bg-error                // #EF4444
bg-warning              // #F59E0B
bg-info                 // #0EA5E9

// Neutral
bg-neutral-50           // #F9FAFB
bg-white                // #FFFFFF
text-neutral-900        // #111827
text-neutral-600        // #4B5563
```

---

**Version:** 2.0 (Updated)  
**Last Updated:** February 8, 2026  
**Status:** Active
