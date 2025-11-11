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
        "script": "Hey [FirstName], great to meet you. I've got <b>30 minutes</b> blocked for this, and I want to use it well.<br><br>Here's how I work: <b>I don't pitch on first calls</b>. What I do is audit how you're currently generating demand, and see if there's a clear fit before we talk next steps.<br><br>So I'm going to ask you some specific questions. Not to interrogate—just to understand one thing: <u>where's your leverage? Where's the constraint?</u><br><br>And once I see that, I can tell you how we'd approach it.<br><br>I'll just say upfront—we specialize in <u>sophisticated, brand-sensitive markets</u> where data is scarce and demand generation has to <b>protect reputation</b>. That context shapes how I'm listening today.<br><br><br><br>I can start with our overall thesis.<br><br>So we aim to work in sophisticated markets and we're industry agnostic.<br><br>In these verticals with careful buyers, the data is harder to acquire, there's a lot of room for improvement and our thesis is to fill in those specialized gaps.<br><br>So we'll go into these markets where established companies want new, qualified conversations at scale but haven't been able to fully figure out a modern channel for revenue generation - or at least want it done better.<br><br>We've seen time and time again that there's pent up, unmet demand on the other side of a properly designed solution.",
      },
      {
        "id": "discovery_intro",
        "title": "Discovery Questions — Introduction",
        "category": "sequential",
        "phase": 2,
        "purpose": "Set up the comprehensive due diligence flow",
        "script": "<i>Great</i>. So here's what I'm thinking. Let’s start at the top - how you’re currently generating interest and where that demand is coming from — specifically, the channels where it starts, how you determine what's qualified, and how it converts to revenue.<br><br>That's how we'll understand whether there's <u>leverage we can create</u> with new approaches.<br><br>So, starting at the top of the funnel...",
        "advisor_guidance": "Ask 1 question at a time and then be quiet - silence is a powerful tool, use it as often as possible. Don't overthink the order — what matters most is getting reps in.",
      },
      {
        "id": "discovery_top_funnel",
        "title": "Top of Funnel — Demand Generation",
        "category": "sequential",
        "phase": 2,
        "section": "A",
        "purpose": "Extract primary demand source, strongest conversion path, and how deals develop. CARPET: C (Cycle), P (Pipeline)",
        "question_groups": [
          {
            "emoji": "🎯",
            "title": "How are you generating interest?",
            "questions": [
              "How are you currently generating interest in the market?",
              "Which of those sources is most consistent in producing qualified conversations?",
              "Walk me through how a typical opportunity develops through [strongest source] — from first contact to becoming qualified.",
              "What's your current working definition of what makes someone a qualified opportunity for your team?"
            ],
          },
          {
            "emoji": "📊",
            "title": "How consistent are referrals?",
            "intro_script": "<b>Note:</b> If they indicate referral-dominant business, use these questions. For deeper referral process extraction, see <a href='#' data-action='loadContent' data-id='discovery_referral_based' class='content-link'>Referral-Based Business Flow</a>.",
            "questions": [
              "How consistent are those referrals month to month?",
              "Has the business scaled meaningfully on referrals alone, or have you hit a ceiling?"
            ],
          },
          {
            "emoji": "🌐",
            "title": "What percentage are proactive vs inbound?",
            "when_to_use": "USE IF: They mention multiple channels (not referral-dominant)",
            "questions": [
              "What percentage of your opportunities are proactive versus inbound or referral-driven?",
              "Any markets or segments showing stronger performance than others?"
            ],
          }
        ]
      },
      {
        "id": "discovery_referral_based",
        "title": "Referral-Based Business Flow",
        "category": "sequential",
        "phase": 2,
        "section": "A.5",
        "purpose": "Conduct proper audit for referral-dominant businesses that don't think in 'markets'",
        "intro": "That's great to hear — referral-based clients often see the best results when adding a new channel. Let me ask a few questions to understand how referrals work in your business.",
        "question_groups": [
          {
            "emoji": "✅",
            "title": "How consistent are referrals?",
            "questions": [
              "How consistent are those referrals month to month?"
            ],
            "advisor_notes": [
              "LISTEN FOR: inconsistency, seasonality, unpredictability",
              "If inconsistent → leverage point identified",
              "If consistent → move to Q2 to test ceiling"
            ]
          },
          {
            "emoji": "📈",
            "title": "Have you hit a referral ceiling?",
            "questions": [
              "Has the business scaled meaningfully on referrals alone, or have you hit a ceiling?"
            ],
            "advisor_notes": [
              "IF THEY ADMIT CEILING → You have leverage",
              "This is where you identify the constraint",
              "Frame as: 'So referrals work, but there's a limit to how much you can scale on them alone'"
            ]
          },
          {
            "emoji": "🔍",
            "title": "Walk me through a referral conversion?",
            "questions": [
              "Can you walk me through one client you actually converted through a referral — how did it come in?",
              "What moved it forward?",
              "What sealed it?",
              "How long did it take from first contact to signed agreement?"
            ],
            "advisor_notes": [
              "CAPTURE: Client name/example, how it came in, what moved it forward, what sealed it, timeline",
              "This becomes the reconstruction data",
              "After they answer, immediately transition to confirmation"
            ]
          }
        ],
        "transition": "So this is the process we'll replicate for every introduction we generate. All you need to do is run the same play that converted this client. That single sequence becomes the standardized playbook we feed qualified opportunities into. We're turning your past success into a repeatable system."
      },
      {
        "id": "discovery_middle_funnel",
        "title": "Middle of Funnel — Sales Process & Conversion",
        "category": "sequential",
        "phase": 2,
        "section": "B",
        "purpose": "Extract process handoff, conversion metrics, and team capacity. CARPET: R (Rep capacity/performance)",
        "question_groups": [
          {
            "emoji": "🔄",
            "title": "What happens after initial interest?",
            "questions": [
              "Once that initial interest is created, what happens next? Who takes the call, and who owns moving it forward?",
              "How long does it typically take from first meeting to closed-won?",
              "How many meaningful conversations (not leads) typically result in one closed deal?",
              "Who's your top performer, and how many meetings are they booking per month?",
              "If we increased qualified opportunities into your pipeline, does the team have capacity to handle that volume without breaking down?"
            ],
            "advisor_notes": [
              "Q1: Process handoff - who owns what stage",
              "Q2: CARPET C - Cycle length",
              "Q3: Conversion ratio - critical for milestone sizing",
              "Q4: CARPET R - Rep capacity benchmark",
              "Q5: Capacity check - tests if system can absorb more volume"
            ]
          }
        ],
        "soft_commitment": "This is really helpful - and just so we're calibrated correctly, when we take what we're covering here and start building out a scope for review, does that decision typically sit with you directly, or will you have it reviewed internally first so we can make sure you've got everything you'd need?"
      },
      {
        "id": "two_paths_emerge",
        "title": "Two Paths Emerge — Process Assessment",
        "category": "sequential",
        "phase": 2,
        "section": "B.5",
        "purpose": "Determine if they have a repeatable process or need to reconstruct from past success",
        "advisor_notes": [
          "This is a critical branching point: you're determining whether to frame your offer as fuel to an existing engine, or reconstruct their process from a past win",
          "Most referral-driven businesses don't have a formal process - they have patterns of luck. This stage surfaces that reality.",
          "The goal: build a map that becomes the backbone of your proposal, revealing whether you're plugging into an existing system or building one from scratch"
        ],
        "assessment_question": "Based on what you've described, would you say you have a <b>repeatable, documented process</b> that converts qualified interest into clients consistently? Or is it more that each deal tends to follow its own path?",
        "paths": [
          {
            "id": "has_repeatable_process",
            "condition": "They confirm they have a repeatable process",
            "script": "<i>Perfect</i> — since that system converts consistently, we'll feed it with qualified interest. Think of us as <b>fuel to an engine you've already proven</b>.<br><br>What that means is: we'll generate qualified opportunities that enter at the same point where your best-performing channels currently feed in — whether that's referrals, partnerships, or inbound. Then your existing process takes over from there.<br><br>Does that structure make sense?",
            "advisor_notes": [
              "Frame your offer as a predictable channel bolted onto what already works",
              "This positions you as extending capacity, not replacing their system",
              "Anchor the 'installation point' - where your opportunities will enter their proven process"
            ]
          },
          {
            "id": "no_repeatable_process",
            "condition": "They say they don't have a formal process, or it's inconsistent/ad-hoc",
            "script": "<i>That makes sense</i> — a lot of businesses grow through referrals and relationships, which means each deal can feel unique.<br><br>Here's what I want to do: let's <b>reconstruct your process from your last successful conversion</b>.<br><br>Can you name <b>one client you actually converted through your network</b> — whether that was a referral, introduction, or relationship-based opportunity?<br><br>(Wait for them to name a client)<br><br>Perfect. Now walk me through that win <b>step-by-step</b>: how did it come in? What moved it forward? What sealed it?<br><br>(Trace the entire path: first contact → initial conversation → what was exchanged → follow-up cadence → what closed it)<br><br>(After they've walked through it)<br><br><i>Got it</i>. So here's what we'll do: <b>we'll replicate that same path for every introduction we generate</b>. All you need to do is run the same play that converted this client.<br><br>That single sequence becomes the <b>standardized playbook</b> we feed qualified opportunities into. We're turning your past success into a repeatable system.",
            "advisor_notes": [
              "This converts confusion into clarity — you've turned their past luck into a standardized playbook",
              "Ask granular questions: Who took the first call? What questions were asked? What assets were sent? How was follow-up handled? How long did it take?",
              "The goal: extract the functional reality of their business, even if it's not formally documented",
              "After reconstruction, confirm: 'So this is the process we'll replicate for every introduction we generate'"
            ],
            "reconstruction_questions": [
              "Who took that first call or initial conversation?",
              "What questions were asked on that call?",
              "What information or assets were exchanged next — deck, proposal, case study, engagement letter?",
              "How was follow-up handled?",
              "How often?",
              "How long did it take to move from first touch to signed agreement?",
              "What specifically sealed it — was it the relationship, the fit, timing, or something else?"
            ]
          }
        ],
        "transition": "Now that we've mapped how opportunities move through your system — whether that's a documented process or the sequence we just reconstructed — let's talk about what happens at the bottom of the funnel."
      },
      {
        "id": "discovery_bottom_funnel",
        "title": "Bottom of Funnel — Revenue Mechanics",
        "category": "sequential",
        "phase": 2,
        "section": "C",
        "purpose": "Extract conversion metrics and deal economics. CARPET: A (ACV/LTV), E (Environment), T (Timeline/decisions)",
        "intro": "Let's finish at what happens further down the funnel - how demand turns into actual revenue.",
        "question_groups": [
          {
            "emoji": "💰",
            "title": "Who closes deals?",
            "questions": [
              "Who's primarily responsible for closing deals — same rep who sourced it, or does it transfer?",
              "From qualified opportunities at the top, what percentage convert into new accounts?",
              "What's the typical average contract value and lifetime value of a new account?",
              "When deals close, what usually determines success — price, speed, relationship, or process?"
            ],
          }
        ]
      },
      {
        "id": "post_discovery_momentum",
        "title": "Post-Discovery Momentum — Process Confirmation, ROI Math & Transition",
        "category": "sequential",
        "phase": 2,
        "section": "C.5",
        "purpose": "Confirm process, validate capacity, calculate ROI, identify gap, and transition to thesis",
        "script": "Perfect — so we'll replicate that exact sequence for every introduction we generate. That single sequence becomes the standardized playbook we feed qualified opportunities into.<br><br>Now, here's what I need to confirm: if we fed [X] qualified opportunities into that same process over [CYCLE], does the team have capacity to handle that volume without breaking down?<br><br>Good. So at a [Y]% close rate, that's roughly [Z] new clients over that period.<br><br>At [$] average deal size, that's [REVENUE] in new revenue.<br><br>Does that math work for you?<br><br>Here's where I think there's opportunity: <u>if we could increase the flow of qualified opportunities into your pipeline — while maintaining that same [Y]% conversion rate — you'd scale revenue without changing your process.</u> Your current pipeline generates [PIPELINE], and your top rep is booking [REP_CAPACITY].<br><br>Before I walk you through how we'd approach that, let me tell you about how we work and why. Then we can see if it makes sense.",
      },
      {
        "id": "fork_deflection",
        "title": "What do you do?",
        "category": "sequential",
        "phase": 3,
        "purpose": "Explain what you do after completing discovery — now that you understand their business, present your thesis and proof",
        "paths": [
          {
            "id": "new_economy",
            "economy": "New Economy (Tech, SaaS, Data, AI)",
            "context": "They're fluent in GTM, pipeline, and outbound language. They've probably been pitched by a dozen operators. If you go tactical, you'll sound like one of them.",
            "script": "<i>That's a good question</i>. So here's our <b>thesis</b>, and I want to make it specific to what you just told me.<br><br>We work in <u>sophisticated markets</u>—education, finance, regulated industries. Places where the <b>data is expensive</b>, the buyers are <b>specialized</b>, and <b>brand risk is real</b>.<br><br>In those markets, traditional strategies fail. Not because they're bad—because they're built for <u>volume</u>, not <u>precision</u>.<br><br>We do the opposite. We extract how your world actually works through <b>diligence</b>. Then we design messaging that sounds like it comes from a <u>peer in your industry</u>, not a marketing department. And we deploy that through infrastructure built to <b>protect your brand</b>.<br><br>The result: demand becomes <u>predictable</u>.<br><br>[Pause - let 'predictable' land]<br><br>[Shift to story mode - slower, more conversational]<br><br>Let me show you what that looks like in practice.",
            "proof_narrative": {
              "title": "Proof Narrative — National Book Fair Company",
              "introduction": "To give you a clearer picture, one of the best examples is our engagement with a national book fair company — about a $50M-a-year operator that sells into thousands of schools across the U.S.<br><br>They had an incredible brand that educators and families trusted for decades, but they were struggling to modernize how they generated demand. Everything was still manual — word-of-mouth, relationships, and outdated outreach methods — which made it hard to scale without risking the reputation they'd built.<br><br>And because that market's so consolidated — really only three major players nationwide — they wanted full discretion. That's why they're redacted in our case study; they don't want any of their tools, systems, or partners publicly visible.<br><br>That's exactly the kind of challenge our thesis is designed for — markets with specialized buyers, limited data, strict brand standards, and the need for qualified, brand-safe conversations that protect legacy while driving growth.",
              "six_beats": {
                "beat_1_engagement_context": {
                  "script": "They came to us needing to open more relationships with schools and districts—principals, administrators, parent committees.<br><br>Now, here's why this is a perfect fit for our thesis: education is specialized, brand-sensitive, and the data is expensive to acquire. Most firms would fail there. <b>We thrive there</b>.",
                  "advisor_notes": [
                    "[Pause] after setting context - let that context land",
                    "[Pause] after 'We thrive there' - let that statement land",
                    "This beat sets up the client and market - establish why this example matters"
                  ]
                },
                "beat_2_diligence_extraction": {
                  "script": "We spent time with their team—field reps, regional managers, leadership—to understand one thing: <u>how do schools actually decide, and what language matters in that world?</u><br><br>That's the diligence process. It's what lets us identify qualified buyers without guessing. It's also what protects you from wasting time on tire kickers.<br><br>And here's the thing: they had <b>decades of that knowledge in their heads</b>. Our diligence extracted it and turned it into a targeting map.",
                  "advisor_notes": [
                    "[Lean forward] when asking the core question - this is the heart of your methodology",
                    "[Pause] after explaining the diligence process - let them absorb the value",
                    "Emphasize: 'decades of knowledge' - this shows you extract institutional wisdom"
                  ]
                },
                "beat_3_brand_integrity_constraint": {
                  "script": "In education, the brand standard is <b>unforgiving</b>. One message that feels too much, and <u>you're done</u>. Years of credibility, gone.<br><br>So we set one rule: <b>generate interest without touching the third rail</b>.<br><br>That meant every piece of messaging—tone, pacing, positioning—had to sound like it came from someone inside their world, not from a marketing department.<br><br>We didn't compromise on that. <b>Not once</b>.",
                  "advisor_notes": [
                    "[Slow down] when describing the gravity - let the risk sink in",
                    "[Pause] after 'third rail' - this is a critical concept",
                    "[Pause] after 'Not once' - let conviction land",
                    "This beat shows you understand brand risk at a deep level"
                  ]
                },
                "beat_4_audience_presence_findings": {
                  "script": "As part of the diligence, we mapped where these buyers actually spend time.<br><br>Over 50% on LinkedIn. The rest? Email, professional networks. So the audience was there, digital-first, even in a traditional market.<br><br><b>Most strategies miss it because they're guessing</b>. They don't do the diligence. <b>We did</b>.",
                  "advisor_notes": [
                    "[Pause] after revealing the findings - let the surprise land",
                    "[Lean forward] when making the distinction - this separates you from competitors",
                    "This is mechanism framing - showing WHERE targets are, not just tactics"
                  ]
                },
                "beat_5_private_infrastructure": {
                  "script": "So we deployed the outreach through our internal infrastructure.<br><br>Think of it like <b>mission control</b>—every message, every contact list, every follow-up sequence runs through quality gates. We're checking tone, compliance, brand alignment. Nothing goes out that doesn't reflect their world.<br><br>And because it's all orchestrated centrally, we can scale it—from one region to fifty states to international—all while maintaining the same brand voice.<br><br>That's what '<u>private infrastructure</u>' means. Not tools. <b>Orchestration</b>.",
                  "advisor_notes": [
                    "[Shift tone] to more technical and confident - you're describing your system",
                    "[Pause] after 'mission control' - let the concept crystallize",
                    "[Slow down] when defining 'private infrastructure' - this is a key distinction",
                    "[Pause] after 'Orchestration' - let that distinction land",
                    "This is mechanism framing - showing HOW you operate, not just what you do"
                  ]
                },
                "beat_6_hardest_first_proof_tieback": {
                  "script": "Here's what happened: <b>373 qualified conversations in 90 days</b>.<br><br>Their sales cycle is short—about 30 days—so they closed business quickly. <u>Over $1M in new revenue</u> in that first quarter, all without touching their brand reputation.<br><br>And here's why I'm telling you this: if we can do that in education—where brand risk is the highest I've seen—then what we're doing in your market is essentially the same playbook. <b>Different industry, same thesis</b>.",
                  "advisor_notes": [
                    "[Pause] after the numbers - let them land",
                    "[Lean forward] when bridging back to them - make the connection explicit",
                    "[Pause] after 'Different industry, same thesis' - let the portability land",
                    "This beat proves the thesis with hardest-first proof, then ties back to their situation"
                  ]
                }
              },
            },
            "pivot": "So that's the framework: <b>start with diligence, then deploy precision, all through controlled infrastructure</b>.<br><br>Now here's what I want to confirm: based on what you told me about <u>[reference PAIN POINT from discovery—e.g., 'referrals being inconsistent' or 'team hitting capacity']</u>, does this approach map to your world?<br><br>If it does, here's what the next conversation looks like: we'll take everything we covered today and build out a scope that models what a 90-day engagement could look like—anchored to your actual conversion math and capacity constraints. That becomes the framework we review together before moving forward. So that's the thesis: <b>sophisticated markets where traditional strategies fail</b>—specialized buyers, brand-first execution, diligence-led targeting. And when that framework works in education—where brand risk kills you overnight—it works everywhere else.<br><br>Here's what I want you to take back to your team. <b>One</b>: we specialize in <u>sophisticated profiles under brand-integrity constraints</u>. <b>Two</b>: we have a <u>diligence process that extracts decades of your institutional knowledge</u>. <b>Three</b>: we operate through <u>private infrastructure built for the exact channels where your buyers already are</u>. That's it. That's the thesis. That's what makes it work at scale."
          },
          {
            "id": "old_economy",
            "economy": "Old Economy (Industrial, Services, Legacy)",
            "context": "They're typically not fluent in GTM mechanics. They value stability, brand integrity, and credibility. Here, you speak to modernization - not 'tactics.'",
            "script": "<i>That's a good question</i>. So here's our <b>thesis</b>, and I'll make it specific to your world.<br><br>We work in <u>legacy markets</u>—established industries with careful buyers and high brand risk. Places where the <b>data is expensive to acquire</b> and the message has to generate demand while <b>protecting your pedigree</b>.<br><br>In those markets, most strategies fail because they're built for fast-moving tech companies, not established institutions.<br><br>We do the opposite. We extract decades of your institutional knowledge through <b>diligence</b>. Then we design messaging that sounds like it comes from someone <u>inside your world</u>, not an agency. And we deploy that through infrastructure built to <b>protect your reputation</b>.<br><br>The result: we find the <b>pent-up, unmet demand</b> that's been there all along.<br><br>[Pause - let 'pent-up demand' land]<br><br>[Shift to story mode - slower, more conversational]<br><br>Let me show you what that looks like in practice.",
            "proof_narrative": {
              "title": "Proof Narrative — Raiseview (Corporate Finance Group)",
              "introduction": "To paint a better picture we can point to our engagement with Raiseview Capital, a corporate finance group.<br><br>They wanted to expand their sell-side Rolodex - the institutions they could do more transactions with: family offices, LPs, credit funds, SBICs, regional banks, and credit unions.<br><br>This is the most conservative, brand-aware corner of the market. The data is expensive and hard to acquire. These profiles are the hardest to get a positive response from without hurting brand integrity. So these markets match extremely well with our thesis and solutions.",
              "six_beats": {
                "beat_1_engagement_context": {
                  "script": "Raiseview came to us needing to expand their sell-side Rolodex—family offices, LPs, credit funds, SBICs, regional banks, credit unions.<br><br>Now, here's why this is the pinnacle example: sell-side banking is the <b>most conservative, brand-sensitive corner</b> of finance. One wrong move and you're done. Most agencies would fail there. <b>We thrive there</b>.",
                  "advisor_notes": [
                    "[Pause] after setting context - let that context land",
                    "[Pause] after 'We thrive there' - let that statement land",
                    "This beat sets up the client and market - establish why this is the hardest example"
                  ]
                },
                "beat_2_diligence_extraction": {
                  "script": "We spent time with their team—learning how they evaluate counterparties, how conversations start, what language earns trust, and <u>what lines you never cross</u>.<br><br>That's the diligence process. It's what lets us identify qualified relationships without guessing. It's also what protects you from wasting time on the wrong profiles.<br><br>And here's the thing: they had <b>decades of institutional knowledge</b> about how this world works. Our diligence extracted it and turned it into a targeting map.",
                  "advisor_notes": [
                    "[Lean forward] when asking about 'lines you never cross' - this is the core question",
                    "[Pause] after explaining the diligence process - let them absorb the value",
                    "Emphasize: 'decades of institutional knowledge' - this shows you extract wisdom from established firms"
                  ]
                },
                "beat_3_brand_integrity_constraint": {
                  "script": "In banking, the brand standard is <b>unforgiving</b>. One clumsy message, and <u>years of goodwill are gone</u>. Just like that.<br><br>So we set one rule: <b>create interest without touching the third rail</b>.<br><br>That meant every piece of messaging—tone, timing, targeting—had to sound like it came from someone inside their world, not from an agency cold-calling.<br><br>We didn't compromise on that. <b>Not once</b>.",
                  "advisor_notes": [
                    "[Slow down] when describing the gravity - let the risk sink in",
                    "[Pause] after 'third rail' - this is a critical concept",
                    "[Pause] after 'Not once' - let conviction land",
                    "This beat shows you understand brand risk in the most conservative markets"
                  ]
                },
                "beat_4_audience_presence_findings": {
                  "script": "As part of the diligence, we mapped where these buyers actually spend time.<br><br>About 75% on LinkedIn for professional signals. 97–98% still used email to communicate with outside partners. So the audience was there, digital-first, even in the most conservative market.<br><br><b>Most strategies miss it because they're guessing</b>. They don't do the diligence. <b>We did</b>.",
                  "advisor_notes": [
                    "[Pause] after revealing the findings - let the surprise land",
                    "[Lean forward] when making the distinction - this separates you from competitors",
                    "This is mechanism framing - showing WHERE targets are, even in conservative markets"
                  ]
                },
                "beat_5_private_infrastructure": {
                  "script": "So we deployed the outreach through our internal infrastructure.<br><br>Think of it like <b>mission control</b>—every message, every contact list, every follow-up sequence runs through quality gates. We're checking tone, compliance, brand alignment. Nothing goes out that doesn't reflect their world.<br><br>And because it's all orchestrated centrally, we can scale it—from regional to national to global—all while maintaining the same brand voice. That worked perfectly for Raiseview since they had a global mandate.<br><br>That's what '<u>private infrastructure</u>' means. Not tools. <b>Orchestration</b>.",
                  "advisor_notes": [
                    "[Shift tone] to more technical and confident - you're describing your system",
                    "[Pause] after 'mission control' - let the concept crystallize",
                    "[Slow down] when defining 'private infrastructure' - this is a key distinction",
                    "[Pause] after 'Orchestration' - let that distinction land",
                    "Note: Mention global mandate for Raiseview - shows scalability",
                    "This is mechanism framing - showing HOW you operate at scale"
                  ]
                },
                "beat_6_hardest_first_proof_tieback": {
                  "script": "Here's what happened: <b>102 new sell-side introductions</b> with the exact institutions Raiseview needed—without a single dent to reputation.<br><br>And here's why I'm telling you this: if we can do that in sell-side banking—the most conservative, brand-sensitive environment I've seen—then what we're doing in your market is essentially the same playbook. <b>Different industry, same thesis</b>.",
                  "advisor_notes": [
                    "[Pause] after the numbers - let them land",
                    "[Lean forward] when bridging back to them - make the connection explicit",
                    "[Pause] after 'Different industry, same thesis' - let the portability land",
                    "This beat proves the thesis with hardest-first proof (most conservative market), then ties back to their situation"
                  ]
                }
              },
            },
            "pivot": "So that's the thesis: <b>sophisticated markets where traditional strategies fail</b>—specialized profiles, hard-to-get data, strict brand standards. And when that framework works in sell-side banking—the most conservative corner of finance—it works everywhere else.<br><br>So that's the framework: <b>start with diligence, then deploy precision, all through controlled infrastructure</b>.<br><br>Now here's what I want to confirm: based on what you told me about <u>[reference PAIN POINT from discovery—e.g., 'referrals being inconsistent' or 'team hitting capacity']</u>, does this approach map to your world?<br><br>If it does, here's what the next conversation looks like: we'll take everything we covered today and build out a scope that models what a 90-day engagement could look like—anchored to your actual conversion math and capacity constraints. That becomes the framework we review together before moving forward.<br><br>Here's what I want you to take back to your team. <b>One</b>: we specialize in <u>sophisticated profiles under brand-integrity constraints</u>. <b>Two</b>: we have a <u>diligence process that extracts decades of your institutional knowledge</u>. <b>Three</b>: we operate through <u>private infrastructure built for the exact channels where your buyers already are</u>. That's it. That's the thesis. That's what makes it work at scale."
          }
        ],
        "related_objection_handlers": {
          "title": "Related Objection Handlers",
          "note": "If prospects raise objections during this section, use these handlers:",
          "handlers": [
            {
              "title": "When They Ask 'How Do We Know This Works?' or 'Prove It'",
              "link": "<a href=\"#\" data-action=\"loadHandler\" data-id=\"case_studies\" class=\"content-link\" style=\"color: var(--primary-color); text-decoration: underline; cursor: pointer; font-weight: 600;\">Case Studies Handler</a>"
            },
            {
              "title": "Why You vs. Vendor/Agency",
              "link": "<a href=\"#\" data-action=\"loadHandler\" data-id=\"past_vendor_failure\" class=\"content-link\" style=\"color: var(--primary-color); text-decoration: underline; cursor: pointer; font-weight: 600;\">Past Vendor Failure / Agency Comparison Handler</a>"
            }
          ]
        }
      },
      {
        "id": "qoa_deployment_guide",
        "title": "Lead Quality",
        "category": "sequential",
        "phase": 3,
        "purpose": "Deploy the Qualified Opportunity Anchor™ when quality concerns arise—gives you verbatim on-call scripts for the complete sequence",
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
        "tic": {
          "title": "🎯 Tic — Process Repeatability",
          "when": "After Bottom of Funnel discovery when you have their conversion data",
          "script": "So it sounds like once someone enters your system and gets to [X stage], you're closing [Y%] of them.<br><br>Would it be fair to say your process is repeatable?<br><br>(Wait for confirmation)<br><br>Perfect—so really, the question isn't <i>if</i> it converts, it's simply how we drive more qualified opportunities into it.",
          "outcome": "✓ Conceptual Yes secured. They admitted their process works."
        },
        "tac": {
          "title": "🎯 Tac — Definition Alignment",
          "when": "Immediately after securing the Tic, or when quality concerns first surface",
          "script": "Before we move forward, it's important we both use the same standard for what counts as a qualified opportunity.<br><br>What we typically do with most clients—and what's built into our engagement model—is define a qualified opportunity as any person or entity who's <b>financially able to buy</b>, is <b>serviceable or sizable</b> for your offer, and is <b>problem-aware and genuinely interested</b> in solving it.<br><br>(Pause—let them nod)<br><br>Now, you'll notice we don't include 'decision-maker' in that definition—and that's intentional. Our aim is always to reach the decision-maker, and very often we do. But in a lot of cases, we'll engage one title south—a strong champion who can influence upward. That's both expected and healthy.",
          "outcome": "✓ Directional Yes secured. They adopted your A/B/C standard."
        },
        "toe_optional": {
          "title": "🎯 Toe (Optional) — Power Transfer",
          "when": "ONLY if quality concern persists after Tic + Tac AND you have high-trust context",
          "script": "So we've established that your process is repeatable and converts at [X%], and we've aligned on what 'qualified' means—financially able, serviceable, and genuinely interested.<br><br>Here's a question: if you had the ability to verify whether each opportunity we bring meets that A/B/C standard <i>before</i> it counts toward the 45-day milestone—would that reduce your risk?<br><br>(Pause—let them think)<br><br>Because that's exactly how we can structure the engagement.<br><br>The milestone credits would be <b>client-verified</b>. You'd confirm whether each opportunity meets the criteria we just defined. If it does, it counts. If it doesn't, we keep working until the milestone is hit.<br><br>That way, you hold the control over what qualifies, and we're held accountable to a number we contractually commit to.<br><br>(Pause)<br><br>From a structural standpoint, here's what that means:<br><br>Our team assumes greater operational risk—we're committing to deliver until the milestone is met, regardless of how long it takes.<br><br>You gain formal verification control—you decide what counts, under the definition we both agreed to.<br><br>The accountability becomes mutual: we're accountable for volume, targeting, and structure. You're accountable for verifying quality under the A/B/C framework.<br><br>Does that structure make sense to you?",
          "outcome": "✓ Commitment Yes secured. They acknowledged that verification control reduces their risk.",
          "note": "⚠️ This is NOT full QOA™ deployment—you're pre-selling the logic. Full deployment (calendar access, verification automation, legal clauses) happens when presenting the SOW."
        },
        "handling_quality_objections": {
          "title": "If Quality Objection Surfaces Mid-Discovery",
          "trigger": "They say 'How do I know these will be qualified?' or 'We've had bad leads before'",
          "script": "That's a <i>fair concern</i>—and it's exactly why we walked through your funnel in detail.<br><br>You mentioned earlier that once someone gets to [X stage], you're closing [Y%] of them, and that your process is repeatable.<br><br>So really, the question isn't whether they'll convert—it's whether the opportunities we create meet the standard we've agreed on: financially able, serviceable, and genuinely interested.<br><br>That's why we defined 'qualified' the way we did—so we're both measuring against the same criteria.",
          "content": "Deploy the full Toe sequence above to offer client-verified milestones"
        },
      },
      {
        "id": "integration_explanation",
        "title": "Integration Explanation — Confirm & Anchor",
        "category": "sequential",
        "phase": 4,
        "purpose": "Transition from 'diagnosis' to 'design' by acknowledging their process and framing how your firm installs demand into it",
        "assessment_question": "Do they have a <b>repeatable, documented process</b> that converts qualified interest into clients consistently?",
        "paths": [
          {
            "id": "with_process",
            "condition": "They have a repeatable process",
            "script": "Just to be crystal clear on ownership: <u>You're not outsourcing closing</u>, and <u>we're not accepting accountability for conversion we don't control</u>.<br><br>Our responsibility: <b>generating qualified interest at the top of your funnel</b>.<br><br>Your responsibility: <b>processing that through your existing middle and bottom funnel</b> — the same way you handle referrals today.<br><br><span class=\"script-question\"><b>Does that structure make sense?</b></span><br><br><span class=\"script-pause\">(Wait for verbal 'yes')</span><br><br>From there, we'll assemble the <b>orchestration infrastructure</b> needed to execute cleanly — <u>talent architecture</u> (internal + external capacity), <u>messaging systems</u> that protect your brand, and <u>data infrastructure</u> calibrated to your exact buyer profile.<br><br>The scope will be conservative and realistic — we'd typically expect demand generated from our channel to convert in a <b>similar range to your current [Y]%</b>, maybe a 10–20% variance depending on deal cycle and ticket size.<br><br>The goal is <b>predictability</b>, not over-promise.<br><br><span class=\"script-pause\">(Tone softens)</span><br><br>If that feels like something you and leadership feel could evolve into a <i>scalable channel</i> — quarterly, semi-annually, or annually — we're happy to walk that path with you, align on <i>risk tolerance</i>, and define what <b>tangible success</b> looks like together.<br><br><span class=\"script-question\">Any questions so far?</span>",
          },
          {
            "id": "without_process",
            "condition": "They don't have a documented process (reconstruction path)",
            "script": "Just to confirm what we mapped out from your last win: that <b>[CLIENT NAME]</b> opportunity came in through <b>[SOURCE]</b>, moved forward when <b>[TRIGGER]</b>, and sealed when <b>[CLOSE FACTOR]</b>. That's exactly the playbook we'll replicate.<br><br><span class=\"script-pause\">(Pause — let them confirm)</span><br><br>What we do is <b>replicate that exact conversion sequence for every introduction we generate</b>. We're turning your past success into a <b>repeatable system</b> — all you need to do is run the same play that converted <b>[CLIENT NAME]</b>.<br><br><span class=\"script-pause\">(Critical separation language)</span><br><br>Just to be crystal clear on ownership: <u>You're not outsourcing closing</u>, and <u>we're not accepting accountability for conversion we don't control</u>.<br><br>Our responsibility: <b>generating qualified opportunities that match the profile of [CLIENT NAME]</b>.<br><br>Your responsibility: <b>running them through the same sequence we just mapped</b>.<br><br><span class=\"script-question\"><b>Does that structure make sense?</b></span><br><br><span class=\"script-pause\">(Wait for verbal 'yes')</span><br><br>From there, we'll assemble the <b>orchestration infrastructure</b> needed to execute cleanly — <u>talent architecture</u> (internal + external capacity), <u>messaging systems</u> that protect your brand, and <u>data infrastructure</u> calibrated to your exact buyer profile.<br><br>The scope will be conservative and realistic — we'd typically expect demand generated from our channel to convert in a <b>similar range to your current [Y]%</b>, maybe a 10–20% variance depending on deal cycle and ticket size.<br><br>The goal is <b>predictability</b>, not over-promise.<br><br><span class=\"script-pause\">(Tone softens)</span><br><br>If that feels like something you and leadership feel could evolve into a <i>scalable channel</i> — quarterly, semi-annually, or annually — we're happy to walk that path with you, align on <i>risk tolerance</i>, and define what <b>tangible success</b> looks like together.<br><br><span class=\"script-question\">Any questions so far?</span>",
          }
        ],
        "context_variations": {
          "title": "Context-Specific Variations",
          "intro": "Use these variations when the standard script doesn't fit the prospect's specific situation:",
          "variations": [
            {
              "id": "cre_dual_track",
              "title": "CRE Dual-Track Scoping — Buy-Side + Sell-Side",
              "when_to_use": "When prospect explicitly states they need both: (1) more qualified deals/opportunities AND (2) more equity/LP access (common in commercial real estate, private equity, investment firms)",
              "context": "Some sponsors/firms face constraints on both sides: they need proprietary deal flow (sell-side) AND capital/equity access (buy-side). The scope must address both lanes explicitly.",
              "diagnosis_questions": [
                "What's your typical equity gap per deal? (e.g., $8–$15M)",
                "What check sizes do you need from LPs/family offices to close those gaps?",
                "On the deal side, what geographies, vintages, or deal types are you prioritizing?",
                "How do you currently source deals vs. how do you currently raise equity?",
                "Which constraint is more limiting right now — deal flow or capital access?"
              ],
              "script": "<i>Perfect</i> — I'm hearing two distinct constraints: <b>buy-side</b> (LP/equity access to close your $[X]M equity gaps) and <b>sell-side</b> (proprietary deal origination in [target geos/vintages]).<br><br>So we'll structure this as a <b>dual-track scope</b>:<br><br><b>Track One — Buy-Side (LP/FO Access)</b>: We'll originate qualified LP conversations with check sizes aligned to your $[X]M equity gaps. These are introductions to capital partners who fit your investor profile — family offices, institutional LPs, international capital — that can close your recurring equity gaps.<br><br><b>Track Two — Sell-Side (Proprietary Deal Flow)</b>: We'll originate sponsor-fit opportunities in your target geographies and vintages. These are proprietary introductions to sellers/off-market opportunities that match your acquisition criteria.<br><br>(Critical ownership clarity)<br><br><u>Our responsibility</u>: Generate qualified introductions on both tracks — LP meetings and deal opportunities.<br><br><u>Your responsibility</u>: Evaluate fit, conduct due diligence, and convert those introductions into closed deals or closed capital.<br><br>We own the TOF inputs (qualified introductions). You own MOF/BOF conversion (relationship building, deal execution, capital closing).<br><br>Does that structure make sense?",
              "milestone_structure": "Each track gets its own milestone: (1) X qualified LP introductions by Day 45, (2) Y qualified deal introductions by Day 45. Both must hit for the engagement to continue. This ensures both constraints are addressed, not just one.",
              "risk_mitigation": "Frame as: 'Worst-case, you get qualified LP conversations AND deal opportunities — both of which you can evaluate and convert on your timeline. Best-case, both tracks accelerate your deal velocity and capital access simultaneously.'"
            },
            {
              "id": "why_now_timeline",
              "title": "Why Now — Creating Timeline Without Pressure",
              "when_to_use": "When prospect is engaged but hasn't committed to timeline, or asks 'How long does this take?'",
              "script": "Here's what we know: demand generation in <u>[your market]</u> is a <b>three-to-six month problem</b>. Not because it's hard to solve, but because it requires diligence, infrastructure calibration, and messaging precision.<br><br>The question isn't 'should we do this'—it's '<u>how fast do we want to move</u> and <u>how much runway do we need</u>.'<br><br>So let me ask: if everything aligns, what's the timeline you're looking at to have a new channel producing qualified conversations?"
            }
          ]
        },
        "compressed_integration": {
          "title": "Compressed Integration (30 seconds)",
          "when_to_use": "Use when calls are objection-heavy or time-constrained",
          "script": "Let me make sure I have this right: You're running about <b>[PIPELINE]</b> qualified opportunities per month. Those take <b>[CYCLE]</b> to close, converting at <b>[Y]%</b>. Your top performer handles <b>[REP_CAPACITY]</b> meetings/month, average deal size is <b>[ACV]</b>.<br><br>Here's the opportunity: If we increased qualified flow by <b>[X]</b> opportunities over <b>[CYCLE]</b>, converting at <b>[Y]%</b>, that's <b>[Z]</b> new clients at <b>[ACV]</b> each — <b>[REVENUE]</b> in new revenue.<br><br>The constraint isn't your ability to close — it's volume and consistency of qualified opportunities. What we do is install a parallel demand channel that feeds your existing process. Structure: 90-day engagement, 45-day milestone, second payment only unlocks when we deliver. Does that structure make sense?",
        },
      },
      {
        "id": "transition_call_two",
        "title": "Transition — Close Loop & Secure Call Two",
        "category": "sequential",
        "phase": 5,
        "purpose": "Close all open loops and secure a defined next step on the calendar",
        "context_variations": {
          "variations": [
            {
              "id": "opening_engagement_model",
              "title": "1. Explain Engagement Model",
              "script": "At this point, what we'll do is take all of the data you've given us and build out an <b>internal engagement model</b> — that's where we <b>reverse-engineer the numbers</b> and map out what a <u>90-day structure</u> could realistically result in.<br><br>From there, we'll wrap that model into a <b>formal scope of work</b> that lays out:<br><br>The <b>thesis-driven approach</b> tailored to your market<br>The <b>milestone structure and success metrics</b><br>The <u>built-in risk-mitigation language that protects you</u><br><br>Once that's ready, we'll send it over for review and then reconvene to walk through it together."
            },
            {
              "id": "scheduling_call_two",
              "title": "2. Schedule Call Two",
              "script": "In terms of scheduling that review — does <b>[suggest specific day/time within 3–5 business days]</b> work on your end?",
              "paths": [
                {
                  "id": "they_hesitate",
                  "condition": "They hesitate or seem unsure",
                  "script": "<i>Totally fine</i> — we don't need to confirm anything today; it just helps me lock in time on our end so the team can <b>prioritize building your model</b> this week.<br><br>Would you prefer to receive the scope first before scheduling a review?",
                  "advisor_notes": [
                    "Stay calm and accommodating — this is not a closing moment",
                    "Give them an easy out while still maintaining forward momentum"
                  ]
                },
                {
                  "id": "they_prefer_later",
                  "condition": "They strongly prefer to schedule later",
                  "script": "Works fine either way, I appreciate your time and we're looking forward to building out a scope for review — I'll have that sent over for processing and then shipped to you in the next day or two.",
                  "advisor_notes": [
                    "Cater to their preference — don't force it",
                    "Still maintain momentum by committing to send the scope"
                  ]
                }
              ]
            },
            {
              "id": "soft_commitment_question",
              "title": "3. Ask Approval Process Question",
              "script": "Perfect — before I let you go, we always like to make sure the scope we put together aligns with what actually matters most on your side.<br><br>Everyone has different biases when it comes to greenlighting something like this.<br><br>Just so we're catering it toward what's most important to you — <b>what do you think typically pushes something like this across the line internally?</b><br><br>(Pay attention to this feedback — it's gold)<br><br>Really good insight, thank you.<br><br>This question helps you understand their internal decision-making process and ensures the scope addresses their specific approval criteria.",
            },
            {
              "id": "micro_step_primary",
              "title": "Micro-Step: Primary",
              "when_to_use": "Use this when discovery is complete and you have all necessary data",
              "script": "I'll send the scope within <b>24–48 hours</b>. Before our review, even if you just glance at it, I need your <b>first-wave feedback</b> — concerns, optimism, anything missing. That way I can adjust ahead of the meeting.",
              "advisor_notes": [
                "The goal is to leave the call with Call Two booked and confirmed, plus clarity on what drives their internal approval process, plus ONE written micro-step commitment that maintains momentum between calls"
              ]
            },
            {
              "id": "micro_step_alternative_1",
              "title": "Micro-Step: If Data Incomplete",
              "when_to_use": "Use when discovery data is incomplete and you need more information",
              "script": "Can you confirm the last quarter's qualified opportunity volume and close rate before our next call? That'll help us tighten the 45-day milestone math.",
              "advisor_notes": [
                "The goal is to leave the call with Call Two booked and confirmed, plus clarity on what drives their internal approval process, plus ONE written micro-step commitment that maintains momentum between calls"
              ]
            },
            {
              "id": "micro_step_alternative_2",
              "title": "Micro-Step: If Approval Unclear",
              "when_to_use": "Use when you're unsure about their internal approval process",
              "script": "Before our review, can you confirm who else needs to see this internally and what their typical approval criteria are? That way I can tailor the scope to address their specific concerns.",
              "advisor_notes": [
                "The goal is to leave the call with Call Two booked and confirmed, plus clarity on what drives their internal approval process, plus ONE written micro-step commitment that maintains momentum between calls"
              ]
            },
          ]
        },
      },
      {
        "id": "universal_objection_handle",
        "title": "Universal Objection Handle",
        "category": "interrupt",
        "trigger": "When you freeze on any discovery objection — use this catch-all",
        "purpose": "Anchor on infrastructure, messaging, engagement model, and risk mitigation — works on ANY objection",
        "context": "This is your emergency script when you don't know what to say. It handles mechanism questions, 'how' questions, vendor fatigue, and budget concerns all at once.",
        "script": "<i>Great question</i>. Here's how to think about this: we only work in <b>sophisticated, brand-sensitive markets</b> where the <u>data is hard to acquire</u>, the buyers are <b>highly specialized</b>, and <b>brand integrity can't be compromised</b>. That's our thesis.<br><br>So the question isn't really about channels or tools — it's about whether we can run a <b>diligence process</b> that extracts your institutional knowledge, build <b>enterprise-grade messaging</b> that protects your brand, and deploy it through <b>private infrastructure</b> that reaches the exact profiles you need. That's what we've invested in, and that's what allows us to operate in markets where traditional approaches fail.<br><br>Now, until we've built out your <b>engagement model</b>, I can't answer 'how' in a tactical way. Right now we're in <u>due diligence</u>, and our job is to collect the information we need to plug into that model. Once we do, we'll see exactly whether we can outperform an internal channel you already have, or if not, we'll set a <i>conservative external benchmark</i> we anchor against. Either way, the <b>model is what drives the math</b>.<br><br>And that's how we <b>mitigate your risk</b>. Every engagement is scoped against benchmarks — typically <u>90 days with a midpoint milestone at day 45</u>. If we say we'll deliver, for example, 20 qualified decision-maker introductions, then by day 45 we've <b>committed to hitting a set portion</b> of that. If it takes longer, you <u>don't unlock the second payment until we've delivered</u>. We just keep working until it's met.<br><br>So the structure ensures you <b>put X in and get Y out</b>. That's why the channel, the tools, or the tactics are never the focus. The focus is the <u>thesis</u> — specialized markets, hard-to-acquire data, brand protection — and the <b>engagement model</b> that reverse-engineers your outcomes so your risk is <b>completely mitigated</b>. From there, the only question is whether those outcomes tie directly to your <b>growth goals</b>.",
        "advisor_notes": [
          "THESIS FIRST: Always lead with thesis positioning (sophisticated markets, hard data, brand integrity) before discussing mechanism",
          "NEVER list channels or tools outside of narrative context — this is your emergency script, maintain framework discipline",
          "When in doubt → drop this handle → pivot back to the Engagement Model. That's the kill-shot.",
          "This covers: mechanism questions, 'how do you do it?', pricing concerns, risk aversion, vendor fatigue",
          "After delivering this, ALWAYS pivot back to a discovery question",
          "The key phrase: 'until we've built out your engagement model' — use this to defer tactical questions",
          "Story Mode version follows Six Beats structure and maintains thesis tie-back throughout"
        ],
        "story_mode": {
          "title": "Story Mode: Thesis-Driven Narrative",
          "when_to_use": "Use when prospects are genuinely curious about 'how' but you sense they're sophisticated and will filter out vendor-speak. Best for regulated industries or brand-sensitive buyers. 2-3 minute investment shows mechanism through story, not explanation.",
          "script": "Let me show you how this works in practice.<br><br>(Pause, shift into story mode)<br><br>One of our clients operates in one of the <b>most conservative, brand-sensitive industries</b> imaginable. Every piece of communication has to protect decades of institutional credibility. One wrong move and they lose the room forever. That's exactly the kind of market our <b>thesis is built for</b>.<br><br>They engaged us to open up new qualified relationships with <b>highly specialized decision-makers</b> — profiles that are notoriously difficult to reach and even harder to engage without damaging brand integrity.<br><br>We started with <b>diligence</b>. Our analysts spent weeks sitting with their team, extracting <b>30+ years of institutional knowledge</b> — how these buyers think, what language earns trust, what outcomes matter, and what lines you never cross. That diligence process is what allows us to define <u>quality opportunities</u> rather than chasing volume.<br><br>In their market, <b>brand risk is everything</b>. One message that feels too aggressive or generic can undo years of goodwill. So our first rule was simple: generate interest, never cheapen the name. Tone, timing, and targeting had to match exactly how this market behaves.<br><br>Our analysts also mapped where these buyers actually spend time professionally. We found that the vast majority were digitally present in predictable channels, but <u>no one had approached them the right way</u>. That's a pattern we see constantly in sophisticated markets — the demand exists, it's just unmet.<br><br>So we deployed our <b>private infrastructure</b> — not generic tools, but a system built specifically for precision targeting and brand protection. The messaging ran through multiple quality checks for tone, compliance, and credibility. Everything was designed to sound like a <b>peer in their world</b>, not a vendor cold-calling.<br><br>Within <b>45 days</b>, <b>23 qualified executive-level meetings</b> with exactly the profiles they needed. By <b>day 90</b>, <b>4 new mandates worth over $2M in fees</b>. All while protecting their brand at every step.<br><br>(Pause, tie back to them)<br><br>So the 'how' isn't about channels or tactics — it's about the <b>thesis</b>. Specialized markets, hard-to-acquire data, strict brand standards. We run a <b>diligence process</b> that extracts your knowledge, build <b>enterprise-grade messaging</b> that protects your integrity, and deploy it through <b>private infrastructure</b> built for the exact buyers you need to reach.<br><br>Now, until we've built out <i>your</i> engagement model, I can't answer 'how' in a tactical way. Right now we're in due diligence, and our job is to collect the information we need to plug into that model. Once we do, we'll see exactly what benchmark makes sense and how we mitigate your risk.<br><br>What I'd like to understand is: how are you currently generating demand today, and what does that process look like from first touch through to conversion?"
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
        "primary_reframe": "That's great—referrals are predictable. Here's what we've learned: when companies are mainly referral-based, they've actually <b>built moats in one channel</b> but haven't developed <u>systematic demand generation in others</u>. So the untapped demand is massive. That's exactly where our <b>thesis creates the most upside</b>—we're not disrupting what's working, we're opening a new channel in markets where the demand already exists but hasn't been approached the right way.<br><br>How consistent have those referrals been month-to-month?",
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
  "objection_handlers": {
    "title": "Objection Handler Library",
    "subtitle": "115+ field-tested responses organized by category",
    "purpose": "Pull off the main track, handle objections, return to your mile marker",

    "handlers": {
      // Money & Budget (9 handlers)

      "pricing_objection": {
        "title": "Pricing Objection Handler",
        "category": "Money",
        "trigger": "When they ask 'What's the price?' too early in discovery, or say 'We don't have a budget'",
        "purpose": "Defuse tension, provide clarity, reclaim frame without being defensive",
        "main_script": {
          "title": "📝 What to Say (Standard Script)",
          "script": "<i>Fair question</i>. Our typical engagements fall between <u>$25,000 and $75,000</u> over a <b>90-day window</b> — half upfront, half tied to <b>contingency</b>.<br><br>We <b>contractually obligate ourselves</b> to a <b>tangible milestone at Day 45</b> — for example, <b>25 qualified opportunities</b>. If we don't hit it, that <u>second payment doesn't unlock</u> and we keep working until we do. Makes the <u>worst-case scenario ROI-positive</u> for you.<br><br>I can't give you an exact number today because the scope depends on <i>what qualifies as an opportunity in your world</i> — and that's what we'll map out in this conversation.",
          "advisor_notes": [
            "Deliver this with complete neutrality - no defensiveness, no hesitation",
            "Keep tone measured, factual, and steady - this is just how the firm operates",
            "The phrase 'worst-case scenario ROI-positive' is a power anchor",
            "Critical: Never sit in a pricing question. The moment you finish, immediately move back into discovery",
            "If they push on upfront payment, use the capitalization framing scripts above"
          ]
        },
        "how_to_handle": [
          {
            "step": "Give a Broad Range, Briefly",
            "script": "Engagements typically fall anywhere between $25K and $75K depending on scope."
          },
          {
            "step": "Reframe Around Risk Mitigation",
            "script": "What's unique about how we structure these is that risk mitigation is always the top priority. Every engagement has a milestone at the halfway point, and the scope is built so that the worst-case scenario is still significantly ROI positive."
          },
          {
            "step": "Push to Scope, Not Numbers",
            "script": "The reality is, until we build your engagement model, it's not possible to give you an exact figure. That model is what shows you the end of the engagement before we even begin, and it's what allows us to scope a conservative, realistic outcome for both of us."
          },
          {
            "step": "Position Discovery Properly",
            "script": "This conversation is simply to answer your questions and gather what we need. Once we've got that, we can build the model and present the scope, and that's where the pricing becomes specific and makes sense."
          }
        ],
        "capitalization_framing": {
          "title": "Why We Need Money Up Front",
          "scripts": [
            {
              "title": "How We Use the Money",
              "script": "The reason we structure it this way is because capitalization directly funds the diligence and infrastructure that only works in <b>sophisticated, brand-sensitive markets</b>. We don't just deploy tools — we deploy a <u>specialized diligence process</u> that extracts your institutional knowledge, <u>vendor partnerships</u> that operate at enterprise scale, and <u>private infrastructure</u> that protects brand integrity. That whole system has to be capitalized up front. Without that allocation, we can't guarantee outcomes. That's why we can de-risk your downside."
            },
            {
              "title": "Why This Is Different",
              "script": "Think of it this way: the upfront fee capitalizes the engagement. But this isn't standard campaign execution — we only work in <b>markets where data is hard to acquire</b> and <b>brand integrity can't be compromised</b>. That capital funds the diligence process that extracts decades of your knowledge, the vendor capacity to operate in difficult markets, and the infrastructure built for specialized profiles. That's why we can contractually commit to outcomes in environments where most strategies fail."
            },
            {
              "title": "Not a Retainer",
              "script": "Here's what makes this different from a retainer model: every dollar you allocate up front is directly tied to the <u>thesis-driven system</u> we deploy on your behalf. We're not billing you for our time — we're capitalizing the diligence, vendor partnerships, and private infrastructure that only work when you're targeting <b>sophisticated profiles under brand-integrity constraints</b>. That's the only way we can de-risk your downside while operating in difficult markets."
            },
            {
              "title": "Why We Can Promise Results",
              "script": "The capitalization model is what allows us to take on accountability in <b>markets where traditional approaches fail</b>. If we didn't have that capital up front, we couldn't run the diligence process that extracts your institutional knowledge, pre-commit specialized vendor capacity, or deploy the private infrastructure that protects your brand. The fee and the deliverable are mathematically linked — but more importantly, they're <u>thesis-linked</u>."
            },
            {
              "title": "How We're Different",
              "script": "Most agencies charge retainers and hope for results. We don't operate that way. Your upfront payment capitalizes a <b>thesis-driven system</b> — specialized diligence that extracts your decades of knowledge, vendor partnerships calibrated for difficult markets, and private infrastructure built for brand-sensitive profiles — all of which are contractually obligated to hit a number. That's why the structure works where standard execution doesn't."
            }
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
        "key_lesson": "Price questions in discovery are premature. Always give a confident range, then immediately pivot back to risk mitigation and the unique value of your scope process. Your leverage only comes once the SOW is in their hands — so keep the frame focused on due diligence, not discounts or exact numbers."
      },

      "discount_request": {
        "title": "Discount Request",
        "category": "Money",
        "trigger": "When they ask for a discount or special pricing",
        "full_script": "I appreciate you wanting to ensure you're getting the best value. Our pricing is designed around the risk mitigation structure we provide—guaranteed outcomes tied to your internal benchmarks. We don't discount because it would undermine the capital allocation your leadership needs to defend.<br><br>However, what we can do is ensure the scope is perfectly tailored to your economics.",
        "key_principle": "Don't discount. Re-anchor to value and risk mitigation."
      },

      "payment_terms": {
        "title": "Payment Terms",
        "category": "Money",
        "trigger": "Questions about payment structure, installments, etc., or when prospect objects to non-refundable upfront fee - any reason",
        "key_principle": "Terms protect both parties and align incentives. Explain capitalization model universally, adapt if past trauma is revealed.",
        "non_refundable_fee_explanation": {
          "title": "Non-Refundable Fee Explanation",
          "script": "The reason the upfront fee is non-refundable is because <b>it capitalizes the entire engagement infrastructure</b>—specialized diligence process, vendor partnerships, private infrastructure. Without that capital allocation up front, we can't guarantee outcomes.<br><br><b>Here's how this protects you:</b> We're contractually obligated to keep working until the milestone is hit. Even if it takes day 50, day 60, day 70—we keep working. No additional fees. <b>The capital doesn't disappear—it funds the work that guarantees your outcome.</b>",
          "conditional_vendor_trauma": {
            "title": "Conditional Vendor-Trauma Language (Only if they mention past vendors)",
            "if_they_mention_past_vendors": "That's exactly what makes this different from vendors who take money and vanish - we're obligated to deliver regardless of timeline.",
            "if_they_dont_mention": "The milestone is calculated conservatively to ensure it's achievable, and the continuation clause ensures you get what you paid for."
          }
        },
        "full_script": "Our payment terms are structured to ensure mutual commitment to success. The initial 50% funds the strategic infrastructure and execution setup required to hit your Day-45 milestone. The remaining 50% is only paid upon successful delivery of that milestone.<br><br>This structure protects both sides—if we don't deliver the guaranteed outcomes, you don't pay the full fee. If we do deliver, you've paid for a risk-mitigated capital allocation."
      },

      "budget_constraints": {
        "title": "Budget Constraints",
        "category": "Money",
        "trigger": "They say they don't have budget or it's limited",
        "full_script": "Budget constraints are real, which is precisely why we conduct this due diligence first. Rather than discussing budget availability, let's determine if this makes economic sense for your business.<br><br>If we could guarantee you 35 qualified executive meetings over 90 days at a cost that represents X% of your average contract value, would that be worth the investment? What's your typical ACV?",
        "key_principle": "Focus on ROI, not budget limits. Economics drive allocation."
      },

      "free_pilot": {
        "title": "Free Pilot",
        "category": "Money",
        "trigger": "Requests for free trial, pilot, or test period",
        "full_script": "I understand wanting to test before committing—that's smart business. However, our model requires substantial upfront investment in proprietary infrastructure, messaging architecture, and execution resources to guarantee the outcomes.<br><br>What we offer instead is complete risk mitigation: if we don't hit the agreed 45-day milestone, you don't pay the contingent fee. It's effectively a 'pilot with guarantee.'<br><br>Would you like to see how that milestone is calculated based on your current benchmarks?",
        "key_principle": "No free pilots. Risk mitigation replaces traditional trials."
      },

      "performance_only": {
        "title": "Performance-Only",
        "category": "Money",
        "trigger": "Want to pay only for results/outcomes",
        "full_script": "That's exactly what our structure provides. We are 50% performance-based—the second payment only triggers when we deliver the agreed 45-day milestone. If we don't hit it, you don't pay the full fee.<br><br>This isn't traditional 'pay for results' because results in sales are probabilistic. Instead, we guarantee the input (qualified opportunities) and you own the conversion outcomes.<br><br>The milestone is designed to be conservative and achievable. Let me show you how it's calculated...",
        "key_principle": "We are already performance-based with risk mitigation."
      },

      "roi_questions": {
        "title": "ROI Questions",
        "category": "Money",
        "trigger": "Questions about return on investment",
        "full_script": "ROI is exactly what our structure is designed to guarantee. We commit to outperforming your current best producer by 1.5x in qualified meetings over 90 days. Even at conservative conversion rates, this generates significant ROI.<br><br>For example, if your best producer generates 8 meetings/month at a 20% close rate and $50K ACV, that's $80K/month in revenue. We guarantee 12+ meetings/month, representing $120K+ in potential revenue.<br><br>The fee represents approximately X% of that incremental revenue. What's your current best producer's monthly output?",
        "key_principle": "ROI is guaranteed through the structure, not hoped for."
      },

      "cost_breakdown": {
        "title": "Cost Breakdown",
        "category": "Money",
        "trigger": "Want detailed breakdown of what the fee covers",
        "full_script": "Our fee covers the comprehensive engagement architecture designed for board-level defensibility. This includes:<br><br>- Proprietary infrastructure and messaging systems\n- Dedicated execution team and governance\n- Risk mitigation and milestone guarantees\n- Strategic oversight and optimization<br><br>We don't provide cost breakdowns because the value proposition is the integrated outcome, not individual components. Breaking it down would undermine the advisory positioning.<br><br>The fee is positioned as a capital allocation with guaranteed ROI. What's your threshold for investments that generate 1.5x returns?",
        "key_principle": "Don't break down costs. Value is in the integrated architecture."
      },

      "payment_plans": {
        "title": "Payment Plans",
        "category": "Money",
        "trigger": "Want to spread payments over time",
        "full_script": "We don't offer traditional payment plans because our structure already provides the optimal phasing. The 50% upfront investment funds the infrastructure and execution resources needed to guarantee results. The 50% contingent payment only occurs after we've delivered the 45-day milestone.<br><br>This creates the perfect balance: you're protected from risk while ensuring we have the resources to deliver. Traditional payment plans would undermine this risk mitigation.<br><br>Would you like to see how the milestone calculation ensures this is a conservative, achievable target?",
        "key_principle": "Structure is already the optimal payment plan."
      },


      // Quality & Proof (12 handlers)
      "quality_concern_early": {
        "title": "Quality Concern (Early)",
        "category": "Quality",
        "trigger": "Quality concerns before discovery is complete",
        "full_script": "I completely understand the quality concern—that's legitimate. The beauty of our model is that quality control is built in through the Qualified Opportunity Anchor™ (QOA™).<br><br>We only deliver opportunities that meet your A/B/C criteria (Financially Able, Serviceable, Genuinely Interested). If any opportunity doesn't meet your standards, you simply verify it as 'Disqualified' and it doesn't count toward the milestone.<br><br>This gives you complete veto power over quality. Before we can define those criteria though, we need to understand your process. What makes someone 'qualified' in your current system?",
        "key_principle": "QOA™ gives them veto power over quality."
      },

      "quality_concern_late": {
        "title": "Quality Concern (Late)",
        "category": "Quality",
        "trigger": "Quality concerns after discovery, near close",
        "full_script": "I hear the quality concern, and that's valid. But remember what you told me earlier—you said your sales process is repeatable and converts at X% rate. We've already established that your system works.<br><br>The question now is simply: how do we feed more qualified opportunities that meet your A/B/C criteria into that system you know works?<br><br>The Qualified Opportunity Anchor™ gives you control: any opportunity that doesn't meet your standards gets vetoed and doesn't count. You maintain complete quality control.<br><br>Shall we review your A/B/C criteria one more time to ensure we're aligned?",
        "key_principle": "Anchor to their earlier admissions. QOA™ protects quality."
      },

      "quality_concern_toe": {
        "title": "Quality Concern (Requires Toe)",
        "category": "Quality",
        "trigger": "Deep quality skepticism that needs power transfer",
        "full_script": "This is exactly what The Toe (Qualified Opportunity Anchor™) solves. We transfer complete judgment control to you.<br><br>Here's how it works: When we deliver an opportunity, you receive a simple verification form asking if they meet your A/B/C criteria. If you check 'Yes, this meets our standards,' it counts toward the milestone. If you check 'No,' it doesn't count and we replace it.<br><br>You have unilateral veto power. This eliminates any quality risk because you control what gets credited. Even if we're wrong about fit, you simply don't credit the milestone.<br><br>This power transfer is what allows us to guarantee the volume while you control the quality. Does this address your concern?",
        "key_principle": "Toe = Power Transfer. They get veto control."
      },

      "case_studies": {
        "title": "Can You Show Me Case Studies / Proof First?",
        "category": "Quality",
        "trigger": "When prospect asks for references, case studies, or proof - any tone, any timing",
        "path_selection": {
          "path_a_proof_first": {
            "title": "They're proof-first (need before discovery)",
            "when_to_use": "They need proof before we talk details",
            "script": "Got it - you need proof before we talk details. I'll send you [case studies/references] today. After you review, we can reconnect if it makes sense. Sound good?"
          },
          "path_b_cautious_willing": {
            "title": "They're cautious but willing (can continue discovery)",
            "when_to_use": "They're cautious but willing to continue discovery",
            "script": "Perfect. I'll include [specific materials] in what I send you after this call. To make sure it's relevant, let me ask a few more questions about your situation. Fair?"
          },
          "path_c_testing_urgency": {
            "title": "Want it now",
            "when_to_use": "They want it right now",
            "script": "I can send that right now if needed, or include it in a full package after we finish. Which would be more helpful?"
          },
          "path_d_reference_call": {
            "title": "Want to talk to someone",
            "when_to_use": "They want to talk to a reference",
            "script": "I can facilitate a reference call with [client type]. Would you prefer that before or after you review the written case study?"
          }
        },
        "full_script": "Of course, I'll send you information after the call. What I'd like to do is include not just our deck, but also 1-2 recent successes and, most importantly, your Scope of Work.<br><br>To make that possible, we just need to finish this due diligence — a few more questions on my end, and then I can send something that's actually meaningful to you. Otherwise, you'd just be getting generic info. Does that sound fair?",
      },

      "proof_of_concept": {
        "title": "Proof of Concept",
        "category": "Quality",
        "trigger": "Want proof this works before committing",
        "full_script": "That's exactly what our 90-day structure provides—a built-in proof of concept. We guarantee hitting the 45-day milestone with specific, measurable outcomes. If we don't deliver, you don't pay the contingent 50%.<br><br>This isn't theoretical proof—it's actual performance with your money at risk, not ours. The milestone is conservatively calculated based on your current benchmarks.<br><br>Would you like to see how we calculate the milestone to ensure it's realistic and achievable?",
        "key_principle": "45-day milestone = Proof of concept with money back guarantee."
      },

      "past_vendor_failure": {
        "title": "Trust Deficit / Extreme Skepticism",
        "category": "Quality",
        "trigger": "Extreme skepticism, defensiveness, or hostility - regardless of cause. Deploy within first 60 seconds when prospect shows trust deficit signals: demanding proof, refusing discovery, aggressive tone, repeated deflection.",
        "main_script": {
          "title": "📝 Step 1: Universal Diagnostic Question",
          "script": "Let me stop you there. It sounds like you need to see proof before we go any further. That's completely fair.<br><br>Before we continue, I need to understand: <b>what would need to be true for you to feel comfortable exploring this conversation?</b><br><br>Because if we can't meet that standard, this is pointless for both of us.<br><br>[Pause — let them answer. This reveals the ROOT CAUSE without assuming.]",

        },
        "adaptive_branches": {
          "past_vendor_failures": {
            "title": "If They Mention Past Vendor Failures",
            "script": "What specifically went wrong with those vendors? Because if we can't solve that problem, we shouldn't proceed.",
            "follow_up_options": {
              "story_mode": {
                "title": "Story Mode (If They're Engaged)",
                "script": "I appreciate you sharing that — and honestly, that's <u>exactly the kind of experience</u> that validates why we built our model the way we did.<br><br>Let me walk you through how we handle this differently.<br><br>(Pause, shift into story mode)<br><br>We had a client who'd been <b>burned by three agencies in 18 months</b>. Each one promised 'qualified leads,' delivered garbage, blamed the client's sales process when nothing converted, and disappeared. They were skeptical — rightfully so.<br><br>When they came to us, the first thing they said was: <i>'How do I know you won't do the same thing?'</i><br><br>Here's what we did differently.<br><br>We spent <b>45 minutes mapping their entire funnel</b> — not to pitch, but to diagnose. We identified that their close rate was <b>22% on qualified opportunities</b>. We documented that number. Then we built a <b>45-day milestone</b> around that <u>exact conversion rate</u> — conservative, realistic, tied to their actual performance.<br><br>But here's the key: we gave them <b>veto power</b>.<br><br>Every opportunity we delivered, <u>they verified</u> against the criteria we'd agreed to together. If it didn't meet their standard — if the prospect wasn't genuinely interested, wasn't financially able, wasn't serviceable — it <b>didn't count toward the milestone</b>. We kept working until we hit the number.<br><br>By <b>day 60</b>, we'd delivered <b>17 verified opportunities</b>. They closed <b>4 of them</b>. That's a <b>23% close rate</b> — which matched <i>exactly</i> what they'd told us their process converts at.<br><br>That proved two things: the opportunities we delivered were actually qualified, and their system worked exactly as they'd described.<br><br>(Pause, bring it back to them)<br><br>That's the difference. We're not promising magic or guaranteeing closed deals. We're <b>engineering a system</b> where your risk is completely mitigated — you control what counts, we're accountable to your actual conversion metrics, and the milestone structure protects you if we underdeliver.<br><br>Now, to understand your system: what specifically went wrong with your previous vendor? Where did they fail you?"
              },
              "intervention_mode": {
                "title": "Intervention Mode (If They're Stuck in Loop)",
                "script": "<b>Let me stop you there.</b> It sounds like you've been <u>burned badly by vendors who took your money and didn't deliver</u>. That's <b>exactly the problem our entire engagement structure is designed to prevent</b>.<br><br>Before we go any further, I need to understand: <b>what specifically went wrong with those engagements?</b> Because if we can't solve that problem, this conversation is pointless for both of us.<br><br>(Pause — let them answer. This forces them to articulate the real failure points, which becomes diagnostic data for how to structure the engagement differently.)<br><br>Now, here's how we prevent that from happening again: <b>We're contractually obligated to deliver a specific milestone by Day 45</b>. Not a promise — a <u>contractual requirement</u>. You verify every opportunity before it counts toward that milestone. <b>Veto power</b> over what gets credited. <b>No second payment</b> until we hit the number. And if we don't hit it, we keep working until we do — at no additional cost.<br><br>That structure exists <u>because</u> of what happened to you. So tell me: what specifically failed? Was it the quality of leads? The lack of accountability? The disappearing act after payment? Because our model addresses all of that — but I need to know which one matters most to you."
              }
            }
          },
          "time_constraints": {
            "title": "If They Mention Time Constraints",
            "script": "I understand time is limited. What's the minimum you'd need to see to know if this is worth 15 more minutes?"
          },
          "budget_roi_concerns": {
            "title": "If They Mention Budget/ROI Concerns",
            "script": "That's smart to be cautious with capital. What ROI multiple would make this a no-brainer for you?"
          },
          "testing_credibility": {
            "title": "If They're Testing Your Credibility",
            "script": "Fair to test me. What typically helps you evaluate new partners - case studies, references, or something else?"
          },
          "protecting_relationships": {
            "title": "If They're Protecting Existing Relationships",
            "script": "Makes sense. Are you concerned this would compete with existing channels or replace something working?"
          }
        }
      },

      "entity_size_credibility": {
        "title": "Entity Size/Credibility",
        "category": "Quality",
        "trigger": "Questions about company size, experience, or credibility",
        "full_script": "That's a fair question. We're a specialized Revenue Advisory firm that operates with a focused model: we either win big or stay small. This allows us to maintain the highest standards and invest heavily in our infrastructure.<br><br>We also run a Commercial Finance arm that structures multi-million dollar deals, which gives us additional insight into executive decision-making and capital allocation.<br><br>Our track record includes X clients across Y industries, with average outcomes of Z. Would you like me to share some specific results?",
        "key_principle": "Focus on specialization and Commercial Finance credibility.",
        "story_mode": {
          "title": "Story Mode: The Boutique Advantage Story",
          "when_to_use": "Use when prospects question your size, headcount, or credibility. Best for sophisticated buyers who value quality over scale. Shows that boutique positioning is intentional, not a weakness. 2-3 minute investment.",
          "script": "That's a great question, and I'll be direct with you — we're <b>intentionally boutique</b>. Let me tell you why that's actually an advantage.<br><br>(Pause, shift into story mode)<br><br>One of our clients was evaluating us against a <b>70-person agency</b> with offices in three cities, flashy presentations, big team photos on their website. On paper, they looked more 'credible.'<br><br>But here's what happened.<br><br>The agency promised them the world, assigned them to a junior account manager, and delivered <i>generic spray-and-pray campaigns</i> that destroyed their brand reputation. After 6 months and $80K spent, they had 3 qualified meetings and zero deals.<br><br>When they came to us, we took a different approach.<br><br>We're <b>President-led</b> — I personally oversee every engagement. We don't pass clients to juniors. We operate with a <b>focused model: we either win big or stay small</b>. This allows us to maintain the highest standards and invest heavily in our infrastructure.<br><br>We also run a <b>Commercial Finance arm</b> that structures <b>multi-million dollar deals</b> — ABL transactions, acquisition financing, M&A advisory. That division is larger and actively participates in capital markets, which gives us insight into executive decision-making that most agencies will never have.<br><br>For this client, we spent <b>3 weeks mapping their world</b> — not pitching, but diagnosing. We extracted their institutional knowledge, designed messaging that sounded like a peer in their industry, and deployed it through our <b>private infrastructure</b>.<br><br>Within <b>45 days</b>, <b>19 qualified meetings</b>. By <b>day 90</b>, <b>5 new clients worth $1.2M</b> in their first-year revenue.<br><br>(Pause, bring it back)<br><br>The boutique model isn't a weakness — it's <u>why we outperform</u>. Bigger firms assign you to juniors and recycle the same playbook across every client. We stay small, invest in world-class infrastructure, and treat every engagement like it's the only one that matters.<br><br>The outcomes speak louder than headcount. Now, to see if that positioning makes sense for your business: what's been your biggest frustration with vendors or agencies in the past?"
        }
      },

      "will_they_convert": {
        "title": "Will They Convert?",
        "category": "Quality",
        "trigger": "Concerns about whether delivered leads will actually close",
        "full_script": "That's the perfect question, and it highlights why our model works. We own the input (qualified opportunities), and you own the conversion outcomes.<br><br>This division of responsibility is what makes the economics work:\n- We guarantee delivering qualified opportunities that meet your A/B/C criteria\n- You apply your proven sales process and expertise to convert them\n- Everyone wins when the system works together<br><br>You've already told me your conversion rate is X%. At that rate, our guaranteed volume would represent $Y in potential revenue. Does that align with your expectations?",
        "key_principle": "Clear accountability: We deliver input, they own conversion."
      },

      "define_qualified": {
        "title": "Define Qualified",
        "category": "Quality",
        "trigger": "Want to know what 'qualified' means to us, or when prospect's definition dramatically differs from yours",
        "key_principle": "A/B/C framework makes qualification objective and controllable. Address behavior (mismatched expectations) not assumed cause.",
        "definition_alignment_checkpoint": {
          "title": "Definition Alignment Checkpoint",
          "when_to_use": "When prospect's definition of 'qualified' dramatically differs from yours",
          "script": "Let me make sure we're aligned here. Your definition of qualified is [repeat their definition]. That's a fair standard, but <b>it's not what we do.</b><br><br>We generate first-touch introductions that feel like warm referrals because of the diligence and messaging precision. But they're not coming from your existing network—they're new relationships.<br><br><b>If your only acceptable channel is warm introductions from people who already trust you, then we're not the right fit.</b><br><br>Is that type of new channel interesting to you, or are you only looking to scale what you already have?"
        },
        "full_script": "We define 'qualified' through the A/B/C framework that we establish with you during discovery:<br><br>A: Financially Able - They have the budget and authority to make purchasing decisions\nB: Serviceable - They fit your target market and can actually use your solution\nC: Genuinely Interested - They're not just researching; they're actively looking to solve this problem<br><br>This framework is objective and measurable, preventing the ambiguity that causes most lead quality issues. You get to define what A/B/C means for your business.<br><br>Shall we work through defining these criteria for your specific market?"
      },

      "verification_questions": {
        "title": "Verification Questions",
        "category": "Quality",
        "trigger": "Questions about how we verify lead quality",
        "full_script": "Verification is built into the process through the Qualified Opportunity Anchor™ (QOA™). After each meeting, you receive a simple form asking you to verify the prospect met your A/B/C criteria.<br><br>The process:\n1. Meeting occurs and is logged\n2. Time-delayed verification form sent to you\n3. You check: Did they meet A/B/C standards?\n4. If yes → counts toward milestone\n5. If no → doesn't count, we replace it<br><br>This gives you complete control and eliminates quality disputes. You have unilateral veto power over what gets credited.<br><br>Does this verification process address your quality concerns?",
        "key_principle": "QOA™ = Your veto power over quality verification."
      },

      // Timing & Process Handlers
      "timing_isnt_right": {
        "title": "Timing Isn't Right",
        "category": "Timing",
        "trigger": "When they say the timing isn't right for various reasons",
        "full_script": "I completely understand timing constraints; capital planning is complex. That is exactly why we must formalize the Scope of Work now. Let's at least get the Engagement Letter reviewed and the risk-mitigated model in front of you—then you have a board-defensible, fully scoped option ready to greenlight the moment the freeze is lifted or the budget window reopens.",
        "key_principle": "Validate timing concerns but use as leverage to complete scoping now."
      },

      "q4_freeze": {
        "title": "Q4 Freeze",
        "category": "Timing",
        "trigger": "End-of-year budget freeze",
        "full_script": "Totally understand. Q4 freezes are common. That is exactly why we must formalize the Scope of Work now. Let's at least get the Engagement Letter reviewed and the risk-mitigated model in front of you—then you have a board-defensible, fully scoped option ready to greenlight the moment the budget window reopens in Q1.",
        "key_principle": "Use freeze as leverage to complete scoping during freeze period."
      },

      "budget_cycle": {
        "title": "Budget Cycle",
        "category": "Timing",
        "trigger": "Budget cycle timing issues",
        "full_script": "Budget conversations are exactly why we run this due diligence first. Rather than discussing budget availability, let's determine if this makes economic sense for your business.<br><br>If we could guarantee you 35 qualified executive meetings over 90 days at a cost that represents X% of your average contract value, would that be worth the investment? What's your typical ACV?",
        "key_principle": "Focus on ROI economics rather than budget timing constraints."
      },

      "lets_revisit_later": {
        "title": "Let's Revisit Later",
        "category": "Timing",
        "trigger": "Deferral to later time",
        "full_script": "I completely understand timing constraints; capital planning is complex. That is exactly why we must formalize the Scope of Work now. Let's at least get the Engagement Letter reviewed and the risk-mitigated model in front of you—then you have a board-defensible, fully scoped option ready to greenlight the moment the freeze is lifted or the budget window reopens.",
        "key_principle": "Use deferral as opportunity to complete scoping for future decision."
      },

      "need_more_time": {
        "title": "Need More Time",
        "category": "Timing",
        "trigger": "General request for more time",
        "full_script": "I completely understand timing constraints; capital planning is complex. That is exactly why we must formalize the Scope of Work now. Let's at least get the Engagement Letter reviewed and the risk-mitigated model in front of you—then you have a board-defensible, fully scoped option ready to greenlight the moment the freeze is lifted or the budget window reopens.",
        "key_principle": "Validate time needs but complete scoping to enable future quick decisions."
      },

      "send_info_first": {
        "title": "Send Info First",
        "category": "Timing",
        "trigger": "Want information before continuing, or when standard discovery is blocked for any reason",
        "key_principle": "Use information request as leverage to complete discovery and customize materials. Offer alternative path without assuming why standard path failed.",
        "alternative_path_offer": {
          "title": "Alternative Path Offer",
          "when_to_use": "When standard discovery is blocked for any reason",
          "base_script": "I'm sensing that diving into discovery right now doesn't feel right. That's completely fair.<br><br>Here's what might make more sense: <b>I'll send you [case studies/references/draft proposal]. You review on your timeline, and if it checks out, we reconnect for a proper discovery call.</b><br><br>Does that work better?",
          "variations": {
            "if_they_need_social_proof": {
              "title": "If they need social proof",
              "script": "I'll send you client case studies with results data and testimonials."
            },
            "if_they_need_reference_validation": {
              "title": "If they need reference validation",
              "script": "I'll include reference contacts you can reach out to directly."
            },
            "if_they_need_to_see_model": {
              "title": "If they need to see the model",
              "script": "I'll send you a draft scope so you can see what the engagement structure looks like."
            },
            "if_they_need_time": {
              "title": "If they need time",
              "script": "Take a week to review everything, then let's reconnect if it makes sense."
            }
          }
        },
        "full_script": "Of course, I'll send you information after the call. What I'd like to do is include not just our deck, but also 1-2 recent successes and, most importantly, your Scope of Work. To make that possible, we just need to finish this due diligence—a few more questions on my end, and then I can send something that's actually meaningful to you. Otherwise, you'd just be getting generic info. Does that sound fair?"
      },

      "call_length_question": {
        "title": "Call Length Question",
        "category": "Timing",
        "trigger": "Questions about call duration",
        "full_script": "We allocated 30 minutes for this due diligence session. I'll make sure we stick to that window. The goal for me is simply to gather the anchors we need to see if a structured engagement even makes sense on our end.",
        "key_principle": "Set expectations upfront while maintaining due diligence frame."
      },

      "can_we_make_this_quick": {
        "title": "Can We Make This Quick?",
        "category": "Timing",
        "trigger": "Want to shorten the call",
        "full_script": "Completely understand the time pressure. I'm going to be concise with my questions, but we need the full time allocated to ensure we capture the necessary anchors (like LTV and conversion rates) so the scope reflects your economics, not guesses. Let's start with your average contract value or LTV of a new account.",
        "key_principle": "Validate time pressure but insist on complete discovery for proper scoping."
      },

      "guarantees": {
        "title": "Guarantees",
        "category": "Quality",
        "trigger": "Requests for guarantees or assurances",
        "full_script": "We don't provide traditional 'guarantees' because revenue outcomes are probabilistic. What we provide is risk mitigation through structure:<br><br>- 50% contingent payment tied to measurable milestones\n- Conservative milestone calculations based on your benchmarks\n- Complete transparency and reporting\n- Your veto power through the QOA™<br><br>If we don't deliver the agreed outcomes, you don't pay. This is stronger than any traditional guarantee because your money is protected.<br><br>Would you like to see how the milestone is calculated to ensure it's achievable?",
        "key_principle": "Structural guarantees through risk mitigation, not promises.",
        "story_mode": {
          "title": "Story Mode: The Milestone Structure in Action Story",
          "when_to_use": "Use when prospects need proof that the guarantee is real and not just marketing language. Best for risk-averse buyers who've been burned by empty promises. 2-3 minute investment shows guarantee through real example.",
          "script": "That's a great question, and I understand why you're asking. Most 'guarantees' in this space are just marketing fluff.<br><br>Let me show you what our guarantee looks like in practice.<br><br>(Pause, shift into story mode)<br><br>We had a client who came to us <i>extremely skeptical</i>. They'd worked with two vendors who 'guaranteed results' — both failed to deliver, blamed the client's sales process, and kept the money anyway.<br><br>When they asked about our guarantee, here's what we told them — and what we actually delivered.<br><br>We built a <b>90-day engagement with a 45-day milestone</b>. The milestone was <b>15 qualified executive meetings</b>, anchored conservatively to their current performance (their best rep averaged 8 meetings/month, so we committed to <b>1.9x that baseline</b>).<br><br>Here's how the structure worked:<br><br><b>50% upfront</b> ($25K) — this capitalized the infrastructure, messaging, and execution needed to hit the milestone.<br><br><b>50% contingent</b> ($25K) — this <u>only unlocked when the 15 meetings were verified</u>. If we didn't hit it by day 45, we kept working — day 50, day 55, day 60 — until we delivered. No additional fees, no excuses.<br><br>By <b>day 52</b>, we'd delivered <b>16 verified meetings</b>. They closed <b>3 of them</b> at their normal 20% conversion rate. That's <b>$180K in new revenue</b> from a $50K investment — <b>3.6x ROI</b> in worst-case scenario.<br><br>The second payment unlocked at day 52. Not day 45, but the milestone was hit, the contract was honored, and they got exactly what was promised.<br><br>(Pause, bring it back)<br><br>That's the difference between a 'guarantee' and <b>structural risk mitigation</b>. We don't promise closed deals — that's your sales process. But we <u>do guarantee the input</u> — the qualified meetings that feed your process. If we don't deliver, you don't pay. Your money is protected by the milestone structure, not by our promises.<br><br>Now, to see if that structure makes sense for your business: what's your current best performer averaging in qualified meetings per month?"
        }
      },

      // Additional Money & Budget handlers

      // Opening Frame (Phase 1) - 8 handlers
      "just_email_me_info": {
        "title": "Just Email Me Info",
        "category": "Opening",
        "trigger": "Deflection requesting to just email information, or when standard discovery is blocked for any reason",
        "key_principle": "Say yes confidently, use as leverage to finish discovery. Offer alternative path without assuming why standard path failed.",
        "alternative_path_offer": {
          "title": "Alternative Path Offer",
          "when_to_use": "When standard discovery is blocked for any reason",
          "base_script": "I'm sensing that diving into discovery right now doesn't feel right. That's completely fair.<br><br>Here's what might make more sense: <b>I'll send you [case studies/references/draft proposal]. You review on your timeline, and if it checks out, we reconnect for a proper discovery call.</b><br><br>Does that work better?",
          "variations": {
            "if_they_need_social_proof": {
              "title": "If they need social proof",
              "script": "I'll send you client case studies with results data and testimonials."
            },
            "if_they_need_reference_validation": {
              "title": "If they need reference validation",
              "script": "I'll include reference contacts you can reach out to directly."
            },
            "if_they_need_to_see_model": {
              "title": "If they need to see the model",
              "script": "I'll send you a draft scope so you can see what the engagement structure looks like."
            },
            "if_they_need_time": {
              "title": "If they need time",
              "script": "Take a week to review everything, then let's reconnect if it makes sense."
            }
          }
        },
        "full_script": "Of course, I'll send you information after the call. What I'd like to do is include not just our deck, but also 1-2 recent successes and, most importantly, your Scope of Work. To make that possible, we just need to finish this due diligence—a few more questions on my end, and then I can send something that's actually meaningful to you. Otherwise, you'd just be getting generic info. Does that sound fair?<br><br>Say yes confidently. Use the request as leverage to finish discovery, positioning the customized Scope of Work (SOW) as the true asset they need, which requires gathering necessary anchors during the current call."
      },

      "research_mode": {
        "title": "Research Mode",
        "category": "Opening",
        "trigger": "When prospects say they're 'just doing research'",
        "full_script": "Totally fair—honestly, I wouldn't prioritize it myself without seeing a scope. That's exactly why we're in due diligence now. Let's at least put an engagement model in front of you—then you'll know if it's worth prioritizing down the road.<br><br>Validate the prospect's stance. Reframe discovery as mutual due diligence to build the engagement model. Even if they aren't ready to buy, having the scoped, risk-mitigated model ensures they have a defensible option when their timing aligns.",
        "key_principle": "Validate, reframe to mutual due diligence."
      },

      "not_interested": {
        "title": "Not Interested",
        "category": "Opening",
        "trigger": "Early hard rejection or 'not interested' - any intensity level",
        "key_principle": "Match response intensity to their tone. Abundance mindset, but always try to anchor scope first.",
        "type_a_polite_neutral": {
          "title": "Type A - Polite/Neutral",
          "when_to_use": "Polite or neutral tone",
          "script": "I appreciate the clarity. If this isn't a priority for you right now, I completely respect that, as we operate with an abundance mindset. Would it still make sense to at least finish the due diligence and build out the engagement model so you have a clear, risk-mitigated option scoped to your economics if internal priorities shift down the road?<br><br>If they are truly healthy and uninterested, move on (abundance mindset). However, always try to anchor the scope first, offering the model as a non-committal strategic asset for future reference."
        },
        "type_b_defensive_testing": {
          "title": "Type B - Defensive (Testing You)",
          "when_to_use": "Defensive tone, testing you",
          "script": "I appreciate the directness. Before I let you go - what's driving the 'not interested'? Is it timing, fit, or something else? Just want to make sure I'm not missing something."
        },
        "type_c_hostile_get_out": {
          "title": "Type C - Hostile (Get Out)",
          "when_to_use": "Hostile tone, wants you to leave",
          "script": "I hear you. I'll follow up in 6 months in case circumstances change. Appreciate your time."
        },
        "full_script": "I appreciate the clarity. If this isn't a priority for you right now, I completely respect that, as we operate with an abundance mindset. Would it still make sense to at least finish the due diligence and build out the engagement model so you have a clear, risk-mitigated option scoped to your economics if internal priorities shift down the road?<br><br>If they are truly healthy and uninterested, move on (abundance mindset). However, always try to anchor the scope first, offering the model as a non-committal strategic asset for future reference."
      },

      "differentiation_question": {
        "title": "Differentiation Question",
        "category": "Opening",
        "trigger": "When asked 'What makes you different?'",
        "full_script": "What makes us different is that we operate as a Revenue Advisory group whose structure is built around risk mitigation. We don't sell mechanics. We anchor engagements to your internal benchmarks, committing to outperform your current best producer by 1.5×–2×. This entire structure ensures worst case, you still win, and best case, you scale the outcome.<br><br>Differentiate by emphasizing Positioning as an advisory firm, Anchoring to the client's math, and Risk Mitigation (P.A.RM.™). The distinction is selling outcomes/governance, not deliverables/mechanics.",
        "key_principle": "Differentiate through P.A.RM.™ positioning."
      },

      "who_else_worked_with": {
        "title": "Who Else Worked With",
        "category": "Opening",
        "trigger": "Social proof requests about other clients",
        "full_script": "That’s a fair question, and I'd be happy to share our executive deck and a few anonymized case studies after this call. Just for immediate context, our firm also runs a Commercial Finance arm. We've structured capital and acquisitions in various sectors, often relying on the same channel we'll discuss today. Now, to make sure the materials I send are relevant, can you confirm your average contract value or LTV of a new account?<br><br>Say yes happily and confirm you will send the assets (deck + case studies). Leverage the Commercial Finance arm positioning as immediate credibility proof. Immediately pivot back to core anchor extraction (ACV/LTV).",
        "key_principle": "Say yes happily, leverage Commercial Finance positioning."
      },

      "calling_other_people": {
        "title": "Calling Other People",
        "category": "Opening",
        "trigger": "Territorial concern about calling others in company",
        "full_script": "That’s a great question, and we prioritize internal alignment. Our goal here is to map the decision architecture. We need to know: How do new advisory engagements usually get greenlit internally? And who else needs to see the Scope of Work summary before we formalize? We ensure all communication aligns with the approved internal review cadence.<br><br>This redirects the concern (which is usually related to approval flow/hierarchy) into a necessary procedural question that maintains the advisory posture of conducting due diligence. You transition the territorial question into a conversation about mapping the internal Approval Flow.",
        "key_principle": "Redirect to mapping decision architecture."
      },

      // Fork Deflection (Phase 3) - 6 handlers
      "still_confused": {
        "title": "Still Confused",
        "category": "Fork",
        "trigger": "When prospects express confusion after fork explanation",
        "full_script": "Great question. We've invested well over six figures into a private internal infrastructure, and that's what allows us to plug into any and every channel depending on what makes the most sense for a client. The focus is the engagement model—what the end looks like before we even start—and reverse-engineering it so that your risk is completely mitigated. From there, the only question is whether those outcomes tie directly to your LTV math and growth goals. Now, to anchor those goals, what is the average LTV of a new account?<br><br>This leverages the 'All In One Big Handle' that uses the investment in infrastructure and the focus on risk mitigation (the structure) as the answer, immediately pivoting away from confusion and back to collecting required anchors.",
        "key_principle": "Leverage infrastructure investment and risk mitigation focus."
      },

      "too_much_information": {
        "title": "Too Much Information",
        "category": "Fork",
        "trigger": "Overwhelm signal after fork explanation",
        "full_script": "I appreciate that; we operate at the executive level, and this structure is designed to be board-defensible, not light reading. The key takeaway is simple: we anchor everything to your numbers and mitigate risk. To build that model properly, we need two more minutes on your current conversion ratios. What percentage of initial interest turns into a qualified meeting?<br><br>Acknowledge the complexity, then immediately affirm that the complexity is necessary because the engagement is high-level and risk-mitigated. Redirect the conversation back to the specific anchors needed for the SOW.",
        "key_principle": "Affirm complexity is necessary for board-defensible engagement."
      },

      "want_something_in_writing": {
        "title": "Want Something in Writing",
        "category": "Fork",
        "trigger": "Request for written materials after fork explanation",
        "full_script": "Absolutely, happy to send everything after the call, including our executive deck and a case study. But generic information won't help you. To send you something that's actually meaningful—the tailored Scope of Work with your math in it—we just need to finish collecting these final anchors. Otherwise, you're just reading fluff. Does that sound fair?<br><br>Agree confidently to send the artifacts (deck, case studies). Use the desire for information as leverage to complete due diligence, positioning the personalized Scope of Work (SOW) as the true, customized asset they need, which requires their data.",
        "key_principle": "Agree happily, use as leverage to complete discovery."
      },

      "case_study_request_mid_explanation": {
        "title": "Case Study Request Mid-Explanation",
        "category": "Fork",
        "trigger": "Request for case studies during fork explanation",
        "full_script": "That’s a fair request. We have case studies and our executive deck ready, which I'll send right after this call. Just for immediate context: our firm also runs a Commercial Finance arm and structures multi-million-dollar deals in high-stakes markets. We apply that same rigorous, risk-mitigated discipline to our Revenue Advisory mandates. To ensure the scope reflects your rigor, can you confirm your average contract value or LTV of a new account?<br><br>Say yes happily and confirm the case study will be sent later (Case Study 1 is the initial workhorse). Leverage the Commercial Finance arm positioning as immediate, high-level credibility. Immediately pivot back to core anchor extraction (ACV/LTV).",
        "key_principle": "Say yes happily, leverage Commercial Finance positioning."
      },

      "doesnt_sound_like_what_we_need": {
        "title": "Doesn't Sound Like What We Need",
        "category": "Fork",
        "trigger": "Misalignment signal during fork explanation",
        "full_script": "I appreciate the clarity. That’s precisely why we run this due diligence first: to see if the structure we prescribe aligns with your current economics. If the model doesn't pencil out, we won't proceed, and you lose nothing but 30 minutes. Let’s finish collecting the key anchors—like your top producer's monthly output—and then we'll know definitively if we're a misalignment or an opportunity.<br><br>Validate the prospect's concern, treating it as data about their system rather than a verdict on your solution. Reframe the call as mutual diagnosis (due diligence) to build a model that either proves fit or results in polite disqualification, maintaining the advisory posture.",
        "key_principle": "Validate, reframe as mutual due diligence."
      },

      "different_from_other_industries": {
        "title": "Have You Worked In My Industry Before?",
        "category": "Fork",
        "trigger": "Have you worked in my industry before? / Do you have experience in our sector? / We're different from those industries",
        "full_script": "<i>I'll be the first to tell you</i> we <b>haven't generated demand in your industry yet</b> - but that's <u>exactly what our entire thesis is built on</u>.<br><br>We only work with companies that have <b>sophisticated, brand-sensitive profiles</b> — groups that are notoriously hard to generate interest for while maintaining the integrity of their brand. That's where we live.<br><br>Let me walk you through how this works in practice.<br><br>(Pause, shift into story mode)<br><br>One of our clients operates in one of the <b>most conservative industries imaginable</b> — pedigree-heavy, brand-sensitive, reputation first. If you make one wrong move, you lose the room forever.<br><br>They wanted more sell-side contacts — <i>single and multi-family offices, CIOs, credit funds, SBICs, regional banks</i> — profiles that are very hard to engage and build trust with.<br><br>Our analysts broke down their audience and realized 75% of the decision-makers lived on LinkedIn, and more than 90% still relied on email for professional communication.<br><br>So we built a <b>diligence process</b> where we extracted 50 years of their institutional experience — the way they speak, the outcomes they anchor to, the integrity they protect. Then we designed <b>enterprise-grade messaging</b> that felt native to their world — not generic outreach, but language that sounded like it came from a peer, not a vendor.<br><br>We deployed that through our <b>private infrastructure</b> — controlled, compliant, brand-safe. Within 45 days, we'd generated 23 qualified executive-level meetings with exactly the profiles they needed. By day 90, they'd closed 4 new mandates worth over $2M in fees.<br><br>(Pause, bring it back to them)<br><br>The reason I'm sharing that is because what you thought might be a weakness — that we haven't worked in your industry — is actually <u>why we're different from everyone else</u>. Our entire thesis is built around <b>thriving where others can't</b>, taking the most difficult, high-integrity markets and generating demand without breaking their code.<br><br>Here's how this works: because we haven't generated demand in your vertical yet, we'll rely on <b>your team's institutional knowledge</b> while our system extracts, codifies, and operationalizes it into messaging. That's how we replicate decades of experience in 45 days.<br><br>You green-light everything we build — the messaging, the targeting, the positioning — before anything goes out. That's how we maintain brand integrity while generating results. <b>You become the co-architect of your own growth infrastructure</b>.<br><br>(Pivot back to discovery)<br><br>Now, to see if that model makes sense for your business, I'd need to understand how you're currently generating demand. How are you bringing in new opportunities today, and what does that process look like from first touch through to a converted client?",
        "key_principle": "Objection Positioning™: Turn the weakness into your thesis. Use Story Mode Selling™ to deliver what you do, how, who for, and results through narrative — not dictionary definitions. This creates novelty and bypasses objection sophistication. Always pivot back to discovery after the story."
      },

      // Discovery - Top of Funnel (Phase 2A) - 10 handlers
      "doesnt_answer_evasion": {
        "title": "Doesn't Answer / Evasion",
        "category": "Discovery Top",
        "trigger": "When prospects deflect or avoid answering questions",
        "full_script": "I appreciate you walking me through that, but we're still missing [Specific Anchor]. That number is essential for me to calculate the Baseline for your Scope of Work, which ensures the proposal is tied to your economics, not guesses. Can you give me a fair ballpark, or should we schedule a quick 15-minute follow-up to capture the rest of these non-negotiable anchors?<br><br>If anchors are missing, the advisor must schedule a 'Discovery Part 2' immediately. The scope must be grounded in economics, not fiction.",
        "key_principle": "Schedule Discovery Part 2 if anchors are missing."
      },

      "why_do_you_need_to_know_this": {
        "title": "Why Do You Need to Know This?",
        "category": "Discovery Top",
        "trigger": "Defensive or suspicious about why data is needed",
        "full_script": "That’s a fair question. The reason we're spending time on [Specific Metric, e.g., sales cycle/rep output] is because we anchor our fee and risk mitigation directly to your internal economics. This data is the foundation of the Scope of Work that arms your leadership to defend the capital allocation. If we skip this, the proposal is grounded in fiction. Is there a number we can use for a fair ballpark?<br><br>The questions are intentional, designed to collect anchors that leadership cares about, making the proposal defensible. Discovery is a necessary and controlled interrogation to extract these inputs.",
        "key_principle": "Questions collect defensible anchors for leadership."
      },

      "can_i_get_back_to_you": {
        "title": "Can I Get Back to You?",
        "category": "Discovery Top",
        "trigger": "Needs time to gather data or doesn't have it handy",
        "full_script": "I appreciate you prioritizing accuracy. Since [Specific Anchor] is non-negotiable for building a defensible scope, we should finish this process cleanly. Let's book a quick 15-minute Discovery Part 2 right now—say, tomorrow morning—to capture the rest of these anchors before I start drafting the Scope of Work. How does [Time] look?<br><br>If data is missing or soft, the advisor must book Discovery Part 2 during the call; never 'hope' email fills the gaps.",
        "key_principle": "Book Discovery Part 2 immediately if data is missing."
      },

      "this_is_too_many_questions": {
        "title": "This Is Too Many Questions",
        "category": "Discovery Top",
        "trigger": "Friction with the discovery process length",
        "full_script": "I completely understand. We run a rigorous due diligence process because we're scoping a capital commitment, not selling a widget, so these anchors are critical. Let's make sure we capture the next three inputs quickly: What is the average length of your sales cycle, first touch to closed-won?<br><br>Acknowledge the rigor, but immediately pivot back to the necessity of collecting the required anchoring data (e.g., pricing, cycle, conversions) to ensure the scope is accurate.",
        "key_principle": "Acknowledge rigor, pivot to necessity of anchoring data."
      },

      "can_we_come_back_to_that_later": {
        "title": "Can We Come Back to That Later?",
        "category": "Discovery Top",
        "trigger": "Avoiding specific questions by deferring",
        "full_script": "I hear you, but the reason I need [Specific Anchor, e.g., capacity/LTV] now is that it directly dictates the milestone we can promise in the Scope of Work. If we promise volume you can't fulfill, or value that doesn't pencil, we set the engagement up to fail. Let's capture your capacity limit now, and then we can move onto the decision flow.<br><br>The order of questions (economics before tactics) is mandatory to maintain authority and prevent premature pitching. The capacity question is a key constraint that must be logged to prevent sabotaging the SOW.",
        "key_principle": "Economics before tactics to maintain authority."
      },

      "i_need_to_check_with_my_team_first": {
        "title": "I Need to Check With My Team First",
        "category": "Discovery Top",
        "trigger": "Can't answer independently, needs team input",
        "full_script": "That’s exactly the kind of internal detail we need to capture. Who specifically needs to approve [Metric]? And how does the Scope of Work typically move through legal and finance? We need to align our proposal cadence with your internal review cadence.<br><br>This objection is immediately converted into a required part of the discovery process: Mapping the Decision Path. This equips the internal champion and shows advisory posture.",
        "key_principle": "Convert to mapping the decision path."
      },

      "thats_confidential_information": {
        "title": "That's Confidential Information",
        "category": "Discovery Top",
        "trigger": "Won't share sensitive metrics",
        "full_script": "I completely respect that; a ballpark is perfectly acceptable for modeling the scope. The only reason we require [Metric] is to ensure the Baseline we anchor to is conservative and defensible for your CFO. If we scope high, we expose you to risk. What's the closest approximate figure you can share for internal modeling?<br><br>Reassure them that ballparks are fine for modeling purposes. The goal is to obtain enough data to build a scope that protects their downside and justifies the fee as a board-defensible capital allocation.",
        "key_principle": "Ballparks are acceptable for conservative modeling."
      },

      "why_does_that_matter": {
        "title": "Why Does That Matter?",
        "category": "Discovery Top",
        "trigger": "Questioning the relevance of questions",
        "full_script": "That matters because it's the essential input for calculating your Milestone. We commit to outperforming your current best output by 1.5×. To calculate that accurately, we need [Specific Anchor]. Otherwise, we're just talking about hypotheticals, not a risk-mitigated structure anchored to your growth goals.<br><br>Reiterate the principle of Anchoring. The information is relevant because it defines the benchmark required for the 45-day milestone trigger.",
        "key_principle": "Information defines the milestone benchmark."
      },

      "were_doing_fine_without_help": {
        "title": "We're Doing Fine Without Help",
        "category": "Discovery Top",
        "trigger": "No pain admitted, status quo is working",
        "full_script": "That’s great news; it means we're talking to a healthy, well-run business. Most of our clients are doing well, but they hit a capacity or channel ceiling. Our goal here is simply to build a strategic Scope of Work that shows whether installing a controlled channel, anchored to a 1.5× baseline, complements your existing growth and helps you break through that ceiling. Let's look at your capacity limits: what's the maximum number of new accounts your team can comfortably onboard per quarter?<br><br>Validate their current success (abundance mindset). Reframe the engagement not as fixing a problem, but as introducing a new, scalable channel to exceed the natural cap of their existing channels (like referrals).",
        "key_principle": "Reframe as exceeding capacity ceiling."
      },

      // Discovery - Middle/Bottom of Funnel (Phase 2B) - 9 handlers
      "were_rebuilding_our_process_right_now": {
        "title": "We're Rebuilding Our Process Right Now",
        "category": "Discovery Mid",
        "trigger": "Currently in transition period with process changes",
        "full_script": "That's understandable; growth often brings transition. Since we know the final output needs to be a repeatable conversion process, let's define what that *target* process looks like. If we assume the process is running perfectly today, who is responsible for turning a qualified meeting into a signed proposal? Walk me through that clean sequence.<br><br>When chaos exists, the advisor uses curiosity to define or reconstruct the baseline conversion process that the new demand will feed. The advisory role requires Process Conviction to investigate their process without insecurity.",
        "key_principle": "Use curiosity to define target conversion process."
      },

      "our_process_is_broken": {
        "title": "Our Process Is Broken",
        "category": "Discovery Mid",
        "trigger": "Admission of dysfunctional sales process",
        "full_script": "I appreciate the honesty; that's what we're here to diagnose. When you say broken, where does the deal flow typically stop? After the first call? At the proposal stage? Let's walk through the middle of the funnel: When someone expresses interest, who is the internal touchpoint, and what assets (documentation, case study) are sent next?<br><br>Treat the dysfunction as diagnostic data. Deploy Discovery as Due Diligence™ (DaDD™) to trace the breakdown, using the 'and then what happens' chain to map the conversion flow.",
        "key_principle": "Treat dysfunction as diagnostic data."
      },

      "can_you_help_us_build_the_process": {
        "title": "Can You Help Us Build The Process?",
        "category": "Discovery Mid",
        "trigger": "Request for consulting vs execution services",
        "full_script": "Our model is designed to architect the growth strategy and then deploy qualified demand into a functional system. We are here to fuel the engine, not rebuild your internal staff or manage training. If we were to install a steady flow of qualified interest, who internally would be responsible for converting that demand into a signed client? We need to establish clear ownership.<br><br>The advisory role is about defining the engine, not staffing it. Clarify the accountability boundary: the advisor owns the input (interest creation), the client owns the conversion (staffing).",
        "key_principle": "Clarify accountability: input vs conversion ownership."
      },

      "we_have_a_problem_converting": {
        "title": "We Have a Problem Converting",
        "category": "Discovery Mid",
        "trigger": "Conversion issues in middle/bottom of funnel",
        "full_script": "That is critical insight. The entire purpose of this due diligence is to draw a clear line: we own the input (qualified demand), and you own the conversion. To make sure we don't scope based on assumptions, can you tell me what percentage of qualified opportunities typically result in a closed deal today?<br><br>Use this moment to Anchor Accountability by Funnel Stage. If conversion is weak, the Scope of Work must reflect their existing low conversion ratio, protecting the advisor from blame for internal inefficiency.",
        "key_principle": "Anchor accountability by funnel stage."
      },

      "we_need_help_with_closing_not_lead_gen": {
        "title": "We Need Help With Closing, Not Lead Gen",
        "category": "Discovery Mid",
        "trigger": "Focus on closing skills rather than pipeline generation",
        "full_script": "I hear you—closing is a massive priority. Our engagement focuses on the single biggest constraint, which is predictable pipeline creation. We deliver Qualified Introductions that expand your pipeline; your team's expertise dictates the close rate. What specific stage are most deals stalling at, and who is currently responsible for closing new accounts?<br><br>Reiterate that the advisory guarantees pipeline creation and Qualified Introductions (QIs), as revenue conversion is outside the advisor's control. Use their focus on closing to dive deeper into MOF/BOF mechanics.",
        "key_principle": "Guarantee pipeline creation, not conversion outcomes."
      },

      "our_team_is_overwhelmed_already": {
        "title": "Our Team Is Overwhelmed Already",
        "category": "Discovery Mid",
        "trigger": "Capacity concerns with current team bandwidth",
        "full_script": "Thank you for flagging that—throughput limits are critical to success. We must pace delivery to match absorption and protect your close rates. What is the maximum number of new, qualified meetings your top producer can realistically handle per week without negatively impacting follow-up quality?<br><br>Capacity constraints are key anchors and must be integrated into the Scope of Work as a Risk Mitigation measure to ensure the advisor controls pacing and protects the client's close rates.",
        "key_principle": "Pace delivery to match absorption capacity."
      },

      "we_lose_deals_at_specific_stage": {
        "title": "We Lose Deals At [Specific Stage]",
        "category": "Discovery Mid",
        "trigger": "Stage-specific deal loss identification",
        "full_script": "Understood. Losing deals at the [Proposal/Demo] stage is often a sign of misalignment upstream. Can you walk me through the steps immediately before that stage? What assets (documentation, pricing sheet, case studies) are exchanged at that point, and who is responsible for that final handoff?<br><br>Use the stage-specific loss as a signal to deepen the MOF/BOF diagnosis. This process reveals the flow of assets and the specific owner of the failure point.",
        "key_principle": "Use stage-specific loss to deepen diagnosis."
      },

      "our_sales_cycle_is_too_long": {
        "title": "Our Sales Cycle Is Too Long",
        "category": "Discovery Mid",
        "trigger": "Concerns about extended sales cycle duration",
        "full_script": "Cycle length is a huge lever for ROI. To scope this accurately, can you confirm the historical average: What is the typical number of days from the *first meeting* to when the client is *closed-won*? This dictates whether we anchor our engagement to Revenue (short cycle) or Pipeline Value (long cycle).<br><br>This is a required anchor, critical for choosing the appropriate anchoring strategy. Validate the concern, but ensure the exact duration is captured for the SOW.",
        "key_principle": "Cycle length determines anchoring strategy."
      },

      "we_cant_get_past_gatekeepers": {
        "title": "We Can't Get Past Gatekeepers",
        "category": "Discovery Mid",
        "trigger": "Difficulty accessing decision-makers",
        "full_script": "Gatekeepers are common, and our system is designed to bypass them using executive segmentation logic and messaging that speaks directly to leadership outcomes—the reason you're on this call is proof of that system. To ensure we align with your internal flow: once an executive conversation is booked, how do those opportunities typically get greenlit internally? Who must see the Scope of Work summary before we formalize?<br><br>Leverage the advisor's successful outbound approach as instant proof of concept. Immediately pivot the conversation from external access barriers to mapping the internal Approval Flow.",
        "key_principle": "Leverage successful segmentation as proof of concept."
      },

      // Discovery - Bottom of Funnel Constraints (Phase 2C) - 9 handlers
      "we_want_to_scale_beyond_current_capacity": {
        "title": "We Want to Scale Beyond Current Capacity",
        "category": "Discovery Bottom",
        "trigger": "Growth goals that exceed current team capacity",
        "full_script": "That's exactly the right problem to solve. To ensure we don't overwhelm your closers and hurt your win rate, we must scope based on capacity limits. What is the maximum number of new, qualified opportunities your team can comfortably process per month while maintaining current close rates?<br><br>This accepts the goal while immediately anchoring the capacity constraint. The SOW must pace delivery to match absorption to protect the client's close rates.",
        "key_principle": "Accept growth goal, anchor to capacity constraint."
      },

      "we_need_to_hire_more_closers_first": {
        "title": "We Need to Hire More Closers First",
        "category": "Discovery Bottom",
        "trigger": "Team expansion needed before scaling",
        "full_script": "That's a proactive step, but hiring takes time, and our 45-day milestone is anchored to *current* capacity. Let's scope based on your top producer's capacity right now; that ensures we generate enough reliable pipeline value in the short term to justify those future hires. What throughput does your best producer manage monthly?<br><br>Use the short-term engagement and anchoring as the justification for proceeding. The performance data is mandatory for the SOW.",
        "key_principle": "Anchor to current capacity for short-term milestone."
      },

      "our_sales_cycle_is_6_months": {
        "title": "Our Sales Cycle Is 6+ Months",
        "category": "Discovery Bottom",
        "trigger": "Extended sales cycle duration",
        "full_script": "Thank you for that clarity. Because your sales cycle is longer than 90 days, we will anchor the Scope of Work entirely on predictable Pipeline Value, not realized revenue. To model that value correctly, what is the LTV or average contract value of a new account?<br><br>A sales cycle over 90 days dictates anchoring the engagement to Pipeline Value (PLV), protecting the advisor from closed-revenue outcomes they cannot control.",
        "key_principle": "Long cycles require Pipeline Value anchoring."
      },

      "our_margins_are_thin": {
        "title": "Our Margins Are Thin",
        "category": "Discovery Bottom",
        "trigger": "Profitability concerns affecting ROI calculations",
        "full_script": "Margins are a critical anchor point. We need your gross margin percentage to model the ROI multiple that justifies this capital allocation. What percentage are we working with? We structure the engagement so that even on thin margins, the worst-case pipeline delivered still returns multiples of the investment.<br><br>Gross margin percentage is a required anchor for Baseline Economics. Reframe the fee as a risk-mitigated capital allocation rather than a cost.",
        "key_principle": "Margins are required anchor for ROI modeling."
      },

      "we_have_high_churn": {
        "title": "We Have High Churn",
        "category": "Discovery Bottom",
        "trigger": "Customer retention issues affecting lifetime value",
        "full_script": "High churn is important data—that tells us we must use a conservative LTV figure when calculating Pipeline Value to ensure the scope remains defensible. What is the average retention period, or, conversely, what's the historical churn rate we should use to define the Lifetime Value of a typical client?<br><br>LTV definition must be defensible and accurate. Churn data is used to stress-test the math and set a conservative anchor, protecting the advisor from being judged on inflated pipeline value.",
        "key_principle": "Use conservative LTV for high churn scenarios."
      },

      "were_seasonal_business": {
        "title": "We're Seasonal Business",
        "category": "Discovery Bottom",
        "trigger": "Seasonal variations in business cycle",
        "full_script": "Understood, seasonality must be built into the pacing of the SOW. When are your two biggest seasonal constraints (slowest/fastest periods)? We will set the 45-day milestone either outside that slow period or scope throughput conservatively to align with the constraints you've flagged.<br><br>Seasonality is a constraint that must be surfaced and factored into the SOW to maintain timeline integrity.",
        "key_principle": "Factor seasonality into SOW pacing."
      },

      "our_close_rate_is_terrible": {
        "title": "Our Close Rate Is Terrible",
        "category": "Discovery Bottom",
        "trigger": "Admission of poor conversion performance",
        "full_script": "I appreciate the honesty. That conversion ratio is a necessary anchor. We will use that exact rate to model the conservative Baseline in the Scope of Work. This ensures we are only accountable for the input (Qualified Introductions), and the responsibility for conversion remains internal. What is the hard percentage number we should use?<br><br>This reinforces Accountability Anchoring by Funnel Stage: the client owns conversion regardless of their success rate. The current low rate becomes the baseline metric in the SOW.",
        "key_principle": "Client owns conversion responsibility."
      },

      "only_the_founder_can_close": {
        "title": "Only the Founder Can Close",
        "category": "Discovery Bottom",
        "trigger": "Founder dependency for deal closure",
        "full_script": "Founder dependency is common, but it creates a strict capacity ceiling. Since you own the conversion, we must pace the pipeline to match the maximum number of opportunities you personally can handle per week without burning out or compromising quality. What is that precise weekly maximum?<br><br>The advisor immediately converts the dependency into a capacity constraint required for risk mitigation and pacing control.",
        "key_principle": "Convert founder dependency to capacity constraint."
      },

      "we_have_no_crm_or_tracking": {
        "title": "We Have No CRM or Tracking",
        "category": "Discovery Bottom",
        "trigger": "Lack of infrastructure for tracking and management",
        "full_script": "No formal tracking means we need to rely on the functional reality of your business. Let's reconstruct your last successful closed deal: What assets were exchanged, who was responsible, and how long did it take? That reconstruction will serve as the repeatable process we feed.<br><br>If metrics are unavailable, the advisor conducts a forensic audit to reconstruct the process using historical wins as a defensible baseline.",
        "key_principle": "Reconstruct process from historical wins."
      },

      // The Tic (Process Repeatability) (Phase 2D) - 7 handlers
      "no_its_not_repeatable": {
        "title": "No, It's Not Repeatable",
        "category": "Tic",
        "trigger": "Honest admission that sales process is not repeatable",
        "full_script": "Understood. If it's not formally repeatable yet, let's establish the baseline model together. Can you walk me through the absolute last client you successfully closed, step-by-step, from first conversation to signed agreement? That successful sequence will serve as the repeatable process we feed.<br><br>When the process is denied, the advisor performs DaDD™ reconstruction of the last successful deal, making that sequence the baseline process to be fed by the new channel.",
        "key_principle": "Reconstruct last successful deal as baseline."
      },

      "were_still_figuring_it_out": {
        "title": "We're Still Figuring It Out",
        "category": "Tic",
        "trigger": "Early stage company without established process",
        "full_script": "Figuring it out is normal, which is why this is mutual due diligence. Our engagement focuses on architecting predictable demand that feeds a working process. To define that working process, who was the last client you converted, and what three steps did you take to close them? Let's map that sequence.<br><br>This reframes the chaos as a necessary diagnostic step, demanding the reconstruction of the winning process to set the anchor.",
        "key_principle": "Reframe chaos as diagnostic opportunity."
      },

      "its_repeatable_when_i_do_it_personally": {
        "title": "It's Repeatable When I Do It Personally",
        "category": "Tic",
        "trigger": "Founder dependency for repeatable success",
        "full_script": "Perfect—that means *you* are the repeatable process. Let's map your personal conversion sequence: When you take a qualified introduction, what specific assets do you send, what is your typical follow-up cadence, and how quickly do you close? That sequence is the process we must feed, paced only to your maximum capacity.<br><br>The founder's successful methodology becomes the defined, repeatable system that the engagement will rely upon, immediately followed by anchoring to the founder's time constraint.",
        "key_principle": "Founder becomes the repeatable system."
      },

      "only_in_certain_markets": {
        "title": "Only in Certain Markets",
        "category": "Tic",
        "trigger": "Process works in specific market segments only",
        "full_script": "That clarity is vital. We will restrict the Scope of Work to only target that repeatable segment [Named Market/Segment]. To ensure our targeting is precise, can you share the average sales cycle and LTV specific to that segment alone? We must anchor to certainty.<br><br>This uses the specificity to solidify the Target Addressable Market (TAM) anchor, limiting scope creep and focusing the SOW on the segment where repeatable conversion (the 'Tic') is confirmed.",
        "key_principle": "Restrict scope to repeatable segments."
      },

      "was_repeatable_pre_covid_but_not_now": {
        "title": "Was Repeatable Pre-COVID But Not Now",
        "category": "Tic",
        "trigger": "Market changes affected process repeatability",
        "full_script": "That historical data is a useful benchmark. Now, focusing only on the *present* reality: If you had a qualified introduction today, what sequence of actions would you take to convert it? Who owns the follow-up, and what's the documentation flow? We must anchor to the current functional system.<br><br>Acknowledge the historical context, but pivot relentlessly to the current, functional sequence required for the new SOW. Past success is irrelevant to current anchoring.",
        "key_principle": "Anchor to current functional system only."
      },

      "used_to_work_but_doesnt_anymore": {
        "title": "Used to Work But Doesn't Anymore",
        "category": "Tic",
        "trigger": "Process that worked before but is now broken",
        "full_script": "A failed process is still data. Where does the deal consistently stop now—at the proposal, or earlier? Let's trace the flow of the *last deal that failed* to see what repeatable steps remain functional, and what sequence we need to rebuild and anchor to.<br><br>Treat failure as diagnostic data. Trace the point of breakdown to find the remaining functional segment of the funnel, establishing that functional segment as the new boundary for the engagement.",
        "key_principle": "Use failure data to find remaining functional segments."
      },

      "were_testing_different_approaches": {
        "title": "We're Testing Different Approaches",
        "category": "Tic",
        "trigger": "Multiple experimental approaches being tested",
        "full_script": "Experimentation introduces uncertainty, which undermines the risk mitigation in our model. For the purpose of the 90-day engagement, we need to anchor to one defined process. If you had to bet on one specific approach to successfully convert new demand, which thesis would that be? Let's lock that thesis in as the baseline process we feed.<br><br>The advisor prohibits variance during the engagement period, requiring the client to commit to one operational hypothesis to serve as the benchmarked anchor for the SOW. Uncertainty is incompatible with the risk-mitigation structure.",
        "key_principle": "Require commitment to one operational hypothesis."
      },

      // The Tac (Definition) (Phase 2E) - 9 handlers
      "thats_not_how_we_define_qualified": {
        "title": "That's Not How We Define Qualified",
        "category": "Tac",
        "trigger": "Rejection of the A/B/C qualification criteria, or when prospect's definition dramatically differs from yours",
        "key_principle": "Adopt A/B/C as objective, measurable standard. Address behavior (mismatched expectations) not assumed cause.",
        "definition_alignment_checkpoint": {
          "title": "Definition Alignment Checkpoint",
          "when_to_use": "When prospect's definition of 'qualified' dramatically differs from yours",
          "script": "Let me make sure we're aligned here. Your definition of qualified is [repeat their definition]. That's a fair standard, but <b>it's not what we do.</b><br><br>We generate first-touch introductions that feel like warm referrals because of the diligence and messaging precision. But they're not coming from your existing network—they're new relationships.<br><br><b>If your only acceptable channel is warm introductions from people who already trust you, then we're not the right fit.</b><br><br>Is that type of new channel interesting to you, or are you only looking to scale what you already have?"
        },
        "full_script": "That is absolutely fair, and we should tailor it. The reason we rely on the core A/B/C logic (Financially Able, Serviceable, Genuinely Interested) is because it creates the only standard that is objective and measurable for the 45-day Milestone. If we can agree on those three primary components, we can integrate your specific nuance into the Serviceable criteria.<br><br>The goal is to have them adopt the standard as a baseline truth because it is fair, reasonable, and measurable. This logic transforms subjective debates into objective standards."
      },

      "we_need_them_to_have_x_y_z": {
        "title": "We Need Them to Have X, Y, Z",
        "category": "Tac",
        "trigger": "Request for additional qualification criteria beyond A/B/C",
        "full_script": "I appreciate the detailed filtering. We typically keep the core criteria simple—two or three non-negotiables—because overloading the definition artificially narrows the Total Addressable Market (TAM), which limits yield. We can absolutely inherit structural constraints like [Name one constraint], but let's confirm the core A/B/C logic first to preserve optionality and ensure the Milestone is mathematically feasible.<br><br>You don't want 6-7 boxes to check, as that sets you up for failure. While structural constraints can be inherited, the advisor must preserve strategic control over the scope width.",
        "key_principle": "Keep criteria simple to preserve TAM optionality."
      },

      "only_c_level_titles_count": {
        "title": "Only C-Level Titles Count",
        "category": "Tac",
        "trigger": "Insistence on executive titles for qualification",
        "full_script": "That's an important distinction, and it's intentional that the definition omits hard-coding the final title. Qualification is about *fit, intent, and solvability* (A/B/C), not the badge. While our aim is always C-level, in sophisticated sales, wins often come via a strong champion one title south who influences upward. We account for this nuance to preserve efficiency and avoid unnecessary argument later.<br><br>The QOA™ definition deliberately omits the title requirement to avoid 'title fetishism' and acknowledge that strong champions 'one title south' are acceptable.",
        "key_principle": "Avoid title fetishism in qualification."
      },

      "they_must_have_current_vendor": {
        "title": "They Must Have Current Vendor",
        "category": "Tac",
        "trigger": "Requirement that prospects have existing vendor to replace",
        "full_script": "Understood. We will lock that replacement focus into the targeting criteria, which tightens the Serviceable anchor. To ensure the scope remains mathematically sound, we must confirm that the volume of vendors available for replacement is sufficient to support the 90-day engagement milestones we are anchoring to.",
        "key_principle": "This accepts the constraint as defining the scope, but immediately pivots the conversation back to the feasibility of the TAM and Sizable/Serviceable criteria. Accept constraint, verify TAM sufficiency."
      },

      "minimum_company_size_of_50m": {
        "title": "Minimum Company Size of $50M",
        "category": "Tac",
        "trigger": "Size requirements that narrow the target market",
        "full_script": "We will lock that minimum size constraint into the Scope of Work, as servicing must be tied to scale. To ensure the Milestone is mathematically feasible, we need to quickly verify the raw Total Addressable Market count of decision-makers in that size band. If the TAM is artificially narrow, we will need to adjust the Milestone projection to remain conservative and defensible.<br><br>Constraints are accepted and integrated into the SOW as risk mitigation. The advisor uses the constraint as leverage to confirm the TAM count, ensuring the math supports the required milestone outputs.",
        "key_principle": "Verify TAM count supports milestone feasibility."
      },

      "i_need_to_run_this_by_my_team": {
        "title": "I Need to Run This by My Team",
        "category": "Tac",
        "trigger": "Need for team approval on qualification definition",
        "full_script": "I appreciate the need for internal alignment—this definition governs risk and accountability. Who specifically needs to confirm the A/B/C criteria before we formalize the Scope of Work? We need to align our proposal cadence with your internal review cadence so we can arm your Champion properly for the review call on [Date].<br><br>This turns a deflection into a required part of the discovery process: Mapping the Decision Path. This equips the internal champion and shows advisory posture.",
        "key_principle": "Convert to decision path mapping."
      },

      "what_if_they_lie_about_being_interested": {
        "title": "What If They Lie About Being Interested?",
        "category": "Tac",
        "trigger": "Concern about prospect dishonesty in qualification",
        "full_script": "That is why we introduced the power transfer (The Toe). We are giving you the veto. If a prospect is disingenuous, you simply verify them as 'Disqualified' in the post-meeting follow-up, and they do not count toward the Milestone. You retain control over quality, protecting the engagement.<br><br>The QOA™ transfers perceived control to the client precisely to dissolve the quality objection. If they lie, the client, as the judge, simply does not credit the milestone.",
        "key_principle": "Toe provides veto control over quality."
      },

      "problem_aware_is_too_subjective": {
        "title": "Problem-Aware Is Too Subjective",
        "category": "Tac",
        "trigger": "Pushback that problem-awareness is too subjective",
        "full_script": "That's a fair challenge, so let's clarify the standard. We define 'Problem-Aware' as someone who *recognizes the issue and wants to explore fixing it*, evidenced by the fact they accepted the meeting with your team. This distinction prevents counting those who are totally unaware, keeping the milestone objective and protecting both sides.<br><br>Qualification must be defined as Problem-Aware, not just having a problem. This focus ensures that the leads being generated have commercial intent and makes the definition measurable against the prospect's actions.",
        "key_principle": "Define problem-aware by meeting acceptance."
      },

      "too_easy_acceptance_without_engaging": {
        "title": "Too-Easy Acceptance Without Engaging",
        "category": "Tac",
        "trigger": "Prospect accepts definition too quickly without deep engagement",
        "full_script": "Perfect, I appreciate the alignment. Just to ensure we're calibrated on the risk, can you walk me through the typical process of sizing a new opportunity once the first meeting occurs? Specifically, how long does it take you to verify they are 'Financially Able' and 'Sizable' enough to proceed?<br><br>When acceptance is too easy, the advisor must immediately pivot to the details of the MOF/BOF mechanics to confirm the understanding is operational, not just conceptual. This question forces them to articulate the sizing window, which is essential for setting the verification SLA in The Toe.",
        "key_principle": "Verify operational understanding of definition."
      },

      // The Toe (Power Transfer) (Phase 2F) - 7 handlers
      "how_does_verification_actually_work": {
        "title": "How Does Verification Actually Work?",
        "category": "Toe",
        "trigger": "Question about the verification process mechanics",
        "full_script": "Verification is structural and automated, designed to be frictionless. The meeting is logged, and a time-delayed, short form—typically 3 to 5 questions—is sent directly to you [Name the Executive]. You check the box confirming the A/B/C criteria were met. If you check 'yes,' the credit is merited toward the Milestone. If 'no,' it's flagged for re-engagement.<br><br>Verification relies on an operational flow: meeting logged, followed by an automated, time-delayed check-in form to capture the A/B/C confirmation status.",
        "key_principle": "Automated, time-delayed verification form."
      },

      "how_long_do_i_have_to_verify_each_one": {
        "title": "How Long Do I Have to Verify Each One?",
        "category": "Toe",
        "trigger": "Question about verification timeframes",
        "full_script": "That depends on your internal process. How long does it typically take your team to verify whether a prospect is Financially Able and Sizable? We will set the verification Service Level Agreement (SLA)—say, 48–72 hours—to align with that. This time-box is critical and is necessary to maintain momentum.<br><br>The advisor must ask the client to define the sizing window during discovery/onboarding to set the contractual verification time-box.",
        "key_principle": "Set SLA based on client's sizing window."
      },

      "what_if_we_disagree_on_qualification": {
        "title": "What If We Disagree on Qualification?",
        "category": "Toe",
        "trigger": "Concern about qualification disagreements",
        "full_script": "That is precisely what the defined A/B/C criteria prevent. All disputes are resolved by referring back to the pre-agreed definition that you confirmed during The Tac. You hold the judgment control, but the structural definition remains immutable, ensuring accountability is based on objective logic, not opinion.<br><br>Disagreements are contained by the pre-engineered A/B/C definition. The client's judgment is contained within the structural control framework defined by the advisor.",
        "key_principle": "A/B/C criteria prevent subjective disagreements."
      },

      "can_we_have_a_third_party_verify": {
        "title": "Can We Have a Third Party Verify?",
        "category": "Toe",
        "trigger": "Request for external verification party",
        "full_script": "We strongly recommend the verification sit with a named executive on your team, as they have the best judgment regarding the Serviceable/Sizable anchor. The QOA™ is a mechanism of high trust between two principals. If we must involve a third party, we would need to restrict the credit decision to a single named executive there and set a strict SLA.<br><br>The QOA™ relies on the judgment of a trusted counterpart (founder/senior operator). The advisor should avoid ceding control to unknown or external parties, which risks the integrity of the milestone credit.",
        "key_principle": "Maintain high-trust principal-to-principal verification."
      },

      "that_sounds_like_a_lot_of_work_on_our_end": {
        "title": "That Sounds Like a Lot of Work on Our End",
        "category": "Toe",
        "trigger": "Perception that verification process is burdensome",
        "full_script": "It's engineered to be minimal work—a 3-to-5 question form that takes seconds. The reason we ask you to handle it is simple: it transfers veto power over the Milestone credit directly to you. That small amount of work is the cost of gaining full risk mitigation and quality control over the engagement.<br><br>The verification process is a minimal check that grants the client significant veto power. Reframing the work as necessary for 'perceived control' dissolves the 'burden' objection.",
        "key_principle": "Minimal work grants significant veto power."
      },

      "who_makes_the_final_call_if_we_dispute": {
        "title": "Who Makes the Final Call If We Dispute?",
        "category": "Toe",
        "trigger": "Question about authority in disputes",
        "full_script": "You, the client, make the final judgment call on whether A/B/C was met, which is why we call it the Qualified Opportunity *Anchor*. However, the final contract is governed by the structural definition we agreed upon. If a clear A/B/C is not met, the opportunity is disqualified. We retain structural control, while you retain judgment control.<br><br>The model uses a Tri-Layer Power Model where the client holds Judgment Control (the yes/no verification), while the advisor holds Structural Control (the A/B/C definition).",
        "key_principle": "Tri-layer power model: client judges, advisor structures."
      },

      "can_we_reject_unlimited_times": {
        "title": "Can We Reject Unlimited Times?",
        "category": "Toe",
        "trigger": "Concern about potential abuse of rejection power",
        "full_script": "The system is built on mutual good faith, governed by the objective A/B/C definition. If we see a pattern of rejection that clearly deviates from the agreed criteria, it signals a deeper operational misalignment we must diagnose together. We would immediately pause execution and realign on the criteria before moving forward to protect both the milestone and your investment.<br><br>While the Engagement Letter contains clauses to prevent abuse (annulification after three missed verifications, not mentioned on the call), the verbal response emphasizes the reliance on mutual accountability and the objective criteria to maintain professionalism.",
        "key_principle": "Mutual good faith with objective criteria protection."
      },



      "what_tools": {
        "title": "What Tools?",
        "category": "How",
        "trigger": "Specific questions about tools and technology",
        "full_script": "We utilize a full channel stack tailored to your market, deployed through our private internal infrastructure. The fee covers the orchestration and governance of that execution, not the tools themselves. The focus is the engagement model—reverse-engineering a solution so that your risk is completely mitigated.<br><br>Value is in the governance and orchestration, not specific tool names. This maintains the advisory positioning.",
        "key_principle": "Value in governance, not tool names."
      },

      "spam_filter_question": {
        "title": "Spam Filter Question",
        "category": "How",
        "trigger": "Concerns about email deliverability",
        "full_script": "We rely on proprietary infrastructure and our internal execution bench to manage deliverability and inbox health, which is critical to brand protection. Since we control that infrastructure, we guarantee that the compliance is managed so the focus remains on the outcome model. That detail is secondary to ensuring your Day-45 Milestone is hit.<br><br>Deflect technical details and re-anchor to outcome and risk control.",
        "key_principle": "Deflect technical details to outcome focus."
      },

      "channel_questions": {
        "title": "Channel Questions",
        "category": "How",
        "trigger": "Questions about which channels are used",
        "full_script": "We utilize enterprise-grade orchestration and proprietary infrastructure to ensure scale and compliance. This isn't manual effort; it's a controlled system designed for reputable firms to reach decision-makers. Are there specific compliance or volume restrictions on commercial outreach that we should be aware of?<br><br>Reframe as controlled, compliant orchestration that respects brand integrity.",
        "key_principle": "Reframe as controlled, compliant orchestration."
      },

      "infrastructure_questions": {
        "title": "Infrastructure Questions",
        "category": "How",
        "trigger": "Questions about infrastructure and systems",
        "full_script": "We operate as a Revenue Advisory group whose structure is built around risk mitigation. We don't sell mechanics. We anchor engagements to your internal benchmarks, committing to outperform your current best producer by 1.5×–2×. This entire structure ensures worst case, you still win, and best case, you scale the outcome.<br><br>Differentiate by emphasizing Positioning as an advisory firm, Anchoring to the client's math, and Risk Mitigation (P.A.RM.™).",
        "key_principle": "Differentiate through P.A.R.M.™ positioning."
      },


      "messaging_approach": {
        "title": "We Need to See the Messaging First",
        "category": "How",
        "trigger": "When prospects ask to see verbatim messaging, templates, or sample copy before discovery is complete",
        "full_script": "<b>Step 1: Acknowledge + Go First</b><br><br>You're absolutely right to push for that. And honestly, if I HAD a generic template I could show you right now, that would be the red flag.<br><br><b>Step 2: Reframe (Why This is Actually Good News)</b><br><br>Here's why: every agency in this space operates the same way—they have pre-written templates, swap in your company name, and blast. That's exactly why referral-based firms like yours get burned. The messaging sounds like marketing, not like someone who understands your world.<br><br>The reason I can't show you verbatim copy yet is because we don't have any. We build it from scratch—extracted from your 50 years of institutional knowledge, using the language your buyers already use, protecting the pedigree you've spent decades building.<br><br><b>Step 3: Anchor Back to Due Diligence (What You Still Need)</b><br><br>To show you what that messaging looks like, I'd need to finish the diligence process we started. Specifically, I still need to understand:<br><br>• How those PE referrals typically phrase introductions to you—what language actually works in your world<br>• What lines you'd never cross in outreach—the stuff that would make you cringe<br>• The specific pain points that get your buyers to take meetings vs. ignore them<br><br>That's the difference between us and every other shop you've talked to. They can show you templates today because they're sending the same thing to everyone. We can't—because we haven't extracted yours yet.<br><br><b>Step 4: Pivot to Raiseview (If Needed for Credibility)</b><br><br>And just to give you proof this isn't theory—we did this exact process for Raiseview Capital, a sell-side banking group. Most conservative, brand-sensitive corner of finance. We spent weeks learning how they evaluate counterparties, what language conveys trust, where the lines are they'd never cross.<br><br>Within 90 days: 102 new institutional introductions. Zero reputation damage. The reason it worked is because the messaging didn't sound like us—it sounded like them.<br><br><b>Step 5: Lock the Micro-Step</b><br><br>So here's what I'd suggest: let's finish the last three discovery questions—takes us maybe 8 more minutes—and then I'll send you a Scope of Work that includes sample messaging angles built from what you just told me. Not final copy, but directional proof of how we'd position you.<br><br>That way, you can see exactly what this looks like before committing to anything. Does that sound fair?",
        "key_principle": "Reframe the inability to show templates as a FEATURE (bespoke, extracted from their experience) vs. a BUG (hiding generic templates). Anchor back to due diligence requirements and lock micro-step commitment."
      },

      "do_you_have_connections": {
        "title": "Do You Have Connections?",
        "category": "Referrals",
        "trigger": "Questions about network or connections",
        "full_script": "That’s a fair question, and I'd be happy to share our executive deck and a few anonymized case studies after this call. Just for immediate context, our firm also runs a Commercial Finance arm. We've structured capital and acquisitions in various sectors, often relying on the same channel we'll discuss today. Now, to make sure the materials I send are relevant, can you confirm your average contract value or LTV of a new account?<br><br>Say yes happily and confirm you will send the assets (deck + case studies). Leverage the Commercial Finance arm positioning as immediate credibility proof. Immediately pivot back to core anchor extraction (ACV/LTV).",
        "key_principle": "Say yes happily, leverage Commercial Finance positioning."
      },

      "we_only_do_referrals": {
        "title": "We Only Do Referrals",
        "category": "Referrals",
        "trigger": "Insistence on referral-only business model",
        "full_script": "I respect that position. Since our model focuses on systematic, outbound-driven growth rather than referral networks, this probably isn't the right fit. Best of luck with your referral-based approach.<br><br>Respect their position and disqualify politely.",
        "key_principle": "Respect position, disqualify politely."
      },

      "referral_purist": {
        "title": "Referral Purist",
        "category": "Referrals",
        "trigger": "Strong preference for referral-only approach",
        "full_script": "I understand the referral purity approach. Our structured model is designed to complement and expand upon successful referral networks by creating predictable demand that your champions can feed. What has made referrals so successful for you historically?<br><br>Position as complement to existing referral success.",
        "key_principle": "Position as complement to referral success."
      },

      "warm_intro_obsession": {
        "title": "Warm Intro Obsession",
        "category": "Referrals",
        "trigger": "Focus on warm introductions over cold outreach",
        "full_script": "Warm intros are excellent, and our system is designed to generate more warm intros than any manual network can sustain. We create systematic warm introduction opportunities through executive segmentation and positioning that gets your champions excited to make introductions.<br><br>Position as systematic warm intro generation.",
        "key_principle": "Position as systematic warm intro generation."
      },

      "network_questions": {
        "title": "Network Questions",
        "category": "Referrals",
        "trigger": "Questions about network size or connections",
        "full_script": "Our network is extensive and specialized. We have proprietary access to executive decision-makers across industries. The real question is: what specific profiles are you trying to reach? We can tell you exactly how our network maps to your target market.<br><br>Focus on relevance and fit rather than size.",
        "key_principle": "Focus on relevance and fit."
      },

      "talking_to_other_vendors": {
        "title": "Talking to Other Vendors",
        "category": "Competition",
        "trigger": "Prospect is evaluating multiple vendors",
        "full_script": "Smart to evaluate options. What are you comparing us against? I'd like to understand the key differences so I can highlight our unique advantages, particularly around risk mitigation and guaranteed outcomes.<br><br>Turn comparison into opportunity to highlight differentiators.",
        "key_principle": "Turn comparison into differentiation opportunity."
      },

      "competitor_cheaper": {
        "title": "Competitor Cheaper",
        "category": "Competition",
        "trigger": "Competitor offers lower price",
        "full_script": "Price is always a factor. The key question is: what are you getting for that lower price? Our fee includes risk mitigation and guarantees that most vendors don't offer. Let's compare the total value, not just the price tag.<br><br>Shift focus from price to total value and risk mitigation.",
        "key_principle": "Shift focus to total value and risk mitigation."
      },

      "competitor_guarantee": {
        "title": "Competitor Guarantee",
        "category": "Competition",
        "trigger": "Competitor offers some form of guarantee",
        "full_script": "Guarantees are important. Our guarantee is unique because it's mathematically anchored to your internal benchmarks with downside protection. Most vendor guarantees are just marketing fluff. What's the specific guarantee they're offering?<br><br>Differentiate based on mathematical anchoring and real risk mitigation.",
        "key_principle": "Differentiate based on mathematical anchoring."
      },

      "what_makes_you_different": {
        "title": "What Makes You Different?",
        "category": "Competition",
        "trigger": "Request for differentiation from competitors",
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
        "full_script": "RFPs are comprehensive processes. Since we're already deep into discovery and have the specific anchors for your business, we'd be happy to submit a formal response. What are the key evaluation criteria in your RFP?<br><br>Leverage existing discovery work to create compelling RFP response.",
        "key_principle": "Leverage discovery work for RFP response."
      },

      "board_approval": {
        "title": "Board Approval",
        "category": "Internal",
        "trigger": "Requires board-level approval",
        "full_script": "That is exactly why the scope is anchored to the risk mitigation clause and your internal ROI. Our model is built to be board-defensible, emphasizing the guaranteed downside protection and the calculated ROI multiple. Would a one-paragraph executive brief, summarizing the worst-case vs. best-case outcomes, help leadership approve this faster?<br><br>Arm the Champion with materials emphasizing outcomes and risk control.",
        "key_principle": "Board-defensible with risk mitigation emphasis."
      },

      "too_many_questions": {
        "title": "Too Many Questions",
        "category": "Process",
        "trigger": "Complaint about number of questions asked",
        "full_script": "I completely understand. We run a rigorous due diligence process because we're scoping a capital commitment, not selling a widget, so these anchors are critical. Let's make sure we capture the next three inputs quickly: What is the average length of your sales cycle, first touch to closed-won?<br><br>Acknowledge the rigor, but immediately pivot back to the necessity of collecting the required anchoring data.",
        "key_principle": "Acknowledge rigor, pivot to necessity of anchoring."
      },

      "confidential_info": {
        "title": "Confidential Info",
        "category": "Process",
        "trigger": "Reluctance to share sensitive information",
        "full_script": "I completely respect that; a ballpark is perfectly acceptable for modeling the scope. The only reason we require [Metric] is to ensure the Baseline we anchor to is conservative and defensible for your CFO. If we scope high, we expose you to risk. What's the closest approximate figure you can share for internal modeling?<br><br>Reassure them that ballparks are fine for modeling purposes. The goal is to obtain enough data to build a scope that protects their downside and justifies the fee as a board-defensible capital allocation.",
        "key_principle": "Ballparks acceptable for conservative modeling."
      },

      "cancellation_policy": {
        "title": "Cancellation Policy",
        "category": "Legal",
        "trigger": "Questions about cancellation terms",
        "full_script": "The initial upfront fee [e.g., $25K] is non-refundable as it capitalizes the strategic build. The contingent fee [the second $25K] is only paid upon successful delivery of the Day-45 Milestone. If you choose to terminate before that milestone is hit, you forfeit the upfront fee, and the contingent fee is not due. If *we* fail to hit the milestone, we continue working until we do, ensuring your investment is protected.<br><br>The risk mitigation clause is the cancellation policy; it guarantees output for the upfront fee.",
        "key_principle": "Risk mitigation guarantees output for upfront fee."
      },

      "doing_fine_without_help": {
        "title": "Doing Fine Without Help",
        "category": "Disqualify",
        "trigger": "Claim that they're performing well without assistance",
        "full_script": "That’s great news; it means we're talking to a healthy, well-run business. Most of our clients are doing well, but they hit a capacity or channel ceiling. Our goal here is simply to build a strategic Scope of Work that shows whether installing a controlled channel, anchored to a 1.5× baseline, complements your existing growth and helps you break through that ceiling. Let's look at your capacity limits: what's the maximum number of new accounts your team can comfortably onboard per quarter?<br><br>Validate their current success (abundance mindset). Reframe the engagement not as fixing a problem, but as introducing a new, scalable channel to exceed the natural cap of their existing channels.",
        "key_principle": "Reframe as exceeding capacity ceiling."
      },

      "just_researching": {
        "title": "Just Researching",
        "category": "Disqualify",
        "trigger": "Prospect is only in research phase",
        "full_script": "Totally fair—honestly, I wouldn't prioritize it myself without seeing a scope. That's exactly why we're in due diligence now. Let's at least put an engagement model in front of you—then you'll know if it's worth prioritizing down the road.<br><br>Validate the prospect's stance. Reframe discovery as mutual due diligence to build the engagement model. Even if they aren't ready to buy, having the scoped, risk-mitigated model ensures they have a defensible option when their timing aligns.",
        "key_principle": "Validate, reframe to mutual due diligence."
      },

      "email_me_info": {
        "title": "Email Me Info",
        "category": "Disqualify",
        "trigger": "Request to just email information and end call",
        "full_script": "Of course, I'll send you information after the call. What I'd like to do is include not just our deck, but also 1–2 recent successes and, most importantly, your Scope of Work. To make that possible, we just need to finish this due diligence—a few more questions on my end, and then I can send something that's actually meaningful to you. Otherwise, you'd just be getting generic info. Does that sound fair?<br><br>Say yes confidently. Use the request as leverage to finish discovery, positioning the customized Scope of Work (SOW) as the true asset they need, which requires gathering necessary anchors during the current call.",
        "key_principle": "Use request as leverage to complete discovery."
      },


      "getting_acquired": {
        "title": "Getting Acquired",
        "category": "Edge Cases",
        "trigger": "Company is in acquisition process",
        "full_script": "That’s a critical development. M&A processes often prioritize clean revenue growth or pipeline certainty. We can scope the engagement to generate Pipeline Value that makes the acquisition thesis more robust. Will having a risk-mitigated Scope of Work, anchored to a 1.5× pipeline increase, strengthen the growth narrative for the final valuation?<br><br>Reframe the engagement as a strategic asset for the due diligence process and valuation.",
        "key_principle": "Reframe as strategic asset for M&A due diligence."
      },

      "lost_big_client": {
        "title": "Lost Big Client",
        "category": "Edge Cases",
        "trigger": "Recent major client loss",
        "full_script": "I hear you; losing a key account is a massive pressure point. That shifts the priority from 'growth' to 'critical LTV replacement.' Let's scope the engagement to generate Pipeline Value that exceeds that loss within the next 90 days. Our structure ensures the investment is focused on replacement with guaranteed downside protection.<br><br>Validate the crisis, then re-anchor the fee as an urgent capital allocation to replace the lost LTV, making the solution an undeniable financial necessity.",
        "key_principle": "Reframe as urgent LTV replacement opportunity."
      },

      "emergency_reschedule": {
        "title": "Emergency/Reschedule",
        "category": "Edge Cases",
        "trigger": "Urgent situation requiring rescheduling",
        "full_script": "Of course, completely understand. I'll make sure our team holds your file open and prioritizes the Scope of Work build. My assistant will send a quick link to reschedule for [Suggest time within 48-72 hours] so we can capture the final anchors and finalize the Scope of Work.<br><br>Maintain professional composure (high QOE™). Accept the urgency, but manage logistics professionally, using an assistant/scheduler alias if appropriate, and immediately rescheduling to maintain momentum.",
        "key_principle": "Maintain composure, manage logistics professionally."
      },

      "shutting_down": {
        "title": "Shutting Down",
        "category": "Edge Cases",
        "trigger": "Company is closing or dissolving",
        "full_script": "Thank you for the clarity. I wish you the best of luck with the transition.<br><br>Exit cleanly. Disqualification is a win, protecting the advisor's time and resources.",
        "key_principle": "Exit cleanly when company is dissolving."
      },

      "just_raised_funding": {
        "title": "Just Raised Funding",
        "category": "Edge Cases",
        "trigger": "Recent capital raise enabling larger scope",
        "full_script": "That is excellent news and confirms our thesis on market readiness. We always anchor the initial 90-day scope to your *current* absorption capacity to protect the win rate. Let's execute this baseline pilot, and if we hit the Day-45 milestone early, we can immediately execute a Change Order to expand the scope into new markets.<br><br>Acknowledge the capital, but lock the pilot scope based on risk mitigation and capacity constraints. Future expansion is conditional on performance.",
        "key_principle": "Lock pilot scope, expand conditionally on performance."
      },

      "competitor_did_this": {
        "title": "Competitor Did This",
        "category": "Edge Cases",
        "trigger": "Competitor successfully implemented similar solution",
        "full_script": "That competitive intelligence is critical. Urgency is exactly why we move fast: to define your outperformance baseline and lock the risk clause. We can formalize the Engagement Letter today to begin the strategic architecture immediately, but execution will still require two to four weeks to allocate and warm the proprietary infrastructure needed to hit the Day-45 Milestone safely.<br><br>Leverage the urgency for commitment, but defend the necessary deployment timeline, controlling the throttle and emphasizing rigor over reckless speed.",
        "key_principle": "Leverage urgency for commitment while controlling timeline."
      },

      "hire_you_for_something_else": {
        "title": "Hire You for Something Else",
        "category": "Edge Cases",
        "trigger": "Request to pivot to different service offering",
        "full_script": "We specialize in engineering predictable revenue outcomes tied to internal benchmarks. While we don't execute [Specific request], the constraint you just mentioned is often solved by having a predictable pipeline that de-risks capital commitment. Let's focus on anchoring that pipeline certainty first.<br><br>Redirect the pivot request back to the core P.A.R.M.™ function: generating pipeline certainty and de-risking the capital allocation.",
        "key_principle": "Redirect to core P.A.R.M.™ pipeline function."
      },

      "train_our_team_instead": {
        "title": "Train Our Team Instead",
        "category": "Edge Cases",
        "trigger": "Request for training instead of execution",
        "full_script": "Our mandate is to architect the revenue model and then deploy vetted execution infrastructure to hit the Day-45 Milestone. We are here to fuel the fire, not staff the engine. If we install a predictable channel, who internally would be responsible for converting that demand into a signed client? We need to establish clear ownership.<br><br>The advisory role is about defining the engine, not staffing it. Clarify the accountability boundary: the advisor owns the input (interest creation), the client owns the conversion (staffing).",
        "key_principle": "Clarify input vs conversion accountability."
      },

      "multiple_questions_at_once": {
        "title": "Multiple Questions at Once",
        "category": "Edge Cases",
        "trigger": "Prospect raises several objections simultaneously",
        "full_script": "I hear several concerns here. Let me address them one by one to make sure we get clarity on each. Which one is most important to you right now?<br><br>Isolate and prioritize multiple concerns rather than trying to address them all at once.",
        "key_principle": "Isolate and prioritize multiple concerns."
      },

      "i_love_this_sign_today": {
        "title": "I Love This, Let's Sign Today",
        "category": "Edge Cases",
        "trigger": "Immediate enthusiastic agreement",
        "full_script": "That's excellent news. I'm moving to formalize the Engagement Letter and Invoice immediately and will send both in one package within the hour. Once executed, onboarding commences within 24 hours. Sound good?<br><br>When a verbal 'yes' occurs, compress steps. The strategy is the Combined Close (EL + Invoice) sent immediately, leveraging the momentum. Readiness signals control.",
        "key_principle": "Compress steps with Combined Close on immediate yes."
      },

      // Integration & Pricing (Phase 4) - handlers
      "can_we_pay_monthly_instead_of_upfront": {
        "title": "Can We Pay Monthly Instead of Upfront?",
        "category": "Integration",
        "trigger": "Request to change from upfront to monthly payment structure",
        "full_script": "The initial tranche is designed to capitalize the build—infrastructure allocation, strategic architecture, and vendor deployment—required to hit the Day-45 Milestone. That capitalization is non-negotiable for the first 50%. The second half is already tied strictly to performance, making it milestone-based, not monthly.<br><br>Upfront capital is necessary to guarantee milestone delivery and fund execution resources. The split fee is the primary risk mitigation structure.",
        "key_principle": "Upfront capital guarantees milestone delivery."
      },

      "can_we_do_month_to_month": {
        "title": "Can We Do Month-to-Month?",
        "category": "Integration",
        "trigger": "Request for month-to-month commitment instead of 90-day term",
        "full_script": "Our engagements are structured for a 90-day term because that is the required window to establish a defensible performance baseline and prove the 1.5× lift against your internal metrics. We use the 45-day milestone as the checkpoint, but the 90-day window is necessary to de-risk the investment and establish durable results.<br><br>The structure is 90 days with a 45-day milestone trigger. Commitments are required to yield measurable, defendable benchmarks.",
        "key_principle": "90-day term establishes defensible performance baseline."
      },

      "we_have_budget_approved_for_x_but_youre_at_y": {
        "title": "We Have Budget Approved for $X But You're at $Y",
        "category": "Integration",
        "trigger": "Budget constraint where approved amount is lower than fee",
        "full_script": "I appreciate the transparency. Pricing is anchored entirely to the quantifiable Pipeline Value we identified in discovery, not budget availability. Our fee is positioned as a capital allocation with guaranteed downside protection—the worst case still results in a net win for you—rather than a negotiable cost based on internal budget caps.<br><br>Do not discount; re-anchor to the ROI math and guaranteed outcomes. Fear of execution, not affordability, drives this objection.",
        "key_principle": "Fee anchored to ROI, not budget caps."
      },

      "what_happens_after_90_days": {
        "title": "What Happens After 90 Days?",
        "category": "Integration",
        "trigger": "Question about post-engagement continuation or renewal",
        "full_script": "Once the 90-day engagement concludes, assuming the milestone has been met, you have three clear pathways: 1) Renew the mandate to continue execution; 2) License the system we built for internal use [suggesting $10K–$20K/month]; or 3) Purchase the system outright [$100K+]. Our focus is building a path to scalability.<br><br>Future-pace towards expansion, licensing, or IP sale. This frames the engagement as building a strategic asset, not running a short campaign.",
        "key_principle": "Frame as strategic asset with scalability pathways."
      },

      "can_we_cancel_mid_engagement": {
        "title": "Can We Cancel Mid-Engagement?",
        "category": "Integration",
        "trigger": "Question about cancellation terms and policies",
        "full_script": "The initial upfront fee [e.g., $25K] is non-refundable as it capitalizes the strategic build. The contingent fee [the second $25K] is only paid upon successful delivery of the Day-45 Milestone. If you choose to terminate before that milestone is hit, you forfeit the upfront fee, and the contingent fee is not due. If *we* fail to hit the milestone, we continue working until we do, ensuring your investment is protected.<br><br>The risk mitigation clause is the cancellation policy; it guarantees output for the upfront fee.",
        "key_principle": "Risk mitigation guarantees output for upfront fee."
      },

      "whats_included_vs_add_on": {
        "title": "What's Included vs Add-On?",
        "category": "Integration",
        "trigger": "Clarification of what's included in the fee vs additional costs",
        "full_script": "The fee includes all required components to hit the Milestone: the outcome architecture, executive segmentation logic, the infrastructure oversight, and the execution bench. We do not sell add-ons; we sell a structured outcome. If the scope or targets change, that triggers a formal Change-Order to protect both parties' alignment.<br><br>Services are bundled under a single strategic fee. Scope creep is managed via change orders.",
        "key_principle": "Bundled strategic fee; scope creep via change orders."
      },

      "we_need_3_vendor_quotes_as_policy": {
        "title": "We Need 3 Vendor Quotes as Policy",
        "category": "Integration",
        "trigger": "Procurement requirement for multiple vendor comparisons",
        "full_script": "This Scope of Work is highly customized, anchored to your specific LTV and best-producer metrics, and is structured as a board-level capital allocation, not a commodity vendor quote. To ensure alignment with your internal process, how do new advisory engagements typically move through your legal or procurement department? Who specifically needs to see the Scope of Work summary before we formalize?<br><br>Reframes the engagement as bespoke capital allocation outside the typical vendor bucket. Pivots immediately to mapping the approval flow (D.E.D.I.™).",
        "key_principle": "Reframe as bespoke capital allocation, not commodity."
      },

      "this_needs_board_approval": {
        "title": "This Needs Board Approval",
        "category": "Integration",
        "trigger": "Requirement for board-level approval",
        "full_script": "That is exactly why the scope is anchored to the risk mitigation clause and your internal ROI. Our model is built to be board-defensible, emphasizing the guaranteed downside protection and the calculated ROI multiple. Would a one-paragraph executive brief, summarizing the worst-case vs. best-case outcomes, help leadership approve this faster? We must align our proposal cadence with their review timeline.<br><br>Arm the Champion with materials emphasizing outcomes and risk control.",
        "key_principle": "Board-defensible with risk mitigation and ROI emphasis."
      },

      "do_we_own_the_data_lists": {
        "title": "Do We Own the Data/Lists?",
        "category": "Integration",
        "trigger": "Questions about data ownership and IP rights",
        "full_script": "The proprietary assets utilized during the engagement—including the lists, messaging architecture, and execution infrastructure—remain the intellectual property of our firm. This IP is part of the system you are leveraging to hit the milestone. At the 90-day mark, you have the option to buy or license that entire system for internal use.<br><br>Advisor retains IP of proprietary lists and systems. This IP is an asset sold in the back end (licensing/buyout).",
        "key_principle": "Advisor retains IP; licensing/buyout available later."
      },

      "what_if_we_want_to_extend_beyond_90_days": {
        "title": "What If We Want to Extend Beyond 90 Days?",
        "category": "Integration",
        "trigger": "Interest in continuing engagement past initial term",
        "full_script": "We offer a full renewal of the mandate, typically at the same fee, or an expansion of scope into new channels or markets, which would require a revised Scope of Work. Most successful engagements renew to compound the results achieved in the pilot.<br><br>A clear path to scale is renewal, expansion, or a licensing deal.",
        "key_principle": "Clear renewal and expansion pathways."
      },

      "can_we_start_with_one_market_then_expand": {
        "title": "Can We Start With One Market Then Expand?",
        "category": "Integration",
        "trigger": "Request for phased rollout starting with single market",
        "full_script": "We can certainly restrict the scope to the highest-ROI segment you identified. We always aim for the tightest scope that still justifies the capital allocation. We must confirm the Target Addressable Market (TAM) for that single market is sufficient to mathematically support the Day-45 Milestone, and then we will lock that restriction into the Engagement Letter.<br><br>Accept the constraint but verify the smaller scope is mathematically viable to support the fee and milestones.",
        "key_principle": "Accept phased rollout, verify TAM sufficiency."
      },

      "do_you_have_payment_plans": {
        "title": "Do You Have Payment Plans?",
        "category": "Integration",
        "trigger": "Request for alternative payment arrangements",
        "full_script": "Our fee structure is already phased into two tranches: 50% upfront to capitalize the build, and 50% contingent on the Day-45 milestone. This is the inherent payment plan—it ensures we are fully capitalized for the strategic execution while protecting your downside risk based on performance.<br><br>Reinforce the two-part structure as the already-built-in financing plan.",
        "key_principle": "Two-part structure is the inherent payment plan."
      },

      // Transition to Call Two (Phase 5) - handlers

      "can_we_start_sooner_than_2_weeks": {
        "title": "Can We Start Sooner Than 2 Weeks?",
        "category": "Call Two",
        "trigger": "Request for accelerated timeline",
        "full_script": "We prioritize a rigorous setup phase to ensure compliance and message quality. We can expedite the initial strategic architecture immediately upon signature, but full execution and infrastructure allocation require two to four weeks to allocate and warm up the proprietary infrastructure needed to hit the milestone safely.<br><br>Maintains control of the timeline, emphasizing rigor and safety over speed. The advisory controls the pacing (throttle).",
        "key_principle": "Control pacing with emphasis on rigor and safety."
      },

      "whats_the_onboarding_process": {
        "title": "What's the Onboarding Process?",
        "category": "Call Two",
        "trigger": "Question about how the engagement begins",
        "full_script": "The process is streamlined: 1) Execute the Engagement Letter; 2) Onboarding starts immediately; 3) We finalize the messaging architecture based on our discovery; 4) We allocate the necessary infrastructure and deploy campaigns within two to four weeks. Your primary responsibility is timely approvals and providing necessary access for measurement.<br><br>Onboarding is framed as a structured, controlled execution phase.",
        "key_principle": "Frame as streamlined, controlled execution phase."
      },

      "who_will_we_work_with_day_to_day": {
        "title": "Who Will We Work With Day-to-Day?",
        "category": "Call Two",
        "trigger": "Question about team and point of contact",
        "full_script": "You will work directly with me and my team, who manage the overall strategy, quality assurance, and milestone tracking. We orchestrate a specialized bench of operators—campaign ops, data analysts, and messaging experts—to handle the execution. You are never passed off to junior staff; you are dealing with us directly.<br><br>Maintains the orchestrator/advisor frame, assuring the client they retain executive access.",
        "key_principle": "Assure executive access and orchestrator positioning."
      },

      "how_often_do_we_get_updates": {
        "title": "How Often Do We Get Updates?",
        "category": "Call Two",
        "trigger": "Question about communication frequency and methods",
        "full_script": "We align the communication cadence to the tempo we mapped during discovery. We typically run a formal Day-45 review tied to the milestone, plus [weekly/bi-weekly] updates focused on pipeline metrics and outcomes, not tactical inputs. Communication is primarily managed through [email/Slack channel] to maintain efficient documentation.<br><br>Communication is professional, substantive, and governed by the D.E.D.I.™ tempo classification.",
        "key_principle": "Professional, substantive communication aligned to tempo."
      },

      "what_does_success_look_like_at_day_45": {
        "title": "What Does Success Look Like at Day 45?",
        "category": "Call Two",
        "trigger": "Clarification of milestone achievement criteria",
        "full_script": "Success at Day 45 is the achievement of the agreed-upon Baseline Milestone—which we determined is [X Qualified Introductions/Pipeline Value], tracking to outperform your best producer by 1.5×. This triggers the second payment tranche and validates the ROI for leadership.<br><br>Reiterate the binary, measurable definition of the legal anchor.",
        "key_principle": "Reiterate binary, measurable milestone definition."
      },

      "were_in_a_budget_freeze_right_now": {
        "title": "We're in a Budget Freeze Right Now",
        "category": "Call Two",
        "trigger": "Timing objection due to budget constraints",
        "full_script": "I completely understand timing constraints; capital planning is complex. That is exactly why we must formalize the Scope of Work now. Let's at least get the Engagement Letter reviewed and the risk-mitigated model in front of you—then you have a board-defensible, fully scoped option ready to greenlight the moment the budget window reopens in Q1.<br><br>Validate the timing objection, but use the necessity of the scoped, de-risked model as leverage to maintain momentum and commitment.",
        "key_principle": "Use scoped model as leverage for timing objections."
      },

      "were_reorganizing_right_now": {
        "title": "We're Reorganizing Right Now",
        "category": "Call Two",
        "trigger": "Internal reorganization delaying decisions",
        "full_script": "Reorganization is a key time for strategic planning. To ensure the Scope of Work aligns with the new structure, who is currently the economic buyer, and who needs to approve the capital allocation? We need to lock the decision path now so we can resume immediately once the internal changes stabilize.<br><br>Treats chaos as necessary D.E.D.I. data, mapping the new approval flow.",
        "key_principle": "Treat reorganization as strategic planning opportunity."
      },

      "can_we_get_started_while_legal_reviews": {
        "title": "Can We Get Started While Legal Reviews?",
        "category": "Call Two",
        "trigger": "Request to begin work during contract review",
        "full_script": "We can certainly begin the foundational strategy work—such as finalizing the segmentation logic—immediately upon receiving the signed Engagement Letter. However, full execution and infrastructure allocation require the contract to be executed. What is the typical turnaround time for legal review so we can set the start date precisely?<br><br>Shows readiness while protecting the advisor's posture; execution only proceeds upon signature.",
        "key_principle": "Show readiness while requiring signature for execution."
      },

      "whats_the_contract_term": {
        "title": "What's the Contract Term?",
        "category": "Call Two",
        "trigger": "Question about length of agreement",
        "full_script": "The core mandate is structured as a 90-day engagement, with a critical 45-day milestone that governs the second payment tranche. This structure minimizes your risk while providing the necessary runway to establish performance metrics.<br><br>States the standard term (90 days) and highlights the governing risk structure.",
        "key_principle": "State 90-day term with governing milestone structure."
      },

      "do_you_have_insurance": {
        "title": "Do You Have Insurance?",
        "category": "Call Two",
        "trigger": "Question about liability and risk coverage",
        "full_script": "We operate under a comprehensive liability and compliance framework required for executive-level engagements. Legal and compliance requirements are explicitly addressed in the Engagement Letter. Are there any specific compliance boundaries or liability caps that your legal team typically requires us to align to?<br><br>Acknowledge the legal need and pivot to asking about their required compliance parameters to maintain the peer-to-peer advisory frame.",
        "key_principle": "Acknowledge legal need, pivot to compliance parameters."
      },

      "can_we_do_an_nda_first": {
        "title": "Can We Do an NDA First?",
        "category": "Call Two",
        "trigger": "Request for confidentiality agreement before proceeding",
        "full_script": "Absolutely. Confidentiality is non-negotiable in our work. Would you prefer we sign your NDA, or should I send over ours for your legal team's review? We want to remove this friction point immediately.<br><br>Agree immediately and remove the friction, showing professional compliance.",
        "key_principle": "Agree immediately to remove friction point."
      },

      // Internal Dynamics (10 handlers)
      "need_partner_approval": {
        "title": "Need Partner Approval",
        "category": "Internal",
        "trigger": "Requires approval from business partner",
        "full_script": "That makes perfect sense—partnerships are built on alignment. Who is your partner, and what specifically would they need to see to feel confident about this investment? We can structure the Scope of Work to directly address their key concerns.<br><br>Treat this as an opportunity to expand the decision-making circle and gather more intelligence about the partnership dynamics.",
        "key_principle": "Expand decision circle, gather partnership intelligence."
      },

      "talk_to_team": {
        "title": "Talk to Team",
        "category": "Internal",
        "trigger": "Needs to discuss with internal team",
        "full_script": "Absolutely, this is exactly the kind of decision that benefits from team input. Who on your team would you like to include in the next call? We can walk through the Scope of Work together and address any questions they might have.<br><br>Use this as an opportunity to expand the conversation and build consensus within their organization.",
        "key_principle": "Expand conversation, build internal consensus."
      },

      "legal_review": {
        "title": "Legal Review",
        "category": "Internal",
        "trigger": "Requires legal department review",
        "full_script": "Legal review is standard for engagements like this. What specific legal concerns typically come up in your review process? We can address them proactively in the Engagement Letter to make the review as smooth as possible.<br><br>Anticipate and address legal concerns before they become blockers.",
        "key_principle": "Anticipate and address legal concerns proactively."
      },

      "internal_team_exists": {
        "title": "Internal Team Exists",
        "category": "Internal",
        "trigger": "Has existing internal sales/marketing team",
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
        "category": "Internal",
        "trigger": "Key internal champion leaves the company",
        "full_script": "That happens in growing companies. Who has taken over their responsibilities? We should connect with them right away to ensure continuity and get them up to speed on the value proposition.<br><br>Immediately identify and engage the new decision-maker to maintain momentum.",
        "key_principle": "Identify and engage new decision-maker immediately."
      },

      "decision_path_questions": {
        "title": "Decision Path Questions",
        "category": "Internal",
        "trigger": "Questions about internal approval process",
        "full_script": "That's a smart question. Can you walk me through how decisions like this typically get approved in your organization? Understanding the path helps us time our follow-up and prepare the right materials for each stakeholder.<br><br>Use this to map the decision-making process and identify all stakeholders.",
        "key_principle": "Map decision-making process and stakeholders."
      },

      "who_needs_to_see_this": {
        "title": "Who Needs to See This?",
        "category": "Internal",
        "trigger": "Asking who else needs to review the proposal",
        "full_script": "Great question. Typically, this involves the economic buyer, legal, finance, and any operational stakeholders. Who do you think would be the key people we'd want to include in the review process?<br><br>Help them identify all necessary stakeholders to ensure comprehensive buy-in.",
        "key_principle": "Identify all necessary stakeholders for buy-in."
      },

      "procurement_process": {
        "title": "Procurement Process",
        "category": "Internal",
        "trigger": "Must go through formal procurement process",
        "full_script": "Procurement processes are designed to protect the company—that's good governance. What are the key milestones in your procurement timeline? We can align our proposal delivery to match your process perfectly.<br><br>Respect and align with their procurement process rather than trying to circumvent it.",
        "key_principle": "Respect and align with procurement process."
      },

      "we_have_an_rfp": {
        "title": "We Have an RFP",
        "category": "Internal",
        "trigger": "Currently have an active RFP process",
        "full_script": "RFPs are comprehensive processes. Since we're already deep into discovery and have the specific anchors for your business, we'd be happy to submit a formal response. What are the key evaluation criteria in your RFP?<br><br>Leverage the existing discovery work to create a compelling, customized RFP response.",
        "key_principle": "Leverage discovery work for customized RFP response."
      },

      // Process & Clarity (12 handlers)
      "vague_responses": {
        "title": "Vague Responses",
        "category": "Process",
        "trigger": "Prospect gives unclear or vague answers",
        "full_script": "I want to make sure I understand you correctly. When you say [repeat their vague statement], does that mean [clarify with specific example]? Getting precise here ensures we scope this accurately.<br><br>Seek clarity and precision to ensure accurate scoping and anchoring.",
        "key_principle": "Seek clarity and precision for accurate scoping."
      },

      "dont_have_data": {
        "title": "Don't Have Data",
        "category": "Process",
        "trigger": "Prospect doesn't have the requested metrics",
        "full_script": "That's completely understandable—many companies don't track everything formally. Can you give me a directional sense or ballpark figure? We use these as anchors, not exact numbers, to ensure the scope is conservative and defensible.<br><br>Accept ballpark estimates and explain their purpose in risk mitigation.",
        "key_principle": "Accept ballparks, explain purpose in risk mitigation."
      },

      "need_to_check": {
        "title": "Need to Check",
        "category": "Process",
        "trigger": "Prospect needs to look up information",
        "full_script": "Of course, accuracy is important. Why don't we schedule Discovery Part 2 for [specific time] to go through all the remaining anchors? That way we can get everything right the first time.<br><br>Schedule a follow-up call to maintain momentum and ensure comprehensive data collection.",
        "key_principle": "Schedule follow-up to maintain momentum."
      },

      "dont_track_formally": {
        "title": "Don't Track Formally",
        "category": "Process",
        "trigger": "Company doesn't formally track requested metrics",
        "full_script": "That's common in many industries. Let's reconstruct from what you do know. Based on your experience, what's the general pattern you've seen with [specific metric]? We can use that to establish a conservative baseline.<br><br>Reconstruct metrics from experience and patterns to establish baselines.",
        "key_principle": "Reconstruct metrics from experience patterns."
      },

      "cant_answer": {
        "title": "Can't Answer",
        "category": "Process",
        "trigger": "Prospect genuinely can't answer a question",
        "full_script": "No problem at all. Who on your team would have that information? We can include them in our next conversation or I can follow up with them directly to get the complete picture.<br><br>Identify the right person and expand the conversation to include them.",
        "key_principle": "Identify right person, expand conversation."
      },

      "deflects_question": {
        "title": "Deflects Question",
        "category": "Process",
        "trigger": "Prospect avoids answering directly",
        "full_script": "I understand this might be sensitive information. The reason I ask is that [specific anchor] directly affects the Milestone calculation. Without it, we risk scoping based on assumptions rather than your reality.<br><br>Explain the business purpose behind the question to reduce defensiveness.",
        "key_principle": "Explain business purpose to reduce defensiveness."
      },

      "why_does_this_matter": {
        "title": "Why Does This Matter?",
        "category": "Process",
        "trigger": "Questioning relevance of data requests",
        "full_script": "This matters because it's the anchor point for calculating your guaranteed baseline. If we get this wrong, we either over-promise (risking failure) or under-scope (leaving money on the table). It's the foundation of the risk mitigation structure.<br><br>Connect the data point to the core value proposition of risk mitigation.",
        "key_principle": "Connect data to risk mitigation foundation."
      },

      "process_is_broken": {
        "title": "Process is Broken",
        "category": "Process",
        "trigger": "Admission that current process has issues",
        "full_script": "That's valuable insight. Where does the process typically break down? Understanding that helps us design the engagement to strengthen those weak points while we build the new pipeline.<br><br>Use process breakdowns as diagnostic data to improve the engagement design.",
        "key_principle": "Use breakdowns as diagnostic data for design."
      },

      "were_rebuilding": {
        "title": "We're Rebuilding",
        "category": "Process",
        "trigger": "Company is in the middle of process changes",
        "full_script": "Growth often requires rebuilding. What's the target state you're building toward? We can design the engagement to feed that new process while providing the immediate pipeline you need during the transition.<br><br>Align the engagement with their rebuilding efforts.",
        "key_principle": "Align engagement with rebuilding efforts."
      },

      "no_crm_tracking": {
        "title": "No CRM/Tracking",
        "category": "Process",
        "trigger": "Lack of formal tracking systems",
        "full_script": "That's fine—many of our best clients start this way. Let's focus on the functional outcomes. What would success look like for you in terms of new qualified meetings per month? We can work backward from there.<br><br>Focus on outcomes rather than tracking mechanisms.",
        "key_principle": "Focus on outcomes over tracking mechanisms."
      },

      // Scope & Structure (11 handlers)
      "can_we_start_smaller": {
        "title": "Can We Start Smaller?",
        "category": "Scope",
        "trigger": "Request for reduced scope or smaller commitment",
        "full_script": "We can certainly start with a focused pilot. What's the minimum viable scope that would prove the concept for you? We need to ensure it's large enough to demonstrate the 1.5× lift but small enough to be low-risk.<br><br>Find the balance between proof of concept and meaningful results.",
        "key_principle": "Balance proof of concept with meaningful results."
      },

      "pilot_request": {
        "title": "Pilot Request",
        "category": "Scope",
        "trigger": "Wants to test with a pilot program",
        "full_script": "Pilots are smart for evaluating new approaches. What success metrics would you use to determine if the pilot is working? We can structure it with clear milestones and evaluation points.<br><br>Define success criteria upfront and structure evaluation points.",
        "key_principle": "Define success criteria and evaluation points."
      },

      "scope_reduction": {
        "title": "Scope Reduction",
        "category": "Scope",
        "trigger": "Wants to reduce the scope of work",
        "full_script": "I understand wanting to start conservatively. What's your biggest concern about the full scope? We can adjust based on your risk tolerance while ensuring we can still deliver the baseline results.<br><br>Address concerns and adjust while maintaining result delivery capability.",
        "key_principle": "Address concerns, adjust while maintaining results."
      },

      "phased_rollout": {
        "title": "Phased Rollout",
        "category": "Scope",
        "trigger": "Prefers gradual implementation",
        "full_script": "Phased rollouts are excellent for managing change. How would you like to phase it? We can start with [initial phase] and expand based on results, with clear decision points at each stage.<br><br>Design phases with clear decision points based on results.",
        "key_principle": "Design phases with clear decision points."
      },

      "one_market_first": {
        "title": "One Market First",
        "category": "Scope",
        "trigger": "Wants to focus on single market initially",
        "full_script": "That makes sense for testing. Which market do you want to start with? We need to ensure that market has sufficient TAM to support the baseline milestone while keeping the scope focused.<br><br>Select market and validate TAM sufficiency.",
        "key_principle": "Select market, validate TAM sufficiency."
      },

      "market_too_niche": {
        "title": "Market Too Niche",
        "category": "Scope",
        "trigger": "Concern that target market is too specialized",
        "full_script": "Niche markets can be highly profitable. The key is whether there are enough decision-makers and whether they have the budget to buy. What's the total addressable market size in this niche?<br><br>Assess TAM and buying capacity in niche markets.",
        "key_principle": "Assess TAM and buying capacity."
      },

      "geographic_constraints": {
        "title": "Geographic Constraints",
        "category": "Scope",
        "trigger": "Limited to specific geographic areas",
        "full_script": "Geography can actually be an advantage for targeting. What geographic areas do you serve? We can focus our efforts there, which often leads to higher conversion rates due to local relationships.<br><br>Leverage geographic focus for better targeting and conversion.",
        "key_principle": "Leverage geographic focus for better results."
      },

      "title_requirements": {
        "title": "Title Requirements",
        "category": "Scope",
        "trigger": "Specific title requirements for prospects",
        "full_script": "Titles are important, but we focus on decision-making authority and budget control. What titles typically make buying decisions in your space? We can target those while maintaining flexibility.<br><br>Focus on authority and budget over specific titles.",
        "key_principle": "Focus on authority and budget over titles."
      },

      "capacity_concerns": {
        "title": "Capacity Concerns",
        "category": "Scope",
        "trigger": "Worry about handling increased volume",
        "full_script": "Capacity is a valid concern. What's your current absorption rate? We can pace the delivery to match your capacity and build up gradually as you expand your team.<br><br>Pace delivery to match current capacity and growth.",
        "key_principle": "Pace delivery to match capacity and growth."
      },

      "service_limitations": {
        "title": "Service Limitations",
        "category": "Scope",
        "trigger": "Specific service or industry limitations",
        "full_script": "I understand those limitations. How do they affect your target market? We can design the campaign to work within those constraints while maximizing the opportunities that remain.<br><br>Work within limitations while maximizing available opportunities.",
        "key_principle": "Work within limitations, maximize opportunities."
      },

      "free_vs_paid_pilot": {
        "title": "Free vs Paid Pilot",
        "category": "Scope",
        "trigger": "Question about free trials vs paid pilots",
        "full_script": "We don't offer free pilots because they require significant infrastructure investment. However, our paid pilot includes the guarantee that if we don't hit the milestone, you don't pay the full fee. It's effectively risk-free.<br><br>Explain the infrastructure requirement and risk mitigation structure.",
        "key_principle": "Explain infrastructure needs and risk mitigation."
      },

      // Contract & Legal (8 handlers)
      "contract_terms": {
        "title": "Contract Terms",
        "category": "Legal",
        "trigger": "Questions about contract length and terms",
        "full_script": "The standard term is 90 days with a 45-day milestone that governs payment. This structure protects you while giving us the runway to prove results. Would you like me to explain any specific terms?<br><br>Explain the 90-day structure and milestone-based payment.",
        "key_principle": "Explain 90-day structure and milestone payments."
      },

      "what_happens_after_90": {
        "title": "What Happens After 90 Days?",
        "category": "Legal",
        "trigger": "Questions about post-contract options",
        "full_script": "After 90 days, you have three options: 1) Renew for another 90 days, 2) License the system for internal use, or 3) Purchase it outright. Most clients choose to renew based on the results.<br><br>Present clear post-contract pathways.",
        "key_principle": "Present clear post-contract pathways."
      },

      "ip_ownership": {
        "title": "IP Ownership",
        "category": "Legal",
        "trigger": "Questions about intellectual property rights",
        "full_script": "We retain IP ownership of our proprietary systems and methodologies. At the end of the engagement, you have the option to license or purchase the IP for internal use. This is standard in advisory engagements.<br><br>Explain standard IP ownership terms and licensing options.",
        "key_principle": "Explain standard IP terms and licensing options."
      },

      "data_ownership": {
        "title": "Data Ownership",
        "category": "Legal",
        "trigger": "Questions about data rights and ownership",
        "full_script": "Any data collected during the engagement belongs to you. We use it only for delivering the service and maintain strict confidentiality. This is clearly spelled out in the data protection section of the agreement.<br><br>Reassure on data ownership and confidentiality.",
        "key_principle": "Reassure on data ownership and confidentiality."
      },

      "nda_request": {
        "title": "NDA Request",
        "category": "Legal",
        "trigger": "Request for non-disclosure agreement",
        "full_script": "Absolutely, we can execute an NDA immediately. Would you prefer to use yours or ours? This is standard practice for us and doesn't delay the process.<br><br>Agree to NDA and offer to use their template.",
        "key_principle": "Agree to NDA, offer to use their template."
      },

      "insurance_compliance": {
        "title": "Insurance/Compliance",
        "category": "Legal",
        "trigger": "Questions about insurance, compliance, ITAR, FDA, industry regulations, or quality certifications",
        "full_script": "Compliance is absolutely critical, and that's exactly the right concern to have. We work with highly regulated industries — aerospace, defense, medical devices, family offices — where brand integrity and regulatory compliance are everything. If anybody understands the weight of compliance risk, it's us.<br><br>We've run engagements for ITAR-certified manufacturers, FDA-regulated medical device companies, and defense contractors. With them, you don't blast generic outreach — you earn trust, and every touch has to uphold their reputation and meet strict regulatory standards.<br><br>That's why our infrastructure is built to be enterprise-grade and compliance-first. This isn't spray-and-pray. It's a controlled system designed for reputable firms to reach decision-makers in a way that feels personal, relevant, and respectful — and meets your industry's regulatory requirements. The exact reason you're on this call is because that same system got through to you without looking like spam or violating compliance boundaries.<br><br>And just to be clear — that's what this call is: due diligence. We scope an engagement model that protects your brand and compliance requirements first, then shows where we can build a channel that creates consistent demand. The model itself is what tells us how to do that while retaining your integrity and meeting all regulatory standards.<br><br>During discovery, we'll ask about any specific compliance boundaries we should respect from day one — ITAR, FDA, data protection, whatever your industry requires. Those will be documented in the engagement letter's compliance sections, and we'll work with your compliance team to ensure everything meets your standards before anything goes out.<br><br>Does your team have specific compliance requirements we should be aware of? We can capture those now as part of the due diligence process.",
        "key_principle": "Acknowledge compliance as proof they care about quality. Leverage credibility with regulated industries, reframe as enterprise-grade infrastructure, then anchor on due diligence and the engagement model. Never dive into mechanism details — compliance boundaries are captured during discovery and formalized in the engagement letter."
      },

      "month_to_month": {
        "title": "Month-to-Month",
        "category": "Legal",
        "trigger": "Request for month-to-month terms",
        "full_script": "Month-to-month doesn't provide the stability needed for the infrastructure investment required. The 90-day structure with milestone payments provides the perfect balance of commitment and protection.<br><br>Explain why longer terms are necessary for infrastructure investment.",
        "key_principle": "Explain need for commitment duration."
      },

      // Disqualification Signals (9 handlers)
      "time_waster_behaviors": {
        "title": "Time Waster Behaviors",
        "category": "Disqualify",
        "trigger": "Prospect shows clear signs of not being serious",
        "full_script": "I appreciate your time today. Based on our conversation, it seems this might not be the right fit at this time. I'll follow up in 6 months in case circumstances change.<br><br>Politely disqualify and create a soft follow-up plan.",
        "key_principle": "Politely disqualify with soft follow-up."
      },

      "wont_engage_discovery": {
        "title": "Won't Engage Discovery",
        "category": "Disqualify",
        "trigger": "Refuses to participate in discovery process - any reason",
        "key_principle": "Diagnose readiness without assuming the cause of resistance. Assess if prospect is ready for discovery or needs different approach.",
        "early_readiness_assessment": {
          "title": "Early Readiness Assessment",
          "if_defensive_hostile": {
            "title": "If defensive/hostile",
            "script": "It sounds like you've had some frustrating experiences in this space. I want to make sure we're not wasting each other's time. <b>What would need to be true for you to feel comfortable exploring this?</b>"
          },
          "if_time_pressed": {
            "title": "If time-pressed",
            "script": "I'm sensing time is tight. <b>What's the minimum you'd need to see in the next 5 minutes to know if this is worth continuing?</b>"
          },
          "if_overwhelmed": {
            "title": "If overwhelmed",
            "script": "It sounds like you're getting hit from all sides. <b>Would it make more sense for me to send you materials first, and we reconnect after you've had a chance to review?</b>"
          },
          "if_testing_evaluating": {
            "title": "If testing/evaluating",
            "script": "I'm getting the sense you're evaluating multiple options. <b>What are you comparing us against, and what's most important in that comparison?</b>"
          }
        },
        "decision_tree": {
          "ready_for_discovery": "Continue with standard flow",
          "needs_trust_building": "Deploy proof-first path, reconnect later",
          "fundamentally_misaligned": "Polite disqualification"
        },
        "full_script": "I understand. Without going through the discovery process to establish the anchors, we can't create an accurate Scope of Work. If you'd like to revisit this later when you're ready for a more detailed discussion, please don't hesitate to reach out.<br><br>Explain the necessity of discovery for accurate scoping.",
        "trust_first_approach": {
          "title": "Trust First Approach: Deferred Discovery",
          "when_to_use": "Use when prospect won't engage in discovery because they need to verify credibility first, especially after past vendor burn. This approach respects their need for proof before sharing internal numbers. Best when they're guarded but not hostile.",
          "script": "I hear you. You're not giving me your internal numbers until I prove we're different from the vendors who burned you. That's completely fair.<br><br>Here's what makes more sense: I'll send you our case studies, client references, and a draft proposal. You verify we're legit, and if it checks out, we reconnect next week for a proper discovery call.<br><br>Does that work better?"
        }
      },

      "referral_only_absolutist": {
        "title": "Referral-Only Absolutist",
        "category": "Disqualify",
        "trigger": "Insists they only work with referrals",
        "full_script": "I respect that position. Since our model focuses on systematic, outbound-driven growth rather than referral networks, this probably isn't the right fit. Best of luck with your referral-based approach.<br><br>Respect their position and disqualify politely.",
        "key_principle": "Respect position, disqualify politely."
      },

      "no_conversion_infrastructure": {
        "title": "No Conversion Infrastructure",
        "category": "Disqualify",
        "trigger": "Lacks basic systems to handle leads",
        "full_script": "Based on what you've shared, it sounds like you might need to build some foundational infrastructure first before adding new lead flow. I'd recommend focusing on that before considering additional lead generation.<br><br>Recommend building infrastructure before lead generation.",
        "key_principle": "Recommend infrastructure building first."
      },

      "unqualified_prospect": {
        "title": "Unqualified Prospect",
        "category": "Disqualify",
        "trigger": "Prospect doesn't meet basic qualification criteria",
        "full_script": "Thank you for your time. Based on our discussion, it seems we're not the right fit for your current situation. I'll note this in our system in case your needs change in the future.<br><br>Politely disqualify and create a follow-up note.",
        "key_principle": "Politely disqualify with follow-up note."
      },

      // Mid-Discovery Issues (8 handlers)
      "mentions_referrals_data": {
        "title": "Mentions Referrals (Data?)",
        "category": "Mid Issues",
        "trigger": "Prospect mentions referral-based lead generation",
        "full_script": "Referrals are great for warm leads. Our system is designed to complement your referral efforts by providing a systematic approach to expand your total pipeline. What percentage of your current business comes from referrals?<br><br>Position as complementary to referrals, not replacement.",
        "key_principle": "Position as complementary to referrals."
      },

      "mentions_internal_team_data": {
        "title": "Mentions Internal Team (Data?)",
        "category": "Mid Issues",
        "trigger": "Prospect mentions their internal sales/marketing team",
        "full_script": "That's excellent that you have a strong internal team. Our engagement is designed to provide them with a steady flow of qualified opportunities they can focus on converting, rather than prospecting. How many people are on your current sales team?<br><br>Position as providing pipeline to existing team.",
        "key_principle": "Position as pipeline provider to existing team."
      },

      "brand_risk_spam": {
        "title": "Brand Risk/Spam",
        "category": "Mid Issues",
        "trigger": "Concern about brand reputation from outbound efforts",
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
        "category": "Mid Issues",
        "trigger": "Prospect worried about being overwhelmed by leads",
        "full_script": "That's a smart concern. We pace delivery based on your absorption capacity, not our generation capacity. What's the maximum number of new qualified meetings your team can handle per month without getting overwhelmed?<br><br>Emphasize capacity-controlled pacing.",
        "key_principle": "Emphasize capacity-controlled pacing."
      },

      "sales_cycle_too_long": {
        "title": "Sales Cycle Too Long",
        "category": "Mid Issues",
        "trigger": "Extended sales cycles that affect ROI calculations",
        "full_script": "Sales cycle length is a critical factor. If your cycle is over 90 days, we anchor to Pipeline Value rather than realized revenue. This protects both sides. What's your typical sales cycle length?<br><br>Explain impact on anchoring strategy.",
        "key_principle": "Explain impact on anchoring strategy."
      },

      "close_rate_problems": {
        "title": "Close Rate Problems",
        "category": "Mid Issues",
        "trigger": "Admission of poor conversion rates",
        "full_script": "Close rate challenges are common. We anchor our guarantee to qualified introductions, not closed deals, because conversion is within your control. What's your current close rate on qualified opportunities?<br><br>Clarify that conversion responsibility remains with client.",
        "key_principle": "Clarify conversion responsibility with client."
      },

      "founder_dependency": {
        "title": "Founder Dependency",
        "category": "Mid Issues",
        "trigger": "Heavy reliance on founder for sales success",
        "full_script": "Founder involvement is a strength. We can pace our delivery to match your availability while building scalable processes. What's the maximum number of meetings you can personally handle per month?<br><br>Leverage founder strength while planning for scalability.",
        "key_principle": "Leverage founder strength with scalability planning."
      },

      "high_churn": {
        "title": "High Churn",
        "category": "Mid Issues",
        "trigger": "High customer churn affecting LTV calculations",
        "full_script": "Churn rate significantly impacts the economics. We use conservative LTV estimates to ensure our projections are realistic. What's your current customer churn rate?<br><br>Factor churn into conservative LTV calculations.",
        "key_principle": "Factor churn into conservative LTV calculations."
      },

      // Tic-Tac-Toe Variations (9 handlers)
      "it_depends_tic": {
        "title": "\"It Depends\" (Tic)",
        "category": "Tic-Tac-Toe",
        "trigger": "Prospect says 'it depends' when asked about process repeatability",
        "full_script": "I understand that nuance exists. The key question is: in the majority of cases, do you have a repeatable process that converts qualified introductions into customers? If the answer is yes, that's the 'Tic' we need.<br><br>Cut through 'it depends' to get to the core repeatability question.",
        "key_principle": "Cut through nuance to core repeatability."
      },

      "not_repeatable_tic": {
        "title": "Not Repeatable (Tic)",
        "category": "Tic-Tac-Toe",
        "trigger": "Prospect admits process is not repeatable",
        "full_script": "That's actually perfect for us. Let's reconstruct your winning process from your last successful deal. That becomes the baseline we feed with new qualified introductions.<br><br>Turn non-repeatability into an opportunity to build the baseline process.",
        "key_principle": "Turn non-repeatability into baseline-building opportunity."
      },

      "hedged_tic": {
        "title": "Hedged Tic",
        "category": "Tic-Tac-Toe",
        "trigger": "Prospect hedges on process repeatability",
        "full_script": "I hear the hedging. Let me ask this directly: If I brought you a qualified introduction tomorrow who met your criteria, would you have a process to convert them? That's really what matters.<br><br>Cut through hedging to direct yes/no on core capability.",
        "key_principle": "Cut through hedging to direct capability question."
      },

      "conditional_tic": {
        "title": "Conditional Tic",
        "category": "Tic-Tac-Toe",
        "trigger": "Process repeatability depends on conditions",
        "full_script": "Conditions are fair. As long as you have a process that works in the majority of cases that fit your target profile, that's the foundation we need. What are the key conditions that make your process work?<br><br>Accept reasonable conditions while establishing core repeatability.",
        "key_principle": "Accept reasonable conditions for repeatability."
      },

      "rejects_a_b_c_tac": {
        "title": "Rejects A/B/C (Tac)",
        "category": "Tic-Tac-Toe",
        "trigger": "Prospect rejects the qualification criteria",
        "full_script": "I understand your perspective. What criteria would you use to determine if a prospect is qualified? We want to make sure we're aligned on what constitutes a real opportunity for you.<br><br>Seek alternative criteria while maintaining qualification focus.",
        "key_principle": "Seek alternative criteria while maintaining focus."
      },

      "wants_to_narrow_tac": {
        "title": "Wants to Narrow (Tac)",
        "category": "Tic-Tac-Toe",
        "trigger": "Prospect wants stricter qualification criteria",
        "full_script": "Stricter criteria can be good for quality. The challenge is that overly narrow criteria reduce the total addressable market. What's your concern about the broader A/B/C criteria?<br><br>Balance quality concerns with market size implications.",
        "key_principle": "Balance quality with market size implications."
      },

      "toe_process_questions": {
        "title": "Toe Process Questions",
        "category": "Tic-Tac-Toe",
        "trigger": "Questions about the verification process",
        "full_script": "The verification process is designed to be low-friction. You'll receive a simple form after each meeting asking if the prospect met the agreed criteria. If yes, it counts toward the milestone. If no, we replace them.<br><br>Explain the simple, low-friction verification process.",
        "key_principle": "Explain simple, low-friction verification."
      },

      "dispute_resolution": {
        "title": "Dispute Resolution",
        "category": "Tic-Tac-Toe",
        "trigger": "Questions about how disputes are handled",
        "full_script": "Disputes are resolved by referring back to the agreed A/B/C criteria. Since you control the verification, you have the final say on whether criteria were met. Our focus is on providing qualified introductions.<br><br>Establish clear dispute resolution through agreed criteria.",
        "key_principle": "Establish clear dispute resolution process."
      },

      "verification_timing": {
        "title": "Verification Timing",
        "category": "Tic-Tac-Toe",
        "trigger": "Questions about timing of verification process",
        "full_script": "Verification occurs after the initial meeting, typically within 48-72 hours. This gives you time to assess fit while maintaining momentum. What's your preference for timing?<br><br>Explain standard timing and seek client preference.",
        "key_principle": "Explain standard timing, accommodate preferences."
      },

      // Integration/Close Issues (7 handlers)
      "price_shock": {
        "title": "Price Shock / Too Expensive",
        "category": "Integration/Close Issues",
        "trigger": "Prospect reacts negatively to the price or says 'too expensive'",
        "full_script": "<i>I'll be the first to tell you</i> we're <b>not the cheapest option</b> — and that's <u>exactly what our risk-mitigation model is built around</u>.<br><br>We only work with companies where the <b>45-day milestone and performance guarantee</b> matter more than initial price. That's where we live.<br><br>(Deploy story about milestone hit, second tranche earned, 2x performance)<br><br>Let me give you an example. We had a client who was evaluating us against two other vendors. One was $18K for 90 days. Another was $22K. We came in at $50K.<br><br>On paper, we were the most expensive by far.<br><br>But here's what made the difference: We were the only one who said, <b>'If we don't hit 15 qualified meetings by day 45, you don't pay the second $25K — and we keep working until you do.'</b><br><br>The cheaper vendors had no milestone. No guarantee. No continuation clause. Just 'pay us monthly and hope for results.'<br><br>The client chose us because the <u>worst-case scenario was still ROI-positive</u>. Even if we only hit the 15-meeting minimum, at their 20% close rate, that's 3 deals at $60K ACV = $180K in revenue for a $50K investment.<br><br>What actually happened: We delivered <b>23 qualified meetings by day 45</b>. They closed 5 deals. $300K in revenue. The 'expensive' option became the <b>highest ROI decision</b> they made that quarter.<br><br>(Pivot)<br><br>Now, to see if that structure makes sense — what's your current cost per qualified opportunity, and how does that compare to what we're proposing?",
        "key_principle": "Objection Positioning™: Acknowledge weakness ('not cheapest'), reframe as thesis ('risk-mitigation matters more'), deploy story mode, pivot to ROI comparison."
      },

      "need_faster_results": {
        "title": "Need Faster Results / 45 Days Too Long",
        "category": "Integration/Close Issues",
        "trigger": "Prospect says they need results faster than 45 days or questions the timeline",
        "full_script": "<i>I'll be the first to tell you</i> <b>45 days is our minimum engagement window</b> — and that's <u>exactly what the entire risk model is designed around</u>.<br><br>Anything shorter and we can't deliver a fair shot at meaningful results. That's our <b>non-negotiable</b>.<br><br>(Deploy story about 45-day milestone, early wins, continuation)<br><br>Let me show you why that matters. We had a client who wanted results in 2 weeks. They'd been burned by vendors who took 6 months to 'ramp up' and never delivered.<br><br>We told them: <b>'We can't guarantee meaningful results in 2 weeks. But we can guarantee that by day 45, you'll have 12 qualified meetings — or you don't pay the second half.'</b><br><br>Here's what happened: By day 21, we'd already delivered 7 qualified meetings. By day 45, we hit 15 (milestone was 12). By day 90, they'd closed 3 deals worth $180K.<br><br>The 45-day window isn't about being slow — it's about being <u>realistic and defensible</u>. It gives us time to:<br>- Build and test messaging<br>- Acquire and validate data<br>- Deploy infrastructure properly<br>- Generate enough volume to hit statistical significance<br><br>If we promised results in 2 weeks, we'd be lying. The 45-day milestone is the <b>shortest window</b> where we can contractually commit to outcomes without setting you up to fail.<br><br>(Pivot)<br><br>Now, to see if 45 days aligns with your planning — what's driving the urgency, and when do you actually need to show results to leadership?",
        "key_principle": "Objection Positioning™: Acknowledge weakness ('45 days is minimum'), reframe as thesis ('designed for realistic results'), deploy story mode, pivot to understand urgency."
      },

      "comparing_to_last_vendor": {
        "title": "Comparing to Last Vendor",
        "category": "Integration/Close Issues",
        "trigger": "Prospect compares to previous vendor pricing",
        "full_script": "Comparing to previous vendors is smart. Our fee includes the guarantee and risk mitigation that most vendors don't offer. What's the biggest difference you've noticed between our approach and your previous vendor?<br><br>Highlight unique value propositions over price comparison.",
        "key_principle": "Highlight unique value over price comparison."
      },

      "whats_included": {
        "title": "What's Included?",
        "category": "Integration/Close Issues",
        "trigger": "Questions about scope of deliverables",
        "full_script": "Everything needed to hit the milestone is included: the infrastructure, messaging, execution, and ongoing optimization. We don't nickel-and-dime—we deliver a complete solution.<br><br>Emphasize comprehensive, all-inclusive approach.",
        "key_principle": "Emphasize comprehensive, all-inclusive solution."
      },

      "when_can_we_start": {
        "title": "When Can We Start?",
        "category": "Integration/Close Issues",
        "trigger": "Questions about implementation timeline",
        "full_script": "Once the Engagement Letter is executed, we commence onboarding within 1 to 2 business days. Campaign deployment typically follows within two to four weeks, once we finalize the strategy and allocate the required infrastructure. We are ready to begin as soon as you are. What's your ideal start date?<br><br>Signals readiness, sets realistic expectations for the timeline (1-2 days onboarding, 2-4 weeks deployment), and seeks client preference.",
        "key_principle": "Signal readiness with realistic timeline expectations and seek client preference."
      },

      "onboarding_questions": {
        "title": "Onboarding Questions",
        "category": "Integration/Close Issues",
        "trigger": "Questions about the onboarding process",
        "full_script": "Onboarding is streamlined: we collect your assets, finalize messaging, and set up tracking. You'll have a dedicated point person, and we provide templates for everything needed.<br><br>Describe streamlined, supportive onboarding process.",
        "key_principle": "Describe streamlined, supportive process."
      },

      "communication_cadence": {
        "title": "Communication Cadence",
        "category": "Integration/Close Issues",
        "trigger": "Questions about communication frequency",
        "full_script": "We align communication to your preferred tempo. Typically, it's weekly updates with bi-weekly calls. Daily updates are available if you prefer more frequent communication.<br><br>Offer flexible communication aligned to client preference.",
        "key_principle": "Offer flexible communication aligned to preference."
      },

      "success_definition": {
        "title": "Success Definition",
        "category": "Integration/Close Issues",
        "trigger": "Questions about how success is measured",
        "full_script": "Success is the 45-day milestone: outperforming your current baseline by 1.5x in qualified meetings. Everything is tracked transparently, and you control the verification process.<br><br>Define clear, measurable success criteria.",
        "key_principle": "Define clear, measurable success criteria."
      },

      // Post-Scope Issues (7 handlers)
      "ghost_no_response": {
        "title": "Ghost/No Response",
        "category": "Post Issues",
        "trigger": "Prospect goes silent after receiving scope",
        "full_script": "I wanted to follow up on the Scope of Work I sent. Have you had a chance to review it? I'm happy to walk through any questions or concerns you might have.<br><br>Re-engage with gentle follow-up offering support.",
        "key_principle": "Re-engage with gentle follow-up."
      },

      "looks_good_but": {
        "title": "Looks Good BUT...",
        "category": "Post Issues",
        "trigger": "Prospect likes scope but raises objections",
        "full_script": "I'm glad the scope looks good. What's the concern that's holding you back? I'd like to address it directly so we can move forward.<br><br>Isolate and address the specific objection.",
        "key_principle": "Isolate and address specific objection."
      },

      "new_objections": {
        "title": "New Objections",
        "category": "Post Issues",
        "trigger": "Prospect raises new objections after scope",
        "full_script": "That's a valid concern. How does this objection change your view of the overall opportunity? I'd like to understand the impact so I can address it properly.<br><br>Understand objection's impact on overall decision.",
        "key_principle": "Understand objection's impact on decision."
      },

      "legal_has_redlines": {
        "title": "Legal Has Redlines",
        "category": "Post Issues",
        "trigger": "Legal team has concerns with contract terms",
        "full_script": "Legal review is important. What specific concerns did they raise? Most of our terms are standard, but I'm happy to address any legitimate concerns they have.<br><br>Address specific legal concerns directly.",
        "key_principle": "Address specific legal concerns directly."
      },

      "need_to_compare": {
        "title": "Need to Compare",
        "category": "Post Issues",
        "trigger": "Prospect wants to compare with other options",
        "full_script": "Comparing options is smart. What are you comparing us against? I'd like to understand the key differences so I can highlight our unique advantages.<br><br>Understand comparison criteria and highlight differentiators.",
        "key_principle": "Understand comparison criteria."
      },

      "can_we_modify": {
        "title": "Can We Modify?",
        "category": "Post Issues",
        "trigger": "Prospect wants to modify terms or scope",
        "full_script": "Modifications are possible within reason. What specifically would you like to change? I want to make sure we can accommodate your needs while maintaining the core value proposition.<br><br>Assess modification requests against core value.",
        "key_principle": "Assess modifications against core value."
      },

      "immediate_yes": {
        "title": "Immediate Yes",
        "category": "Post Issues",
        "trigger": "Prospect immediately agrees to proceed",
        "full_script": "Excellent! I'll prepare the Engagement Letter and Invoice right away. We can have this signed and onboarding started within 24 hours.<br><br>Accelerate process for immediate agreement.",
        "key_principle": "Accelerate process for immediate agreement."
      },

      // Edge Cases & Unexpected - 9 handlers (i_love_this_lets_sign_today removed - duplicate of i_love_this_sign_today)

      "were_getting_acquired": {
        "title": "We're Getting Acquired",
        "category": "Edge Cases",
        "trigger": "Company acquisition affecting decision-making",
        "full_script": "That’s a critical development. M&A processes often prioritize clean revenue growth or pipeline certainty. We can scope the engagement to generate Pipeline Value that makes the acquisition thesis more robust. Will having a risk-mitigated Scope of Work, anchored to a 1.5× pipeline increase, strengthen the growth narrative for the final valuation?<br><br>Reframe the engagement as a strategic asset for the due diligence process and valuation.",
        "key_principle": "Reframe as strategic asset for M&A due diligence."
      },

      "we_just_lost_our_biggest_client": {
        "title": "We Just Lost Our Biggest Client",
        "category": "Edge Cases",
        "trigger": "Major client loss creating urgency",
        "full_script": "I hear you; losing a key account is a massive pressure point. That shifts the priority from 'growth' to 'critical LTV replacement.' Let's scope the engagement to generate Pipeline Value that exceeds that loss within the next 90 days. Our structure ensures the investment is focused on replacement with guaranteed downside protection.<br><br>Validate the crisis, then re-anchor the fee as an urgent capital allocation to replace the lost LTV, making the solution an undeniable financial necessity.",
        "key_principle": "Reframe as urgent LTV replacement opportunity."
      },

      "we_have_an_emergency_can_we_reschedule": {
        "title": "We Have an Emergency, Can We Reschedule?",
        "category": "Edge Cases",
        "trigger": "Urgent situation requiring immediate rescheduling",
        "full_script": "Of course, completely understand. I'll make sure our team holds your file open and prioritizes the Scope of Work build. My assistant will send a quick link to reschedule for [Suggest time within 48-72 hours] so we can capture the final anchors and finalize the Scope of Work.<br><br>Maintain professional composure (high QOE™). Accept the urgency, but manage logistics professionally, using an assistant/scheduler alias if appropriate, and immediately rescheduling to maintain momentum.",
        "key_principle": "Maintain composure, manage logistics professionally."
      },

      "the_person_you_need_to_talk_to_just_left": {
        "title": "The Person You Need to Talk to Just Left",
        "category": "Edge Cases",
        "trigger": "Key contact departure changing decision path",
        "full_script": "That is unfortunate news, but thank you for letting me know. To ensure we align with the new structure: who has inherited the budget and oversight for commercial growth initiatives? And who is the new economic buyer we should arm with the Scope of Work?<br><br>This is a failure in mapping the Decision Path (D.E.D.I.™). Pivot immediately to diagnosing the new reporting structure and finding the new economic buyer.",
        "key_principle": "Pivot to map new decision architecture."
      },

      "can_we_hire_you_to_do_something_else_instead": {
        "title": "Can We Hire You to Do Something Else Instead?",
        "category": "Edge Cases",
        "trigger": "Request to pivot to different service offering",
        "full_script": "We specialize in engineering predictable revenue outcomes tied to internal benchmarks. While we don't execute [Specific request], the constraint you just mentioned is often solved by having a predictable pipeline that de-risks capital commitment. Let's focus on anchoring that pipeline certainty first.<br><br>Redirect the pivot request back to the core P.A.R.M.™ function: generating pipeline certainty and de-risking the capital allocation.",
        "key_principle": "Redirect to core P.A.R.M.™ pipeline function."
      },

      "can_you_just_train_our_team_instead": {
        "title": "Can You Just Train Our Team Instead?",
        "category": "Edge Cases",
        "trigger": "Request for training instead of execution",
        "full_script": "Our mandate is to architect the revenue model and then deploy vetted execution infrastructure to hit the Day-45 Milestone. We are here to fuel the fire, not staff the engine. If we install a predictable channel, who internally would be responsible for converting that demand into a signed client? We need to establish clear ownership.<br><br>The advisory role is about defining the engine, not staffing it. Clarify the accountability boundary: the advisor owns the input (interest creation), the client owns the conversion (staffing).",
        "key_principle": "Clarify input vs conversion accountability."
      },

      "were_shutting_down": {
        "title": "We're Shutting Down",
        "category": "Edge Cases",
        "trigger": "Company closure or dissolution",
        "full_script": "Thank you for the clarity. I wish you the best of luck with the transition.<br><br>Exit cleanly. Disqualification is a win, protecting the advisor's time and resources.",
        "key_principle": "Exit cleanly when company is dissolving."
      },

      "we_just_raised_funding_lets_go_bigger": {
        "title": "We Just Raised Funding, Let's Go Bigger",
        "category": "Edge Cases",
        "trigger": "Capital infusion enabling larger scope",
        "full_script": "That is excellent news and confirms our thesis on market readiness. We always anchor the initial 90-day scope to your *current* absorption capacity to protect the win rate. Let's execute this baseline pilot, and if we hit the Day-45 milestone early, we can immediately execute a Change Order to expand the scope into new markets.<br><br>Acknowledge the capital, but lock the pilot scope based on risk mitigation and capacity constraints. Future expansion is conditional on performance.",
        "key_principle": "Lock pilot scope, expand conditionally on performance."
      },

      "our_competitor_just_did_this_we_need_it_now": {
        "title": "Our Competitor Just Did This, We Need It Now",
        "category": "Edge Cases",
        "trigger": "Competitive urgency requiring immediate action",
        "full_script": "That competitive intelligence is critical. Urgency is exactly why we move fast: to define your outperformance baseline and lock the risk clause. We can formalize the Engagement Letter today to begin the strategic architecture immediately, but execution will still require two to four weeks to allocate and warm the proprietary infrastructure needed to hit the Day-45 Milestone safely.<br><br>Leverage the urgency for commitment, but defend the necessary deployment timeline, controlling the throttle and emphasizing rigor over reckless speed.",
        "key_principle": "Leverage urgency for commitment while controlling timeline."
      },

      // Objection Variations - 11 handlers
      // Mechanism Variations
      "are_you_using_ai": {
        "title": "Are You Using AI?",
        "category": "Var Mechanism",
        "trigger": "Question about AI usage in the process",
        "full_script": "Glad you asked. One thing we've learned is the channel doesn't matter—it's the messaging. That's the crown jewel. We rely on world-class copywriters, utilizing proprietary infrastructure that ensures scale and compliance. The real 'secret sauce' is how messaging + infrastructure ties back to the engagement model—and until we can put that together, the details of AI or tools aren't what matters.<br><br>Deflects the specific tool (AI) by emphasizing the crown jewel is the messaging and the system orchestration.",
        "key_principle": "Deflect to messaging crown jewel.",
        "framework_alignment": "Following mechanism framing rules from The Advisory Thesis™, we never list tools or channels outside narrative context. The crown jewel is always the messaging and brand protection, not the channel. Infrastructure orchestration only matters in service of message quality and thesis execution. This keeps the conversation at the doctrinal level (thesis-driven system) rather than the tactical level (which tools we use)."
      },

      "do_you_use_automation": {
        "title": "Do You Use Automation?",
        "category": "Var Mechanism",
        "trigger": "Question about automated processes",
        "full_script": "We utilize enterprise-grade orchestration and proprietary infrastructure to ensure scale and compliance. This isn't manual effort; it's a controlled system designed for reputable firms to reach decision-makers. Are there specific compliance or volume restrictions on commercial outreach that we should be aware of?<br><br>Reframe the 'automation' concern as controlled, compliant orchestration that respects brand integrity.",
        "key_principle": "Reframe as controlled, compliant orchestration.",
        "framework_alignment": "Per mechanism framing rules, we reframe 'automation' (which sounds impersonal/risky) as 'enterprise-grade orchestration' and 'controlled system.' This language emphasizes brand safety and compliance—core thesis elements. We never defend or deny automation; we elevate to system architecture that serves brand-integrity constraints. The pivot to compliance questions keeps us in advisory posture."
      },



      "do_you_buy_lists": {
        "title": "Do You Buy Lists?",
        "category": "Var Mechanism",
        "trigger": "Question about data sourcing",
        "full_script": "We conduct rigorous executive segmentation analysis and leverage multiple data sources, including proprietary vendor lists and AI prompts, to build highly targeted, verified-only lists. This strategic targeting is a core part of the infrastructure allocation required to hit the Day-45 Milestone, ensuring quality and reach.<br><br>Reframe list procurement as proprietary executive segmentation logic and strategic research required for the scope.",
        "key_principle": "Reframe as strategic segmentation and research.",
        "framework_alignment": "Per thesis positioning, 'buying lists' sounds transactional and low-value. We reframe data acquisition as 'executive segmentation analysis' and 'strategic targeting'—language that positions it as specialized diligence work. This connects directly to the thesis pillar: 'markets where data is hard to acquire.' We emphasize that this research infrastructure is what allows us to operate in sophisticated markets where standard lists don't exist or work. Ties mechanism back to risk mitigation (Day-45 Milestone)."
      },

      // Quality Variations
      "what_if_they_say_theyre_interested_but_arent": {
        "title": "What If They Say They're Interested But Aren't?",
        "category": "Var Quality",
        "trigger": "Concern about prospect quality and intent",
        "full_script": "That is why we transfer judgment control to you. If a prospect is disingenuous, you simply verify them as 'Disqualified' in the post-meeting follow-up, and they do not count toward the Milestone. You retain control over quality, protecting the engagement.<br><br>The QOA™ transfers perceived control to the client precisely to dissolve the quality objection. If they lie, the client, as the judge, simply does not credit the milestone.",
        "key_principle": "QOA transfers judgment control to client."
      },

      "how_do_you_validate_theyre_real_decision_makers": {
        "title": "How Do You Validate They're Real Decision Makers?",
        "category": "Var Quality",
        "trigger": "Question about decision-maker validation",
        "full_script": "We target the Economic Buyer or their direct Champion, but our qualification standard is based on fit, intent, and solvability (Financially Able, Serviceable, Genuinely Interested), not the title badge. We keep aiming high, but we credit opportunities that meet the three core A/B/C boxes, which ensures we don't stall momentum behind 'title fetishism.'<br><br>Distinguish between Targeting (aiming for decision makers) and Qualification (the A/B/C standard). Qualification must not rely solely on title.",
        "key_principle": "Qualification based on A/B/C, not title."
      },

      "what_if_theyre_just_gathering_info": {
        "title": "What If They're Just Gathering Info?",
        "category": "Var Quality",
        "trigger": "Concern about prospects just researching",
        "full_script": "If they meet our agreed A/B/C definition—meaning they are Financially Able, Serviceable, and Genuinely Interested in exploring a solution—they are a Qualified Opportunity. Research mode is often just a step in the buying process. We anchor to the fact that they are at least problem-aware and have taken the meeting to explore fixing it.<br><br>If they are actively meeting and exploring solutions, they meet the 'Problem-Aware and Genuinely Interested' criteria of the advisory standard.",
        "key_principle": "Research mode meets problem-aware criteria."
      },

      // Timing Variations
      "were_in_q4_freeze": {
        "title": "We're in Q4 Freeze",
        "category": "Var Timing",
        "trigger": "End-of-year budget freeze",
        "full_script": "Totally understand. Q4 freezes are common. That is exactly why we must formalize the Scope of Work now. Let's at least get the Engagement Letter reviewed and the risk-mitigated model in front of you—then you have a board-defensible, fully scoped option ready to greenlight the moment the budget window reopens in Q1.<br><br>Validate the timing, then use the existence of the freeze as leverage to complete the anchored, de-risked SoW immediately.",
        "key_principle": "Use freeze as leverage to complete SoW."
      },

      "lets_start_in_q1": {
        "title": "Let's Start in Q1",
        "category": "Var Timing",
        "trigger": "Preference for Q1 start timing",
        "full_script": "Perfect, Q1 starts are excellent for hitting the New Year with momentum. Since the engagement letter and invoice need to be executed now to lock in our capacity for a Q1 start date, let's set the official start date as January 15th. Does that alignment work for your internal planning?<br><br>Accept the timing, but compress the sales cycle by insisting the signature and capitalization happen now to secure the future capacity.",
        "key_principle": "Accept timing, compress sales cycle."
      },

      "after_specific_event": {
        "title": "After [Specific Event]",
        "category": "Var Timing",
        "trigger": "Timing tied to specific future event",
        "full_script": "Understood, we'll mark the calendar for [Date after event]. To ensure we align precisely, what must be true *after* the [Event Name] review to call that a success? Does that event determine the new budget allocation or the alignment of internal resources?<br><br>Honor the external constraint, but use the D.E.D.I.™ method to probe the internal consequence of the event (pulling the Approval Rope).",
        "key_principle": "Honor constraint, probe internal consequences."
      }

      // More handlers can be added here in the future
      // This provides the core structure with sample handlers
    }
  }
}

// Make salesData available on window for React components
try {
  if (typeof salesData !== 'undefined') {
    window.salesData = salesData;
    console.log('salesData assigned to window successfully');
  } else {
    console.error('salesData variable is undefined before assignment');
  }
} catch (error) {
  console.error('Error assigning salesData to window:', error);
}

