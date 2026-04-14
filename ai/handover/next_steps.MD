# Next Steps


## ✅ What Was Done (Current Session)
- **Landing Page Text Refinement:** Updated the primary copy to focus on "Water bottles worth of plastic" and included the annual production figure (~450m tonnes).
- **Interactive Calculations:** Implemented a "View Calculations" toggle on the Action page that reveals the mathematical breakdown of the 1.43m bottles/second figure.
- **Sequential Share Feedback:** Refined the "Share link" button to show a multi-stage success state ("Link copied" followed by "Send this link to your people...").
- **Header Refinement:** Moved the external link attribution to the header of the Action page for better visibility and context.
- **Client-Side Migration:** Converted the Action page to a Client Component to support stateful interactive features.


## 🔍 Codebase Review
- **Alignment with Spec:**
    - The landing page now carries the specific "Water bottles worth of plastic" messaging requested.
    - The action page now transparently explains the data sources and calculations behind the animation.
- **User Experience:**
    - The sequential feedback on the share button provides immediate technical confirmation ("Link copied") followed by a social nudge.
    - The calculation breakdown builds trust by showing the logic behind the "1.43 million" figure.


## 🔜 Recommended Next Steps (Refining the MVP)


### 1. Link & Attribution Polish
- Update the "Visit Creator's GitHub" link with the actual repository URL.
- Current placeholder calculations use 10g per bottle; verify if we should provide a range or source for this average weight.


### 2. Social Meta Tags (SEO)
- Implement `OpenGraph` and `Twitter` cards in `layout.tsx` so that when the link is shared, it generates a high-impact preview (ideally showing the pile of bottles).


### 3. Dynamic Facts
- Consider adding a "Did you know?" ticker in the footer of the landing page that rotates through other plastic-related statistics.


### 4. Mobile Visualisation Tuning
- Test the "flush" mechanism on mobile devices to ensure the pile height doesn't overlap the "Do Something About It" button.

---
