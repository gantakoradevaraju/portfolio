# DevOps Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a beautiful dark/light theme, smooth animations, and a clean design.

## 🌟 Features

- 🎨 **Dynamic Theme Switching** - Elegant dark/light mode with smooth transitions
- 🎭 **Stunning Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Perfect on all devices
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal speed
- 🎯 **Modern Design** - Clean and professional UI/UX
- 📝 **Contact Form** - Interactive contact section
- 🔍 **SEO Optimized** - Best practices for search engines

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/devops-portfolio.git
   cd devops-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Animation library
- **Icons**: [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons

## 📁 Project Structure

```
my-project/
├── src/
│   ├── app/              # App router pages
│   ├── components/       # React components
│   ├── context/         # Context providers
│   └── styles/          # Global styles
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
└── package.json         # Project dependencies
```

## 🎨 Customization

### Changing Content

1. **Personal Information**: Edit the content in respective component files:
   - `src/components/AboutSection.tsx`
   - `src/components/ExperienceSection.tsx`
   - `src/components/EducationSection.tsx`
   - `src/components/ToolsSection.tsx`
   - `src/components/ContactSection.tsx`

2. **Theme Colors**: Modify colors in:
   - `tailwind.config.ts`
   - `src/app/globals.css`

3. **Images**: Replace images in the `public` directory

### Styling

- The project uses Tailwind CSS for styling
- Global styles are in `src/app/globals.css`
- Theme configuration is in `tailwind.config.ts`

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will detect Next.js and configure the build automatically
4. Your site will be live with a URL!

### Other Deployment Options

You can also deploy to:
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)

## 📝 Development Notes

### Environment Variables

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

### Adding New Features

1. Create new components in `src/components`
2. Add new pages in `src/app`
3. Update navigation in `src/components/Navbar.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 📧 Contact

For any questions or feedback, please reach out:
- Your Name - Deva Raju G
- Email - gantakoradevaraju@gmail.com

---
Made with ❤️ by DEVA RAJU
