# Aether demo: talk track

A cheat sheet for demoing Aether to people who don't write code.

## The one-liner

> **Aether is a place where AI software engineers do real work. Each one gets its own computer in the cloud. You describe what you want in plain English, and it builds it, tests it, checks it with its own eyes, and hands it back for a human to approve.**

The key word is *hands back*. The AI doesn't quietly change your live product. It sends you a proposal with proof attached, and a person decides whether to accept it.

## Plain-English glossary

People will hear these words. Here's what they mean:

| Word | Say this instead |
|---|---|
| **Repository (repo)** | The project folder. All the files that make up the app. |
| **Branch** | A draft copy of the project. The AI works on its own copy, so nothing it does can break the real one. |
| **Commit** | A save point with a note saying what changed. |
| **Pull request (PR)** | "Here's what I changed, here's proof it works, please approve it." It's like a tracked-changes doc waiting for sign-off. |
| **Merge** | Clicking approve. The draft becomes the real thing. |
| **Tests / checks** | Automatic spot-checks, e.g. "does 2 lattes + 1 croissant add up to the right total?" |
| **Agent** | One AI worker with its own cloud computer. |

## The story (about 5 minutes)

### 1. Start with nothing (30 sec)

Show the **before** screenshot in the pull request: an empty folder with one file in it.

> "This project was empty. I sat down at Corgi Cafe and typed one sentence: *help me make a demo*."

### 2. The ask (30 sec)

> "I didn't give it a spec. I said I'm non-technical and asked it to help me figure out what to build. It decided a website for this cafe would make a good demo: a menu you can order from, a live basket, and a Corgi of the Day."

The point: **you describe the outcome and it works out the details.**

### 3. Watch it work (1 min)

Scroll through the conversation and point out that it:

- **looked at the project first**, before writing anything
- **wrote the website**: about 5 files, all readable
- **started the site on its own computer** and opened it in a browser
- **clicked through it like a customer**: added two lattes, a croissant and a dog biscuit, checked the total came to $14.75, placed the order
- **noticed problems on its own and fixed them**, e.g. headings hiding under the top bar

> "It isn't guessing. It ran the thing and looked at it, the same way you'd check your own work."

### 4. The proof (1 min)

Open the **pull request** and show:

- **Before / After screenshots.** Empty folder, then a working cafe website.
- **Tests.** 7 automatic checks: totals add up, prices show correctly, you can't order something that isn't on the menu, the opening hours work. They're recorded on the pull request, so you don't have to take the AI's word for it.

### 5. The human stays in charge (30 sec)

> "Nothing is live yet. This is a proposal. If I like it I click Merge. If not, I leave a comment like 'make the buttons bigger' and it comes back with a fix on the same proposal."

### 6. Take a request from the crowd (2 min)

This is the moment that sells it. Ask the room for a change, type it in, and let everyone watch. Good ones to suggest:

- *"Add a drink named after [someone in the room]."*
- *"Add a loyalty card: every 5th coffee is free."*
- *"Add a dark mode for night owls."*
- *"Add a tip jar with buttons for $1, $2 and $5."*
- *"Switch the prices to pounds / euros."*
- *"Add a 'Corgi Cam' section with a sleeping corgi animation."*

Each one gets its own screenshots and its own approval step, just like the first.

### Bonus wow: a team of AIs

> "One agent is nice. Aether can also run several at once. You can say *'build the loyalty card, dark mode and tip jar in parallel'* and it hands each job to its own agent on its own computer. Each one sends back its own proposal, and the lead agent combines them."

Only try this live if you have a few minutes to spare. Otherwise just describe it.

## Questions people will ask

**"Isn't this just ChatGPT writing code?"**
A chatbot gives you text and you do the rest. An Aether agent has its own computer, so it runs the code, opens it in a browser, clicks around, runs the tests, and shows you screenshots before it asks for approval.

**"Can it break my real product?"**
It works on a draft copy (a branch). Nothing changes until a human approves the pull request.

**"What if it gets something wrong?"**
Leave a comment on the pull request in plain English. It fixes it on the same proposal, with new screenshots.

**"Do I need to be technical?"**
The person giving this demo isn't. You describe what you want, and you judge the result by looking at the screenshots and trying the app.

## If the Wi-Fi dies

Everything you need is already in the pull request on GitHub: the before/after screenshots, the test results and this file. Open it on your phone and walk through it from there.
