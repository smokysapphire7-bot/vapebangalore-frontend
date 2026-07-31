"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Product } from "@/lib/products";

export interface CartItem {
  product: Product;
  flavour: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  count: number;
  addItem: (product: Product, flavour: string) => void;
  removeItem: (slug: string, flavour: string) => void;
  updateQty: (slug: string, flavour: string, qty: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  whatsappCartLink: () => string;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  const addItem = useCallback((product: Product, flavour: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.slug === product.slug && i.flavour === flavour);
      if (existing) {
        return prev.map((i) =>
          i.product.slug === product.slug && i.flavour === flavour
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { product, flavour, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((slug: string, flavour: string) => {
    setItems((prev) => prev.filter((i) => !(i.product.slug === slug && i.flavour === flavour)));
  }, []);

  const updateQty = useCallback((slug: string, flavour: string, qty: number) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((i) => !(i.product.slug === slug && i.flavour === flavour)));
    } else {
      setItems((prev) =>
        prev.map((i) =>
          i.product.slug === slug && i.flavour === flavour ? { ...i, quantity: qty } : i
        )
      );
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const whatsappCartLink = useCallback(() => {
    if (items.length === 0) return "https://wa.me/916282878843";
    const orderLines = items.map((i) =>
      `• ${i.product.name}${i.flavour ? ` (${i.flavour})` : ""} x${i.quantity} — ₹${(i.product.price * i.quantity).toLocaleString()}`
    ).join("\n");
    const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
    const msg = `Hi VapeBangalore, I want to order:\n\n${orderLines}\n\nTotal: ₹${total.toLocaleString()}\n\nPlease confirm availability and delivery time.`;
    return `https://wa.me/916282878843?text=${encodeURIComponent(msg)}`;
  }, [items]);

  return (
    <CartContext.Provider value={{ items, count, addItem, removeItem, updateQty, clearCart, isOpen, openCart, closeCart, whatsappCartLink }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
