export default interface TechStack {
  domain: string;
  domainIcon: string;
  technologies: {
    name: string;
    icon: string;
    expertise: number; // Expertise level from 0 to 100
  }[];
  description: string;
}
