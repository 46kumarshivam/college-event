# Typography System - Updated February 2026

Complete typography specifications for the College Event Management Web Application.

---

## 🔤 Font Family

**Primary:** Poppins (Google Font)  
**Fallback:** system-ui, -apple-system, sans-serif

### Weights Available
- **400** - Regular (body text)
- **500** - Medium (labels, buttons)
- **600** - SemiBold (headings)
- **700** - Bold (hero titles)

---

## 📏 Heading Hierarchy

### H1 – Page Title / Hero Title
```
Font Size:    48px
Line Height:  56px (116%)
Font Weight:  600 (SemiBold)
Letter Spacing: normal
Color:        #111827 (Neutral-900)
```

**Usage:**
- Main page titles
- Hero section headings
- Dashboard welcome messages
- Modal titles (important)

**Example:** "Welcome Back!" | "Browse Events"

---

### H2 – Section Title
```
Font Size:    36px
Line Height:  44px (122%)
Font Weight:  600 (SemiBold)
Letter Spacing: normal
Color:        #111827 (Neutral-900)
```

**Usage:**
- Section headers
- Card section titles
- Major content divisions
- Admin dashboard sections

**Example:** "Upcoming Events" | "Event Participants"

---

### H3 – Sub Section / Card Title
```
Font Size:    28px
Line Height:  36px (128%)
Font Weight:  500 (Medium)
Letter Spacing: normal
Color:        #111827 (Neutral-900)
```

**Usage:**
- Card titles
- Event titles in listings
- Panel headings
- Form section titles

**Example:** "Tech Summit 2024" | "Event Registration"

---

### H4 – Small Heading
```
Font Size:    22px
Line Height:  30px (136%)
Font Weight:  500 (Medium)
Letter Spacing: normal
Color:        #111827 (Neutral-900)
```

**Usage:**
- Form sections
- Modal titles (secondary)
- Component headers
- Sidebar section titles

**Example:** "Personal Information" | "Event Details"

---

### H5 – Micro Heading (Optional)
```
Font Size:    18px
Line Height:  26px (144%)
Font Weight:  500 (Medium)
Letter Spacing: normal
Color:        #111827 (Neutral-900)
```

**Usage:**
- Sidebar titles
- Filter sections
- Small component headers
- Input group labels

**Example:** "Filter By" | "Sort Options"

---

## 📝 Body Text

### Body Large
```
Font Size:    18px
Line Height:  28px (155%)
Font Weight:  400 (Regular)
Letter Spacing: normal
Color:        #111827 (Neutral-900)
```

**Usage:**
- Event descriptions
- Intro paragraphs
- Large body text
- Important content

**CSS Class:** `.text-body-lg`

---

### Body Regular (MOST USED)
```
Font Size:    16px
Line Height:  24px (150%)
Font Weight:  400 (Regular)
Letter Spacing: normal
Color:        #111827 (Neutral-900)
```

**Usage:**
- General content
- Dashboard text
- Instructions
- Form instructions
- Default paragraph text

**Note:** This is the default for all `<p>` tags

---

### Body Small
```
Font Size:    14px
Line Height:  20px (142%)
Font Weight:  400 (Regular)
Letter Spacing: normal
Color:        #4B5563 (Neutral-600)
```

**Usage:**
- Helper text
- Secondary information
- Fine print
- Table descriptions

**CSS Class:** `.text-body-sm`

---

## 🔘 Buttons & UI Text

### Primary Button
```
Font Size:    16px
Line Height:  24px (150%)
Font Weight:  500 (Medium)
Letter Spacing: normal
Text Transform: none (optional uppercase)
```

**Usage:**
- Main call-to-action buttons
- Primary actions
- "Register", "Submit", "Save"

**Color:** #2563EB on white | White text

---

### Secondary Button / Small Button
```
Font Size:    14px
Line Height:  20px (142%)
Font Weight:  500 (Medium)
Letter Spacing: normal
```

