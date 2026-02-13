# College Event Management - Modern UI Design Specification

## 📋 Document Overview

This document provides a complete specification for the College Event Management Web Application UI, implementing a modern, clean, and professional design system suitable for non-technical college users.

---

## 🎯 Design Philosophy

### Core Values
1. **Simplicity** - Reduce cognitive load, clear hierarchy
2. **Trust** - Professional appearance, consistent patterns
3. **Accessibility** - Inclusive design for all users
4. **Responsiveness** - Works seamlessly on all devices
5. **Performance** - Fast, smooth interactions

### Design Principles
- **Clarity First** - Clear hierarchy and structure
- **Consistency** - Uniform components and patterns
- **Context** - Information provided where needed
- **Feedback** - User always knows what's happening
- **Efficiency** - Users complete tasks quickly

---

## 🏗️ Page Layouts

### 1. Navigation Structure

#### Header Component
```
┌─────────────────────────────────────────────────────────────────┐
│ ☰  📅 College Events                          👨‍💼 Administrator  │
│    Management Portal                                             │
└─────────────────────────────────────────────────────────────────┘
```

**Header Elements:**
- **Left:** Hamburger menu (mobile) + Logo + Title + Subtitle
- **Right:** Role badge (Student/Admin)
- **Style:** White background, subtle shadow, sticky top
- **Height:** 72px with proper spacing

#### Sidebar Component
```
┌──────────────────┐
│ Dashboard        │  ← Active tab (left border)
│ Browse Events    │
│ My Registrations │
│ Participants     │
│ Certificates     │
│ Manage Events    │  ← Admin only
│ Settings         │
└──────────────────┘
```

**Sidebar Features:**
- **Desktop:** Always visible, left sidebar (240px width)
- **Mobile:** Collapsible sheet overlay
- **Active State:** Left blue border + primary color background
- **Hover State:** Subtle background color
- **Icons:** 24px with 8px margin
- **Typography:** Body-small, semibold
- **Spacing:** 12px padding, 8px gaps

---

### 2. Dashboard Page

#### Hero Section
```
┌─────────────────────────────────────────────────────────────────┐
│ Welcome Back!                                                    │
│ Manage events, participants, and certificates                   │
└─────────────────────────────────────────────────────────────────┘
```

#### Stat Cards (4-column grid on desktop, responsive on mobile)
```
┌────────────────┐  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│           📅   │  │           👥   │  │           🏆   │  │           📊   │
│ Total Events   │  │ Registrations  │  │ Certificates   │  │  This Month    │
│      12        │  │       45       │  │       12       │  │        5       │
└────────────────┘  └────────────────┘  └────────────────┘  └────────────────┘
```

**Stat Card Styling:**
- **Background:** White with subtle gradient to neutral-50
- **Padding:** 24px (xl spacing)
- **Shadow:** Soft md shadow
- **Border:** None
- **Border-radius:** 12px
- **Hover:** Slight elevation on hover

#### Upcoming Events Section
```
┌─────────────────────────────────────────────────────────────────┐
│ Upcoming Events                                                  │
│ Stay updated with the latest events                             │
├─────────────────────────────────────────────────────────────────┤
│ DEC 15  Tech Summit 2024             View Details →  │ [Button] │
│         📍 Main Auditorium  👥 45/100                            │
├─────────────────────────────────────────────────────────────────┤
│ DEC 20  Annual Sports Day             View Details →  │ [Button] │
│         📍 Sports Complex  👥 78/150                             │
└─────────────────────────────────────────────────────────────────┘
```

**Event List Item Styling:**
- **Background:** White
- **Border:** Primary-200 (1px)
- **Left Accent:** 4px primary-500 left border
- **Padding:** 16px
- **Date Chip:** Primary-100 background, primary-700 text, 8px padding
- **Hover:** Shadow-lg, scale 1.01

---

### 3. Browse Events Page

#### Event Grid Layout
```
┌─────────────────────────────────────────────────────────────────┐
│ Browse Events                                                    │
│ Discover and register for upcoming college events               │
├─────────────────────────────────────────────────────────────────┤
│
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  │ [Gradient Bg]    │  │ [Gradient Bg]    │  │ [Gradient Bg]    │
│  │ ⚡ Almost Full   │  │                  │  │                  │
│  │                  │  │                  │  │                  │
│  │ DEC 15           │  │ JAN 05           │  │ JAN 12           │
│  │ Tech Summit 2024 │  │ Culture Fest     │  │ CodeChallenge    │
│  │ Annual tech conf │  │ Celebrate ...    │  │ Compete with ... │
│  │                  │  │                  │  │                  │
│  │ 4:00 PM          │  │ 10:00 AM         │  │ 2:00 PM          │
│  │ 📍 Auditorium    │  │ 📍 Grounds       │  │ 📍 Lab Block     │
│  │                  │  │                  │  │                  │
│  │ Capacity: ████░ │  │ Capacity: ██░░░░ │  │ Capacity: ░░░░░░ │
│  │ 89 / 100  89%    │  │ 32 / 150  21%    │  │ 5 / 200   3%     │
│  │                  │  │                  │  │                  │
│  │  [Register Now]  │  │  [Register Now]  │  │  [Register Now]  │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘
│
└─────────────────────────────────────────────────────────────────┘
```

