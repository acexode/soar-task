# Financial Dashboard Application

## Overview
This project is a **Financial Dashboard Application** designed to provide users with a detailed overview of their financial activities, card details, transactions, expense statistics, and user settings. The application is built using **React.js** with a fully responsive design and interactive data visualizations.

The application consists of two primary pages:
1. **Dashboard Page** - Displays financial data, recent transactions, charts, and quick transfer functionality.
2. **Settings Page** - Allows users to manage their profile, preferences, and security settings.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)
- [Assumptions](#assumptions)
- [Live Demo](#live-demo)

---

## Features

### **Dashboard Page**
1. **My Cards Section**
   - Displays card details (card balance, cardholder name, and partially masked card number).
   - "See All" button to navigate to a full list of cards.
2. **Recent Transactions**
   - Lists recent transactions with icons, descriptions, dates, and amounts (positive or negative).
3. **Weekly Activity Chart**
   - A bar chart to show daily deposits and withdrawals over the week.
4. **Expense Statistics**
   - A pie chart showing expense breakdown by categories (e.g., Entertainment, Bills, Investments).
5. **Quick Transfer**
   - Displays frequent contacts with profile pictures and names.
   - Provides input for transfer amount and a "Send" button for UI interactions.
6. **Balance History Chart**
   - A line chart showing the user's balance trend over past months.

### **Settings Page**
1. **Tabs**
   - Edit Profile, Preferences, and Security tabs for seamless navigation.
2. **Edit Profile Section**
   - Editable fields: Name, Username, Email, Password, Date of Birth, Address (Present and Permanent), City, Postal Code, and Country.
   - Profile picture upload functionality.
   - "Save" button to apply changes.
3. **Form Validations**
   - Standard validations for fields like email and password.

### **Additional Functionalities**
- **Responsive Design**: Fully adaptable across mobile, tablet, and desktop devices.
- **Interactive Elements**: Buttons and charts are dynamic with hover effects and smooth transitions.
- **Data Visualization**: Charts dynamically update based on user data.
- **Accessibility**: ARIA labels and keyboard navigation for better usability.
- **Browser Compatibility**: Tested on Chrome, Firefox, Safari, and Edge.

---

## Technology Stack
- **Frontend**: React.js, React Router
- **State Management**: Redux or Context API
- **Styling**: MUI /Styled Components
- **Charting Library**: React Apex Chart
- **Version Control**: Git
- **Deployment**: Vercel

---

## Setup Instructions

Follow the steps below to run the application locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/acexode/soar-task.git
   cd soar-task
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```
   The application will run locally on [http://localhost:3000](http://localhost:3000).

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Deployment**:
   Deploy to Vercel or any static hosting provider. 
   - For Vercel, run the following:
     ```bash
     vercel
     ```

---

## Folder Structure

```
financial-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/          # Reusable components (e.g., Cards, Transactions, Charts)
│   ├── pages/               # Dashboard and Settings pages
│   ├── routes/               # App routing
│   ├── sections/               # Page sections
│   ├── hooks/               # Custom Hooks
│   ├── themes/             # App theming
│   ├── app.tsx               # Main app component
│   ├── main.tsx             # React DOM render
│   └── styles/              #  CSS files
├── package.json
└── README.md
```

---

## Assumptions
- Charts are dynamic but use mocked data for visualization.
- Styling uses MUI by default;
- No backend logic for "Send" or "Save" buttons; only UI behavior is implemented.

---

## Live Demo
The application has been deployed to Vercel. You can access the live version using the link below:

**[Live Demo on Vercel](<VERCEL_DEPLOYMENT_LINK>)**

---

## Author
**Abubakar**  
Front-End Developer  
**Email**: abudawud92@gmail.com

For any queries or feedback, feel free to reach out!

---

## License
This project is open-source and available under the MIT License.
