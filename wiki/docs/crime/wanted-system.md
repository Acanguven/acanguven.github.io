---
title: Wanted System
description: Wanted level, remaining sentence, criminal record tracking, and escape decisions
---

# Wanted system

Your character tracks several **crime-related** pieces of state at once:

| Concept | Role |
| --- | --- |
| **Wanted** | You are actively sought; interceptors and police events can fire |
| **Remaining sentence** | Pressure from crimes and judgments; drives how long you serve in prison |
| **In prison** | You are serving time in the crime module’s prison loop |
| **Criminal record** | Long-term tally that grows when sentenced; see [Criminal record](./criminal-record) |

## How you become wanted

When illegal outcomes add sentence time (success or failure):

- **Remaining sentence** goes up by that many days
- If you were not wanted and not already in prison, you become **wanted** and the game logs your first wanted entry
- If you were already wanted (but not in prison), logs show escalation
- If you are **already in prison**, your judgment **extends** in place

## Reducing remaining sentence

The game can **subtract** from your **remaining sentence** (never below zero). When **remaining sentence** hits **zero**, **wanted clears** automatically.

:::info
Items or story effects that “reduce your sentence” on the outside use the same remaining-sentence pool. Time served in prison also eats those days day by day until release.
:::

## Consequences of being wanted

- **Travel friction** — crime module interceptors can trigger when you change location (home vs road variants)
- **Stress on stats** — chases and failed escapes hit health, morale, or energy
- **Prison** — capture applies your stacked **remaining sentence** as the baseline for your stay

## Escape decisions: at home vs on the road

When police pressure triggers during movement, the game may offer **decision** checks:

- **Escape at home** — chase resolution when the situation is home-adjacent
- **Escape on the road** — chase resolution in open travel

Success lets you **slip away**; failure typically deepens the situation (more days, injury, or arrest paths depending on context).

:::warning
Do not treat wanted as “free” debuff time. Every extra chunk of crime time **stacks remaining sentence**, which becomes **real prison time** if you are caught.
:::

## Quick reference

| Situation | What usually happens |
| --- | --- |
| First crime while clean | Wanted turns on; days accumulate |
| More crime while wanted | Days keep stacking; logs escalate |
| Crime while in prison | Judgment **extends** in-cell |
| Sentence reduction / release | Remaining sentence drops; zero clears wanted |
