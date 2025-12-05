# Tripzy - A modern Travel & Tour Platform 🌍

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/) 
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/) 
[![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js)](https://nodejs.org/) 
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green?logo=mongodb)](https://www.mongodb.com/) 
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-blue?logo=tailwind-css)](https://tailwindcss.com/) 
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

> **Plan, Explore, and Book Trusted Local Guides – All in One Place**  

Tripzy is a modern Travel & Tour Platform that allows travelers to **plan custom trips, explore destinations, and book professional local guides** seamlessly. The platform combines a **trip planner**, a **curated guide marketplace**, and a **comprehensive booking system** to provide a smooth end-to-end travel experience.

---

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Database Structure](#database-structure)
- [Getting Started](#getting-started)
- [UI Preview](#ui-preview)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Project Description

Modern travelers often face **fragmented tools** for planning trips and booking local guides. Tripzy solves this by providing:

- **Integrated Trip Planner** – Auto-suggested itineraries with customizations.  
- **Guide Marketplace** – Verified profiles, ratings, and reviews.  
- **Booking System** – Schedule trips with secure payments.  
- **Dashboards** – Separate dashboards for tourists, guides, and admins.  
- **Mobile & Future-Ready** – Ready for AI-based enhancements and mobile app integration.  

Tripzy’s goal is to **simplify travel planning**, **build trust**, and **empower guides** with professional tools.

---

## Features

### Tourist
- Create and customize trips.  
- Search and filter guides.  
- Book tours and view booking status.  
- Save and share trips.  
- Write reviews for guides.  

### Guide
- Manage profile, packages, and schedule.  
- Accept or decline bookings.  
- View upcoming trips.  

### Admin
- Approve or reject guides.  
- Manage users and bookings.  
- Oversee platform content.  

### Core Features
- Auto trip suggestions  
- Google Maps integration  
- Budget calculator  
- Review & rating system  
- Stripe payment integration  
- Dark & light mode support  

---

## Tech Stack

### Frontend
- **Next.js 16** (App Router)  
- **React 18**  
- **Tailwind CSS** (Responsive + Dark Mode)  
- **Google Maps API**  
- **Cloudinary** (Media management)  

### Backend
- **Node.js + Express**  
- **MongoDB + Mongoose**  
- **JWT Authentication / Role-Based Access**  
- **Stripe** (Payment)  
- **Optional AI Module** (Future upgrade)  

### Tools & Libraries
- Axios / Fetch API  
- React Hook Form / Zod (Validation)  
- React Icons / Heroicons  
- SweetAlert2 (Modals & Notifications)  

---

## Project Structure

### Frontend (`/client`)
```

/app
├── home
├── trips
├── guides
├── dashboards (tourist/guide/admin)
└── auth
/components
/hooks
/services
/styles
/public

```

### Backend (`/server`)
```

/src
├── controllers
├── models
├── routes
├── services
├── middleware
├── config
└── validations

```

---

## Database Structure

- **Users** (tourist, guide, admin)  
- **Guides**  
- **Trips**  
- **Bookings**  
- **Reviews**  

**ER Diagram (simplified)**

```

[User] 1----* [Trip]
|
*----* [Booking] *----1 [Guide]
|
*----* [Review] ----1 [Guide]

````

---

## Getting Started

### Prerequisites
- Node.js ≥18  
- MongoDB Atlas / Local  
- Stripe account (for payments)  
- Cloudinary account (optional for media)  

### Backend Setup
```bash
cd server
npm install
cp .env.example .env
npm run dev
````

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Visit `http://localhost:3000` to see the frontend.

---

## UI Preview

*(coming soon)*

---

## Future Enhancements

* AI-powered trip planner & guide recommendation
* Mobile App (React Native)
* Push notifications / real-time chat with guides
* Premium subscription for advanced features

---

## License

This project is open source and available under the **MIT License**.

```

