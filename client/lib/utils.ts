import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
}

export function validateName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s\-']{2,50}$/;
  return nameRegex.test(name.trim());
}

export function rateLimitCheck(key: string, maxRequests: number = 3, windowMs: number = 60000): boolean {
  if (typeof window === "undefined") return true;
  const now = Date.now();
  const storageKey = `rate_limit_${key}`;
  const stored = sessionStorage.getItem(storageKey);
  let attempts: number[] = stored ? JSON.parse(stored) : [];
  attempts = attempts.filter((time) => now - time < windowMs);
  if (attempts.length >= maxRequests) return false;
  attempts.push(now);
  sessionStorage.setItem(storageKey, JSON.stringify(attempts));
  return true;
}
