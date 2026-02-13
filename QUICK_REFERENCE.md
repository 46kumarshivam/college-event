# Quick Reference Guide - Design System

## 🎨 Design System at a Glance

Fast lookup guide for the College Event Management design system.

---

## 📐 Spacing Quick Reference

```
xs  = 4px    | sm  = 8px    | md  = 12px   | lg  = 16px
xl  = 24px   | 2xl = 32px   | 3xl = 48px
```

**Usage:** Add spacing between elements
```tsx
className="space-y-lg"    // Vertical spacing of 16px
className="gap-lg"        // Grid gap of 16px
className="p-lg"          // Padding of 16px
className="m-xl"          // Margin of 24px
```

---

## 🎨 Color Quick Reference

| Color | Hex | Use | Tailwind |
|-------|-----|-----|----------|
| **Primary** | #0ea5e9 | Buttons, Links, CTR | `bg-primary-500` |
| **Primary Hover** | #0284c7 | Hover state | `hover:bg-primary-600` |
| **Success** | #22c55e | ✓ Confirmed, Available | `bg-success` |
| **Warning** | #eab308 | ⚠ Pending, Alert | `bg-warning` |
| **Error** | #ef4444 | ✕ Error, Blocked | `bg-error` |
| **Neutral Dark** | #111827 | Text, Headings | `text-neutral-900` |
| **Neutral Light** | #f9fafb | Background | `bg-neutral-50` |
| **Border** | #e5e7eb | Borders, Dividers | `border-neutral-200` |

---

## 🔤 Typography Quick Reference

### Heading Sizes
```tsx
className="text-h1"   // 40px, weight: 700 (Page Title)
className="text-h2"   // 32px, weight: 600 (Section)
className="text-h3"   // 24px, weight: 600 (Card Title)
className="text-h4"   // 20px, weight: 500 (Component)
```

### Body Text
```tsx
className="text-body-lg"    // 16px, weight: 400 (Main text)
className="text-body-sm"    // 14px, weight: 400 (Secondary)
className="text-caption"    // 12px, weight: 400 (Helper text)
className="text-label"      // 13px, weight: 500 (Form labels)
```

---

## 🧩 Button Quick Reference

```tsx
// Primary (Call-to-action)
<button className="btn-primary">Register Now</button>

// Secondary
<button className="btn-secondary">Learn More</button>

// Ghost (Minimal)
<button className="btn-ghost">Cancel</button>

// Danger
<button className="btn-danger">Delete</button>

// Disabled State
<button className="btn-primary disabled:bg-neutral-300 disabled:text-neutral-500">
  Disabled
</button>
```

---

## 🏷️ Badge Quick Reference

```tsx
// Success Badge
<span className="badge-success">✓ Available</span>

// Warning Badge
<span className="badge-warning">⚡ Almost Full</span>

// Error Badge
<span className="badge-error">✕ Full</span>

// Primary Badge
<span className="badge-primary">ℹ Upcoming</span>
```

---

## 📝 Input & Form Quick Reference

```tsx
// Label
<label className="form-label">Email Address *</label>

// Input
<input className="input-base" type="email" placeholder="example@college.edu" />

// With validation
<input className="input-base border-error" type="email" />
<p className="text-error text-caption">Invalid email format</p>

// Success state
<input className="input-base border-success" type="email" value="valid@college.edu" />
```

---

## 🎯 Card Component Quick Reference

```tsx
// Basic Card
<div className="card">
  <div className="card-header">
    <h3 className="card-title">Event Title</h3>
    <p className="card-subtitle">Event description</p>
  </div>
  <div className="card-content">
    {/* Content here */}
  </div>
</div>

// Event Card (with left border)
<div className="event-card">
  <div className="event-card-date">Dec 15</div>
  <h4 className="text-h4">Tech Summit</h4>
  <p className="text-body-sm">Event description</p>
</div>
```

---

## 🏗️ Layout Utilities Quick Reference

```tsx
// Flexbox Helpers
className="flex-between"     // flex items-center justify-between
className="flex-center"      // flex items-center justify-center
className="flex-col-center"  // flex flex-col items-center justify-center

// Grid Layout
className="grid-responsive"  // 3-col desktop → 2-col tablet → 1-col mobile
className="grid-stats"       // 4-col desktop → 2-col tablet → 1-col mobile

// Divisions & Separators
className="divider"          // border-top with spacing
```

---

## 🎨 Gradient Quick Reference

```tsx
// Primary Gradient (Blue)
className="bg-gradient-to-br from-primary-400 to-primary-600"

// Accent Gradient
className="bg-gradient-to-r from-primary-50 to-primary-100"
```

---

## 📱 Responsive Quick Reference

```tsx
// Hide on mobile, show on desktop
className="hidden lg:block"

// Stack on mobile, grid on tablet
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Full width on mobile, constrained on desktop
className="w-full md:max-w-2xl"

// Adjust padding
className="px-lg md:px-2xl lg:px-3xl"
```

---

## ♿ Accessibility Quick Reference

