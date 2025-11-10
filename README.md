# ✨ If I'm Bored

Small React app that helps you find ideas for leisure activities.  
Fetches random activity suggestions from the [Bored API](https://apis.scrimba.com/bored/) 
and lets you customize them with flexible filters.

App demo: [katerinashepeleva.github.io/im-bored](https://katerinashepeleva.github.io/im-bored/)

---

### 📝 Features

- Responsive design optimized for both mobile and tablet / desktop layouts;
- Integration with [Bored API](https://apis.scrimba.com/bored/) to fetch random activity ideas;
- Flexible filtering system that combines multiple filters (type, group size, and challenge level) to discover new ideas. Activities update instantly after each filter change - no manual confirmation needed (built with MobX `reaction`);
- Dynamic UI feedback with loading and error states for a smoother experience;
- Custom Material UI theme featuring a personalized color palette and refined styling;
- Fully type-safe codebase for better reliability.

---

### ⚙️ Project stack

- Frontend: React v19.1 + TypeScript v5.9
- State management: MobX v6.15
- UI framework: Material UI v7.3
- Build tool: Vite v7.1
- API requests: Axios v1.13
- Styling: CSS + MUI theme customization

---

### 🖼️ Screenshot

How it looks on desktop: 

!["I'm Bored" App](/public/screenshot.png?raw=true)
