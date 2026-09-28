// src/data/hero.ts
export const heroContent = {
    title: ["Get Access to Hundreds", "Courses Available"],
    subtitle:
        "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
    searchPlaceholder: "Course, topic, creator",
    category: { title: "UI/UX Design", meta: "200 Courses · 1000+ Students" },
    students: { title: "Happy Students", rating: "4.5", reviews: "(240)", extra: "2K+" },
    progress: { title: "Learning Progress", value: 55 },
} as const;

export const studentAvatars = [1, 2, 3, 4, 5].map((n) => `/hero-avatar-${n}.png`);