**Usage:**
- Secondary actions
- "Cancel", "Learn More", "Skip"
- Less prominent buttons

**Color:** #F3F4F6 background | #111827 text

---

### Navigation Menu
```
Font Size:    16px
Line Height:  24px (150%)
Font Weight:  500 (Medium)
Letter Spacing: normal
```

**Usage:**
- Sidebar navigation items
- Menu items
- Tabs

**Color:** #111827 | Hover: #2563EB

---

## 🧾 Form Elements

### Form Label
```
Font Size:    14px
Line Height:  20px (142%)
Font Weight:  500 (Medium)
Letter Spacing: normal
Color:        #111827 (Neutral-900)
```

**Usage:**
- Input labels
- Checkbox labels
- Radio labels
- Form field identifiers

**CSS Class:** `.form-label` or `.text-label`

**Markup:**
```html
<label class="form-label">Email Address *</label>
<input type="email" placeholder="..." />
```

---

### Input Text
```
Font Size:    16px
Line Height:  24px (150%)
Font Weight:  400 (Regular)
Letter Spacing: normal
Color:        #111827 (Neutral-900)
Placeholder Color: #9CA3AF (Neutral-400)
```

**Usage:**
- Text inputs
- Email inputs
- Number inputs
- All form fields

**CSS Class:** `.input-base`

---

### Placeholder Text
```
Font Size:    14px
Line Height:  20px (142%)
Font Weight:  400 (Regular)
Letter Spacing: normal
Color:        #9CA3AF (Neutral-400)
Opacity:      60–70%
```

**Example:** "Enter your full name"

---

## 📊 Table Elements

### Table Header
```
Font Size:    14px
Line Height:  20px (142%)
Font Weight:  600 (SemiBold)
Letter Spacing: normal
Color:        #111827 (Neutral-900)
Background:   #F3F4F6 (Neutral-100)
```

**Usage:**
- Table column headers
- Grid headers
- Data table titles

**CSS Class:** `.text-table-header`

---

### Table Cell
```
Font Size:    14px
Line Height:  20px (142%)
Font Weight:  400 (Regular)
Letter Spacing: normal
Color:        #111827 (Neutral-900)
```

**Usage:**
- Table cell content
- Data entries
- Row values

**CSS Class:** `.text-table-cell`

---

## 🏷️ Status & Meta Text

### Caption / Meta Info
```
Font Size:    12px
Line Height:  16px (133%)
Font Weight:  400 (Regular)
Letter Spacing: normal
Color:        #4B5563 (Neutral-600)
```

**Usage:**
- Date and time information
- Footer information
- Badge text
- Meta information
- Helper text
- Form error messages
- Small descriptive text

**CSS Class:** `.text-caption`

**Examples:**
- "Registered on: Dec 15, 2024"
- "89/100 registered"
- "This field is required"

---

## 💡 Typography Scale Summary

| Element | Size | Line Height | Weight | Use |
|---------|------|-------------|--------|-----|
| **H1** | 48px | 56px | 600 | Page title |
| **H2** | 36px | 44px | 600 | Section title |
| **H3** | 28px | 36px | 500 | Card title |
| **H4** | 22px | 30px | 500 | Component title |
| **H5** | 18px | 26px | 500 | Micro heading |
| **Body Lg** | 18px | 28px | 400 | Large text |
| **Body Md** | 16px | 24px | 400 | Default text |
| **Body Sm** | 14px | 20px | 400 | Small text |
| **Button** | 16px | 24px | 500 | Primary button |
| **Button Sm** | 14px | 20px | 500 | Secondary button |
| **Label** | 14px | 20px | 500 | Form label |
| **Caption** | 12px | 16px | 400 | Meta text |
| **Table Header** | 14px | 20px | 600 | Table title |
| **Table Cell** | 14px | 20px | 400 | Table content |

---

## 🎨 Responsive Typography

### Desktop (>1024px)
All typography sizes as specified above.

