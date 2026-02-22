# Personal Portfolio – Dark Gradient Edition

## Overview

This is a modern, mobile-first personal portfolio website built using:

- HTML5
- Tailwind CSS
- Vanilla JavaScript

The design follows a GitHub-inspired dark aesthetic with subtle gradients and clean section separation.

The portfolio highlights:

- Backend Engineering expertise
- Database knowledge
- Cloud & DevOps capabilities
- Data Science & Mathematics foundation
- Academic growth
- Professional projects

This project follows strict structural and architectural rules defined in:

- AI_CONTRACT.md
- REQUIREMENTS.md
- DONE_CRITERIA.md

---

# Folder Structure (Authoritative)

The following structure is FINAL and must not be modified by AI unless explicitly instructed.


/portfolio
│
├── css/
│ └── styles.css
│
├── img/
│ └── (all images, SVGs, and visual assets)
│
├── js/
│ └── scripts.js
│
├── index.html
├── tuned.html
├── AI_CONTRACT.md
├── REQUIREMENTS.md
├── DONE_CRITERIA.md
├── README.md
└── LICENSE


## Structure Rules

- No new root-level folders may be created.
- No existing folder may be renamed.
- No files may be moved.
- All JavaScript must remain inside `/js`.
- All styles must remain inside `/css`.
- All images and SVGs must remain inside `/img`.
- Experimental work must use `tuned.html` without altering structure.

This structure is mandatory.

---

# Design Philosophy

The portfolio must feel:

- Structured and intentional
- Backend-engineer aesthetic
- Technically mature
- Clean and modern
- Not template-based
- Dark theme dominant
- Subtle gradient accents
- Clear section separation

Each major section must have:

- Minimum `py-20` vertical spacing
- Visual distinction from adjacent sections
- Clean typography hierarchy
- Responsive behavior

---

# Section Architecture

The sections must appear in this order:

1. Navbar (Sticky, blur on scroll)
2. Hero (SVG background preserved)
3. Skills (Backend, DB, Cloud, Data Science, Math emphasis)
4. Projects (Horizontal scroll glide)
5. Testimonials (Auto-glide infinite animation)
6. Academic Journey (Timeline layout)
7. Footer (Includes contact form)

---

# Key Functional Features

## Navbar
- Sticky behavior
- Active section highlighting
- Mobile slide-in menu
- Smooth scroll navigation

## Hero
- SVG background
- Gradient accent headings
- Animated CTA buttons
- Social links

## Skills
Must highlight:
- Backend Engineering
- Databases
- Cloud & DevOps
- Data Science
- Mathematics

Must include:
- Resume download button

## Projects
- Horizontal scroll layout
- Scroll snapping enabled
- Desktop: 3 visible cards
- Tablet: 2 visible cards
- Mobile: 1–1.5 visible cards
- Smooth glide interaction

## Testimonials
- Infinite auto-moving marquee effect
- Smooth loop animation
- Pause on hover

## Academic Journey
- Vertical timeline
- Achievement highlights
- Growth progression
- Mobile-friendly stacking

## Footer
- Contact form with validation
- Social links
- Resume link
- Back-to-top button

---

# Responsiveness

Mobile-first implementation required.

Must support:
- 320px width
- Tablet
- Desktop
- Large screens

There must be:
- No horizontal overflow
- No layout breaks
- No overlapping sections

---

# Performance Principles

- Minimal JavaScript
- CSS-based animations preferred
- No blocking scripts
- No unnecessary libraries
- No console errors

---

# Future Improvements (Optional)

- Blog integration
- Backend-powered contact form
- Project filtering system
- Analytics integration
- Light/Dark toggle switch

---

# Completion Rules

The project is complete only when all conditions in DONE_CRITERIA.md are satisfied.