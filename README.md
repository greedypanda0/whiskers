# Whiskers

Whiskers is a full-featured book and blog writing application. Built with Next.js, Node.js, Tailwind CSS, and MongoDB, it provides a simple, beautiful, and easy-to-host platform for anyone who wants to write and share books or blogs. With built-in authentication (Auth.js, Google, and GitHub), Whiskers is perfect for writers seeking a ready-made book app or those who want to self-host their writing platform.

## Features

- 📚 Write and organize books or blogs with ease
- 🌐 Built with Next.js for fast, modern web experience
- 🎨 Styled using Tailwind CSS
- 🔐 Secure authentication with Auth.js, supporting Google and GitHub login
- 💾 MongoDB integration for robust data storage
- ✍️ Share your writing easily, or keep it private
- 🚀 Easily self-hosted

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/greedypanda0/whiskers.git
   cd whiskers
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory with the following variables:

   ```
   MONGODB_URI=your_mongo_connection_string
   NEXTAUTH_URL=your_deployed_app_url
   NEXTAUTH_SECRET=your_next_auth_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   ```

4. **Run the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The app will be available at [http://localhost:3000](blog, organize chapters or posts, and publish or share as you like.)
- Easily deploy and host your own instance for personal or community use.

## Who is it for?

- Writers looking for a clean, ready-to-use book or blog platform
- Anyone wanting to self-host a writing app
- Developers seeking a customizable book/blog template

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Node.js, MongoDB
- **Auth:** Auth.js, Google & GitHub OAuth

## License

This project is licensed under the [MIT License](./LICENSE).

## Contribution 
- **Open to any type of Contribution**
