// EmailJS Configuration
// Get these from your EmailJS dashboard: https://dashboard.emailjs.com/admin

export const EMAILJS_CONFIG = {
    SERVICE_ID: "YOUR_SERVICE_ID",     // e.g., "service_x9s8..."
    TEMPLATE_ID: "YOUR_TEMPLATE_ID",   // e.g., "template_8d7f..."
    PUBLIC_KEY: "YOUR_PUBLIC_KEY",     // e.g., "user_H8s9..."
};

// INSTRUCTIONS:
// 1. Go to https://www.emailjs.com/ and sign up/login.
// 2. "Email Services" -> "Add New Service" -> Select "Gmail" -> Connect "innoviware41@gmail.com".
//    -> Copy the "Service ID" to the field above.
// 3. "Email Templates" -> "Create New Template".
//    -> "To Email": Set this to "innoviware41@gmail.com" (it's usually default).
//    -> "Subject": "New message from {{user_name}}".
//    -> "Content":
//       Name: {{user_name}}
//       Email: {{user_email}}
//       Message: {{message}}
//    -> Save and copy the "Template ID" to the field above.
// 4. "Account" (profile icon) -> "Public Key" -> Copy to the field above.
