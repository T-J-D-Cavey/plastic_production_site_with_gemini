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




## Homepage — Deforestation Visualisation




**Concept:**
Continuous loss of forest areas and natural ecosystems at an unsustainable rate.


**Data:**
Forest Loss → Football Pitches per Second
Final Figure = 0.5 (≈ half) a football pitch per second


***Calculation***
Annual global forest loss is approximately 10.9 million hectares. There are 31,536,000 seconds in a year, resulting in ~0.3459 hectares lost per second. Since one football pitch is roughly 0.714 hectares, this equates to approximately 0.485 (rounded to 0.5) football pitches every second.


***Data Source***
FAO — Global Forest Resources Assessment 2025
https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows


**Visual Direction:**
A grid of football pitch outlines appearing over a dark forest background. One pitch appears every two seconds (0.5/sec), accumulating until the screen is full before resetting. A key explains the conversion from hectares to pitches.




---




## Homepage — Carbon Emissions Visualisation




**Concept:**
The overwhelming scale of CO₂ emissions and the impossible number of trees required to offset them in real-time.


**Data:**
Carbon Emissions → Tonnes of CO₂ per Second
Final Figure = 1,186 tonnes of CO₂ per second


***Calculation***
Global annual CO₂ emissions are approximately 37.4 billion tonnes. Dividing by the number of seconds in a year (31,536,000) gives approximately 1,186 tonnes per second. One mature tree absorbs ~0.022 tonnes of CO₂ per year, meaning it would take 54,000 trees growing for a full year to absorb the emissions from just one second.


***Data Source***
Global Carbon Project — Carbon Budget 2024
https://globalcarbonproject.org/carbonbudget/


**Visual Direction:**
A grid of tree icons (🌳) appearing over a dark, industrial or atmospheric background. One tree appears every second, representing the annual growth of 54,000 trees needed to offset that single second of emissions. Icons appear in random positions but eventually fill a structured forest grid before resetting.




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
