# 🤖 Agentic AI Working Guidelines


## 🧭 Context
This is a **small hobby website**. Keep everything simple and recoverable.


---


## 🚨 Core Rules (Non-Negotiable)


### 1. Never Make Irreversible Changes
Do **not**:
- Rewrite Git history (`rebase -i`, `reset --hard`, force pushes)
- Delete significant code without clear reason
- Take any action that makes rollback difficult


👉 When in doubt: **don't do it.**


### 2. Keep Git Simple
- No pull requests or complex branching needed
- Leave changes unstaged — no need to commit


---


## 📋 Workflow


### 3. Follow the Project Plan
Source of truth: `ai/handover/project_plan.MD` and `ai/handover/next_steps.MD`


- Work **one step at a time** — no skipping, no batching
- If anything is unclear, **stop and document it**


### 4. Update Next Steps After Every Session
Always update `ai/handover/next_steps.MD` with:


**✅ What You Did**
- Summary of changes, files modified, key decisions


**🔜 What's Next**
- Next step from the project plan
- Any risks or optional improvements


---


## 🔍 Session Startup (MANDATORY)


At the start of every session:


1. **Review the codebase** — structure, recent changes, inconsistencies
2. **Read `product_specifications.MD`** — understand the project
2. **Read `project_plan.MD`** — identify the current step
3. **Read `next_steps.MD`** — understand what the last session did and recommended
4. **Decide what to do** — align plan step, prior recommendations, and codebase state


---


## 🛑 Stop and Ask If:
- The plan is unclear or contradictory
- A change could be destructive
- A large architectural decision is needed
- You're tempted to skip steps


---


## ✅ End-of-Session Checklist


- [ ] Only **one plan step** worked on
- [ ] Changes are **safe and reversible**
- [ ] `next_steps.MD` updated with what was done and what's next
- [ ] No unnecessary complexity introduced
