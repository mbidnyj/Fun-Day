# FunDay 🌞

A delightful web application that delivers daily jokes and humor to brighten your mornings through personalized email subscriptions.

---

## Features
- **Personalized joke topics selection**  
- **Multi-language support**  
- **Customizable delivery time**  
- **Text-to-Speech audio generation**  
- **Interactive-particle.js background**  
- **Responsive design**

---

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript (with GSAP animations)  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **APIs:**  
  - OpenAI GPT for joke generation  
  - 11Labs for Text-to-Speech  
  - SendGrid for email delivery  

---

## Getting Started

1. **Clone the repository**

2. **Install dependencies:**
   ```bash
   cd app
   npm install
   ```

3. **Create a `.env` file in the `/app` directory** with the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   OPENAI_API_KEY=your_openai_api_key
   ELEVEN_LABS_API_KEY=your_11labs_api_key
   ELEVEN_LABS_VOICE_ID=your_voice_id
   SENDGRID_API_KEY=your_sendgrid_api_key
   FROM_EMAIL=your_verified_sender_email
   PORT=3000
   ```

4. **Start the server:**
   ```bash
   node server.js
   ```

5. **Visit [http://localhost:3000](http://localhost:3000) in your browser**

---

## How It Works

1. Users select their preferred joke topics and delivery time.  
2. A cron job runs hourly to check for scheduled deliveries.  
3. For each scheduled delivery:
   - Generates personalized jokes using OpenAI  
   - Converts text to speech using 11Labs  
   - Sends email with audio attachment via SendGrid  

---

## Project Structure

- **/www** – Static frontend files  
- **/app/src**  
  - **/config** – Environment and database configuration  
  - **/controllers** – Request handlers  
  - **/models** – MongoDB schemas  
  - **/routes** – API routes  
  - **/services** – External API integrations  
  - **/jobs** – Scheduled tasks  

---

## Contributing

Feel free to submit issues and pull requests.
