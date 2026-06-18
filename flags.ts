import { vercelAdapter } from "@flags-sdk/vercel";
import { flag } from "flags/next";

export const pricingPageFlag = flag<boolean>({
  key: "pricing-page",
  adapter: vercelAdapter(),
  defaultValue: false,
  description: "Show pricing packages, links, and the pricing page.",
  options: [
    { value: false, label: "Hidden" },
    { value: true, label: "Visible" }
  ]
});
