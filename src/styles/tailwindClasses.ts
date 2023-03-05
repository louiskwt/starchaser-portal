interface TailwindVariants {
  red: string;
  blue: string;
  yellow: string;
  pink: string;
  purple: string;
  green: string;
}

interface TailwindText {
  dark: string;
  light: string;
  zinc: string;
}

export const cardStyles: TailwindVariants = {
  red: "bg-red-500 bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-600",
  blue: "bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-600",
  yellow:
    "bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600",
  pink: "bg-pink-500 bg-pink-to-b from-pink-200 to-pink-100 border-b-4 border-pink-600",
  purple:
    "bg-gradient-to-b from-purple-200 to-purple-100 border-b-4 border-purple-600",
  green:
    "bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600",
};

export const iconStyles: TailwindVariants = {
  red: "rounded-full p-5 bg-red-600",
  blue: "rounded-full p-5 bg-blue-600",
  yellow: "rounded-full p-5 bg-yellow-600",
  pink: "rounded-full p-5 bg-pink-600",
  purple: "rounded-full p-5 bg-purple-600",
  green: "rounded-full p-5 bg-green-600",
};

export const textStyles: TailwindText = {
  zinc: "text-zinc-800 font-bold text-xl",
  dark: "text-gray-600",
  light: "text-gray-200",
};
