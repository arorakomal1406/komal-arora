# Email Form Setup Guide

To enable direct email sending from your contact form (without opening email client), you need to configure one of these services:

## Option 1: Formspree (Recommended - Easiest & Free)

### Steps:

1. **Sign Up**: Go to https://formspree.io and create a free account

2. **Create New Form**:
   - Click "New Form" in your dashboard
   - Give it a name (e.g., "Portfolio Contact Form")

3. **Configure Email Settings**:
   - Set "Send submissions to": `komalarora140699@gmail.com`
   - Enable "Reply To" to use the sender's email
   - Optionally enable email notifications

4. **Get Your Form Endpoint**:
   - After creating the form, you'll see a URL like: `https://formspree.io/f/YOUR_FORM_ID`
   - Copy this URL

5. **Add to Your Code**:
   - Open `src/components/Contact.jsx`
   - Find the line: `const FORMSPREE_ENDPOINT = 'YOUR_FORMSPREE_ENDPOINT'`
   - Replace `YOUR_FORMSPREE_ENDPOINT` with your Formspree URL
   - Example: `const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpzgqnye'`

6. **Test It**:
   - Save the file
   - Push to GitHub (Vercel will auto-deploy)
   - Test the form on your live site

### Formspree Free Plan:
- 50 submissions per month (free)
- No credit card required
- Spam protection included
- Email notifications

---

## Option 2: EmailJS (JavaScript only flow)

If you prefer EmailJS for a pure front-end flow (no server needed):

1. **Sign Up**: Go to https://www.emailjs.com/ and create a free account

2. **Add Email Service**:
   - Go to "Email Services" → "Add New Service"
   - Connect your Gmail account

3. **Create Email Template**:
   - Go to "Email Templates" → "Create New Template"
   - Use these variables:
     ```
     Subject: {{subject}}
     From: {{from_name}} <{{from_email}}>
     Reply To: {{reply_to}}
     Message: {{message}}
     To: komalarora140699@gmail.com
     ```

4. **Get Your Credentials**:
   - Service ID: From "Email Services" page
   - Template ID: From "Email Templates" page
   - Public Key: From Account → General settings

5. **Create Environment Variables**:
   - Create a file named `.env.local` in the project root (same folder as `package.json`)
   - Add the following entries:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     VITE_CONTACT_TARGET_EMAIL=komalarora140699@gmail.com
     ```
   - Restart `npm run dev` after saving so Vite picks up the new values

6. **Deploy**:
   - When deploying to Vercel/Netlify, add the same variables in the project dashboard (use the `VITE_` names exactly)

### EmailJS Free Plan:
- 200 emails per month (free)
- Requires Gmail or email service connection

---

## Quick Setup (Formspree - 2 minutes):

1. Visit: https://formspree.io/register
2. Create account → New Form → Copy endpoint URL
3. Update `FORMSPREE_ENDPOINT` in `Contact.jsx`
4. Push to GitHub
5. Done! ✅

---

## Important Notes:

- **Formspree is recommended** because it's easier and works immediately
- The form will show a warning message until you configure one of these services
- Once configured, emails will be sent directly to `komalarora140699@gmail.com`
- You'll receive emails with the subject and message from the form
- Replies will go to the sender's email address automatically

