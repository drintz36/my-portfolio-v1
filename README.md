# 🌟 Dy Sorint - Personal Portfolio

A beautiful, modern, and fully responsive personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. 

This portfolio showcases the skills, projects, and experiences of **Dy Sorint**.

---

## ✨ Features

- **📱 Fully Responsive**: Looks great on all screen sizes, from mobile phones to large desktop screens.
- **👤 Interactive Sidebar**: Displays key profile details (name, title, location, email) and active social links (Facebook, LinkedIn, Instagram, GitHub).
- **📝 About Me**: A brief introduction to my journey, frontend skills, and passion for web development.
- **💼 Resume & Tech Stacks**: Shows educational background, active technical skills with visual meters, and details of my developer stack.
- **🚀 Projects Grid**: A neat, grid-based list of web design and development projects with hover effects and links.
- **✉️ Contact Form & Map**: A clean message submission form integrated with an interactive dark-themed Google Map of Phnom Penh.

---

## 🛠️ Tech Stack

This project is built using:
- **[React](https://react.dev/) (v19)** - For building the interactive user interface.
- **[Vite](https://vite.dev/)** - For super-fast project building and a smooth development experience.
- **[Tailwind CSS](https://tailwindcss.com/) (v4)** - For modern, clean, and custom styles.
- **[FontAwesome](https://fontawesome.com/)** - For beautiful, clean vector icons.

---

## 🚀 Getting Started

Follow these simple steps to run the project on your computer.

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### 2. Install Dependencies
Open your terminal in the project directory and run this command:
```bash
npm install
```

### 3. Start the Development Server
To run the website locally and see your changes live, use:
```bash
npm run dev
```
This will start a local server (usually at `http://localhost:5173`). Click or open that link in your browser to view the site!

### 4. Build for Production
To create an optimized, production-ready version of the website, run:
```bash
npm run build
```
The built files will be saved in the `dist/` folder, ready to be hosted on Netlify, Vercel, or GitHub Pages.

---

## 📁 Project Structure

Here is a quick look at the main folders and files:

```text
portfolio-v1/
├── public/              # Static files (like icons and favicon)
├── src/
│   ├── assets/          # Images (profile picture, background, etc.)
│   ├── components/      # Reusable UI sections
│   │   ├── about/       # About Me section
│   │   ├── contact/     # Contact form & Map section
│   │   ├── navbar/      # Navigation links
│   │   ├── projects/    # Projects grid
│   │   ├── resume/      # Tech stacks, timeline, and skills
│   │   └── sidebar/     # Profile summary and social links
│   ├── App.jsx          # Main layout coordinator
│   ├── index.css        # Tailwind styles & global styling
│   └── main.jsx         # App entry point
├── package.json         # Project setup, scripts, and dependencies
└── vite.config.js       # Vite configuration file
```

---

## ✍️ How to Personalize This Portfolio

You can easily edit this project to show your own information:

1. **Change Profile Picture**: Put your picture in `src/assets/` and name it `profile.jpg` (or update the import inside `src/components/sidebar/sidebar.jsx`).
2. **Update Contact Info**: Edit the social links, email, and name inside `src/components/sidebar/sidebar.jsx`.
3. **Change About Text**: Rewrite your story inside `src/components/about/about.jsx`.
4. **Update Tech Stacks & Skills**: Modify the SVG icons and skill percentages inside `src/components/resume/resume.jsx`.
5. **Add Your Projects**: Update the `projects` list array in `src/components/projects/projects.jsx` with your own project names and links.

---

## 📬 Contact Dy Sorint

Feel free to reach out if you have any questions or want to collaborate!

- 📧 **Email**: [sorint1123@gmail.com](mailto:sorint1123@gmail.com)
- 📍 **Location**: Phnom Penh, Cambodia
- 🌐 **Socials**:
  - [GitHub](https://github.com/dsorintz36)
  - [LinkedIn](https://www.linkedin.com/feed/)
  - [Facebook](https://www.facebook.com/dyyysorintzzz/)
  - [Instagram](https://www.instagram.com/_rintinttz_/)
