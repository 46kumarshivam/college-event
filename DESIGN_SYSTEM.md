# College Event Management - Design System

## 🎨 Visual Style

A **clean, minimal, trustworthy, and tech-focused** design system that is easy to understand for non-technical college users.

### Core Principles
- **Dashboard-style layout** with good spacing and clarity
- **Card-based UI** for events and stats
- **Soft shadows** (8-12px radius), rounded corners
- **Accessibility-first** with high contrast text
- **Responsive design** for all devices

---

## 🔤 Typography System

**Font Family:** Poppins (Google Font)

### Headings

| Level | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| **H1** | 40px | 700 (Bold) | 120% | -0.5px | Page titles, hero text |
| **H2** | 32px | 600 (SemiBold) | 130% | -0.3px | Section titles |
| **H3** | 24px | 600 | 140% | -0.2px | Card titles, subsections |
| **H4** | 20px | 500 (Medium) | 140% | 0px | Component titles |

### Body Text

| Type | Size | Weight | Line Height | Letter Spacing | Usage |
|------|------|--------|-------------|----------------|-------|
| **Body Large** | 16px | 400 (Regular) | 160% | 0.2px | Important descriptions |
| **Body Small** | 14px | 400 | 150% | 0.3px | Secondary text |
| **Button** | 14px | 500 | - | 0.6px | Button labels (optional uppercase) |
| **Label** | 13px | 500 | - | 0.4px | Form labels |
| **Caption** | 12px | 400 | - | 0.4px | Helper/hint text |

---

## 🎯 Color Palette

### Primary Colors
- **Primary 50:** `#f0f7ff` (Background)
- **Primary 100:** `#e0effe` (Light backgrounds)
- **Primary 200:** `#bae6fd` (Borders)
- **Primary 300:** `#7dd3fc` (Hover states)
- **Primary 400:** `#38bdf8` (Secondary interactions)
- **Primary 500:** `#0ea5e9` (Main actions, CTAs)
- **Primary 600:** `#0284c7` (Hover)
- **Primary 700:** `#0369a1` (Active)
- **Primary 800:** `#075985` (Pressed)
- **Primary 900:** `#0c3d66` (Dark)

### Status Colors
- **Success:** `#22c55e` (Green-500) - Confirmations, success messages
- **Warning:** `#eab308` (Yellow-500) - Alerts, nearly full events
- **Error:** `#ef4444` (Red-500) - Errors, deletions

### Neutral Colors
- **Neutral 50:** `#f9fafb` - Main background
- **Neutral 100:** `#f3f4f6` - Card backgrounds, light sections
- **Neutral 200:** `#e5e7eb` - Borders, dividers
- **Neutral 300:** `#d1d5db` - Disabled states
- **Neutral 500:** `#6b7280` - Secondary text
- **Neutral 700:** `#374151` - Body text
- **Neutral 900:** `#111827` - Primary text

---

## 📐 Spacing System

| Size | Value | Usage |
|------|-------|-------|
| **XS** | 4px | Tight spacing between elements |
| **SM** | 8px | Padding within small components |
| **MD** | 12px | Default spacing |
| **LG** | 16px | Standard padding, gaps |
| **XL** | 24px | Section spacing |
| **2XL** | 32px | Large section spacing |
| **3XL** | 48px | Page-level spacing |

---

## 🔲 Border Radius

| Size | Value | Usage |
|------|-------|-------|
| **XS** | 4px | Minimal rounding |
| **SM** | 6px | Small components |
| **MD** | 8px | Standard cards, buttons |
| **LG** | 12px | Large cards, modals |
| **XL** | 16px | Extra large components |

---

## ✨ Shadows

| Type | Shadow | Usage |
|------|--------|-------|
| **xs** | `0 1px 2px 0 rgba(0,0,0,0.05)` | Subtle depth |
| **sm** | `0 1px 3px 0 rgba(0,0,0,0.1)` | Default hover state |
| **md** | `0 4px 6px -1px rgba(0,0,0,0.1)` | Cards, standard |
| **lg** | `0 10px 15px -3px rgba(0,0,0,0.1)` | Elevated cards |
| **xl** | `0 20px 25px -5px rgba(0,0,0,0.1)` | Modals, dropdowns |

---

## 🧩 Component Library (shadcn/ui)

