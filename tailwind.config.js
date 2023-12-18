/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // App
    "./src/app/app.component.html",
    "./src/app/app.component.ts",

    // Navbar
    "./src/components/navbar/navbar.component.html",
    "./src/components/navbar/navbar.component.ts",

    // *** Home Page *** \\
    // Header
    "./src/components/home/header/header.component.html",
    "./src/components/home/header/header.component.ts",

    // About company
    "./src/components/home/about-company/about-company.component.html",
    "./src/components/home/about-company/about-company.component.ts",

    // Our services
    "./src/components/home/our-services/our-services.component.html",
    "./src/components/home/our-services/our-services.component.ts",

    // Contract now
    "./src/components/home/contract-now/contract-now.component.html",
    "./src/components/home/contract-now/contract-now.component.ts",

    // Why choose us
    "./src/components/home/why-choose-us/why-choose-us.component.html",
    "./src/components/home/why-choose-us/why-choose-us.component.ts",

    // *** ABOUT US *** \\
    // Header
    "./src/components/about-us/about-header/about-header.component.html",
    "./src/components/about-us/about-header/about-header.component.ts",

    // Intro
    "./src/components/about-us/intro/intro.component.html",
    "./src/components/about-us/intro/intro.component.ts",

    // Our vision
    "./src/components/about-us/our-vision/our-vision.component.html",
    "./src/components/about-us/our-vision/our-vision.component.ts",

    // Company values
    "./src/components/about-us/company-values/company-values.component.html",
    "./src/components/about-us/company-values/company-values.component.ts",

    // *** DYNAMIC CONTENT *** \\
    "./src/components/dynamic-content/dynamic-content.component.html",
    "./src/components/dynamic-content/dynamic-content.component.ts",

    // *** CONTACT US *** \\
    // Header
    "/src/components/contact-us/contact-us-header/contact-us-header.component.html",
    "/src/components/contact-us/contact-us-header/contact-us-header.component.ts",

    // Contact us form
    "./src/components/contact-us/contact-us-form/contact-us-form.component.html",
    "./src/components/contact-us/contact-us-form/contact-us-form.component.ts",

    // *** TERMS & CONDITIONS *** \\
    "./src/components/terms-and-conditions/terms-and-conditions.component.html",
    "./src/components/terms-and-conditions/terms-and-conditions.component.ts",

    // *** PRIVACY POLICY *** \\
    "./src/components/privacy-policy/privacy-policy.component.html",
    "./src/components/privacy-policy/privacy-policy.component.ts",

    // *** RETURN POLICY *** \\
    "./src/components/return-policy/return-policy.component.html",
    "./src/components/return-policy/return-policy.component.ts",

    // Footer
    "./src/components/footer/footer.component.html",
    "./src/components/footer/footer.component.ts",
  ],
  theme: {
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