**Event Card Structure:**
1. **Header Image** (128px gradient background)
   - Gradient: primary-400 → primary-600
   - Contains alert badge if >80% full

2. **Content Area** (16px padding)
   - Date chip: Primary-100, primary-700 text, 8px padding
   - Title: h4 (20px, semibold), max 2 lines
   - Description: body-sm, gray-600, max 2 lines
   - Spacing: 12px between sections

3. **Details Section** (border-top/bottom, 12px padding)
   - Time: Calendar icon + 4:00 PM
   - Location: Pin icon + Auditorium
   - Both gray-700 text

4. **Capacity Bar**
   - Label: "89 / 100 registered | 89%"
   - Bar background: neutral-200
   - Bar fill color depends on capacity:
     - Green (0-50%): success-500
     - Yellow (50-80%): warning-500
     - Red (>80%): error-500
   - Bar height: 8px, border-radius: 4px

5. **Action Button**
   - Full width primary button
   - Text: "Register Now"
   - Height: 40px, font-size: 14px

**Card Styling:**
- **Spacing:** 3-column grid on desktop, 2 on tablet, 1 on mobile
- **Gap:** 16px
- **Shadow:** md, hover: lg
- **Border:** 1px left primary-500
- **Border-radius:** 12px

---

### 4. Event Registration Modal

```
┌────────────────────────────────────────────────────────┐
│ Register for Event                                     │ ✕
├────────────────────────────────────────────────────────┤
│                                                        │
│ Tech Summit 2024                                       │
│ December 15, 2024 | 4:00 PM | Main Auditorium        │
│                                                        │
│ ─────────────────────────────────────────────────────  │
│                                                        │
│ Full Name *                                            │
│ [________________________]                             │
│                                                        │
│ Student ID *                                           │
│ [________________________]                             │
│                                                        │
│ Email *                                                │
│ [________________________]                             │
│                                                        │
│ Phone                                                  │
│ [________________________]                             │
│                                                        │
│ Department *                                           │
│ [Select Department ▼]                                  │
│                                                        │
│ Year *                                                 │
│ [Select Year ▼]                                        │
│                                                        │
│                 [Cancel]  [Register]                   │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Modal Specifications:**
- **Width:** 500px (80% on mobile)
- **Background:** White
- **Border-radius:** 12px
- **Shadow:** xl (20px shadow)
- **Max-height:** 90vh with scroll

**Form Fields:**
- **Label:** label style (13px, 500 weight), dark gray
- **Input:** 
  - Padding: 12px (md)
  - Border: 1px neutral-300
  - Border-radius: 8px
  - Focus: 2px primary ring, primary border
  - Font: body-sm (14px)
  
- **Required Indicator:** Red asterisk after label

**Buttons:**
- **Cancel:** Secondary button
- **Register:** Primary button (CTR)
- **Spacing:** 8px gap between buttons

---

### 5. Participants Table View

```
┌──────────────────────────────────────────────────────────────────┐
│ Event Participants                                               │
├──────────┬──────────────┬────────────┬───────────┬──────────────┤
│ Name     │ Student ID   │ Email      │ Department│ Registered   │
├──────────┼──────────────┼────────────┼───────────┼──────────────┤
│ John Doe │ 2024001      │ john@...   │ CS        │ Dec 15, 2024 │
│ Jane Smith│ 2024002     │ jane@...   │ ECE       │ Dec 16, 2024 │
│ Bob Jones │ 2024003     │ bob@...    │ ME        │ Dec 14, 2024 │
└──────────┴──────────────┴────────────┴───────────┴──────────────┘
```

**Table Specifications:**
- **Header:** primary-50 background, h4 text, semibold
- **Rows:** Alternating white and neutral-50
- **Hover:** Row background to primary-50
- **Padding:** 12px cells
- **Border:** bottom 1px neutral-200 between rows
- **Responsive:** Horizontal scroll on mobile

---

### 6. Certificate View

```
┌─────────────────────────────────────────────────────────────────┐
│ My Certificates                                                  │
│ Achievements earned from events and activities                  │
├─────────────────────────────────────────────────────────────────┤
│
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  │ 🏆              │  │ 🏆              │  │ 🏆              │
│  │                  │  │                  │  │                  │
│  │ Tech Summit 2024 │  │ Culture Fest    │  │ CodeChallenge   │
│  │ Participation    │  │ Organization    │  │ 1st Runner-up   │
│  │                  │  │                  │  │                  │
│  │ Issued: Dec 15   │  │ Issued: Nov 20  │  │ Issued: Jan 10  │
│  │                  │  │                  │  │                  │
│  │  [Download PDF]  │  │  [Download PDF]  │  │  [Download PDF]  │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘
│
└─────────────────────────────────────────────────────────────────┘
```

**Certificate Card:**
- **Grid:** Same as event cards (3-col desktop, responsive)
- **Icon:** Emoji/icon in header (48px)
- **Title:** h4, primary-700 text
- **Badge:** status badge for achievement type
- **Date:** caption text, gray-500
- **Button:** Secondary button with download icon

---

## 🎨 Component Specifications

### Button Variants

#### Primary Button (CTR)
```
┌─────────────────────┐
│   REGISTER EVENT    │
└─────────────────────┘
```
- **Background:** primary-500
- **Text:** White, 14px, 500 weight
- **Padding:** 12px lg (16px), 8px md (12px)
- **Border-radius:** 8px
- **Hover:** primary-600
- **Active:** primary-700
- **Disabled:** neutral-300 bg, neutral-500 text

#### Secondary Button
```
┌─────────────────────┐
│     LEARN MORE      │
└─────────────────────┘
```
- **Background:** neutral-100
- **Text:** neutral-900, 14px, 500 weight
- **Hover:** neutral-200
- **Active:** neutral-300

#### Ghost Button
```
┌─────────────────────┐
│     CANCEL / ✕      │
└─────────────────────┘
```
- **Background:** Transparent
- **Text:** primary-500
- **Hover:** primary-50 background
- **Active:** primary-100 background

#### Danger Button
```
┌─────────────────────┐
│      DELETE         │
└─────────────────────┘
```
- **Background:** error-500
- **Text:** White
- **Hover:** error-600
- **Active:** error-700

### Input Fields

```
Email Address *                    ← Label: 13px, 500 weight
                                   
