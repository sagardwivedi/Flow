import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    food: "bg-blue-100 text-blue-800",
    transport: "bg-purple-100 text-purple-800",
    entertainment: "bg-pink-100 text-pink-800",
    groceries: "bg-green-100 text-green-800",
    income: "bg-emerald-100 text-emerald-800",
  };
  return colors[category] || "bg-gray-100 text-gray-800";
};

/**
 * Automatically formats a date in Indian English style as fallback
 * @param date - Date object or parsable date string
 * @returns Formatted date string like "31 Dec 2023"
 */
export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const locale = navigator.language || "en-IN"; // Indian English as fallback

  if (isNaN(dateObj.getTime())) {
    return "Invalid Date";
  }

  return dateObj.toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

/**
 * Automatically formats currency with INR as fallback
 * @param amount - The amount to format
 * @returns Formatted currency string like "₹1,234.50"
 */
export const formatCurrency = (amount: number): string => {
  const locale = navigator.language || "en-IN";
  const currency = "INR"; // Force INR as fallback currency

  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    }).format(amount);
  } catch {
    // Hard fallback to Indian format if anything fails
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  }
};
