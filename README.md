# CODEWITHMHAN Personal Developer Portfolio

A personal portfolio website for Steve Nyarko, built with HTML5, CSS3 and Vanilla JavaScript.

## Built with
- HTML5
- CSS3
- Vanilla JavaScript

## How to run

### Option 1: Open directly
- Open `index.html` in a browser.

### Option 2: Use VS Code Live Server
- Open the project in VS Code.
- Install the Live Server extension.
- Right-click `index.html` and choose "Open with Live Server".

### Option 3: Local Python server
```bash
cd "h:\PERSONAL PROJECTS\codewithmhan site\codewithmhan"
python -m http.server 8000
```
Then open:
```text
http://localhost:8000
```

## Project structure
```text
codewithmhan/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── favicon.svg
│   ├── images/
│   │   ├── profile/
│   │   └── projects/
│   └── documents/
```

## Customization checklist

Update these items before publishing:

1. Profile photo
   - Replace `assets/images/profile/stephen.png`
2. About photo
   - Replace `assets/images/profile/stephen pro.jpg`
3. Project images
   - Replace all files in `assets/images/projects/`
4. Project descriptions
   - Update the project details in `js/script.js`
5. GitHub URL
   - Update GitHub links in `index.html`
6. LinkedIn URL
   - Update LinkedIn links in `index.html`
7. Email
   - Update `mailto:` links in `index.html`
8. WhatsApp number
   - Update `https://wa.me/YOURNUMBER` in `index.html`
9. Project links
   - Replace placeholder project URLs in `index.html` and `js/script.js`
10. Favicon
   - Replace `assets/favicon.svg`
11. Social preview image
   - Replace the `og:image` and `twitter:image` metadata in `index.html`

## Deployment

### GitHub Pages
1. Push the project to a GitHub repository.
2. Go to the repository settings.
3. Open the Pages section.
4. Select the main branch and root folder.
5. Save and wait for deployment.

### Vercel
1. Import the project into Vercel.
2. Keep the project root as the repository root.
3. Use the default configuration for static hosting.
4. Deploy.

## Notes for learning and growth

This project is intentionally simple, readable and beginner-friendly.

You can continue building it by adding:
- a backend with Node.js or Python
- a database for projects and blog posts
- authentication for admin features
- a CMS for content updates
- a blog section
- contact form processing

When moving from frontend to backend, the next step is usually to separate concerns:
- frontend handles layout, design and interaction
- backend handles business logic, forms, authentication and stored data
- database stores dynamic content
- API routes connect the frontend to the backend

A good next project progression is:
1. Keep the portfolio frontend as-is
2. Add a simple backend for a contact API
3. Add a blog or project content manager
4. Move repeated content into a database
5. Add admin tools for editing without changing the code directly

This keeps your learning path clear and practical.