[_________________________]        ← 40px height, 12px padding
                                   
Enter your college email           ← Helper text: 12px, gray
✓ Valid email format              ← Success feedback

[_________________________]        ← Focus state: blue ring + border
: Invalid email format             ← Error feedback: red text

[_________________________]        ← Disabled: neutral-200 bg, no pointer
```

**Input Specifications:**
- **Height:** 40px
- **Padding:** 12px
- **Border:** 1px neutral-300
- **Border-radius:** 8px
- **Focus:** 2px primary ring (offset 2px), primary-500 border
- **Font:** body-sm (14px)
- **Placeholder:** gray-400 text

### Form Labels
```
Full Name *
───────────

Student ID *
───────────

Department
───────────
```

- **Font:** 13px, 500 weight
- **Color:** neutral-700
- **Spacing:** 8px below label
- **Required indicator:** Red asterisk

### Badges / Status Indicators

```
┌──────────────┐
│ ⚡ Almost    │  ← Warning: yellow-100 bg, yellow-700 text
│    Full      │
└──────────────┘

┌──────────────┐
│ ✓ Available  │  ← Success: green-100 bg, green-700 text
└──────────────┘

┌──────────────┐
│ ✕ Full       │  ← Error: red-100 bg, red-700 text
└──────────────┘

