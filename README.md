# Sales Assistant

Revenue Advisory Sales Assistant - Call One Discovery

A comprehensive sales training and reference tool for revenue advisory professionals.

## Features

- **Sequential Call Script**: Step-by-step discovery framework
- **Objection Handler Library**: 130+ objection handling strategies
- **Interactive Navigation**: Two-sidebar layout with main track and objection library
- **Client-side Routing**: Direct URL access to any content
- **Mobile Responsive**: Works on all devices

## Development

### Prerequisites

- Node.js 18+
- npm or yarn
- Modern web browser

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Development workflow:**
   ```bash
   # Development server (with hot reload)
   npm run dev          # http://localhost:3000

   # Build for production
   npm run build

   # Preview production build locally
   npm run preview      # http://localhost:3000
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Build Process

Vite creates optimized files in the `build/` directory:

```bash
# Production build (minified)
npm run build

# Preview production build locally
npm run preview
```

## File Structure

```
sales_assistant/
├── index.html          # Main HTML file
├── styles.css          # Application styles
├── sales_script.js     # Application data and logic
├── vite.config.js      # Vite configuration
├── package.json        # npm scripts and dependencies
├── README.md           # This file
└── build/              # Generated build files (after npm run build)
    ├── index.html
    ├── styles.css
    ├── sales_script.js
    └── assets/
```

## Architecture

- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Build System**: Vite (modern, fast bundler)
- **Development Server**: Vite dev server (HMR, fast refresh)
- **Production Server**: Vite preview server
- **Routing**: Client-side routing with URL support

## Content Structure

### Sequential Flow (Left Sidebar)
- **Phase 1**: Opening Frame (Mile 0-5)
- **Phase 2**: Fork Deflection (Mile 5)
- **Phase 3**: Discovery (Mile 5-50)
- **Phase 4**: Tic-Tac-Toe (Mile 50-70)
- **Phase 5**: Close (Mile 70-100)

### Objection Library (Right Sidebar)
130+ categorized objection handlers across:
- Money & Budget
- Quality & Proof
- How & Mechanism
- Referrals & Connections
- Competition
- Timing & Process
- Internal Dynamics
- Process & Clarity
- Scope & Structure
- Contract & Legal
- Disqualification Signals
- Mid-Discovery Issues
- Tic-Tac-Toe Variations
- Integration/Close Issues
- Post-Scope Issues
- Edge Cases & Unexpected

## Usage

1. **Follow the Main Track**: Use the left sidebar to progress through the call sequentially
2. **Handle Objections**: When objections arise, reference the right sidebar library
3. **Search & Filter**: Use the search bar in the objection library to find specific handlers
4. **Bookmark Content**: All content has direct URLs for easy reference

## Deployment

The build system creates static files that can be deployed to any web server:

1. Run `npm run build`
2. Copy the `build/` directory contents to your web server
3. Configure your server to serve `index.html` for all routes (SPA routing)

## Contributing

1. Make changes to source files (`index.html`, `styles.css`, `sales_script.js`)
2. Test locally with `npm run dev`
3. Build production files with `npm run build`
4. Commit both source and build files

## License

MIT License - Revenue Advisory Team
