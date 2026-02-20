# Specification

## Summary
**Goal:** Remove payment options from the booking flow and redirect users directly to WhatsApp after booking submission.

**Planned changes:**
- Remove PaymentSection component from BookingModal
- Delete PaymentSection.tsx file from the codebase
- Update BookingModal to close immediately after successful booking submission
- Implement direct WhatsApp redirect after booking with pre-filled message: "Hello Navixa Express, I want to book a shipment. My booking details are submitted on the website."

**User-visible outcome:** Users can submit booking forms and will be immediately redirected to WhatsApp without seeing any payment options or QR codes.
