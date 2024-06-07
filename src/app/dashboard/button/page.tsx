"use client";

import { Button } from "@/components/ui/button";

export default function ButtonPage() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button onClick={() => console.log("Hola mundo")}>Click me</Button>
    </div>
  );
}
