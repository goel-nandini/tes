# Typography Standards

Based on `Landing.jsx` as the source of truth.

## Hierarchy

### Labels & Tags

**Tiny Labels** (for small badges, timestamps, metadata)
```jsx
className="text-[0.65rem] font-semibold uppercase tracking-[0.24em]"
```
- Use for: Event badges, countdown labels, small metadata tags
- Example: "WORLD'S ELITE STARTUP SUMMIT 2026", "DAYS", "HRS"

**Small Labels** (for section eyebrows, card headers)
```jsx
className="text-[0.7rem] font-medium uppercase tracking-[0.2em]"
```
- Use for: Section introductions, card category labels
- Example: "of 500 exclusive invites"

### Headings

**Hero/Main Heading (H1)**
```jsx
className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.95] tracking-tight"
```
- Use for: Primary page title
- Example: "THE ENTREPRENEURSHIP SHOW"

**Section Heading (H2) - Bold Version**
```jsx
className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
```
- Use for: Major section headings that need prominence
- Example: About section headline

**Section Heading (H2) - Subtle Version**
```jsx
className="text-3xl sm:text-4xl font-semibold tracking-tight"
```
- Use for: Section headings that are important but secondary

**Sub-heading (H3) - Prominent**
```jsx
className="text-lg sm:text-xl font-extrabold"
```
- Use for: Card titles, feature headings within sections

**Sub-heading (H3) - Standard**
```jsx
className="text-base sm:text-lg font-semibold"
```
- Use for: Smaller card titles, list item headers

### Body Text

**Large Body**
```jsx
className="text-base sm:text-lg text-gray-300"
```
- Use for: Main descriptive text, hero subtext
- Example: "Connect with the architects of the future."

**Standard Body**
```jsx
className="text-sm text-gray-300"
```
- Use for: Secondary descriptions, card body text

**Small Body**
```jsx
className="text-sm font-semibold"
```
- Use for: Metadata, small informative text

### Numbers & Stats

**Large Numbers** (countdown, stats)
```jsx
className="text-2xl sm:text-3xl font-extrabold tracking-tight"
```
- Use for: Countdown numbers, prominent statistics
- Example: "247 Seats Left", stat values

### Buttons & CTAs

**Primary CTA**
```jsx
className="text-sm font-extrabold uppercase tracking-[0.18em]"
```
- Use for: Main action buttons
- Example: "JOIN THE REVOLUTION", "CLAIM MY PASS"

## Color Scheme

- **Primary Text**: `text-white`
- **Secondary Text**: `text-gray-300`
- **Tertiary Text**: `text-gray-400`
- **Muted Text**: `text-gray-500`
- **Accent**: `text-[#F44A22]`
- **On Accent**: `text-black` (when on F44A22 background)
- **On Accent Muted**: `text-black/70` or `text-black/80`

## Implementation Notes

1. **Consistency is Key**: Always refer to these standards when adding new components
2. **Responsive Sizing**: Most headings and some body text use responsive variants (sm:, md:, lg:)
3. **Font Weights**: 
   - Use `font-extrabold` for maximum impact
   - Use `font-semibold` for balanced hierarchy
   - Use `font-medium` for subtle labels
4. **Letter Spacing**: 
   - Uppercase labels always use tracking (0.18em - 0.24em range)
   - Body text and headings use default or `tracking-tight`

## Examples from Components

### About.jsx
- Section label: `text-[0.65rem] font-semibold uppercase tracking-[0.24em]`
- Main heading: `text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight`
- Body text: `text-base sm:text-lg text-gray-300`
- Stat values: `text-2xl sm:text-3xl font-extrabold tracking-tight`

### Timeline.jsx
- Section label: `text-[0.65rem] font-semibold uppercase tracking-[0.24em]`
- Time labels: `text-sm font-medium uppercase tracking-[0.2em]`
- Event titles: `text-lg sm:text-xl font-semibold`
- Descriptions: `text-sm sm:text-base text-gray-300`

### PastShow.jsx
- Stat labels: `text-[0.65rem] font-medium uppercase tracking-[0.18em]`
- Stat values: `text-2xl sm:text-3xl font-extrabold tracking-tight`
- Card headings: `text-lg sm:text-xl font-extrabold`
- Body text: `text-sm text-gray-400`