### Implemented Components
- **Button** - Primary, secondary, ghost, danger variants
- **Card** - Event cards, stat cards, content containers
- **Dialog** - Event registration modal, confirmation dialogs
- **Input** - Form fields with validation states
- **Label** - Form labels with proper typography
- **Select** - Dropdown selectors (department, year, etc.)
- **Sheet** - Mobile sidebar navigation
- **Table** - Participants list, event management
- **Accordion** - Collapsible sections
- **Tooltip** - Hover information
- **Badge** - Status indicators, tags
- **Avatar** - User profile pictures
- **Progress** - Capacity indicators, loading states

### Radix UI Primitives
All components built on accessible Radix UI primitives:
- Keyboard navigation
- Screen reader support
- ARIA attributes
- Focus management

---

## 🎬 Interactive States

### Button States
1. **Default** - Normal state
2. **Hover** - Darker shade, cursor pointer
3. **Active/Pressed** - Even darker shade
4. **Disabled** - Grayed out, no pointer events
5. **Loading** - Spinner, disabled state

### Form Input States
1. **Default** - Gray border, neutral colors
2. **Focus** - Blue ring, primary color border
3. **Filled** - Text color changes to dark neutral
4. **Error** - Red border, error message below
5. **Success** - Green checkmark, success message

### Card States
1. **Default** - White background, subtle shadow
2. **Hover** - Enhanced shadow, slight scale up
3. **Selected** - Border highlight, background tint
4. **Loading** - Skeleton loader appearance

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Device |
|------------|-------|--------|
| **Mobile** | <640px | Phones |
| **Tablet** | 640px - 1024px | Tablets |
| **Desktop** | >1024px | Desktops |

### Layout Guidelines
- **Mobile:** Single column, full-width buttons
- **Tablet:** 2-column grid for event cards
- **Desktop:** 3-4 column grid, sidebar visible

---

## 🎨 Design Tokens (CSS Variables)

```css
/* Colors */
--color-primary: 14 165 233;
--color-success: 34 197 94;
--color-warning: 234 179 8;
--color-error: 239 68 68;

/* Spacing */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 12px;
--spacing-lg: 16px;
--spacing-xl: 24px;
--spacing-2xl: 32px;
--spacing-3xl: 48px;

/* Border Radius */
--radius-xs: 4px;
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
```

---

## 📝 Usage Examples

### Event Card
```tsx
<div className="event-card">
  <div className="h-32 bg-gradient-to-br from-primary-400 to-primary-600" />
  <div className="pt-lg space-y-lg">
    <div className="event-card-date">Dec 15, 2024</div>
    <h3 className="text-h4">Tech Summit 2024</h3>
    <p className="text-body-sm text-neutral-600">Join us for an amazing tech conference</p>
  </div>
</div>
```

### Stat Card
```tsx
<div className="card bg-gradient-to-br from-white to-neutral-50">
  <div className="flex items-start justify-between">
    <div>
      <p className="text-body-sm text-neutral-600">Total Events</p>
      <p className="text-4xl font-bold">12</p>
    </div>
    <div className="bg-primary-500 p-lg rounded-lg">
      <Calendar className="text-white" />
    </div>
  </div>
</div>
```

### Button Group
```tsx
<div className="flex gap-md">
  <button className="btn-primary">Register</button>
  <button className="btn-secondary">Learn More</button>
  <button className="btn-ghost">Cancel</button>
</div>
```

---

## ♿ Accessibility

### Color Contrast
- Text on backgrounds: Minimum 4.5:1 contrast ratio
- UI components: Minimum 3:1 contrast ratio
- All interactive elements keyboard accessible

### Screen Reader Support
- Semantic HTML elements
- ARIA labels for icon-only buttons
- Form field associations
- Heading hierarchy

### Keyboard Navigation
- Tab order follows visual flow
- Focus indicators visible (2px primary color ring)
- No keyboard traps
- Shortcuts documented

---

## 🚀 Performance

### Optimization Guidelines
1. Lazy load images
2. Use CSS transitions for 60fps animations
3. Minimize layout shifts (CLS < 0.1)
4. Critical CSS inlined
5. Fonts loaded with font-display: swap

---

## 📚 Documentation

For full component documentation, see:
- Individual component files in `/components/ui/`
- Tailwind configuration: `/tailwind.config.js`
- Global styles: `/styles/globals.css`
- Design tokens: CSS variables in `:root`

---

**Last Updated:** February 2026
**Design System Version:** 1.0
