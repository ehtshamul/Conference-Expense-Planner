# 🎯 ConferenceVenue Pro Planner

ConferenceVenue Pro Planner is a modern, intuitive, and fully responsive web application tailored for efficient conference and event management. Whether you're organizing a small team meeting or a grand seminar, this tool makes planning seamless—choose venues, add AV gear, and select catering services in one unified platform.

---

## 📚 Table of Contents

* [✨ Features](#-features)
* [🛠 Tech Stack](#-tech-stack)
* [🚀 Installation](#-installation)
* [📦 Usage](#-usage)
* [📁 Project Structure](#-project-structure)
* [🧾 Available Options](#-available-options)

  * [🏢 Rooms & Venues](#-rooms--venues)
  * [🎧 Audio-Visual Add-ons](#-audio-visual-add-ons)
  * [🍽 Catering Services](#-catering-services)
* [🤝 Contributing](#-contributing)
* [📄 License](#-license)

---

## ✨ Features

* 🏢 **Venue Selection:** Choose from a wide range of rooms—boardrooms to banquet halls.
* 🎧 **Audio-Visual Equipment:** Add professional-grade AV tools with ease.
* 🍽 **Catering Services:** Select curated meal and drink packages.
* 🛒 **Cart Management:** Add, remove, and adjust quantities in a persistent, responsive cart.
* 📱 **Responsive UI:** Optimized for mobile and desktop.
* 🧭 **Smooth Navigation:** Clean UX for a frustration-free planning experience.

---

## 🛠 Tech Stack

* **Frontend:** React, Redux Toolkit, React Router
* **Build Tool:** Vite
* **Styling:** Custom CSS (modern, responsive design)

---

## 🚀 Installation

```bash
# 1. Clone the repo
$ git clone <your-repo-url>
$ cd conference_event_planner

# 2. Install dependencies
$ npm install

# 3. Start the development server
$ npm run dev

# 4. Open in browser
Visit http://localhost:5173
```

---

## 📦 Usage

1. Begin on the landing page.
2. Navigate using the header: Room selection, Add-ons, or Catering.
3. Add items to the cart. Adjust quantities as needed.
4. View your complete order summary in the cart.
5. Enjoy a fully responsive and modern UI across all devices.

---

## 📁 Project Structure

```
conference_event_planner/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Icons, images
│   ├── components/          # Reusable React components
│   │   ├── Add-ons.jsx
│   │   ├── Meal.jsx
│   │   ├── Nav.jsx
│   │   ├── Landing.jsx
│   │   ├── ProductsSelection.jsx
│   │   ├── room_selection.json      # Room data
│   │   ├── equipment.json           # AV data
│   │   ├── catering_services.json   # Meal data
│   ├── store/              # Redux slices
│   ├── App.jsx             # Main component
│   ├── main.jsx            # App entry point
├── index.html              # HTML wrapper
├── package.json            # Scripts & dependencies
└── README.md
```

---

## 🧾 Available Options

### 🏢 Rooms & Venues

From intimate meetings to grand events:

* Executive Board Room (12 ppl)
* Training Room (30 ppl)
* Workshop Room (40 ppl)
* Seminar Room (60 ppl)
* Lecture Hall (100 ppl)
* Banquet Hall (250 ppl)
* Virtual Conference Room, Brainstorming Room, Hybrid Room, etc.

### 🎧 Audio-Visual Add-ons

Enhance presentations and engagement:

* LED Display Screen
* Wireless Presenter & Laser Pointer
* Portable Speakers & PA Systems
* Smart TV & Touchscreens
* Tripods, Video Cameras, LED Uplighting

### 🍽 Catering Services

Keep guests energized and satisfied:

* Breakfast, Lunch, High Tea, Dinner
* Buffet Options (Lunch & Dinner)
* Coffee, Tea, Water Bottles, Juices
* Appetizers, Desserts, Fruit Platters, Soups

---

## 🤝 Contributing

We welcome contributions!

1. **Fork** the repository
2. Create a **feature branch**:

   ```bash
   git checkout -b feature/your-feature
   ```
3. **Commit** your changes:

   ```bash
   git commit -m "Add your feature"
   ```
4. **Push** the branch:

   ```bash
   git push origin feature/your-feature
   ```
5. Submit a **Pull Request**

Ensure your code aligns with the project style and structure. ❤️

---

## 📄 License

MIT License. See [LICENSE](LICENSE) for more info.
