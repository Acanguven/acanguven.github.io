---
title: Prison Life Guide
description: Prison locations, daily rules, mini-games, and sentence reduction in Life Simulator Reloaded
---

# Prison life guide

Prison is a **full subsystem**: multiple locations, daily skill growth, random events, gem sinks, and several mini-games. This page is the **canonical deep dive** for doing time efficiently (or escaping).

## Prison locations

| Location | Role |
| --- | --- |
| **Cell** | Home base; letter writing; meditate (also chapel) |
| **Prison Gym** | Fight training mini-game |
| **Prison Library** | Letter writing; **random “library find”** events count toward books read (Scholar quest) |
| **Prison Yard** | Smuggle, fight training, gang meetings, community service |
| **Prison Clinic** | **See doctor** (core action) when diseased; **counseling** (crime action) |
| **Prison Cafeteria** | Random **brawl** or walk-away events; food poisoning risk |
| **Prison Chapel** | **Pray** (daily); **Meditate** (mini-game, daily) |
| **Prison Workshop** | Craft shiv; community service |
| **Solitary** | Punishment room; auto-release after stored release day → back to cell |

:::warning
**Solitary** drains **−10 morale per day** while you are there. Failed escape streaks, failed riot, and guard fights can send you here (+5 extra days on top of other penalties in some escape paths).
:::

## Every-day prison rules

While you are **in prison**:

| Rule | Effect |
| --- | --- |
| **Prison Life skill** | **+1** per day (passive) |
| **Prison Rep decay** | **−1** every **10** full days you have served in prison |
| **Good behavior tick** | If **not in a gang**, sentence **> 10** days, and **no infraction for 7+ days**, **5%** daily chance: **−1** day |
| **Random events** | ~20% daily roll from a large pool: shakedowns, parole hearing, cafeteria, library, yard, gang betrayal, warden deal, etc. |

On **first imprisonment**, existing Prison Rep above zero is **cut by ~30%**. Plan to rebuild rep if you were “famous” inside before.

---

## Core actions (mechanics summary)

### Escape — memory puzzle (pattern sequence)

- **Cooldown:** **3** days after attempt if you have no recent escape failures; **5** days if you **have failed before**.
- **Difficulty:** Grid size, sequence length, and flash speed scale with **remaining sentence**; high **Prison Life (70%+)** can shorten the sequence **unless** you carry a **blueprint** (blueprint instead grants **2 attempts**).
- **Success:** You leave prison, but become **wanted** again with a **heavy** extra stack on **remaining sentence**.
- **Failure:** **+10** days (first fail tier); **+15** from second fail onward; big morale/health hit; at **3+** consecutive fails → **solitary** + **+5** days.

:::tip
Treat escape as a **late-game hail mary**. The blueprint item is the most reliable way to buy a second pattern attempt on the same run.
:::

### Pray — Chapel, once/day

**+15 morale**, **+5 health**, **+3 Prison Life**.

### Meditate — Chapel **or** Cell, once/day — balance minigame (stay in the zone)

Success: **+20 morale**, **+15 energy**, **+5 Prison Life**. Fail: small morale consolation.

### Craft shiv — Workshop — timing bar minigame

Success: gain **shiv** (weapon for stab attack). Fail: **+5** sentence days.

### Smuggle — Yard — reaction game (tap on green, avoid red), **3-day** cooldown

Success: random **contraband** (cigarettes / ramen / coffee), **1–3** qty, **+4** Prison Rep. Fail: **+3** days.

### Write letter — Cell or Library, once/day

**+10 morale**, **+2 Prison Life**, **+5 friendship** with a random family NPC if any exist.

### Fight training — Gym or Yard, once/day — rapid-tap stamina meter

Success: **+10 fighting**, **+5 sports**, **+3** Prison Rep, **−20 energy**. Fail: smaller fighting gain, **−10 energy**.

### Riot — needs **Prison Rep ≥ 100** **and** **Prison Life ≥ 30%** — quick-target tapping challenge

**Once per sentence.** Success roll:

| Roll (1–100) | Outcome |
| --- | --- |
| ≤ 20 | **Escape** (same consequence track as a successful prison escape) |
| 21–60 | **+25** rep, **+30** Prison Life |
| 61–90 | Up to **−10** days sentence |
| else | **+5** days, **−20** health |

Fail mini-game: **+15** days, heavy health/morale hit, **−8** rep, **solitary**.

### Form gang — **Rep ≥ 80**, **2+** jail friends at **50+** friendship

Triggers a **tough** prisoner **fight**. Win: gang active, rep **+10**, **+3** days sentence (initiation cost), Kingpin milestone. Lose: rep loss, no gang.

**Gang meeting** (yard or cell, every **2** days): big rep swing and Prison Life; buffs member friendship.

### Community service — **non-gang**, workshop/yard — interactive skill challenge, **3-day** cooldown

Success: **−3** days, **+3 Prison Life**, **−20** energy. Blocked if sentence ≤ **10** days.

### Good behavior report — **non-gang**, **10-day** cooldown between reports

If **≥ 10** clean days since last **infraction** marker: **−2** days. Else denied log.

### Counseling — Clinic, **non-gang**, **2-day** cooldown between sessions

Each session: **+10 morale**, **+5 Prison Life**. After **5** total sessions (lifetime): one-time **−5** days.

### Hire lawyer — **15 gems**, **once** per sentence

Requires sentence **> 15** days. Reduces **15–25%** of current **remaining sentence** (minimum **3** days shaved), with a related achievement.

---

## Random events worth knowing

- **Guard shakedown** — if you hold contraband, a **spot-the-difference** style check; fail confiscates gear + **+3** days
- **Parole hearing** — **card-matching memory** minigame; gang members auto-denied; success cuts **30–50%** of **remaining sentence** (scaled)
- **Cafeteria** — 50/50 brawl (lighter **+2** day extension on standard outcome) or cowardice rep/morale hit
- **Education credit** — after **3+** books read (from library progress), non-gang: **−3** days

:::info
**Gang** blocks community service, counseling, good-behavior tick, and parole — you trade **structure** for **power** and meeting loops.
:::
