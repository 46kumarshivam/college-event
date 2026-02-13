# CSS Classes & Utility Reference

Complete reference of all available CSS classes in the design system.

---

## 📋 Card Classes

```css
.card
  Base card component with white background, shadow, and rounded corners
  
.card-header
  Card header section with margin bottom

.card-title
  h3 size, semibold, neutral-900 color

.card-subtitle
  body-sm size, gray-500 color

.card-content
  Container for card content with vertical spacing

.event-card
  Event-specific card with left blue border and hover effects

.event-card-date
  Date badge styling (primary-100 background, primary-700 text)
```

### Example:
```tsx
<div className="card">
  <div className="card-header">
    <h3 className="card-title">Event Registration</h3>
    <p className="card-subtitle">Sign up for upcoming events</p>
  </div>
  <div className="card-content">
    <p>Content goes here</p>
  </div>
</div>
```

---

## 🔘 Button Classes

### Primary Button
```css
.btn-primary
  Sky blue background (#0ea5e9)
  White text
  Hover: primary-600
  Active: primary-700
  Disabled: neutral-300 bg, neutral-500 text
```

### Secondary Button
```css
.btn-secondary
  Gray background (neutral-100)
  Dark text (neutral-900)
  Hover: neutral-200
  Active: neutral-300
  Disabled: neutral-100 bg, neutral-400 text
```

### Ghost Button
```css
.btn-ghost
  Transparent background
  Primary text color
  Hover: primary-50 background
  Active: primary-100 background
  Disabled: neutral-300 text
```

### Danger Button
```css
.btn-danger
  Red background (error)
  White text
  Hover: red-600
  Active: red-700
  Disabled: neutral-300 bg
```

### Example:
```tsx
<button className="btn-primary">Register</button>
<button className="btn-secondary">Cancel</button>
<button className="btn-ghost">Learn More</button>
<button className="btn-danger">Delete</button>
```

---

## 🏷️ Badge Classes

### Badge Primary
```css
.badge-primary
  Primary-100 background
  Primary-700 text
  12px font, semibold, 8px padding
  Border radius: full (16px)
```

### Badge Success
```css
.badge-success
  Green-100 background
  Green-700 text
```

### Badge Warning
```css
.badge-warning
  Yellow-100 background
  Yellow-700 text
```

### Badge Error
```css
.badge-error
  Red-100 background
  Red-700 text
```

### Example:
```tsx
<span className="badge-primary">ℹ Upcoming</span>
<span className="badge-success">✓ Available</span>
<span className="badge-warning">⚡ Almost Full</span>
<span className="badge-error">✕ Full</span>
```

---

## 📝 Form Classes

### Base Input
```css
.input-base
  Full width
  Padding: 12px (md)
  Border: 1px neutral-300
  Border radius: 8px
  Font: body-sm (14px)
  Focus: 2px primary ring, primary border
  Placeholder: neutral-400
  Transition: smooth
```

### Form Label
```css
.form-label
  Block display
  13px font, semibold
  Neutral-700 color
  Margin bottom: 8px
```

### Example:
```tsx
<label className="form-label">Email Address *</label>
<input 
  className="input-base" 
  type="email"
  placeholder="example@college.edu"
/>
```

---

## 🎯 Grid & Layout Classes

### Responsive Grid
```css
.grid-responsive
  grid-cols-1 on mobile
  grid-cols-2 on tablet (md:)
  grid-cols-3 on desktop (lg:)
  Gap: 16px (lg)
```

### Stats Grid
```css
.grid-stats
  grid-cols-1 on mobile
  grid-cols-2 on tablet (sm:)
  grid-cols-4 on desktop (lg:)
  Gap: 16px (lg)
```

### Flexbox Utilities
```css
.flex-between
  flex + items-center + justify-between

.flex-center
  flex + items-center + justify-center

.flex-col-center
  flex flex-col + items-center + justify-center
```

### Example:
```tsx
<div className="grid-responsive">
  <div className="card">Event 1</div>
  <div className="card">Event 2</div>
  <div className="card">Event 3</div>
</div>

<div className="flex-between">
  <h2>Title</h2>
  <button>Action</button>
</div>
```

