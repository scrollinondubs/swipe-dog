# SwipeDog

I'm building a mobile app called "Tinder for Dogs." It's designed to help people swipe through photos of cute dogs and potentially find one they'd like to adopt.

## Quick Reference

### Bash Commands
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run linter
npm run test         # Run tests

# Database (if applicable)
npm run db:generate  # Generate database migrations
npm run db:migrate   # Run migrations
npm run db:push      # Push schema changes
```

### Project Structure
```
confabulator/        # Project documentation (IMPORTANT - read these first)
├── PRD.md           # Product requirements and features
├── project-vision.md # Vision and problem statement
├── implementation-plan.md # Technical architecture and roadmap
├── wireframes.md    # UI/UX wireframes and screen flows
├── business-model-canvas.md # Business model
└── PR-FAQ.md        # Press release and FAQ
src/                 # Source code
├── app/             # Next.js app router (if applicable)
├── components/      # UI components
├── lib/             # Utility functions and services
└── types/           # TypeScript types
```

## Project Context

### Target Customer
Someone with disposable income who is potentially open to adopting a dog and who has a mobile phone.

### Value Proposition
So they'll choose our product because it has a very fun interface. You get to see a bunch of cute dogs, and it's going to just be a very slick user interface.

### Platform
web

## Tech Stack

TypeScript, JavaScript, React, shadcn/ui, Radix UI, React Hook Form, Zod, Firebase, DrizzleORM, Stripe, NextAuth.js, Vercel, SQLite, Turso

## Key Documentation

**CRITICAL**: Before starting any work, familiarize yourself with the Confabulator documentation in `confabulator/`:

| Document | Purpose | When to Reference |
|----------|---------|-------------------|
| `PRD.md` | Feature specs, user stories, acceptance criteria | Before implementing any feature |
| `project-vision.md` | Problem statement, target users, goals | For strategic decisions |
| `implementation-plan.md` | Architecture, tech stack, data model, API routes | Technical implementation |
| `wireframes.md` | UI layouts, screen flows, component placement | Building UI components |
| `business-model-canvas.md` | Revenue, costs, partnerships | Business logic decisions |

## Development Guidelines

### Code Style
- Use TypeScript for all code; prefer interfaces over types
- Use functional and declarative programming patterns
- Use descriptive variable names with auxiliary verbs (isLoading, hasAccess, canSubmit)
- Use lowercase-with-dashes for directories (components/user-profile)
- Favor named exports for components and utilities

### Before Implementing Features
1. Read the relevant user story in `confabulator/implementation-plan.md`
2. Check acceptance criteria in `confabulator/PRD.md`
3. Reference wireframes in `confabulator/wireframes.md` for UI guidance
4. Follow the data model and API routes in the implementation plan

### Error Handling
- Implement comprehensive error handling at all levels
- Use try-catch blocks for async operations
- Provide user-friendly error messages
- Log errors appropriately for debugging

## Ralph Wiggum Build System

This project uses the Ralph Wiggum autonomous build loop for processing GitHub issues.

### Commands

| Command | Purpose |
|---------|---------|
| `/ralphify <issue>` | Generate Ralph files for a single issue |
| `/ralph-cleanup` | Archive completed session and close issue |
| `/ralph-orchestrate` | Process multiple issues automatically |

### Issue Convention for Orchestration

For issues to work with `/ralph-orchestrate`:

1. **Label**: Add `ralph:ready` label to issues ready for processing
2. **Dependencies**: Declare explicitly in issue body:
   ```
   depends-on: #42
   ```
3. **Content**: Include clear acceptance criteria or checklist items

### Orchestration Labels

| Label | Purpose |
|-------|---------|
| `ralph:ready` | Ready for orchestration |
| `ralph:queued` | In the orchestration queue |
| `ralph:in-progress` | Currently being processed |
| `ralph:complete` | Successfully processed (PR created) |
| `ralph:failed` | Processing failed, needs intervention |

### Workflow

1. Label issues with `ralph:ready`
2. Run `/ralph-orchestrate` (or `--dry-run` to preview)
3. Run the generated script: `./.ralph/ralph-orchestrate.sh`
4. Script creates feature branches and PRs for each issue (with fresh Claude sessions)
5. Review and merge PRs

**Note:** The orchestrator uses a two-phase approach to avoid context degradation:
- Phase 1: `/ralph-orchestrate` triages issues and generates an execution script
- Phase 2: The bash script invokes fresh Claude sessions per issue

## Current Focus

The MVP focuses on these core capabilities:

- Core features for the MVP will need to include the ability to swipe left and right on dog profiles, view a list of liked dogs, schedule appointments with shelters, and message shelters directly. Additionally, an admin interface is required for shelters to manage communications, appointment bookings, and upload new dog profiles quickly.

See `confabulator/implementation-plan.md` for the complete development roadmap.

## Repository

https://github.com/scrollinondubs/swipe-dog

---

*Generated by [Confabulator](https://vibecodelisboa.com/confabulator)*
