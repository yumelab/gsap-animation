## Scroll based Animation Causing Overlap of Sections

### Problem
While designing sections where we had scrollTrigger based horizontally scrollable image cards, these images were causing the section to overlap.

### Fix
I set pinSpace to true and now everything is fixed but now the section height wasn’t wrapping the content height properly.

### Possible Fix
Solution 1: Call ScrollTrigger.refresh() 
Solution 2: set Image tag “priority”

#### Dependencies 
NextJS 14, tailwind@latest, next/image
