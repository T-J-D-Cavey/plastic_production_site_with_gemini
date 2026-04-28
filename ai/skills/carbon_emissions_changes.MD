---
title: Carbon Emissions Data & Calculations
description: Specification for the carbon emissions visualization, including data sources and math.
relevance: Critical for implementing the CarbonEmissionsVisualisation component.
---
Final Section Structure
1. Dynamic headline counter

Since you arrived, X tonnes of CO₂ have been released into the atmosphere from fossil fuels alone.

X = 1,186 × seconds_on_page
2. Context line

Every second, 1,186 tonnes of CO₂ enter the atmosphere — faster than nature can absorb it. We have a finite carbon budget before we lock in catastrophic warming, and we're burning through it.

3. Visual key

1 🌳 = 54,000 trees growing for a year, needed to absorb one second of emissions

# Carbon Emissions — Data & Calculations

## Final Figure

≈ **1,186 tonnes of CO₂ emitted per second**

---

## Calculations


Final Figure
≈ 1,186 tonnes of CO₂ emitted per second

Calculations
1. Annual CO₂ emissions

Global annual CO₂ emissions ≈ 37.4 billion tonnes CO₂/year (37,400,000,000 tonnes/year)

2. Emissions per second

Seconds per year = 365 × 24 × 60 × 60 = 31,536,000
Emissions per second = 37,400,000,000 ÷ 31,536,000 ≈ 1,186 tonnes/sec

3. Cumulative emissions since arrival

Let E(t) = cumulative emissions since page load
r = 1,186 tonnes/sec, t = elapsed seconds
E(t) = r × t = 1,186 × t

4. Trees required to offset one second of emissions

One mature tree absorbs ≈ 0.022 tonnes CO₂/year
Trees needed to offset 1 second of emissions (over 1 year):
1,186 ÷ 0.022 ≈ 53,909 trees (rounded to 54,000 trees)
Interpretation: 54,000 trees must grow for a full year to absorb what is emitted in a single second

5. Trees required since arrival

Let T(t) = trees needed to offset all emissions since page load
T(t) = 54,000 × t (one additional tree icon appears per second)

---

## Data Sources

- Global Carbon Project: https://globalcarbonproject.org/carbonbudget/
- USFS Tree Carbon Calculator: https://www.fs.usda.gov/ccrc/topics/urban-forests/urban-tree-carbon-calculator