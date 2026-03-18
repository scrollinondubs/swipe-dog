#!/bin/bash
#
# Git Worktree Setup Script
# Project: SwipeDog
# Repository: https://github.com/scrollinondubs/swipe-dog
# Generated: 2026-03-18T19:35:37.471Z
#
# This script creates separate git worktrees for each task and epic,
# enabling parallel development without branch conflicts.
#

set -e  # Exit on error

echo "🌳 Setting up git worktrees for parallel development..."
echo ""

# ================================================
# EPICS
# ================================================

# Epic #1: User Interaction & Swiping
# ✅ No dependencies - can start immediately
echo "Creating worktree for Epic #1..."
git worktree add ../epic-1-worktree -b epic/1-user-interaction-swiping 2>/dev/null || echo "  Worktree already exists"

# Epic #4: Appointment & Messaging System
# ✅ No dependencies - can start immediately
echo "Creating worktree for Epic #4..."
git worktree add ../epic-4-worktree -b epic/4-appointment-messaging-system 2>/dev/null || echo "  Worktree already exists"

# Epic #7: Admin Interface for Shelters
# ✅ No dependencies - can start immediately
echo "Creating worktree for Epic #7..."
git worktree add ../epic-7-worktree -b epic/7-admin-interface-for-shelters 2>/dev/null || echo "  Worktree already exists"

# ================================================
# TASKS
# ================================================

# Task #2: Implement Swipable Interface
echo "Creating worktree for Task #2..."
git worktree add ../task-2-worktree -b task/2-implement-swipable-interface 2>/dev/null || echo "  Worktree already exists"

# Task #3: Develop Favorites Management
echo "Creating worktree for Task #3..."
git worktree add ../task-3-worktree -b task/3-develop-favorites-management 2>/dev/null || echo "  Worktree already exists"

# Task #5: Build Appointment Scheduling System
echo "Creating worktree for Task #5..."
git worktree add ../task-5-worktree -b task/5-build-appointment-scheduling-system 2>/dev/null || echo "  Worktree already exists"

# Task #6: Implement Messaging System
echo "Creating worktree for Task #6..."
git worktree add ../task-6-worktree -b task/6-implement-messaging-system 2>/dev/null || echo "  Worktree already exists"

# Task #8: Develop Admin Interface
echo "Creating worktree for Task #8..."
git worktree add ../task-8-worktree -b task/8-develop-admin-interface 2>/dev/null || echo "  Worktree already exists"

echo ""
echo "✅ Worktree setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. View all worktrees: git worktree list"
echo "2. Check dependencies: ./confabulator/worktree-status.sh"
echo "3. Start working: cd <worktree-directory>"
echo ""
echo "🔀 Recommended merge order (dependencies first):"
echo "  1. #1 - User Interaction & Swiping"
echo "  2. #2 - Implement Swipable Interface"
echo "  3. #3 - Develop Favorites Management"
echo "  4. #4 - Appointment & Messaging System"
echo "  5. #5 - Build Appointment Scheduling System"
echo "  6. #6 - Implement Messaging System"
echo "  7. #7 - Admin Interface for Shelters"
echo "  8. #8 - Develop Admin Interface"
echo ""
echo "To cleanup all worktrees: ./confabulator/cleanup-worktrees.sh"
