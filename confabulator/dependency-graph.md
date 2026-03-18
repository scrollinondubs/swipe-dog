# Dependency Graph

```mermaid
graph TD

  1[[#1: User Interaction & Swiping]]
  2[#2: Implement Swipable Interface]
  3[#3: Develop Favorites Management]
  4[[#4: Appointment & Messaging System]]
  5[#5: Build Appointment Scheduling System]
  6[#6: Implement Messaging System]
  7[[#7: Admin Interface for Shelters]]
  8[#8: Develop Admin Interface]


  classDef epicStyle fill:#e1f5ff,stroke:#01579b,stroke-width:2px
  classDef taskStyle fill:#fff3e0,stroke:#e65100,stroke-width:1px
  class 1,4,7 epicStyle
  class 2,3,5,6,8 taskStyle
```

## Legend
- **Double box**: Epic
- **Single box**: Task
- **Arrow direction**: Dependency flow (A → B means B depends on A)

## About This Diagram

This diagram shows the dependencies between epics and tasks in your project. Use it to understand the order in which work should be completed and merged.

- **Epics** (double boxes) represent major features or components
- **Tasks** (single boxes) are specific implementation work items
- **Arrows** show dependencies (A → B means B depends on A completing first)

For parallel development using git worktrees, run:
```bash
./confabulator/setup-worktrees.sh
```
