# Next Steps

## ✅ What Was Done (Current Session)
- **Removed Scroll Indicator:** Deleted the bounce animation and icon from the landing page as it was misleading (nothing below the fold).
- **Metadata Enhancement:** Updated `layout.tsx` with full SEO metadata, including OpenGraph and Twitter cards, author information, and relevant keywords.
- **Codebase Review:** Verified data accuracy and responsiveness across both pages.
- **Documentation Review:** Reviewed `product_specifications.MD` and `ai_agent_rules.MD` for compliance.
- **README Rewrite:** Overhauled the `README.md` to include technical stack details, project concepts, and installation instructions for a high-quality side project profile.

## 🔍 Codebase Review Findings
- **Mobile Overlap Risk:** The "flush" mechanism in `BottleVisualisation.tsx` triggers at 30% of canvas height. On some mobile devices, this might cause the bottle pile to overlap the "Do Something About It" button before it flushes.
- **Production URL:** The metadata now includes a placeholder URL (`https://plastic.cavey.dev`). This should be updated if a different domain is used.
- **Accessibility:** Added `aria-live="polite"` to the main counter to ensure it's readable by screen readers.

## 🔜 Recommended Next Steps (Refining for Deployment)

### 1. Final URL Verification
- Ensure the `openGraph.url` in `src/app/layout.tsx` matches the final production domain.

### 2. Mobile-Specific Flush Tuning
- Consider reducing the flush threshold from `0.3` to `0.2` if testing on smaller screens shows overlap with the main CTA button.

### 3. Social Image (OG Image)
- Add a physical `opengraph-image.png` (or `.jpg`) to the `src/app/` directory to ensure high-impact visual previews on social platforms.

### 4. Dynamic Facts (Optional)
- As previously suggested, a small ticker for additional statistics could add more depth to the landing page.