---

## 📊 Section Header Classes

```css
.section-header
  flex + items-center + justify-between
  Margin bottom: 48px (3xl)

.section-title
  h2 size (32px, 600 weight)
  Neutral-900 color
  Font-bold

.section-subtitle
  body-lg size (16px)
  Neutral-600 color
  Margin top: 8px
```

### Example:
```tsx
<div className="section-header">
  <div>
    <h1 className="section-title">Browse Events</h1>
    <p className="section-subtitle">Find and register for upcoming events</p>
  </div>
  <button className="btn-primary">Create Event</button>
</div>
```

---

## 🎨 Typography Classes

### Text Colors
```css
.text-muted
  text-neutral-500
  Use for: secondary/less important text

.text-highlight
  text-primary-500 + font-semibold
  Use for: highlighted/important text
```

### Text Truncation
```css
.text-truncate
  truncate (single line with ellipsis)

.text-clamp
  line-clamp-3 (3 lines with ellipsis)
```

### Example:
```tsx
<p className="text-muted">Secondary information</p>
<p className="text-highlight">Important highlight</p>
<p className="text-truncate">Very long text that...</p>
<p className="text-clamp">Multiple lines of text...</p>
```

---

## 🎨 Special Effects

### Glass Effect
```css
.glass
  backdrop-blur-sm
  bg-white/80 (80% opacity)
  border: 1px white/20
  Use for: frosted glass cards
```

### Soft Shadow
```css
.shadow-soft
  shadow-md (default)
  Use for: standard elevation
```

### Focus Ring
```css
.focus-ring
  focus:outline-none
  focus:ring-2 focus:ring-primary-500
  focus:ring-offset-2
  Use for: custom focus styling
```

### Smooth Transition
```css
.transition-smooth
  transition-all
  duration-200
  ease-in-out
```

### Example:
```tsx
<div className="glass p-lg rounded-lg">
  Frosted glass effect
</div>

<button className="focus-ring">
  Custom Focus
</button>

<div className="transition-smooth hover:shadow-lg">
  Smooth transitions
</div>
```

---

## 🎨 Divider Classes

```css
.divider
  border-top: 1px neutral-200
  margin-y: 24px (xl)
  Use for: visual separation
```

### Example:
```tsx
<div>
  <h2>Section 1</h2>
  <p>Content</p>
  
  <div className="divider" />
  
  <h2>Section 2</h2>
  <p>Content</p>
</div>
```

---

## 📱 Responsive Utilities (Tailwind)

### Display Utilities
```css
.hidden              /* display: none */
.block               /* display: block */
.flex                /* display: flex */
.grid                /* display: grid */

.md:hidden           /* hide on tablet and up */
.lg:block            /* show on desktop and up */
.sm:grid-cols-2      /* 2 columns on small screens and up */
```

### Spacing Responsive
```css
.px-lg md:px-2xl     /* 16px padding, 32px on tablet */
.gap-md md:gap-lg    /* 12px gap, 16px on tablet */
.p-lg md:p-2xl       /* 16px padding, 32px on tablet */
```

### Width Responsive
```css
.w-full              /* 100% width */
.max-w-2xl           /* Max width constraint */
.md:max-w-4xl        /* Larger on tablet */
```

### Example:
```tsx
{/* Full width on mobile, constrained on desktop */}
<div className="w-full md:max-w-2xl mx-auto">
  Content
</div>

{/* 1 column mobile, 2 tablet, 3 desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

---

## 🎯 Status Indicators

```css
.status-online
  Inline flex + items-center + space-x-1
  Has ::before pseudo-element with green dot

.status-online::before
  content: ''
  inline-block
  w-2 h-2
  bg-success
  border-radius: full
```

### Example:
```tsx
<span className="status-online text-caption">
  Online
