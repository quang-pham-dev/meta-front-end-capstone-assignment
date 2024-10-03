import { seedRandom } from "@/utils";

export const fetchAPI = (date: Date): string[] => {
  const result: string[] = [];
  const random = seedRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    } else if (random() > 0.5) {
      result.push(`${i}:30`);
    }
  }
  return result;
};

export const submitAPI = (formData: FormData): boolean => {
  console.log("[development] [submitAPI] formData: =>", formData);
  return true;
};
