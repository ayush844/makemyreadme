const DocumentationTemplate = `

# 📚 [Project Name] Documentation  
 
Welcome to the official documentation for **[Project Name]**, a cutting-edge solution designed to [brief project description]. This guide contains everything you need to get started, integrate, customize, and manage [Project Name] efficiently.  
 
---
 
## 🗂️ Table of Contents  
 
1. [Introduction](#introduction)  
2. [System Requirements](#system-requirements)  
3. [Installation Guide](#installation-guide)  
    - [Quick Start](#quick-start)  
    - [Advanced Setup](#advanced-setup)  
4. [Configuration](#configuration)  
5. [Features Overview](#features-overview)  
    - [Core Features](#core-features)  
    - [Optional Modules](#optional-modules)  
6. [API Documentation](#api-documentation)  
    - [Authentication](#authentication)  
    - [Endpoints](#endpoints)  
    - [Error Codes](#error-codes)  
7. [Integration Guides](#integration-guides)  
8. [Best Practices](#best-practices)  
9. [Troubleshooting](#troubleshooting)  
10. [Contributing](#contributing)  
11. [Versioning](#versioning)  
12. [FAQs](#faqs)  
13. [Roadmap](#roadmap)  
14. [License](#license)  
15. [Contact Information](#contact-information)  
 
---
 
## 📖 Introduction  
 
[Project Name] is a powerful, scalable, and customizable solution for [specific use case]. Built with performance and security in mind, its designed to handle [specific tasks] effortlessly.  
 
---
 
## 🖥️ System Requirements  
 
Before installing, ensure your system meets the following minimum requirements:  
 
- **Operating System**: Windows 10+, macOS 11+, Linux (Ubuntu 20.04 or higher).  
- **Processor**: 64-bit processor, 2 GHz or faster.  
- **Memory**: 8GB RAM (16GB recommended).  
- **Storage**: 20GB available space.  
- **Dependencies**: Node.js v16+, Python 3.9+, Docker v20+.  
 
For full compatibility details, refer to [Compatibility Matrix](./docs/compatibility.md).  
 
---
 
## 🚀 Installation Guide  
 
### Quick Start  
 
Follow these steps for a basic installation:  
 
1. Clone the repository:  
   \`\`\`bash  
   git clone https://github.com/your-org/your-repo.git  
   \`\`\`  
 
2. Navigate to the directory:  
   \`\`\`bash  
   cd your-repo  
   \`\`\`  
 
3. Install dependencies:  
   \`\`\`bash  
   npm install  
   \`\`\`  
 
4. Start the server:  
   \`\`\`bash  
   npm start  
   \`\`\`  
 
For a complete setup guide, refer to the [Advanced Setup](./docs/installation.md) document.  
 
---
 
## ⚙️ Configuration  
 
Configuration files are located in the \`/config\` directory. The main file is \`config.json\`, where you can set the following:  
 
- **Database Settings**: Connection strings for PostgreSQL, MongoDB, etc.  
- **API Keys**: Configure third-party integrations.  
- **Environment Variables**: Set up dev, test, and production environments.  
 
Example:  
\`\`\`json  
{  
  "database": {  
    "host": "localhost",  
    "port": 5432,  
    "user": "admin",  
    "password": "password",  
    "name": "project_db"  
  }  
}  
\`\`\`  
 
---
 
## 🌟 Features Overview  
 
### Core Features  
 
1. **User Management**: Role-based access control, user authentication.  
2. **Analytics Dashboard**: Visualize key metrics in real-time.  
3. **Scalability**: Supports thousands of concurrent users.  
4. **Customizable Workflows**: Tailor workflows to meet business needs.  
 
### Optional Modules  
 
- **AI Integration**: Leverage machine learning for predictive analytics.  
- **Multi-Language Support**: Localization for 15+ languages.  
- **E-commerce Integration**: Seamlessly connect with online stores.  
 
---
 
## 📡 API Documentation  
 
### Authentication  
 
Use OAuth 2.0 for secure access. Obtain an API key by signing up at [API Portal](https://api.yourdomain.com).  
 
Example Request:  
\`\`\`http  
POST /auth/token  
Content-Type: application/json  
Authorization: Bearer <your_api_key>  
\`\`\`  
 
### Endpoints  
 
| Endpoint       | Method | Description                   |  
|----------------|--------|-------------------------------|  
| /users         | GET    | Retrieve all users.           |  
| /users/{id}    | GET    | Retrieve a specific user.     |  
| /users         | POST   | Create a new user.            |  
| /users/{id}    | DELETE | Delete a user.                |  
 
For the full API reference, visit [API Docs](./docs/api.md).  
 
---
 
## 🛠️ Best Practices  
 
- **Code Structure**: Use modular design principles.  
- **Error Handling**: Implement robust logging and error recovery.  
- **Testing**: Unit tests using Jest or Mocha.  
 
---
 
## 🧩 Integration Guides  
 
- **Slack Integration**: Send notifications directly to Slack channels.  
- **AWS S3 Integration**: Store files securely in the cloud.  
- **Custom Integrations**: Build and extend with our SDK.  
 
---
 
## 🧪 Troubleshooting  
 
### Common Issues  
 
- **Server not starting**: Check \`logs/server.log\` for errors.  
- **Database connection failed**: Verify database credentials in \`config.json\`.  
 
For more, see [Troubleshooting Guide](./docs/troubleshooting.md).  
 
---
 
## 🤝 Contributing  
 
We welcome contributions! Please read our [Contribution Guidelines](./CONTRIBUTING.md) to get started.  
 
---
 
## 📅 Versioning  
 
We use [Semantic Versioning](https://semver.org/) for version control:  
 
- **Major**: Breaking changes.  
- **Minor**: New features.  
- **Patch**: Bug fixes.  
 
---
 
## ❓ FAQs  
 
### How do I reset my admin password?  
Use the command:  
\`\`\`bash  
npm run reset-password  
\`\`\`  
 
### Can I deploy on Kubernetes?  
Yes, see the [Kubernetes Guide](./docs/kubernetes.md).  
 
---
 
## 🗺️ Roadmap  
 
1. **Q1 2025**: Support for GraphQL APIs.  
2. **Q3 2025**: Enhanced analytics with AI.  
3. **Q4 2025**: Mobile app integration.  
 
---
 
## 📄 License  
 
[Project Name] is licensed under the [MIT License](./LICENSE).  
 
---
 
## 📞 Contact Information  
 
For further assistance, reach out to:  
 
- **Email**: [support@yourcompany.com](mailto:support@yourcompany.com)  
- **Phone**: +1-800-DOC-HELP  
- **Website**: [yourcompany.com](https://yourcompany.com)  
 

`;

export default DocumentationTemplate;
