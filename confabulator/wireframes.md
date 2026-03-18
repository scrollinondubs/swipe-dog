# Wireframes: SwipeDog

## Overview & User Story Mapping

**Design Approach:** Create an intuitive, engaging swipable interface for a seamless dog adoption experience via mobile devices. Focus on user engagement and easy navigation.

**User Story → Screen Mapping:**
- US-1: Swipable Dog Profiles → Dog Swipe Screen
- US-2: Favorites List → Favorites Screen
- US-3: Shelter Appointment Scheduling → Appointment Screen
- US-4: Shelter Messaging System → Messaging Screen
- US-5: Admin Interface for Shelters → Admin Dashboard

## Screen Flow Diagram

```
[Home/Onboarding] → [Dog Swipe]
   ↓                    ↓
[Login/Sign Up]     [Favorites] → [Appointment]
   ↓                    ↓
[Dashboard]         [Messaging]
   ↓
[Admin Dashboard]
```

## ASCII Wireframes

### 1. Home/Onboarding Screen
**User Stories Enabled:** [US-1]

```
┌───────────────────────────────────────────────┐
│  [SwipeDog Logo]                              │
│  Welcome to SwipeDog!                         │
│  Find your perfect canine companion.          │
│                                               │
│  [Continue with Email]                        │
│  [Continue with Google]                       │
│  [Continue with Facebook]                     │
│                                               │
│  Already have an account? <Log In>            │
└───────────────────────────────────────────────┘

        ↓ User selects a sign-in option

```

### 2. Dog Swipe Screen (Enables US-1)

```
┌───────────────────────────────────────────────┐
│  [SwipeDog Logo]          [Profile ▼]         │
├───────────────────────────────────────────────┤
│  ┌───────────────────────────────┐            │
│  │                               │            │
│  │        [Dog Image]            │            │
│  │                               │            │
│  └───────────────────────────────┘            │
│  Name: Bella                                   │
│  Age: 3 years                                  │
│  Breed: Labrador Mix                           │
│  Shelter: Happy Tails Rescue                   │
│  Location: New York, NY                        │
│                                               │
│  [← Dislike]             [Like →]              │
│                                               │
└───────────────────────────────────────────────┘

        ↓ User swipes right

```

### 3. Favorites Screen (Enables US-2)

```
┌───────────────────────────────────────────────┐
│  [SwipeDog Logo]          [Profile ▼]         │
├───────────────────────────────────────────────┤
│  Favorites                                     │
│  ┌───────────────────────────────┐            │
│  │  Bella                        │  [Remove]  │
│  │  Age: 3 years                 │            │
│  │  Breed: Labrador Mix          │            │
│  │  <Contact Shelter>            │            │
│  └───────────────────────────────┘            │
│  ┌───────────────────────────────┐            │
│  │  Max                          │  [Remove]  │
│  │  Age: 2 years                 │            │
│  │  Breed: Golden Retriever      │            │
│  │  <Contact Shelter>            │            │
│  └───────────────────────────────┘            │
│                                               │
└───────────────────────────────────────────────┘

        ↓ User clicks <Contact Shelter>

```

### 4. Appointment Screen (Enables US-3)

```
┌───────────────────────────────────────────────┐
│  [SwipeDog Logo]          [Profile ▼]         │
├───────────────────────────────────────────────┤
│  Schedule Appointment                         │
│  Select a Date: (Calendar)                    │
│  Available Times:                             │
│  {10:00 AM} {1:00 PM} {3:00 PM}               │
│                                               │
│  [Confirm Appointment]                        │
│                                               │
│  Your Appointments:                           │
│  ┌───────────────────────────────────────┐    │
│  │ Bella - July 5, 10:00 AM [Cancel]     │    │
│  └───────────────────────────────────────┘    │
│                                               │
└───────────────────────────────────────────────┘

        ↓ User confirms appointment

```

### 5. Messaging Screen (Enables US-4)

```
┌───────────────────────────────────────────────┐
│  [SwipeDog Logo]          [Profile ▼]         │
├───────────────────────────────────────────────┤
│  Messages                                      │
│  ┌───────────────────────────────────────┐    │
│  │ Happy Tails Rescue                    │    │
│  │ Hi! I'm interested in Bella.          │    │
│  │ [Your Message] ...................... │    │
│  └───────────────────────────────────────┘    │
│                                               │
│  [Send Message]                               │
│                                               │
│  Conversations:                               │
│  ┌───────────────────────────────────────┐    │
│  │ Happy Tails Rescue                    │    │
│  │ New Message!                          │    │
│  └───────────────────────────────────────┘    │
│                                               │
└───────────────────────────────────────────────┘

        ↓ User sends message

```

### 6. Admin Dashboard (Enables US-5)

```
┌───────────────────────────────────────────────┐
│  [Admin Panel - SwipeDog]                     │
├─────────────┬─────────────────────────────────┤
│  [Home]     │  Manage Dog Profiles            │
│  [Messages] │  ┌───────────────────────────┐  │
│  [Appointments] │  [Add New Profile]        │  │
│  [Settings] │  ┌───────────────────────────┐  │
│             │  │ Bella - Edit/Delete      │  │
│             │  └───────────────────────────┘  │
│             │  Appointments:                  │
│             │  ┌───────────────────────────┐  │
│             │  │ Bella - July 5, 10:00 AM  │  │
│             │  └───────────────────────────┘  │
│                                               │
└─────────────┴─────────────────────────────────┘

        ↓ Admin adds or edits profiles

```

## Mobile Responsive Variations

### Dog Swipe Screen (Mobile)

```
┌─────────────────────┐
│  [☰]   Logo  [User] │
├─────────────────────┤
│  ┌───────────────┐  │
│  │  Dog Image    │  │
│  └───────────────┘  │
│  Bella, 3 years     │
│  Labrador Mix       │
│  Happy Tails Rescue │
│  New York, NY       │
│                     │
│  [← Dislike] [Like →]│
└─────────────────────┘
```

## Interactive States

### Button States
```
[Normal Button]  [Hover: underline]  [Disabled: gray]  [Loading: spinner]
```

### Form Validation
```
{Valid Input✓}   {Invalid Input✗ Error message}
```

## Design System Quick Reference

- **Primary Action:** [Button] style
- **Secondary Action:** <Link> style
- **Input Fields:** {Field Name..........} style
- **Dropdowns:** (Select Option ▼) style
- **Navigation:** Top bar or sidebar with <Links>
- **Cards:** Boxes with ┌─┐└┘ characters

---

**REMEMBER:** Each screen is visually represented using ASCII art, showing the layout and interactive elements. The style follows the product's user-centered design philosophy.