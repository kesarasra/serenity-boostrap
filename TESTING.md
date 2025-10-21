Project: Serenity Counseling & Mental Health Services

Stack: HTML, CSS (Bootstrap), JavaScript, EmailJS
Last Updated: (add date here)
Tester: Saravanan Kesavan

🧩 1. Purpose

This document records all manual and semi-automated testing performed on the Serenity website to ensure functionality, usability, responsiveness, and performance prior to deployment.

🧱 2. Testing Phases Overview
Phase	Objective	Status
1. Console / Syntax Validation	Ensure no JS or asset loading errors	☐
2. HTML & CSS Validation	Confirm code syntax and structure are valid	☐
3. Functional Testing	Verify forms, links, animations, navigation	☐
4. Responsive & Cross-Browser Testing	Test on various devices and browsers	☐
5. Performance Testing	Measure site speed, load, and SEO	☐
6. Regression & Smoke Testing	Recheck after bug fixes or deployment	☐
⚙️ 3. Detailed Test Plan
3.1 Console / Syntax Validation

Goal: No errors or warnings in browser console.
Tools: Chrome DevTools → Console tab

Test	Expected Result	Pass
No missing file (404) errors	All images, JS, CSS load correctly	☐
No undefined JS variables	Console shows “No issues detected”	☐
No DOM manipulation errors	Event listeners attach successfully	☐
3.2 HTML & CSS Validation

Goal: Confirm valid markup and styling.
Tools: W3C HTML Validator
, W3C CSS Validator

Test	Expected Result	Pass
HTML passes W3C validation	No major errors or duplicate IDs	☐
CSS passes validation	No syntax or selector warnings	☐
3.3 Functional Testing

Goal: Verify each user-facing function works.

Area	Test	Expected Result	Pass
Navigation	Navbar links scroll to correct section	Smooth scroll behavior	☐
Home Animations	Header text & intro fade in	Visible animation; no flicker	☐
Contact Form	Email sends via EmailJS	“Message sent successfully” alert	☐
Buttons / Links	All buttons clickable; Spotify opens new tab	Correct target URLs	☐
Language Toggle	Text changes between EN ↔ Burmese	Proper translation; layout intact	☐
3.4 Responsive & Cross-Browser Testing

Goal: Confirm readability and layout across screen sizes.
Tools: Chrome DevTools (Device Toolbar), Responsinator, BrowserStack

Device / Width	Expected Behavior	Pass
360px (mobile portrait)	Layout adjusts; no overflow	☐
768px (tablet)	Grid reflows properly	☐
1024px (small desktop)	Navbar responsive	☐
1440px (desktop)	Layout centered; no scaling issues	☐
Chrome	Full functionality	☐
Firefox	All animations / forms work	☐
Safari (macOS / iOS)	Styling consistent	☐
3.5 Performance Testing

Goal: Identify optimization opportunities.
Tools: Lighthouse Audit in Chrome DevTools

Metric	Target	Achieved	Pass
Performance	≥ 85	___	☐
Accessibility	≥ 90	___	☐
Best Practices	≥ 90	___	☐
SEO	≥ 90	___	☐
Image Optimization	No uncompressed images > 300KB	☐	☐
3.6 Regression & Smoke Testing

Goal: Reconfirm after fixes or redeployment.

Scenario	Test	Expected	Pass
After fixing console errors	All functions still work	No new bugs	☐
After updating CSS	Animations and layout intact	☐	
After redeploying to Render	All sections load; no broken links	☐	
🧰 4. Tools Used

Chrome DevTools

W3C HTML & CSS Validators

Lighthouse Audit

Responsinator (Mobile Testing)

BrowserStack (Optional)

EmailJS Dashboard (for form verification)

🧾 5. Known Issues / To-Do
Issue	Description	Priority	Status
☐	Background not spanning full width in contact section	Medium	Open
☐	Console warning for missing AOS.init() param	Low	Open
☐	Delay flicker during intro text animation	Low	Open
🏁 6. Sign-off
Tester	Date	Approved for Deployment
Saravanan Kesavan	____	☐ Yes / ☐ No