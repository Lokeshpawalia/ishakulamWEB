

Remove the "Send us a Message" contact form (the right 3-column section) from `src/components/sections/Contact.tsx`, keeping only the contact info and map on the left. The section layout will be simplified to a single centered column instead of the current 5-column grid.

**Changes:**
- **`src/components/sections/Contact.tsx`**: Remove the `lg:grid-cols-5` grid, the `lg:col-span-2` wrapper, and the entire `lg:col-span-3` contact form block. Remove unused imports (`Send`, `Loader2`, `Button`, `useState`, `useToast`). Center the remaining contact info + map in a max-width container.

