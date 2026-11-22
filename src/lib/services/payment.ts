/** Payment provider adapter boundary. Keep secret credentials in server-only configuration. */
export interface DonationRequest { amountMinor: number; currency: "INR"; donorEmail?: string }
export interface PaymentSession { provider: string; redirectUrl: string; reference: string }

export async function createPaymentSession(_request: DonationRequest): Promise<PaymentSession> {
  void _request;
  throw new Error("Payments are not configured. Donations remain disabled until a provider and verified webhook are set up.");
}
