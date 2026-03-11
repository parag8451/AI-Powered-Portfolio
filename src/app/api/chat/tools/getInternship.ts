import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here's what I'm looking for 👇

- 📅 **Availability**: Open to immediate opportunities
- 🌍 **Location**: Preferably **Mumbai** or anywhere in **India**
- 👩‍💻 **Focus**: AI/GenAI, cloud & infrastructure, web automation/scraping, networking/security
- 🧰 **Stack**: Python, TypeScript/React, SQL, OpenAI/Gemini, Supabase/PostgreSQL, Tailwind
- ✅ **What I bring**: Built a production-grade AI chat platform (multi-modal + RAG + role-based access) and a real-time Python network analyzer; strong foundation in network security and cloud.
- 🔥 I move fast, learn faster, and love big challenges.

📬 **Contact me** via:
- Email: paraganabhavane18@gmail.com
- LinkedIn: [linkedin.com/in/parag-anabhavane01](https://www.linkedin.com/in/parag-anabhavane01)
- GitHub: [github.com/parag8451](https://github.com/parag8451)
- Instagram: [instagram.com/parag1617](https://www.instagram.com/parag1617)

Let's build cool stuff together ✌️
    `;
  },
});