### Tablet (640px - 1024px)
- H1: 40px → 48px
- H2: 32px → 36px
- H3: 24px → 28px
- H4: 20px → 22px
- Body Lg: 16px → 18px

### Mobile (<640px)
- H1: 36px (slightly reduced)
- H2: 28px
- H3: 24px
- H4: 20px
- H5: 18px
- Body Lg: 16px (unchanged)
- Body Md: 16px (unchanged for readability)

---

## 🔗 CSS Classes Reference

```css
/* Headings */
h1, .text-h1          /* 48px, 600 weight */
h2, .text-h2          /* 36px, 600 weight */
h3, .text-h3          /* 28px, 500 weight */
h4, .text-h4          /* 22px, 500 weight */
h5, .text-h5          /* 18px, 500 weight */

/* Body Text */
p, .text-body-md      /* 16px, 400 weight (default) */
.text-body-lg         /* 18px, 400 weight */
.text-body-sm         /* 14px, 400 weight */

/* UI Elements */
.text-label           /* 14px, 500 weight (form labels) */
.text-caption         /* 12px, 400 weight (meta info) */
.text-table-header    /* 14px, 600 weight (table headers) */
.text-table-cell      /* 14px, 400 weight (table cells) */

/* Buttons */
button, .btn-lg       /* 16px, 500 weight */
.btn                  /* 14px, 500 weight */
```

---

## ✍️ Copy Rules

### Headlines
- Use clear, descriptive language
- Max 60 characters for mobile
- Avoid all caps (only for special cases)
- Use sentence case

### Body Text
- Keep paragraphs short (3-5 lines max)
- Use active voice
- Use contractions for friendliness
- Break up long text with subheadings

### Buttons
- Use action verbs
- Keep labels to 2-3 words
- Use consistent terminology
- Examples: "Register Now", "Learn More", "Save Changes"

### Form Labels
- Be specific and clear
- Use "This field is required" for required fields
- Place labels above inputs
- Use placeholder as hint, not label

### Errors & Validation
- Use body-sm or caption for error messages
- Be specific about what went wrong
- Provide solution if possible
- Use red (#EF4444) for error text

---

## 📦 Implementation

### HTML
```html
<h1>Welcome Back!</h1>
<h2>Upcoming Events</h2>
<h3>Tech Summit 2024</h3>
<h4>Personal Information</h4>
<h5>Filter Options</h5>

<p>This is regular body text.</p>
<p class="text-body-lg">This is large body text.</p>
<p class="text-body-sm">This is small body text.</p>

<label class="form-label">Email Address *</label>
<input class="input-base" type="email" />

<span class="text-caption">Registered: Dec 15, 2024</span>
```

### Tailwind CSS
```tsx
className="text-h1"          // H1 styling
className="text-h2 font-bold"// H2 with bold
className="text-body-lg"     // Large body text
className="text-body-sm"     // Small body text
className="text-label"       // Form label
className="text-caption"     // Meta text
```

---

## 🎯 Typography Dos & Don'ts

### ✅ Do
- Use the specified font sizes and weights
- Maintain proper line heights for readability
- Use color hierarchy (primary → secondary → muted)
- Test on mobile devices
- Use semantic HTML (h1, h2, p, etc.)

### ❌ Don't
- Mix font families
- Use incorrect weights (e.g., 700 for body)
- Exceed 60 characters per line on mobile
- Use all caps for body text
- Skip proper heading hierarchy

---

## 🌐 Web Font Loading

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Font Display:** swap (shows fallback while loading)

---

## ♿ Accessibility

- **Line Height:** 150% minimum for readability
- **Font Size:** 16px minimum on mobile
- **Contrast:** All text meets WCAG AAA
- **Letter Spacing:** Normal (no condensed text)
- **Font Weight:** Use 400-600 (avoid extremes)

---

**Version:** 2.0 (Updated)  
**Last Updated:** February 8, 2026  
**Status:** Active ✓
