# Modern Portfolio Website

A dynamic, responsive portfolio website built with React and Vite, featuring smooth animations, interactive components, and a modern design aesthetic.

## 🌟 Features

- Dynamic time-based greetings
- Animated statistics with custom counter hooks
- Smooth scrolling navigation
- Responsive design with Tailwind CSS
- Interactive project carousel
- Animated gradient backgrounds
- Real-time form validation
- Google Maps integration

## 🚀 Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Intersection Observer
- Modern JavaScript (ES6+)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Navigate to the project directory
```bash
cd portfolio-website
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   └── Services.jsx
├── hooks/
│   └── useCounterAnimation.js
├── App.jsx
└── main.jsx
```

## 🎨 Key Components

### Hero Section
- Dynamic greeting based on time of day
- Animated statistics
- Responsive layout with profile image

### Projects Section
- Interactive project carousel
- Filterable project categories
- Project details modal

### Contact Form
- Real-time form validation
- Google Maps integration
- Animated submit button

## 🔧 Configuration

### Tailwind Configuration
The project uses a custom Tailwind configuration with extended themes and animations. Key customizations include:

- Custom color palette
- Custom animations
- Gradient configurations

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse-slow': 'spin-reverse 8s linear infinite',
        'gradient-shift': 'gradient 8s ease infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: {
            transform: 'rotate(360deg)',
          },
          to: {
            transform: 'rotate(0deg)',
          },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
}
```

## 📱 Responsive Design

The website is fully responsive across all devices:
- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from Heroicons
- Animations powered by Tailwind CSS

## 📧 Contact

Venuja Prasannith - [@venuja-v11](www.linkedin.com/in/venuja-v11) - venujagamage2002@gmail.com

Project Link: [https://github.com/VenujaVP/Modern-React-Portfolio-Website.git](https://github.com/VenujaVP/Modern-React-Portfolio-Website.git)
