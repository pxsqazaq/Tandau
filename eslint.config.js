import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({
  features: {
    stylistic: false,
  },
  rules: {
    "@stylistic/quotes": "off",
    "@stylistic/member-delimiter-style": "off",
  },
});
