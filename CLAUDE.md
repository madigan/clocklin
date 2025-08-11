# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**clocklin** is an early-stage life organization app. The repository is set up with Claude Code integration but the core application has not yet been implemented.

## Current State

This is a greenfield project ready for initial development. No specific technology stack, build tools, or testing frameworks have been selected yet.

## Development Workflow

Follow the AI-assisted development process defined in README.md:

1. **Clarify the ask** (AI + Human)
2. **Propose implementation plan** (AI) 
3. **Create GitHub issue** (AI)
4. **Create git branch** (AI) - Use format: `<issue-number>/branch-description`
5. **Implement the plan** (AI)
6. **Test the feature** (AI)
7. **Regression test** (AI)
8. **Create commits** (AI)
9. **Create pull request** (AI)
10. **Handle PR feedback** (Human + AI)

## Available Tools

The local Claude configuration allows:
- `gh:*` - Full GitHub CLI access for issues, PRs, and repository management
- `find:*` - File system search operations
- `ls:*` - Directory listing operations

## GitHub Integration

The repository has two GitHub Actions workflows:

1. **`.github/workflows/claude.yml`** - Main Claude integration triggered by `@claude` mentions
2. **`.github/workflows/claude-code-review.yml`** - Automatic PR code reviews

## Architecture Notes

Since this is a greenfield project, key architectural decisions need to be made:
- Technology stack selection (frontend/backend frameworks)
- Project structure and directory organization
- Build tooling and development environment setup
- Testing strategy and framework selection

When implementing features, establish these foundations first before adding application logic.