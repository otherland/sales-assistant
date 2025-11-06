let salesData = {
  "metadata": {
    "title": "Revenue Advisory Sales Script - Call One Discovery",
    "version": "2.0",
    "engagement_range": "$50K–$75K",
    "use_case": "High-level B2B sales to Founders, CEOs, CROs, or Senior Executives"
  },
  "sequential_flow": {
    "call_one": [
      {
        "id": "opening_frame",
        "title": "Opening Frame — Setting Context",
        "category": "sequential",
        "phase": 1,
        "purpose": "Establish yourself as a peer conducting due diligence, not a vendor trying to win business",
        "advisor_mindset": "Deliver this like an advisor leading a professional diligence session, not a salesperson opening a discovery call. Slow down, stay calm, and let silence do the work.",
        "script": "Hey [FirstName], <i>great to meet you</i>.<br><br>I'm looking forward to spending the next <u>30 minutes</u> with you here, and happy to get right into it if that's all right with you?<br><br>(Pause for confirmation)<br><br>One thing we've <b>always done</b> - regardless of the engagement type - is treat these sessions as <u>due diligence</u>. It gives us the opportunity to determine whether a structured engagement makes sense on our end, while giving you a clear picture of how we operate.<br><br>(Short pause)<br><br>Specifically, we take the time to <i>really understand</i> how a client's business functions - how they're <b>generating interest</b> in the market, what markets that demand comes from, and how it gets processed into <b>conversion events</b>.<br><br>Everything we do is built around <b>anchors and risk mitigation</b>, so I'll be happy to dive into that and see how it could align with your business goals.<br><br>But before I do, it'd be great to just hear <i>directly from the source</i> - a bit more about the business, how you're currently generating demand, and which markets that demand is coming from.",
        "advisor_notes": [
          "Keep this slow and natural - like you're walking through a familiar process, not performing a script",
          "The tone is executive curiosity. You're not interrogating; you're investigating",
          "The phrase 'treat this as due diligence' is key - it repositions the call immediately",
          "Your goal in this opening isn't to demonstrate expertise; it's to set the posture and invite them to open the floor first"
        ]
      },
      {
        "id": "fork_deflection",
        "title": "What do you do?",
        "category": "sequential",
        "phase": 2,
        "purpose": "Navigate when prospect asks 'What do you do?' without losing control",
        "context": "If the prospect doesn't answer your opening prompt and instead asks: 'Yeah, sure - but could you maybe start by telling me a bit more about what you do?'",
        "golden_rule": "You can acknowledge their question, but you must always end with one of your own. Never spend more than 45–60 seconds explaining your firm before returning to discovery.",
        "paths": [
          {
            "id": "new_economy",
            "economy": "New Economy (Tech, SaaS, Data, AI)",
            "context": "They're fluent in GTM, pipeline, and outbound language. They've probably been pitched by a dozen operators. If you go tactical, you'll sound like one of them.",
            "script": "Of course - <i>totally fair question</i>. We operate as a <b>revenue advisory firm</b> built by founders with <b>decades of experience</b> across technology, marketing, and sales at both SMB and enterprise levels.<br><br>A big part of our model is the <b>vendor and talent network</b> we've developed over the years. Every engagement integrates specialists with <b>real vertical experience</b> in our clients' industries.<br><br>(Short pause)<br><br>Once we understand which channels serve you best and how demand flows through your sales cycle, we run our <u>due diligence process</u> to build an engagement model that <b>reverse engineers a realistic outcome</b> with as <b>low risk as possible</b>.<br><br>(Soft pivot - reclaim frame)<br><br>How are you currently generating demand right now?<br><br>And what does that process look like from the top of the funnel through to a converted client?"
          },
          {
            "id": "old_economy",
            "economy": "Old Economy (Industrial, Services, Legacy)",
            "context": "They're typically not fluent in GTM mechanics. They value stability, brand integrity, and credibility. Here, you speak to modernization - not 'tactics.'",
            "script": "Of course - <i>happy to give you a quick overview</i>. <br><br>We operate as a <b>revenue advisory firm</b> that helps established companies <b>modernize</b> how they generate demand - <u>without disrupting what's worked for so long</u>.<br><br>Most of our work centers on <b>legacy sectors</b> - finance, manufacturing, logistics, insurance - companies with <i>deep expertise</i> and <i>strong reputations</i> in the market.<br><br>Our role is to introduce modern <b>leverage and consistency</b> while <u>protecting the integrity and credibility</u> your brand has built over years.<br><br>We do this through relationships with <b>top vendors and specialists</b>, assembling the right mix of infrastructure and messaging that feels <i>native to your markets</i>.<br><br>(Short pause - redirect to regain discovery flow)<br><br>So just to give me a better sense of context - how are you currently generating demand today, and where is most of that business coming from right now?"
          }
        ]
      },
      {
        "id": "discovery_intro",
        "title": "Discovery Questions — Introduction",
        "category": "sequential",
        "phase": 3,
        "purpose": "Set up the comprehensive due diligence flow",
        "script": "<i>Perfect</i>. Let's go through some questions so I can understand how <b>demand flows through the business</b> - from <u>first touch all the way through to a conversion</u>.<br><br>Let's start at the top - how you're currently <b>generating interest</b> and where that demand is coming from.",
        "advisor_guidance": "Ask 1 question at a time and then be quiet - silence is a powerful tool, use it as often as possible. Don't overthink the order — what matters most is getting reps in."
      },
      {
        "id": "discovery_top_funnel",
        "title": "Top of Funnel — Demand Generation",
        "category": "sequential",
        "phase": 3,
        "section": "A",
        "purpose": "Map how demand is created and which markets are being targeted",
        "carpet_integration": ["C (Cycle)", "P (Pipeline)"],
        "question_groups": [
          {
            "emoji": "🎯",
            "title": "Where Demand Comes From",
            "questions": [
              "How are you currently generating interest in the market and which channels are responsible for most of that demand?",
              "Which channels are most consistent in producing qualified conversations, and what percentage of your opportunities are proactive versus inbound or referral-driven?"
            ]
          },
          {
            "emoji": "📊",
            "title": "What Markets You Target",
            "questions": [
              "How many industries or markets are you currently generating demand in and which are performing best right now?",
              "Which markets, segments, or titles are you prioritizing this quarter, and where have you seen the fastest movement in the last 12–24 months?"
            ]
          },
          {
            "emoji": "🔍",
            "title": "How Strong Leads Develop",
            "questions": [
              "Can we double-click on the channel that's producing the strongest results?",
              "Walk me through how those strongest opportunities typically develop - from that first meaningful contact through to becoming a qualified lead?",
              "What's your current working definition of what makes someone a qualified opportunity for your team?"
            ]
          },
          {
            "emoji": "💬",
            "title": "What Messaging Works",
            "questions": [
              "How are you currently positioning the offer to those markets - what messaging tends to resonate most?",
              "Any markets or verticals you feel are underserved that could represent upside with the right approach?"
            ]
          },
          {
            "emoji": "🆕",
            "title": "What's Changed Recently",
            "questions": [
              "Have you introduced any new strategies, tools, or outreach frameworks in the past 6–12 months?",
              "Have you worked with any external vendors or consultants during that time - and what was your experience like?"
            ]
          }
        ]
      },
      {
        "id": "discovery_middle_funnel",
        "title": "Middle of Funnel — Sales Process & Conversion",
        "category": "sequential",
        "phase": 3,
        "section": "B",
        "purpose": "Understand what happens when demand enters the business and identify the 'installation point'",
        "carpet_integration": ["R (Rep)", "A (ACV)"],
        "intro": "Now, once that initial interest is created - can you walk me through what happens next?",
        "advisor_guidance": "You're tracing the handoff: interest → meeting → qualified opportunity → sales process → conversion. Keep asking 'What happens next?' or 'And then what happens?' to keep them talking.",
        "question_groups": [
          {
            "emoji": "🔄",
            "title": "How Leads Get Handled",
            "questions": [
              "When initial interest comes in, who on your team typically handles that first meaningful follow-up or qualification conversation, and how is that interest tracked or handed off?"
            ]
          },
          {
            "emoji": "📋",
            "title": "How You Nurture Leads",
            "questions": [
              "What assets, nurturing sequences, and follow-up systems do you use for qualified conversations and stalled deals?",
              "Have there been any recent changes to how your team runs the commercial process - new tools, playbooks, or team structure?"
            ]
          },
          {
            "emoji": "📊",
            "title": "Sales Cycle Length",
            "questions": [
              "How long does it typically take from first meeting to closed-won?",
              "How many meaningful conversations (not leads) typically result in one closed deal?",
              "How do win rates vary by company size, industry, segment, or title? Where are they strongest?"
            ]
          },
          {
            "emoji": "⏱️",
            "title": "Where Deals Get Stuck",
            "questions": [
              "Where do most deals tend to stall - early engagement, proposal stage, or late stage?",
              "Do you notice any seasonality or timing patterns in the middle of the funnel - when deals accelerate or slow?",
              "On average, how much pipeline does one rep or team member generate per month - in meetings or dollar value?"
            ]
          },
          {
            "emoji": "🚀",
            "title": "Team Capacity Limits",
            "questions": [
              "How many opportunities does your team produce monthly, and from your perspective, is the team operating at full potential?",
              "If we increased the flow of qualified opportunities into your pipeline, does the current team structure and process have the capacity to handle that additional volume without breaking down?"
            ]
          }
        ],
        "soft_commitment": "This is really helpful - and just so we're calibrated correctly, when we take what we're covering here and start building out a scope for review, does that decision typically sit with you directly, or will you have it reviewed internally first so we can make sure you've got everything you'd need?"
      },
      {
        "id": "discovery_bottom_funnel",
        "title": "Bottom of Funnel — Revenue Mechanics",
        "category": "sequential",
        "phase": 3,
        "section": "C",
        "purpose": "Uncover how effectively the business converts opportunities into revenue and who owns that conversion",
        "carpet_integration": ["E (Environment)", "T (Timeline & Decision-makers)"],
        "intro": "Let's carry on and finish at what happens further down the funnel - how demand turns into actual revenue, and who's responsible for that conversion.",
        "advisor_guidance": "You're collecting hard metrics to model a 45-day milestone: conversion ratios, retention timelines, deal values, and lifetime value. You're also looking for ownership clarity.",
        "question_groups": [
          {
            "emoji": "👥",
            "title": "Who Closes The Deals",
            "questions": [
              "Who's primarily responsible for closing new business and how does that handoff typically occur - same rep or different team/function?"
            ]
          },
          {
            "emoji": "📈",
            "title": "How Many Close Monthly",
            "questions": [
              "From qualified opportunities at the top, what percentage convert into new accounts and how many close per month/quarter on average?"
            ]
          },
          {
            "emoji": "💰",
            "title": "How Much You Close For",
            "questions": [
              "What's the typical average contract value (ACV) and lifetime value (LTV) of a new account?",
              "How long do you typically retain a client or account before renewal or churn?"
            ]
          },
          {
            "emoji": "🎯",
            "title": "Why You Win Deals",
            "questions": [
              "When deals close, what usually determines success - price, speed, relationship, or process?",
              "Are there any recurring or expansion opportunities that increase revenue post-sale?"
            ]
          },
          {
            "emoji": "🚀",
            "title": "Room For Growth",
            "questions": [
              "From your perspective, is there a clear ceiling or constraint that keeps conversion rates from improving further?"
            ]
          }
        ]
      },
      {
        "id": "qoa_deployment_guide",
        "title": "QOA™ Deployment — On-Call Script",
        "category": "sequential",
        "phase": 4,
        "purpose": "Deploy the Qualified Opportunity Anchor™ when quality concerns arise—gives you verbatim on-call scripts for the complete sequence",
        "context": "Use this when quality/conversion concerns surface during or after discovery. This is your practical guide for deploying QOA™ on live calls.",
        "when_to_deploy": {
          "title": "⚠️ Deploy QOA™ Only When:",
          "criteria": [
            "Quality objection is blocking forward momentum",
            "High-trust, boutique context (founder-led, partner-led firm)",
            "You've completed discovery and have their conversion data",
            "They've asked 'How do I know these will be qualified?'"
          ]
        },
        "when_NOT_to_deploy": {
          "title": "❌ Do NOT Deploy QOA™ When:",
          "criteria": [
            "Low-trust environment or bureaucratic organization",
            "Multiple stakeholders/fragmented decision-making",
            "You haven't gathered their funnel data yet",
            "Volume-based outbound to junior SDR/BDR calendars"
          ]
        },
        "on_call_sequence": {
          "title": "📋 ON-CALL SEQUENCE (Tic → Tac → Toe)",
          "tic": {
            "when": "After Bottom of Funnel discovery when you have their conversion data",
            "script": "So it sounds like once someone enters your system and gets to [X stage], you're closing [Y%] of them.<br><br>Would it be fair to say your process is repeatable?<br><br>(Wait for confirmation)<br><br>Perfect—so really, the question isn't <i>if</i> it converts, it's simply how we drive more qualified opportunities into it.",
            "outcome": "✓ Conceptual Yes secured. They admitted their process works."
          },
          "tac": {
            "when": "Immediately after securing the Tic, or when quality concerns first surface",
            "script": "Before we move forward, it's important we both use the same standard for what counts as a qualified opportunity.<br><br>What we typically do with most clients—and what's built into our engagement model—is define a qualified opportunity as any person or entity who's <b>financially able to buy</b>, is <b>serviceable or sizable</b> for your offer, and is <b>problem-aware and genuinely interested</b> in solving it.<br><br>(Pause—let them nod)<br><br>Now, you'll notice we don't include 'decision-maker' in that definition—and that's intentional. Our aim is always to reach the decision-maker, and very often we do. But in a lot of cases, we'll engage one title south—a strong champion who can influence upward. That's both expected and healthy.",
            "outcome": "✓ Directional Yes secured. They adopted your A/B/C standard."
          },
          "toe_optional": {
            "when": "ONLY if quality concern persists after Tic + Tac AND you have high-trust context",
            "script": "So we've established that your process is repeatable and converts at [X%], and we've aligned on what 'qualified' means—financially able, serviceable, and genuinely interested.<br><br>Here's a question: if you had the ability to verify whether each opportunity we bring meets that A/B/C standard <i>before</i> it counts toward the 45-day milestone—would that reduce your risk?<br><br>(Pause—let them think)<br><br>Because that's exactly how we can structure the engagement.<br><br>The milestone credits would be <b>client-verified</b>. You'd confirm whether each opportunity meets the criteria we just defined. If it does, it counts. If it doesn't, we keep working until the milestone is hit.<br><br>That way, you hold the control over what qualifies, and we're held accountable to a number we contractually commit to.<br><br>(Pause)<br><br>From a structural standpoint, here's what that means:<br><br>Our team assumes greater operational risk—we're committing to deliver until the milestone is met, regardless of how long it takes.<br><br>You gain formal verification control—you decide what counts, under the definition we both agreed to.<br><br>The accountability becomes mutual: we're accountable for volume, targeting, and structure. You're accountable for verifying quality under the A/B/C framework.<br><br>Does that structure make sense to you?",
            "outcome": "✓ Commitment Yes secured. They acknowledged that verification control reduces their risk."
          },
          "note": "⚠️ This is NOT full QOA™ deployment—you're pre-selling the logic. Full deployment (calendar access, verification automation, legal clauses) happens when presenting the SOW."
        },
        "handling_quality_objections": {
          "title": "If Quality Objection Surfaces Mid-Discovery",
          "trigger": "They say 'How do I know these will be qualified?' or 'We've had bad leads before'",
          "immediate_response": "That's a <i>fair concern</i>—and it's exactly why we walked through your funnel in detail.<br><br>You mentioned earlier that once someone gets to [X stage], you're closing [Y%] of them, and that your process is repeatable.<br><br>So really, the question isn't whether they'll convert—it's whether the opportunities we create meet the standard we've agreed on: financially able, serviceable, and genuinely interested.<br><br>That's why we defined 'qualified' the way we did—so we're both measuring against the same criteria.",
          "if_they_persist": "Deploy the full Toe sequence above to offer client-verified milestones"
        },
        "quick_reference_card": {
          "title": "📋 Quick Reference: When to Use Each Step",
          "tic": "Use after Bottom of Funnel discovery → 'Would it be fair to say your process is repeatable?'",
          "tac": "Use when first mentioning quality OR when defining scope → 'Here's what we define as qualified: A/B/C'",
          "toe": "Use ONLY when quality objection blocks momentum in high-trust context → 'What if you could verify each one before it counts?'"
        },
        "advisor_notes": [
          "This is your on-call playbook—use these exact scripts when quality concerns arise",
          "Always do Tic → Tac in sequence. Toe is optional based on context.",
          "After deploying Toe, the full QOA™ structure goes into the SOW you send later",
          "For deep training on WHY this works and complete system mechanics, see: <a href='#' onclick=\"loadReferenceContent('qualified_opportunity_anchor_mastery'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer; font-weight: 600;'>QOA™ Complete Training Guide</a>",
          "Log each admission in CRM: Tic (process repeatable), Tac (A/B/C aligned), Toe (power transfer accepted)"
        ],
        "where_to_go_next": {
          "title": "Where to Go Next",
          "guidance": "After deploying QOA™ sequence:",
          "default": "Continue with <a href='#' onclick=\"loadContent('integration_explanation'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Integration Explanation</a> to transition from diagnosis to design, or proceed to <a href='#' onclick=\"loadContent('transition_call_two'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Transition — Close Loop & Secure Call Two</a>"
        }
      },
      {
        "id": "integration_explanation",
        "title": "Integration Explanation — Confirm & Anchor",
        "category": "sequential",
        "phase": 4,
        "purpose": "Transition from 'diagnosis' to 'design' by acknowledging their process and framing how your firm installs demand into it",
        "script": "<i>Perfect</i> - I really appreciate you taking the time to walk me through how the business moves from the <u>top of the funnel all the way down to conversion</u>.<br><br>What that allows us to do now is model a structure that <b>mitigates as much risk as possible</b>.<br><br>(Pause, lean slightly forward, gesture with your hands as if pointing at their process)<br><br>So this <b>process here</b> — the one you just described that takes demand, massages it through the middle, and converts it at the bottom — that's exactly what we'll be <b>pouring qualified interest into</b>.<br><br>We'll dictate which <b>channels make the most sense</b> for your business and then build a proposal that outlines exactly how we'll <b>install those channels above</b> the processes that you described, which will then take the demand and cycle it to conversion. From there, we'll model a <i>conservative, realistic scope</i> based on the <b>conversion ratios</b> you've already shared — and of course, we'll aim to <b>outperform that in performance</b>.<br><br>Any questions so far?<br><br>(If needed - calibrate based on data shared)<br><br>For example, if your internal close rate is around [X%], we'd typically expect demand generated from our channels to convert in a similar range - maybe a 10–20% variance depending on deal cycle and ticket size. The goal is <b>predictability</b>, not over-promise.<br><br>Once that's confirmed, we'll assemble the right <b>pod of internal and external talent</b> — campaign ops, data, messaging — and put together the infrastructure needed to execute cleanly.<br><br>From there, we'll outline a <u>90-day engagement anchored to a 45-day milestone</u>, which we <b>contractually obligate ourselves to</b>. Even in a <u>worst-case scenario, you're still ROI-positive</u>. That language will be <b>blatantly clear in the scope</b> so leadership can see that the engagement is <b>fully de-risked</b>.<br><br>(Tone softens)<br><br>If that feels like something you and leadership feel could evolve into a <i>scalable channel</i> — quarterly, semi-annually, or annually — we're happy to walk that path with you, align on <i>risk tolerance</i>, and define what <b>tangible success</b> looks like together.<br><br>(brief pause, direct but calm)<br><br>Any questions so far?"
      },
      {
        "id": "transition_call_two",
        "title": "Transition — Close Loop & Secure Call Two",
        "category": "sequential",
        "phase": 5,
        "purpose": "Close all open loops and secure a defined next step on the calendar",
        "script": "At this point, what we'll do is take all of the data you've given us and build out an <b>internal engagement model</b> — that's where we <b>reverse-engineer the numbers</b> and map out what a <u>90-day structure</u> could realistically result in.<br><br>From there, we'll wrap that model into a <b>formal scope of work</b> that lays out:<br><br>The <b>channels we'd deploy</b>\nThe <b>milestone structure and success metrics</b>\nThe <u>built-in risk-mitigation language that protects you</u><br><br>Once that's ready, we'll send it over for review and then reconvene to walk through it together.<br><br>(Pause, then lightly transition to the push for call 2)<br><br>In terms of scheduling that review - does [suggest specific day/time within 3–5 business days] work on your end?<br><br>(Pause, work with them to get it booked)<br><br>(If they hesitate or seem unsure)<br><br><i>Totally fine</i> — we don't need to confirm anything today; it just helps me lock in time on our end so the team can <b>prioritize building your model</b> this week.<br><br>Would you prefer to receive the scope first before scheduling a review?<br><br>(If they strongly prefer to schedule later)<br><br>Works fine either way, I appreciate your time and we're looking forward to building out a scope for review - I'll have that sent over for processing and then shipped to you in the next day or two",
        "soft_commitment_question": "Perfect - before I let you go, we always like to make sure the scope we put together aligns with what actually matters most on your side.<br><br>Everyone has different biases when it comes to greenlighting something like this.<br><br>Just so we're catering it toward what's most important to you — what do you think typically pushes something like this across the line internally? Is it the ROI potential, the de-risking language, the milestone structure, or something else entirely?",
        "advisor_notes": [
          "Your tone should stay professional and composed, not excited",
          "This is not a 'closing moment'; it's simply the next step in the due diligence process",
          "You are always assuming that Call Two is part of the same diligence workflow",
          "The goal is to leave the call with Call Two booked and confirmed"
        ]
      },
      {
        "id": "pricing_objection",
        "title": "Pricing Objection Handler",
        "category": "interrupt",
        "purpose": "Defuse tension, provide clarity, reclaim frame without being defensive",
        "trigger": "When they ask 'What's the price?' too early in discovery, or say 'We don't have a budget'",
        "where_it_shows_up": "Prospects bring up cost prematurely in discovery, often before you've laid any value or explained the engagement model. It's usually a frame check, not a real objection.",
        "script": "<i>Fair question</i>, I can't tell what the number is but I can provide an <b>investment spectrum</b>.<br><br>Our typical engagements fall between <u>$25,000 and $75,000</u> over a <b>90-day window</b> with half of that upfront and the other half is tied to <b>contingency</b>.<br><br>We always prefer to walk through our <u>full diligence process</u> before talking numbers like everyone else, because it really does allow us to present a <b>structured solution with a real figure</b>.<br><br>A common scope would be our <u>90-day window with a 45-day milestone</u>, we <b>contractually obligate ourselves</b> to a <b>tangible number</b> that you can point at on both day 45 and 90.<br><br>So, for example, a scope that sets <b>25 qualified opportunities by Day 45</b>.<br><br>If for any reason we don't hit that milestone within that window, that <u>second tranche of the fee doesn't unlock</u> - and we continue servicing the engagement until we do.<br><br>In some cases, that milestone has been hit as early as 22 days; in others, it's taken closer to 55 or 60. But either way, we're <b>fully accountable until it's realized</b>.<br><br>The purpose of structuring it this way is to make the <u>worst-case scenario ROI-positive</u> for the client, while keeping our own performance completely tied to <b>measurable results</b>.<br><br>As our conversation unfolds today, we'll focus on the <i>right benchmarks</i> - what qualifies as an opportunity in your world, what markets those opportunities sit in, and who the decision-makers are that we'd need to reach in order to open those doors.<br><br>Once we've mapped that out, we can model a scope that aligns to those definitions so you have something <b>precise to review</b>.",
        "how_to_handle": [
          {
            "step": "Give a Broad Range, Briefly",
            "content": "Don't dodge the question outright (that makes you look slippery). Anchor with a range so you sound confident: 'Engagements typically fall anywhere between $25K and $75K depending on scope.'"
          },
          {
            "step": "Reframe Around Risk Mitigation",
            "content": "Immediately pull them away from price fixation and into value logic: 'What's unique about how we structure these is that risk mitigation is always the top priority. Every engagement has a milestone at the halfway point, and the scope is built so that the worst-case scenario is still significantly ROI positive.'"
          },
          {
            "step": "Push to Scope, Not Numbers",
            "content": "Make it clear the real answer only comes after due diligence: 'The reality is, until we build your engagement model, it's not possible to give you an exact figure. That model is what shows you the end of the engagement before we even begin, and it's what allows us to scope a conservative, realistic outcome for both of us.'"
          },
          {
            "step": "Position Discovery Properly",
            "content": "Frame the call as mutual due diligence: 'This conversation is simply to answer your questions and gather what we need. Once we've got that, we can build the model and present the scope, and that's where the pricing becomes specific and makes sense.'"
          }
        ],
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
        "pivot_examples": [
          {
            "text": "But before we go deeper into structure, it'll help to get a better picture of how you're currently generating demand - that'll tell me whether we're anchoring on pipeline or revenue.",
            "link_to": "discovery_top_funnel",
            "link_text": "Top of Funnel — Demand Generation"
          },
          {
            "text": "So that gives you the framework - now, let's get back to understanding your current process. You mentioned earlier that [reference something they said] - can you walk me through what happens next in that process?",
            "link_to": "discovery_middle_funnel",
            "link_text": "Middle of Funnel — Sales Process & Conversion"
          }
        ],
        "key_lesson": "Price questions in discovery are premature. Always give a confident range, then immediately pivot back to risk mitigation and the unique value of your scope process. Your leverage only comes once the SOW is in their hands — so keep the frame focused on due diligence, not discounts or exact numbers.",
        "advisor_notes": [
          "Deliver this with complete neutrality - no defensiveness, no hesitation",
          "Keep tone measured, factual, and steady - this is just how the firm operates",
          "The phrase 'worst-case scenario ROI-positive' is a power anchor",
          "Critical: Never sit in a pricing question. The moment you finish, immediately move back into discovery",
          "If they push on upfront payment, use the capitalization framing scripts above"
        ],
        "where_to_go_next": {
          "title": "Where to Go Next",
          "guidance": "After addressing pricing, immediately pivot back to discovery—never sit in a pricing question:",
          "default": "Give the range ($25K-$75K), then immediately pivot back to discovery. Continue with <a href='#' onclick=\"loadReferenceContent('discovery_framework'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Discovery Framework</a> or continue gathering data through <a href='#' onclick=\"loadContent('discovery_top_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Top of Funnel</a>, <a href='#' onclick=\"loadContent('discovery_middle_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Middle of Funnel</a>, or <a href='#' onclick=\"loadContent('discovery_bottom_funnel'); return false;\" style='color: var(--primary-color); text-decoration: underline; cursor: pointer;'>Bottom of Funnel</a> questions to build the engagement model"
        }
      },
      {
        "id": "universal_objection_handle",
        "title": "Universal Objection Handle",
        "category": "interrupt",
        "trigger": "When you freeze on any discovery objection — use this catch-all",
        "purpose": "Anchor on infrastructure, messaging, engagement model, and risk mitigation — works on ANY objection",
        "context": "This is your emergency script when you don't know what to say. It handles mechanism questions, 'how' questions, vendor fatigue, and budget concerns all at once.",
        "script": "<i>Great question</i>. We've invested well over <u>six figures</u> into a <b>private internal infrastructure</b>, and that's what allows us to plug into <i>any and every channel</i> depending on what makes the most sense for a client. Through that infrastructure, we can run advertising on Instagram, Facebook, Google if that's the best lane, or we can scale LinkedIn, email, calls, or SMS when the market requires it. It's an <b>all-in-one system</b>, and what we do is build a <b>channel stack</b> — sometimes one or two channels, sometimes more — tailored to the market you're penetrating. For B2B, that usually means LinkedIn, email, and calls. For B2C, like in insurance, we lean more on SMS and paid ads.<br><br>But here's the <u>key</u>: over many years of doing this, we've learned the channel itself doesn't really matter. What matters is the <b>messaging</b>. That's the <b>crown jewel</b>. <b>80% of the results</b> come from getting the messaging right, not the vehicle. That's why we lean on <b>world-class campaign writers</b> and partners we've worked with for years. They design <b>enterprise-grade messaging</b>, and then we deploy it <i>compliantly and at scale</i> — always <u>protecting your brand</u>.<br><br>Now, until we've built out your <b>engagement model</b>, it's not really possible to answer how in a tactical way. Right now we're in <u>due diligence</u>, and our job is to collect the information we need to plug into that model. Once we do, we'll see exactly whether we can outperform an internal channel you already have, or if not, set a <i>conservative external benchmark</i> we anchor against. Either way, the <b>model is what drives the math</b>.<br><br>And that's how we <b>mitigate your risk</b>. Every engagement is scoped against benchmarks — typically <u>90 days with a midpoint milestone at day 45</u>. If we say we'll deliver, for example, 20 qualified decision-maker introductions, then by day 45 we've <b>committed to hitting a set portion</b> of that. If it takes 50 or 55 days instead, you <u>don't unlock the second payment until we've delivered</u>. We just keep working until it's met.<br><br>So regardless of whether it lands at day 45, 55, or 60, the structure ensures you <b>put X in and get Y out</b>. That's why the channel, the tools, the AI, or the tactic is never the focus. The focus is the <u>engagement model</u> — what the end looks like before we even start — and <b>reverse-engineering it</b> so that your risk is <b>completely mitigated</b>. From there, the only question is whether those outcomes tie directly to your <b>LTV math and growth goals</b>.",
        "advisor_notes": [
          "When in doubt → drop this handle → pivot back to the Engagement Model. That's the kill-shot.",
          "This covers: mechanism questions, 'how do you do it?', pricing concerns, risk aversion, vendor fatigue",
          "After delivering this, ALWAYS pivot back to a discovery question",
          "The key phrase: 'until we've built out your engagement model' — use this to defer tactical questions"
        ],
        "story_mode": {
          "title": "Story Mode: The Compliance & Infrastructure Story",
          "when_to_use": "Use when prospects are genuinely curious about 'how' but you sense they're sophisticated and will filter out vendor-speak. Best for regulated industries or brand-sensitive buyers. 2-3 minute investment shows mechanism through story, not explanation.",
          "script": "Let me show you how this worked for one of our clients.<br><br>(Pause, shift into story mode)<br><br>They operate in a <b>highly regulated industry</b> — every piece of communication has to be compliant, professional, brand-safe. One wrong move and they lose credibility forever. They were <i>skeptical about 'outbound'</i> because they'd seen competitors destroy their reputation with spray-and-pray campaigns.<br><br>Here's what we did.<br><br>Our analysts spent <b>two weeks studying their world</b> — the language their buyers actually use, the pain points that actually matter, the outcomes that move the needle. We extracted their <b>30 years of institutional knowledge</b> into a positioning framework.<br><br>Then our campaign team — these are <u>writers who've worked with Fortune 500s</u>, not freelancers — designed messaging that didn't sound like 'marketing.' It sounded like a <b>peer in their industry</b> reaching out with a legitimate opportunity.<br><br>We deployed that through our <b>private infrastructure</b> — not generic tools, but a system we've invested <b>six figures</b> into that ensures compliance, deliverability, and brand protection at scale.<br><br>Within <b>45 days</b>, <b>23 qualified executive meetings</b>. By <b>day 90</b>, <b>4 new clients worth $2M in fees</b>.<br><br>(Pause, bring it back)<br><br>So the 'how' is less about tools and more about the <b>diligence process</b> that extracts your knowledge, combined with the <b>infrastructure</b> that deploys it at scale while protecting your brand.<br><br>Now, until we've built out <i>your</i> engagement model, it's not really possible to answer 'how' in a tactical way. Right now we're in due diligence, and our job is to collect the information we need to plug into that model. Once we do, we'll see exactly whether we can outperform an internal channel you already have, or if not, set a conservative external benchmark we anchor against.<br><br>Either way, the <b>model is what drives the math</b>, and that's how we mitigate your risk.<br><br>What I'd like to understand is: how are you currently generating demand today, and what does that process look like from first touch through to conversion?"
        }
      },
      {
        "id": "referrals_objection",
        "title": "Referrals & Connections Objection",
        "category": "interrupt",
        "trigger": "When they ask 'Do you have connections?' or 'We grow through referrals'",
        "purpose": "Validate, reframe, and qualify — never correct or defend",
        "context": "This is the most common objection in Revenue Advisory. It usually signals confusion about what you do, fear of cold traffic, or both. Your job: validate first, then spin it as good news, and always end with a question.",
        "golden_rule": "Never make the prospect feel wrong. Validate → Spin (or stay neutral) → Ask a question. All bad news is good news.",
        "core_principle": "We don't tap a Rolodex. We don't sell introductions. We build and warm new channels using messaging and outreach infrastructure.",
        "primary_reframe": "That's actually really nice to hear. Some of the best results I've personally seen came from clients who were mainly referral-based. Since they'd never opened up a new channel before, the demand was untapped. So when we introduced a new channel, it validated their thesis a lot quicker than clients who had more exposure to other channels.<br><br>How consistent have those referrals been month-to-month?",
        "question_groups": [
          {
            "emoji": "🔍",
            "title": "Diagnostic Questions — Test the Referral Model",
            "questions": [
              "How consistent are those referrals month to month?",
              "Has the business actually scaled meaningfully on referrals alone?",
              "What happens during months when referrals slow down?",
              "What's the ceiling you see with a referral-only model?"
            ]
          },
          {
            "emoji": "🧠",
            "title": "What They're Really Saying (Psychology)",
            "questions": [
              "I don't want to waste time with people who aren't serious",
              "I don't want my brand hurt by bad outreach",
              "I don't want to pay for something that won't convert",
              "Referrals = trust. Cold = risk. That's the belief system you're reframing."
            ]
          },
          {
            "emoji": "✅",
            "title": "Green Flags — Signs of a Qualified Client",
            "questions": [
              "Open to a new channel if it's de-risked and milestone-based",
              "Shows evidence of a sales process that can absorb new pipeline",
              "Responds to your reframe with curiosity instead of resistance",
              "Agrees that referrals are inconsistent or limited"
            ]
          },
          {
            "emoji": "🚩",
            "title": "Red Flags — Signs to Disqualify",
            "questions": [
              "Obsessed with warm introductions, unwilling to explore new channels",
              "Outright allergy to cold traffic no matter how you frame it",
              "No conversion infrastructure — no intake, no sales team, no follow-up",
              "These prospects will fail to convert your work and blame you"
            ]
          }
        ],
        "validation_spins": [
          "That's actually really nice to hear — referral-based clients often see the best results when adding a new channel.",
          "Exactly — that's the outcome we want. The process we use is designed to feel like those referrals, just at scale.",
          "Makes sense. What we've found is that referral-heavy companies have untapped demand they haven't accessed yet.",
          "Great, that proves you're open-minded and willing to test what works."
        ],
        "polite_disqualification": "Totally understood. If referrals are the only channel you want to lean on right now, then it probably doesn't make sense to move forward. What we do is build and warm a new channel so you're not capped by referrals — and if that's not a priority yet, we're not the right fit.",
        "pivot_examples": [
          {
            "text": "Before we go deeper, help me understand your current referral process — how do those typically come in, and what happens next?",
            "link_to": "discovery_top_funnel",
            "link_text": "Top of Funnel — Demand Generation"
          },
          {
            "text": "When those referrals do come in, what does your conversion process look like?",
            "link_to": "discovery_middle_funnel",
            "link_text": "Middle of Funnel — Sales Process & Conversion"
          }
        ],
        "advisor_notes": [
          "This objection almost always means they think you're selling introductions — clarify immediately",
          "Never anchor your new channel to referral conversion benchmarks",
          "A 'no' from a referral-obsessed prospect is as valuable as a 'yes' from the right one",
          "Deliver validation calmly, spin it positive, then ask a diagnostic question",
          "If they stay firm on referrals after reframing, politely disqualify and protect your time"
        ],
        "story_mode": {
          "title": "Story Mode: The Referral Ceiling Story",
          "when_to_use": "Use when prospect is engaged, rapport is high, and they're genuinely skeptical about non-referral channels (not dismissive). Reserve for sophisticated buyers who appreciate narrative. 2-3 minute investment.",
          "script": "<i>I'll be honest with you</i> — we don't tap a Rolodex, and that's intentional. Let me tell you why.<br><br>(Pause, shift into story mode)<br><br>One of our clients came to us after <b>exhausting their referral network</b>. They'd built a <b>$15M business</b> entirely through warm introductions — impressive, right? But they'd hit a ceiling. Every partner they knew had already been tapped, and growth had flatlined.<br><br>They were <i>skeptical about 'cold outreach'</i> — worried about brand risk, worried about tire-kickers, worried about wasting time on conversations that wouldn't convert.<br><br>So we built a system that <b>feels like referrals but operates at scale</b>.<br><br>We extracted their institutional knowledge — how they speak, what outcomes matter to their buyers, the integrity they protect, the language their world uses. Then we designed messaging that sounded like it came from a <u>peer in their world</u>, not a vendor trying to sell something.<br><br>We deployed that through our <b>private infrastructure</b> — controlled, compliant, brand-safe. No spray-and-pray, no generic templates, no shortcuts that damage reputation.<br><br>Within <b>60 days</b>, we'd generated <b>18 qualified meetings</b> with exactly the profiles they needed — decision-makers who fit their A/B/C criteria, genuinely interested, financially able.<br><br>By <b>day 90</b>, they'd closed <b>3 new clients worth $800K in fees</b>. And here's what they told us: <i>'These conversations felt warmer than half our actual referrals.'</i><br><br>(Pause, bring it back to them)<br><br>That's the difference. We don't <u>replace</u> your referral channel — we <b>engineer a new channel that performs like referrals but operates predictably</b>. You're not choosing between referrals and cold outreach. You're adding a systematic channel that creates the same quality conversations, just without the inconsistency.<br><br>Now, to see if that makes sense for your business: how consistent have those referrals been month to month?"
        }
      }
    ]
  },
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

    "objection_handlers": {
      "title": "Objection Handler Library",
      "subtitle": "115+ field-tested responses organized by category",
      "purpose": "Pull off the main track, handle objections, return to your mile marker",

      "handlers": {
        // Money & Budget (9 handlers)

        "discount_request": {
          "title": "Discount Request",
          "category": "Money & Budget",
          "trigger": "When they ask for a discount or special pricing",
          "quick_response": "I completely understand wanting the best value. Our pricing is structured around the risk mitigation and guaranteed outcomes we provide.",
          "full_script": "I appreciate you wanting to ensure you're getting the best value. Our pricing is designed around the risk mitigation structure we provide—guaranteed outcomes tied to your internal benchmarks. We don't discount because it would undermine the capital allocation your leadership needs to defend.<br><br>However, what we can do is ensure the scope is perfectly tailored to your economics.",
          "key_principle": "Don't discount. Re-anchor to value and risk mitigation."
        },

        "payment_terms": {
          "title": "Payment Terms",
          "category": "Money & Budget",
          "trigger": "Questions about payment structure, installments, etc.",
          "quick_response": "Our payment structure is designed to align incentives: 50% upfront to fund the infrastructure build, 50% contingent on the 45-day milestone.",
          "full_script": "Our payment terms are structured to ensure mutual commitment to success. The initial 50% funds the strategic infrastructure and execution setup required to hit your Day-45 milestone. The remaining 50% is only paid upon successful delivery of that milestone.<br><br>This structure protects both sides—if we don't deliver the guaranteed outcomes, you don't pay the full fee. If we do deliver, you've paid for a risk-mitigated capital allocation.",
          "key_principle": "Terms protect both parties and align incentives."
        },

        "budget_constraints": {
          "title": "Budget Constraints",
          "category": "Money & Budget",
          "trigger": "They say they don't have budget or it's limited",
          "quick_response": "Budget conversations are exactly why we run this due diligence first. Let's see if the economics pencil out before we discuss allocation.",
          "full_script": "Budget constraints are real, which is precisely why we conduct this due diligence first. Rather than discussing budget availability, let's determine if this makes economic sense for your business.<br><br>If we could guarantee you 35 qualified executive meetings over 90 days at a cost that represents X% of your average contract value, would that be worth the investment? What's your typical ACV?",
          "key_principle": "Focus on ROI, not budget limits. Economics drive allocation."
        },

        "free_pilot": {
          "title": "Free Pilot",
          "category": "Money & Budget",
          "trigger": "Requests for free trial, pilot, or test period",
          "quick_response": "We don't offer free pilots because our engagements require significant upfront infrastructure investment. However, our risk mitigation structure protects you completely.",
          "full_script": "I understand wanting to test before committing—that's smart business. However, our model requires substantial upfront investment in proprietary infrastructure, messaging architecture, and execution resources to guarantee the outcomes.<br><br>What we offer instead is complete risk mitigation: if we don't hit the agreed 45-day milestone, you don't pay the contingent fee. It's effectively a 'pilot with guarantee.'<br><br>Would you like to see how that milestone is calculated based on your current benchmarks?",
          "key_principle": "No free pilots. Risk mitigation replaces traditional trials."
        },

        "performance_only": {
          "title": "Performance-Only",
          "category": "Money & Budget",
          "trigger": "Want to pay only for results/outcomes",
          "quick_response": "Our model is already performance-based: 50% contingent on hitting the 45-day milestone. That's as performance-only as it gets.",
          "full_script": "That's exactly what our structure provides. We are 50% performance-based—the second payment only triggers when we deliver the agreed 45-day milestone. If we don't hit it, you don't pay the full fee.<br><br>This isn't traditional 'pay for results' because results in sales are probabilistic. Instead, we guarantee the input (qualified opportunities) and you own the conversion outcomes.<br><br>The milestone is designed to be conservative and achievable. Let me show you how it's calculated...",
          "key_principle": "We are already performance-based with risk mitigation."
        },

        "roi_questions": {
          "title": "ROI Questions",
          "category": "Money & Budget",
          "trigger": "Questions about return on investment",
          "quick_response": "The ROI is built into the structure. We guarantee outperforming your best producer by 1.5x, with worst-case protection.",
          "full_script": "ROI is exactly what our structure is designed to guarantee. We commit to outperforming your current best producer by 1.5x in qualified meetings over 90 days. Even at conservative conversion rates, this generates significant ROI.<br><br>For example, if your best producer generates 8 meetings/month at a 20% close rate and $50K ACV, that's $80K/month in revenue. We guarantee 12+ meetings/month, representing $120K+ in potential revenue.<br><br>The fee represents approximately X% of that incremental revenue. What's your current best producer's monthly output?",
          "key_principle": "ROI is guaranteed through the structure, not hoped for."
        },

        "cost_breakdown": {
          "title": "Cost Breakdown",
          "category": "Money & Budget",
          "trigger": "Want detailed breakdown of what the fee covers",
          "quick_response": "The fee covers the complete engagement architecture: infrastructure, execution, and risk mitigation. We don't break it down because value comes from the integrated solution.",
          "full_script": "Our fee covers the comprehensive engagement architecture designed for board-level defensibility. This includes:<br><br>- Proprietary infrastructure and messaging systems\n- Dedicated execution team and governance\n- Risk mitigation and milestone guarantees\n- Strategic oversight and optimization<br><br>We don't provide cost breakdowns because the value proposition is the integrated outcome, not individual components. Breaking it down would undermine the advisory positioning.<br><br>The fee is positioned as a capital allocation with guaranteed ROI. What's your threshold for investments that generate 1.5x returns?",
          "key_principle": "Don't break down costs. Value is in the integrated architecture."
        },

        "payment_plans": {
          "title": "Payment Plans",
          "category": "Money & Budget",
          "trigger": "Want to spread payments over time",
          "quick_response": "Our structure is already phased: 50% upfront for infrastructure, 50% contingent on results. This is the inherent payment plan.",
          "full_script": "We don't offer traditional payment plans because our structure already provides the optimal phasing. The 50% upfront investment funds the infrastructure and execution resources needed to guarantee results. The 50% contingent payment only occurs after we've delivered the 45-day milestone.<br><br>This creates the perfect balance: you're protected from risk while ensuring we have the resources to deliver. Traditional payment plans would undermine this risk mitigation.<br><br>Would you like to see how the milestone calculation ensures this is a conservative, achievable target?",
          "key_principle": "Structure is already the optimal payment plan."
        },


        // Quality & Proof (12 handlers)
        "quality_concern_early": {
          "title": "Quality Concern (Early)",
          "category": "Quality & Proof",
          "trigger": "Quality concerns before discovery is complete",
          "quick_response": "Quality is exactly why we conduct this thorough discovery. The Qualified Opportunity Anchor™ transfers judgment control to you.",
          "full_script": "I completely understand the quality concern—that's legitimate. The beauty of our model is that quality control is built in through the Qualified Opportunity Anchor™ (QOA™).<br><br>We only deliver opportunities that meet your A/B/C criteria (Financially Able, Serviceable, Genuinely Interested). If any opportunity doesn't meet your standards, you simply verify it as 'Disqualified' and it doesn't count toward the milestone.<br><br>This gives you complete veto power over quality. Before we can define those criteria though, we need to understand your process. What makes someone 'qualified' in your current system?",
          "key_principle": "QOA™ gives them veto power over quality."
        },

        "quality_concern_late": {
          "title": "Quality Concern (Late)",
          "category": "Quality & Proof",
          "trigger": "Quality concerns after discovery, near close",
          "quick_response": "You've already admitted your process converts. The question isn't 'will they convert?' but 'how do we feed more qualified opportunities into your proven system?'",
          "full_script": "I hear the quality concern, and that's valid. But remember what you told me earlier—you said your sales process is repeatable and converts at X% rate. We've already established that your system works.<br><br>The question now is simply: how do we feed more qualified opportunities that meet your A/B/C criteria into that system you know works?<br><br>The Qualified Opportunity Anchor™ gives you control: any opportunity that doesn't meet your standards gets vetoed and doesn't count. You maintain complete quality control.<br><br>Shall we review your A/B/C criteria one more time to ensure we're aligned?",
          "key_principle": "Anchor to their earlier admissions. QOA™ protects quality."
        },

        "quality_concern_toe": {
          "title": "Quality Concern (Requires Toe)",
          "category": "Quality & Proof",
          "trigger": "Deep quality skepticism that needs power transfer",
          "quick_response": "The Toe addresses this perfectly. You get veto power over every opportunity. If they're not genuinely interested, you don't credit the milestone.",
          "full_script": "This is exactly what The Toe (Qualified Opportunity Anchor™) solves. We transfer complete judgment control to you.<br><br>Here's how it works: When we deliver an opportunity, you receive a simple verification form asking if they meet your A/B/C criteria. If you check 'Yes, this meets our standards,' it counts toward the milestone. If you check 'No,' it doesn't count and we replace it.<br><br>You have unilateral veto power. This eliminates any quality risk because you control what gets credited. Even if we're wrong about fit, you simply don't credit the milestone.<br><br>This power transfer is what allows us to guarantee the volume while you control the quality. Does this address your concern?",
          "key_principle": "Toe = Power Transfer. They get veto control."
        },

        "case_studies": {
          "title": "Can You Show Me Case Studies / Proof First?",
          "category": "Quality & Proof",
          "trigger": "Can you show me case studies / proof first?",
          "quick_response": "Of course, I'll send you information after the call. What I'd like to do is include not just our deck, but also 1-2 recent successes and, most importantly, your Scope of Work. To make that possible, we just need to finish this due diligence — a few more questions on my end, and then I can send something that's actually meaningful to you. Otherwise, you'd just be getting generic info. Does that sound fair?",
          "full_script": "Of course, I'll send you information after the call. What I'd like to do is include not just our deck, but also 1-2 recent successes and, most importantly, your Scope of Work.<br><br>To make that possible, we just need to finish this due diligence — a few more questions on my end, and then I can send something that's actually meaningful to you. Otherwise, you'd just be getting generic info. Does that sound fair?<br><br>A request for case studies is less about needing documents and more about whether the prospect believes your positioning (a frame issue). The recommended handling involves quickly confirming you will send the materials, but insisting on finishing due diligence first to ensure the materials you send are relevant and packaged with a Scope of Work (SOW). The email is not the asset — the SOW is.",
          "key_principle": "Say yes happily, reset frame, complete discovery for tailored SOW."
        },

        "references": {
          "title": "References",
          "category": "Quality & Proof",
          "trigger": "Requests for client references",
          "quick_response": "We have references available, but they come with the engagement. Would you like me to connect you with a current client?",
          "full_script": "References are absolutely available. We work with clients who are happy to speak about their experience.<br><br>However, we only share references after the engagement letter is signed to protect our clients' confidentiality during their growth phase. Would you like me to facilitate an introduction to one of our current clients who matches your industry?<br><br>To make this productive, what specifically would you like to learn from the reference call?",
          "key_principle": "References available post-signing to protect confidentiality."
        },

        "proof_of_concept": {
          "title": "Proof of Concept",
          "category": "Quality & Proof",
          "trigger": "Want proof this works before committing",
          "quick_response": "Our 45-day milestone serves as the proof of concept. If we don't deliver, you don't pay the contingent fee.",
          "full_script": "That's exactly what our 90-day structure provides—a built-in proof of concept. We guarantee hitting the 45-day milestone with specific, measurable outcomes. If we don't deliver, you don't pay the contingent 50%.<br><br>This isn't theoretical proof—it's actual performance with your money at risk, not ours. The milestone is conservatively calculated based on your current benchmarks.<br><br>Would you like to see how we calculate the milestone to ensure it's realistic and achievable?",
          "key_principle": "45-day milestone = Proof of concept with money back guarantee."
        },

        "past_vendor_failure": {
          "title": "Past Vendor Failure",
          "category": "Quality & Proof",
          "trigger": "References to bad experiences with previous vendors",
          "quick_response": "I appreciate you sharing that experience. That's exactly why our model includes risk mitigation and outcome guarantees.",
          "full_script": "Thank you for sharing that experience—I can understand why you'd be cautious. Bad vendor experiences are unfortunately common in this space.<br><br>Our model is specifically designed to address those failures through:<br><br>1. Risk mitigation: 50% contingent on results\n2. Outcome guarantees: Tied to your internal benchmarks\n3. No 'black box' mechanics: Transparent reporting and control<br><br>What specifically went wrong with your previous vendor? I'd like to ensure our approach addresses those pain points.<br><br>This due diligence process is designed to prevent those same issues.",
          "key_principle": "Acknowledge, learn from past failures, show how we prevent them.",
          "story_mode": {
            "title": "Story Mode: The Client-Verified Accountability Story",
            "when_to_use": "Use when past vendor experience is a major concern and prospect is engaged. Best for sophisticated buyers who've been burned multiple times and need to see prevention, not just promises. 2-3 minute investment.",
            "script": "I appreciate you sharing that — and honestly, that's <u>exactly the kind of experience</u> that validates why we built our model the way we did.<br><br>Let me walk you through how we handle this differently.<br><br>(Pause, shift into story mode)<br><br>We had a client who'd been <b>burned by three agencies in 18 months</b>. Each one promised 'qualified leads,' delivered garbage, blamed the client's sales process when nothing converted, and disappeared. They were skeptical — rightfully so.<br><br>When they came to us, the first thing they said was: <i>'How do I know you won't do the same thing?'</i><br><br>Here's what we did differently.<br><br>We spent <b>45 minutes mapping their entire funnel</b> — not to pitch, but to diagnose. We identified that their close rate was <b>22% on qualified opportunities</b>. We documented that number. Then we built a <b>45-day milestone</b> around that <u>exact conversion rate</u> — conservative, realistic, tied to their actual performance.<br><br>But here's the key: we gave them <b>veto power</b>.<br><br>Every opportunity we delivered, <u>they verified</u> against the criteria we'd agreed to together. If it didn't meet their standard — if the prospect wasn't genuinely interested, wasn't financially able, wasn't serviceable — it <b>didn't count toward the milestone</b>. We kept working until we hit the number.<br><br>By <b>day 60</b>, we'd delivered <b>17 verified opportunities</b>. They closed <b>4 of them</b>. That's a <b>23% close rate</b> — which matched <i>exactly</i> what they'd told us their process converts at.<br><br>That proved two things: the opportunities we delivered were actually qualified, and their system worked exactly as they'd described.<br><br>(Pause, bring it back to them)<br><br>That's the difference. We're not promising magic or guaranteeing closed deals. We're <b>engineering a system</b> where your risk is completely mitigated — you control what counts, we're accountable to your actual conversion metrics, and the milestone structure protects you if we underdeliver.<br><br>Now, to understand your system: what specifically went wrong with your previous vendor? Where did they fail you?"
          }
        },

        "entity_size_credibility": {
          "title": "Entity Size/Credibility",
          "category": "Quality & Proof",
          "trigger": "Questions about company size, experience, or credibility",
          "quick_response": "We're a focused Revenue Advisory firm with deep expertise in outbound execution. Our Commercial Finance arm adds additional credibility.",
          "full_script": "That's a fair question. We're a specialized Revenue Advisory firm that operates with a focused model: we either win big or stay small. This allows us to maintain the highest standards and invest heavily in our infrastructure.<br><br>We also run a Commercial Finance arm that structures multi-million dollar deals, which gives us additional insight into executive decision-making and capital allocation.<br><br>Our track record includes X clients across Y industries, with average outcomes of Z. Would you like me to share some specific results?",
          "key_principle": "Focus on specialization and Commercial Finance credibility.",
          "story_mode": {
            "title": "Story Mode: The Boutique Advantage Story",
            "when_to_use": "Use when prospects question your size, headcount, or credibility. Best for sophisticated buyers who value quality over scale. Shows that boutique positioning is intentional, not a weakness. 2-3 minute investment.",
            "script": "That's a great question, and I'll be direct with you — we're <b>intentionally boutique</b>. Let me tell you why that's actually an advantage.<br><br>(Pause, shift into story mode)<br><br>One of our clients was evaluating us against a <b>70-person agency</b> with offices in three cities, flashy presentations, big team photos on their website. On paper, they looked more 'credible.'<br><br>But here's what happened.<br><br>The agency promised them the world, assigned them to a junior account manager, and delivered <i>generic spray-and-pray campaigns</i> that destroyed their brand reputation. After 6 months and $80K spent, they had 3 qualified meetings and zero deals.<br><br>When they came to us, we took a different approach.<br><br>We're <b>President-led</b> — I personally oversee every engagement. We don't pass clients to juniors. We operate with a <b>focused model: we either win big or stay small</b>. This allows us to maintain the highest standards and invest heavily in our infrastructure.<br><br>We also run a <b>Commercial Finance arm</b> that structures <b>multi-million dollar deals</b> — ABL transactions, acquisition financing, M&A advisory. That division is larger and actively participates in capital markets, which gives us insight into executive decision-making that most agencies will never have.<br><br>For this client, we spent <b>3 weeks mapping their world</b> — not pitching, but diagnosing. We extracted their institutional knowledge, designed messaging that sounded like a peer in their industry, and deployed it through our <b>private infrastructure</b>.<br><br>Within <b>45 days</b>, <b>19 qualified meetings</b>. By <b>day 90</b>, <b>5 new clients worth $1.2M</b> in their first-year revenue.<br><br>(Pause, bring it back)<br><br>The boutique model isn't a weakness — it's <u>why we outperform</u>. Bigger firms assign you to juniors and recycle the same playbook across every client. We stay small, invest in world-class infrastructure, and treat every engagement like it's the only one that matters.<br><br>The outcomes speak louder than headcount. Now, to see if that positioning makes sense for your business: what's been your biggest frustration with vendors or agencies in the past?"
          }
        },

        "guarantees": {
          "title": "Guarantees",
          "category": "Quality & Proof",
          "trigger": "Requests for guarantees or assurances",
          "quick_response": "We provide structural guarantees through our risk mitigation model and 45-day milestone.",
          "full_script": "We don't provide traditional 'guarantees' because revenue outcomes are probabilistic. What we provide is risk mitigation through structure:<br><br>- 50% contingent payment tied to measurable milestones\n- Conservative milestone calculations based on your benchmarks\n- Complete transparency and reporting\n- Your veto power through the QOA™<br><br>If we don't deliver the agreed outcomes, you don't pay. This is stronger than any traditional guarantee because your money is protected.<br><br>Would you like to see how the milestone is calculated to ensure it's achievable?",
          "key_principle": "Structural guarantees through risk mitigation, not promises."
        },

        "will_they_convert": {
          "title": "Will They Convert?",
          "category": "Quality & Proof",
          "trigger": "Concerns about whether delivered leads will actually close",
          "quick_response": "Conversion is your expertise—we guarantee the qualified opportunities, you handle the conversion.",
          "full_script": "That's the perfect question, and it highlights why our model works. We own the input (qualified opportunities), and you own the conversion outcomes.<br><br>This division of responsibility is what makes the economics work:\n- We guarantee delivering qualified opportunities that meet your A/B/C criteria\n- You apply your proven sales process and expertise to convert them\n- Everyone wins when the system works together<br><br>You've already told me your conversion rate is X%. At that rate, our guaranteed volume would represent $Y in potential revenue. Does that align with your expectations?",
          "key_principle": "Clear accountability: We deliver input, they own conversion."
        },

        "define_qualified": {
          "title": "Define Qualified",
          "category": "Quality & Proof",
          "trigger": "Want to know what 'qualified' means to us",
          "quick_response": "Qualified means they meet your A/B/C criteria: Financially Able, Serviceable, and Genuinely Interested.",
          "full_script": "We define 'qualified' through the A/B/C framework that we establish with you during discovery:<br><br>A: Financially Able - They have the budget and authority to make purchasing decisions\nB: Serviceable - They fit your target market and can actually use your solution\nC: Genuinely Interested - They're not just researching; they're actively looking to solve this problem<br><br>This framework is objective and measurable, preventing the ambiguity that causes most lead quality issues. You get to define what A/B/C means for your business.<br><br>Shall we work through defining these criteria for your specific market?",
          "key_principle": "A/B/C framework makes qualification objective and controllable."
        },

        "verification_questions": {
          "title": "Verification Questions",
          "category": "Quality & Proof",
          "trigger": "Questions about how we verify lead quality",
          "quick_response": "Verification happens through your QOA™ form after each meeting. You confirm they met your A/B/C criteria.",
          "full_script": "Verification is built into the process through the Qualified Opportunity Anchor™ (QOA™). After each meeting, you receive a simple form asking you to verify the prospect met your A/B/C criteria.<br><br>The process:\n1. Meeting occurs and is logged\n2. Time-delayed verification form sent to you\n3. You check: Did they meet A/B/C standards?\n4. If yes → counts toward milestone\n5. If no → doesn't count, we replace it<br><br>This gives you complete control and eliminates quality disputes. You have unilateral veto power over what gets credited.<br><br>Does this verification process address your quality concerns?",
          "key_principle": "QOA™ = Your veto power over quality verification."
        },

        // Timing & Process Handlers
        "timing_isnt_right": {
          "title": "Timing Isn't Right",
          "category": "Timing & Process",
          "trigger": "When they say the timing isn't right for various reasons",
          "quick_response": "I completely understand timing constraints; capital planning is complex.",
          "full_script": "I completely understand timing constraints; capital planning is complex. That is exactly why we must formalize the Scope of Work now. Let's at least get the Engagement Letter reviewed and the risk-mitigated model in front of you—then you have a board-defensible, fully scoped option ready to greenlight the moment the freeze is lifted or the budget window reopens.",
          "key_principle": "Validate timing concerns but use as leverage to complete scoping now."
        },

        "q4_freeze": {
          "title": "Q4 Freeze",
          "category": "Timing & Process",
          "trigger": "End-of-year budget freeze",
          "quick_response": "Totally understand. Q4 freezes are common. That is exactly why we must formalize the Scope of Work now.",
          "full_script": "Totally understand. Q4 freezes are common. That is exactly why we must formalize the Scope of Work now. Let's at least get the Engagement Letter reviewed and the risk-mitigated model in front of you—then you have a board-defensible, fully scoped option ready to greenlight the moment the budget window reopens in Q1.",
          "key_principle": "Use freeze as leverage to complete scoping during freeze period."
        },

        "budget_cycle": {
          "title": "Budget Cycle",
          "category": "Timing & Process",
          "trigger": "Budget cycle timing issues",
          "quick_response": "Budget conversations are exactly why we run this due diligence first. Let's see if the economics pencil out.",
          "full_script": "Budget conversations are exactly why we run this due diligence first. Rather than discussing budget availability, let's determine if this makes economic sense for your business.<br><br>If we could guarantee you 35 qualified executive meetings over 90 days at a cost that represents X% of your average contract value, would that be worth the investment? What's your typical ACV?",
          "key_principle": "Focus on ROI economics rather than budget timing constraints."
        },

        "lets_revisit_later": {
          "title": "Let's Revisit Later",
          "category": "Timing & Process",
          "trigger": "Deferral to later time",
          "quick_response": "I completely understand timing constraints; capital planning is complex.",
          "full_script": "I completely understand timing constraints; capital planning is complex. That is exactly why we must formalize the Scope of Work now. Let's at least get the Engagement Letter reviewed and the risk-mitigated model in front of you—then you have a board-defensible, fully scoped option ready to greenlight the moment the freeze is lifted or the budget window reopens.",
          "key_principle": "Use deferral as opportunity to complete scoping for future decision."
        },

        "need_more_time": {
          "title": "Need More Time",
          "category": "Timing & Process",
          "trigger": "General request for more time",
          "quick_response": "I completely understand timing constraints; capital planning is complex.",
          "full_script": "I completely understand timing constraints; capital planning is complex. That is exactly why we must formalize the Scope of Work now. Let's at least get the Engagement Letter reviewed and the risk-mitigated model in front of you—then you have a board-defensible, fully scoped option ready to greenlight the moment the freeze is lifted or the budget window reopens.",
          "key_principle": "Validate time needs but complete scoping to enable future quick decisions."
        },

        "send_info_first": {
          "title": "Send Info First",
          "category": "Timing & Process",
          "trigger": "Want information before continuing",
          "quick_response": "Of course, I'll send you information after the call. What I'd like to do is include your Scope of Work.",
          "full_script": "Of course, I'll send you information after the call. What I'd like to do is include not just our deck, but also 1-2 recent successes and, most importantly, your Scope of Work. To make that possible, we just need to finish this due diligence—a few more questions on my end, and then I can send something that's actually meaningful to you. Otherwise, you'd just be getting generic info. Does that sound fair?",
          "key_principle": "Use information request as leverage to complete discovery and customize materials."
        },

        "call_length_question": {
          "title": "Call Length Question",
          "category": "Timing & Process",
          "trigger": "Questions about call duration",
          "quick_response": "We allocated 30 minutes for this due diligence session. I'll make sure we stick to that window.",
          "full_script": "We allocated 30 minutes for this due diligence session. I'll make sure we stick to that window. The goal for me is simply to gather the anchors we need to see if a structured engagement even makes sense on our end.",
          "key_principle": "Set expectations upfront while maintaining due diligence frame."
        },

        "can_we_make_this_quick": {
          "title": "Can We Make This Quick?",
          "category": "Timing & Process",
          "trigger": "Want to shorten the call",
          "quick_response": "Completely understand the time pressure. I'm going to be concise with my questions, but we need the full time allocated.",
          "full_script": "Completely understand the time pressure. I'm going to be concise with my questions, but we need the full time allocated to ensure we capture the necessary anchors (like LTV and conversion rates) so the scope reflects your economics, not guesses. Let's start with your average contract value or LTV of a new account.",
          "key_principle": "Validate time pressure but insist on complete discovery for proper scoping."
        },


        "entity_size_credibility": {
          "title": "Entity Size/Credibility",
          "category": "Quality & Proof",
          "trigger": "Questions about company size, experience, or credibility",
          "quick_response": "We're a focused Revenue Advisory firm with deep expertise in outbound execution. Our Commercial Finance arm adds additional credibility.",
          "full_script": "That's a fair question. We're a specialized Revenue Advisory firm that operates with a focused model: we either win big or stay small. This allows us to maintain the highest standards and invest heavily in our infrastructure.<br><br>We also run a Commercial Finance arm that structures multi-million dollar deals, which gives us additional insight into executive decision-making and capital allocation.<br><br>Our track record includes X clients across Y industries, with average outcomes of Z. Would you like me to share some specific results?",
          "key_principle": "Focus on specialization and Commercial Finance credibility.",
          "story_mode": {
            "title": "Story Mode: The Boutique Advantage Story",
            "when_to_use": "Use when prospects question your size, headcount, or credibility. Best for sophisticated buyers who value quality over scale. Shows that boutique positioning is intentional, not a weakness. 2-3 minute investment.",
            "script": "That's a great question, and I'll be direct with you — we're <b>intentionally boutique</b>. Let me tell you why that's actually an advantage.<br><br>(Pause, shift into story mode)<br><br>One of our clients was evaluating us against a <b>70-person agency</b> with offices in three cities, flashy presentations, big team photos on their website. On paper, they looked more 'credible.'<br><br>But here's what happened.<br><br>The agency promised them the world, assigned them to a junior account manager, and delivered <i>generic spray-and-pray campaigns</i> that destroyed their brand reputation. After 6 months and $80K spent, they had 3 qualified meetings and zero deals.<br><br>When they came to us, we took a different approach.<br><br>We're <b>President-led</b> — I personally oversee every engagement. We don't pass clients to juniors. We operate with a <b>focused model: we either win big or stay small</b>. This allows us to maintain the highest standards and invest heavily in our infrastructure.<br><br>We also run a <b>Commercial Finance arm</b> that structures <b>multi-million dollar deals</b> — ABL transactions, acquisition financing, M&A advisory. That division is larger and actively participates in capital markets, which gives us insight into executive decision-making that most agencies will never have.<br><br>For this client, we spent <b>3 weeks mapping their world</b> — not pitching, but diagnosing. We extracted their institutional knowledge, designed messaging that sounded like a peer in their industry, and deployed it through our <b>private infrastructure</b>.<br><br>Within <b>45 days</b>, <b>19 qualified meetings</b>. By <b>day 90</b>, <b>5 new clients worth $1.2M</b> in their first-year revenue.<br><br>(Pause, bring it back)<br><br>The boutique model isn't a weakness — it's <u>why we outperform</u>. Bigger firms assign you to juniors and recycle the same playbook across every client. We stay small, invest in world-class infrastructure, and treat every engagement like it's the only one that matters.<br><br>The outcomes speak louder than headcount. Now, to see if that positioning makes sense for your business: what's been your biggest frustration with vendors or agencies in the past?"
          }
        },

        "guarantees": {
          "title": "Guarantees",
          "category": "Quality & Proof",
          "trigger": "Requests for guarantees or assurances",
          "quick_response": "We provide structural guarantees through our risk mitigation model and 45-day milestone.",
          "full_script": "We don't provide traditional 'guarantees' because revenue outcomes are probabilistic. What we provide is risk mitigation through structure:<br><br>- 50% contingent payment tied to measurable milestones\n- Conservative milestone calculations based on your benchmarks\n- Complete transparency and reporting\n- Your veto power through the QOA™<br><br>If we don't deliver the agreed outcomes, you don't pay. This is stronger than any traditional guarantee because your money is protected.<br><br>Would you like to see how the milestone is calculated to ensure it's achievable?",
          "key_principle": "Structural guarantees through risk mitigation, not promises.",
          "story_mode": {
            "title": "Story Mode: The Milestone Structure in Action Story",
            "when_to_use": "Use when prospects need proof that the guarantee is real and not just marketing language. Best for risk-averse buyers who've been burned by empty promises. 2-3 minute investment shows guarantee through real example.",
            "script": "That's a great question, and I understand why you're asking. Most 'guarantees' in this space are just marketing fluff.<br><br>Let me show you what our guarantee looks like in practice.<br><br>(Pause, shift into story mode)<br><br>We had a client who came to us <i>extremely skeptical</i>. They'd worked with two vendors who 'guaranteed results' — both failed to deliver, blamed the client's sales process, and kept the money anyway.<br><br>When they asked about our guarantee, here's what we told them — and what we actually delivered.<br><br>We built a <b>90-day engagement with a 45-day milestone</b>. The milestone was <b>15 qualified executive meetings</b>, anchored conservatively to their current performance (their best rep averaged 8 meetings/month, so we committed to <b>1.9x that baseline</b>).<br><br>Here's how the structure worked:<br><br><b>50% upfront</b> ($25K) — this capitalized the infrastructure, messaging, and execution needed to hit the milestone.<br><br><b>50% contingent</b> ($25K) — this <u>only unlocked when the 15 meetings were verified</u>. If we didn't hit it by day 45, we kept working — day 50, day 55, day 60 — until we delivered. No additional fees, no excuses.<br><br>By <b>day 52</b>, we'd delivered <b>16 verified meetings</b>. They closed <b>3 of them</b> at their normal 20% conversion rate. That's <b>$180K in new revenue</b> from a $50K investment — <b>3.6x ROI</b> in worst-case scenario.<br><br>The second payment unlocked at day 52. Not day 45, but the milestone was hit, the contract was honored, and they got exactly what was promised.<br><br>(Pause, bring it back)<br><br>That's the difference between a 'guarantee' and <b>structural risk mitigation</b>. We don't promise closed deals — that's your sales process. But we <u>do guarantee the input</u> — the qualified meetings that feed your process. If we don't deliver, you don't pay. Your money is protected by the milestone structure, not by our promises.<br><br>Now, to see if that structure makes sense for your business: what's your current best performer averaging in qualified meetings per month?"
          }
        },

        "will_they_convert": {
          "title": "Will They Convert?",
          "category": "Quality & Proof",
          "trigger": "Concerns about whether delivered leads will actually close",
          "quick_response": "Conversion is your expertise—we guarantee the qualified opportunities, you handle the conversion.",
          "full_script": "That's the perfect question, and it highlights why our model works. We own the input (qualified opportunities), and you own the conversion outcomes.<br><br>This division of responsibility is what makes the economics work:\n- We guarantee delivering qualified opportunities that meet your A/B/C criteria\n- You apply your proven sales process and expertise to convert them\n- Everyone wins when the system works together<br><br>You've already told me your conversion rate is X%. At that rate, our guaranteed volume would represent $Y in potential revenue. Does that align with your expectations?",
          "key_principle": "Clear accountability: We deliver input, they own conversion."
        },

        "define_qualified": {
          "title": "Define Qualified",
          "category": "Quality & Proof",
          "trigger": "Want to know what 'qualified' means to us",
          "quick_response": "Qualified means they meet your A/B/C criteria: Financially Able, Serviceable, and Genuinely Interested.",
          "full_script": "We define 'qualified' through the A/B/C framework that we establish with you during discovery:<br><br>A: Financially Able - They have the budget and authority to make purchasing decisions\nB: Serviceable - They fit your target market and can actually use your solution\nC: Genuinely Interested - They're not just researching; they're actively looking to solve this problem<br><br>This framework is objective and measurable, preventing the ambiguity that causes most lead quality issues. You get to define what A/B/C means for your business.<br><br>Shall we work through defining these criteria for your specific market?",
          "key_principle": "A/B/C framework makes qualification objective and controllable."
        },

        // Additional Money & Budget handlers
        "payment_terms": {
          "title": "Payment Terms",
          "category": "Money & Budget",
          "trigger": "Questions about payment structure, installments, etc.",
          "quick_response": "Our payment structure is designed to align incentives: 50% upfront to fund the infrastructure build, 50% contingent on the 45-day milestone.",
          "full_script": "Our payment terms are structured to ensure mutual commitment to success. The initial 50% funds the strategic infrastructure and execution setup required to hit your Day-45 milestone. The remaining 50% is only paid upon successful delivery of that milestone.<br><br>This structure protects both sides—if we don't deliver the guaranteed outcomes, you don't pay the full fee. If we do deliver, you've paid for a risk-mitigated capital allocation.",
          "key_principle": "Terms protect both parties and align incentives."
        },

        "budget_constraints": {
          "title": "Budget Constraints",
          "category": "Money & Budget",
          "trigger": "They say they don't have budget or it's limited",
          "quick_response": "Budget conversations are exactly why we run this due diligence first. Let's see if the economics pencil out before we discuss allocation.",
          "full_script": "Budget constraints are real, which is precisely why we conduct this due diligence first. Rather than discussing budget availability, let's determine if this makes economic sense for your business.<br><br>If we could guarantee you 35 qualified executive meetings over 90 days at a cost that represents X% of your average contract value, would that be worth the investment? What's your typical ACV?",
          "key_principle": "Focus on ROI, not budget limits. Economics drive allocation."
        },

        // Opening Frame (Phase 1) - 8 handlers
        "just_email_me_info": {
          "title": "Just Email Me Info",
          "category": "Opening Frame",
          "trigger": "Deflection requesting to just email information",
          "quick_response": "Of course, I'll send you information after the call. What I'd like to do is include not just our deck, but also 1-2 recent successes and, most importantly, your Scope of Work. To make that possible, we just need to finish this due diligence—a few more questions on my end, and then I can send something that's actually meaningful to you. Otherwise, you'd just be getting generic info. Does that sound fair?",
          "full_script": "Of course, I'll send you information after the call. What I'd like to do is include not just our deck, but also 1-2 recent successes and, most importantly, your Scope of Work. To make that possible, we just need to finish this due diligence—a few more questions on my end, and then I can send something that's actually meaningful to you. Otherwise, you'd just be getting generic info. Does that sound fair?<br><br>Say yes confidently. Use the request as leverage to finish discovery, positioning the customized Scope of Work (SOW) as the true asset they need, which requires gathering necessary anchors during the current call.",
          "key_principle": "Say yes confidently, use as leverage to finish discovery."
        },

        "research_mode": {
          "title": "Research Mode",
          "category": "Opening Frame",
          "trigger": "When prospects say they're 'just doing research'",
          "quick_response": "Totally fair—honestly, I wouldn't prioritize it myself without seeing a scope. That's exactly why we're in due diligence now. Let's at least put an engagement model in front of you—then you'll know if it's worth prioritizing down the road.",
          "full_script": "Totally fair—honestly, I wouldn't prioritize it myself without seeing a scope. That's exactly why we're in due diligence now. Let's at least put an engagement model in front of you—then you'll know if it's worth prioritizing down the road.<br><br>Validate the prospect's stance. Reframe discovery as mutual due diligence to build the engagement model. Even if they aren't ready to buy, having the scoped, risk-mitigated model ensures they have a defensible option when their timing aligns.",
          "key_principle": "Validate, reframe to mutual due diligence."
        },

        "not_interested": {
          "title": "Not Interested",
          "category": "Opening Frame",
          "trigger": "Early hard rejection or 'not interested'",
          "quick_response": "I appreciate the clarity. If this isn't a priority for you right now, I completely respect that, as we operate with an abundance mindset. Would it still make sense to at least finish the due diligence and build out the engagement model so you have a clear, risk-mitigated option scoped to your economics if internal priorities shift down the road?",
          "full_script": "I appreciate the clarity. If this isn't a priority for you right now, I completely respect that, as we operate with an abundance mindset. Would it still make sense to at least finish the due diligence and build out the engagement model so you have a clear, risk-mitigated option scoped to your economics if internal priorities shift down the road?<br><br>If they are truly healthy and uninterested, move on (abundance mindset). However, always try to anchor the scope first, offering the model as a non-committal strategic asset for future reference.",
          "key_principle": "Abundance mindset, but always try to anchor scope first."
        },

        "differentiation_question": {
          "title": "Differentiation Question",
          "category": "Opening Frame",
          "trigger": "When asked 'What makes you different?'",
          "quick_response": "What makes us different is that we operate as a Revenue Advisory group whose structure is built around risk mitigation. We don't sell mechanics. We anchor engagements to your internal benchmarks, committing to outperform your current best producer by 1.5×–2×. This entire structure ensures worst case, you still win, and best case, you scale the outcome.",
          "full_script": "What makes us different is that we operate as a Revenue Advisory group whose structure is built around risk mitigation. We don't sell mechanics. We anchor engagements to your internal benchmarks, committing to outperform your current best producer by 1.5×–2×. This entire structure ensures worst case, you still win, and best case, you scale the outcome.<br><br>Differentiate by emphasizing Positioning as an advisory firm, Anchoring to the client's math, and Risk Mitigation (P.A.RM.™). The distinction is selling outcomes/governance, not deliverables/mechanics.",
          "key_principle": "Differentiate through P.A.RM.™ positioning."
        },

        "who_else_worked_with": {
          "title": "Who Else Worked With",
          "category": "Opening Frame",
          "trigger": "Social proof requests about other clients",
          "quick_response": "That’s a fair question, and I'd be happy to share our executive deck and a few anonymized case studies after this call. Just for immediate context, our firm also runs a Commercial Finance arm. We've structured capital and acquisitions in various sectors, often relying on the same channel we'll discuss today. Now, to make sure the materials I send are relevant, can you confirm your average contract value or LTV of a new account?",
          "full_script": "That’s a fair question, and I'd be happy to share our executive deck and a few anonymized case studies after this call. Just for immediate context, our firm also runs a Commercial Finance arm. We've structured capital and acquisitions in various sectors, often relying on the same channel we'll discuss today. Now, to make sure the materials I send are relevant, can you confirm your average contract value or LTV of a new account?<br><br>Say yes happily and confirm you will send the assets (deck + case studies). Leverage the Commercial Finance arm positioning as immediate credibility proof. Immediately pivot back to core anchor extraction (ACV/LTV).",
          "key_principle": "Say yes happily, leverage Commercial Finance positioning."
        },

        "calling_other_people": {
          "title": "Calling Other People",
          "category": "Opening Frame",
          "trigger": "Territorial concern about calling others in company",
          "quick_response": "That’s a great question, and we prioritize internal alignment. Our goal here is to map the decision architecture. We need to know: How do new advisory engagements usually get greenlit internally? And who else needs to see the Scope of Work summary before we formalize? We ensure all communication aligns with the approved internal review cadence.",
          "full_script": "That’s a great question, and we prioritize internal alignment. Our goal here is to map the decision architecture. We need to know: How do new advisory engagements usually get greenlit internally? And who else needs to see the Scope of Work summary before we formalize? We ensure all communication aligns with the approved internal review cadence.<br><br>This redirects the concern (which is usually related to approval flow/hierarchy) into a necessary procedural question that maintains the advisory posture of conducting due diligence. You transition the territorial question into a conversation about mapping the internal Approval Flow.",
          "key_principle": "Redirect to mapping decision architecture."
        },

        // Fork Deflection (Phase 2) - 6 handlers
        "still_confused": {
          "title": "Still Confused",
          "category": "Fork Deflection",
          "trigger": "When prospects express confusion after fork explanation",
          "quick_response": "Great question. We've invested well over six figures into a private internal infrastructure, and that's what allows us to plug into any and every channel depending on what makes the most sense for a client. The focus is the engagement model—what the end looks like before we even start—and reverse-engineering it so that your risk is completely mitigated. From there, the only question is whether those outcomes tie directly to your LTV math and growth goals. Now, to anchor those goals, what is the average LTV of a new account?",
          "full_script": "Great question. We've invested well over six figures into a private internal infrastructure, and that's what allows us to plug into any and every channel depending on what makes the most sense for a client. The focus is the engagement model—what the end looks like before we even start—and reverse-engineering it so that your risk is completely mitigated. From there, the only question is whether those outcomes tie directly to your LTV math and growth goals. Now, to anchor those goals, what is the average LTV of a new account?<br><br>This leverages the 'All In One Big Handle' that uses the investment in infrastructure and the focus on risk mitigation (the structure) as the answer, immediately pivoting away from confusion and back to collecting required anchors.",
          "key_principle": "Leverage infrastructure investment and risk mitigation focus."
        },

        "too_much_information": {
          "title": "Too Much Information",
          "category": "Fork Deflection",
          "trigger": "Overwhelm signal after fork explanation",
          "quick_response": "I appreciate that; we operate at the executive level, and this structure is designed to be board-defensible, not light reading. The key takeaway is simple: we anchor everything to your numbers and mitigate risk. To build that model properly, we need two more minutes on your current conversion ratios. What percentage of initial interest turns into a qualified meeting?",
          "full_script": "I appreciate that; we operate at the executive level, and this structure is designed to be board-defensible, not light reading. The key takeaway is simple: we anchor everything to your numbers and mitigate risk. To build that model properly, we need two more minutes on your current conversion ratios. What percentage of initial interest turns into a qualified meeting?<br><br>Acknowledge the complexity, then immediately affirm that the complexity is necessary because the engagement is high-level and risk-mitigated. Redirect the conversation back to the specific anchors needed for the SOW.",
          "key_principle": "Affirm complexity is necessary for board-defensible engagement."
        },

        "want_something_in_writing": {
          "title": "Want Something in Writing",
          "category": "Fork Deflection",
          "trigger": "Request for written materials after fork explanation",
          "quick_response": "Absolutely, happy to send everything after the call, including our executive deck and a case study. But generic information won't help you. To send you something that's actually meaningful—the tailored Scope of Work with your math in it—we just need to finish collecting these final anchors. Otherwise, you're just reading fluff. Does that sound fair?",
          "full_script": "Absolutely, happy to send everything after the call, including our executive deck and a case study. But generic information won't help you. To send you something that's actually meaningful—the tailored Scope of Work with your math in it—we just need to finish collecting these final anchors. Otherwise, you're just reading fluff. Does that sound fair?<br><br>Agree confidently to send the artifacts (deck, case studies). Use the desire for information as leverage to complete due diligence, positioning the personalized Scope of Work (SOW) as the true, customized asset they need, which requires their data.",
          "key_principle": "Agree happily, use as leverage to complete discovery."
        },

        "case_study_request_mid_explanation": {
          "title": "Case Study Request Mid-Explanation",
          "category": "Fork Deflection",
          "trigger": "Request for case studies during fork explanation",
          "quick_response": "That’s a fair request. We have case studies and our executive deck ready, which I'll send right after this call. Just for immediate context: our firm also runs a Commercial Finance arm and structures multi-million-dollar deals in high-stakes markets. We apply that same rigorous, risk-mitigated discipline to our Revenue Advisory mandates. To ensure the scope reflects your rigor, can you confirm your average contract value or LTV of a new account?",
          "full_script": "That’s a fair request. We have case studies and our executive deck ready, which I'll send right after this call. Just for immediate context: our firm also runs a Commercial Finance arm and structures multi-million-dollar deals in high-stakes markets. We apply that same rigorous, risk-mitigated discipline to our Revenue Advisory mandates. To ensure the scope reflects your rigor, can you confirm your average contract value or LTV of a new account?<br><br>Say yes happily and confirm the case study will be sent later (Case Study 1 is the initial workhorse). Leverage the Commercial Finance arm positioning as immediate, high-level credibility. Immediately pivot back to core anchor extraction (ACV/LTV).",
          "key_principle": "Say yes happily, leverage Commercial Finance positioning."
        },

        "doesnt_sound_like_what_we_need": {
          "title": "Doesn't Sound Like What We Need",
          "category": "Fork Deflection",
          "trigger": "Misalignment signal during fork explanation",
          "quick_response": "I appreciate the clarity. That’s precisely why we run this due diligence first: to see if the structure we prescribe aligns with your current economics. If the model doesn't pencil out, we won't proceed, and you lose nothing but 30 minutes. Let’s finish collecting the key anchors—like your top producer's monthly output—and then we'll know definitively if we're a misalignment or an opportunity.",
          "full_script": "I appreciate the clarity. That’s precisely why we run this due diligence first: to see if the structure we prescribe aligns with your current economics. If the model doesn't pencil out, we won't proceed, and you lose nothing but 30 minutes. Let’s finish collecting the key anchors—like your top producer's monthly output—and then we'll know definitively if we're a misalignment or an opportunity.<br><br>Validate the prospect's concern, treating it as data about their system rather than a verdict on your solution. Reframe the call as mutual diagnosis (due diligence) to build a model that either proves fit or results in polite disqualification, maintaining the advisory posture.",
          "key_principle": "Validate, reframe as mutual due diligence."
        },

        "different_from_other_industries": {
          "title": "Have You Worked In My Industry Before?",
          "category": "Fork Deflection",
          "trigger": "Have you worked in my industry before? / Do you have experience in our sector? / We're different from those industries",
          "quick_response": "I'll be the first to tell you we haven't generated demand in your industry yet — and that's exactly what our entire thesis is built on. We only work with companies that have sophisticated, brand-sensitive profiles — groups that are notoriously hard to generate interest for while maintaining brand integrity. That's where we live. Let me walk you through how this works in practice.",
          "full_script": "<i>I'll be the first to tell you</i> we <b>haven't generated demand in your industry yet</b> — and that's <u>exactly what our entire thesis is built on</u>.<br><br>We only work with companies that have <b>sophisticated, brand-sensitive profiles</b> — groups that are notoriously hard to generate interest for while maintaining the integrity of their brand. That's where we live.<br><br>Let me walk you through how this works in practice.<br><br>(Pause, shift into story mode)<br><br>One of our clients operates in one of the <b>most conservative industries imaginable</b> — pedigree-heavy, brand-sensitive, reputation first. If you make one wrong move, you lose the room forever.<br><br>They wanted more sell-side contacts — <i>single and multi-family offices, CIOs, credit funds, SBICs, regional banks</i> — profiles that are very hard to engage and build trust with.<br><br>Our analysts broke down their audience and realized 75% of the decision-makers lived on LinkedIn, and more than 90% still relied on email for professional communication.<br><br>So we built a <b>diligence process</b> where we extracted 50 years of their institutional experience — the way they speak, the outcomes they anchor to, the integrity they protect. Then we designed <b>enterprise-grade messaging</b> that felt native to their world — not generic outreach, but language that sounded like it came from a peer, not a vendor.<br><br>We deployed that through our <b>private infrastructure</b> — controlled, compliant, brand-safe. Within 45 days, we'd generated 23 qualified executive-level meetings with exactly the profiles they needed. By day 90, they'd closed 4 new mandates worth over $2M in fees.<br><br>(Pause, bring it back to them)<br><br>The reason I'm sharing that is because what you thought might be a weakness — that we haven't worked in your industry — is actually <u>why we're different from everyone else</u>. Our entire thesis is built around <b>thriving where others can't</b>, taking the most difficult, high-integrity markets and generating demand without breaking their code.<br><br>We don't need decades of industry experience because our <b>diligence process extracts yours</b>. You green-light everything we build — the messaging, the targeting, the positioning — before anything goes out. That's how we maintain brand integrity while generating results.<br><br>(Pivot back to discovery)<br><br>Now, to see if that model makes sense for your business, I'd need to understand how you're currently generating demand. How are you bringing in new opportunities today, and what does that process look like from first touch through to a converted client?",
          "key_principle": "Objection Positioning™: Turn the weakness into your thesis. Use Story Mode Selling™ to deliver what you do, how, who for, and results through narrative — not dictionary definitions. This creates novelty and bypasses objection sophistication. Always pivot back to discovery after the story."
        },

        // Discovery - Top of Funnel (Phase 3A) - 10 handlers
        "doesnt_answer_evasion": {
          "title": "Doesn't Answer / Evasion",
          "category": "Discovery - Top of Funnel",
          "trigger": "When prospects deflect or avoid answering questions",
          "quick_response": "I appreciate you walking me through that, but we're still missing [Specific Anchor]. That number is essential for me to calculate the Baseline for your Scope of Work, which ensures the proposal is tied to your economics, not guesses. Can you give me a fair ballpark, or should we schedule a quick 15-minute follow-up to capture the rest of these non-negotiable anchors?",
          "full_script": "I appreciate you walking me through that, but we're still missing [Specific Anchor]. That number is essential for me to calculate the Baseline for your Scope of Work, which ensures the proposal is tied to your economics, not guesses. Can you give me a fair ballpark, or should we schedule a quick 15-minute follow-up to capture the rest of these non-negotiable anchors?<br><br>If anchors are missing, the advisor must schedule a 'Discovery Part 2' immediately. The scope must be grounded in economics, not fiction.",
          "key_principle": "Schedule Discovery Part 2 if anchors are missing."
        },

        "why_do_you_need_to_know_this": {
          "title": "Why Do You Need to Know This?",
          "category": "Discovery - Top of Funnel",
          "trigger": "Defensive or suspicious about why data is needed",
          "quick_response": "That’s a fair question. The reason we're spending time on [Specific Metric, e.g., sales cycle/rep output] is because we anchor our fee and risk mitigation directly to your internal economics. This data is the foundation of the Scope of Work that arms your leadership to defend the capital allocation. If we skip this, the proposal is grounded in fiction. Is there a number we can use for a fair ballpark?",
          "full_script": "That’s a fair question. The reason we're spending time on [Specific Metric, e.g., sales cycle/rep output] is because we anchor our fee and risk mitigation directly to your internal economics. This data is the foundation of the Scope of Work that arms your leadership to defend the capital allocation. If we skip this, the proposal is grounded in fiction. Is there a number we can use for a fair ballpark?<br><br>The questions are intentional, designed to collect anchors that leadership cares about, making the proposal defensible. Discovery is a necessary and controlled interrogation to extract these inputs.",
          "key_principle": "Questions collect defensible anchors for leadership."
        },

        "can_i_get_back_to_you": {
          "title": "Can I Get Back to You?",
          "category": "Discovery - Top of Funnel",
          "trigger": "Needs time to gather data or doesn't have it handy",
          "quick_response": "I appreciate you prioritizing accuracy. Since [Specific Anchor] is non-negotiable for building a defensible scope, we should finish this process cleanly. Let's book a quick 15-minute Discovery Part 2 right now—say, tomorrow morning—to capture the rest of these anchors before I start drafting the Scope of Work. How does [Time] look?",
          "full_script": "I appreciate you prioritizing accuracy. Since [Specific Anchor] is non-negotiable for building a defensible scope, we should finish this process cleanly. Let's book a quick 15-minute Discovery Part 2 right now—say, tomorrow morning—to capture the rest of these anchors before I start drafting the Scope of Work. How does [Time] look?<br><br>If data is missing or soft, the advisor must book Discovery Part 2 during the call; never 'hope' email fills the gaps.",
          "key_principle": "Book Discovery Part 2 immediately if data is missing."
        },

        "this_is_too_many_questions": {
          "title": "This Is Too Many Questions",
          "category": "Discovery - Top of Funnel",
          "trigger": "Friction with the discovery process length",
          "quick_response": "I completely understand. We run a rigorous due diligence process because we're scoping a capital commitment, not selling a widget, so these anchors are critical. Let's make sure we capture the next three inputs quickly: What is the average length of your sales cycle, first touch to closed-won?",
          "full_script": "I completely understand. We run a rigorous due diligence process because we're scoping a capital commitment, not selling a widget, so these anchors are critical. Let's make sure we capture the next three inputs quickly: What is the average length of your sales cycle, first touch to closed-won?<br><br>Acknowledge the rigor, but immediately pivot back to the necessity of collecting the required anchoring data (e.g., pricing, cycle, conversions) to ensure the scope is accurate.",
          "key_principle": "Acknowledge rigor, pivot to necessity of anchoring data."
        },

        "can_we_come_back_to_that_later": {
          "title": "Can We Come Back to That Later?",
          "category": "Discovery - Top of Funnel",
          "trigger": "Avoiding specific questions by deferring",
          "quick_response": "I hear you, but the reason I need [Specific Anchor, e.g., capacity/LTV] now is that it directly dictates the milestone we can promise in the Scope of Work. If we promise volume you can't fulfill, or value that doesn't pencil, we set the engagement up to fail. Let's capture your capacity limit now, and then we can move onto the decision flow.",
          "full_script": "I hear you, but the reason I need [Specific Anchor, e.g., capacity/LTV] now is that it directly dictates the milestone we can promise in the Scope of Work. If we promise volume you can't fulfill, or value that doesn't pencil, we set the engagement up to fail. Let's capture your capacity limit now, and then we can move onto the decision flow.<br><br>The order of questions (economics before tactics) is mandatory to maintain authority and prevent premature pitching. The capacity question is a key constraint that must be logged to prevent sabotaging the SOW.",
          "key_principle": "Economics before tactics to maintain authority."
        },

        "i_need_to_check_with_my_team_first": {
          "title": "I Need to Check With My Team First",
          "category": "Discovery - Top of Funnel",
          "trigger": "Can't answer independently, needs team input",
          "quick_response": "That’s exactly the kind of internal detail we need to capture. Who specifically needs to approve [Metric]? And how does the Scope of Work typically move through legal and finance? We need to align our proposal cadence with your internal review cadence.",
          "full_script": "That’s exactly the kind of internal detail we need to capture. Who specifically needs to approve [Metric]? And how does the Scope of Work typically move through legal and finance? We need to align our proposal cadence with your internal review cadence.<br><br>This objection is immediately converted into a required part of the discovery process: Mapping the Decision Path. This equips the internal champion and shows advisory posture.",
          "key_principle": "Convert to mapping the decision path."
        },

        "thats_confidential_information": {
          "title": "That's Confidential Information",
          "category": "Discovery - Top of Funnel",
          "trigger": "Won't share sensitive metrics",
          "quick_response": "I completely respect that; a ballpark is perfectly acceptable for modeling the scope. The only reason we require [Metric] is to ensure the Baseline we anchor to is conservative and defensible for your CFO. If we scope high, we expose you to risk. What's the closest approximate figure you can share for internal modeling?",
          "full_script": "I completely respect that; a ballpark is perfectly acceptable for modeling the scope. The only reason we require [Metric] is to ensure the Baseline we anchor to is conservative and defensible for your CFO. If we scope high, we expose you to risk. What's the closest approximate figure you can share for internal modeling?<br><br>Reassure them that ballparks are fine for modeling purposes. The goal is to obtain enough data to build a scope that protects their downside and justifies the fee as a board-defensible capital allocation.",
          "key_principle": "Ballparks are acceptable for conservative modeling."
        },

        "why_does_that_matter": {
          "title": "Why Does That Matter?",
          "category": "Discovery - Top of Funnel",
          "trigger": "Questioning the relevance of questions",
          "quick_response": "That matters because it's the essential input for calculating your Milestone. We commit to outperforming your current best output by 1.5×. To calculate that accurately, we need [Specific Anchor]. Otherwise, we're just talking about hypotheticals, not a risk-mitigated structure anchored to your growth goals.",
          "full_script": "That matters because it's the essential input for calculating your Milestone. We commit to outperforming your current best output by 1.5×. To calculate that accurately, we need [Specific Anchor]. Otherwise, we're just talking about hypotheticals, not a risk-mitigated structure anchored to your growth goals.<br><br>Reiterate the principle of Anchoring. The information is relevant because it defines the benchmark required for the 45-day milestone trigger.",
          "key_principle": "Information defines the milestone benchmark."
        },

        "were_doing_fine_without_help": {
          "title": "We're Doing Fine Without Help",
          "category": "Discovery - Top of Funnel",
          "trigger": "No pain admitted, status quo is working",
          "quick_response": "That’s great news; it means we're talking to a healthy, well-run business. Most of our clients are doing well, but they hit a capacity or channel ceiling. Our goal here is simply to build a strategic Scope of Work that shows whether installing a controlled channel, anchored to a 1.5× baseline, complements your existing growth and helps you break through that ceiling. Let's look at your capacity limits: what's the maximum number of new accounts your team can comfortably onboard per quarter?",
          "full_script": "That’s great news; it means we're talking to a healthy, well-run business. Most of our clients are doing well, but they hit a capacity or channel ceiling. Our goal here is simply to build a strategic Scope of Work that shows whether installing a controlled channel, anchored to a 1.5× baseline, complements your existing growth and helps you break through that ceiling. Let's look at your capacity limits: what's the maximum number of new accounts your team can comfortably onboard per quarter?<br><br>Validate their current success (abundance mindset). Reframe the engagement not as fixing a problem, but as introducing a new, scalable channel to exceed the natural cap of their existing channels (like referrals).",
          "key_principle": "Reframe as exceeding capacity ceiling."
        },

        // Discovery - Middle/Bottom of Funnel (Phase 3B) - 9 handlers
        "were_rebuilding_our_process_right_now": {
          "title": "We're Rebuilding Our Process Right Now",
          "category": "Discovery - Middle/Bottom of Funnel",
          "trigger": "Currently in transition period with process changes",
          "quick_response": "That's understandable; growth often brings transition. Since we know the final output needs to be a repeatable conversion process, let's define what that *target* process looks like. If we assume the process is running perfectly today, who is responsible for turning a qualified meeting into a signed proposal? Walk me through that clean sequence.",
          "full_script": "That's understandable; growth often brings transition. Since we know the final output needs to be a repeatable conversion process, let's define what that *target* process looks like. If we assume the process is running perfectly today, who is responsible for turning a qualified meeting into a signed proposal? Walk me through that clean sequence.<br><br>When chaos exists, the advisor uses curiosity to define or reconstruct the baseline conversion process that the new demand will feed. The advisory role requires Process Conviction to investigate their process without insecurity.",
          "key_principle": "Use curiosity to define target conversion process."
        },

        "our_process_is_broken": {
          "title": "Our Process Is Broken",
          "category": "Discovery - Middle/Bottom of Funnel",
          "trigger": "Admission of dysfunctional sales process",
          "quick_response": "I appreciate the honesty; that's what we're here to diagnose. When you say broken, where does the deal flow typically stop? After the first call? At the proposal stage? Let's walk through the middle of the funnel: When someone expresses interest, who is the internal touchpoint, and what assets (documentation, case study) are sent next?",
          "full_script": "I appreciate the honesty; that's what we're here to diagnose. When you say broken, where does the deal flow typically stop? After the first call? At the proposal stage? Let's walk through the middle of the funnel: When someone expresses interest, who is the internal touchpoint, and what assets (documentation, case study) are sent next?<br><br>Treat the dysfunction as diagnostic data. Deploy Discovery as Due Diligence™ (DaDD™) to trace the breakdown, using the 'and then what happens' chain to map the conversion flow.",
          "key_principle": "Treat dysfunction as diagnostic data."
        },

        "can_you_help_us_build_the_process": {
          "title": "Can You Help Us Build The Process?",
          "category": "Discovery - Middle/Bottom of Funnel",
          "trigger": "Request for consulting vs execution services",
          "quick_response": "Our model is designed to architect the growth strategy and then deploy qualified demand into a functional system. We are here to fuel the engine, not rebuild your internal staff or manage training. If we were to install a steady flow of qualified interest, who internally would be responsible for converting that demand into a signed client? We need to establish clear ownership.",
          "full_script": "Our model is designed to architect the growth strategy and then deploy qualified demand into a functional system. We are here to fuel the engine, not rebuild your internal staff or manage training. If we were to install a steady flow of qualified interest, who internally would be responsible for converting that demand into a signed client? We need to establish clear ownership.<br><br>The advisory role is about defining the engine, not staffing it. Clarify the accountability boundary: the advisor owns the input (interest creation), the client owns the conversion (staffing).",
          "key_principle": "Clarify accountability: input vs conversion ownership."
        },

        "we_have_a_problem_converting": {
          "title": "We Have a Problem Converting",
          "category": "Discovery - Middle/Bottom of Funnel",
          "trigger": "Conversion issues in middle/bottom of funnel",
          "quick_response": "That is critical insight. The entire purpose of this due diligence is to draw a clear line: we own the input (qualified demand), and you own the conversion. To make sure we don't scope based on assumptions, can you tell me what percentage of qualified opportunities typically result in a closed deal today?",
          "full_script": "That is critical insight. The entire purpose of this due diligence is to draw a clear line: we own the input (qualified demand), and you own the conversion. To make sure we don't scope based on assumptions, can you tell me what percentage of qualified opportunities typically result in a closed deal today?<br><br>Use this moment to Anchor Accountability by Funnel Stage. If conversion is weak, the Scope of Work must reflect their existing low conversion ratio, protecting the advisor from blame for internal inefficiency.",
          "key_principle": "Anchor accountability by funnel stage."
        },

        "we_need_help_with_closing_not_lead_gen": {
          "title": "We Need Help With Closing, Not Lead Gen",
          "category": "Discovery - Middle/Bottom of Funnel",
          "trigger": "Focus on closing skills rather than pipeline generation",
          "quick_response": "I hear you—closing is a massive priority. Our engagement focuses on the single biggest constraint, which is predictable pipeline creation. We deliver Qualified Introductions that expand your pipeline; your team's expertise dictates the close rate. What specific stage are most deals stalling at, and who is currently responsible for closing new accounts?",
          "full_script": "I hear you—closing is a massive priority. Our engagement focuses on the single biggest constraint, which is predictable pipeline creation. We deliver Qualified Introductions that expand your pipeline; your team's expertise dictates the close rate. What specific stage are most deals stalling at, and who is currently responsible for closing new accounts?<br><br>Reiterate that the advisory guarantees pipeline creation and Qualified Introductions (QIs), as revenue conversion is outside the advisor's control. Use their focus on closing to dive deeper into MOF/BOF mechanics.",
          "key_principle": "Guarantee pipeline creation, not conversion outcomes."
        },

        "our_team_is_overwhelmed_already": {
          "title": "Our Team Is Overwhelmed Already",
          "category": "Discovery - Middle/Bottom of Funnel",
          "trigger": "Capacity concerns with current team bandwidth",
          "quick_response": "Thank you for flagging that—throughput limits are critical to success. We must pace delivery to match absorption and protect your close rates. What is the maximum number of new, qualified meetings your top producer can realistically handle per week without negatively impacting follow-up quality?",
          "full_script": "Thank you for flagging that—throughput limits are critical to success. We must pace delivery to match absorption and protect your close rates. What is the maximum number of new, qualified meetings your top producer can realistically handle per week without negatively impacting follow-up quality?<br><br>Capacity constraints are key anchors and must be integrated into the Scope of Work as a Risk Mitigation measure to ensure the advisor controls pacing and protects the client's close rates.",
          "key_principle": "Pace delivery to match absorption capacity."
        },

        "we_lose_deals_at_specific_stage": {
          "title": "We Lose Deals At [Specific Stage]",
          "category": "Discovery - Middle/Bottom of Funnel",
          "trigger": "Stage-specific deal loss identification",
          "quick_response": "Understood. Losing deals at the [Proposal/Demo] stage is often a sign of misalignment upstream. Can you walk me through the steps immediately before that stage? What assets (documentation, pricing sheet, case studies) are exchanged at that point, and who is responsible for that final handoff?",
          "full_script": "Understood. Losing deals at the [Proposal/Demo] stage is often a sign of misalignment upstream. Can you walk me through the steps immediately before that stage? What assets (documentation, pricing sheet, case studies) are exchanged at that point, and who is responsible for that final handoff?<br><br>Use the stage-specific loss as a signal to deepen the MOF/BOF diagnosis. This process reveals the flow of assets and the specific owner of the failure point.",
          "key_principle": "Use stage-specific loss to deepen diagnosis."
        },

        "our_sales_cycle_is_too_long": {
          "title": "Our Sales Cycle Is Too Long",
          "category": "Discovery - Middle/Bottom of Funnel",
          "trigger": "Concerns about extended sales cycle duration",
          "quick_response": "Cycle length is a huge lever for ROI. To scope this accurately, can you confirm the historical average: What is the typical number of days from the *first meeting* to when the client is *closed-won*? This dictates whether we anchor our engagement to Revenue (short cycle) or Pipeline Value (long cycle).",
          "full_script": "Cycle length is a huge lever for ROI. To scope this accurately, can you confirm the historical average: What is the typical number of days from the *first meeting* to when the client is *closed-won*? This dictates whether we anchor our engagement to Revenue (short cycle) or Pipeline Value (long cycle).<br><br>This is a required anchor, critical for choosing the appropriate anchoring strategy. Validate the concern, but ensure the exact duration is captured for the SOW.",
          "key_principle": "Cycle length determines anchoring strategy."
        },

        "we_cant_get_past_gatekeepers": {
          "title": "We Can't Get Past Gatekeepers",
          "category": "Discovery - Middle/Bottom of Funnel",
          "trigger": "Difficulty accessing decision-makers",
          "quick_response": "Gatekeepers are common, and our system is designed to bypass them using executive segmentation logic and messaging that speaks directly to leadership outcomes—the reason you're on this call is proof of that system. To ensure we align with your internal flow: once an executive conversation is booked, how do those opportunities typically get greenlit internally? Who must see the Scope of Work summary before we formalize?",
          "full_script": "Gatekeepers are common, and our system is designed to bypass them using executive segmentation logic and messaging that speaks directly to leadership outcomes—the reason you're on this call is proof of that system. To ensure we align with your internal flow: once an executive conversation is booked, how do those opportunities typically get greenlit internally? Who must see the Scope of Work summary before we formalize?<br><br>Leverage the advisor's successful outbound approach as instant proof of concept. Immediately pivot the conversation from external access barriers to mapping the internal Approval Flow.",
          "key_principle": "Leverage successful segmentation as proof of concept."
        },

        // Discovery - Bottom of Funnel Constraints (Phase 3C) - 9 handlers
        "we_want_to_scale_beyond_current_capacity": {
          "title": "We Want to Scale Beyond Current Capacity",
          "category": "Discovery - Bottom of Funnel",
          "trigger": "Growth goals that exceed current team capacity",
          "quick_response": "That's exactly the right problem to solve. To ensure we don't overwhelm your closers and hurt your win rate, we must scope based on capacity limits. What is the maximum number of new, qualified opportunities your team can comfortably process per month while maintaining current close rates?",
          "full_script": "That's exactly the right problem to solve. To ensure we don't overwhelm your closers and hurt your win rate, we must scope based on capacity limits. What is the maximum number of new, qualified opportunities your team can comfortably process per month while maintaining current close rates?<br><br>This accepts the goal while immediately anchoring the capacity constraint. The SOW must pace delivery to match absorption to protect the client's close rates.",
          "key_principle": "Accept growth goal, anchor to capacity constraint."
        },

        "we_need_to_hire_more_closers_first": {
          "title": "We Need to Hire More Closers First",
          "category": "Discovery - Bottom of Funnel",
          "trigger": "Team expansion needed before scaling",
          "quick_response": "That's a proactive step, but hiring takes time, and our 45-day milestone is anchored to *current* capacity. Let's scope based on your top producer's capacity right now; that ensures we generate enough reliable pipeline value in the short term to justify those future hires. What throughput does your best producer manage monthly?",
          "full_script": "That's a proactive step, but hiring takes time, and our 45-day milestone is anchored to *current* capacity. Let's scope based on your top producer's capacity right now; that ensures we generate enough reliable pipeline value in the short term to justify those future hires. What throughput does your best producer manage monthly?<br><br>Use the short-term engagement and anchoring as the justification for proceeding. The performance data is mandatory for the SOW.",
          "key_principle": "Anchor to current capacity for short-term milestone."
        },

        "our_sales_cycle_is_6_months": {
          "title": "Our Sales Cycle Is 6+ Months",
          "category": "Discovery - Bottom of Funnel",
          "trigger": "Extended sales cycle duration",
          "quick_response": "Thank you for that clarity. Because your sales cycle is longer than 90 days, we will anchor the Scope of Work entirely on predictable Pipeline Value, not realized revenue. To model that value correctly, what is the LTV or average contract value of a new account?",
          "full_script": "Thank you for that clarity. Because your sales cycle is longer than 90 days, we will anchor the Scope of Work entirely on predictable Pipeline Value, not realized revenue. To model that value correctly, what is the LTV or average contract value of a new account?<br><br>A sales cycle over 90 days dictates anchoring the engagement to Pipeline Value (PLV), protecting the advisor from closed-revenue outcomes they cannot control.",
          "key_principle": "Long cycles require Pipeline Value anchoring."
        },

        "our_margins_are_thin": {
          "title": "Our Margins Are Thin",
          "category": "Discovery - Bottom of Funnel",
          "trigger": "Profitability concerns affecting ROI calculations",
          "quick_response": "Margins are a critical anchor point. We need your gross margin percentage to model the ROI multiple that justifies this capital allocation. What percentage are we working with? We structure the engagement so that even on thin margins, the worst-case pipeline delivered still returns multiples of the investment.",
          "full_script": "Margins are a critical anchor point. We need your gross margin percentage to model the ROI multiple that justifies this capital allocation. What percentage are we working with? We structure the engagement so that even on thin margins, the worst-case pipeline delivered still returns multiples of the investment.<br><br>Gross margin percentage is a required anchor for Baseline Economics. Reframe the fee as a risk-mitigated capital allocation rather than a cost.",
          "key_principle": "Margins are required anchor for ROI modeling."
        },

        "we_have_high_churn": {
          "title": "We Have High Churn",
          "category": "Discovery - Bottom of Funnel",
          "trigger": "Customer retention issues affecting lifetime value",
          "quick_response": "High churn is important data—that tells us we must use a conservative LTV figure when calculating Pipeline Value to ensure the scope remains defensible. What is the average retention period, or, conversely, what's the historical churn rate we should use to define the Lifetime Value of a typical client?",
          "full_script": "High churn is important data—that tells us we must use a conservative LTV figure when calculating Pipeline Value to ensure the scope remains defensible. What is the average retention period, or, conversely, what's the historical churn rate we should use to define the Lifetime Value of a typical client?<br><br>LTV definition must be defensible and accurate. Churn data is used to stress-test the math and set a conservative anchor, protecting the advisor from being judged on inflated pipeline value.",
          "key_principle": "Use conservative LTV for high churn scenarios."
        },

        "were_seasonal_business": {
          "title": "We're Seasonal Business",
          "category": "Discovery - Bottom of Funnel",
          "trigger": "Seasonal variations in business cycle",
          "quick_response": "Understood, seasonality must be built into the pacing of the SOW. When are your two biggest seasonal constraints (slowest/fastest periods)? We will set the 45-day milestone either outside that slow period or scope throughput conservatively to align with the constraints you've flagged.",
          "full_script": "Understood, seasonality must be built into the pacing of the SOW. When are your two biggest seasonal constraints (slowest/fastest periods)? We will set the 45-day milestone either outside that slow period or scope throughput conservatively to align with the constraints you've flagged.<br><br>Seasonality is a constraint that must be surfaced and factored into the SOW to maintain timeline integrity.",
          "key_principle": "Factor seasonality into SOW pacing."
        },

        "our_close_rate_is_terrible": {
          "title": "Our Close Rate Is Terrible",
          "category": "Discovery - Bottom of Funnel",
          "trigger": "Admission of poor conversion performance",
          "quick_response": "I appreciate the honesty. That conversion ratio is a necessary anchor. We will use that exact rate to model the conservative Baseline in the Scope of Work. This ensures we are only accountable for the input (Qualified Introductions), and the responsibility for conversion remains internal. What is the hard percentage number we should use?",
          "full_script": "I appreciate the honesty. That conversion ratio is a necessary anchor. We will use that exact rate to model the conservative Baseline in the Scope of Work. This ensures we are only accountable for the input (Qualified Introductions), and the responsibility for conversion remains internal. What is the hard percentage number we should use?<br><br>This reinforces Accountability Anchoring by Funnel Stage: the client owns conversion regardless of their success rate. The current low rate becomes the baseline metric in the SOW.",
          "key_principle": "Client owns conversion responsibility."
        },

        "only_the_founder_can_close": {
          "title": "Only the Founder Can Close",
          "category": "Discovery - Bottom of Funnel",
          "trigger": "Founder dependency for deal closure",
          "quick_response": "Founder dependency is common, but it creates a strict capacity ceiling. Since you own the conversion, we must pace the pipeline to match the maximum number of opportunities you personally can handle per week without burning out or compromising quality. What is that precise weekly maximum?",
          "full_script": "Founder dependency is common, but it creates a strict capacity ceiling. Since you own the conversion, we must pace the pipeline to match the maximum number of opportunities you personally can handle per week without burning out or compromising quality. What is that precise weekly maximum?<br><br>The advisor immediately converts the dependency into a capacity constraint required for risk mitigation and pacing control.",
          "key_principle": "Convert founder dependency to capacity constraint."
        },

        "we_have_no_crm_or_tracking": {
          "title": "We Have No CRM or Tracking",
          "category": "Discovery - Bottom of Funnel",
          "trigger": "Lack of infrastructure for tracking and management",
          "quick_response": "No formal tracking means we need to rely on the functional reality of your business. Let's reconstruct your last successful closed deal: What assets were exchanged, who was responsible, and how long did it take? That reconstruction will serve as the repeatable process we feed.",
          "full_script": "No formal tracking means we need to rely on the functional reality of your business. Let's reconstruct your last successful closed deal: What assets were exchanged, who was responsible, and how long did it take? That reconstruction will serve as the repeatable process we feed.<br><br>If metrics are unavailable, the advisor conducts a forensic audit to reconstruct the process using historical wins as a defensible baseline.",
          "key_principle": "Reconstruct process from historical wins."
        },

        // The Tic (Process Repeatability) (Phase 3D) - 7 handlers
        "no_its_not_repeatable": {
          "title": "No, It's Not Repeatable",
          "category": "The Tic - Process Repeatability",
          "trigger": "Honest admission that sales process is not repeatable",
          "quick_response": "Understood. If it's not formally repeatable yet, let's establish the baseline model together. Can you walk me through the absolute last client you successfully closed, step-by-step, from first conversation to signed agreement? That successful sequence will serve as the repeatable process we feed.",
          "full_script": "Understood. If it's not formally repeatable yet, let's establish the baseline model together. Can you walk me through the absolute last client you successfully closed, step-by-step, from first conversation to signed agreement? That successful sequence will serve as the repeatable process we feed.<br><br>When the process is denied, the advisor performs DaDD™ reconstruction of the last successful deal, making that sequence the baseline process to be fed by the new channel.",
          "key_principle": "Reconstruct last successful deal as baseline."
        },

        "were_still_figuring_it_out": {
          "title": "We're Still Figuring It Out",
          "category": "The Tic - Process Repeatability",
          "trigger": "Early stage company without established process",
          "quick_response": "Figuring it out is normal, which is why this is mutual due diligence. Our engagement focuses on architecting predictable demand that feeds a working process. To define that working process, who was the last client you converted, and what three steps did you take to close them? Let's map that sequence.",
          "full_script": "Figuring it out is normal, which is why this is mutual due diligence. Our engagement focuses on architecting predictable demand that feeds a working process. To define that working process, who was the last client you converted, and what three steps did you take to close them? Let's map that sequence.<br><br>This reframes the chaos as a necessary diagnostic step, demanding the reconstruction of the winning process to set the anchor.",
          "key_principle": "Reframe chaos as diagnostic opportunity."
        },

        "its_repeatable_when_i_do_it_personally": {
          "title": "It's Repeatable When I Do It Personally",
          "category": "The Tic - Process Repeatability",
          "trigger": "Founder dependency for repeatable success",
          "quick_response": "Perfect—that means *you* are the repeatable process. Let's map your personal conversion sequence: When you take a qualified introduction, what specific assets do you send, what is your typical follow-up cadence, and how quickly do you close? That sequence is the process we must feed, paced only to your maximum capacity.",
          "full_script": "Perfect—that means *you* are the repeatable process. Let's map your personal conversion sequence: When you take a qualified introduction, what specific assets do you send, what is your typical follow-up cadence, and how quickly do you close? That sequence is the process we must feed, paced only to your maximum capacity.<br><br>The founder's successful methodology becomes the defined, repeatable system that the engagement will rely upon, immediately followed by anchoring to the founder's time constraint.",
          "key_principle": "Founder becomes the repeatable system."
        },

        "only_in_certain_markets": {
          "title": "Only in Certain Markets",
          "category": "The Tic - Process Repeatability",
          "trigger": "Process works in specific market segments only",
          "quick_response": "That clarity is vital. We will restrict the Scope of Work to only target that repeatable segment [Named Market/Segment]. To ensure our targeting is precise, can you share the average sales cycle and LTV specific to that segment alone? We must anchor to certainty.",
          "full_script": "That clarity is vital. We will restrict the Scope of Work to only target that repeatable segment [Named Market/Segment]. To ensure our targeting is precise, can you share the average sales cycle and LTV specific to that segment alone? We must anchor to certainty.<br><br>This uses the specificity to solidify the Target Addressable Market (TAM) anchor, limiting scope creep and focusing the SOW on the segment where repeatable conversion (the 'Tic') is confirmed.",
          "key_principle": "Restrict scope to repeatable segments."
        },

        "was_repeatable_pre_covid_but_not_now": {
          "title": "Was Repeatable Pre-COVID But Not Now",
          "category": "The Tic - Process Repeatability",
          "trigger": "Market changes affected process repeatability",
          "quick_response": "That historical data is a useful benchmark. Now, focusing only on the *present* reality: If you had a qualified introduction today, what sequence of actions would you take to convert it? Who owns the follow-up, and what's the documentation flow? We must anchor to the current functional system.",
          "full_script": "That historical data is a useful benchmark. Now, focusing only on the *present* reality: If you had a qualified introduction today, what sequence of actions would you take to convert it? Who owns the follow-up, and what's the documentation flow? We must anchor to the current functional system.<br><br>Acknowledge the historical context, but pivot relentlessly to the current, functional sequence required for the new SOW. Past success is irrelevant to current anchoring.",
          "key_principle": "Anchor to current functional system only."
        },

        "used_to_work_but_doesnt_anymore": {
          "title": "Used to Work But Doesn't Anymore",
          "category": "The Tic - Process Repeatability",
          "trigger": "Process that worked before but is now broken",
          "quick_response": "A failed process is still data. Where does the deal consistently stop now—at the proposal, or earlier? Let's trace the flow of the *last deal that failed* to see what repeatable steps remain functional, and what sequence we need to rebuild and anchor to.",
          "full_script": "A failed process is still data. Where does the deal consistently stop now—at the proposal, or earlier? Let's trace the flow of the *last deal that failed* to see what repeatable steps remain functional, and what sequence we need to rebuild and anchor to.<br><br>Treat failure as diagnostic data. Trace the point of breakdown to find the remaining functional segment of the funnel, establishing that functional segment as the new boundary for the engagement.",
          "key_principle": "Use failure data to find remaining functional segments."
        },

        "were_testing_different_approaches": {
          "title": "We're Testing Different Approaches",
          "category": "The Tic - Process Repeatability",
          "trigger": "Multiple experimental approaches being tested",
          "quick_response": "Experimentation introduces uncertainty, which undermines the risk mitigation in our model. For the purpose of the 90-day engagement, we need to anchor to one defined process. If you had to bet on one specific approach to successfully convert new demand, which thesis would that be? Let's lock that thesis in as the baseline process we feed.",
          "full_script": "Experimentation introduces uncertainty, which undermines the risk mitigation in our model. For the purpose of the 90-day engagement, we need to anchor to one defined process. If you had to bet on one specific approach to successfully convert new demand, which thesis would that be? Let's lock that thesis in as the baseline process we feed.<br><br>The advisor prohibits variance during the engagement period, requiring the client to commit to one operational hypothesis to serve as the benchmarked anchor for the SOW. Uncertainty is incompatible with the risk-mitigation structure.",
          "key_principle": "Require commitment to one operational hypothesis."
        },

        // The Tac (Definition) (Phase 3E) - 9 handlers
        "thats_not_how_we_define_qualified": {
          "title": "That's Not How We Define Qualified",
          "category": "The Tac - Definition",
          "trigger": "Rejection of the A/B/C qualification criteria",
          "quick_response": "That is absolutely fair, and we should tailor it. The reason we rely on the core A/B/C logic (Financially Able, Serviceable, Genuinely Interested) is because it creates the only standard that is objective and measurable for the 45-day Milestone. If we can agree on those three primary components, we can integrate your specific nuance into the Serviceable criteria.",
          "full_script": "That is absolutely fair, and we should tailor it. The reason we rely on the core A/B/C logic (Financially Able, Serviceable, Genuinely Interested) is because it creates the only standard that is objective and measurable for the 45-day Milestone. If we can agree on those three primary components, we can integrate your specific nuance into the Serviceable criteria.<br><br>The goal is to have them adopt the standard as a baseline truth because it is fair, reasonable, and measurable. This logic transforms subjective debates into objective standards.",
          "key_principle": "Adopt A/B/C as objective, measurable standard."
        },

        "we_need_them_to_have_x_y_z": {
          "title": "We Need Them to Have X, Y, Z",
          "category": "The Tac - Definition",
          "trigger": "Request for additional qualification criteria beyond A/B/C",
          "quick_response": "I appreciate the detailed filtering. We typically keep the core criteria simple—two or three non-negotiables—because overloading the definition artificially narrows the Total Addressable Market (TAM), which limits yield. We can absolutely inherit structural constraints like [Name one constraint], but let's confirm the core A/B/C logic first to preserve optionality and ensure the Milestone is mathematically feasible.",
          "full_script": "I appreciate the detailed filtering. We typically keep the core criteria simple—two or three non-negotiables—because overloading the definition artificially narrows the Total Addressable Market (TAM), which limits yield. We can absolutely inherit structural constraints like [Name one constraint], but let's confirm the core A/B/C logic first to preserve optionality and ensure the Milestone is mathematically feasible.<br><br>You don't want 6-7 boxes to check, as that sets you up for failure. While structural constraints can be inherited, the advisor must preserve strategic control over the scope width.",
          "key_principle": "Keep criteria simple to preserve TAM optionality."
        },

        "only_c_level_titles_count": {
          "title": "Only C-Level Titles Count",
          "category": "The Tac - Definition",
          "trigger": "Insistence on executive titles for qualification",
          "quick_response": "That's an important distinction, and it's intentional that the definition omits hard-coding the final title. Qualification is about *fit, intent, and solvability* (A/B/C), not the badge. While our aim is always C-level, in sophisticated sales, wins often come via a strong champion one title south who influences upward. We account for this nuance to preserve efficiency and avoid unnecessary argument later.",
          "full_script": "That's an important distinction, and it's intentional that the definition omits hard-coding the final title. Qualification is about *fit, intent, and solvability* (A/B/C), not the badge. While our aim is always C-level, in sophisticated sales, wins often come via a strong champion one title south who influences upward. We account for this nuance to preserve efficiency and avoid unnecessary argument later.<br><br>The QOA™ definition deliberately omits the title requirement to avoid 'title fetishism' and acknowledge that strong champions 'one title south' are acceptable.",
          "key_principle": "Avoid title fetishism in qualification."
        },

        "they_must_have_current_vendor": {
          "title": "They Must Have Current Vendor",
          "category": "The Tac - Definition",
          "trigger": "Requirement that prospects have existing vendor to replace",
          "quick_response": "Understood. We will lock that replacement focus into the targeting criteria, which tightens the Serviceable anchor. To ensure the scope remains mathematically sound, we must confirm that the volume of vendors available for replacement is sufficient to support the 90-day engagement milestones we are anchoring to.",
          "full_script": "Understood. We will lock that replacement focus into the targeting criteria, which tightens the Serviceable anchor. To ensure the scope remains mathematically sound, we must confirm that the volume of vendors available for replacement is sufficient to support the 90-day engagement milestones we are anchoring to.<br><br>This accepts the constraint as defining the scope, but immediately pivots the conversation back to the feasibility of the TAM and Sizable/Serviceable criteria.",
          "key_principle": "Accept constraint, verify TAM sufficiency."
        },

        "minimum_company_size_of_50m": {
          "title": "Minimum Company Size of $50M",
          "category": "The Tac - Definition",
          "trigger": "Size requirements that narrow the target market",
          "quick_response": "We will lock that minimum size constraint into the Scope of Work, as servicing must be tied to scale. To ensure the Milestone is mathematically feasible, we need to quickly verify the raw Total Addressable Market count of decision-makers in that size band. If the TAM is artificially narrow, we will need to adjust the Milestone projection to remain conservative and defensible.",
          "full_script": "We will lock that minimum size constraint into the Scope of Work, as servicing must be tied to scale. To ensure the Milestone is mathematically feasible, we need to quickly verify the raw Total Addressable Market count of decision-makers in that size band. If the TAM is artificially narrow, we will need to adjust the Milestone projection to remain conservative and defensible.<br><br>Constraints are accepted and integrated into the SOW as risk mitigation. The advisor uses the constraint as leverage to confirm the TAM count, ensuring the math supports the required milestone outputs.",
          "key_principle": "Verify TAM count supports milestone feasibility."
        },

        "i_need_to_run_this_by_my_team": {
          "title": "I Need to Run This by My Team",
          "category": "The Tac - Definition",
          "trigger": "Need for team approval on qualification definition",
          "quick_response": "I appreciate the need for internal alignment—this definition governs risk and accountability. Who specifically needs to confirm the A/B/C criteria before we formalize the Scope of Work? We need to align our proposal cadence with your internal review cadence so we can arm your Champion properly for the review call on [Date].",
          "full_script": "I appreciate the need for internal alignment—this definition governs risk and accountability. Who specifically needs to confirm the A/B/C criteria before we formalize the Scope of Work? We need to align our proposal cadence with your internal review cadence so we can arm your Champion properly for the review call on [Date].<br><br>This turns a deflection into a required part of the discovery process: Mapping the Decision Path. This equips the internal champion and shows advisory posture.",
          "key_principle": "Convert to decision path mapping."
        },

        "what_if_they_lie_about_being_interested": {
          "title": "What If They Lie About Being Interested?",
          "category": "The Tac - Definition",
          "trigger": "Concern about prospect dishonesty in qualification",
          "quick_response": "That is why we introduced the power transfer (The Toe). We are giving you the veto. If a prospect is disingenuous, you simply verify them as 'Disqualified' in the post-meeting follow-up, and they do not count toward the Milestone. You retain control over quality, protecting the engagement.",
          "full_script": "That is why we introduced the power transfer (The Toe). We are giving you the veto. If a prospect is disingenuous, you simply verify them as 'Disqualified' in the post-meeting follow-up, and they do not count toward the Milestone. You retain control over quality, protecting the engagement.<br><br>The QOA™ transfers perceived control to the client precisely to dissolve the quality objection. If they lie, the client, as the judge, simply does not credit the milestone.",
          "key_principle": "Toe provides veto control over quality."
        },

        "problem_aware_is_too_subjective": {
          "title": "Problem-Aware Is Too Subjective",
          "category": "The Tac - Definition",
          "trigger": "Pushback that problem-awareness is too subjective",
          "quick_response": "That's a fair challenge, so let's clarify the standard. We define 'Problem-Aware' as someone who *recognizes the issue and wants to explore fixing it*, evidenced by the fact they accepted the meeting with your team. This distinction prevents counting those who are totally unaware, keeping the milestone objective and protecting both sides.",
          "full_script": "That's a fair challenge, so let's clarify the standard. We define 'Problem-Aware' as someone who *recognizes the issue and wants to explore fixing it*, evidenced by the fact they accepted the meeting with your team. This distinction prevents counting those who are totally unaware, keeping the milestone objective and protecting both sides.<br><br>Qualification must be defined as Problem-Aware, not just having a problem. This focus ensures that the leads being generated have commercial intent and makes the definition measurable against the prospect's actions.",
          "key_principle": "Define problem-aware by meeting acceptance."
        },

        "too_easy_acceptance_without_engaging": {
          "title": "Too-Easy Acceptance Without Engaging",
          "category": "The Tac - Definition",
          "trigger": "Prospect accepts definition too quickly without deep engagement",
          "quick_response": "Perfect, I appreciate the alignment. Just to ensure we're calibrated on the risk, can you walk me through the typical process of sizing a new opportunity once the first meeting occurs? Specifically, how long does it take you to verify they are 'Financially Able' and 'Sizable' enough to proceed?",
          "full_script": "Perfect, I appreciate the alignment. Just to ensure we're calibrated on the risk, can you walk me through the typical process of sizing a new opportunity once the first meeting occurs? Specifically, how long does it take you to verify they are 'Financially Able' and 'Sizable' enough to proceed?<br><br>When acceptance is too easy, the advisor must immediately pivot to the details of the MOF/BOF mechanics to confirm the understanding is operational, not just conceptual. This question forces them to articulate the sizing window, which is essential for setting the verification SLA in The Toe.",
          "key_principle": "Verify operational understanding of definition."
        },

        // The Toe (Power Transfer) (Phase 3F) - 7 handlers
        "how_does_verification_actually_work": {
          "title": "How Does Verification Actually Work?",
          "category": "The Toe - Power Transfer",
          "trigger": "Question about the verification process mechanics",
          "quick_response": "Verification is structural and automated, designed to be frictionless. The meeting is logged, and a time-delayed, short form—typically 3 to 5 questions—is sent directly to you [Name the Executive]. You check the box confirming the A/B/C criteria were met. If you check 'yes,' the credit is merited toward the Milestone. If 'no,' it's flagged for re-engagement.",
          "full_script": "Verification is structural and automated, designed to be frictionless. The meeting is logged, and a time-delayed, short form—typically 3 to 5 questions—is sent directly to you [Name the Executive]. You check the box confirming the A/B/C criteria were met. If you check 'yes,' the credit is merited toward the Milestone. If 'no,' it's flagged for re-engagement.<br><br>Verification relies on an operational flow: meeting logged, followed by an automated, time-delayed check-in form to capture the A/B/C confirmation status.",
          "key_principle": "Automated, time-delayed verification form."
        },

        "how_long_do_i_have_to_verify_each_one": {
          "title": "How Long Do I Have to Verify Each One?",
          "category": "The Toe - Power Transfer",
          "trigger": "Question about verification timeframes",
          "quick_response": "That depends on your internal process. How long does it typically take your team to verify whether a prospect is Financially Able and Sizable? We will set the verification Service Level Agreement (SLA)—say, 48–72 hours—to align with that. This time-box is critical and is necessary to maintain momentum.",
          "full_script": "That depends on your internal process. How long does it typically take your team to verify whether a prospect is Financially Able and Sizable? We will set the verification Service Level Agreement (SLA)—say, 48–72 hours—to align with that. This time-box is critical and is necessary to maintain momentum.<br><br>The advisor must ask the client to define the sizing window during discovery/onboarding to set the contractual verification time-box.",
          "key_principle": "Set SLA based on client's sizing window."
        },

        "what_if_we_disagree_on_qualification": {
          "title": "What If We Disagree on Qualification?",
          "category": "The Toe - Power Transfer",
          "trigger": "Concern about qualification disagreements",
          "quick_response": "That is precisely what the defined A/B/C criteria prevent. All disputes are resolved by referring back to the pre-agreed definition that you confirmed during The Tac. You hold the judgment control, but the structural definition remains immutable, ensuring accountability is based on objective logic, not opinion.",
          "full_script": "That is precisely what the defined A/B/C criteria prevent. All disputes are resolved by referring back to the pre-agreed definition that you confirmed during The Tac. You hold the judgment control, but the structural definition remains immutable, ensuring accountability is based on objective logic, not opinion.<br><br>Disagreements are contained by the pre-engineered A/B/C definition. The client's judgment is contained within the structural control framework defined by the advisor.",
          "key_principle": "A/B/C criteria prevent subjective disagreements."
        },

        "can_we_have_a_third_party_verify": {
          "title": "Can We Have a Third Party Verify?",
          "category": "The Toe - Power Transfer",
          "trigger": "Request for external verification party",
          "quick_response": "We strongly recommend the verification sit with a named executive on your team, as they have the best judgment regarding the Serviceable/Sizable anchor. The QOA™ is a mechanism of high trust between two principals. If we must involve a third party, we would need to restrict the credit decision to a single named executive there and set a strict SLA.",
          "full_script": "We strongly recommend the verification sit with a named executive on your team, as they have the best judgment regarding the Serviceable/Sizable anchor. The QOA™ is a mechanism of high trust between two principals. If we must involve a third party, we would need to restrict the credit decision to a single named executive there and set a strict SLA.<br><br>The QOA™ relies on the judgment of a trusted counterpart (founder/senior operator). The advisor should avoid ceding control to unknown or external parties, which risks the integrity of the milestone credit.",
          "key_principle": "Maintain high-trust principal-to-principal verification."
        },

        "that_sounds_like_a_lot_of_work_on_our_end": {
          "title": "That Sounds Like a Lot of Work on Our End",
          "category": "The Toe - Power Transfer",
          "trigger": "Perception that verification process is burdensome",
          "quick_response": "It's engineered to be minimal work—a 3-to-5 question form that takes seconds. The reason we ask you to handle it is simple: it transfers veto power over the Milestone credit directly to you. That small amount of work is the cost of gaining full risk mitigation and quality control over the engagement.",
          "full_script": "It's engineered to be minimal work—a 3-to-5 question form that takes seconds. The reason we ask you to handle it is simple: it transfers veto power over the Milestone credit directly to you. That small amount of work is the cost of gaining full risk mitigation and quality control over the engagement.<br><br>The verification process is a minimal check that grants the client significant veto power. Reframing the work as necessary for 'perceived control' dissolves the 'burden' objection.",
          "key_principle": "Minimal work grants significant veto power."
        },

        "who_makes_the_final_call_if_we_dispute": {
          "title": "Who Makes the Final Call If We Dispute?",
          "category": "The Toe - Power Transfer",
          "trigger": "Question about authority in disputes",
          "quick_response": "You, the client, make the final judgment call on whether A/B/C was met, which is why we call it the Qualified Opportunity *Anchor*. However, the final contract is governed by the structural definition we agreed upon. If a clear A/B/C is not met, the opportunity is disqualified. We retain structural control, while you retain judgment control.",
          "full_script": "You, the client, make the final judgment call on whether A/B/C was met, which is why we call it the Qualified Opportunity *Anchor*. However, the final contract is governed by the structural definition we agreed upon. If a clear A/B/C is not met, the opportunity is disqualified. We retain structural control, while you retain judgment control.<br><br>The model uses a Tri-Layer Power Model where the client holds Judgment Control (the yes/no verification), while the advisor holds Structural Control (the A/B/C definition).",
          "key_principle": "Tri-layer power model: client judges, advisor structures."
        },

        "can_we_reject_unlimited_times": {
          "title": "Can We Reject Unlimited Times?",
          "category": "The Toe - Power Transfer",
          "trigger": "Concern about potential abuse of rejection power",
          "quick_response": "The system is built on mutual good faith, governed by the objective A/B/C definition. If we see a pattern of rejection that clearly deviates from the agreed criteria, it signals a deeper operational misalignment we must diagnose together. We would immediately pause execution and realign on the criteria before moving forward to protect both the milestone and your investment.",
          "full_script": "The system is built on mutual good faith, governed by the objective A/B/C definition. If we see a pattern of rejection that clearly deviates from the agreed criteria, it signals a deeper operational misalignment we must diagnose together. We would immediately pause execution and realign on the criteria before moving forward to protect both the milestone and your investment.<br><br>While the Engagement Letter contains clauses to prevent abuse (annulification after three missed verifications, not mentioned on the call), the verbal response emphasizes the reliance on mutual accountability and the objective criteria to maintain professionalism.",
          "key_principle": "Mutual good faith with objective criteria protection."
        },



        "what_tools": {
          "title": "What Tools?",
          "category": "How & Mechanism",
          "trigger": "Specific questions about tools and technology",
          "quick_response": "We utilize a full channel stack tailored to your market, deployed through our private internal infrastructure. The fee covers the orchestration and governance of that execution, not the tools themselves. The focus is the engagement model—reverse-engineering a solution so that your risk is completely mitigated.",
          "full_script": "We utilize a full channel stack tailored to your market, deployed through our private internal infrastructure. The fee covers the orchestration and governance of that execution, not the tools themselves. The focus is the engagement model—reverse-engineering a solution so that your risk is completely mitigated.<br><br>Value is in the governance and orchestration, not specific tool names. This maintains the advisory positioning.",
          "key_principle": "Value in governance, not tool names."
        },

        "spam_filter_question": {
          "title": "Spam Filter Question",
          "category": "How & Mechanism",
          "trigger": "Concerns about email deliverability",
          "quick_response": "We rely on proprietary infrastructure and our internal execution bench to manage deliverability and inbox health, which is critical to brand protection. Since we control that infrastructure, we guarantee that the compliance is managed so the focus remains on the outcome model. That detail is secondary to ensuring your Day-45 Milestone is hit.",
          "full_script": "We rely on proprietary infrastructure and our internal execution bench to manage deliverability and inbox health, which is critical to brand protection. Since we control that infrastructure, we guarantee that the compliance is managed so the focus remains on the outcome model. That detail is secondary to ensuring your Day-45 Milestone is hit.<br><br>Deflect technical details and re-anchor to outcome and risk control.",
          "key_principle": "Deflect technical details to outcome focus."
        },

        "channel_questions": {
          "title": "Channel Questions",
          "category": "How & Mechanism",
          "trigger": "Questions about which channels are used",
          "quick_response": "We utilize enterprise-grade orchestration and proprietary infrastructure to ensure scale and compliance. This isn't manual effort; it's a controlled system designed for reputable firms to reach decision-makers. Are there specific compliance or volume restrictions on commercial outreach that we should be aware of?",
          "full_script": "We utilize enterprise-grade orchestration and proprietary infrastructure to ensure scale and compliance. This isn't manual effort; it's a controlled system designed for reputable firms to reach decision-makers. Are there specific compliance or volume restrictions on commercial outreach that we should be aware of?<br><br>Reframe as controlled, compliant orchestration that respects brand integrity.",
          "key_principle": "Reframe as controlled, compliant orchestration."
        },

        "infrastructure_questions": {
          "title": "Infrastructure Questions",
          "category": "How & Mechanism",
          "trigger": "Questions about infrastructure and systems",
          "quick_response": "We operate as a Revenue Advisory group whose structure is built around risk mitigation. We don't sell mechanics. We anchor engagements to your internal benchmarks, committing to outperform your current best producer by 1.5×–2×. This entire structure ensures worst case, you still win, and best case, you scale the outcome.",
          "full_script": "We operate as a Revenue Advisory group whose structure is built around risk mitigation. We don't sell mechanics. We anchor engagements to your internal benchmarks, committing to outperform your current best producer by 1.5×–2×. This entire structure ensures worst case, you still win, and best case, you scale the outcome.<br><br>Differentiate by emphasizing Positioning as an advisory firm, Anchoring to the client's math, and Risk Mitigation (P.A.RM.™).",
          "key_principle": "Differentiate through P.A.R.M.™ positioning."
        },


        "messaging_approach": {
          "title": "How Does Your Messaging Work?",
          "category": "How & Mechanism",
          "trigger": "When prospects ask specifically about your messaging approach or proprietary methods",
          "quick_response": "Great question about our messaging approach. We operate as a Revenue Advisory group with two proprietary methods that have booked 800+ meetings this year: the X,Y,Z Method and Bait & Switch + X,Y,Z Method.",
          "full_script": "Great question about our messaging approach. We operate as a Revenue Advisory group, not an email infrastructure provider, so our messaging is built around two proprietary methods that have consistently booked 800+ meetings this year.<br><br>The first is our X, Y and Z Method: We research industries deeply to understand the common process every serious player already has in place around selling. We frame our outreach around that existing process, positioning our solution as an amplifier rather than a replacement. For example, when targeting real estate firms, we don't pitch 'we'll find you investors' - instead we ask about their LP-to-committed-investor conversion process and position our pipeline program as the accelerator they've been missing.<br><br>The second is our Bait & Switch + X,Y,Z Method: We start with a direct qualification question like 'Do you provide corporate retreat packages to large companies?' to feel like a potential customer or referral source. Once they confirm, we pivot to the X,Y,Z framework, reframing the conversation from buyer to advisory partner.<br><br>What makes this work is that prospects who respond are already halfway to the result - they know they have the foundation, and we're just providing the accelerator. This creates hotter conversations than any generic 'we'll get you leads' approach.<br><br>The messaging itself is crafted to speak to revenue outcomes and commercial finance positioning, not just email infrastructure. Would you like me to walk through how this would apply to your current sales process?",
          "key_principle": "Frame messaging as proprietary advisory methodology that amplifies existing processes, not as tactical execution."
        },

        "do_you_have_connections": {
          "title": "Do You Have Connections?",
          "category": "Referrals & Connections",
          "trigger": "Questions about network or connections",
          "quick_response": "That’s a fair question, and I'd be happy to share our executive deck and a few anonymized case studies after this call. Just for immediate context, our firm also runs a Commercial Finance arm. We've structured capital and acquisitions in various sectors, often relying on the same channel we'll discuss today. Now, to make sure the materials I send are relevant, can you confirm your average contract value or LTV of a new account?",
          "full_script": "That’s a fair question, and I'd be happy to share our executive deck and a few anonymized case studies after this call. Just for immediate context, our firm also runs a Commercial Finance arm. We've structured capital and acquisitions in various sectors, often relying on the same channel we'll discuss today. Now, to make sure the materials I send are relevant, can you confirm your average contract value or LTV of a new account?<br><br>Say yes happily and confirm you will send the assets (deck + case studies). Leverage the Commercial Finance arm positioning as immediate credibility proof. Immediately pivot back to core anchor extraction (ACV/LTV).",
          "key_principle": "Say yes happily, leverage Commercial Finance positioning."
        },

        "we_only_do_referrals": {
          "title": "We Only Do Referrals",
          "category": "Referrals & Connections",
          "trigger": "Insistence on referral-only business model",
          "quick_response": "I respect that position. Since our model focuses on systematic, outbound-driven growth rather than referral networks, this probably isn't the right fit. Best of luck with your referral-based approach.",
          "full_script": "I respect that position. Since our model focuses on systematic, outbound-driven growth rather than referral networks, this probably isn't the right fit. Best of luck with your referral-based approach.<br><br>Respect their position and disqualify politely.",
          "key_principle": "Respect position, disqualify politely."
        },

        "referral_purist": {
          "title": "Referral Purist",
          "category": "Referrals & Connections",
          "trigger": "Strong preference for referral-only approach",
          "quick_response": "I understand the referral purity approach. Our structured model is designed to complement and expand upon successful referral networks by creating predictable demand that your champions can feed. What has made referrals so successful for you historically?",
          "full_script": "I understand the referral purity approach. Our structured model is designed to complement and expand upon successful referral networks by creating predictable demand that your champions can feed. What has made referrals so successful for you historically?<br><br>Position as complement to existing referral success.",
          "key_principle": "Position as complement to referral success."
        },

        "warm_intro_obsession": {
          "title": "Warm Intro Obsession",
          "category": "Referrals & Connections",
          "trigger": "Focus on warm introductions over cold outreach",
          "quick_response": "Warm intros are excellent, and our system is designed to generate more warm intros than any manual network can sustain. We create systematic warm introduction opportunities through executive segmentation and positioning that gets your champions excited to make introductions.",
          "full_script": "Warm intros are excellent, and our system is designed to generate more warm intros than any manual network can sustain. We create systematic warm introduction opportunities through executive segmentation and positioning that gets your champions excited to make introductions.<br><br>Position as systematic warm intro generation.",
          "key_principle": "Position as systematic warm intro generation."
        },

        "network_questions": {
          "title": "Network Questions",
          "category": "Referrals & Connections",
          "trigger": "Questions about network size or connections",
          "quick_response": "Our network is extensive and specialized. We have proprietary access to executive decision-makers across industries. The real question is: what specific profiles are you trying to reach? We can tell you exactly how our network maps to your target market.",
          "full_script": "Our network is extensive and specialized. We have proprietary access to executive decision-makers across industries. The real question is: what specific profiles are you trying to reach? We can tell you exactly how our network maps to your target market.<br><br>Focus on relevance and fit rather than size.",
          "key_principle": "Focus on relevance and fit."
        },

        "talking_to_other_vendors": {
          "title": "Talking to Other Vendors",
          "category": "Competition",
          "trigger": "Prospect is evaluating multiple vendors",
          "quick_response": "Smart to evaluate options. What are you comparing us against? I'd like to understand the key differences so I can highlight our unique advantages, particularly around risk mitigation and guaranteed outcomes.",
          "full_script": "Smart to evaluate options. What are you comparing us against? I'd like to understand the key differences so I can highlight our unique advantages, particularly around risk mitigation and guaranteed outcomes.<br><br>Turn comparison into opportunity to highlight differentiators.",
          "key_principle": "Turn comparison into differentiation opportunity."
        },

        "competitor_cheaper": {
          "title": "Competitor Cheaper",
          "category": "Competition",
          "trigger": "Competitor offers lower price",
          "quick_response": "Price is always a factor. The key question is: what are you getting for that lower price? Our fee includes risk mitigation and guarantees that most vendors don't offer. Let's compare the total value, not just the price tag.",
          "full_script": "Price is always a factor. The key question is: what are you getting for that lower price? Our fee includes risk mitigation and guarantees that most vendors don't offer. Let's compare the total value, not just the price tag.<br><br>Shift focus from price to total value and risk mitigation.",
          "key_principle": "Shift focus to total value and risk mitigation."
        },

        "competitor_guarantee": {
          "title": "Competitor Guarantee",
          "category": "Competition",
          "trigger": "Competitor offers some form of guarantee",
          "quick_response": "Guarantees are important. Our guarantee is unique because it's mathematically anchored to your internal benchmarks with downside protection. Most vendor guarantees are just marketing fluff. What's the specific guarantee they're offering?",
          "full_script": "Guarantees are important. Our guarantee is unique because it's mathematically anchored to your internal benchmarks with downside protection. Most vendor guarantees are just marketing fluff. What's the specific guarantee they're offering?<br><br>Differentiate based on mathematical anchoring and real risk mitigation.",
          "key_principle": "Differentiate based on mathematical anchoring."
        },

        "what_makes_you_different": {
          "title": "What Makes You Different?",
          "category": "Competition",
          "trigger": "Request for differentiation from competitors",
          "quick_response": "What makes us different is that we operate as a Revenue Advisory group whose structure is built around risk mitigation. We don't sell mechanics. We anchor engagements to your internal benchmarks, committing to outperform your current best producer by 1.5×–2×. This entire structure ensures worst case, you still win, and best case, you scale the outcome.",
          "full_script": "What makes us different is that we operate as a Revenue Advisory group whose structure is built around risk mitigation. We don't sell mechanics. We anchor engagements to your internal benchmarks, committing to outperform your current best producer by 1.5×–2×. This entire structure ensures worst case, you still win, and best case, you scale the outcome.<br><br>Differentiate by emphasizing Positioning as an advisory firm, Anchoring to the client's math, and Risk Mitigation (P.A.RM.™).",
          "key_principle": "Differentiate through P.A.R.M.™ positioning.",
          "story_mode": {
            "title": "Story Mode: The Differentiation Through Results Story",
            "when_to_use": "Use when prospects are comparing you to competitors and need to understand what makes you unique. Best for sophisticated buyers evaluating multiple options. 2-3 minute investment demonstrates differentiation through example, not claims.",
            "script": "What makes us different comes down to where we choose to compete.<br><br>Let me show you what that looks like.<br><br>(Pause, shift into story mode)<br><br>We had a client evaluating three vendors. The other two were typical agencies — big promises, low prices, 'we guarantee X meetings per month.'<br><br>Those agencies competed on <i>volume and price</i>. They pitched their tech stack, their automation, their 'proprietary AI.' They sounded like everyone else.<br><br>We took a different approach.<br><br>We told the client: <b>'We don't guarantee meetings. We guarantee the end of the engagement before it even begins.'</b><br><br>Here's what we meant.<br><br>We spent <b>60 minutes mapping their entire funnel</b> — not pitching, but diagnosing. We identified that their best rep averaged 9 qualified meetings per month and closed at 18%. We documented those numbers.<br><br>Then we built a <b>90-day engagement</b> anchored to <b>1.7x their best performer</b> — 15 qualified meetings by day 45. Conservative, realistic, tied to their actual economics.<br><br>But here's the key: we structured it so the <b>worst-case scenario was still ROI-positive</b>. Even if they only closed 2 deals at their 18% rate, that's $160K in revenue from a $50K investment.<br><br>The other vendors couldn't model that. They just promised 'results.'<br><br>By <b>day 48</b>, we'd delivered <b>16 verified meetings</b>. They closed <b>3 deals worth $240K</b>. The other vendors? Still sending unqualified LinkedIn spam.<br><br>(Pause, bring it back)<br><br>That's the difference. We operate as a <b>Revenue Advisory group</b> whose structure is built around risk mitigation. We don't sell mechanics or make promises. We anchor engagements to your internal benchmarks and reverse-engineer the outcome so you can see the end before we even begin.<br><br>Worst case, you still win. Best case, you scale the outcome. That's why we're different.<br><br>Now, to see if that makes sense for your business: what's your current best performer averaging in qualified meetings per month?"
          }
        },

        "rfp_policy": {
          "title": "RFP Policy",
          "category": "Competition",
          "trigger": "Company requires formal RFP process",
          "quick_response": "RFPs are comprehensive processes. Since we're already deep into discovery and have the specific anchors for your business, we'd be happy to submit a formal response. What are the key evaluation criteria in your RFP?",
          "full_script": "RFPs are comprehensive processes. Since we're already deep into discovery and have the specific anchors for your business, we'd be happy to submit a formal response. What are the key evaluation criteria in your RFP?<br><br>Leverage existing discovery work to create compelling RFP response.",
          "key_principle": "Leverage discovery work for RFP response."
        },

        "board_approval": {
          "title": "Board Approval",
          "category": "Internal Dynamics",
          "trigger": "Requires board-level approval",
          "quick_response": "That is exactly why the scope is anchored to the risk mitigation clause and your internal ROI. Our model is built to be board-defensible, emphasizing the guaranteed downside protection and the calculated ROI multiple. Would a one-paragraph executive brief, summarizing the worst-case vs. best-case outcomes, help leadership approve this faster?",
          "full_script": "That is exactly why the scope is anchored to the risk mitigation clause and your internal ROI. Our model is built to be board-defensible, emphasizing the guaranteed downside protection and the calculated ROI multiple. Would a one-paragraph executive brief, summarizing the worst-case vs. best-case outcomes, help leadership approve this faster?<br><br>Arm the Champion with materials emphasizing outcomes and risk control.",
          "key_principle": "Board-defensible with risk mitigation emphasis."
        },

        "too_many_questions": {
          "title": "Too Many Questions",
          "category": "Process & Clarity",
          "trigger": "Complaint about number of questions asked",
          "quick_response": "I completely understand. We run a rigorous due diligence process because we're scoping a capital commitment, not selling a widget, so these anchors are critical. Let's make sure we capture the next three inputs quickly: What is the average length of your sales cycle, first touch to closed-won?",
          "full_script": "I completely understand. We run a rigorous due diligence process because we're scoping a capital commitment, not selling a widget, so these anchors are critical. Let's make sure we capture the next three inputs quickly: What is the average length of your sales cycle, first touch to closed-won?<br><br>Acknowledge the rigor, but immediately pivot back to the necessity of collecting the required anchoring data.",
          "key_principle": "Acknowledge rigor, pivot to necessity of anchoring."
        },

        "confidential_info": {
          "title": "Confidential Info",
          "category": "Process & Clarity",
          "trigger": "Reluctance to share sensitive information",
          "quick_response": "I completely respect that; a ballpark is perfectly acceptable for modeling the scope. The only reason we require [Metric] is to ensure the Baseline we anchor to is conservative and defensible for your CFO. If we scope high, we expose you to risk. What's the closest approximate figure you can share for internal modeling?",
          "full_script": "I completely respect that; a ballpark is perfectly acceptable for modeling the scope. The only reason we require [Metric] is to ensure the Baseline we anchor to is conservative and defensible for your CFO. If we scope high, we expose you to risk. What's the closest approximate figure you can share for internal modeling?<br><br>Reassure them that ballparks are fine for modeling purposes. The goal is to obtain enough data to build a scope that protects their downside and justifies the fee as a board-defensible capital allocation.",
          "key_principle": "Ballparks acceptable for conservative modeling."
        },

        "cancellation_policy": {
          "title": "Cancellation Policy",
          "category": "Contract & Legal",
          "trigger": "Questions about cancellation terms",
          "quick_response": "The initial upfront fee [e.g., $25K] is non-refundable as it capitalizes the strategic build. The contingent fee [the second $25K] is only paid upon successful delivery of the Day-45 Milestone. If you choose to terminate before that milestone is hit, you forfeit the upfront fee, and the contingent fee is not due.",
          "full_script": "The initial upfront fee [e.g., $25K] is non-refundable as it capitalizes the strategic build. The contingent fee [the second $25K] is only paid upon successful delivery of the Day-45 Milestone. If you choose to terminate before that milestone is hit, you forfeit the upfront fee, and the contingent fee is not due. If *we* fail to hit the milestone, we continue working until we do, ensuring your investment is protected.<br><br>The risk mitigation clause is the cancellation policy; it guarantees output for the upfront fee.",
          "key_principle": "Risk mitigation guarantees output for upfront fee."
        },

        "doing_fine_without_help": {
          "title": "Doing Fine Without Help",
          "category": "Disqualification Signals",
          "trigger": "Claim that they're performing well without assistance",
          "quick_response": "That’s great news; it means we're talking to a healthy, well-run business. Most of our clients are doing well, but they hit a capacity or channel ceiling. Our goal here is simply to build a strategic Scope of Work that shows whether installing a controlled channel, anchored to a 1.5× baseline, complements your existing growth and helps you break through that ceiling.",
          "full_script": "That’s great news; it means we're talking to a healthy, well-run business. Most of our clients are doing well, but they hit a capacity or channel ceiling. Our goal here is simply to build a strategic Scope of Work that shows whether installing a controlled channel, anchored to a 1.5× baseline, complements your existing growth and helps you break through that ceiling. Let's look at your capacity limits: what's the maximum number of new accounts your team can comfortably onboard per quarter?<br><br>Validate their current success (abundance mindset). Reframe the engagement not as fixing a problem, but as introducing a new, scalable channel to exceed the natural cap of their existing channels.",
          "key_principle": "Reframe as exceeding capacity ceiling."
        },

        "just_researching": {
          "title": "Just Researching",
          "category": "Disqualification Signals",
          "trigger": "Prospect is only in research phase",
          "quick_response": "Totally fair—honestly, I wouldn't prioritize it myself without seeing a scope. That's exactly why we're in due diligence now. Let's at least put an engagement model in front of you—then you'll know if it's worth prioritizing down the road.",
          "full_script": "Totally fair—honestly, I wouldn't prioritize it myself without seeing a scope. That's exactly why we're in due diligence now. Let's at least put an engagement model in front of you—then you'll know if it's worth prioritizing down the road.<br><br>Validate the prospect's stance. Reframe discovery as mutual due diligence to build the engagement model. Even if they aren't ready to buy, having the scoped, risk-mitigated model ensures they have a defensible option when their timing aligns.",
          "key_principle": "Validate, reframe to mutual due diligence."
        },

        "email_me_info": {
          "title": "Email Me Info",
          "category": "Disqualification Signals",
          "trigger": "Request to just email information and end call",
          "quick_response": "Of course, I'll send you information after the call. What I'd like to do is include not just our deck, but also 1–2 recent successes and, most importantly, your Scope of Work. To make that possible, we just need to finish this due diligence—a few more questions on my end, and then I can send something that's actually meaningful to you. Otherwise, you'd just be getting generic info. Does that sound fair?",
          "full_script": "Of course, I'll send you information after the call. What I'd like to do is include not just our deck, but also 1–2 recent successes and, most importantly, your Scope of Work. To make that possible, we just need to finish this due diligence—a few more questions on my end, and then I can send something that's actually meaningful to you. Otherwise, you'd just be getting generic info. Does that sound fair?<br><br>Say yes confidently. Use the request as leverage to finish discovery, positioning the customized Scope of Work (SOW) as the true asset they need, which requires gathering necessary anchors during the current call.",
          "key_principle": "Use request as leverage to complete discovery."
        },

        "rejects_abc_tac": {
          "title": "Rejects A/B/C (Tac)",
          "category": "Tic-Tac-Toe Variations",
          "trigger": "Prospect rejects the qualification criteria",
          "quick_response": "I understand your perspective. What criteria would you use to determine if a prospect is qualified? We want to make sure we're aligned on what constitutes a real opportunity for you.",
          "full_script": "I understand your perspective. What criteria would you use to determine if a prospect is qualified? We want to make sure we're aligned on what constitutes a real opportunity for you.<br><br>Seek alternative criteria while maintaining qualification focus.",
          "key_principle": "Seek alternative criteria while maintaining focus."
        },

        "getting_acquired": {
          "title": "Getting Acquired",
          "category": "Edge Cases & Unexpected",
          "trigger": "Company is in acquisition process",
          "quick_response": "That’s a critical development. M&A processes often prioritize clean revenue growth or pipeline certainty. We can scope the engagement to generate Pipeline Value that makes the acquisition thesis more robust. Will having a risk-mitigated Scope of Work, anchored to a 1.5× pipeline increase, strengthen the growth narrative for the final valuation?",
          "full_script": "That’s a critical development. M&A processes often prioritize clean revenue growth or pipeline certainty. We can scope the engagement to generate Pipeline Value that makes the acquisition thesis more robust. Will having a risk-mitigated Scope of Work, anchored to a 1.5× pipeline increase, strengthen the growth narrative for the final valuation?<br><br>Reframe the engagement as a strategic asset for the due diligence process and valuation.",
          "key_principle": "Reframe as strategic asset for M&A due diligence."
        },

        "lost_big_client": {
          "title": "Lost Big Client",
          "category": "Edge Cases & Unexpected",
          "trigger": "Recent major client loss",
          "quick_response": "I hear you; losing a key account is a massive pressure point. That shifts the priority from 'growth' to 'critical LTV replacement.' Let's scope the engagement to generate Pipeline Value that exceeds that loss within the next 90 days. Our structure ensures the investment is focused on replacement with guaranteed downside protection.",
          "full_script": "I hear you; losing a key account is a massive pressure point. That shifts the priority from 'growth' to 'critical LTV replacement.' Let's scope the engagement to generate Pipeline Value that exceeds that loss within the next 90 days. Our structure ensures the investment is focused on replacement with guaranteed downside protection.<br><br>Validate the crisis, then re-anchor the fee as an urgent capital allocation to replace the lost LTV, making the solution an undeniable financial necessity.",
          "key_principle": "Reframe as urgent LTV replacement opportunity."
        },

        "emergency_reschedule": {
          "title": "Emergency/Reschedule",
          "category": "Edge Cases & Unexpected",
          "trigger": "Urgent situation requiring rescheduling",
          "quick_response": "Of course, completely understand. I'll make sure our team holds your file open and prioritizes the Scope of Work build. My assistant will send a quick link to reschedule for [Suggest time within 48-72 hours] so we can capture the final anchors and finalize the Scope of Work.",
          "full_script": "Of course, completely understand. I'll make sure our team holds your file open and prioritizes the Scope of Work build. My assistant will send a quick link to reschedule for [Suggest time within 48-72 hours] so we can capture the final anchors and finalize the Scope of Work.<br><br>Maintain professional composure (high QOE™). Accept the urgency, but manage logistics professionally, using an assistant/scheduler alias if appropriate, and immediately rescheduling to maintain momentum.",
          "key_principle": "Maintain composure, manage logistics professionally."
        },

        "shutting_down": {
          "title": "Shutting Down",
          "category": "Edge Cases & Unexpected",
          "trigger": "Company is closing or dissolving",
          "quick_response": "Thank you for the clarity. I wish you the best of luck with the transition.",
          "full_script": "Thank you for the clarity. I wish you the best of luck with the transition.<br><br>Exit cleanly. Disqualification is a win, protecting the advisor's time and resources.",
          "key_principle": "Exit cleanly when company is dissolving."
        },

        "just_raised_funding": {
          "title": "Just Raised Funding",
          "category": "Edge Cases & Unexpected",
          "trigger": "Recent capital raise enabling larger scope",
          "quick_response": "That is excellent news and confirms our thesis on market readiness. We always anchor the initial 90-day scope to your *current* absorption capacity to protect the win rate. Let's execute this baseline pilot, and if we hit the Day-45 milestone early, we can immediately execute a Change Order to expand the scope into new markets.",
          "full_script": "That is excellent news and confirms our thesis on market readiness. We always anchor the initial 90-day scope to your *current* absorption capacity to protect the win rate. Let's execute this baseline pilot, and if we hit the Day-45 milestone early, we can immediately execute a Change Order to expand the scope into new markets.<br><br>Acknowledge the capital, but lock the pilot scope based on risk mitigation and capacity constraints. Future expansion is conditional on performance.",
          "key_principle": "Lock pilot scope, expand conditionally on performance."
        },

        "competitor_did_this": {
          "title": "Competitor Did This",
          "category": "Edge Cases & Unexpected",
          "trigger": "Competitor successfully implemented similar solution",
          "quick_response": "That competitive intelligence is critical. Urgency is exactly why we move fast: to define your outperformance baseline and lock the risk clause. We can formalize the Engagement Letter today to begin the strategic architecture immediately, but execution will still require two to four weeks to allocate and warm the proprietary infrastructure needed to hit the Day-45 Milestone safely.",
          "full_script": "That competitive intelligence is critical. Urgency is exactly why we move fast: to define your outperformance baseline and lock the risk clause. We can formalize the Engagement Letter today to begin the strategic architecture immediately, but execution will still require two to four weeks to allocate and warm the proprietary infrastructure needed to hit the Day-45 Milestone safely.<br><br>Leverage the urgency for commitment, but defend the necessary deployment timeline, controlling the throttle and emphasizing rigor over reckless speed.",
          "key_principle": "Leverage urgency for commitment while controlling timeline."
        },

        "hire_you_for_something_else": {
          "title": "Hire You for Something Else",
          "category": "Edge Cases & Unexpected",
          "trigger": "Request to pivot to different service offering",
          "quick_response": "We specialize in engineering predictable revenue outcomes tied to internal benchmarks. While we don't execute [Specific request], the constraint you just mentioned is often solved by having a predictable pipeline that de-risks capital commitment. Let's focus on anchoring that pipeline certainty first.",
          "full_script": "We specialize in engineering predictable revenue outcomes tied to internal benchmarks. While we don't execute [Specific request], the constraint you just mentioned is often solved by having a predictable pipeline that de-risks capital commitment. Let's focus on anchoring that pipeline certainty first.<br><br>Redirect the pivot request back to the core P.A.R.M.™ function: generating pipeline certainty and de-risking the capital allocation.",
          "key_principle": "Redirect to core P.A.R.M.™ pipeline function."
        },

        "train_our_team_instead": {
          "title": "Train Our Team Instead",
          "category": "Edge Cases & Unexpected",
          "trigger": "Request for training instead of execution",
          "quick_response": "Our mandate is to architect the revenue model and then deploy vetted execution infrastructure to hit the Day-45 Milestone. We are here to fuel the fire, not staff the engine. If we install a predictable channel, who internally would be responsible for converting that demand into a signed client? We need to establish clear ownership.",
          "full_script": "Our mandate is to architect the revenue model and then deploy vetted execution infrastructure to hit the Day-45 Milestone. We are here to fuel the fire, not staff the engine. If we install a predictable channel, who internally would be responsible for converting that demand into a signed client? We need to establish clear ownership.<br><br>The advisory role is about defining the engine, not staffing it. Clarify the accountability boundary: the advisor owns the input (interest creation), the client owns the conversion (staffing).",
          "key_principle": "Clarify input vs conversion accountability."
        },

        "multiple_questions_at_once": {
          "title": "Multiple Questions at Once",
          "category": "Edge Cases & Unexpected",
          "trigger": "Prospect raises several objections simultaneously",
          "quick_response": "I hear several concerns here. Let me address them one by one to make sure we get clarity on each. Which one is most important to you right now?",
          "full_script": "I hear several concerns here. Let me address them one by one to make sure we get clarity on each. Which one is most important to you right now?<br><br>Isolate and prioritize multiple concerns rather than trying to address them all at once.",
          "key_principle": "Isolate and prioritize multiple concerns."
        },

        "i_love_this_sign_today": {
          "title": "I Love This, Let's Sign Today",
          "category": "Edge Cases & Unexpected",
          "trigger": "Immediate enthusiastic agreement",
          "quick_response": "That's excellent news. I'm moving to formalize the Engagement Letter and Invoice immediately and will send both in one package within the hour. Once executed, onboarding commences within 24 hours. Sound good?",
          "full_script": "That's excellent news. I'm moving to formalize the Engagement Letter and Invoice immediately and will send both in one package within the hour. Once executed, onboarding commences within 24 hours. Sound good?<br><br>When a verbal 'yes' occurs, compress steps. The strategy is the Combined Close (EL + Invoice) sent immediately, leveraging the momentum. Readiness signals control.",
          "key_principle": "Compress steps with Combined Close on immediate yes."
        },

        // Integration & Pricing (Phase 4) - 13 handlers
        "can_we_pay_monthly_instead_of_upfront": {
          "title": "Can We Pay Monthly Instead of Upfront?",
          "category": "Integration & Pricing",
          "trigger": "Request to change from upfront to monthly payment structure",
          "quick_response": "The initial tranche is designed to capitalize the build—infrastructure allocation, strategic architecture, and vendor deployment—required to hit the Day-45 Milestone. That capitalization is non-negotiable for the first 50%. The second half is already tied strictly to performance, making it milestone-based, not monthly.",
          "full_script": "The initial tranche is designed to capitalize the build—infrastructure allocation, strategic architecture, and vendor deployment—required to hit the Day-45 Milestone. That capitalization is non-negotiable for the first 50%. The second half is already tied strictly to performance, making it milestone-based, not monthly.<br><br>Upfront capital is necessary to guarantee milestone delivery and fund execution resources. The split fee is the primary risk mitigation structure.",
          "key_principle": "Upfront capital guarantees milestone delivery."
        },

        "can_we_do_month_to_month": {
          "title": "Can We Do Month-to-Month?",
          "category": "Integration & Pricing",
          "trigger": "Request for month-to-month commitment instead of 90-day term",
          "quick_response": "Our engagements are structured for a 90-day term because that is the required window to establish a defensible performance baseline and prove the 1.5× lift against your internal metrics. We use the 45-day milestone as the checkpoint, but the 90-day window is necessary to de-risk the investment and establish durable results.",
          "full_script": "Our engagements are structured for a 90-day term because that is the required window to establish a defensible performance baseline and prove the 1.5× lift against your internal metrics. We use the 45-day milestone as the checkpoint, but the 90-day window is necessary to de-risk the investment and establish durable results.<br><br>The structure is 90 days with a 45-day milestone trigger. Commitments are required to yield measurable, defendable benchmarks.",
          "key_principle": "90-day term establishes defensible performance baseline."
        },

        "we_have_budget_approved_for_x_but_youre_at_y": {
          "title": "We Have Budget Approved for $X But You're at $Y",
          "category": "Integration & Pricing",
          "trigger": "Budget constraint where approved amount is lower than fee",
          "quick_response": "I appreciate the transparency. Pricing is anchored entirely to the quantifiable Pipeline Value we identified in discovery, not budget availability. Our fee is positioned as a capital allocation with guaranteed downside protection—the worst case still results in a net win for you—rather than a negotiable cost based on internal budget caps.",
          "full_script": "I appreciate the transparency. Pricing is anchored entirely to the quantifiable Pipeline Value we identified in discovery, not budget availability. Our fee is positioned as a capital allocation with guaranteed downside protection—the worst case still results in a net win for you—rather than a negotiable cost based on internal budget caps.<br><br>Do not discount; re-anchor to the ROI math and guaranteed outcomes. Fear of execution, not affordability, drives this objection.",
          "key_principle": "Fee anchored to ROI, not budget caps."
        },

        "what_happens_after_90_days": {
          "title": "What Happens After 90 Days?",
          "category": "Integration & Pricing",
          "trigger": "Question about post-engagement continuation or renewal",
          "quick_response": "Once the 90-day engagement concludes, assuming the milestone has been met, you have three clear pathways: 1) Renew the mandate to continue execution; 2) License the system we built for internal use [suggesting $10K–$20K/month]; or 3) Purchase the system outright [$100K+]. Our focus is building a path to scalability.",
          "full_script": "Once the 90-day engagement concludes, assuming the milestone has been met, you have three clear pathways: 1) Renew the mandate to continue execution; 2) License the system we built for internal use [suggesting $10K–$20K/month]; or 3) Purchase the system outright [$100K+]. Our focus is building a path to scalability.<br><br>Future-pace towards expansion, licensing, or IP sale. This frames the engagement as building a strategic asset, not running a short campaign.",
          "key_principle": "Frame as strategic asset with scalability pathways."
        },

        "can_we_cancel_mid_engagement": {
          "title": "Can We Cancel Mid-Engagement?",
          "category": "Integration & Pricing",
          "trigger": "Question about cancellation terms and policies",
          "quick_response": "The initial upfront fee [e.g., $25K] is non-refundable as it capitalizes the strategic build. The contingent fee [the second $25K] is only paid upon successful delivery of the Day-45 Milestone. If you choose to terminate before that milestone is hit, you forfeit the upfront fee, and the contingent fee is not due. If *we* fail to hit the milestone, we continue working until we do, ensuring your investment is protected.",
          "full_script": "The initial upfront fee [e.g., $25K] is non-refundable as it capitalizes the strategic build. The contingent fee [the second $25K] is only paid upon successful delivery of the Day-45 Milestone. If you choose to terminate before that milestone is hit, you forfeit the upfront fee, and the contingent fee is not due. If *we* fail to hit the milestone, we continue working until we do, ensuring your investment is protected.<br><br>The risk mitigation clause is the cancellation policy; it guarantees output for the upfront fee.",
          "key_principle": "Risk mitigation guarantees output for upfront fee."
        },

        "can_you_break_down_the_pricing": {
          "title": "Can You Break Down the Pricing?",
          "category": "Integration & Pricing",
          "trigger": "Request for detailed pricing breakdown by component",
          "quick_response": "The fee covers the complete engagement architecture: infrastructure, execution, and risk mitigation. We don't break it down because value comes from the integrated solution. Breaking it down would undermine the advisory positioning.",
          "full_script": "Our fee covers the comprehensive engagement architecture designed for board-level defensibility. This includes:<br><br>- Proprietary infrastructure and messaging systems\n- Dedicated execution team and governance\n- Risk mitigation and milestone guarantees\n- Strategic oversight and optimization<br><br>We don't provide cost breakdowns because the value proposition is the integrated outcome, not individual deliverables. Breaking it down would undermine the advisory positioning.<br><br>The fee is positioned as a capital allocation with guaranteed ROI. What's your threshold for investments that generate 1.5x returns?",
          "key_principle": "Value comes from integrated architecture, not components."
        },

        "whats_included_vs_add_on": {
          "title": "What's Included vs Add-On?",
          "category": "Integration & Pricing",
          "trigger": "Clarification of what's included in the fee vs additional costs",
          "quick_response": "The fee includes all required components to hit the Milestone: the outcome architecture, executive segmentation logic, the infrastructure oversight, and the execution bench. We do not sell add-ons; we sell a structured outcome. If the scope or targets change, that triggers a formal Change-Order to protect both parties' alignment.",
          "full_script": "The fee includes all required components to hit the Milestone: the outcome architecture, executive segmentation logic, the infrastructure oversight, and the execution bench. We do not sell add-ons; we sell a structured outcome. If the scope or targets change, that triggers a formal Change-Order to protect both parties' alignment.<br><br>Services are bundled under a single strategic fee. Scope creep is managed via change orders.",
          "key_principle": "Bundled strategic fee; scope creep via change orders."
        },

        "we_need_3_vendor_quotes_as_policy": {
          "title": "We Need 3 Vendor Quotes as Policy",
          "category": "Integration & Pricing",
          "trigger": "Procurement requirement for multiple vendor comparisons",
          "quick_response": "This Scope of Work is highly customized, anchored to your specific LTV and best-producer metrics, and is structured as a board-level capital allocation, not a commodity vendor quote. To ensure alignment with your internal process, how do new advisory engagements typically move through your legal or procurement department? Who specifically needs to see the Scope of Work summary before we formalize?",
          "full_script": "This Scope of Work is highly customized, anchored to your specific LTV and best-producer metrics, and is structured as a board-level capital allocation, not a commodity vendor quote. To ensure alignment with your internal process, how do new advisory engagements typically move through your legal or procurement department? Who specifically needs to see the Scope of Work summary before we formalize?<br><br>Reframes the engagement as bespoke capital allocation outside the typical vendor bucket. Pivots immediately to mapping the approval flow (D.E.D.I.™).",
          "key_principle": "Reframe as bespoke capital allocation, not commodity."
        },

        "this_needs_board_approval": {
          "title": "This Needs Board Approval",
          "category": "Integration & Pricing",
          "trigger": "Requirement for board-level approval",
          "quick_response": "That is exactly why the scope is anchored to the risk mitigation clause and your internal ROI. Our model is built to be board-defensible, emphasizing the guaranteed downside protection and the calculated ROI multiple. Would a one-paragraph executive brief, summarizing the worst-case vs. best-case outcomes, help leadership approve this faster? We must align our proposal cadence with their review timeline.",
          "full_script": "That is exactly why the scope is anchored to the risk mitigation clause and your internal ROI. Our model is built to be board-defensible, emphasizing the guaranteed downside protection and the calculated ROI multiple. Would a one-paragraph executive brief, summarizing the worst-case vs. best-case outcomes, help leadership approve this faster? We must align our proposal cadence with their review timeline.<br><br>Arm the Champion with materials emphasizing outcomes and risk control.",
          "key_principle": "Board-defensible with risk mitigation and ROI emphasis."
        },

        "do_we_own_the_data_lists": {
          "title": "Do We Own the Data/Lists?",
          "category": "Integration & Pricing",
          "trigger": "Questions about data ownership and IP rights",
          "quick_response": "The proprietary assets utilized during the engagement—including the lists, messaging architecture, and execution infrastructure—remain the intellectual property of our firm. This IP is part of the system you are leveraging to hit the milestone. At the 90-day mark, you have the option to buy or license that entire system for internal use.",
          "full_script": "The proprietary assets utilized during the engagement—including the lists, messaging architecture, and execution infrastructure—remain the intellectual property of our firm. This IP is part of the system you are leveraging to hit the milestone. At the 90-day mark, you have the option to buy or license that entire system for internal use.<br><br>Advisor retains IP of proprietary lists and systems. This IP is an asset sold in the back end (licensing/buyout).",
          "key_principle": "Advisor retains IP; licensing/buyout available later."
        },

        "what_if_we_want_to_extend_beyond_90_days": {
          "title": "What If We Want to Extend Beyond 90 Days?",
          "category": "Integration & Pricing",
          "trigger": "Interest in continuing engagement past initial term",
          "quick_response": "We offer a full renewal of the mandate, typically at the same fee, or an expansion of scope into new channels or markets, which would require a revised Scope of Work. Most successful engagements renew to compound the results achieved in the pilot.",
          "full_script": "We offer a full renewal of the mandate, typically at the same fee, or an expansion of scope into new channels or markets, which would require a revised Scope of Work. Most successful engagements renew to compound the results achieved in the pilot.<br><br>A clear path to scale is renewal, expansion, or a licensing deal.",
          "key_principle": "Clear renewal and expansion pathways."
        },

        "can_we_start_with_one_market_then_expand": {
          "title": "Can We Start With One Market Then Expand?",
          "category": "Integration & Pricing",
          "trigger": "Request for phased rollout starting with single market",
          "quick_response": "We can certainly restrict the scope to the highest-ROI segment you identified. We always aim for the tightest scope that still justifies the capital allocation. We must confirm the Target Addressable Market (TAM) for that single market is sufficient to mathematically support the Day-45 Milestone, and then we will lock that restriction into the Engagement Letter.",
          "full_script": "We can certainly restrict the scope to the highest-ROI segment you identified. We always aim for the tightest scope that still justifies the capital allocation. We must confirm the Target Addressable Market (TAM) for that single market is sufficient to mathematically support the Day-45 Milestone, and then we will lock that restriction into the Engagement Letter.<br><br>Accept the constraint but verify the smaller scope is mathematically viable to support the fee and milestones.",
          "key_principle": "Accept phased rollout, verify TAM sufficiency."
        },

        "do_you_have_payment_plans": {
          "title": "Do You Have Payment Plans?",
          "category": "Integration & Pricing",
          "trigger": "Request for alternative payment arrangements",
          "quick_response": "Our fee structure is already phased into two tranches: 50% upfront to capitalize the build, and 50% contingent on the Day-45 milestone. This is the inherent payment plan—it ensures we are fully capitalized for the strategic execution while protecting your downside risk based on performance.",
          "full_script": "Our fee structure is already phased into two tranches: 50% upfront to capitalize the build, and 50% contingent on the Day-45 milestone. This is the inherent payment plan—it ensures we are fully capitalized for the strategic execution while protecting your downside risk based on performance.<br><br>Reinforce the two-part structure as the already-built-in financing plan.",
          "key_principle": "Two-part structure is the inherent payment plan."
        },

        // Transition to Call Two (Phase 5) - 12 handlers
        "when_can_you_start": {
          "title": "When Can You Start?",
          "category": "Transition to Call Two",
          "trigger": "Question about timeline for engagement commencement",
          "quick_response": "Once the Engagement Letter is executed, we commence onboarding within 1 to 2 business days. Campaign deployment typically follows within two to four weeks, once we finalize the strategy and allocate the required infrastructure. We are ready to begin as soon as you are.",
          "full_script": "Once the Engagement Letter is executed, we commence onboarding within 1 to 2 business days. Campaign deployment typically follows within two to four weeks, once we finalize the strategy and allocate the required infrastructure. We are ready to begin as soon as you are.<br><br>Signals readiness and sets realistic expectations for the timeline (1-2 days onboarding, 2-4 weeks deployment).",
          "key_principle": "Signal readiness with realistic timeline expectations."
        },

        "can_we_start_sooner_than_2_weeks": {
          "title": "Can We Start Sooner Than 2 Weeks?",
          "category": "Transition to Call Two",
          "trigger": "Request for accelerated timeline",
          "quick_response": "We prioritize a rigorous setup phase to ensure compliance and message quality. We can expedite the initial strategic architecture immediately upon signature, but full execution and infrastructure allocation require two to four weeks to allocate and warm up the proprietary infrastructure needed to hit the milestone safely.",
          "full_script": "We prioritize a rigorous setup phase to ensure compliance and message quality. We can expedite the initial strategic architecture immediately upon signature, but full execution and infrastructure allocation require two to four weeks to allocate and warm up the proprietary infrastructure needed to hit the milestone safely.<br><br>Maintains control of the timeline, emphasizing rigor and safety over speed. The advisory controls the pacing (throttle).",
          "key_principle": "Control pacing with emphasis on rigor and safety."
        },

        "whats_the_onboarding_process": {
          "title": "What's the Onboarding Process?",
          "category": "Transition to Call Two",
          "trigger": "Question about how the engagement begins",
          "quick_response": "The process is streamlined: 1) Execute the Engagement Letter; 2) Onboarding starts immediately; 3) We finalize the messaging architecture based on our discovery; 4) We allocate the necessary infrastructure and deploy campaigns within two to four weeks. Your primary responsibility is timely approvals and providing necessary access for measurement.",
          "full_script": "The process is streamlined: 1) Execute the Engagement Letter; 2) Onboarding starts immediately; 3) We finalize the messaging architecture based on our discovery; 4) We allocate the necessary infrastructure and deploy campaigns within two to four weeks. Your primary responsibility is timely approvals and providing necessary access for measurement.<br><br>Onboarding is framed as a structured, controlled execution phase.",
          "key_principle": "Frame as streamlined, controlled execution phase."
        },

        "who_will_we_work_with_day_to_day": {
          "title": "Who Will We Work With Day-to-Day?",
          "category": "Transition to Call Two",
          "trigger": "Question about team and point of contact",
          "quick_response": "You will work directly with me and my team, who manage the overall strategy, quality assurance, and milestone tracking. We orchestrate a specialized bench of operators—campaign ops, data analysts, and messaging experts—to handle the execution. You are never passed off to junior staff; you are dealing with us directly.",
          "full_script": "You will work directly with me and my team, who manage the overall strategy, quality assurance, and milestone tracking. We orchestrate a specialized bench of operators—campaign ops, data analysts, and messaging experts—to handle the execution. You are never passed off to junior staff; you are dealing with us directly.<br><br>Maintains the orchestrator/advisor frame, assuring the client they retain executive access.",
          "key_principle": "Assure executive access and orchestrator positioning."
        },

        "how_often_do_we_get_updates": {
          "title": "How Often Do We Get Updates?",
          "category": "Transition to Call Two",
          "trigger": "Question about communication frequency and methods",
          "quick_response": "We align the communication cadence to the tempo we mapped during discovery. We typically run a formal Day-45 review tied to the milestone, plus [weekly/bi-weekly] updates focused on pipeline metrics and outcomes, not tactical inputs. Communication is primarily managed through [email/Slack channel] to maintain efficient documentation.",
          "full_script": "We align the communication cadence to the tempo we mapped during discovery. We typically run a formal Day-45 review tied to the milestone, plus [weekly/bi-weekly] updates focused on pipeline metrics and outcomes, not tactical inputs. Communication is primarily managed through [email/Slack channel] to maintain efficient documentation.<br><br>Communication is professional, substantive, and governed by the D.E.D.I.™ tempo classification.",
          "key_principle": "Professional, substantive communication aligned to tempo."
        },

        "what_does_success_look_like_at_day_45": {
          "title": "What Does Success Look Like at Day 45?",
          "category": "Transition to Call Two",
          "trigger": "Clarification of milestone achievement criteria",
          "quick_response": "Success at Day 45 is the achievement of the agreed-upon Baseline Milestone—which we determined is [X Qualified Introductions/Pipeline Value], tracking to outperform your best producer by 1.5×. This triggers the second payment tranche and validates the ROI for leadership.",
          "full_script": "Success at Day 45 is the achievement of the agreed-upon Baseline Milestone—which we determined is [X Qualified Introductions/Pipeline Value], tracking to outperform your best producer by 1.5×. This triggers the second payment tranche and validates the ROI for leadership.<br><br>Reiterate the binary, measurable definition of the legal anchor.",
          "key_principle": "Reiterate binary, measurable milestone definition."
        },

        "were_in_a_budget_freeze_right_now": {
          "title": "We're in a Budget Freeze Right Now",
          "category": "Transition to Call Two",
          "trigger": "Timing objection due to budget constraints",
          "quick_response": "I completely understand timing constraints; capital planning is complex. That is exactly why we must formalize the Scope of Work now. Let's at least get the Engagement Letter reviewed and the risk-mitigated model in front of you—then you have a board-defensible, fully scoped option ready to greenlight the moment the budget window reopens in Q1.",
          "full_script": "I completely understand timing constraints; capital planning is complex. That is exactly why we must formalize the Scope of Work now. Let's at least get the Engagement Letter reviewed and the risk-mitigated model in front of you—then you have a board-defensible, fully scoped option ready to greenlight the moment the budget window reopens in Q1.<br><br>Validate the timing objection, but use the necessity of the scoped, de-risked model as leverage to maintain momentum and commitment.",
          "key_principle": "Use scoped model as leverage for timing objections."
        },

        "were_reorganizing_right_now": {
          "title": "We're Reorganizing Right Now",
          "category": "Transition to Call Two",
          "trigger": "Internal reorganization delaying decisions",
          "quick_response": "Reorganization is a key time for strategic planning. To ensure the Scope of Work aligns with the new structure, who is currently the economic buyer, and who needs to approve the capital allocation? We need to lock the decision path now so we can resume immediately once the internal changes stabilize.",
          "full_script": "Reorganization is a key time for strategic planning. To ensure the Scope of Work aligns with the new structure, who is currently the economic buyer, and who needs to approve the capital allocation? We need to lock the decision path now so we can resume immediately once the internal changes stabilize.<br><br>Treats chaos as necessary D.E.D.I. data, mapping the new approval flow.",
          "key_principle": "Treat reorganization as strategic planning opportunity."
        },

        "can_we_get_started_while_legal_reviews": {
          "title": "Can We Get Started While Legal Reviews?",
          "category": "Transition to Call Two",
          "trigger": "Request to begin work during contract review",
          "quick_response": "We can certainly begin the foundational strategy work—such as finalizing the segmentation logic—immediately upon receiving the signed Engagement Letter. However, full execution and infrastructure allocation require the contract to be executed. What is the typical turnaround time for legal review so we can set the start date precisely?",
          "full_script": "We can certainly begin the foundational strategy work—such as finalizing the segmentation logic—immediately upon receiving the signed Engagement Letter. However, full execution and infrastructure allocation require the contract to be executed. What is the typical turnaround time for legal review so we can set the start date precisely?<br><br>Shows readiness while protecting the advisor's posture; execution only proceeds upon signature.",
          "key_principle": "Show readiness while requiring signature for execution."
        },

        "whats_the_contract_term": {
          "title": "What's the Contract Term?",
          "category": "Transition to Call Two",
          "trigger": "Question about length of agreement",
          "quick_response": "The core mandate is structured as a 90-day engagement, with a critical 45-day milestone that governs the second payment tranche. This structure minimizes your risk while providing the necessary runway to establish performance metrics.",
          "full_script": "The core mandate is structured as a 90-day engagement, with a critical 45-day milestone that governs the second payment tranche. This structure minimizes your risk while providing the necessary runway to establish performance metrics.<br><br>States the standard term (90 days) and highlights the governing risk structure.",
          "key_principle": "State 90-day term with governing milestone structure."
        },

        "do_you_have_insurance": {
          "title": "Do You Have Insurance?",
          "category": "Transition to Call Two",
          "trigger": "Question about liability and risk coverage",
          "quick_response": "We operate under a comprehensive liability and compliance framework required for executive-level engagements. Legal and compliance requirements are explicitly addressed in the Engagement Letter. Are there any specific compliance boundaries or liability caps that your legal team typically requires us to align to?",
          "full_script": "We operate under a comprehensive liability and compliance framework required for executive-level engagements. Legal and compliance requirements are explicitly addressed in the Engagement Letter. Are there any specific compliance boundaries or liability caps that your legal team typically requires us to align to?<br><br>Acknowledge the legal need and pivot to asking about their required compliance parameters to maintain the peer-to-peer advisory frame.",
          "key_principle": "Acknowledge legal need, pivot to compliance parameters."
        },

        "can_we_do_an_nda_first": {
          "title": "Can We Do an NDA First?",
          "category": "Transition to Call Two",
          "trigger": "Request for confidentiality agreement before proceeding",
          "quick_response": "Absolutely. Confidentiality is non-negotiable in our work. Would you prefer we sign your NDA, or should I send over ours for your legal team's review? We want to remove this friction point immediately.",
          "full_script": "Absolutely. Confidentiality is non-negotiable in our work. Would you prefer we sign your NDA, or should I send over ours for your legal team's review? We want to remove this friction point immediately.<br><br>Agree immediately and remove the friction, showing professional compliance.",
          "key_principle": "Agree immediately to remove friction point."
        },

        // Internal Dynamics (10 handlers)
        "need_partner_approval": {
          "title": "Need Partner Approval",
          "category": "Internal Dynamics",
          "trigger": "Requires approval from business partner",
          "quick_response": "That makes perfect sense—partnerships are built on alignment. Who is your partner, and what specifically would they need to see to feel confident about this investment? We can structure the Scope of Work to directly address their key concerns.",
          "full_script": "That makes perfect sense—partnerships are built on alignment. Who is your partner, and what specifically would they need to see to feel confident about this investment? We can structure the Scope of Work to directly address their key concerns.<br><br>Treat this as an opportunity to expand the decision-making circle and gather more intelligence about the partnership dynamics.",
          "key_principle": "Expand decision circle, gather partnership intelligence."
        },

        "talk_to_team": {
          "title": "Talk to Team",
          "category": "Internal Dynamics",
          "trigger": "Needs to discuss with internal team",
          "quick_response": "Absolutely, this is exactly the kind of decision that benefits from team input. Who on your team would you like to include in the next call? We can walk through the Scope of Work together and address any questions they might have.",
          "full_script": "Absolutely, this is exactly the kind of decision that benefits from team input. Who on your team would you like to include in the next call? We can walk through the Scope of Work together and address any questions they might have.<br><br>Use this as an opportunity to expand the conversation and build consensus within their organization.",
          "key_principle": "Expand conversation, build internal consensus."
        },

        "legal_review": {
          "title": "Legal Review",
          "category": "Internal Dynamics",
          "trigger": "Requires legal department review",
          "quick_response": "Legal review is standard for engagements like this. What specific legal concerns typically come up in your review process? We can address them proactively in the Engagement Letter to make the review as smooth as possible.",
          "full_script": "Legal review is standard for engagements like this. What specific legal concerns typically come up in your review process? We can address them proactively in the Engagement Letter to make the review as smooth as possible.<br><br>Anticipate and address legal concerns before they become blockers.",
          "key_principle": "Anticipate and address legal concerns proactively."
        },

        "internal_team_exists": {
          "title": "Internal Team Exists",
          "category": "Internal Dynamics",
          "trigger": "Has existing internal sales/marketing team",
          "quick_response": "That's excellent—you have the foundation in place. Our engagement is designed to augment your existing team by providing the predictable pipeline they need to focus on closing. We handle the top-of-funnel complexity so your team can focus on what they do best.",
          "full_script": "That's excellent—you have the foundation in place. Our engagement is designed to augment your existing team by providing the predictable pipeline they need to focus on closing. We handle the top-of-funnel complexity so your team can focus on what they do best.<br><br>Position the engagement as a complement to their existing team, not a replacement.",
          "key_principle": "Complement existing team, don't replace.",
          "story_mode": {
            "title": "Story Mode: The Team Augmentation Story",
            "when_to_use": "Use when prospects worry you're replacing their team or questioning why they need you if they have SDRs/BDRs. Shows augmentation vs. replacement. 2-3 minute investment.",
            "script": "That's excellent — having an internal team is actually an <b>advantage</b>. Let me show you why.<br><br>(Pause, shift into story mode)<br><br>One of our clients had a <b>5-person SDR team</b> — good reps, solid process, decent results. They were booking about <b>25 meetings per month total</b> across the team.<br><br>When we first spoke, their VP of Sales asked the same question: <i>'Why do we need you if we already have a team?'</i><br><br>Fair question. Here's what we told them — and what actually happened.<br><br>We explained that we're not there to replace the team. We're there to <b>fuel the engine they've already built</b>. Their SDRs were spending 60% of their time prospecting, list-building, and cold outreach. Only 40% of their time was spent on actual conversations and follow-up.<br><br>We proposed this: let us handle the <b>top-of-funnel complexity</b> — the targeting, the messaging, the initial outreach. We'd deliver <b>qualified, booked meetings</b> directly to their calendar.<br><br>That way, their SDRs could focus <b>100% of their time</b> on what they do best: <i>qualifying, nurturing, and converting</i> the pipeline.<br><br>Within <b>45 days</b>, we'd added <b>14 qualified meetings</b> to their existing 25 — a <b>56% increase in pipeline</b> without hiring a single new rep.<br><br>By <b>day 90</b>, their team closed <b>7 additional deals worth $420K</b> — all from the meetings we delivered. Their SDRs got promoted because their numbers went up without working harder.<br><br>(Pause, bring it back)<br><br>That's the difference. We don't replace your team — we <b>augment them</b>. We handle the grinding, top-of-funnel work so your team can focus on what actually generates revenue: conversations and conversions.<br><br>You're not choosing between your team and us. You're giving your team the fuel they need to hit their numbers.<br><br>Now, to see if that makes sense: how many people are on your current sales team, and what's their average monthly output?"
          }
        },

        "champion_departure": {
          "title": "Champion Departure",
          "category": "Internal Dynamics",
          "trigger": "Key internal champion leaves the company",
          "quick_response": "That happens in growing companies. Who has taken over their responsibilities? We should connect with them right away to ensure continuity and get them up to speed on the value proposition.",
          "full_script": "That happens in growing companies. Who has taken over their responsibilities? We should connect with them right away to ensure continuity and get them up to speed on the value proposition.<br><br>Immediately identify and engage the new decision-maker to maintain momentum.",
          "key_principle": "Identify and engage new decision-maker immediately."
        },

        "decision_path_questions": {
          "title": "Decision Path Questions",
          "category": "Internal Dynamics",
          "trigger": "Questions about internal approval process",
          "quick_response": "That's a smart question. Can you walk me through how decisions like this typically get approved in your organization? Understanding the path helps us time our follow-up and prepare the right materials for each stakeholder.",
          "full_script": "That's a smart question. Can you walk me through how decisions like this typically get approved in your organization? Understanding the path helps us time our follow-up and prepare the right materials for each stakeholder.<br><br>Use this to map the decision-making process and identify all stakeholders.",
          "key_principle": "Map decision-making process and stakeholders."
        },

        "who_needs_to_see_this": {
          "title": "Who Needs to See This?",
          "category": "Internal Dynamics",
          "trigger": "Asking who else needs to review the proposal",
          "quick_response": "Great question. Typically, this involves the economic buyer, legal, finance, and any operational stakeholders. Who do you think would be the key people we'd want to include in the review process?",
          "full_script": "Great question. Typically, this involves the economic buyer, legal, finance, and any operational stakeholders. Who do you think would be the key people we'd want to include in the review process?<br><br>Help them identify all necessary stakeholders to ensure comprehensive buy-in.",
          "key_principle": "Identify all necessary stakeholders for buy-in."
        },

        "procurement_process": {
          "title": "Procurement Process",
          "category": "Internal Dynamics",
          "trigger": "Must go through formal procurement process",
          "quick_response": "Procurement processes are designed to protect the company—that's good governance. What are the key milestones in your procurement timeline? We can align our proposal delivery to match your process perfectly.",
          "full_script": "Procurement processes are designed to protect the company—that's good governance. What are the key milestones in your procurement timeline? We can align our proposal delivery to match your process perfectly.<br><br>Respect and align with their procurement process rather than trying to circumvent it.",
          "key_principle": "Respect and align with procurement process."
        },

        "we_have_an_rfp": {
          "title": "We Have an RFP",
          "category": "Internal Dynamics",
          "trigger": "Currently have an active RFP process",
          "quick_response": "RFPs are comprehensive processes. Since we're already deep into discovery and have the specific anchors for your business, we'd be happy to submit a formal response. What are the key evaluation criteria in your RFP?",
          "full_script": "RFPs are comprehensive processes. Since we're already deep into discovery and have the specific anchors for your business, we'd be happy to submit a formal response. What are the key evaluation criteria in your RFP?<br><br>Leverage the existing discovery work to create a compelling, customized RFP response.",
          "key_principle": "Leverage discovery work for customized RFP response."
        },

        // Process & Clarity (12 handlers)
        "vague_responses": {
          "title": "Vague Responses",
          "category": "Process & Clarity",
          "trigger": "Prospect gives unclear or vague answers",
          "quick_response": "I want to make sure I understand you correctly. When you say [repeat their vague statement], does that mean [clarify with specific example]? Getting precise here ensures we scope this accurately.",
          "full_script": "I want to make sure I understand you correctly. When you say [repeat their vague statement], does that mean [clarify with specific example]? Getting precise here ensures we scope this accurately.<br><br>Seek clarity and precision to ensure accurate scoping and anchoring.",
          "key_principle": "Seek clarity and precision for accurate scoping."
        },

        "dont_have_data": {
          "title": "Don't Have Data",
          "category": "Process & Clarity",
          "trigger": "Prospect doesn't have the requested metrics",
          "quick_response": "That's completely understandable—many companies don't track everything formally. Can you give me a directional sense or ballpark figure? We use these as anchors, not exact numbers, to ensure the scope is conservative and defensible.",
          "full_script": "That's completely understandable—many companies don't track everything formally. Can you give me a directional sense or ballpark figure? We use these as anchors, not exact numbers, to ensure the scope is conservative and defensible.<br><br>Accept ballpark estimates and explain their purpose in risk mitigation.",
          "key_principle": "Accept ballparks, explain purpose in risk mitigation."
        },

        "need_to_check": {
          "title": "Need to Check",
          "category": "Process & Clarity",
          "trigger": "Prospect needs to look up information",
          "quick_response": "Of course, accuracy is important. Why don't we schedule Discovery Part 2 for [specific time] to go through all the remaining anchors? That way we can get everything right the first time.",
          "full_script": "Of course, accuracy is important. Why don't we schedule Discovery Part 2 for [specific time] to go through all the remaining anchors? That way we can get everything right the first time.<br><br>Schedule a follow-up call to maintain momentum and ensure comprehensive data collection.",
          "key_principle": "Schedule follow-up to maintain momentum."
        },

        "dont_track_formally": {
          "title": "Don't Track Formally",
          "category": "Process & Clarity",
          "trigger": "Company doesn't formally track requested metrics",
          "quick_response": "That's common in many industries. Let's reconstruct from what you do know. Based on your experience, what's the general pattern you've seen with [specific metric]? We can use that to establish a conservative baseline.",
          "full_script": "That's common in many industries. Let's reconstruct from what you do know. Based on your experience, what's the general pattern you've seen with [specific metric]? We can use that to establish a conservative baseline.<br><br>Reconstruct metrics from experience and patterns to establish baselines.",
          "key_principle": "Reconstruct metrics from experience patterns."
        },

        "cant_answer": {
          "title": "Can't Answer",
          "category": "Process & Clarity",
          "trigger": "Prospect genuinely can't answer a question",
          "quick_response": "No problem at all. Who on your team would have that information? We can include them in our next conversation or I can follow up with them directly to get the complete picture.",
          "full_script": "No problem at all. Who on your team would have that information? We can include them in our next conversation or I can follow up with them directly to get the complete picture.<br><br>Identify the right person and expand the conversation to include them.",
          "key_principle": "Identify right person, expand conversation."
        },

        "deflects_question": {
          "title": "Deflects Question",
          "category": "Process & Clarity",
          "trigger": "Prospect avoids answering directly",
          "quick_response": "I understand this might be sensitive information. The reason I ask is that [specific anchor] directly affects the Milestone calculation. Without it, we risk scoping based on assumptions rather than your reality.",
          "full_script": "I understand this might be sensitive information. The reason I ask is that [specific anchor] directly affects the Milestone calculation. Without it, we risk scoping based on assumptions rather than your reality.<br><br>Explain the business purpose behind the question to reduce defensiveness.",
          "key_principle": "Explain business purpose to reduce defensiveness."
        },

        "why_does_this_matter": {
          "title": "Why Does This Matter?",
          "category": "Process & Clarity",
          "trigger": "Questioning relevance of data requests",
          "quick_response": "This matters because it's the anchor point for calculating your guaranteed baseline. If we get this wrong, we either over-promise (risking failure) or under-scope (leaving money on the table). It's the foundation of the risk mitigation structure.",
          "full_script": "This matters because it's the anchor point for calculating your guaranteed baseline. If we get this wrong, we either over-promise (risking failure) or under-scope (leaving money on the table). It's the foundation of the risk mitigation structure.<br><br>Connect the data point to the core value proposition of risk mitigation.",
          "key_principle": "Connect data to risk mitigation foundation."
        },

        "process_is_broken": {
          "title": "Process is Broken",
          "category": "Process & Clarity",
          "trigger": "Admission that current process has issues",
          "quick_response": "That's valuable insight. Where does the process typically break down? Understanding that helps us design the engagement to strengthen those weak points while we build the new pipeline.",
          "full_script": "That's valuable insight. Where does the process typically break down? Understanding that helps us design the engagement to strengthen those weak points while we build the new pipeline.<br><br>Use process breakdowns as diagnostic data to improve the engagement design.",
          "key_principle": "Use breakdowns as diagnostic data for design."
        },

        "were_rebuilding": {
          "title": "We're Rebuilding",
          "category": "Process & Clarity",
          "trigger": "Company is in the middle of process changes",
          "quick_response": "Growth often requires rebuilding. What's the target state you're building toward? We can design the engagement to feed that new process while providing the immediate pipeline you need during the transition.",
          "full_script": "Growth often requires rebuilding. What's the target state you're building toward? We can design the engagement to feed that new process while providing the immediate pipeline you need during the transition.<br><br>Align the engagement with their rebuilding efforts.",
          "key_principle": "Align engagement with rebuilding efforts."
        },

        "no_crm_tracking": {
          "title": "No CRM/Tracking",
          "category": "Process & Clarity",
          "trigger": "Lack of formal tracking systems",
          "quick_response": "That's fine—many of our best clients start this way. Let's focus on the functional outcomes. What would success look like for you in terms of new qualified meetings per month? We can work backward from there.",
          "full_script": "That's fine—many of our best clients start this way. Let's focus on the functional outcomes. What would success look like for you in terms of new qualified meetings per month? We can work backward from there.<br><br>Focus on outcomes rather than tracking mechanisms.",
          "key_principle": "Focus on outcomes over tracking mechanisms."
        },

        // Scope & Structure (11 handlers)
        "can_we_start_smaller": {
          "title": "Can We Start Smaller?",
          "category": "Scope & Structure",
          "trigger": "Request for reduced scope or smaller commitment",
          "quick_response": "We can certainly start with a focused pilot. What's the minimum viable scope that would prove the concept for you? We need to ensure it's large enough to demonstrate the 1.5× lift but small enough to be low-risk.",
          "full_script": "We can certainly start with a focused pilot. What's the minimum viable scope that would prove the concept for you? We need to ensure it's large enough to demonstrate the 1.5× lift but small enough to be low-risk.<br><br>Find the balance between proof of concept and meaningful results.",
          "key_principle": "Balance proof of concept with meaningful results."
        },

        "pilot_request": {
          "title": "Pilot Request",
          "category": "Scope & Structure",
          "trigger": "Wants to test with a pilot program",
          "quick_response": "Pilots are smart for evaluating new approaches. What success metrics would you use to determine if the pilot is working? We can structure it with clear milestones and evaluation points.",
          "full_script": "Pilots are smart for evaluating new approaches. What success metrics would you use to determine if the pilot is working? We can structure it with clear milestones and evaluation points.<br><br>Define success criteria upfront and structure evaluation points.",
          "key_principle": "Define success criteria and evaluation points."
        },

        "scope_reduction": {
          "title": "Scope Reduction",
          "category": "Scope & Structure",
          "trigger": "Wants to reduce the scope of work",
          "quick_response": "I understand wanting to start conservatively. What's your biggest concern about the full scope? We can adjust based on your risk tolerance while ensuring we can still deliver the baseline results.",
          "full_script": "I understand wanting to start conservatively. What's your biggest concern about the full scope? We can adjust based on your risk tolerance while ensuring we can still deliver the baseline results.<br><br>Address concerns and adjust while maintaining result delivery capability.",
          "key_principle": "Address concerns, adjust while maintaining results."
        },

        "phased_rollout": {
          "title": "Phased Rollout",
          "category": "Scope & Structure",
          "trigger": "Prefers gradual implementation",
          "quick_response": "Phased rollouts are excellent for managing change. How would you like to phase it? We can start with [initial phase] and expand based on results, with clear decision points at each stage.",
          "full_script": "Phased rollouts are excellent for managing change. How would you like to phase it? We can start with [initial phase] and expand based on results, with clear decision points at each stage.<br><br>Design phases with clear decision points based on results.",
          "key_principle": "Design phases with clear decision points."
        },

        "one_market_first": {
          "title": "One Market First",
          "category": "Scope & Structure",
          "trigger": "Wants to focus on single market initially",
          "quick_response": "That makes sense for testing. Which market do you want to start with? We need to ensure that market has sufficient TAM to support the baseline milestone while keeping the scope focused.",
          "full_script": "That makes sense for testing. Which market do you want to start with? We need to ensure that market has sufficient TAM to support the baseline milestone while keeping the scope focused.<br><br>Select market and validate TAM sufficiency.",
          "key_principle": "Select market, validate TAM sufficiency."
        },

        "market_too_niche": {
          "title": "Market Too Niche",
          "category": "Scope & Structure",
          "trigger": "Concern that target market is too specialized",
          "quick_response": "Niche markets can be highly profitable. The key is whether there are enough decision-makers and whether they have the budget to buy. What's the total addressable market size in this niche?",
          "full_script": "Niche markets can be highly profitable. The key is whether there are enough decision-makers and whether they have the budget to buy. What's the total addressable market size in this niche?<br><br>Assess TAM and buying capacity in niche markets.",
          "key_principle": "Assess TAM and buying capacity."
        },

        "geographic_constraints": {
          "title": "Geographic Constraints",
          "category": "Scope & Structure",
          "trigger": "Limited to specific geographic areas",
          "quick_response": "Geography can actually be an advantage for targeting. What geographic areas do you serve? We can focus our efforts there, which often leads to higher conversion rates due to local relationships.",
          "full_script": "Geography can actually be an advantage for targeting. What geographic areas do you serve? We can focus our efforts there, which often leads to higher conversion rates due to local relationships.<br><br>Leverage geographic focus for better targeting and conversion.",
          "key_principle": "Leverage geographic focus for better results."
        },

        "title_requirements": {
          "title": "Title Requirements",
          "category": "Scope & Structure",
          "trigger": "Specific title requirements for prospects",
          "quick_response": "Titles are important, but we focus on decision-making authority and budget control. What titles typically make buying decisions in your space? We can target those while maintaining flexibility.",
          "full_script": "Titles are important, but we focus on decision-making authority and budget control. What titles typically make buying decisions in your space? We can target those while maintaining flexibility.<br><br>Focus on authority and budget over specific titles.",
          "key_principle": "Focus on authority and budget over titles."
        },

        "capacity_concerns": {
          "title": "Capacity Concerns",
          "category": "Scope & Structure",
          "trigger": "Worry about handling increased volume",
          "quick_response": "Capacity is a valid concern. What's your current absorption rate? We can pace the delivery to match your capacity and build up gradually as you expand your team.",
          "full_script": "Capacity is a valid concern. What's your current absorption rate? We can pace the delivery to match your capacity and build up gradually as you expand your team.<br><br>Pace delivery to match current capacity and growth.",
          "key_principle": "Pace delivery to match capacity and growth."
        },

        "service_limitations": {
          "title": "Service Limitations",
          "category": "Scope & Structure",
          "trigger": "Specific service or industry limitations",
          "quick_response": "I understand those limitations. How do they affect your target market? We can design the campaign to work within those constraints while maximizing the opportunities that remain.",
          "full_script": "I understand those limitations. How do they affect your target market? We can design the campaign to work within those constraints while maximizing the opportunities that remain.<br><br>Work within limitations while maximizing available opportunities.",
          "key_principle": "Work within limitations, maximize opportunities."
        },

        "free_vs_paid_pilot": {
          "title": "Free vs Paid Pilot",
          "category": "Scope & Structure",
          "trigger": "Question about free trials vs paid pilots",
          "quick_response": "We don't offer free pilots because they require significant infrastructure investment. However, our paid pilot includes the guarantee that if we don't hit the milestone, you don't pay the full fee. It's effectively risk-free.",
          "full_script": "We don't offer free pilots because they require significant infrastructure investment. However, our paid pilot includes the guarantee that if we don't hit the milestone, you don't pay the full fee. It's effectively risk-free.<br><br>Explain the infrastructure requirement and risk mitigation structure.",
          "key_principle": "Explain infrastructure needs and risk mitigation."
        },

        // Contract & Legal (8 handlers)
        "contract_terms": {
          "title": "Contract Terms",
          "category": "Contract & Legal",
          "trigger": "Questions about contract length and terms",
          "quick_response": "The standard term is 90 days with a 45-day milestone that governs payment. This structure protects you while giving us the runway to prove results. Would you like me to explain any specific terms?",
          "full_script": "The standard term is 90 days with a 45-day milestone that governs payment. This structure protects you while giving us the runway to prove results. Would you like me to explain any specific terms?<br><br>Explain the 90-day structure and milestone-based payment.",
          "key_principle": "Explain 90-day structure and milestone payments."
        },

        "what_happens_after_90": {
          "title": "What Happens After 90 Days?",
          "category": "Contract & Legal",
          "trigger": "Questions about post-contract options",
          "quick_response": "After 90 days, you have three options: 1) Renew for another 90 days, 2) License the system for internal use, or 3) Purchase it outright. Most clients choose to renew based on the results.",
          "full_script": "After 90 days, you have three options: 1) Renew for another 90 days, 2) License the system for internal use, or 3) Purchase it outright. Most clients choose to renew based on the results.<br><br>Present clear post-contract pathways.",
          "key_principle": "Present clear post-contract pathways."
        },

        "ip_ownership": {
          "title": "IP Ownership",
          "category": "Contract & Legal",
          "trigger": "Questions about intellectual property rights",
          "quick_response": "We retain IP ownership of our proprietary systems and methodologies. At the end of the engagement, you have the option to license or purchase the IP for internal use. This is standard in advisory engagements.",
          "full_script": "We retain IP ownership of our proprietary systems and methodologies. At the end of the engagement, you have the option to license or purchase the IP for internal use. This is standard in advisory engagements.<br><br>Explain standard IP ownership terms and licensing options.",
          "key_principle": "Explain standard IP terms and licensing options."
        },

        "data_ownership": {
          "title": "Data Ownership",
          "category": "Contract & Legal",
          "trigger": "Questions about data rights and ownership",
          "quick_response": "Any data collected during the engagement belongs to you. We use it only for delivering the service and maintain strict confidentiality. This is clearly spelled out in the data protection section of the agreement.",
          "full_script": "Any data collected during the engagement belongs to you. We use it only for delivering the service and maintain strict confidentiality. This is clearly spelled out in the data protection section of the agreement.<br><br>Reassure on data ownership and confidentiality.",
          "key_principle": "Reassure on data ownership and confidentiality."
        },

        "nda_request": {
          "title": "NDA Request",
          "category": "Contract & Legal",
          "trigger": "Request for non-disclosure agreement",
          "quick_response": "Absolutely, we can execute an NDA immediately. Would you prefer to use yours or ours? This is standard practice for us and doesn't delay the process.",
          "full_script": "Absolutely, we can execute an NDA immediately. Would you prefer to use yours or ours? This is standard practice for us and doesn't delay the process.<br><br>Agree to NDA and offer to use their template.",
          "key_principle": "Agree to NDA, offer to use their template."
        },

        "insurance_compliance": {
          "title": "Insurance/Compliance",
          "category": "Contract & Legal",
          "trigger": "Questions about insurance, compliance, ITAR, FDA, industry regulations, or quality certifications",
          "quick_response": "Compliance is absolutely critical, and that's exactly the right concern to have. We work with highly regulated industries — aerospace, defense, medical devices — where brand integrity and regulatory compliance are everything. Our infrastructure is built enterprise-grade for these environments. But more importantly, that's what this call is: due diligence to scope an engagement model that protects your brand and compliance requirements first.",
          "full_script": "Compliance is absolutely critical, and that's exactly the right concern to have. We work with highly regulated industries — aerospace, defense, medical devices, family offices — where brand integrity and regulatory compliance are everything. If anybody understands the weight of compliance risk, it's us.<br><br>We've run engagements for ITAR-certified manufacturers, FDA-regulated medical device companies, and defense contractors. With them, you don't blast generic outreach — you earn trust, and every touch has to uphold their reputation and meet strict regulatory standards.<br><br>That's why our infrastructure is built to be enterprise-grade and compliance-first. This isn't spray-and-pray. It's a controlled system designed for reputable firms to reach decision-makers in a way that feels personal, relevant, and respectful — and meets your industry's regulatory requirements. The exact reason you're on this call is because that same system got through to you without looking like spam or violating compliance boundaries.<br><br>And just to be clear — that's what this call is: due diligence. We scope an engagement model that protects your brand and compliance requirements first, then shows where we can build a channel that creates consistent demand. The model itself is what tells us how to do that while retaining your integrity and meeting all regulatory standards.<br><br>During discovery, we'll ask about any specific compliance boundaries we should respect from day one — ITAR, FDA, data protection, whatever your industry requires. Those will be documented in the engagement letter's compliance sections, and we'll work with your compliance team to ensure everything meets your standards before anything goes out.<br><br>Does your team have specific compliance requirements we should be aware of? We can capture those now as part of the due diligence process.",
          "key_principle": "Acknowledge compliance as proof they care about quality. Leverage credibility with regulated industries, reframe as enterprise-grade infrastructure, then anchor on due diligence and the engagement model. Never dive into mechanism details — compliance boundaries are captured during discovery and formalized in the engagement letter."
        },

        "month_to_month": {
          "title": "Month-to-Month",
          "category": "Contract & Legal",
          "trigger": "Request for month-to-month terms",
          "quick_response": "Month-to-month doesn't provide the stability needed for the infrastructure investment required. The 90-day structure with milestone payments provides the perfect balance of commitment and protection.",
          "full_script": "Month-to-month doesn't provide the stability needed for the infrastructure investment required. The 90-day structure with milestone payments provides the perfect balance of commitment and protection.<br><br>Explain why longer terms are necessary for infrastructure investment.",
          "key_principle": "Explain need for commitment duration."
        },

        // Disqualification Signals (9 handlers)
        "time_waster_behaviors": {
          "title": "Time Waster Behaviors",
          "category": "Disqualification Signals",
          "trigger": "Prospect shows clear signs of not being serious",
          "quick_response": "I appreciate your time today. Based on our conversation, it seems this might not be the right fit at this time. I'll follow up in 6 months in case circumstances change.",
          "full_script": "I appreciate your time today. Based on our conversation, it seems this might not be the right fit at this time. I'll follow up in 6 months in case circumstances change.<br><br>Politely disqualify and create a soft follow-up plan.",
          "key_principle": "Politely disqualify with soft follow-up."
        },

        "wont_engage_discovery": {
          "title": "Won't Engage Discovery",
          "category": "Disqualification Signals",
          "trigger": "Refuses to participate in discovery process",
          "quick_response": "I understand. Without going through the discovery process to establish the anchors, we can't create an accurate Scope of Work. If you'd like to revisit this later when you're ready for a more detailed discussion, please don't hesitate to reach out.",
          "full_script": "I understand. Without going through the discovery process to establish the anchors, we can't create an accurate Scope of Work. If you'd like to revisit this later when you're ready for a more detailed discussion, please don't hesitate to reach out.<br><br>Explain the necessity of discovery for accurate scoping.",
          "key_principle": "Explain necessity of discovery process."
        },

        "referral_only_absolutist": {
          "title": "Referral-Only Absolutist",
          "category": "Disqualification Signals",
          "trigger": "Insists they only work with referrals",
          "quick_response": "I respect that position. Since our model focuses on systematic, outbound-driven growth rather than referral networks, this probably isn't the right fit. Best of luck with your referral-based approach.",
          "full_script": "I respect that position. Since our model focuses on systematic, outbound-driven growth rather than referral networks, this probably isn't the right fit. Best of luck with your referral-based approach.<br><br>Respect their position and disqualify politely.",
          "key_principle": "Respect position, disqualify politely."
        },

        "no_conversion_infrastructure": {
          "title": "No Conversion Infrastructure",
          "category": "Disqualification Signals",
          "trigger": "Lacks basic systems to handle leads",
          "quick_response": "Based on what you've shared, it sounds like you might need to build some foundational infrastructure first before adding new lead flow. I'd recommend focusing on that before considering additional lead generation.",
          "full_script": "Based on what you've shared, it sounds like you might need to build some foundational infrastructure first before adding new lead flow. I'd recommend focusing on that before considering additional lead generation.<br><br>Recommend building infrastructure before lead generation.",
          "key_principle": "Recommend infrastructure building first."
        },

        "unqualified_prospect": {
          "title": "Unqualified Prospect",
          "category": "Disqualification Signals",
          "trigger": "Prospect doesn't meet basic qualification criteria",
          "quick_response": "Thank you for your time. Based on our discussion, it seems we're not the right fit for your current situation. I'll note this in our system in case your needs change in the future.",
          "full_script": "Thank you for your time. Based on our discussion, it seems we're not the right fit for your current situation. I'll note this in our system in case your needs change in the future.<br><br>Politely disqualify and create a follow-up note.",
          "key_principle": "Politely disqualify with follow-up note."
        },

        // Mid-Discovery Issues (8 handlers)
        "mentions_referrals_data": {
          "title": "Mentions Referrals (Data?)",
          "category": "Mid-Discovery Issues",
          "trigger": "Prospect mentions referral-based lead generation",
          "quick_response": "Referrals are great for warm leads. Our system is designed to complement your referral efforts by providing a systematic approach to expand your total pipeline. What percentage of your current business comes from referrals?",
          "full_script": "Referrals are great for warm leads. Our system is designed to complement your referral efforts by providing a systematic approach to expand your total pipeline. What percentage of your current business comes from referrals?<br><br>Position as complementary to referrals, not replacement.",
          "key_principle": "Position as complementary to referrals."
        },

        "mentions_internal_team_data": {
          "title": "Mentions Internal Team (Data?)",
          "category": "Mid-Discovery Issues",
          "trigger": "Prospect mentions their internal sales/marketing team",
          "quick_response": "That's excellent that you have a strong internal team. Our engagement is designed to provide them with a steady flow of qualified opportunities they can focus on converting, rather than prospecting. How many people are on your current sales team?",
          "full_script": "That's excellent that you have a strong internal team. Our engagement is designed to provide them with a steady flow of qualified opportunities they can focus on converting, rather than prospecting. How many people are on your current sales team?<br><br>Position as providing pipeline to existing team.",
          "key_principle": "Position as pipeline provider to existing team."
        },

        "brand_risk_spam": {
          "title": "Brand Risk/Spam",
          "category": "Mid-Discovery Issues",
          "trigger": "Concern about brand reputation from outbound efforts",
          "quick_response": "Brand protection is absolutely critical. We use enterprise-grade infrastructure and compliance protocols that ensure all outreach is professional and permission-based. Our deliverability rates are industry-leading, and we have strict opt-out processes. Have you had negative experiences with outbound prospecting in the past?",
          "full_script": "Brand protection is absolutely critical. We use enterprise-grade infrastructure and compliance protocols that ensure all outreach is professional and permission-based. Our deliverability rates are industry-leading, and we have strict opt-out processes. Have you had negative experiences with outbound prospecting in the past?<br><br>Address brand concerns with compliance and quality assurances.",
          "key_principle": "Address brand concerns with compliance assurances.",
          "story_mode": {
            "title": "Story Mode: The Family Office Brand Protection Story",
            "when_to_use": "Use when brand risk is a major concern, especially for high-trust industries (consultancies, family offices, boutiques). Shows how you protect brand integrity through story. 2-3 minute investment.",
            "script": "Totally fair — and that's actually the <u>right concern to have</u>. We work with groups where nothing matters more than the integrity of their name and brand — family offices, boutique consultancies, corporate development teams. If anybody understands the weight of brand risk, it's us.<br><br>Let me walk you through how we've handled this.<br><br>(Pause, shift into story mode)<br><br>We've run engagements for <b>family offices</b>, and those are some of the <b>most brand-sensitive groups on the planet</b>. We've sat across the table from CIOs, asset managers, even family principals. With them, you don't blast deals — you earn trust, and every touch has to uphold their reputation.<br><br>One family office came to us with deep concerns. They'd seen competitors destroy their brand with <i>spray-and-pray LinkedIn messages</i> and generic cold emails that made them look desperate. They needed demand, but they couldn't afford to look amateur.<br><br>Here's what we did.<br><br>We spent <b>two weeks extracting their institutional knowledge</b> — 40 years of legacy, the language their world uses, the outcomes that matter to their buyers. Then our campaign team designed messaging that didn't sound like 'marketing' — it sounded like a <b>peer-level introduction</b> from someone who understands their world.<br><br>We deployed that through our <b>private infrastructure</b> — enterprise-grade, controlled, compliant. This isn't spray-and-pray. It's a controlled system designed for reputable firms to reach decision-makers in a way that feels personal, relevant, and respectful.<br><br>Within <b>45 days</b>, <b>21 qualified meetings</b> with sell-side contacts they needed. By <b>day 90</b>, <b>$1.8M in new mandates closed</b>.<br><br>And here's what they told us: <i>'Not a single prospect mentioned feeling spammed. They all thought we were referred.'</i><br><br>(Pause, bring it back)<br><br>The exact reason you're on this call is because that same system got through to you without looking like spam. That's the infrastructure at work.<br><br>And just to be clear — that's what this call is: <b>due diligence</b>. We scope an engagement model that protects your brand first, then shows where we can build a channel that creates consistent demand. The model itself is what tells us how to do that while retaining your integrity.<br><br>Now, to see if that makes sense for your business: have you had negative experiences with outbound prospecting in the past? What went wrong?"
          }
        },

        "capacity_overwhelm": {
          "title": "Capacity Overwhelm",
          "category": "Mid-Discovery Issues",
          "trigger": "Prospect worried about being overwhelmed by leads",
          "quick_response": "That's a smart concern. We pace delivery based on your absorption capacity, not our generation capacity. What's the maximum number of new qualified meetings your team can handle per month without getting overwhelmed?",
          "full_script": "That's a smart concern. We pace delivery based on your absorption capacity, not our generation capacity. What's the maximum number of new qualified meetings your team can handle per month without getting overwhelmed?<br><br>Emphasize capacity-controlled pacing.",
          "key_principle": "Emphasize capacity-controlled pacing."
        },

        "sales_cycle_too_long": {
          "title": "Sales Cycle Too Long",
          "category": "Mid-Discovery Issues",
          "trigger": "Extended sales cycles that affect ROI calculations",
          "quick_response": "Sales cycle length is a critical factor. If your cycle is over 90 days, we anchor to Pipeline Value rather than realized revenue. This protects both sides. What's your typical sales cycle length?",
          "full_script": "Sales cycle length is a critical factor. If your cycle is over 90 days, we anchor to Pipeline Value rather than realized revenue. This protects both sides. What's your typical sales cycle length?<br><br>Explain impact on anchoring strategy.",
          "key_principle": "Explain impact on anchoring strategy."
        },

        "close_rate_problems": {
          "title": "Close Rate Problems",
          "category": "Mid-Discovery Issues",
          "trigger": "Admission of poor conversion rates",
          "quick_response": "Close rate challenges are common. We anchor our guarantee to qualified introductions, not closed deals, because conversion is within your control. What's your current close rate on qualified opportunities?",
          "full_script": "Close rate challenges are common. We anchor our guarantee to qualified introductions, not closed deals, because conversion is within your control. What's your current close rate on qualified opportunities?<br><br>Clarify that conversion responsibility remains with client.",
          "key_principle": "Clarify conversion responsibility with client."
        },

        "founder_dependency": {
          "title": "Founder Dependency",
          "category": "Mid-Discovery Issues",
          "trigger": "Heavy reliance on founder for sales success",
          "quick_response": "Founder involvement is a strength. We can pace our delivery to match your availability while building scalable processes. What's the maximum number of meetings you can personally handle per month?",
          "full_script": "Founder involvement is a strength. We can pace our delivery to match your availability while building scalable processes. What's the maximum number of meetings you can personally handle per month?<br><br>Leverage founder strength while planning for scalability.",
          "key_principle": "Leverage founder strength with scalability planning."
        },

        "high_churn": {
          "title": "High Churn",
          "category": "Mid-Discovery Issues",
          "trigger": "High customer churn affecting LTV calculations",
          "quick_response": "Churn rate significantly impacts the economics. We use conservative LTV estimates to ensure our projections are realistic. What's your current customer churn rate?",
          "full_script": "Churn rate significantly impacts the economics. We use conservative LTV estimates to ensure our projections are realistic. What's your current customer churn rate?<br><br>Factor churn into conservative LTV calculations.",
          "key_principle": "Factor churn into conservative LTV calculations."
        },

        // Tic-Tac-Toe Variations (9 handlers)
        "it_depends_tic": {
          "title": "\"It Depends\" (Tic)",
          "category": "Tic-Tac-Toe Variations",
          "trigger": "Prospect says 'it depends' when asked about process repeatability",
          "quick_response": "I understand that nuance exists. The key question is: in the majority of cases, do you have a repeatable process that converts qualified introductions into customers? If the answer is yes, that's the 'Tic' we need.",
          "full_script": "I understand that nuance exists. The key question is: in the majority of cases, do you have a repeatable process that converts qualified introductions into customers? If the answer is yes, that's the 'Tic' we need.<br><br>Cut through 'it depends' to get to the core repeatability question.",
          "key_principle": "Cut through nuance to core repeatability."
        },

        "not_repeatable_tic": {
          "title": "Not Repeatable (Tic)",
          "category": "Tic-Tac-Toe Variations",
          "trigger": "Prospect admits process is not repeatable",
          "quick_response": "That's actually perfect for us. Let's reconstruct your winning process from your last successful deal. That becomes the baseline we feed with new qualified introductions.",
          "full_script": "That's actually perfect for us. Let's reconstruct your winning process from your last successful deal. That becomes the baseline we feed with new qualified introductions.<br><br>Turn non-repeatability into an opportunity to build the baseline process.",
          "key_principle": "Turn non-repeatability into baseline-building opportunity."
        },

        "hedged_tic": {
          "title": "Hedged Tic",
          "category": "Tic-Tac-Toe Variations",
          "trigger": "Prospect hedges on process repeatability",
          "quick_response": "I hear the hedging. Let me ask this directly: If I brought you a qualified introduction tomorrow who met your criteria, would you have a process to convert them? That's really what matters.",
          "full_script": "I hear the hedging. Let me ask this directly: If I brought you a qualified introduction tomorrow who met your criteria, would you have a process to convert them? That's really what matters.<br><br>Cut through hedging to direct yes/no on core capability.",
          "key_principle": "Cut through hedging to direct capability question."
        },

        "conditional_tic": {
          "title": "Conditional Tic",
          "category": "Tic-Tac-Toe Variations",
          "trigger": "Process repeatability depends on conditions",
          "quick_response": "Conditions are fair. As long as you have a process that works in the majority of cases that fit your target profile, that's the foundation we need. What are the key conditions that make your process work?",
          "full_script": "Conditions are fair. As long as you have a process that works in the majority of cases that fit your target profile, that's the foundation we need. What are the key conditions that make your process work?<br><br>Accept reasonable conditions while establishing core repeatability.",
          "key_principle": "Accept reasonable conditions for repeatability."
        },

        "rejects_a_b_c_tac": {
          "title": "Rejects A/B/C (Tac)",
          "category": "Tic-Tac-Toe Variations",
          "trigger": "Prospect rejects the qualification criteria",
          "quick_response": "I understand your perspective. What criteria would you use to determine if a prospect is qualified? We want to make sure we're aligned on what constitutes a real opportunity for you.",
          "full_script": "I understand your perspective. What criteria would you use to determine if a prospect is qualified? We want to make sure we're aligned on what constitutes a real opportunity for you.<br><br>Seek alternative criteria while maintaining qualification focus.",
          "key_principle": "Seek alternative criteria while maintaining focus."
        },

        "wants_to_narrow_tac": {
          "title": "Wants to Narrow (Tac)",
          "category": "Tic-Tac-Toe Variations",
          "trigger": "Prospect wants stricter qualification criteria",
          "quick_response": "Stricter criteria can be good for quality. The challenge is that overly narrow criteria reduce the total addressable market. What's your concern about the broader A/B/C criteria?",
          "full_script": "Stricter criteria can be good for quality. The challenge is that overly narrow criteria reduce the total addressable market. What's your concern about the broader A/B/C criteria?<br><br>Balance quality concerns with market size implications.",
          "key_principle": "Balance quality with market size implications."
        },

        "toe_process_questions": {
          "title": "Toe Process Questions",
          "category": "Tic-Tac-Toe Variations",
          "trigger": "Questions about the verification process",
          "quick_response": "The verification process is designed to be low-friction. You'll receive a simple form after each meeting asking if the prospect met the agreed criteria. If yes, it counts toward the milestone. If no, we replace them.",
          "full_script": "The verification process is designed to be low-friction. You'll receive a simple form after each meeting asking if the prospect met the agreed criteria. If yes, it counts toward the milestone. If no, we replace them.<br><br>Explain the simple, low-friction verification process.",
          "key_principle": "Explain simple, low-friction verification."
        },

        "dispute_resolution": {
          "title": "Dispute Resolution",
          "category": "Tic-Tac-Toe Variations",
          "trigger": "Questions about how disputes are handled",
          "quick_response": "Disputes are resolved by referring back to the agreed A/B/C criteria. Since you control the verification, you have the final say on whether criteria were met. Our focus is on providing qualified introductions.",
          "full_script": "Disputes are resolved by referring back to the agreed A/B/C criteria. Since you control the verification, you have the final say on whether criteria were met. Our focus is on providing qualified introductions.<br><br>Establish clear dispute resolution through agreed criteria.",
          "key_principle": "Establish clear dispute resolution process."
        },

        "verification_timing": {
          "title": "Verification Timing",
          "category": "Tic-Tac-Toe Variations",
          "trigger": "Questions about timing of verification process",
          "quick_response": "Verification occurs after the initial meeting, typically within 48-72 hours. This gives you time to assess fit while maintaining momentum. What's your preference for timing?",
          "full_script": "Verification occurs after the initial meeting, typically within 48-72 hours. This gives you time to assess fit while maintaining momentum. What's your preference for timing?<br><br>Explain standard timing and seek client preference.",
          "key_principle": "Explain standard timing, accommodate preferences."
        },

        // Integration/Close Issues (7 handlers)
        "price_shock": {
          "title": "Price Shock",
          "category": "Integration/Close Issues",
          "trigger": "Prospect reacts negatively to the price",
          "quick_response": "I understand price is always a consideration. The fee is positioned as a capital allocation that generates 3-5x ROI within 90 days. Compared to your current cost of acquisition, how does this compare?",
          "full_script": "I understand price is always a consideration. The fee is positioned as a capital allocation that generates 3-5x ROI within 90 days. Compared to your current cost of acquisition, how does this compare?<br><br>Reframe as investment with ROI comparison.",
          "key_principle": "Reframe as investment with ROI comparison."
        },

        "comparing_to_last_vendor": {
          "title": "Comparing to Last Vendor",
          "category": "Integration/Close Issues",
          "trigger": "Prospect compares to previous vendor pricing",
          "quick_response": "Comparing to previous vendors is smart. Our fee includes the guarantee and risk mitigation that most vendors don't offer. What's the biggest difference you've noticed between our approach and your previous vendor?",
          "full_script": "Comparing to previous vendors is smart. Our fee includes the guarantee and risk mitigation that most vendors don't offer. What's the biggest difference you've noticed between our approach and your previous vendor?<br><br>Highlight unique value propositions over price comparison.",
          "key_principle": "Highlight unique value over price comparison."
        },

        "whats_included": {
          "title": "What's Included?",
          "category": "Integration/Close Issues",
          "trigger": "Questions about scope of deliverables",
          "quick_response": "Everything needed to hit the milestone is included: the infrastructure, messaging, execution, and ongoing optimization. We don't nickel-and-dime—we deliver a complete solution.",
          "full_script": "Everything needed to hit the milestone is included: the infrastructure, messaging, execution, and ongoing optimization. We don't nickel-and-dime—we deliver a complete solution.<br><br>Emphasize comprehensive, all-inclusive approach.",
          "key_principle": "Emphasize comprehensive, all-inclusive solution."
        },

        "when_can_we_start": {
          "title": "When Can We Start?",
          "category": "Integration/Close Issues",
          "trigger": "Questions about implementation timeline",
          "quick_response": "We can begin onboarding immediately upon signature. Full execution typically takes 2-4 weeks for infrastructure setup. What's your ideal start date?",
          "full_script": "We can begin onboarding immediately upon signature. Full execution typically takes 2-4 weeks for infrastructure setup. What's your ideal start date?<br><br>Provide realistic timeline and seek client preference.",
          "key_principle": "Provide realistic timeline, seek client preference."
        },

        "onboarding_questions": {
          "title": "Onboarding Questions",
          "category": "Integration/Close Issues",
          "trigger": "Questions about the onboarding process",
          "quick_response": "Onboarding is streamlined: we collect your assets, finalize messaging, and set up tracking. You'll have a dedicated point person, and we provide templates for everything needed.",
          "full_script": "Onboarding is streamlined: we collect your assets, finalize messaging, and set up tracking. You'll have a dedicated point person, and we provide templates for everything needed.<br><br>Describe streamlined, supportive onboarding process.",
          "key_principle": "Describe streamlined, supportive process."
        },

        "communication_cadence": {
          "title": "Communication Cadence",
          "category": "Integration/Close Issues",
          "trigger": "Questions about communication frequency",
          "quick_response": "We align communication to your preferred tempo. Typically, it's weekly updates with bi-weekly calls. Daily updates are available if you prefer more frequent communication.",
          "full_script": "We align communication to your preferred tempo. Typically, it's weekly updates with bi-weekly calls. Daily updates are available if you prefer more frequent communication.<br><br>Offer flexible communication aligned to client preference.",
          "key_principle": "Offer flexible communication aligned to preference."
        },

        "success_definition": {
          "title": "Success Definition",
          "category": "Integration/Close Issues",
          "trigger": "Questions about how success is measured",
          "quick_response": "Success is the 45-day milestone: outperforming your current baseline by 1.5x in qualified meetings. Everything is tracked transparently, and you control the verification process.",
          "full_script": "Success is the 45-day milestone: outperforming your current baseline by 1.5x in qualified meetings. Everything is tracked transparently, and you control the verification process.<br><br>Define clear, measurable success criteria.",
          "key_principle": "Define clear, measurable success criteria."
        },

        // Post-Scope Issues (7 handlers)
        "ghost_no_response": {
          "title": "Ghost/No Response",
          "category": "Post-Scope Issues",
          "trigger": "Prospect goes silent after receiving scope",
          "quick_response": "I wanted to follow up on the Scope of Work I sent. Have you had a chance to review it? I'm happy to walk through any questions or concerns you might have.",
          "full_script": "I wanted to follow up on the Scope of Work I sent. Have you had a chance to review it? I'm happy to walk through any questions or concerns you might have.<br><br>Re-engage with gentle follow-up offering support.",
          "key_principle": "Re-engage with gentle follow-up."
        },

        "looks_good_but": {
          "title": "Looks Good BUT...",
          "category": "Post-Scope Issues",
          "trigger": "Prospect likes scope but raises objections",
          "quick_response": "I'm glad the scope looks good. What's the concern that's holding you back? I'd like to address it directly so we can move forward.",
          "full_script": "I'm glad the scope looks good. What's the concern that's holding you back? I'd like to address it directly so we can move forward.<br><br>Isolate and address the specific objection.",
          "key_principle": "Isolate and address specific objection."
        },

        "new_objections": {
          "title": "New Objections",
          "category": "Post-Scope Issues",
          "trigger": "Prospect raises new objections after scope",
          "quick_response": "That's a valid concern. How does this objection change your view of the overall opportunity? I'd like to understand the impact so I can address it properly.",
          "full_script": "That's a valid concern. How does this objection change your view of the overall opportunity? I'd like to understand the impact so I can address it properly.<br><br>Understand objection's impact on overall decision.",
          "key_principle": "Understand objection's impact on decision."
        },

        "legal_has_redlines": {
          "title": "Legal Has Redlines",
          "category": "Post-Scope Issues",
          "trigger": "Legal team has concerns with contract terms",
          "quick_response": "Legal review is important. What specific concerns did they raise? Most of our terms are standard, but I'm happy to address any legitimate concerns they have.",
          "full_script": "Legal review is important. What specific concerns did they raise? Most of our terms are standard, but I'm happy to address any legitimate concerns they have.<br><br>Address specific legal concerns directly.",
          "key_principle": "Address specific legal concerns directly."
        },

        "need_to_compare": {
          "title": "Need to Compare",
          "category": "Post-Scope Issues",
          "trigger": "Prospect wants to compare with other options",
          "quick_response": "Comparing options is smart. What are you comparing us against? I'd like to understand the key differences so I can highlight our unique advantages.",
          "full_script": "Comparing options is smart. What are you comparing us against? I'd like to understand the key differences so I can highlight our unique advantages.<br><br>Understand comparison criteria and highlight differentiators.",
          "key_principle": "Understand comparison criteria."
        },

        "can_we_modify": {
          "title": "Can We Modify?",
          "category": "Post-Scope Issues",
          "trigger": "Prospect wants to modify terms or scope",
          "quick_response": "Modifications are possible within reason. What specifically would you like to change? I want to make sure we can accommodate your needs while maintaining the core value proposition.",
          "full_script": "Modifications are possible within reason. What specifically would you like to change? I want to make sure we can accommodate your needs while maintaining the core value proposition.<br><br>Assess modification requests against core value.",
          "key_principle": "Assess modifications against core value."
        },

        "immediate_yes": {
          "title": "Immediate Yes",
          "category": "Post-Scope Issues",
          "trigger": "Prospect immediately agrees to proceed",
          "quick_response": "Excellent! I'll prepare the Engagement Letter and Invoice right away. We can have this signed and onboarding started within 24 hours.",
          "full_script": "Excellent! I'll prepare the Engagement Letter and Invoice right away. We can have this signed and onboarding started within 24 hours.<br><br>Accelerate process for immediate agreement.",
          "key_principle": "Accelerate process for immediate agreement."
        },

        // Edge Cases & Unexpected - 10 handlers
        "i_love_this_lets_sign_today": {
          "title": "I Love This, Let's Sign Today",
          "category": "Edge Cases & Unexpected",
          "trigger": "Immediate enthusiastic agreement to proceed",
          "quick_response": "That's excellent news. I'm moving to formalize the Engagement Letter and Invoice immediately and will send both in one package within the hour. Once executed, onboarding commences within 24 hours. Sound good?",
          "full_script": "That's excellent news. I'm moving to formalize the Engagement Letter and Invoice immediately and will send both in one package within the hour. Once executed, onboarding commences within 24 hours. Sound good?<br><br>When a verbal 'yes' occurs, compress steps. The strategy is the Combined Close (EL + Invoice) sent immediately, leveraging the momentum. Readiness signals control.",
          "key_principle": "Compress steps with Combined Close on immediate yes."
        },

        "were_getting_acquired": {
          "title": "We're Getting Acquired",
          "category": "Edge Cases & Unexpected",
          "trigger": "Company acquisition affecting decision-making",
          "quick_response": "That’s a critical development. M&A processes often prioritize clean revenue growth or pipeline certainty. We can scope the engagement to generate Pipeline Value that makes the acquisition thesis more robust. Will having a risk-mitigated Scope of Work, anchored to a 1.5× pipeline increase, strengthen the growth narrative for the final valuation?",
          "full_script": "That’s a critical development. M&A processes often prioritize clean revenue growth or pipeline certainty. We can scope the engagement to generate Pipeline Value that makes the acquisition thesis more robust. Will having a risk-mitigated Scope of Work, anchored to a 1.5× pipeline increase, strengthen the growth narrative for the final valuation?<br><br>Reframe the engagement as a strategic asset for the due diligence process and valuation.",
          "key_principle": "Reframe as strategic asset for M&A due diligence."
        },

        "we_just_lost_our_biggest_client": {
          "title": "We Just Lost Our Biggest Client",
          "category": "Edge Cases & Unexpected",
          "trigger": "Major client loss creating urgency",
          "quick_response": "I hear you; losing a key account is a massive pressure point. That shifts the priority from 'growth' to 'critical LTV replacement.' Let's scope the engagement to generate Pipeline Value that exceeds that loss within the next 90 days. Our structure ensures the investment is focused on replacement with guaranteed downside protection.",
          "full_script": "I hear you; losing a key account is a massive pressure point. That shifts the priority from 'growth' to 'critical LTV replacement.' Let's scope the engagement to generate Pipeline Value that exceeds that loss within the next 90 days. Our structure ensures the investment is focused on replacement with guaranteed downside protection.<br><br>Validate the crisis, then re-anchor the fee as an urgent capital allocation to replace the lost LTV, making the solution an undeniable financial necessity.",
          "key_principle": "Reframe as urgent LTV replacement opportunity."
        },

        "we_have_an_emergency_can_we_reschedule": {
          "title": "We Have an Emergency, Can We Reschedule?",
          "category": "Edge Cases & Unexpected",
          "trigger": "Urgent situation requiring immediate rescheduling",
          "quick_response": "Of course, completely understand. I'll make sure our team holds your file open and prioritizes the Scope of Work build. My assistant will send a quick link to reschedule for [Suggest time within 48-72 hours] so we can capture the final anchors and finalize the Scope of Work.",
          "full_script": "Of course, completely understand. I'll make sure our team holds your file open and prioritizes the Scope of Work build. My assistant will send a quick link to reschedule for [Suggest time within 48-72 hours] so we can capture the final anchors and finalize the Scope of Work.<br><br>Maintain professional composure (high QOE™). Accept the urgency, but manage logistics professionally, using an assistant/scheduler alias if appropriate, and immediately rescheduling to maintain momentum.",
          "key_principle": "Maintain composure, manage logistics professionally."
        },

        "the_person_you_need_to_talk_to_just_left": {
          "title": "The Person You Need to Talk to Just Left",
          "category": "Edge Cases & Unexpected",
          "trigger": "Key contact departure changing decision path",
          "quick_response": "That is unfortunate news, but thank you for letting me know. To ensure we align with the new structure: who has inherited the budget and oversight for commercial growth initiatives? And who is the new economic buyer we should arm with the Scope of Work?",
          "full_script": "That is unfortunate news, but thank you for letting me know. To ensure we align with the new structure: who has inherited the budget and oversight for commercial growth initiatives? And who is the new economic buyer we should arm with the Scope of Work?<br><br>This is a failure in mapping the Decision Path (D.E.D.I.™). Pivot immediately to diagnosing the new reporting structure and finding the new economic buyer.",
          "key_principle": "Pivot to map new decision architecture."
        },

        "can_we_hire_you_to_do_something_else_instead": {
          "title": "Can We Hire You to Do Something Else Instead?",
          "category": "Edge Cases & Unexpected",
          "trigger": "Request to pivot to different service offering",
          "quick_response": "Our model is designed to architect the growth strategy and then deploy qualified demand into a functional system. We are here to fuel the engine, not rebuild your internal staff or manage training. If we were to install a steady flow of qualified interest, who internally would be responsible for converting that demand into a signed client? We need to establish clear ownership.",
          "full_script": "We specialize in engineering predictable revenue outcomes tied to internal benchmarks. While we don't execute [Specific request], the constraint you just mentioned is often solved by having a predictable pipeline that de-risks capital commitment. Let's focus on anchoring that pipeline certainty first.<br><br>Redirect the pivot request back to the core P.A.R.M.™ function: generating pipeline certainty and de-risking the capital allocation.",
          "key_principle": "Redirect to core P.A.R.M.™ pipeline function."
        },

        "can_you_just_train_our_team_instead": {
          "title": "Can You Just Train Our Team Instead?",
          "category": "Edge Cases & Unexpected",
          "trigger": "Request for training instead of execution",
          "quick_response": "Our mandate is to architect the revenue model and then deploy vetted execution infrastructure to hit the Day-45 Milestone. We are here to fuel the fire, not staff the engine. If we install a predictable channel, who internally would be responsible for converting that demand into a signed client? We need to establish clear ownership.",
          "full_script": "Our mandate is to architect the revenue model and then deploy vetted execution infrastructure to hit the Day-45 Milestone. We are here to fuel the fire, not staff the engine. If we install a predictable channel, who internally would be responsible for converting that demand into a signed client? We need to establish clear ownership.<br><br>The advisory role is about defining the engine, not staffing it. Clarify the accountability boundary: the advisor owns the input (interest creation), the client owns the conversion (staffing).",
          "key_principle": "Clarify input vs conversion accountability."
        },

        "were_shutting_down": {
          "title": "We're Shutting Down",
          "category": "Edge Cases & Unexpected",
          "trigger": "Company closure or dissolution",
          "quick_response": "Thank you for the clarity. I wish you the best of luck with the transition.",
          "full_script": "Thank you for the clarity. I wish you the best of luck with the transition.<br><br>Exit cleanly. Disqualification is a win, protecting the advisor's time and resources.",
          "key_principle": "Exit cleanly when company is dissolving."
        },

        "we_just_raised_funding_lets_go_bigger": {
          "title": "We Just Raised Funding, Let's Go Bigger",
          "category": "Edge Cases & Unexpected",
          "trigger": "Capital infusion enabling larger scope",
          "quick_response": "That is excellent news and confirms our thesis on market readiness. We always anchor the initial 90-day scope to your *current* absorption capacity to protect the win rate. Let's execute this baseline pilot, and if we hit the Day-45 milestone early, we can immediately execute a Change Order to expand the scope into new markets.",
          "full_script": "That is excellent news and confirms our thesis on market readiness. We always anchor the initial 90-day scope to your *current* absorption capacity to protect the win rate. Let's execute this baseline pilot, and if we hit the Day-45 milestone early, we can immediately execute a Change Order to expand the scope into new markets.<br><br>Acknowledge the capital, but lock the pilot scope based on risk mitigation and capacity constraints. Future expansion is conditional on performance.",
          "key_principle": "Lock pilot scope, expand conditionally on performance."
        },

        "our_competitor_just_did_this_we_need_it_now": {
          "title": "Our Competitor Just Did This, We Need It Now",
          "category": "Edge Cases & Unexpected",
          "trigger": "Competitive urgency requiring immediate action",
          "quick_response": "That competitive intelligence is critical. Urgency is exactly why we move fast: to define your outperformance baseline and lock the risk clause. We can formalize the Engagement Letter today to begin the strategic architecture immediately, but execution will still require two to four weeks to allocate and warm the proprietary infrastructure needed to hit the Day-45 Milestone safely.",
          "full_script": "That competitive intelligence is critical. Urgency is exactly why we move fast: to define your outperformance baseline and lock the risk clause. We can formalize the Engagement Letter today to begin the strategic architecture immediately, but execution will still require two to four weeks to allocate and warm the proprietary infrastructure needed to hit the Day-45 Milestone safely.<br><br>Leverage the urgency for commitment, but defend the necessary deployment timeline, controlling the throttle and emphasizing rigor over reckless speed.",
          "key_principle": "Leverage urgency for commitment while controlling timeline."
        },

        // Objection Variations - 11 handlers
        // Mechanism Variations
        "are_you_using_ai": {
          "title": "Are You Using AI?",
          "category": "Objection Variations - Mechanism",
          "trigger": "Question about AI usage in the process",
          "quick_response": "Glad you asked. One thing we've learned is the channel doesn't matter—it's the messaging. That's the crown jewel. We rely on world-class copywriters, utilizing proprietary infrastructure that ensures scale and compliance. The real 'secret sauce' is how messaging + infrastructure ties back to the engagement model—and until we can put that together, the details of AI or tools aren't what matters.",
          "full_script": "Glad you asked. One thing we've learned is the channel doesn't matter—it's the messaging. That's the crown jewel. We rely on world-class copywriters, utilizing proprietary infrastructure that ensures scale and compliance. The real 'secret sauce' is how messaging + infrastructure ties back to the engagement model—and until we can put that together, the details of AI or tools aren't what matters.<br><br>Deflects the specific tool (AI) by emphasizing the crown jewel is the messaging and the system orchestration.",
          "key_principle": "Deflect to messaging crown jewel."
        },

        "do_you_use_automation": {
          "title": "Do You Use Automation?",
          "category": "Objection Variations - Mechanism",
          "trigger": "Question about automated processes",
          "quick_response": "We utilize enterprise-grade orchestration and proprietary infrastructure to ensure scale and compliance. This isn't manual effort; it's a controlled system designed for reputable firms to reach decision-makers. Are there specific compliance or volume restrictions on commercial outreach that we should be aware of?",
          "full_script": "We utilize enterprise-grade orchestration and proprietary infrastructure to ensure scale and compliance. This isn't manual effort; it's a controlled system designed for reputable firms to reach decision-makers. Are there specific compliance or volume restrictions on commercial outreach that we should be aware of?<br><br>Reframe the 'automation' concern as controlled, compliant orchestration that respects brand integrity.",
          "key_principle": "Reframe as controlled, compliant orchestration."
        },



        "do_you_buy_lists": {
          "title": "Do You Buy Lists?",
          "category": "Objection Variations - Mechanism",
          "trigger": "Question about data sourcing",
          "quick_response": "We conduct rigorous executive segmentation analysis and leverage multiple data sources, including proprietary vendor lists and AI prompts, to build highly targeted, verified-only lists. This strategic targeting is a core part of the infrastructure allocation required to hit the Day-45 Milestone, ensuring quality and reach.",
          "full_script": "We conduct rigorous executive segmentation analysis and leverage multiple data sources, including proprietary vendor lists and AI prompts, to build highly targeted, verified-only lists. This strategic targeting is a core part of the infrastructure allocation required to hit the Day-45 Milestone, ensuring quality and reach.<br><br>Reframe list procurement as proprietary executive segmentation logic and strategic research required for the scope.",
          "key_principle": "Reframe as strategic segmentation and research."
        },

        // Quality Variations
        "what_if_they_say_theyre_interested_but_arent": {
          "title": "What If They Say They're Interested But Aren't?",
          "category": "Objection Variations - Quality",
          "trigger": "Concern about prospect quality and intent",
          "quick_response": "That is why we transfer judgment control to you. If a prospect is disingenuous, you simply verify them as 'Disqualified' in the post-meeting follow-up, and they do not count toward the Milestone. You retain control over quality, protecting the engagement.",
          "full_script": "That is why we transfer judgment control to you. If a prospect is disingenuous, you simply verify them as 'Disqualified' in the post-meeting follow-up, and they do not count toward the Milestone. You retain control over quality, protecting the engagement.<br><br>The QOA™ transfers perceived control to the client precisely to dissolve the quality objection. If they lie, the client, as the judge, simply does not credit the milestone.",
          "key_principle": "QOA transfers judgment control to client."
        },

        "how_do_you_validate_theyre_real_decision_makers": {
          "title": "How Do You Validate They're Real Decision Makers?",
          "category": "Objection Variations - Quality",
          "trigger": "Question about decision-maker validation",
          "quick_response": "We target the Economic Buyer or their direct Champion, but our qualification standard is based on fit, intent, and solvability (Financially Able, Serviceable, Genuinely Interested), not the title badge. We keep aiming high, but we credit opportunities that meet the three core A/B/C boxes, which ensures we don't stall momentum behind 'title fetishism.'",
          "full_script": "We target the Economic Buyer or their direct Champion, but our qualification standard is based on fit, intent, and solvability (Financially Able, Serviceable, Genuinely Interested), not the title badge. We keep aiming high, but we credit opportunities that meet the three core A/B/C boxes, which ensures we don't stall momentum behind 'title fetishism.'<br><br>Distinguish between Targeting (aiming for decision makers) and Qualification (the A/B/C standard). Qualification must not rely solely on title.",
          "key_principle": "Qualification based on A/B/C, not title."
        },

        "what_if_theyre_just_gathering_info": {
          "title": "What If They're Just Gathering Info?",
          "category": "Objection Variations - Quality",
          "trigger": "Concern about prospects just researching",
          "quick_response": "If they meet our agreed A/B/C definition—meaning they are Financially Able, Serviceable, and Genuinely Interested in exploring a solution—they are a Qualified Opportunity. Research mode is often just a step in the buying process. We anchor to the fact that they are at least problem-aware and have taken the meeting to explore fixing it.",
          "full_script": "If they meet our agreed A/B/C definition—meaning they are Financially Able, Serviceable, and Genuinely Interested in exploring a solution—they are a Qualified Opportunity. Research mode is often just a step in the buying process. We anchor to the fact that they are at least problem-aware and have taken the meeting to explore fixing it.<br><br>If they are actively meeting and exploring solutions, they meet the 'Problem-Aware and Genuinely Interested' criteria of the advisory standard.",
          "key_principle": "Research mode meets problem-aware criteria."
        },

        // Timing Variations
        "were_in_q4_freeze": {
          "title": "We're in Q4 Freeze",
          "category": "Objection Variations - Timing",
          "trigger": "End-of-year budget freeze",
          "quick_response": "Totally understand. Q4 freezes are common. That is exactly why we must formalize the Scope of Work now. Let's at least get the Engagement Letter reviewed and the risk-mitigated model in front of you—then you have a board-defensible, fully scoped option ready to greenlight the moment the budget window reopens in Q1.",
          "full_script": "Totally understand. Q4 freezes are common. That is exactly why we must formalize the Scope of Work now. Let's at least get the Engagement Letter reviewed and the risk-mitigated model in front of you—then you have a board-defensible, fully scoped option ready to greenlight the moment the budget window reopens in Q1.<br><br>Validate the timing, then use the existence of the freeze as leverage to complete the anchored, de-risked SoW immediately.",
          "key_principle": "Use freeze as leverage to complete SoW."
        },

        "lets_start_in_q1": {
          "title": "Let's Start in Q1",
          "category": "Objection Variations - Timing",
          "trigger": "Preference for Q1 start timing",
          "quick_response": "Perfect, Q1 starts are excellent for hitting the New Year with momentum. Since the engagement letter and invoice need to be executed now to lock in our capacity for a Q1 start date, let's set the official start date as January 15th. Does that alignment work for your internal planning?",
          "full_script": "Perfect, Q1 starts are excellent for hitting the New Year with momentum. Since the engagement letter and invoice need to be executed now to lock in our capacity for a Q1 start date, let's set the official start date as January 15th. Does that alignment work for your internal planning?<br><br>Accept the timing, but compress the sales cycle by insisting the signature and capitalization happen now to secure the future capacity.",
          "key_principle": "Accept timing, compress sales cycle."
        },

        "after_specific_event": {
          "title": "After [Specific Event]",
          "category": "Objection Variations - Timing",
          "trigger": "Timing tied to specific future event",
          "quick_response": "Understood, we'll mark the calendar for [Date after event]. To ensure we align precisely, what must be true *after* the [Event Name] review to call that a success? Does that event determine the new budget allocation or the alignment of internal resources?",
          "full_script": "Understood, we'll mark the calendar for [Date after event]. To ensure we align precisely, what must be true *after* the [Event Name] review to call that a success? Does that event determine the new budget allocation or the alignment of internal resources?<br><br>Honor the external constraint, but use the D.E.D.I.™ method to probe the internal consequence of the event (pulling the Approval Rope).",
          "key_principle": "Honor constraint, probe internal consequences."
        }

        // More handlers can be added here in the future
        // This provides the core structure with sample handlers
      }
    }
  }
}

