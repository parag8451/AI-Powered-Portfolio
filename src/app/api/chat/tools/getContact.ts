import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description: 'This tool shows my contact information.',
  parameters: z.object({}),
  execute: async () => {
    return `Here are my contact details:
- Email: paraganabhavane18@gmail.com
- Phone: +91 8451862877
- Location: Mumbai, India
- LinkedIn: https://www.linkedin.com/in/parag-anabhavane01
- GitHub: https://github.com/parag8451
- Instagram: https://www.instagram.com/parag1617`;
  },
});
