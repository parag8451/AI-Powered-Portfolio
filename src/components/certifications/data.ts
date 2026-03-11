export type Certification = {
  title: string;
  provider: string;
  date?: string;
  description?: string;
  imageSrc?: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    provider: 'Amazon Web Services',
    date: 'September 16, 2025',
    description:
      'Fundamentals of AWS cloud concepts, core services, security, pricing, and architectural best practices.',
    imageSrc: '/certifications/aws-cloud-practitioner.svg',
    credentialUrl: '/certifications/aws-cloud-practitioner.svg',
  },
  {
    title: 'Amazon EC2 Observability, Monitoring & Troubleshooting',
    provider: 'Amazon Web Services',
    date: 'August 24, 2025',
    description:
      'Hands-on monitoring, logging, and troubleshooting for EC2 instances with CloudWatch, alarms, and performance tuning.',
    imageSrc: '/certifications/aws-ec2-observability.svg',
    credentialUrl: '/certifications/aws-ec2-observability.svg',
  },
  {
    title: 'Managing Amazon Simple Storage Service (S3)',
    provider: 'Amazon Web Services',
    date: '2025',
    description:
      'Buckets, lifecycle rules, object access policies, and cost/security controls for production-grade S3 deployments.',
    imageSrc: '/certifications/aws-s3-essentials.svg',
    credentialUrl: '/certifications/aws-s3-essentials.svg',
  },
  {
    title: 'Oracle Certified AI Foundations Associate',
    provider: 'Oracle University',
    date: 'August 29, 2025',
    description:
      'Oracle Cloud AI foundations, model lifecycle, security, and governance across OCI services.',
    imageSrc: '/certifications/oracle-ai-foundations.png',
    credentialUrl: '/certifications/oracle-ai-foundations.png',
  },
  {
    title: 'Cybersecurity Essentials Training',
    provider: 'Coursera',
    date: '2025',
    description:
      'Core cyber hygiene, threat models, network security basics, and incident response fundamentals.',
    imageSrc: '/certifications/coursera-cybersecurity.svg',
    credentialUrl: '/certifications/coursera-cybersecurity.png',
  },
  {
    title: 'Generative AI & ChatGPT',
    provider: 'GeeksforGeeks',
    date: '2025',
    description:
      'Five-week program covering prompt design, model limits, safety, and production integration patterns.',
    imageSrc: '/certifications/gfg-generative-ai.svg',
    credentialUrl: '/certifications/gfg-generative-ai.svg',
  },
];
