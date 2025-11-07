let reference_libraries = {  
  "reference_libraries": {
    "two_economies": {
      "title": "Understanding The Two Economies",
      "purpose": "Identify which economy you're speaking with to adjust tone, phrasing, and depth",
      "old_economy": {
        "industries": "Industrials, energy, banks, PE groups, M&A, manufacturing, logistics, professional services, construction, insurance, legacy verticals",
        "values": "Credibility, brand integrity, and stability",
        "approach": "Dial back excitement and sophistication — translate what you do into their world"
      },
      "new_economy": {
        "industries": "Startups, scale-ups, SaaS, agencies, staffing firms, AI, marketing companies",
        "values": "GTM sophistication, infrastructure, and talent",
        "approach": "Use Mechanism Framing™ — be direct about what you do but emphasize the infrastructure and talent layer that makes it work. Emphasize vendor relationships, access to top-tier talent, and 45-day milestone de-risking."
      }
    },
    "carpet_framework": {
      "title": "CARPET Framework",
      "subtitle": "The 6 Variables That Build The Financial Model",
      "purpose": "Systematic checklist for extracting financial modeling variables during discovery to build realistic, defensible 45-day milestones",
      "variables": [
        {
          "letter": "C",
          "name": "CYCLE",
          "description": "Sales cycle length, decision timeline",
          "questions": [
            "How long does it typically take from first contact to closed won?",
            "What's your typical sales cycle from initial interest to signed contract?",
            "How many days does it usually take from first meeting to decision?"
          ]
        },
        {
          "letter": "A",
          "name": "ACV",
          "description": "Average contract value, deal size, budget range",
          "questions": [
            "What's the average contract value or LTV of a new account?",
            "What's the typical deal size you're working with?",
            "What's the range of deals you typically close?"
          ]
        },
        {
          "letter": "R",
          "name": "REP",
          "description": "Best rep performance, meetings per month, conversion rates",
          "questions": [
            "Who's your best performing rep? What makes them so successful?",
            "How many meetings does your top performer book per month?",
            "How many meaningful conversations typically result in one closed deal?"
          ]
        },
        {
          "letter": "P",
          "name": "PIPELINE vs REVENUE",
          "description": "Current pipeline status, revenue goals",
          "questions": [
            "What's your current pipeline looking like? How much revenue are you tracking?",
            "Are you more focused on building pipeline or closing revenue right now?",
            "How much pipeline does one rep generate per month?"
          ]
        },
        {
          "letter": "E",
          "name": "ENVIRONMENT",
          "description": "Technical requirements, compliance, infrastructure",
          "questions": [
            "Are there any compliance or volume restrictions we should be aware of?",
            "What platforms or systems do you currently use to manage commercial conversations?",
            "Would proprietary infrastructure for execution be supported internally?"
          ]
        },
        {
          "letter": "T",
          "name": "TIMELINE & DECISION-MAKERS",
          "description": "Decision process, approval chain, timeline",
          "questions": [
            "Who else would be involved in a decision like this?",
            "What's your typical decision timeline? How long does it usually take?",
            "Who would need to sign off on a solution like this?"
          ]
        }
      ]
    },
    "discovery_framework": {
      "title": "Discovery Framework — Required Outputs",
      "purpose": "Understand what discovery IS and the non-negotiable outputs you must extract",
      "what_discovery_is": "Discovery is a controlled interrogation. It is a precise, linear sequence of questions that extracts the anchors we use to engage a company's focus, benchmarks, and internal economics so you can close.",
      "required_outputs": {
        "title": "The 4 Non-Negotiable Artifacts",
        "standard": "You earn the right to scope only when you can speak back—cleanly, from memory—four artifacts. If any are missing, book Discovery Part 2. No exceptions.",
        "artifacts": [
          {
            "number": 1,
            "name": "Anchor & Horizon",
            "definition": "The outcome you will be judged on—tied to their economics and time-boxed.",
            "standards": [
              "Choose anchor by cycle reality: Short cycle (≤30-45 days) → Pipeline pre-anchor → Revenue anchor. Longer cycle (>45+ days) → Pipeline anchor.",
              "Set benchmark: Baseline = ~1.5× - ~1.8× & North Star = ~2×+",
              "Time box: 45-day milestone inside a 90-day engagement"
            ],
            "formula": "[Pre-Anchor Pipeline] within [Milestone days], pegged to [Closing Average] to realize [Closing Average x Pipeline] in revenue by [End of engagement date] due to a short sales cycle (sales cycle range).",
            "example": "$7M in pipeline within 45 days; pegged to a ~12% closing average to realize $840,000 in revenue by day 90 due to a short sales cycle (~1-3 weeks/closed won)",
            "fail_cues": ["Vanity targets with no math", "No clear milestone target and structure", "Anchor type chosen by guessing, preference or limited information"]
          },
          {
            "number": 2,
            "name": "Baseline Economics (The Math Today)",
            "definition": "Unit economics and funnel mechanics that make your anchor defendable.",
            "must_capture": [
              "Pricing/ACV or ARPU, gross margin %",
              "Sales-cycle length (first touch → signed/active)",
              "Stage conversions & win rate (Lead → Meeting → Show → Proposal → Close)",
              "Rep throughput (meetings or pipeline per rep/month)",
              "LTV logic (how they actually compute it)",
              "Capacity limits (meetings/week, onboarding throughput)"
            ],
            "example": "ACV $18k, ~70% GM; 60-day cycle; 25% win from proposal; avg rep 10 mtgs/mo.",
            "fail_cues": ["Guesses ('it depends')", "Missing cycle time", "Hand-waving on conversions or LTV"]
          },
          {
            "number": 3,
            "name": "Constraints & Risk Mitigations",
            "definition": "The operational, compliance, and tooling limits—and the guardrails you'll install.",
            "must_surface": [
              "Throughput & team constraints, SLAs, onboarding speed",
              "Compliance/IT/tooling limits and any mandated systems",
              "Budget gates; prior attempts and why they failed"
            ],
            "must_propose": [
              "Infrastructure requirements (sending volume, data, reps, cadences)",
              "Sequencing plan (what happens first 2–3 weeks)",
              "Acceptance criteria tied to the 45-day milestone",
              "Protection clause: continue execution until the milestone is hit—no additional cost"
            ],
            "example": "Ops can onboard +20 accts/60 days; require ≥7,500 sends/day; milestone = 15 QMs.",
            "fail_cues": ["'We'll figure ops later'", "Low-volume systems with high-volume expectations", "No mitigation language"]
          },
          {
            "number": 4,
            "name": "Decision Path & Success Criteria",
            "definition": "Exactly how the deal gets approved and what 'win' means internally.",
            "must_map": [
              "Economic buyer, technical vetoes, legal/procurement steps",
              "Timing windows and board/finance checkpoints",
              "Day-45 success criteria the champion can defend (measurable, binary)"
            ],
            "example": "CMO + CRO align; CFO signs after legal; approval this month; success = 15 QMs by day 45.",
            "fail_cues": ["Single-threaded champion", "Unknown approvers", "'Run it up the flagpole'"]
          }
        ]
      },
      "control_lines": {
        "title": "Control Lines (Use Verbatim)",
        "lines": [
          "I'm going to ask a few direct questions so the scope reflects your economics, not guesses.",
          "Ballparks are fine; the SOW needs anchors that leadership cares about most.",
          "If we hit X by Y date, that's success—agreed? Great. That's what we'll scope to."
        ]
      },
      "what_not_to_do": {
        "title": "10 Ways to Fail Fast",
        "failures": [
          "Pitch before you have the numbers",
          "Accept vague answers ('grow more,' 'ASAP') without forcing specificity",
          "Anchor to vanity goals you didn't quantify",
          "Ask late-stage questions out of order",
          "Skip decision path because 'it'll work itself out'",
          "Ignore capacity—then promise volume they can't fulfill",
          "Treat guesses as facts (especially LTV)",
          "Chase tactics (channels/seasonality) before economics",
          "Leave without success criteria the buyer agrees to",
          "Scope anyway because 'they seemed excited'"
        ]
      },
      "advisor_notes": [
        "This is your north star for the entire discovery process",
        "Reference this frequently during the call - do I have these 4 artifacts?",
        "If you can't speak-back all 4 from memory at the end, you MUST book Discovery Part 2"
      ]
    },
    "active_listening": {
      "title": "Active Listening Statements",
      "purpose": "Build rapport and demonstrate genuine understanding throughout the call",
      "acknowledgment": [
        "I can see that's really impacting your team's productivity.",
        "That makes a lot of sense - it sounds like you're dealing with some real bottlenecks there.",
        "I understand the challenge you're facing with [specific issue they mentioned].",
        "That's exactly the kind of situation we help companies navigate."
      ],
      "building_rapport": [
        "It sounds like you've been thinking about this for a while.",
        "I can tell this is important to you and your team.",
        "That's a smart approach - many companies in your position face similar challenges.",
        "You're absolutely right to be thinking about this now."
      ],
      "transitioning": [
        "Help me understand a bit more about your current situation...",
        "That's really helpful context. I'm curious about...",
        "Based on what you've shared, I'd love to understand...",
        "That gives me a good picture. A few questions to help me understand your setup better..."
      ]
    },
    "discovery_objection_handling_os": {
      "title": "Discovery Objection Handling OS™",
      "subtitle": "Field-tested responses to every objection you'll face in discovery",
      "purpose": "Master all 15+ discovery objections with exact scripts and playbooks built from real calls",
      "introduction": "Every sales conversation will surface objections. They're not signs of failure or rejection—they're signals. A prospect raising an objection is still engaged. The real mistake is to overreact, debate, or get stuck in 'objection tennis.'",
      "core_principles": [
        "Acknowledge, then pivot. Never wrestle with an objection. Recognize it quickly, then return to your discovery process.",
        "Lean in. Objections are good news. They give you context you can anchor against in your Scope of Work (SOW).",
        "Control the pace. Don't live inside the objection. Use it as a bridge back into your questions and keep the call moving.",
        "Anchor on pipeline. Revenue, referrals, and vendor scars will come up, but our north star is always pipeline value."
      ],
      "objections": [
        {
          "number": 1,
          "title": "'Just Meetings?' or 'How do we know you'll actually deliver meetings, not just leads?'",
          "category": "Pipeline Math & Value",
          "the_objection": "When you start talking about multipliers and pipeline credits, some prospects — even senior ones like CFOs or directors — will act like they 'don't understand' the math. They'll question what the introductions mean, or pretend they can't connect the dots between meetings → pipeline → revenue.",
          "why_they_do_it": [
            "It's a negotiation move: if they blur the math, they can try to reduce your leverage.",
            "They may not want to admit internally what their conversion benchmarks really are.",
            "Or they simply don't want to give you the credit you're owed without a fight."
          ],
          "how_to_handle": [
            {
              "step": "Anchor Confidence in Their Process",
              "script": "Of course you already have a sales system in place. Would it be wrong for me to assume you have people on your team who know how to take meetings and convert them into accounts?",
              "goal": "Get them to agree: 'Yes, we do.'"
            },
            {
              "step": "Shift Back to Pipeline Reality",
              "script": "Great — so these opportunities we're adding are going into that same process. What does that process look like? How many producers do you have, and what's their average performance?"
            },
            {
              "step": "Pull Out Internal Benchmarks",
              "benchmarks": [
                "Close rate (e.g., 15%).",
                "Sales cycle length (e.g., 45–60 days).",
                "Average account value or LTV."
              ]
            },
            {
              "step": "Do the Math With Them",
              "script": "So let's say your best producer brings 10 conversations a month and converts ~15% of them. That's 1–2 new accounts a month.<br><br>Our engagement is scoped to bring 35 qualified executive-level meetings over the next 90 days. At a 15% conversion, that's ~5 new accounts. Even if we haircut it to 10%, that's still 3–4 accounts.<br><br>And you told me each account is worth ~$65K LTV, right? So you can see the potential ROI here."
            },
            {
              "step": "Close the Loop",
              "script": "So the math pencils itself. Even at worst case, the engagement pays for itself several times over — and multipliers only accelerate that effect."
            }
          ],
          "key_lesson": "Don't let a prospect stall you by 'playing dumb.' Pull their own numbers out of them, confirm their sales process, and then use their math against them. This keeps the conversation anchored in facts they can't deny, while reinforcing your positioning as someone who engineers pipeline value, not someone who's guessing.",
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After handling this objection, you've extracted their conversion benchmarks and sales process information. Return to discovery:",
            "options": [
              {
                "if": "You haven't fully mapped their sales process yet",
                "then": "Continue with <a href='#' onclick=\"loadContent('discovery_middle_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Middle of Funnel — Sales Process & Conversion</a> to understand handoffs and process flow"
              },
              {
                "if": "You have process but need revenue mechanics",
                "then": "Move to <a href='#' onclick=\"loadContent('discovery_bottom_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Bottom of Funnel — Revenue Mechanics</a> to capture ACV, LTV, and ownership"
              },
              {
                "if": "You have conversion data but need CARPET variables",
                "then": "Continue with <a href='#' onclick=\"loadReferenceContent('carpet_framework'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>CARPET Framework</a> to extract remaining variables (C, A, R, P, E, T)"
              }
            ],
            "default": "The natural flow after establishing pipeline math is to deepen your understanding of their conversion process → <a href='#' onclick=\"loadContent('discovery_middle_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Middle of Funnel</a> or <a href='#' onclick=\"loadContent('discovery_bottom_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Bottom of Funnel</a>"
          }
        },
        {
          "number": 2,
          "title": "'We work through referrals/we only have a warm channel'",
          "category": "Channel & Growth Model",
          "summary": "This mini-course tackles the #1 objection in Revenue Advisory sales: 'Do you already have connections? We grow through referrals.' It shows you how to validate, spin, and reframe this objection into an advantage—anchoring on outcomes instead of networks—so you close with authority instead of being commoditized.",
          "reference": "See full mastery course: 'Referrals & Connections Objection — Full Mastery Course' in Reference Libraries",
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After handling the referrals objection, you've validated their channel and opened them to new channels. Continue discovery:",
            "default": "Return to <a href='#' onclick=\"loadContent('discovery_top_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Top of Funnel — Demand Generation</a> to understand their current channels, or continue with <a href='#' onclick=\"loadContent('discovery_middle_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Middle of Funnel</a> to understand their conversion process"
          }
        },
        {
          "number": 3,
          "title": "'We've tried vendors; we're wary of paying upfront / want guarantees' or 'We tried outbound before, but it didn't work'",
          "category": "Vendor Fatigue & Risk",
          "where_it_shows_up": "This objection surfaces when prospects reference bad experiences with past vendors. They're often skeptical about paying upfront, demand guarantees, or want reassurance that they won't be burned again. It's rooted in vendor fatigue rather than true disqualification.",
          "core_playbook": [
            {
              "principle": "1. Lean In",
              "content": "Don't fight the objection—treat it as good news. Their history means they've already invested in this type of solution, so you know budget and intent exist.",
              "script": "That's great news, you've had exposure to different channels which means you're open minded and trying to figure it out."
            },
            {
              "principle": "2. Don't 'Do Objections'",
              "content": "Objections should not derail the call. Treat them as positive signals, lean in briefly, and then return to your script. They are often just surface-level stalls, not real barriers - especially in discovery."
            },
            {
              "principle": "3. Guarantees vs. Risk Mitigation",
              "content": "Guarantees belong to transactional lead-gen agencies. In advisory, the focus is on structuring risk so that even the worst-case scenario is still ROI-positive. That becomes the true guarantee."
            },
            {
              "principle": "4. Language for Upfront Pushback",
              "content": "Acknowledge the concern about paying upfront, then pivot to the engagement model. Position it as a structured process: numbers will be plugged into the model, and only then can you confirm whether results are achievable."
            },
            {
              "principle": "5. Position the Call as Due Diligence",
              "content": "Discovery calls are not about proving capability; they are about testing fit. Frame the first call as mutual due diligence, with the goal of gathering information to build an engagement model. Conviction should come later, once the Scope of Work is presented."
            },
            {
              "principle": "6. Confidence Timing",
              "content": "Hold back certainty in early conversations. Save confidence and enthusiasm for after the due diligence and engagement model are complete, where they carry more weight and credibility."
            }
          ],
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After addressing vendor fatigue, you've reframed the conversation around due diligence and risk mitigation. Return to discovery:",
            "default": "Pivot back to gathering the information needed for the <a href='#' onclick=\"loadReferenceContent('discovery_framework'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Engagement Model</a>. Continue with discovery questions—whether <a href='#' onclick=\"loadContent('discovery_top_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Top of Funnel</a>, <a href='#' onclick=\"loadContent('discovery_middle_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Middle of Funnel</a>, or <a href='#' onclick=\"loadContent('discovery_bottom_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Bottom of Funnel</a>—to build the engagement model"
          }
        },
        {
          "number": 4,
          "title": "'Who are you / entity size / your deck lacks hard details'",
          "category": "Credibility & Authority",
          "where_it_shows_up": "This objection arises when prospects question your credibility based on entity size or when a pitch deck lacks specific hard details (e.g., headcount, infrastructure). They may acknowledge success stories but still ask for 'facts and details' to feel confident in your ability to deliver.",
          "core_playbook": [
            {
              "principle": "1. Answer with Authority, Not Defensiveness",
              "content": "Provide a concise credibility frame: position yourself as President and one of a small group of partners, backed by long-standing vendors and campaign managers. Anchor your role in sponsor and business development, making it clear you are the forward-facing arm of a larger structure."
            },
            {
              "principle": "2. Highlight Vendor and Team Depth",
              "content": "Emphasize your leverage through world-class campaign managers and long-term vendor partners. Make it clear that regardless of the industry, you have the infrastructure to outperform benchmarks consistently."
            },
            {
              "principle": "3. Anchor on Market Demand",
              "content": "Reassure prospects that unmet demand in every new market is what drives results — not headcount or entity size. The outcomes you engineer speak louder than internal staffing numbers. You're a boutique shop, be proud of it."
            },
            {
              "principle": "4. Leverage the Commercial Finance Arm",
              "content": "This is the credibility accelerator. After addressing the surface-level objection, layer in the fact that your firm has a Commercial Finance division with dedicated partners, often family-based (brother, father, uncle, etc.). This arm is larger and focused exclusively on: Building long-standing relationships with credit funds and lenders, Executing ABL (asset-based lending) transactions, Supporting acquisition financing for operators and businesses, Actively participating in M&A, both helping sell-side clients find deals and helping buy-side operators source capital for their own deals.",
              "impact": "Framing this makes clear that you're not just a boutique advisory — you're tied into active capital markets activity."
            },
            {
              "principle": "5. Keep It Tight and Confident",
              "content": "This objection is a test of composure. Respond briefly, establish authority, layer in the Commercial Finance division, then pivot back into discovery by asking your next question. Never over-explain. Professional, confident delivery here makes the objection disappear."
            }
          ],
          "key_lesson": "Entity size questions are rarely about size — they're about confidence. A fast, authoritative answer, combined with the weight of an active Commercial Finance arm, reframes the conversation entirely. Done properly, it positions you as more than credible: it positions you as a partner with both advisory reach and a financing division that's active in real transactions.",
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After establishing credibility, immediately pivot back into discovery to keep momentum:",
            "default": "Return to your discovery questions without over-explaining. Continue with <a href='#' onclick=\"loadContent('discovery_top_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Top of Funnel</a>, <a href='#' onclick=\"loadContent('discovery_middle_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Middle of Funnel</a>, or <a href='#' onclick=\"loadContent('discovery_bottom_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Bottom of Funnel</a> discovery to gather the data needed for the engagement model"
          }
        },
        {
          "number": 5,
          "title": "'Non-refundable? Refunds / guarantees?'",
          "category": "Risk & Guarantees",
          "where_it_shows_up": "Prospects often ask about refunds or guarantees before committing. This comes from vendor fatigue and risk aversion — they want certainty that the engagement won't be wasted money.",
          "core_playbook": [
            {
              "principle": "1. Why Guarantees Don't Scare You",
              "content": "This is one of the easiest objections to handle. You're not in the lead-gen world where guarantees are gimmicks. In advisory, you de-risk engagements structurally — which creates a built-in guarantee. The milestone is tied directly to qualified, executive-level meetings."
            },
            {
              "principle": "2. Anchor in Pipeline Value",
              "content": "Before the sale, you model pipeline math tied to the prospect's own LTV benchmarks. Every introduction has a calculable value. That's the foundation for why the engagement is ROI-positive by design."
            },
            {
              "principle": "3. Use the Milestone Structure as the Guarantee",
              "examples": [
                "$30K engagement → $15K upfront / $15K at milestone.",
                "$70K engagement → $35K upfront / $35K at milestone.",
                "Average engagements fall around $50K split in half."
              ]
            },
            {
              "principle": "4. The Built-In Safety Net",
              "content": "If the milestone isn't hit by the halfway mark, the work doesn't stop. The engagement continues until it is delivered. That means the worst case is still ROI-positive: the client eventually receives the guaranteed number of decision-maker meetings that justify the upfront payment."
            },
            {
              "principle": "5. How to Position It on the Call",
              "steps": [
                "Acknowledge the concern: it's reasonable to hesitate on upfront commitments.",
                "Reframe with confidence: 'Our model is milestone-based. If we don't hit the milestone on time, we keep working until we do, no matter how long it takes. That's your guarantee.'",
                "Pivot back into discovery: once you've reframed, continue your questions to keep momentum."
              ],
              "remember": [
                "Never say 'non-refundable' upfront.",
                "Anchor on risk mitigation: structured 90-day scope with day-45 benchmarks.",
                "Milestones only unlock after delivery.",
                "Whether it takes 45, 50, or 60 days → client still gets promised output.",
                "That's essentially a guarantee without calling it one."
              ]
            }
          ],
          "pacing_technique": {
            "title": "Using Pacing to Loosen the Objection",
            "content": "When this objection comes up, it's also a great moment to bring pacing into the conversation. You don't just want to reassure with structure — you want to regain control by asking questions that shift the frame back to discovery.",
            "questions": [
              "'How fast or slow would you like these meetings to come in?'",
              "'What does the ideal daily or weekly volume of qualified conversations look like for you?'"
            ],
            "anchor": "Regardless of pacing, the milestone is the milestone. If it takes 50, 60, or 75 days to hit it, the work continues until it's met. No additional fees, no unlocked milestone invoice, no risk of paying for something not delivered.",
            "full_script": "That's one of the most important aspects of every engagement we put together. We completely mitigate your risk to the point where it essentially is a guarantee.<br><br>We scope everything against benchmarks — typically a 90-day scope with a midpoint milestone at day 45.<br><br>Whether it takes us 45 days, 50 days, or even 60 days, you put X in and you always get Y out. You don't unlock the second milestone payment until we've delivered.<br><br>Clients actually like this structure more, because it ensures you only move forward when the outputs are real and measurable."
          }
        },
        {
          "number": 6,
          "title": "'Can you show me case studies / proof first?'",
          "category": "Proof & Credibility",
          "where_it_shows_up": "Prospects ask for 'proof' when they're testing your frame. It's less about documents and more about whether they believe your positioning.",
          "core_playbook": [
            {
              "principle": "1) Say yes—happily.",
              "content": "You have two white-labeled case studies (possibly more if you have your own) and a clean, executive-level advisory deck ready. Respond confidently: you can share them (and, if relevant, a more recent ongoing-client example). Then move straight back into discovery."
            },
            {
              "principle": "2) Diagnose the why.",
              "content": "A proof request often signals a frame issue. Audit yourself: Are you presentable? Did you speak clearly and articulate the model? Did your tonality convey certainty? Sales is a transfer of confidence—whatever energy you carry is the energy they receive."
            },
            {
              "principle": "3) Re-establish role clarity.",
              "content": "You're the President/orchestrator, not a technician. Hold posture, speak to outcomes, and keep the conversation at the executive level (pipeline, milestones, ROI logic)—not in the weeds."
            },
            {
              "principle": "4) Reset the frame, then proceed.",
              "content": "Acknowledge the request, confirm you'll send the materials, and immediately resume your questions to control pace. Proof is easy; your job is to keep momentum toward the SOW."
            }
          ],
          "asset_pack": [
            "Case Study 1",
            "Case Study 2",
            "Executive-level advisory deck"
          ],
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After addressing proof requests, immediately resume discovery to maintain control:",
            "default": "Say yes to sending case studies, then immediately pivot back to discovery. Continue with <a href='#' onclick=\"loadContent('discovery_top_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Top of Funnel</a>, <a href='#' onclick=\"loadContent('discovery_middle_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Middle of Funnel</a>, or <a href='#' onclick=\"loadContent('discovery_bottom_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Bottom of Funnel</a> questions to keep momentum toward the SOW"
          }
        },
        {
          "number": 7,
          "title": "'So how do you get the results?' (Mechanism Questions)",
          "category": "How & Mechanisms",
          "principle": "Mechanism Framing: How to explain how you work without collapsing into vendor language. Talking about tactics (emails, lists, inboxes) anchors you to $2K/mo vendors. Executives buy outcomes, not mechanics.",
          "what_it_does": [
            "Reframe mechanics into capabilities (world-class talent, proprietary infra, orchestration).",
            "Use conditional positioning ('If X, in tandem with Y, produces Z').",
            "Redirect 'how' questions back to pipeline certainty, revenue acceleration, and risk mitigation.",
            "You maintain an advisory frame, justify premium pricing, and protect margin."
          ],
          "specific_handles": [
            {
              "question": "'So… is this cold email?'",
              "lean_in": "Oh this is a great question, I actually get excited to talk about this…",
              "reframe": "We've invested over six figures into a private internal infrastructure and this allows us to plug into any and every channel there is. Email is often the sharpest tool for B2B, but the channel is just the vehicle.",
              "anchor_back": "What matters is the engagement model — until we can put that together, which allows us to see the end of the engagement before we even begin, it's not possible to answer this tactically."
            },
            {
              "question": "'So is this mostly LinkedIn?'",
              "lean_in": "Excellent question…",
              "reframe": "Through this private infrastructure we're able to do advertising on Meta, Facebook, Google if that's the best lane, and we also have mass scalability in LinkedIn, email, and calls. For B2B we might lean more into LinkedIn, email, and calls; for B2C — like insurance — we lean heavier into SMS and ads. What we do is build out a stack of channels that best suit the market.",
              "anchor_back": "But again, the channel is just the vehicle — the engagement model is what matters, and until we can put that together, which allows us to see the end of the engagement before we even begin, it's not about LinkedIn or any single channel."
            },
            {
              "question": "'Are you using AI? What's the secret sauce?'",
              "lean_in": "Glad you asked…",
              "reframe": "One thing we've learned is the channel doesn't matter — it's the messaging. That's the crown jewel. We lean on world-class copywriters we've worked with for years. They create enterprise-grade messaging, and then we deploy that through infra that ensures scale and compliance.",
              "anchor_back": "So the real 'secret sauce' is how messaging + infra ties back to the engagement model — and until we can put that together, which allows us to see the end of the engagement before we even begin, the details of AI or tools aren't what matters."
            },
            {
              "question": "'How do you personalize the outreach?'",
              "lean_in": "Great — personalization is huge…",
              "reframe": "We don't mean {FirstName}. We mean relevance — expansions, new hires, acquisitions, press releases. That's what drives engagement. Our infra then compliantly scales that messaging, protecting your brand.",
              "anchor_back": "And the way personalization translates into ROI is through the engagement model — until we can put that together, which allows us to see the end of the engagement before we even begin, it's not about whether it's {FirstName} or AI, it's about outcomes."
            },
            {
              "question": "'Okay, but how exactly do you do this?' (Catch-all 'how')",
              "lean_in": "That's the right question…",
              "reframe": "It's an all-in-one system — we build a channel stack tailored to the market. But the crown jewel is messaging, not the channel. We reverse engineer the engagement so we can see the end before we even begin.",
              "anchor_back": "That's why the answer isn't in tactics. Until we put the engagement model together, which allows us to see the end of the engagement before we even begin, there's no point in focusing on the mechanics."
            },
            {
              "question": "'What if it takes longer than 45 days?'",
              "lean_in": "Excellent — timing is always important.",
              "reframe": "We typically do 90-day engagements with a midpoint milestone at day 45. If it takes us 50, 55, even 60 days, we just keep working until it's delivered — without you making that middle milestone payment.",
              "anchor_back": "That's why the engagement model matters — it lets us scope benchmarks so your risk is fully mitigated. Until we can put that together, which allows us to see the end of the engagement before we even begin, timing questions don't have real context."
            }
          ],
          "teaching_device": "The engagement model line is the kill-shot. No matter what objection — cold email, LinkedIn, AI, personalization, timing — members pivot back to: '…until we can put that together, which allows us to see the end of the engagement before we even begin.' That way, mechanism questions never drag them into vendor-land.",
          "conclusion": [
            "We've invested 6-figures into private internal infrastructure.",
            "→ Lets us plug into any channel (email, LinkedIn, calls, SMS, paid ads).",
            "Channels are secondary. 80% of results come from messaging, not the vehicle.",
            "The engagement model does the answering, discovery is due-diligence - push the objections off until you have a SOW and then handle them via email of fragment Call 1 into more calls.",
            "Risk mitigation baked in → benchmarked SOW with 45-day milestones."
          ],
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After handling mechanism questions with the engagement model line, pivot back to discovery:",
            "default": "The key phrase is 'until we can put that together'—which means you need discovery data. Continue with <a href='#' onclick=\"loadReferenceContent('discovery_framework'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Discovery Framework</a> to gather the required outputs, or continue with <a href='#' onclick=\"loadContent('discovery_top_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Top of Funnel</a>, <a href='#' onclick=\"loadContent('discovery_middle_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Middle of Funnel</a>, or <a href='#' onclick=\"loadContent('discovery_bottom_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Bottom of Funnel</a> questions"
          }
        },
        {
          "number": 8,
          "title": "'Can you give me references to talk to?'",
          "category": "Proof & Credibility",
          "context": "Why the 'disgust posture' works",
          "why_it_works": [
            "Frames you as the authority. Executives don't chase references — they review case studies. By acting mildly disgusted, you communicate that this question is beneath the level you operate at.",
            "Protects your clients. You're signaling that client relationships are sacred. No client wants to be hounded by reference calls, and prospects actually respect that boundary.",
            "Redirects instantly to proof. Instead of saying 'no' flatly, you replace the request with something better: vetted case studies. This keeps control of the frame while still satisfying the desire for proof.",
            "Shows confidence. The subtext is: 'We don't need to prove ourselves through phone calls. Our results are already documented.'"
          ],
          "script": "Oh, absolutely not. We don't turn our clients into reference mills. We do a lot of business, and we can't have our clients getting four or five calls a day from people asking about us. I'm sure you wouldn't want that either if you were in their shoes.<br><br>We did that for a few years but now what we do is provide thorough case studies. These act as the reference in themselves.<br><br>They show exactly what happened, the process, and the results. So I'll send you those after the call. That way you get the transparency you're looking for without us burning out our clients.",
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After addressing the references request, redirect to proof (case studies) and continue discovery:",
            "default": "Offer to send case studies, then immediately pivot back to discovery. Continue with <a href='#' onclick=\"loadContent('discovery_top_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Top of Funnel</a>, <a href='#' onclick=\"loadContent('discovery_middle_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Middle of Funnel</a>, or <a href='#' onclick=\"loadContent('discovery_bottom_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Bottom of Funnel</a> questions"
          }
        },
        {
          "number": 9,
          "title": "'How do you define a qualified meeting?'",
          "category": "Definition & Scoping",
          "teaching_notes": [
            "Don't overload the definition. You don't want 6–7 boxes to check off. That makes the target too rigid and sets you up for failure. Keep it to 2–3 max: always include the decision-maker or lead to the decision-maker, and then 1–2 others that the client feels strongly about.",
            "Let them go first. The smartest move is to flip the question back: 'What does qualified mean to you?' This positions you as collaborative, while giving you intel on their sales process and level of sophistication.",
            "Test their sales process. Some industries don't use 'champion → climb the ladder' strategies. Others do. Ask if they've ever worked a deal up from a manager to a C-level. That tells you whether you can count those as 'qualified.'",
            "Frame it as teamwork. This isn't really an objection. It's an opportunity to become partners in defining success. Use language like: 'This is one of the areas where we work as a team. We want to agree together on what a qualified introduction means to you.'",
            "Anchor back to the Engagement Model. Always close the loop with: 'And once we've agreed on that profile, we plug it into the engagement model. That way, we can literally see the end of the engagement before we even begin.'"
          ],
          "script": "Great question — I was actually planning on asking you that in a few minutes. Defining what 'qualified' means is one of the most important parts of our process, and it's something we do together so we're aligned from the very beginning.<br><br>What we've found is that the best way to do this is to keep it simple — ideally two or three checkboxes. I'm sure one of those will be a decision-maker or someone who leads directly to the decision-maker. That always makes sense to include.<br><br>But aside from that, I'd like to hear from you: what else feels like a qualified introduction in your world other than urgency? Are there one or two other criteria that matter most to you?<br><br>Once we know that, we'll build it into the scope of work so that when we say '20 qualified meetings,' you'll know exactly who those people are.",
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After aligning on the qualified meeting definition, anchor back to the engagement model and continue discovery:",
            "default": "Once you've agreed on the definition, anchor back to the <a href='#' onclick=\"loadReferenceContent('discovery_framework'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Engagement Model</a>. This connects directly to <a href='#' onclick=\"loadContent('defining_qualified_opportunities'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>The 'Tac' — Defining Qualified Opportunities</a>. Continue with <a href='#' onclick=\"loadContent('discovery_bottom_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Bottom of Funnel</a> or other discovery sections to gather remaining CARPET variables"
          }
        },
        {
          "number": 10,
          "title": "'The timing isn't right / too busy now'",
          "category": "Timing & Urgency",
          "where_it_shows_up": "Prospects will stall with timing objections when they feel the close coming. It's not a real blocker — it's a way to slow you down and see if you'll fold.",
          "core_playbook": [
            {
              "principle": "1. Validate, Don't Resist",
              "content": "Agree with them calmly. Acknowledge that timing matters — but don't let it stop the process."
            },
            {
              "principle": "2. Reframe Around the Engagement Model",
              "content": "Position discovery as due diligence. Make clear that until an engagement model is built, there's nothing real to even evaluate. The model shows them the end of the engagement before it begins — specific numbers, scope, and milestones."
            },
            {
              "principle": "3. Push Toward the Scope of Work (SOW)",
              "content": "Timing can only be discussed after they've seen the SOW. Without it, they're reacting blind. By keeping them in the process, you move the conversation to a place where real numbers make timing obvious."
            },
            {
              "principle": "4. Control Pace With a Pivot Question",
              "script": "Totally understand. That's exactly why we're in due diligence now. Once we've built the engagement model, you'll see exactly what the end looks like before it even begins. Would it make sense to at least review that model together so you have it in front of you when timing does line up?"
            }
          ],
          "example_exchange": {
            "prospect": "We're too busy right now, timing isn't great.",
            "you": "Completely fair — timing is always important. That's why we don't make decisions at this stage. What we're doing here is just building the engagement model so you can see exactly what an engagement would look like before it starts. Once that's scoped, you'll know what's on the table, and we can decide together whether the timing makes sense. Let's get that model to you and discuss timelines then." 
          },
          "key_lesson": "Timing objections in discovery are smokescreens. Don't fight them, don't collapse into revenue talk. Validate, reframe around the engagement model, and keep control long enough to put the SOW in front of them. Once the scope is built, timing either aligns — or it doesn't. But without it, the conversation is premature.",
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After handling the timing objection, push toward completing discovery to build the engagement model:",
            "default": "Reframe around the <a href='#' onclick=\"loadReferenceContent('discovery_framework'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Engagement Model</a>—timing can only be evaluated once the SOW is built. Continue discovery to gather the data needed: <a href='#' onclick=\"loadContent('discovery_top_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Top of Funnel</a>, <a href='#' onclick=\"loadContent('discovery_middle_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Middle of Funnel</a>, or <a href='#' onclick=\"loadContent('discovery_bottom_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Bottom of Funnel</a>"
          }
        },
        {
          "number": 11,
          "title": "What's the Price?",
          "category": "Pricing & Budget",
          "where_it_shows_up": "Prospects bring up cost prematurely in discovery, often before you've laid any value or explained the engagement model. It's usually a frame check, not a real objection.",
          "core_playbook": [
            {
              "principle": "Give a Broad Range, Briefly",
              "content": "Don't dodge the question outright (that makes you look slippery). Anchor with a range so you sound confident: 'Engagements typically fall anywhere between $25K and $75K depending on scope.'"
            },
            {
              "principle": "Reframe Around Risk Mitigation",
              "content": "Immediately pull them away from price fixation and into value logic: 'What's unique about how we structure these is that risk mitigation is always the top priority. Every engagement has a milestone at the halfway point, and the scope is built so that the worst-case scenario is still significantly ROI positive.'"
            },
            {
              "principle": "Push to Scope, Not Numbers",
              "content": "Make it clear the real answer only comes after due diligence: 'The reality is, until we build your engagement model, it's not possible to give you an exact figure. That model is what shows you the end of the engagement before we even begin, and it's what allows us to scope a conservative, realistic outcome for both of us.'"
            },
            {
              "principle": "Position Discovery Properly",
              "content": "Frame the call as mutual due diligence: 'This conversation is simply to answer your questions and gather what we need. Once we've got that, we can build the model and present the scope, and that's where the pricing becomes specific and makes sense.'"
            }
          ],
          "primary_script": "Fair question, I can't tell what the number is but I can provide an investment spectrum.<br><br>Our typical engagements fall between $25,000 and $75,000 over a 90-day window with half of that upfront and the other half is tied to contingency.<br><br>We always prefer to walk through our full diligence process before talking numbers like everyone else, because it really does allow us to present a structured solution with a real figure.<br><br>A common scope would be our 90-day window with a 45-day milestone, we contractually obligate ourselves to a tangible number that you can point at on both day 45 and 90.<br><br>So, for example, a scope that sets 25 qualified opportunities by Day 45.<br><br>If for any reason we don't hit that milestone within that window, that second tranche of the fee doesn't unlock - and we continue servicing the engagement until we do.<br><br>The purpose of structuring it this way is to make the worst-case scenario ROI-positive for the client, while keeping our own performance completely tied to measurable results.<br><br>As our conversation unfolds today, we'll focus on the right benchmarks - what qualifies as an opportunity in your world, what markets those opportunities sit in, and who the decision-makers are that we'd need to reach in order to open those doors.<br><br>Once we've mapped that out, we can model a scope that aligns to those definitions so you have something precise to review.",
          "capitalization_framing": {
            "title": "Why Capitalization Up Front Is Non-Negotiable",
            "principle": "You can't deliver results without being capitalized up front. Capitalization funds the vendors, SDRs, list-builders, and internal capacity that guarantee the baseline milestone. No capital, no delivery. Period.",
            "key_reframe": "Your fee is never a 'retainer.' It's capitalization directly correlated to results. The only reason you can de-risk their downside is because you're capitalized.",
            "scripts": [
              "The reason we structure it this way is because capitalization directly funds delivery. That upfront payment isn't a retainer — it's what allows us to deploy the vendors, infrastructure, and team members who will hit your milestone. Without that capital allocation, we can't guarantee the baseline you need.",
              "Think of it this way: the upfront fee capitalizes the engagement. That capital funds your dedicated resources — list procurement, campaign management, SDR capacity — all of which are pre-allocated to hit your 45-day benchmark. That's why we can contractually commit to outcomes.",
              "Here's what makes this different from a retainer model: every dollar you allocate up front is directly tied to the resources we deploy on your behalf. We're not billing you for our time — we're capitalizing the infrastructure that delivers your meetings. That's the only way we can de-risk your downside.",
              "The capitalization model is what allows us to take on accountability. If we didn't have that capital up front, we couldn't pre-commit vendor capacity, list access, or SDR bandwidth — which means we couldn't guarantee a milestone. The fee and the deliverable are mathematically linked.",
              "Most agencies charge retainers and hope for results. We don't operate that way. Your upfront payment capitalizes a specific scope of work — vendor partnerships, campaign ops, outreach infrastructure — all of which are contractually obligated to hit a number. That's why the structure works."
            ]
          },
          "key_lesson": "Price questions in discovery are premature. Always give a confident range, then immediately pivot back to risk mitigation and the unique value of your scope process. Your leverage only comes once the SOW is in their hands — so keep the frame focused on due diligence, not discounts or exact numbers.",
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After handling price questions, immediately pivot back to discovery:",
            "default": "Give the range ($25K-$75K), then immediately pivot back to discovery. Continue with Discovery Framework or continue gathering data through Top of Funnel, Middle of Funnel, or Bottom of Funnel questions to build the engagement model"
          }
        },
        {
          "number": 12,
          "title": "'We already have an internal team doing this' or 'We're happy with our current system/vendor'",
          "category": "Competition & Existing Resources",
          "where_it_shows_up": "Prospects use this to push back on credibility or imply redundancy. They compare you to their existing SDR/BDR/marketing team. The subtext is: 'Why should we pay you when we already have bodies on this?'",
          "core_playbook": [
            {
              "principle": "Lean in — treat it as common and positive.",
              "script": "Great — that's common, most firms do have some internal resources.",
              "why": "You want to react positively because it's not a dismissal; it's confirmation they're already bought into outbound as a growth channel."
            },
            {
              "principle": "Clarify, don't counter.",
              "content": "This is your chance to start asking discovery-level questions. 'Can you be more specific? What channels are they running? How are they executing today?' Nine times out of ten, you'll uncover garbage outreach — spray-and-pray emails, LinkedIn spam, or no real infrastructure. That's where your confidence comes from: outperforming weak internal processes is easy."
            },
            {
              "principle": "Anchor on your engagement model.",
              "content": "You're not there to replace or interfere with their team. You're there to scope an engagement that benchmarks against what they already have. The model is designed to show whether you can outperform internal benchmarks. That's the real evaluation."
            },
            {
              "principle": "Educate and position your role.",
              "content": "Make clear that your processes, vendors, and infrastructure are more seasoned and sophisticated than any internal junior team. The very reason they're on the call is because your system worked on them. That alone proves superiority."
            },
            {
              "principle": "Tie it into their sales process.",
              "content": "Shift the frame: 'We're not trying to rebuild what you already have — we're here to fuel it.' Ask what their AEs/closers convert at. If they have a good process, you validate it and then show how your role is to feed that process with more wood for the fire."
            }
          ],
          "key_lesson": "This objection is never really about 'already having a team.' It's a credibility check. By leaning in, asking targeted questions, and anchoring back to the engagement model, you reframe it from a threat to an opportunity: you're not replacing their team, you're amplifying it and benchmarking against it.",
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After reframing the internal team objection, anchor back to the engagement model:",
            "default": "Use their existing team as a benchmark. Continue with <a href='#' onclick=\"loadContent('discovery_middle_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Middle of Funnel</a> to understand their current conversion process, or <a href='#' onclick=\"loadReferenceContent('discovery_framework'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Discovery Framework</a> to build an engagement model that benchmarks against their existing team performance"
          }
        },
        {
          "number": 13,
          "title": "'Our market is too niche'",
          "category": "Market & TAM",
          "where_it_shows_up": "Prospects frame their TAM as 'too small' or their buyers as 'too specialized.' Subtext: 'You won't understand our market, or you'll waste time trying.' Sometimes they'll rebrand it as 'We do ABM only.'",
          "core_playbook": [
            {
              "principle": "Validate scarcity",
              "script": "Totally fair — actually that's usually a good sign. Niche markets often have the least noise, which means higher engagement when the messaging is precise.",
              "why": "Lean into it as a positive, not a limitation."
            },
            {
              "principle": "Pivot into curiosity (your advantage)",
              "content": "This isn't really an objection, it's your opening. 'Can you walk me through what channels you're currently using to reach that market? How do you typically generate opportunities today?' If they say referrals, you redirect into the referral objection playbook. If not, you dig deeper into their 'ABM' claim or outbound gap."
            },
            {
              "principle": "Reframe around engagement model",
              "script": "We're not guessing here. The way this works is we build an engagement model scoped specifically to your market size and buyer profile. If the TAM is genuinely too small, the model will show that. If it's workable, the model will also show how we benchmark outcomes conservatively.",
              "impact": "That puts the burden back on the model, not opinion."
            },
            {
              "principle": "Educate on ABM",
              "script": "Exactly — and that's really what this is. It's targeted account-based messaging and channel orchestration, just built on a broader infrastructure. The difference is we've got the data + delivery to scale ABM-style outreach into a repeatable system, instead of a one-off campaign."
            },
            {
              "principle": "Dig into sales process",
              "questions": "So let's say the market is 500 accounts. What happens once you get a meeting? Who closes it? What does the conversion rate look like?",
              "why": "That intel is what lets you anchor back into pipeline math later in the SOW."
            }
          ],
          "key_lesson": "This objection is actually a gift. 'Too niche' forces the conversation into TAM, ICP, and sales process — exactly where you need to be. Scarcity doesn't weaken the model; it sharpens it. By validating, digging with curiosity, and reframing as ABM, you keep control of the frame and move discovery in the direction you want anyway.",
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After handling the 'too niche' objection, use it as an opening to dig into their TAM and sales process:",
            "default": "This objection leads you into exactly the discovery you need. Continue with <a href='#' onclick=\"loadContent('discovery_top_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Top of Funnel</a> to understand their markets and channels, or <a href='#' onclick=\"loadContent('discovery_middle_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Middle of Funnel</a> to understand their sales process and conversion. Use <a href='#' onclick=\"loadReferenceContent('carpet_framework'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>CARPET Framework</a> to extract TAM, ICP, and process variables"
          }
        },
        {
          "number": 14,
          "title": "'What about brand risk / we can't afford spam'",
          "category": "Brand & Reputation",
          "where_it_shows_up": "Prospects worry that outbound = spam. They're afraid their brand will look cheap or their reputation will take a hit. This usually comes from companies in high-trust industries (consultancies, family offices, boutiques, financial groups) where reputation is everything.",
          "core_playbook": [
            {
              "principle": "Go into 'importance mode.'",
              "script": "Totally fair — and that's actually the right concern to have. We work with groups where nothing matters more than the integrity of their name and brand — family offices, boutique consultancies, corporate development teams. If anybody understands the weight of brand risk, it's us."
            },
            {
              "principle": "Leverage credibility.",
              "script": "We've run engagements for family offices, and those are some of the most brand-sensitive groups on the planet. We've sat across the table from CIOs, asset managers, even family principals. With them, you don't blast deals — you earn trust, and every touch has to uphold their reputation."
            },
            {
              "principle": "Reframe as infrastructure, not spam.",
              "script": "That's why our infrastructure is built to be enterprise-grade. This isn't spray-and-pray. It's a controlled system designed for reputable firms to reach decision-makers in a way that feels personal, relevant, and respectful. The exact reason you're on this call is because that same system got through to you without looking like spam."
            },
            {
              "principle": "Anchor on due diligence.",
              "script": "And just to be clear — that's what this call is: due diligence. We scope an engagement model that protects your brand first, then shows where we can build a channel that creates consistent demand. The model itself is what tells us how to do that while retaining your integrity."
            }
          ],
          "key_lesson": "Brand risk isn't a blocker — it's proof the prospect cares about quality. By leaning into 'importance mode,' citing your credibility with the most brand-sensitive clients (family offices), and reframing outbound as controlled, enterprise-grade infrastructure, you transform the objection into authority.",
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After addressing brand risk concerns, anchor on due diligence and continue discovery:",
            "default": "Frame this call as due diligence to protect their brand. Continue with <a href='#' onclick=\"loadReferenceContent('discovery_framework'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Discovery Framework</a> to gather the information needed to build an engagement model that protects their brand integrity. Continue with <a href='#' onclick=\"loadContent('discovery_top_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Top of Funnel</a> or other discovery sections"
          }
        },
        {
          "number": 15,
          "title": "'Send me something first / Can you email me info?'",
          "category": "Process Control",
          "where_it_shows_up": "Prospects try to cut discovery short by asking for materials before committing further. Subtext: 'I don't want to stay on this call' or 'I want proof before I give you time.'",
          "core_playbook": [
            {
              "principle": "Agree with Confidence",
              "content": "Never resist — 'Of course, we'll send you info.' This keeps posture strong and removes friction."
            },
            {
              "principle": "Define the Email Properly",
              "content": "Position the email as a curated package that only makes sense once discovery is complete: Executive deck, 1–2 anonymized case studies or recent successes, Scope of Work (SOW)."
            },
            {
              "principle": "Use It as Leverage to Finish Discovery",
              "script": "Absolutely, happy to send you everything. The only thing is, I want to make sure what I send is actually relevant to you. To do that, we'll need to finish gathering a few details here — that way the email includes not just generic material, but a tailored Scope of Work that shows exactly what an engagement would look like."
            },
            {
              "principle": "Anchor on the Model",
              "content": "Make clear the SOW is the real asset: 'The deck and successes are useful, but the real value is the engagement model. That's what lets you see the end of the engagement before it begins — specific benchmarks, milestones, and outcomes.'"
            }
          ],
          "sample_language": "Of course, I'll send you information after the call. What I'd like to do is include not just our deck, but also 1–2 recent successes and, most importantly, your Scope of Work. To make that possible, we just need to finish this due diligence — a few more questions on my end, and then I can send something that's actually meaningful to you. Otherwise, you'd just be getting generic info. Does that sound fair?",
          "key_lesson": "Don't dodge, don't debate. Say yes, but insist on finishing discovery so the email becomes the closer. The email is not the asset — the SOW is.",
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After addressing the 'send me info' request, use it as leverage to finish discovery:",
            "default": "Agree to send info, but insist on finishing discovery first so the email includes the tailored SOW. Continue with <a href='#' onclick=\"loadReferenceContent('discovery_framework'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Discovery Framework</a> or continue gathering data through <a href='#' onclick=\"loadContent('discovery_top_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Top of Funnel</a>, <a href='#' onclick=\"loadContent('discovery_middle_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Middle of Funnel</a>, or <a href='#' onclick=\"loadContent('discovery_bottom_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Bottom of Funnel</a> to build the engagement model that makes the email valuable"
          }
        },
        {
          "number": 16,
          "title": "'Can you discount the price / work within our budget?'",
          "category": "Pricing & Discounts",
          "where_it_shows_up": "This objection surfaces when prospects push for a lower price after seeing your proposal or during negotiation. They may say their budget is lower, ask for a discount, or request you meet them at a specific number. It's a frame test: they're checking whether you're flexible (vendor mindset) or firm (advisory posture).",
          "golden_rule": "Discounts destroy your frame. The moment you budge, you signal weakness. If scope changes, price changes. If scope doesn't change, price doesn't change.",
          "core_position": "If they demand a lower fee, the only way you even entertain it is by stripping something so valuable out of the offer that the discounted version looks ridiculous compared to the full structure. But in practice — don't do it. Stand your ground.",
          "core_playbook": [
            {
              "principle": "1. Frame Price as Capital Allocation",
              "content": "Never let them think your fee is arbitrary or negotiable. Position it as a capital allocation directly tied to the resources, vendors, and infrastructure you're deploying on their behalf to hit the milestone. That capital is what funds delivery — without it, you can't guarantee outcomes."
            },
            {
              "principle": "2. Tie Price to Scope",
              "content": "Make it clear: if they lower the investment, you have to proportionally reduce the scope. Fewer meetings, smaller milestones, longer timelines. And when you show them what that looks like, make it obvious the reduced version defeats the entire purpose of the engagement."
            },
            {
              "principle": "3. Stand Your Ground",
              "content": "Don't discount. Period. If they keep pushing, politely disqualify them: 'If the full scope doesn't fit at this stage, we're probably not the right fit right now.' This protects your positioning and signals you're an advisor, not a vendor chasing revenue."
            },
            {
              "principle": "4. Use Worst-Case ROI Framing",
              "content": "Remind them the structure is already built to be ROI-positive in a worst-case scenario. Stripping it down removes that safety net entirely, which means they lose the very thing that makes the engagement low-risk."
            }
          ],
          "primary_script": "I hear you on the budget concern. Here's how we think about pricing: the fee isn't arbitrary — it's a capital allocation directly tied to the outcomes we're committing to deliver.<br><br>If we lower the price, we'd have to lower the scope proportionally. That would mean fewer resources deployed, a smaller milestone commitment, or a longer timeline to hit benchmarks — which defeats the purpose of the engagement.<br><br>The structure we've proposed is built to be ROI-positive even in a worst-case scenario. If we strip it down to fit a lower budget, we lose the ability to guarantee that safety net. Does that make sense?",
          "if_they_push": "Totally understand budget constraints. If the full scope doesn't fit right now, the honest answer is we're probably not the right fit at this stage. What we do works because of how it's capitalized — and if we compromise that structure, we can't deliver the results that justify the engagement in the first place.",
          "scope_reduction_example": {
            "title": "How to Show Them What a Discount Actually Looks Like",
            "script": "If you need to lower the investment, we'd have to reduce the milestone proportionally. Instead of 25 qualified meetings by day 45, we'd scope it to 12-15 meetings — which changes the pipeline math significantly. At that volume, the ROI timeline extends, and you lose the speed-to-value that makes this model work. I'd rather be upfront about that than agree to something that won't serve you."
          },
          "advisor_notes": [
            "Never discount without stripping scope — and make the stripped version look terrible",
            "Frame price as capital allocation, not a fee for your time",
            "If they insist, disqualify them politely: 'We're not the right fit at this budget level'",
            "Stand your ground. Discounting signals you're a vendor, not an advisor",
            "The moment you bend on price, you've lost the advisory frame entirely"
          ],
          "key_lesson": "Discount requests are frame tests. If you fold, you're signaling vendor status. Hold the line by anchoring price to capitalization and scope. If they keep pushing, walk away. Advisors don't chase deals by lowering standards — they protect positioning by standing firm.",
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After handling discount requests, maintain frame and continue discovery:",
            "default": "If they accept the structure, continue with <a href='#' onclick=\"loadReferenceContent('discovery_framework'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Discovery Framework</a> or proceed to <a href='#' onclick=\"loadContent('transition_call_two'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Transition — Close Loop & Secure Call Two</a>. If they keep pushing for discounts after you've stood firm, consider disqualifying—this may not be the right fit"
          }
        },
        {
          "number": 17,
          "title": "'Poor quality leads' or 'How do we know the leads will be qualified / convert?'",
          "category": "Quality & Conversion",
          "where_it_shows_up": "When prospects raise concerns about 'poor quality leads' or conversion uncertainty during discovery. They're often projecting internal weaknesses (fear of execution, doubt in their conversion process) onto your delivery.",
          "recognize_the_projection": {
            "title": "What's Really Happening",
            "reality": "Most 'quality' objections are internal fears reflected outward. They lack confidence in their ability to convert opportunity into ROI.",
            "interpretation": "This is fear of exposure, not fear of your delivery. They've failed to convert prior leads and doubt their internal process."
          },
          "accountability_boundaries": {
            "title": "Clarify Who Owns What",
            "your_domain": "You create qualified demand. You own Top of Funnel (TOF): interest creation and predictable volume.",
            "their_domain": "Their system must process and convert it. They own Middle and Bottom of Funnel (MOF/BOF): conversion performance based on the process you just mapped.",
            "positioning": "You generate demand. They must convert it. The qualification of a lead is their validation checkpoint, not your vulnerability."
          },
          "core_playbook": [
            {
              "principle": "1. Redirect to Process Repeatability (The 'Tic')",
              "script": "That's a fair concern—and it's exactly why we walked through your funnel in detail.<br><br>You mentioned earlier that once someone gets to [X stage], you're closing [Y%] of them, and that your process is repeatable.<br><br>So really, the question isn't whether they'll convert—it's whether the opportunities we create meet the standard we've agreed on: financially able, serviceable, and genuinely interested.<br><br>That's why we defined 'qualified' the way we did—so we're both measuring against the same criteria.",
              "what_this_does": "Uses their own admission against the objection. They can't claim unpredictability because they already said the process converts."
            },
            {
              "principle": "2. Anchor to the Shared Definition (The 'Tac')",
              "script": "And to your point about quality—that's why we use the A/B/C framework.<br><br>Every opportunity we drive is someone who's financially able to buy, fits your serviceable range, and is problem-aware and interested in solving it.<br><br>That's the exact standard we agreed would constitute a qualified opportunity.<br><br>The role of our engagement is to fill your pipeline with people who meet that standard—and then your process, which you've confirmed is repeatable, takes them through to close.",
              "what_this_does": "Shifts responsibility back where it belongs: you create demand that meets their definition; they must convert it using their admitted-repeatable process."
            },
            {
              "principle": "3. Avoid Mechanism Talk",
              "dont_do": "Don't get pulled into discussing mailboxes, personalization tactics, lists, or 'how' you'll create quality",
              "do_instead": "Keep language on outcomes, verification, and risk mitigation: 'The engagement model is what drives the math... The focus is ensuring your risk is completely mitigated, and the scope is modeled to worst-case performance.'",
              "golden_line": "The channel is just the vehicle—the engagement model is what matters. Until we put that together, which allows us to see the end of the engagement before we even begin, there's no point focusing on mechanics."
            },
            {
              "principle": "4. Optional: Preview QOA™ (Only if Objection Persists)",
              "when_to_use": "Only if quality concern is blocking forward momentum AND you have high trust/boutique context",
              "positioning": "If you want an added layer of protection, we can structure the engagement so that milestone credits are client-verified against the A/B/C standard we just defined.<br><br>That means you'd confirm whether each opportunity meets the criteria before it counts toward the 45-day milestone.<br><br>That's not standard for every engagement, but it's an option we use with clients who want maximum control over qualification.",
              "important": "This is NOT full QOA™ deployment—it's a preview. Full deployment happens later at close if needed."
            }
          ],
          "advisor_notes": [
            "Quality objections during discovery are diagnostic data, not rejections",
            "Your posture must remain calm and advisory—you're educating, not defending",
            "Use their own admissions (Tic + Tac) as ammunition to dissolve the objection",
            "If they keep pushing, it may signal: (1) weak internal process, (2) projection of past vendor failures, or (3) disqualification signal",
            "Never discount or over-promise. Maintain structure and redirect to risk mitigation framework"
          ],
          "where_to_go_next": {
            "title": "Where to Go Next",
            "guidance": "After handling quality concerns, you've clarified accountability boundaries and anchored to their repeatable process. Return to discovery:",
            "default": "Continue with <a href='#' onclick=\"loadContent('discovery_middle_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Middle of Funnel</a> or <a href='#' onclick=\"loadContent('discovery_bottom_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Bottom of Funnel</a> discovery, or proceed to <a href='#' onclick=\"loadContent('integration_explanation'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Integration Explanation</a> to transition to design phase"
          }
        }
      ],
      "unqualified_objections": {
        "title": "Bucket: Unqualified / Low-Leverage Objections",
        "subtitle": "Some objections are smoke, some are disqualifiers — here's how to tell the difference",
        "objections": [
          {
            "objection": "'We don't see this as a priority right now.'",
            "reality": "They're uninterested and doing well. Healthy + uninterested = not your client.",
            "handle": "Validate and try to scope anyway: 'Totally fair, honestly I wouldn't prioritize it myself without seeing a scope. Let's at least put an engagement model in front of you — then you'll know if it's worth prioritizing down the road.'",
            "lesson": "Abundance mindset. If they're genuinely uninterested + healthy, move on. Don't waste cycles."
          },
          {
            "objection": "'We already get plenty of inbound.'",
            "reality": "Code for 'we're doing fine, no urgency.' Same category as above.",
            "handle": "Congratulate, but still anchor back to the model: 'That's great — usually means you're capitalized and growing. What we'd like to do is build a scope anyway so you can see if an outbound channel would complement what you already have.'",
            "lesson": "If they're liquid, still worth showing the SOW."
          },
          {
            "objection": "'We don't want to commit before testing.'",
            "reality": "This means your framing was weak. They don't trust you yet.",
            "handle": "Anchor to milestones: 'I hear you — and that's why our midpoint milestone is the test. It's structured so you only move forward once the outputs are real. We don't do free pilots.'",
            "lesson": "If this keeps showing up, you need more reps. You didn't sell advisory, you sold like a vendor."
          },
          {
            "objection": "'We've been burned before / this sounds like another agency.'",
            "reality": "You slipped into vendor language. You didn't hold posture as orchestrator/president.",
            "lesson": "If they lump you in with agencies, you framed mechanics not outcomes."
          },
          {
            "objection": "'Can you do a trial month?'",
            "reality": "Just a stall, or weak buyer.",
            "handle": "Say no — confidently.",
            "lesson": "Anyone asking for free work isn't your client."
          },
          {
            "objection": "'Who exactly will we be working with?'",
            "reality": "They're poking at whether you're legit or just a freelancer.",
            "handle": "Frame authority + orchestration: 'You'll be working directly with me and my team. We manage the relationship end-to-end, and we deploy long-term vendors with specific industry expertise when it's required. You're not passed to juniors — you're dealing with us directly.'",
            "lesson": "Answer quickly, confidently. Move on."
          },
          {
            "objection": "'We can just hire more SDRs.'",
            "reality": "They don't understand the distinction between demand gen and sales execution.",
            "handle": "Educate: 'Of course — SDRs are for follow-up and nurturing. What we do is generate demand they can work on. It's fuel for the fire — not the same function.'",
            "lesson": "If they don't get this, explain once, then move forward. If they still don't get it → explain the difference better or you're talking to the wrong person."
          },
          {
            "objection": "'We want to see the messaging first.'",
            "reality": "Totally fair ask, and it's part of your process anyway.",
            "handle": "Agree and move on: 'Absolutely — all messaging is client-approved before it goes out. You'll see and sign off on everything.'",
            "lesson": "Don't over-explain. Just confirm it's part of the process."
          },
        ],
        "meta_lesson": [
          "Some objections are smoke → push toward the SOW.",
          "Some objections are disqualifiers → move on with abundance mindset.",
          "If it's about trust (trial months, burned before, agency vibes), that's on your framing. Get more reps.",
          "If it's about fit (priority, inbound, SDRs), don't chase — pivot or drop."
        ]
      }
    },
    "qualified_opportunity_anchor_mastery": {
      "title": "Qualified Opportunity Anchor™ (QOA™) — Complete Training Guide",
      "subtitle": "Master the Tic-Tac-Toe™ sequence and client-verified milestone structure",
      "purpose": "Understand the complete QOA™ system: when to use it, how to deploy it, and how it integrates with the advisory stack",
      "core_truth": "The QOA™ is your highest-trust anchor and most elegant risk-transfer mechanism. It's not for first rounds—it's a bottom-of-funnel lever that transfers controlled power to the client while maintaining your structural integrity.",
      "why_this_matters": "QOA™ is what allows you to re-engage passed deals, dissolve quality objections, and close high-trust boutique clients who need maximum control. When deployed correctly, it's the cleanest way to convert a 'no' into a signature.",
      "modules": [
        {
          "number": 1,
          "title": "Understanding the Tic-Tac-Toe™ Sequence",
          "key_insight": "The Tic-Tac-Toe™ sequence engineers three critical admissions that make QOA™ deployment logical and defensible. Each stage builds on the previous one.",
          "sections": [
            {
              "title": "The 'Tic' — Process Repeatability Admission",
              "content": "The Tic is where you get them to admit their process is repeatable and converts. This is the foundation that removes all 'unpredictability' objections.",
              "objective": "Get them to say out loud: 'Our process is repeatable and converts.'",
              "how_to_execute": [
                "After gathering conversion metrics in Bottom of Funnel, pause and synthesize what they've told you",
                "Reflect their data back to them in a way that leads to admission",
                "Get the explicit 'Conceptual Yes' and log it"
              ],
              "script": "So it sounds like once someone enters your system and gets to [X stage], you're closing [Y%] of them. Would it be fair to say your process is repeatable?",
              "what_this_captures": "Their acknowledgment that the system works. This becomes ammunition for quality objections: 'You already admitted your process converts—the question isn't IF it works, it's how we drive more qualified opportunities into it.'",
              "advisor_notes": [
                "This is not casual—this is the foundation for QOA™ deployment later",
                "If they hedge or say 'it depends,' dig deeper until you get hard ratios",
                "Document this admission in your notes: 'Client confirmed process is repeatable with [X%] conversion at [Y stage]'",
                "This 'Tic' prepares you for the 'Tac' (definition) and eventual 'Toe' (power transfer)"
              ]
            },
            {
              "title": "The 'Tac' — Definition Alignment",
              "content": "Once they've admitted their process converts, you install the shared definition of what constitutes a Qualified Opportunity. This is the linchpin that turns subjective 'quality' debates into objective, measurable standards.",
              "objective": "Establish intellectual and operational alignment on the A/B/C framework: Financially Able, Serviceable or Sizable, Problem-Aware & Genuinely Interested",
              "posture": "You are NOT asking for alignment—you are ASSERTING the standard. You're the advisor; you've seen this a thousand times.",
              "the_abc_framework": {
                "A": "Financially Able — The person or entity can afford or authorize the transaction",
                "B": "Serviceable or Sizable — They fit the commercial scope and can be successfully served",
                "C": "Problem-Aware & Genuinely Interested — They recognize the issue and express interest in solving it"
              },
              "deliberate_omission": "We do NOT hard-code 'has final decision-maker title' into the definition. In sophisticated sales, you win via a champion one title south. Title fetishism slows momentum.",
              "script": "Before we move forward, it's important we both use the same standard for what counts as a qualified opportunity.<br><br>What we typically do with most clients—and what's built into our engagement model—is define a qualified opportunity as any person or entity who's financially able to buy, is serviceable or sizable for your offer, and is problem-aware and genuinely interested in solving it.<br><br>(Pause and let them nod)",
              "clarifying_titles": "Now, you'll notice we don't include 'decision-maker' in that definition—and that's intentional. Our aim is always to reach the decision-maker, and very often we do. But in a lot of cases, we'll engage one title south—a strong champion who can influence upward. That's both expected and healthy.",
              "what_this_creates": "Once they adopt your definition of 'qualified,' every objection about quality, fit, or conversion potential is now self-defeating. They can't later claim uncertainty—they helped define the metric."
            },
            {
              "title": "The 'Toe' — Power Transfer Offer",
              "content": "This completes the Tic-Tac-Toe™ sequence by offering controlled power transfer. Now that they've admitted (1) their process converts and (2) what 'qualified' means, you present the power transfer as a logical extension.",
              "when_to_use": [
                "Quality objection is blocking forward momentum despite Tic + Tac",
                "High-trust, boutique context (founder-led, partner-led firm)",
                "They've explicitly asked 'How do I know these will be qualified?'",
                "You sense they need operational control to feel comfortable"
              ],
              "when_NOT_to_use": [
                "Low-trust environment or bureaucratic organization",
                "Multiple stakeholders/fragmented decision-making",
                "You haven't completed Tic + Tac first",
                "They haven't raised quality as a concern"
              ],
              "the_positioning_script": "So we've established that your process is repeatable and converts at [X%], and we've aligned on what 'qualified' means—financially able, serviceable, and genuinely interested.<br><br>Here's a question: if you had the ability to verify whether each opportunity we bring meets that A/B/C standard before it counts toward the 45-day milestone—would that reduce your risk?<br><br>Because that's exactly how we can structure the engagement.<br><br>The milestone credits would be client-verified. You'd confirm whether each opportunity meets the criteria we just defined. If it does, it counts. If it doesn't, we keep working until the milestone is hit.<br><br>That way, you hold the control over what qualifies, and we're held accountable to a number we contractually commit to.",
              "what_youre_capturing": "Their acknowledgment that holding the qualification switch would dissolve their perceived risk. This is the Commitment Yes.",
              "the_trade_off": "From a structural standpoint, here's what that means: Our team assumes greater operational risk—we're committing to deliver until the milestone is met, regardless of how long it takes. You gain formal verification control—you decide what counts, under the definition we both agreed to. The accountability becomes mutual.",
              "critical_note": "This is NOT full QOA™ deployment—it's pre-selling the logic. Full deployment (calendar access, verification loops, legal clauses) happens LATER at closing stage when presenting the SOW."
            }
          ]
        },
        {
          "number": 2,
          "title": "QOA™ Deployment: When and Why",
          "key_insight": "QOA™ is a bottom-of-funnel lever, not a first-round play. Deploy it when risk perception blocks an otherwise sound engagement.",
          "when_to_deploy": [
            "Post-discovery, post-scope, post-initial anchor",
            "Objection centers on quality/conversion predictability, not price/timing",
            "Boutique or high-trust context where counterpart can accurately verify qualification",
            "You have calendar visibility and can instrument post-event verification"
          ],
          "when_NOT_to_deploy": [
            "Volume-based outbound to SDR/BDR calendars",
            "Large enterprise, bureaucratic, multi-stakeholder environments",
            "You don't trust the counterpart's judgment",
            "No ability to instrument post-event confirmation loop"
          ],
          "positive_signals": [
            "One-to-few stakeholder map (you know who will verify)",
            "Strong admission trail already captured (Tic + Tac complete)",
            "Executive ownership of BOF",
            "Willingness to grant calendar visibility",
            "Boutique revenue per head or high producer leverage"
          ],
          "negative_signals": [
            "Title fetishism ('we only count CFO meetings')",
            "Opaque BOF (no consistent close path)",
            "Refusal to instrument post-event confirmations",
            "Distributed fulfillment (4+ calendars)",
            "Want guarantees while reserving right to redefine 'qualified' ad hoc"
          ]
        },
        {
          "number": 3,
          "title": "QOA™ Mechanics: How It Actually Works",
          "key_insight": "QOA™ only works when structurally enforced through tech access, legal reinforcement, and automated accountability.",
          "operational_flow": [
            "Step 1: Meeting occurs through your controlled or co-administered calendar",
            "Step 2: Automated follow-up trigger at client-defined interval (immediate, 48h, 7 days)",
            "Step 3: Client receives verification form asking: Did they show? Financially able? Serviceable? Genuinely interested?",
            "Step 4: If A/B/C = Yes, credit is merited. If No, marked 'Disqualified' and recycled",
            "Step 5: Data logged in CRM; disputes reconciled against audit trail"
          ],
          "required_infrastructure": [
            "Calendar access (Calendly, HubSpot Meetings, or integration privileges)",
            "Automation trigger (Zapier, Make) from calendar → form → CRM → Slack",
            "Verification form (Fillout, Typeform) with 4-5 questions",
            "CRM ledger for milestone tracking",
            "Re-engagement workflow for disqualified/no-shows"
          ],
          "engagement_letter_clauses": [
            "Verification-Before-Credit: Milestone credits merited only upon client verification of A/B/C",
            "Annulification Clause: 3 missed verifications nullify performance guarantee",
            "Control Access Clause: Client provides scheduling system access/integration",
            "Dispute Clause: Disputed opportunities reviewed against form submissions and A/B/C criteria"
          ]
        },
        {
          "number": 4,
          "title": "Using QOA™ to Win a Second Attempt",
          "key_insight": "QOA™ is your most effective re-entry lever once a prospect has passed on a lower-risk anchor. You're not chasing—you're recalibrating the model.",
          "re_entry_sequence": [
            "Step 1: Re-Scope Call Request within 24-72h (refinement posture, not persuasion)",
            "Step 2: Discovery Redux — Re-walk the funnel, confirm repeatability (Tic)",
            "Step 3: Definition Alignment — Re-assert A/B/C standard (Tac)",
            "Step 4: Power Transfer Offer — Introduce client-verified milestones (Toe)",
            "Step 5: Close via Email — Restate engagement with QOA™ embedded in SOW"
          ],
          "what_to_avoid": [
            "Arguing the old model",
            "Exposing TAM math externally",
            "Using QOA™ without calendar access",
            "Hard-coding 'decision-maker' into A/B/C",
            "Letting committees verify credit"
          ],
          "re_entry_positioning": "The message is: the engagement structure you proposed wasn't strong enough; you're recalibrating the math and the risk posture. You're taking responsibility for the model and installing controlled power in their hands."
        },
        {
          "number": 5,
          "title": "Integration Across the Advisory Stack",
          "key_insight": "QOA™ doesn't replace other systems—it sits across them, drawing power from Discovery as Due-Diligence™, C.A.D.E.N.C.E.™, and Risk-Mitigated Sales Process™.",
          "how_systems_interlock": [
            "Discovery as Due-Diligence™ → Supplies proof base (Bing data) that process is repeatable",
            "C.A.D.E.N.C.E.™ → Houses post-meeting confirmation loop and verification automation",
            "Risk-Mitigated Sales Process™ → Embeds milestones, credits, and legal architecture",
            "Offer Triangle & Mechanism Framing → Frames QOA™ as operational governance, not gimmick"
          ],
          "operator_integration_workflow": [
            "Discovery (DaDD™) → Capture metrics → Confirm repeatability → Log Process Yes",
            "Anchoring/Tic-Tac-Toe™ → Gain A/B/C alignment → Log Definition Yes",
            "Power Transfer (QOA™) → Offer verification control → Log Control Yes",
            "C.A.D.E.N.C.E.™ Execution → Automate post-meeting verification → Record confirmations",
            "RMSP™ Reinforcement → Legal clauses finalize credit logic",
            "Offer Triangle → Frame as risk-balanced governance for leadership"
          ]
        }
      ],
      "core_takeaways": [
        "QOA™ is a bottom-of-funnel lever—deploy only after discovery, scoping, and initial anchoring",
        "Tic-Tac-Toe™ engineers three admissions: process repeatability, definition alignment, power transfer acceptance",
        "QOA™ requires structural enforcement: calendar access, automation, legal clauses",
        "Use for re-entry when deals pass—blame the model, not the offer",
        "Only deploy in high-trust, boutique contexts where judgment quality is high",
        "The tri-layer power model: you hold structural control, they hold judgment control, system enforces compliance"
      ],
      "final_word": "When engineered correctly, the Qualified Opportunity Anchor™ is the cleanest risk-transfer mechanism in advisory sales. It's the only anchor that lets you legally and operationally give up control—without losing any real leverage."
    },

    "referrals_objection_mastery": {
      "title": "Referrals & Connections Objection — Full Mastery Course",
      "subtitle": "The most important objection in Revenue Advisory sales",
      "purpose": "Master the #1 objection that towers above all others: 'Do you have connections?' or 'We grow through referrals'",
      "core_truth": "Closing as a revenue advisory is simple: it's math. Your only job is to get scoped proposals out the door. The more you scope, the more will close. At the top of the funnel, volume is your best friend.",
      "why_this_matters": "If you can handle this objection well, your close rate will climb dramatically. It's not just about winning more clients; it's about learning how to explain what you do with clarity and conviction.",
      "modules": [
        {
          "number": 1,
          "title": "Why This Objection Matters",
          "key_insight": "This objection almost always shows up when the prospect isn't clear on what you do. If they think you're providing introductions or access to a Rolodex, something went wrong before the meeting.",
          "sections": [
            {
              "title": "Don't Be Ashamed of Your Channel",
              "content": "We do marketing. The channel is email. There's nothing to hide. Where most reps go wrong is talking too much about the mechanisms — lists, inboxes, copy, send volumes — instead of anchoring on the result.",
              "right_approach": [
                "Messaging: what actually gets buyers to engage",
                "Channel choice: yes, email is one of them, but the real point is matching message-to-market",
                "The end result: consistent pipeline and interest generated in the offering"
              ]
            },
            {
              "title": "Why You Never Sell the 'Network' Angle",
              "content": "If you frame yourself as someone with a 'network,' you'll confuse the prospect. They'll assume you're going to introduce them to your own clients, refer them opportunities, or act as some kind of referral partner. That's not what you do."
            },
            {
              "title": "Poking Holes in Referrals",
              "diagnostic_questions": [
                "How consistent are those referrals?",
                "Has the business actually scaled meaningfully on referrals alone?",
                "What's the ceiling of a referral-only model?"
              ],
              "outcome": "When you start poking at those questions, the prospect begins to see the limitations of referrals. That's where they open up to adding a new channel."
            }
          ]
        },
        {
          "number": 2,
          "title": "The Psychology Behind It",
          "key_insight": "When a prospect asks about connections or mentions referrals, it's not really about networks. It's about fear.",
          "what_theyre_saying": [
            "I don't want to waste time talking to people who aren't serious",
            "I don't want my brand hurt by bad outreach",
            "I don't want to pay for something that won't convert"
          ],
          "belief_system": "The word 'connections' is just shorthand for certainty. They want assurance that the people they'll meet are legitimate, relevant, and warmed. Referrals = trust. Cold = risk.",
          "sections": [
            {
              "title": "Never Correct, Only Validate + Reshape",
              "golden_rule": "The fastest way to lose control is to make a prospect feel 'wrong.' That instantly puts you in opposition to them.",
              "formula": "Validate first → Spin (or stay neutral) → Ask a question",
              "example_exchange": {
                "prospect": "We rely on referrals.",
                "you": "That's actually really nice to hear. Some of the best results I've personally seen came from clients who were mainly referral-based. Since they'd never opened up a new channel before, the demand was untapped. So when we introduced a new channel, it validated their thesis a lot quicker than clients who had more exposure to other channels."
              },
              "what_happened": [
                "You validated ('That's actually really nice to hear')",
                "You spun it as positive (referral-based clients often do best)",
                "You reshaped the belief (what they thought was an objection is actually a strength)"
              ]
            },
            {
              "title": "All Bad News is Good News",
              "principle": "Every objection is a chance to anchor deeper.",
              "examples": [
                "Bad vendor experience? → 'Great, that proves you're open-minded. What did you feel was missing in those engagements?'",
                "Don't usually spend that much upfront? → 'I hear you 100%. When you do commit budget, what do you need to see to feel comfortable?'",
                "We grow through referrals? → 'That's a great channel to have. How consistent have those been, month to month?'"
              ],
              "technique": "By validating first and always ending with a question, you keep frame, control, and momentum."
            }
          ]
        },
        {
          "number": 3,
          "title": "Qualification Through the Objection",
          "key_insight": "Not every prospect who leans on referrals is worth working with. This objection is one of the best natural filters you'll ever encounter.",
          "green_flags": [
            "Open to a new channel if it's de-risked and tied to a clear milestone",
            "Shows evidence of a sales process (even basic) that can absorb and convert new pipeline",
            "Responds to your reframe with curiosity instead of resistance",
            "Agrees that referrals are inconsistent or limited, even if they've leaned on them before"
          ],
          "red_flags": [
            "Obsessed with warm introductions and unwilling to explore new channels",
            "Shows outright allergy to cold traffic no matter how you frame it",
            "Has no conversion infrastructure — no intake, no sales team, no follow-up"
          ],
          "red_flag_outcome": "These are prospects who aren't qualified for what you do. Even if they signed, they'd fail to convert your work into revenue — and then they'd blame you for it.",
          "disqualification_script": "Totally understood. If referrals are the only channel you want to lean on right now, then it probably doesn't make sense to move forward. What we do is build and warm a new channel so you're not capped by referrals — and if that's not a priority yet, we're not the right fit.",
          "why_disqualify": "A 'no' from the wrong client is just as valuable as a 'yes' from the right one. By disqualifying politely, you protect your time and keep your pipeline focused on clients who can actually succeed."
        },
        {
          "number": 4,
          "title": "Conversion Audit Framework",
          "subtitle": "Turning Discovery Into Proof of Value",
          "key_insight": "Most clients who grow through referrals don't have a sales process — they have a pattern of luck. Referrals come warm, pre-sold, and self-qualified, which hides the fact that no one knows how a deal moves from interest → revenue when trust isn't baked in.",
          "sections": [
            {
              "title": "Run Discovery Like an Audit",
              "shift": "From 'Tell me about your goals' to 'Walk me through what happens after someone shows interest'",
              "audit_questions": [
                "Who takes the first call?",
                "What questions are asked on that call?",
                "What gets sent next (deck, proposal, engagement letter)?",
                "How is follow-up handled and how often?",
                "How long does it usually take to move from first touch to signed?"
              ],
              "goal": "Build a map that becomes the backbone of your proposal. It reveals whether you're plugging into an existing system or building one from scratch."
            },
            {
              "title": "Two Paths Emerge",
              "path_1": {
                "condition": "If they have a repeatable process",
                "frame": "Perfect — since that system converts consistently, we'll feed it with qualified interest. Think of us as fuel to an engine you've already proven."
              },
              "path_2": {
                "condition": "If they don't have a process",
                "technique": "Reconstruct it from their last successful referral",
                "steps": [
                  "Ask them to name one client they actually converted through their network",
                  "Trace that win step-by-step — how it came in, what moved it forward, what sealed it",
                  "Then say: 'We'll replicate that same path for every introduction we generate. All you need to do is run the same play that converted this client.'"
                ],
                "power": "That single line converts confusion into clarity. You've turned their past luck into a standardized playbook."
              }
            },
            {
              "title": "Reverse-Engineer the Math",
              "principle": "Make the process measurable. Start from the bottom of the funnel and climb upward using their own ratios.",
              "example": [
                "1 client = 5 qualified calls",
                "5 qualified calls = 15 booked meetings",
                "15 booked meetings = 300 initial outreach touches"
              ],
              "protection": "When the client later says 'These meetings didn't convert,' you can point to the ratios: 'We're exactly on track with the math we agreed to. If the ratio changes, it's a conversion issue — not a top-of-funnel one.'"
            },
            {
              "title": "Anchor Responsibility by Funnel Stage",
              "framework": [
                "Top of Funnel (You): Create qualified interest",
                "Middle of Funnel (Them): Run the process you just mapped",
                "Bottom of Funnel (Shared): Execute follow-ups and close"
              ],
              "reframe": "You're no longer the 'lead vendor.' You're the architect of predictable attention flow — and they're the operators responsible for conversion."
            },
            {
              "title": "Refuse Single-Deal Handcuffs",
              "warning": "In capital-intensive or long-cycle industries, clients often try to chain your value to one listing or one opportunity. Never let a single asset define your engagement.",
              "script": "We wouldn't recommend generating demand for only one deal — we're here to create sustained demand at the top, so you can match each interested party to whichever opportunity fits best.",
              "benefit": "This reframing moves you from vendor to pipeline partner."
            }
          ],
          "closing_summary": "Here's what I'm seeing — you convert best when [X] happens, and what's missing is predictable inflow. Our work feeds that process, not replaces it. Once we have [Y] meetings per month entering this funnel, we'll be able to measure success together, stage by stage.",
          "what_this_does": [
            "Frames your engagement as scientific",
            "Ties results to process, not personality",
            "Establishes shared accountability before signature"
          ]
        },
        {
          "number": 5,
          "title": "Language to Sprinkle Early (Prevention)",
          "key_insight": "The referrals objection is the one objection you can often prevent before the call even happens. If a prospect shows up thinking you're offering introductions, that's not just an objection — that's a false pretense.",
          "sections": [
            {
              "title": "Don't Flood Your Calendar with Bad Calls",
              "truth": [
                "If a prospect is confused about what you do and thinks you're a Rolodex or referral source → that call shouldn't be booked yet",
                "If they're clear but just skeptical about a new channel → that call is worth it",
                "An empty calendar that pushes you to do more volume is better than a full calendar of false momentum"
              ]
            },
            {
              "title": "Your One-Liner Matters",
              "structure": [
                "We don't tap into a Rolodex",
                "We don't sell introductions",
                "What we do is [anchor to outcome + channel clarity]"
              ],
              "note": "You need to build your own version using the material in this program. After 20 reps on live prospects, it'll stop feeling clunky."
            },
            {
              "title": "The Power of Reps",
              "progression": [
                "After 25 calls: you'll feel like a different person",
                "After 50: your tonality will change",
                "After 100: you'll stop thinking about 'what to say' and start listening properly",
                "By 200: this objection won't rattle you — you'll know exactly how to spin or neutralize it in one calm breath"
              ],
              "real_prevention": "Clarity before the call, reinforced by reps and SPEED."
            }
          ]
        },
        {
          "number": 7,
          "title": "Bottom-of-Funnel Reinforcement",
          "key_insight": "Even if you handle the referrals objection perfectly in early discovery, it often comes back at the very end of the sales process.",
          "why_it_resurfaces": [
            "Budget meetings: leadership asks 'Why can't we just keep relying on referrals?'",
            "CFO/CEO reviews: they see cost upfront and instinctively compare it to 'free' referrals",
            "Risk aversion: as the engagement letter is on the table, fear spikes and safe defaults resurface"
          ],
          "late_stage_playbook": [
            "Restate the 45-day milestone and what's guaranteed to be measured",
            "Anchor to pipeline benchmarks and industry standards, not referrals",
            "Reassure with the risk clause (worst case → defined upside for them)"
          ],
          "critical_point": "This isn't about debating referrals. It's about bringing the conversation back to numbers and momentum.",
          "warning": "If you drift into 'explaining' again, you lose control. You get compared to cheaper vendors or to 'doing nothing'. If you anchor + CTA, you close.",
          "remember": "Late-stage referrals = recycled fear. Don't re-explain. Anchor to math. Use your CTA. Keep momentum."
        }
      ],
      "core_takeaways": [
        "It's all math. Revenue Advisory isn't about magic tricks. Volume + process = results.",
        "Never sell 'the network.' Once you let a prospect think you're providing introductions, you've lost the frame.",
        "Validate, spin, reshape. Every objection is good news if you know how to reframe it.",
        "Use objections to qualify. Referrals obsession with no willingness to grow = disqualify.",
        "Prevention beats correction. A clean, empty calendar is better than a full one filled with the wrong calls.",
        "Reps build mastery. After 100–200 calls, you'll handle this objection without breaking stride.",
        "At bottom of funnel: anchors + CTAs. Don't explain. Anchor to ROI benchmarks and direct to signature."
      ],
      "final_word": "If you master this one objection, your close rate will rise dramatically. Not because you'll win every client, but because you'll learn how to prevent unqualified calls, keep frame during discovery, use objections to qualify prospects, and close with authority at the bottom of the funnel."
    },
    "story_mode_selling": {
      "title": "Story Mode Selling™ — The 6-Beat Narrative Framework",
      "purpose": "Deploy proof through narrative structure that bypasses objection sophistication and reveals methodology indirectly",
      "why_it_works": [
        "Stories bypass objection sophistication (they're listening to narrative, not evaluating claims)",
        "Reveals mechanism indirectly (methodology emerges through example)",
        "Creates credibility through specificity (detailed = real)",
        "Makes you memorable (stories stick, facts don't)",
        "Teaches your methodology without explaining it"
      ],
      "six_beat_structure": {
        "beat_1": {
          "name": "Engagement Context",
          "purpose": "Setup: Who they were, what they wanted, why it was difficult",
          "example": "One of the best examples is our engagement with a national book fair company — about a $50M-a-year operator that sells into thousands of schools across the U.S. They had an incredible brand that educators trusted for decades, but they were struggling to modernize how they generated demand."
        },
        "beat_2": {
          "name": "Diligence & Extraction",
          "purpose": "Show how you learned from them — your process in action",
          "example": "We started by sitting down with their team and understanding how their best relationships formed — what language resonated, what educators valued, what communication felt authentic to their brand.",
          "key_phrase": "'You'll experience this with us as well' — makes it about them"
        },
        "beat_3": {
          "name": "Brand-Integrity Constraint",
          "purpose": "Show the risk you protected — demonstrates sophistication",
          "example": "This was critical because in education, one misstep destroys years of trust. We set a hard rule: create interest, never cheapen the name.",
          "key_phrase": "Emphasize the stakes and your protective approach"
        },
        "beat_4": {
          "name": "Audience-Presence Findings",
          "purpose": "Data discovered through diligence (mechanism inside story)",
          "example": "Our analysts found that about 78% of decision-makers — principals, administrators, parent committees — were active on LinkedIn for professional development but still used email as their primary vendor communication channel.",
          "key_phrase": "This is where mechanism gets revealed through discovery findings"
        },
        "beat_5": {
          "name": "Private Infrastructure",
          "purpose": "How you executed (mechanism revealed through story)",
          "example": "We deployed that through our internal infrastructure — campaign design, data acquisition, quality checks on messaging, tone, and compliance. It also lets us scale nationally — regional rollouts, multi-state coverage, and even global if needed — all while keeping the same tone and personality the brand is known for.",
          "key_phrase": "Never say 'cold email' — use 'internal infrastructure,' 'private systems'"
        },
        "beat_6": {
          "name": "Hardest-First Proof + Tie-Back",
          "purpose": "Results + explicit connection to their situation",
          "example": "To wrap that up — we processed, mapped, acquired the data and set out new targets from schools and educational networks. 373 sales-focused conversations and they realized over $1M in new revenue within a quarter — all while keeping the brand's tone and trust intact. So, if we can help a legacy education company like that build one of its strongest pipelines in years — all in a reputation-first market — applying that same framework to other sophisticated, brand-sensitive environments becomes very straightforward.",
          "critical_rule": "MUST end with explicit tie-back that connects their proof to prospect's situation"
        }
      },
      "redaction_as_status_signal": {
        "purpose": "Use redaction to signal you work with sophisticated clients who demand discretion",
        "example": "And because that market's so consolidated — really only three major players nationwide — they wanted full discretion. That's why they're redacted in our case study; they don't want any of their tools, systems, or partners publicly visible.",
        "why_this_works": [
          "Redaction implies you work with sophisticated clients who demand discretion",
          "Creates mystery (what aren't you telling them?)",
          "Signals you protect client interests over marketing wins",
          "Elevates your perceived client tier"
        ]
      },
      "where_to_deploy": [
        "Industry experience objection (already exists, systematize with 6-beat)",
        "'What we do' explanation (add proof narrative AFTER thesis)",
        "'How is this different from other agencies/vendors?' objection",
        "Referrals objection (add story mode option)",
        "'We've been burned before' objection"
      ],
      "critical_rules": [
        "Length: 200+ words (complete journey narrative, not quick proof point)",
        "Content: Process over results (HOW it happened, not just WHAT happened)",
        "Tie-back: MUST end with explicit connection to their situation",
        "Pivot: Never sit in the story — immediately return to discovery",
        "Specificity: Use exact numbers, titles, industries (detailed = credible)"
      ]
    },
    "mechanism_framing": {
      "title": "Mechanism Framing™ — Language Translation Table",
      "purpose": "Systematic vocabulary replacement to maintain advisory positioning and protect mechanism mystery",
      "philosophy": "Operators explain. Advisors orchestrate. Mechanism = vendor. Methodology = advisor.",
      "translation_table": {
        "never_say": [
          "Cold email",
          "Email software/tool",
          "List building",
          "Copywriting",
          "Outreach campaign",
          "Email sequence",
          "Lead generation",
          "Spam check",
          "Open rates",
          "Click rates",
          "Email blast",
          "Drip campaign"
        ],
        "always_say": [
          "Private infrastructure for channel deployment",
          "Proprietary systems",
          "Market research / data acquisition",
          "Campaign design with enterprise pedigree",
          "Diligence-backed demand generation",
          "Nurture architecture",
          "Qualified opportunity creation",
          "Deliverability optimization",
          "Engagement metrics",
          "Interest signals",
          "Coordinated outreach",
          "Systematic touchpoint sequence"
        ]
      },
      "strategic_deflection_pattern": {
        "when_asked_about_tactics": "Until we can put together the engagement model, which allows us to see the end of the engagement before we even begin, I wouldn't be able to tell you exact tactics or give you a detailed breakdown of how we'd execute month-by-month.",
        "why_this_works": [
          "'Engagement model' = advisory language (not campaign plan)",
          "'See the end before we begin' = strategic framing (not tactical execution)",
          "Redirects tactical questions back to outcomes (protects mystery)"
        ]
      },
      "examples_in_context": {
        "bad": "We'll build you a list of 10,000 contacts and send cold emails using our software.",
        "good": "We'll conduct market research to acquire specialized profiles and deploy through our private infrastructure with quality checks on messaging, tone, and compliance.",
        "bad_2": "Our copywriters will write email sequences that get high open rates.",
        "good_2": "Our campaign design team — with enterprise pedigree — will architect nurture sequences that generate engagement metrics and interest signals.",
        "bad_3": "We use Apollo and Instantly to send 5,000 emails per day.",
        "good_3": "We deploy through proprietary systems built for precision targeting with deliverability optimization and systematic touchpoint sequences."
      },
      "critical_principle": "Never explain mechanism until Story Mode deploys it through narrative. When you must reference execution, use translation table systematically."
    },
    "risk_mitigation_language": {
      "title": "Risk Mitigation Language — Repetitive Hammering with Binary Framing",
      "purpose": "State safety message multiple times (not once) to create emphasis and remove perceived loss scenarios",
      "philosophy": "The original script stated risk mitigation once. The thesis approach HAMMERS it home through strategic repetition.",
      "enhanced_pattern": {
        "step_1": {
          "name": "State Protection",
          "example": "The 45-day milestone exists to <b>protect your investment</b>."
        },
        "step_2": {
          "name": "State Safety Net",
          "example": "That clause exists to <b>eliminate downside risk</b>."
        },
        "step_3": {
          "name": "State Aspiration Above Guarantee",
          "example": "And just to be clear — <b>1.5x is the safeguard, not the ceiling</b>. Our North Star is always <b>2x or more</b>.",
          "why_this_works": "Reframes the guarantee as the floor, not the target. Implies typical performance exceeds it."
        },
        "step_4": {
          "name": "State Universal Application",
          "example": "Regardless of whether it's <b>$10K or $100K</b> — when we set a 1.5x performance benchmark, we're saying: If we don't hit that target, you don't owe us the second tranche — and we keep working until you do.",
          "why_this_works": "Shows the model scales regardless of engagement size. Establishes it as systematic, not custom."
        },
        "step_5": {
          "name": "State Impossibility of Loss",
          "example": "It's a <b>bulletproof proposal</b>. The whole model is designed so that <b>you cannot lose</b>."
        },
        "step_6": {
          "name": "State Binary Win Scenario",
          "example": "Either we hit the benchmark in the first 45 days — and everyone wins. Or we keep delivering until that return is realized.",
          "why_this_works": "Creates binary win framing: Path A = We win fast → Everyone wins. Path B = Takes longer → You still win. Both paths end in client success."
        },
        "step_7": {
          "name": "Require Micro-Commitment",
          "example": "<b>Fair enough?</b>",
          "why_this_works": "Forces verbal acknowledgment. Creates recorded agreement."
        }
      },
      "full_script_example": "The 45-day milestone exists to protect your investment.<br><br>That clause exists to eliminate downside risk.<br><br>And just to be clear — 1.5x is the safeguard, not the ceiling. Our North Star is always 2x or more.<br><br>Regardless of whether it's $10K or $100K — when we set a 1.5x performance benchmark, we're saying: If we don't hit that target, you don't owe us the second tranche — and we keep working until you do.<br><br>It's a bulletproof proposal. The whole model is designed so that you cannot lose.<br><br>Either we hit the benchmark in the first 45 days — and everyone wins. Or we keep delivering until that return is realized.<br><br>Fair enough?",
      "key_differences_from_original": [
        "Repetition: Say it 3+ times, not once",
        "Binary framing: Remove perceived loss scenarios",
        "Aspiration above guarantee: 1.5x is floor, not ceiling",
        "Micro-commitments: 'Fair enough?' creates agreement rhythm",
        "Universal application: Works at any scale"
      ],
      "where_to_deploy": [
        "After explaining engagement structure",
        "When handling 'too expensive' objection",
        "When handling 'need guarantees' objection",
        "During integration explanation",
        "On Call Two when presenting scope"
      ]
    },
    "micro_commitment_pattern": {
      "title": "Micro-Commitment Pattern — Systematic 'Fair enough?'",
      "purpose": "Create rhythm of small agreements throughout conversation that makes final close feel like natural continuation",
      "philosophy": "The thesis document uses 'Fair enough?' systematically after EVERY major statement. This creates momentum through accumulated micro-commitments.",
      "where_to_deploy": [
        "After opening frame",
        "After 'what we do' explanation",
        "After each objection handle",
        "After risk mitigation explanation",
        "After ownership separation",
        "Before scheduling Call Two",
        "After any major statement or explanation"
      ],
      "the_pattern": "End every major statement with: '<b>Fair enough?</b>'",
      "why_it_works": [
        "Creates rhythm of small agreements",
        "Makes final close feel like natural continuation",
        "Micro-commitments = momentum maintenance",
        "Forces verbal acknowledgment at each stage",
        "Prevents objections from accumulating silently"
      ],
      "examples": [
        "After thesis: 'What we've seen is that when diligence, message integrity, and the right infrastructure come together, demand becomes predictable. <b>Fair enough?</b>'",
        "After ownership separation: 'Your responsibility is processing that through your existing middle and bottom funnel. <b>Fair enough?</b>'",
        "After risk explanation: 'Either we hit the benchmark fast, or we keep going — both end in your success. <b>Fair enough?</b>'"
      ],
      "critical_note": "Don't say 'Does that make sense?' — that's weak. 'Fair enough?' is confident and assumes agreement."
    },
    "dadd_formula": {
      "title": "Discovery as Due Diligence™ (DaDD™) Formula",
      "purpose": "The behavioral framework for discovery that codifies soft skills into measurable methodology",
      "formula": "(GC × PC²) + PR − BE",
      "elements": {
        "gc": {
          "name": "Genuine Curiosity (GC)",
          "definition": "A disciplined drive to understand the business in depth. Curiosity forces specificity — it demands clarity on people, process, and performance.",
          "in_practice": "Ask 'Who owns each stage?' not 'What happens?' Ask 'Help me understand your conversion path' not 'Can you tell me?'"
        },
        "pc_squared": {
          "name": "Process Conviction (PC²)",
          "definition": "Confidence (squared) in your own advisory and fulfillment processes. This allows you to investigate theirs without insecurity or defensiveness.",
          "in_practice": "You can ask hard questions because you're confident in your methodology. You're not selling — you're auditing to see if engagement is prescribable."
        },
        "pr": {
          "name": "Prescriptive Resolution (PR)",
          "definition": "Every discovery must end with defined next steps or recommendations. Audits conclude with findings, not open-ended conversation.",
          "in_practice": "Always end with: 'Here's what we'll do next...' Never leave discovery open-ended. Schedule Call Two on the spot."
        },
        "be": {
          "name": "Bad Engagements (BE)",
          "definition": "The deliberate exclusion of low-quality or misaligned prospects. Declining poor fits preserves capacity and credibility.",
          "in_practice": "If they can't/won't answer discovery questions, if their process isn't repeatable, if they're not decision-maker — disqualify gracefully."
        }
      },
      "how_it_works": [
        "Curiosity drives investigation",
        "Conviction provides structure",
        "Prescription delivers direction",
        "Discernment filters risk"
      ],
      "why_it_matters": "When consistently applied, you develop a posture that is analytical rather than persuasive — one that creates trust through precision.",
      "the_shift": "From 'Can you tell me about X?' to 'I need to understand X to determine if this is prescribable'"
    },
    "curiosity_standard": {
      "title": "The Curiosity Standard — Self-Audit Checklist",
      "purpose": "Measure whether curiosity is operational vs. conceptual. If you can't answer all 5, you're still guessing.",
      "five_questions": [
        {
          "number": 1,
          "question": "Do I understand how their business actually generates revenue?",
          "what_this_means": "Not just 'they sell software' — but channel mix, who handles what, conversion rates, deal flow"
        },
        {
          "number": 2,
          "question": "Can I map their commercial system from attention to fulfillment?",
          "what_this_means": "You should be able to draw their funnel on a whiteboard: TOF → MOF → BOF with ownership at each stage"
        },
        {
          "number": 3,
          "question": "Do I know who the decision-makers are and how they evaluate trust?",
          "what_this_means": "Who signs? Who approves budget? What matters to them — ROI, risk mitigation, brand protection?"
        },
        {
          "number": 4,
          "question": "Do I know what their best-performing account looks like and why?",
          "what_this_means": "Not just 'big accounts' — but what makes them convert well? Industry? Size? Use case?"
        },
        {
          "number": 5,
          "question": "Can I explain their strengths and inefficiencies better than they can?",
          "what_this_means": "You've diagnosed their system so thoroughly you can mirror it back with clarity they don't have"
        }
      ],
      "the_test": "If you can answer 'yes' to all five, curiosity is operational. If not, you're still guessing.",
      "the_principle": "Curiosity is the antidote to guesswork. Discovery is an audit, not a conversation."
    },
    "approval_flow_questions": {
      "title": "Approval Flow & Buying Process Questions",
      "purpose": "Gain ground in the buying process without sounding pushy. Understand the environment you're selling in.",
      "when_to_deploy": "During or after Integration Explanation, before transition to Call Two. Keep them short and consequential — answers inform the SoW/EL and your tempo.",
      "question_categories": {
        "approval_flow": {
          "title": "Approval Flow (choose 1–2)",
          "questions": [
            "How do new advisory engagements usually get greenlit internally?",
            "Is there a standard review cadence (weekly exec, monthly finance) we should align to?",
            "Who else needs to see the SoW summary before we formalize?"
          ]
        },
        "budget_ownership": {
          "title": "Budget Ownership (choose 1)",
          "questions": [
            "Which budget line does this live under, and who finalizes allocation?",
            "Are there quarter-close constraints we should be aware of?"
          ]
        },
        "friction_risk": {
          "title": "Friction / Risk (choose 1–2)",
          "questions": [
            "Have outside partners ever been slowed by legal or procurement? What helped?",
            "Any compliance boundaries we should respect from day one?"
          ]
        },
        "clarity_probes": {
          "title": "Soft → Direct Clarity Probes (use sparingly, by environment)",
          "questions": [
            {
              "level": "Soft",
              "question": "Who typically needs visibility before you move forward on engagements like this?"
            },
            {
              "level": "Moderate",
              "question": "When you approved similar initiatives, who signed alongside you?"
            },
            {
              "level": "Direct",
              "question": "Who holds final signature on the EL and who authorizes payment timing?"
            }
          ]
        }
      },
      "why_this_matters": "These questions help you map the internal approval path, identify decision-makers, and align your proposal cadence with their review cadence. Equips the internal champion and demonstrates advisory posture."
    }
  }
}

// Make reference_libraries available on window for React components
window.reference_libraries = reference_libraries;