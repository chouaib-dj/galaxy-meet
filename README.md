# 🌌 Galaxy Meet

## 📋 Overview 

Galaxy Meet 🌌 is a feature-rich web application that facilitates seamless online meetings with robust controls and functionalities. It provides a platform for users to host 🎤 and join meetings 🤝, manage meeting settings ⚙️, access past 📅 and upcoming meetings 📆, and more.

## 🌟 Features

- **Authentication:** Implements authentication and authorization features.
- **Meeting Management:** Easily create, schedule, and join meetings.
- **Participant Control:** Full control over meetings, including recording, reactions, and muting.
- **Meeting History:** Access past meetings and recordings.
- **Personal Room:** Instant meeting space with a unique link.
- **Responsive Design:** Fully responsive, ensuring functionality on all devices.
- **Enhanced User Experience:** Provides a seamless and intuitive interface, focusing on usability.

## 🛠️ Tech Stack

- **Next.js:** A React framework for enhanced server-side rendering and static site generation.
- **Supabase:** A scalable backend platform providing database and authentication solutions.
- **TypeScript:** A statically typed superset of JavaScript for improved developer productivity and code quality.
- **GetStream:** A scalable API for building activity feeds and chat.
- **Shadcn/ui:** Modern React UI components designed for sleek user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for creating custom designs quickly and efficiently.

## 🚀 Quick Start

To get Galaxy Meet running locally on your machine, follow these steps:

1. **Clone the repository:** Use the `git clone` command followed by the repository URL. After cloning, navigate into the project directory using the `cd` command.

   ```bash
   git clone https://github.com/chouaib-dj/galaxy-meet.git
   cd galaxy-meet
   ```

2. **Install the dependencies:** Run the `pnpm install` command to install all required dependencies.

   ```bash
   pnpm install
   ```

3. **Set up your environment variables:** Create a `.env` file in the root directory and paste the following content:

   ```plaintext
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   NEXT_PUBLIC_STREAM_API_KEY=your-stream-api-key
   STREAM_SECRET_KEY=your-stream-secret-key
   ```

4. **Run the database SQL script:** In Supabase's SQL editor, paste the contents of `database.sql` and execute the queries to create the database schema.

5. **Update email templates in Supabase:** In the Supabase dashboard, navigate to the "Authentication" section, then go to "Email Templates". Update the templates for the "Confirm Signup" and "Reset Password" emails.

6. **Run the development server:** Use the `pnpm dev` command to start the development server. Once running, you can access the application by visiting `http://localhost:3000` in your web browser.

   ```bash
   pnpm dev
   ```

Following these steps should get Galaxy Meet up and running locally on your machine using pnpm.

## 📑 License

Galaxy Meet is open-sourced under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 📫 Contact

If you have any questions or need further assistance with Galaxy Meet, please don't hesitate to reach out via email: [djaidri.chouaib.24@gmail.com](mailto:djaidri.chouaib.24@gmail.com).
