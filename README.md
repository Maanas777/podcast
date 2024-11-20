# 🎙️ Spoticast

## 🌟 Overview
**Spoticast** is a cutting-edge SaaS platform that empowers users to create and publish podcasts with ease. Whether it's transforming text into high-quality audio or generating eye-catching thumbnails, Spoticast combines **Text-to-Speech (TTS)** and **Text-to-Image (TTI)** functionalities to redefine podcast creation.

### 🚨 Important Notes:
- **Audio Generation**: Now powered by **Voiceress** due to OpenAI subscription expiration.
- **Image Generation**: Temporarily disabled due to charges, but functionality can be re-enabled with OpenAI API keys (code is commented for reference).

---

## ✨ Features
- 🎧 **Create & Publish Podcasts**: Transform text into engaging audio podcasts and customize thumbnails (temporarily disabled).
- 🔍 **Discover & Listen**: Explore trending and community-created podcasts.
- 👤 **User Profile Page**: Display user details and their created podcasts.
- 🔗 **Seamless Integrations**: Convex, Clerk, and Voiceress for a robust and dynamic experience.

---

## 🛠️ Technologies Used
| **Category**     | **Technologies**                                           |
|-------------------|-----------------------------------------------------------|
| **Frontend**      | React.js, Next.js, Tailwind CSS, ShadCN UI                |
| **Backend**       | Node.js, Express.js, Convex, Clerk, Voiceress             |
| **Database**      | Convex (used for backend data storage)                    |
| **Integrations**  | Voiceress API (Text-to-Speech), DeepAI, Clerk (authentication) |

---

## ⚙️ Prerequisites
Ensure you have the following installed:
1. **Node.js** (v16 or above recommended).
2. **Yarn** (optional but recommended for package management).

---

## 🚀 Installation & Configuration

### Step 1: Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/Maanas777/podcast
cd Podcast
## Installation & Configuration

### Step 1: Clone the repository
Clone the repository to your local machine:

```bash
git clonehttps://github.com/Maanas777/podcast
cd Podcast
```

### Step 2: Install dependencies

``` bash
npm install
# or
yarn install
```

### Step 3: Set up the environment variables
Create a .env file in the root directory and add the following environment variables:

``` bash
# Convex configuration
CONVEX_DEPLOYMENT
NEXT_PUBLIC_CONVEX_URL

# Clerk configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
CLERK_WEBHOOK_SECRET

NEXT_PUBLIC_CLERK_SIGN_IN_URL='/sign-in'
NEXT_PUBLIC_CLERK_SIGN_UP_URL='/sign-up'

# Voiceress API Key (for text-to-speech)
VOICERSS_API_KEY

# DeepAI API Key (for text-to-image - optional if you re-enable image generation)
DEEPAI_API_KEY
```
## 🎥 References
- **Convex** and **Clerk Setup** : [Watch the Video Guide](https://youtu.be/gR9ghXOyIQ4?si=BWVhqFH6mkR1JCNv)

---

## 🌐 Live Application
Check out the live version of the app here:  
👉 [Live Application Link](https://podcast-gules.vercel.app/)

---

## 📌 Notes
- The code for **Text-to-Image thumbnail generation** using OpenAI has been commented out. You can refer to it for re-enabling the feature once the necessary API keys are available.
- **Voiceress** is now used for audio generation, replacing OpenAI's TTS service.
