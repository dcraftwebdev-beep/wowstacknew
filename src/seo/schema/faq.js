/**
 * FAQPage schema — a cornerstone of AEO (Answer Engine Optimization).
 * Answer engines and Google lift Q&A pairs directly from this markup.
 * @param {{question: string, answer: string}[]} faqs
 */
export function faqSchema(faqs = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
