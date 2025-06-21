import {
  ArrowRight,
  X,
  Check,
  AlertTriangle,
} from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ListItem {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  link: string;
}

interface List2Props {
  heading?: string;
  items?: ListItem[];
}

export const List2 = ({
  heading,
  items = [
    {
      icon: <AlertTriangle className="text-yellow-500" />,
      title: "\"No code required!\"",
      category: "DIY Promise",
      description: "You hit a wall when you need custom features",
      link: "#",
    },
    {
      icon: <AlertTriangle className="text-yellow-500" />,
      title: "\"Launch in hours!\"",
      category: "DIY Promise", 
      description: "40-80 hours learning curve first",
      link: "#",
    },
    {
      icon: <AlertTriangle className="text-yellow-500" />,
      title: "\"Only $29/month!\"",
      category: "DIY Promise",
      description: "$200+/month once you need real features",
      link: "#",
    },
    {
      icon: <AlertTriangle className="text-yellow-500" />,
      title: "\"Easy integrations!\"",
      category: "DIY Promise",
      description: "API documentation nightmares",
      link: "#",
    },
  ],
}: List2Props) => {
  const whizItems = [
    {
      icon: <Check className="text-green-500" />,
      title: "I handle ALL the technical stuff",
      category: "Whiz Reality",
      description: "Custom features included, no limitations",
      link: "#contact",
    },
    {
      icon: <Check className="text-green-500" />,
      title: "Actual working app in days",
      category: "Whiz Reality",
      description: "No learning curve - just results",
      link: "#contact",
    },
    {
      icon: <Check className="text-green-500" />,
      title: "One payment, you own it forever",
      category: "Whiz Reality", 
      description: "No monthly fees, no vendor lock-in",
      link: "#contact",
    },
    {
      icon: <Check className="text-green-500" />,
      title: "I make everything work together",
      category: "Whiz Reality",
      description: "Seamless integrations, guaranteed",
      link: "#contact",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        {heading && (
          <h2 className="mb-10 text-3xl font-bold text-center md:mb-14 md:text-4xl text-gray-900">
            {heading}
          </h2>
        )}
        
        {/* DIY Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-red-700 mb-6">What DIY Tools Promise vs. Reality</h3>
          <div className="flex flex-col bg-red-50 rounded-xl overflow-hidden">
            <Separator />
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <div className="grid items-center gap-4 px-6 py-6 md:grid-cols-4">
                  <div className="order-2 flex items-center gap-3 md:order-none">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white border">
                      {item.icon}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-red-600 font-medium">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <p className="order-1 text-lg font-medium text-gray-700 md:order-none md:col-span-2">
                    {item.description}
                  </p>
                  <div className="order-3 ml-auto w-fit md:order-none">
                    <X className="h-6 w-6 text-red-500" />
                  </div>
                </div>
                <Separator />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Whiz Section */}
        <div>
          <h3 className="text-2xl font-bold text-green-700 mb-6">The Whiz Way</h3>
          <div className="flex flex-col bg-green-50 rounded-xl overflow-hidden">
            <Separator />
            {whizItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="grid items-center gap-4 px-6 py-6 md:grid-cols-4">
                  <div className="order-2 flex items-center gap-3 md:order-none">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white border">
                      {item.icon}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-green-600 font-medium">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <p className="order-1 text-lg font-medium text-gray-700 md:order-none md:col-span-2">
                    {item.description}
                  </p>
                  <Button variant="outline" asChild className="order-3 ml-auto w-fit md:order-none">
                    <a
                      className="gap-2"
                      href={item.link}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <Separator />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};