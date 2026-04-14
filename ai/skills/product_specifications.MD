# Climate Awareness Website — MVP Product Specification




## Overview




An environmental awareness website that transforms plastic pollution statistics into a visceral visual experience. The goal is to make abstract data feel immediate and emotionally impactful, while guiding users toward meaningful action.




## Core Concept




Convert plastic production data into a simulated real-time visualisation that shows continuous accumulation. Make users feel the scale, not just understand it, and pair the visualisation with a clear Call To Action.




**User journey:** Awareness → Emotional Response → Desire for Action




---




## Pages




1. Homepage (Visualisation)
2. Action Page




---




## Homepage — Plastic Production Visualisation




**Concept:**
Continuous, relentless accumulation of plastic which doesn't decompose quickly enough is totally unsustainable.


**Data:**
Plastic Production → Bottles per Second
Final Figure = 1,427,000 (≈ 1.43 million) 500ml plastic bottles per second


***Calculation***
Annual global plastic production is approximately 450 million tonnes. A standard 500ml plastic bottle weighs around 10 grams. Dividing total plastic mass by bottle weight gives roughly 45 trillion bottles per year — or about 1,427,000 every second.


***Data Source***
Our World in Data — Plastic Production
https://ourworldindata.org/plastic-production


**Visual Direction:**
Water bottles filling a section of the screen, one bottle appearing per second, resetting and looping seamlessly. A key explains what each bottle represents.


---




## Action Page




A single section of high-impact actions focused on plastic pollution — petitions, ethical spending, and collective action. Links to relevant organisations.




**Links:**
- https://www.greenpeace.org.uk/take-action/
- https://friendsoftheearth.uk/take-action
- https://www.wwf.org.uk/get-involved
- https://petition.parliament.uk/
- https://www.ethicalconsumer.org/




---




## Technical Notes




- No real-time APIs required
- Precomputed per-second rates with frontend animation loops
- Lightweight, mobile-responsive




---




## MVP Success Criteria




- Users immediately understand the visualisation
- Users feel emotional impact within seconds
- Users click through to the Action Page
- Users engage with at least one action link