```tsx
// Focus Ring (on interactive elements)
className="focus-ring"       // Blue ring + offset on focus

// Icon-only button
<button aria-label="Close menu" className="btn-ghost">
  <Menu size={24} />
</button>

// Form field association
<label htmlFor="name" className="form-label">Full Name</label>
<input id="name" className="input-base" />

// Status announcement
<div role="alert" className="text-error">
  ✕ Email is invalid
</div>
```

---

## 🎯 Common Patterns

### Event Card Pattern
```tsx
<div className="event-card">
  <div className="h-32 bg-gradient-to-br from-primary-400 to-primary-600" />
  <div className="pt-lg space-y-lg">
    <div className="event-card-date">
      {format(eventDate, 'MMM dd, yyyy')}
    </div>
    <h3 className="text-h4 text-neutral-900">{event.title}</h3>
    <p className="text-body-sm text-neutral-600">{event.description}</p>
    
    <div className="py-lg border-y border-neutral-200 space-y-md">
      <div className="flex items-center gap-md">
        <Calendar size={18} className="text-primary-500" />
        <span className="text-body-sm">{event.time}</span>
      </div>
      <div className="flex items-center gap-md">
        <MapPin size={18} className="text-error" />
        <span className="text-body-sm">{event.location}</span>
      </div>
    </div>

    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-label">{event.registered}/{event.capacity}</span>
        <span className="text-caption">{percentage}%</span>
      </div>
      <div className="w-full bg-neutral-200 rounded-full h-2">
        <div 
          className={`h-full ${getCapacityColor(percentage)} rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>

    <button className="w-full btn-primary">Register Now</button>
  </div>
</div>
```

### Stat Card Pattern
```tsx
<div className="card bg-gradient-to-br from-white to-neutral-50">
  <div className="flex items-start justify-between">
    <div>
      <p className="text-body-sm text-neutral-600 mb-2">Total Events</p>
      <p className="text-4xl font-bold text-neutral-900">12</p>
    </div>
    <div className="bg-primary-500 p-lg rounded-lg">
      <Calendar size={24} className="text-white" />
    </div>
  </div>
</div>
```

### Button Group Pattern
```tsx
<div className="flex gap-md">
  <button className="btn-primary flex-1">Save Changes</button>
  <button className="btn-secondary flex-1">Cancel</button>
</div>
```

---

## 🔍 Color Choosing Guide

### For Actions
- **Register/Submit buttons:** `primary-500`
- **Cancel/Secondary:** `neutral-100`
- **Delete/Danger:** `error-500`
- **Learn more/Links:** `primary-600`

### For Status
- **Success/Approved:** `success` (#22c55e)
- **Warning/Pending:** `warning` (#eab308)
- **Error/Blocked:** `error` (#ef4444)
- **Info/Neutral:** `primary-500` (#0ea5e9)

### For Text
- **Headings:** `neutral-900`
- **Body text:** `neutral-700`
- **Secondary text:** `neutral-600`
- **Muted text:** `neutral-500`
- **Disabled:** `neutral-400`

### For Backgrounds
- **Page background:** `neutral-50`
- **Card background:** `white`
- **Hover background:** `primary-50` or `neutral-100`
- **Disabled background:** `neutral-100`

---

## 📏 Shadow Quick Reference

```tsx
// Soft shadow (default)
className="shadow-md"

// Hover/Elevated
className="hover:shadow-lg"

// Maximum depth (modals, dropdowns)
className="shadow-xl"

// Subtle
className="shadow-sm"

// Extra subtle
className="shadow-xs"
```

---

## 🔄 Transition Quick Reference

```tsx
// Smooth transitions
className="transition-all duration-200"

// Specific property
className="transition-colors duration-150"

// Custom timing
className="transition-all duration-300 ease-in-out"
```

---

## ⚙️ Utility Classes Summary

| Class | Purpose |
|-------|---------|
| `text-muted` | Muted gray text (neutral-500) |
| `text-highlight` | Highlighted text (primary, semibold) |
| `section-header` | Flex space-between for headers |
| `section-title` | h2 heading style |
| `section-subtitle` | h4 subtitle style |
| `glass` | Frosted glass effect |
| `shadow-soft` | Soft shadow (alias for shadow-md) |
| `focus-ring` | Focus indicator ring |
| `transition-smooth` | Smooth transitions |

---

## 🎯 Implementation Checklist

When creating a new component:
- [ ] Use semantic HTML elements
- [ ] Add proper heading hierarchy (h1, h2, h3, etc.)
- [ ] Use form labels with proper associations
- [ ] Ensure 4.5:1 color contrast for text
- [ ] Add hover states to interactive elements
- [ ] Test keyboard navigation (Tab, Enter, Escape)
- [ ] Test with screen reader
- [ ] Make responsive (mobile, tablet, desktop)
- [ ] Add focus indicators
- [ ] Use design tokens (colors, spacing, fonts)

---

## 📞 Quick Help

**Can't find a color?** → Check `COLOR_PALETTE.md`

**Typography questions?** → See `DESIGN_SYSTEM.md`

**Layout examples?** → Read `UI_SPECIFICATION.md`

**Component styling?** → Look in `globals.css` and `tailwind.config.js`

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm build

# Preview production build
npm preview
```

---

**Last Updated:** February 2026  
**Status:** Ready to Use ✓
