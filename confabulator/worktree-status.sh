#!/bin/bash
#
# Git Worktree Status Script
# Project: SwipeDog
# Generated: 2026-03-18T19:35:37.472Z
#
# Shows the status of all worktrees and their dependencies.
#

echo "📊 Worktree Status - SwipeDog"
echo "="
echo ""

echo "📂 Active Worktrees:"
git worktree list
echo ""

echo "🔗 Dependency Summary:"
echo ""
echo "Epics:"
echo "  ✅ #1 - User Interaction & Swiping (no dependencies)"
echo "  ✅ #4 - Appointment & Messaging System (no dependencies)"
echo "  ✅ #7 - Admin Interface for Shelters (no dependencies)"
echo ""
echo "Tasks:"
echo "  ✅ #2 - Implement Swipable Interface (no dependencies)"
echo "  ✅ #3 - Develop Favorites Management (no dependencies)"
echo "  ✅ #5 - Build Appointment Scheduling System (no dependencies)"
echo "  ✅ #6 - Implement Messaging System (no dependencies)"
echo "  ✅ #8 - Develop Admin Interface (no dependencies)"
echo ""
echo "🔀 Recommended Merge Order:"
echo "  1. 📦 #1 - User Interaction & Swiping"
echo "  2. 📝 #2 - Implement Swipable Interface"
echo "  3. 📝 #3 - Develop Favorites Management"
echo "  4. 📦 #4 - Appointment & Messaging System"
echo "  5. 📝 #5 - Build Appointment Scheduling System"
echo "  6. 📝 #6 - Implement Messaging System"
echo "  7. 📦 #7 - Admin Interface for Shelters"
echo "  8. 📝 #8 - Develop Admin Interface"
echo ""
echo "💡 Tips:"
echo "  - Work on tasks with no dependencies first"
echo "  - Merge branches in the order shown above"
echo "  - Check GitHub issues for detailed requirements"
echo ""