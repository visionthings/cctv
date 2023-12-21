/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // App
    "./src/app/app.component.html",
    "./src/app/app.component.ts",

    // Stepper
    "./src/components/stepper/stepper.component.html",
    "./src/components/stepper/stepper.component.ts",

    // Terms & Conditions
    "./src/components/terms-and-conditions/terms-and-conditions.component.html",
    "./src/components/terms-and-conditions/terms-and-conditions.component.ts",

    // Personal Information
    "./src/components/personal-information/personal-information.component.html",
    "./src/components/personal-information/personal-information.component.ts",

    // Cameras Details
    "./src/components/cameras-details/cameras-details.component.html",
    "./src/components/cameras-details/cameras-details.component.ts",

    // Payment
    "./src/components/payment/payment.component.html",
    "./src/components/payment/payment.component.ts",

    // Payment Redirect
    "./src/components/payment-redirect/payment-redirect.component.html",
    "./src/components/payment-redirect/payment-redirect.component.ts",

    // Final Contract
    "./src/components/final-contract/final-contract.component.html",
    "./src/components/final-contract/final-contract.component.ts",

    // Contract PDF
    "./src/components/contract-pdf/contract-pdf.component.html",
    "./src/components/contract-pdf/contract-pdf.component.ts",

    // Footer
    "./src/components/footer/footer.component.html",
    "./src/components/footer/footer.component.ts",
  ],
  theme: {
    listStyleType: { roman: "upper-roman" },

    extend: {
      animation: {
        "bounce-slow": "bounce 3s linear infinite",
        "ping-slow": "ping 2s linear infinite",
      },
    },
    container: {
      padding: "1rem",
      center: true,
    },
  },
  plugins: [],
};
