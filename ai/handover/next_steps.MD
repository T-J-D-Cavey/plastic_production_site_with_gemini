# Next Steps


## ✅ What Was Done (Current Session)
- **Visceral Accumulation implemented:** Bottles now pile up at the bottom of the screen instead of fading out, visually demonstrating that plastic stays in the environment.
- **Explicit Scale Key added:** A new UI element explains that "1 Visual Bottle = 1,427,000 Real Units", bridging the gap between abstract numbers and the animation.
- **"Reset & Loop" implemented:** Added a "flush" mechanism where the pile clears once it reaches a certain height, reinforcing the relentless and unsustainable nature of production.
- **Accessibility & UX Refinements:** Added `aria-live` to the counter and refined the "Since you arrived" typography for better impact and clarity.
- **Visual Polish:** Improved bottle shapes and added a "bornAt" timestamp to particles to manage their lifecycle.


## 🔍 Codebase Review
- **Alignment with Spec:**
    - The simulation now matches the "one bottle per second" and "resetting and looping" instructions from the product spec.
    - The Scale Key is now prominent and easy to understand.
- **Technical Performance:**
    - The particle count is kept stable even with the "flush" mechanism.
    - Canvas rendering remains high-performance despite the "pile height" calculation.
- **User Experience:**
    - The "Since you arrived" counter feels more urgent with the visual support of landing bottles.


## 🔜 Recommended Next Steps (Refining the MVP)


### 1. Add section to 'take action' page
- Below all of the sections related to taking action there is a paragraph that reads "Data provided by Our World in Data. All links lead to external organisations committed to environmental action." This section needs to be in its own distinct section (in a different style to the take action sections so it's clear this isn't another take action option). Within this section, include a link to Our World. Include the calculatiosn for plastic. Include a 'visit the creator's Github' link option. Include a 'share the link' button that lets the user click on it and it saves the URL to the user device's clipbouard. When clicked, the 'share the link' text is replaced with 'Send this link to your people and spread the word'. 


### 2. Edits to text in the landing page:
- "Plastic bottles produced" H1 to be changed to "Water bottles worth of plastic has been produced"
- "Global production reaches 1.43 million bottles every second. Relentless. Unsustainable. Accumulating" should be replaced with "Annual global plastic production is ~450 million tonnes, equivalnt to 1.43 million water bottles produced every second."
- "Real-time visual scale" text can be removed
- "Actual bottles produced" text in the key to be replaced with "Water bottles every second". 


---

