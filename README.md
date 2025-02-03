# Medical Image Analysis

A sophisticated SaaS application for medical image analysis, designed specifically for lab technicians in the healthcare sector. This application provides powerful tools for medical image manipulation, annotation, and measurement.

## Features

### Core Features
- Image Upload and Management
  - Support for PNG and DICOM formats
  - Secure file handling
  - Image preview

### Image Manipulation Tools
- Basic Operations
  - Zoom in/out
  - Pan
  - Window/Level adjustments

## Technology Stack

- **Frontend Framework**: React.js
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Image Manipulation**: KonvaJS
- **DICOM Handling**: Cornerstone.js
- **Type Safety**: TypeScript
- **UI Components**: Shadcn/ui

##  Prerequisites

- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)
- Git

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/DixithC/medical-image-analyzer.git
cd medical-image-analysis-saas
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
medical-image-analyzer/
  ├── src/
  │   ├── components/
  │   │   ├── Dashboard.jsx
  │   │   ├── ImageWorkspace.jsx
  │   │   └── Navbar.jsx
  │   ├── contexts/
  │   │   └── ThemeContext.jsx
  │   ├── App.jsx
  │   ├── index.js
  │   └── index.css
  ├── tailwind.config.js
  └── package.json
```

##  Key Implementation Details

### Image Processing
- Implemented custom image processing pipeline using WebGL shaders for optimal performance
- Used KonvaJS for interactive canvas manipulation
- Integrated Cornerstone.js for DICOM image handling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Roadmap

- [ ] Add support for more image formats
- [ ] Implement AI-assisted annotation
- [ ] Add collaborative features
- [ ] Integrate with PACS systems
- [ ] Add reporting and analytics features