┌──────────────┐
│ ℹ Upcoming   │  ← Primary: primary-100 bg, primary-700 text
└──────────────┘
```

- **Padding:** 8px 12px
- **Border-radius:** 16px (full round)
- **Font:** caption (12px), semibold
- **Icon + text with 4px gap**

---

## 🎨 Color Usage Guide

### Backgrounds
- **Page:** neutral-50 (#f9fafb)
- **Cards:** white (#ffffff)
- **Hover/Focus:** primary-50 (#f0f7ff)
- **Disabled:** neutral-100 (#f3f4f6)

### Text
- **Headings:** neutral-900 (#111827)
- **Body:** neutral-700 (#374151)
- **Secondary:** neutral-600 (#4b5563)
- **Muted:** neutral-500 (#6b7280)
- **Disabled:** neutral-400 (#9ca3af)

### Interactive
- **Links/Primary:** primary-600 (#0284c7)
- **Success Actions:** success-600 (#16a34a)
- **Warnings:** warning-600 (#ca8a04)
- **Errors:** error-600 (#dc2626)

### Borders
- **Strong:** neutral-300 (#d1d5db)
- **Standard:** neutral-200 (#e5e7eb)
- **Light:** neutral-100 (#f3f4f6)
- **Accents:** primary-500 (#0ea5e9)

---

## 📐 Spacing & Layout

### Page Padding
- **Desktop:** 32px (2xl) sides, 24px (xl) top/bottom
- **Tablet:** 24px (xl) sides
- **Mobile:** 16px (lg) sides

### Section Spacing
- **Between sections:** 48px (3xl)
- **Between components:** 24px (xl)
- **Between elements:** 16px (lg)
- **Compact spacing:** 12px (md)
- **Tight spacing:** 8px (sm)

### Grid Systems
- **Event cards:** 3 cols (desktop) → 2 (tablet) → 1 (mobile)
- **Stats:** 4 cols (desktop) → 2 (tablet) → 1 (mobile)
- **Gap:** 16px (lg) between items

---

## ♿ Accessibility

### Color Contrast
- **AAA Standard** for all text
- **Neutral-900 on white:** 21:1
- **Neutral-700 on white:** 8.6:1
- **primary-600 on white:** 7:1
- **Status colors:** All meet WCAG AAA

### Focus States
- **Visible focus ring:** 2px primary-500
- **Ring offset:** 2px
- **Never removed for keyboard navigation**

### Screen Reader
- **Semantic HTML** (button, form, article, section)
- **ARIA labels** for icon-only buttons
- **Form associations:** label → input via id
- **Error messages:** aria-describedby

### Keyboard
- **Tab order:** Logical, follows visual flow
- **No keyboard traps:** All interactive elements reachable
- **Enter/Space:** Triggers buttons
- **Escape:** Closes modals/menus

---

## 🎬 Animations & Transitions

### Timing
- **Quick feedback:** 150ms (hover, color change)
- **Standard transitions:** 200ms (slide, fade)
- **Large animations:** 300ms (modal open, page change)

### Easing
- **All transitions:** ease-in-out (cubic-bezier(0.4, 0, 0.2, 1))

### Effects
1. **Hover effects:** Subtle shadow increase, slight scale
2. **Button press:** Shadow decrease, 95% scale
3. **Modal enter:** Fade-in + slide-up
4. **Loading:** Spinner rotation

### Disable Animations
- Respect `prefers-reduced-motion: reduce`
- Animations become instant if preferred

---

## 📱 Mobile-First Approach

### Touch Targets
- **Minimum size:** 44px × 44px
- **Minimum spacing:** 8px between targets

### Mobile Adjustments
- **Sidebar:** Collapsible to sheet overlay
- **Buttons:** Full-width on mobile when possible
- **Tables:** Horizontal scroll or card view
- **Modals:** 90vh height, full width on small screens
- **Fonts:** Slightly larger (16px for body on mobile)

### Orientation
- **Portrait:** Optimized default
- **Landscape:** Adjusted layouts, maintains usability

---

## 🖼️ Visual Examples

### Example 1: Registration Flow
1. User browses events (card grid)
2. Clicks "Register Now" on event card
3. Modal dialog opens with form
4. Form validates in real-time
5. Submit shows success toast
6. Modal closes, event count updates

### Example 2: Admin Dashboard
1. Admin views all registrations
2. Table shows all event participants
3. Can export/download data
4. Manage events view (CRUD operations)
5. Generate certificates

### Example 3: Mobile Navigation
1. Header with hamburger menu
2. Tap menu → Sheet sidebar slides in
3. Select item → Sheet closes, content loads
4. All interactive elements touch-friendly
5. Cards stack vertically

---

## 📊 Design System Metrics

| Metric | Value | Purpose |
|--------|-------|---------|
| Font Family | Poppins | Modern, professional |
| Primary Font Weight | 400 | Readable body text |
| Heading Weight | 600-700 | Strong hierarchy |
| Border Radius | 8-12px | Modern feel |
| Shadow Depth | 4 levels | Visual hierarchy |
| Transition Time | 150-300ms | Smooth interaction |
| Touch Target | 44×44px | Mobile accessibility |
| Line Height | 120-160% | Readability |

---

## 🔧 Implementation Guidelines

### For Developers
1. Use Tailwind CSS utility classes
2. Implement components from shadcn/ui
3. Follow color tokens from CSS variables
4. Test with keyboard navigation
5. Test with screen readers
6. Verify color contrast
7. Test on multiple devices
8. Use semantic HTML

### For Designers
1. Use "Poppins" font in Figma
2. Export with correct font weights (400, 500, 600, 700)
3. Use exact hex colors from palette
4. Maintain spacing grid (8px base unit)
5. Show hover/active/disabled states
6. Document interactions and animations
7. Include accessibility notes

---

## 📞 Design System Support

For questions or updates to this specification:
- Check component files in `/components/ui/`
- Review globals.css for base styles
- Check tailwind.config.js for theme tokens
- See DESIGN_SYSTEM.md for complete reference

**Version:** 1.0  
**Last Updated:** February 2026  
**Status:** Active & Maintained
