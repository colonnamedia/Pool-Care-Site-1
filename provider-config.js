export const providerConfig = {
  demoMode: true,
  quoteDelivery: { enabled: false, provider: "CLIENT_CRM_OR_INBOX_REQUIRED", destination: "" },
  scheduling: { enabled: false, provider: "CLIENT_SELECTION_REQUIRED", bookingUrl: "" },
  recurringEnrollment: { enabled: false, provider: "CLIENT_SELECTION_REQUIRED", enrollmentUrl: "" },
  payments: { enabled: false, provider: "CLIENT_SELECTION_REQUIRED", checkoutUrl: "" },
  launchGate: "Client-selected providers, credentials, approved service terms, consent language, real coverage and end-to-end testing are required before enabling submissions, scheduling, recurring enrollment, confirmations or payments."
};