// ===== MOBILE SWIPE FUNCTIONALITY =====

class MobileSidebarManager {
  constructor() {
    this.leftSidebar = document.querySelector('.sidebar-left');
    this.rightSidebar = document.querySelector('.sidebar-right');
    this.overlay = document.getElementById('sidebar-overlay');
    this.mainContent = document.querySelector('.main-content');

    // Touch tracking variables
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;
    this.touchEndY = 0;
    this.minSwipeDistance = 50;
    this.maxVerticalDistance = 100;

    this.init();
  }

  init() {
    // Only initialize on mobile devices
    if (window.innerWidth > 768) return;

    this.initialized = true;
    this.addTouchListeners();
    this.addToggleButtons();
  }

  addTouchListeners() {
    // Touch start
    document.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
    }, { passive: false });

    // Touch move - prevent scrolling during horizontal swipes
    document.addEventListener('touchmove', (e) => {
      if (!this.isHorizontalSwipe(e)) return;

      const currentX = e.touches[0].clientX;
      const deltaX = currentX - this.touchStartX;

      // If it's a significant horizontal swipe, prevent default scrolling
      if (Math.abs(deltaX) > 30) {
        e.preventDefault();
      }
    }, { passive: false });

    // Touch end
    document.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].clientX;
      this.touchEndY = e.changedTouches[0].clientY;
      this.handleSwipe();
    }, { passive: false });
  }

  isHorizontalSwipe(e) {
    const deltaX = Math.abs(e.touches[0].clientX - this.touchStartX);
    const deltaY = Math.abs(e.touches[0].clientY - this.touchStartY);
    return deltaX > deltaY && deltaX > 10;
  }

  handleSwipe() {
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = Math.abs(this.touchEndY - this.touchStartY);

    // Ignore if vertical movement is too large
    if (deltaY > this.maxVerticalDistance) return;

    // Determine swipe direction and distance
    if (Math.abs(deltaX) < this.minSwipeDistance) return;

    // Left edge swipe - open left sidebar
    if (this.touchStartX < 50 && deltaX > 0) {
      this.openLeftSidebar();
    }
    // Right edge swipe - open right sidebar
    else if (this.touchStartX > window.innerWidth - 50 && deltaX < 0) {
      this.openRightSidebar();
    }
    // Close sidebars with swipe gestures
    else if (this.leftSidebar.classList.contains('active') && deltaX < -this.minSwipeDistance) {
      this.closeLeftSidebar();
    }
    else if (this.rightSidebar.classList.contains('active') && deltaX > this.minSwipeDistance) {
      this.closeRightSidebar();
    }
  }

  addToggleButtons() {
    // Check if buttons already exist to avoid duplicates
    if (document.querySelector('.sidebar-toggle-left')) return;

    // Add toggle buttons to the main content for mobile
    const toggleLeft = document.createElement('button');
    toggleLeft.className = 'sidebar-toggle sidebar-toggle-left';
    toggleLeft.innerHTML = '☰';
    toggleLeft.onclick = () => this.toggleLeftSidebar();
    toggleLeft.title = 'Open Main Track';

    const toggleRight = document.createElement('button');
    toggleRight.className = 'sidebar-toggle sidebar-toggle-right';
    toggleRight.innerHTML = '⛽';
    toggleRight.onclick = () => this.toggleRightSidebar();
    toggleRight.title = 'Open Handler Library';

    this.mainContent.appendChild(toggleLeft);
    this.mainContent.appendChild(toggleRight);
  }

  toggleLeftSidebar() {
    if (this.leftSidebar.classList.contains('active')) {
      this.closeLeftSidebar();
    } else {
      this.openLeftSidebar();
    }
  }

  toggleRightSidebar() {
    if (this.rightSidebar.classList.contains('active')) {
      this.closeRightSidebar();
    } else {
      this.openRightSidebar();
    }
  }

  openLeftSidebar() {
    this.leftSidebar.classList.add('active');
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  openRightSidebar() {
    this.rightSidebar.classList.add('active');
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeLeftSidebar() {
    this.leftSidebar.classList.remove('active');
    this.checkAndRemoveOverlay();
  }

  closeRightSidebar() {
    this.rightSidebar.classList.remove('active');
    this.checkAndRemoveOverlay();
  }

  closeSidebars() {
    this.leftSidebar.classList.remove('active');
    this.rightSidebar.classList.remove('active');
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  checkAndRemoveOverlay() {
    if (!this.leftSidebar.classList.contains('active') && !this.rightSidebar.classList.contains('active')) {
      this.overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

// Global function for HTML onclick
function closeSidebars() {
  if (window.mobileSidebarManager) {
    window.mobileSidebarManager.closeSidebars();
  }
}

// Initialize mobile sidebar functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.mobileSidebarManager = new MobileSidebarManager();
});

// Re-initialize on window resize (for responsive behavior)
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (window.mobileSidebarManager) {
      const isMobile = window.innerWidth <= 768;
      const wasInitialized = window.mobileSidebarManager.initialized;
      
      if (isMobile && !wasInitialized) {
        // Moving from desktop to mobile - initialize
        window.mobileSidebarManager.init();
      } else if (!isMobile && wasInitialized) {
        // Moving from mobile to desktop - clean up
        window.mobileSidebarManager.closeSidebars();
        window.mobileSidebarManager.initialized = false;
        // Remove toggle buttons
        const buttons = document.querySelectorAll('.sidebar-toggle');
        buttons.forEach(btn => btn.remove());
      }
    }
  }, 250);
});