</span>
```

---

## 🔗 Combined Utility Examples

### Event Card Complete
```tsx
<div className="event-card overflow-hidden hover:shadow-lg transition-all duration-300">
  <div className="h-32 bg-gradient-to-br from-primary-400 to-primary-600" />
  
  <div className="pt-lg space-y-lg">
    <div className="event-card-date">Dec 15, 2024</div>
    
    <h3 className="text-h4 font-bold text-neutral-900 line-clamp-2">
      Tech Summit 2024
    </h3>
    
    <p className="text-body-sm text-neutral-600 line-clamp-2">
      Join us for an amazing tech conference
    </p>
  </div>
  
  <div className="py-lg border-y border-neutral-200 space-y-md">
    <div className="flex items-center gap-md text-body-sm text-neutral-700">
      <Calendar size={18} className="text-primary-500" />
      <span>4:00 PM</span>
    </div>
    <div className="flex items-center gap-md text-body-sm text-neutral-700">
      <MapPin size={18} className="text-error" />
      <span>Main Auditorium</span>
    </div>
  </div>
  
  <div className="pt-lg">
    <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
      <div className="h-full bg-success rounded-full" style={{width: '89%'}} />
    </div>
    <p className="text-caption text-neutral-600 mt-2">89/100 registered</p>
  </div>
  
  <button className="w-full btn-primary mt-lg">
    Register Now
  </button>
</div>
```

### Stat Card Complete
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

### Modal/Dialog Header Complete
```tsx
<div className="section-header border-b border-neutral-200 pb-lg">
  <h1 className="section-title">Register for Event</h1>
  <button 
    onClick={onClose}
    className="btn-ghost"
    aria-label="Close dialog"
  >
    ✕
  </button>
</div>
```

---

## ⚠️ Common Mistakes to Avoid

❌ **Don't:**
```tsx
className="text-blue-500"         // Use primary-500 instead
className="p-4"                   // Use md/lg instead
className="shadow"                // Use shadow-md instead
<div className="font-bold">       // Use text-h3 or text-h4 instead
```

✅ **Do:**
```tsx
className="text-primary-500"
className="p-lg"
className="shadow-md"
<h3 className="text-h3">
```

---

## 🔍 Finding the Right Class

| Need | Class |
|------|-------|
| Card container | `.card` |
| Event card | `.event-card` |
| Primary button | `.btn-primary` |
| Badge | `.badge-success` |
| Form label | `.form-label` |
| Input | `.input-base` |
| Heading | `.text-h1` through `.text-h4` |
| Grid | `.grid-responsive` or `.grid-stats` |
| Flexbox | `.flex-between`, `.flex-center` |
| Status badge | `.status-online` |

---

## 📚 Component Classes Summary

```
Cards
├── .card              (Base card)
├── .card-header       (Header section)
├── .card-title        (Title text)
├── .card-subtitle     (Subtitle text)
├── .card-content      (Content container)
├── .event-card        (Event specific)
└── .event-card-date   (Date badge)

Buttons
├── .btn-primary       (Primary action)
├── .btn-secondary     (Secondary action)
├── .btn-ghost         (Minimal style)
└── .btn-danger        (Destructive action)

Badges
├── .badge-primary     (Info badge)
├── .badge-success     (Success badge)
├── .badge-warning     (Warning badge)
└── .badge-error       (Error badge)

Forms
├── .input-base        (Input field)
├── .form-label        (Form label)

Layout
├── .grid-responsive   (Responsive grid)
├── .grid-stats        (Stats grid)
├── .flex-between      (Space between flex)
├── .flex-center       (Centered flex)
└── .flex-col-center   (Column centered flex)

Sections
├── .section-header    (Header container)
├── .section-title     (Section title)
└── .section-subtitle  (Section subtitle)

Text
├── .text-muted        (Muted text)
├── .text-highlight    (Highlighted text)
├── .text-truncate     (Single line ellipsis)
└── .text-clamp        (Multi-line ellipsis)

Effects
├── .glass             (Frosted glass)
├── .shadow-soft       (Soft shadow)
├── .focus-ring        (Custom focus)
└── .transition-smooth (Smooth transitions)

Utilities
├── .divider           (Visual separator)
└── .status-online     (Status indicator)
```

---

**Last Updated:** February 2026  
**Version:** 1.0  
**Status:** Complete ✓
