import React from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Layout>
      <section className="py-32 bg-background min-h-[70vh] flex items-center justify-center">
        <div className="container max-w-xl text-center space-y-6">
          <span className="text-secondary font-semibold tracking-widest text-sm uppercase block">
            Error 404
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
            Page Not Found
          </h1>
          <div className="h-[1px] w-20 bg-secondary mx-auto" />
          <p className="text-sm text-muted-foreground leading-relaxed font-light">
            The page you are looking for does not exist, has been removed, or has had its name changed. Please return to our home page or contact our support team.
          </p>
          <div className="pt-4">
            <Link href="/">
              <Button className="bg-primary hover:bg-secondary hover:text-primary-foreground font-serif text-md px-8 py-3 rounded-full transition-all duration-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
