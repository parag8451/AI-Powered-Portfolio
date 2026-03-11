import { tool } from 'ai';
import { z } from 'zod';

export const getCertifications = tool({
  description:
    'Show Parag Anabhavane’s certifications with previews and links to view the certificates.',
  parameters: z.object({}),
  execute: async () => {
    return 'Here are my certifications. Tap any card to zoom or open the certificate link.';
  },
});
