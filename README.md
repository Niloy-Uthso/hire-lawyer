# 🧑‍⚖️ Lawyer Appointment Booking Application

[Live Site 🌐](https://resplendent-liger-5baaa9.netlify.app/)

A fully responsive Lawyer Appointment Booking Web Application built with **React.js**. Users can browse lawyer profiles, view their details, book appointments, and visualize appointment data. This application showcases routing, state management, local storage persistence, dynamic pages, charts, and animations.

---

## 🚀 Features

### ✅ Main Pages & Components

- **🔝 Navbar** – Visible on all pages including error routes, includes:
  - Logo & Site Name
  - 4 Navigation Menu Items (Home, Lawyers, Blogs, Bookings)
  - Button (as per design)

- **⬇️ Footer** – Present on all pages except the 404 Error Page:
  - Center-aligned logo
  - Navigation links
  - Social media icons linking to developer profiles

### 🏠 Homepage

- **📢 Banner Section**
  - Center-aligned heading and description
  - Background image (from Figma reference)

- **⚖️ Lawyers Section**
  - Grid of 6 lawyers (3x2 or 2x3 layout)
  - Show All Button → displays 12 lawyers
  - Each Lawyer Card includes:
    - Image
    - Name
    - Speciality
    - Experience
    - License Number
    - View Details Button

- **🏆 Success Stats Section**
  - 4 animated cards with icons, titles, and animated numbers using `react-countup`

### 👨‍⚖️ Lawyer Details Page

- Detailed Lawyer Profile section with:
  - Image, Name, Experience, Fee, Speciality, Availability
- **Appointment Card** with:
  - “Book Now” button
  - Booking badge

### 🧾 Booking Logic

- Prevents duplicate bookings
- Shows success or error toast on booking
- Bookings persist using **localStorage**
- Cancel appointment button removes booking and updates chart

### 📅 Bookings Page

- Lists all booked appointments
- Each card shows:
  - Name, Fee, Speciality
  - Cancel Button
- If no bookings, displays:
  - Message
  - Button to return to Home

### 📊 Recharts Integration

- Visual representation of total appointment fees
- Dynamically updates chart on cancelation
- Hidden when no bookings are available

### 📚 Blogs Page

Creative blog articles answering:

- What is `useState` and how does it work in React?
- What is the purpose of `useEffect`?
- What is a custom hook in React and when should you use one?
- Difference between controlled and uncontrolled components
- What is `useFormStatus()` in React?

### ❌ 404 Error Page

- Custom-designed error page with a redirect button to Homepage
- Displays Navbar only (no footer)

### ⏳ Loading & Route Handling

- Shows a loading spinner on every route change
- Graceful fallback loader during data fetch
- Invalid lawyer detail route displays appropriate error

---

## 🛠️ Tech Stack

- **React.js**
- **React Router**
- **Tailwind CSS**
- **DaisyUI**
- **React CountUp**
- **Recharts**
- **LocalStorage** for data persistence
- **Toast Notifications** for feedback

---

 
