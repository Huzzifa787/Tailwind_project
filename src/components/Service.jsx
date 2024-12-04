import React from "react";
import Card from "./Card";
import Layout from "../Layout/Layout";

const Service = () => {
  return (
    <Layout>
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Our Services
          </h1>
          <p className="mt-4 text-center text-lg md:text-xl">
            Learn more about our Services.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
        <Card
          imageSrc="https://images.unsplash.com/photo-1581088657139-d5a5cce14c87?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Card 1"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem aut vero corrupti, accusamus reprehenderit repellendus?"
        />
        <Card
          imageSrc="https://plus.unsplash.com/premium_photo-1682141013747-5aed8665c154?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Card 2"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem aut vero corrupti, accusamus reprehenderit repellendus?"
        />
        <Card
          imageSrc="https://plus.unsplash.com/premium_photo-1682141016654-7cda8fa68d0a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Card 3"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem aut vero corrupti, accusamus reprehenderit repellendus?"
        />
        <Card
          imageSrc="https://plus.unsplash.com/premium_photo-1682141004728-2e59ee565709?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Card 4"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem aut vero corrupti, accusamus reprehenderit repellendus?"
        />
        <Card
          imageSrc="https://plus.unsplash.com/premium_photo-1682129750831-40ce720102b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Card 5"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem aut vero corrupti, accusamus reprehenderit repellendus?"
        />
        <Card
          imageSrc="https://plus.unsplash.com/premium_photo-1682129723915-70ef9298f99b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Card 6"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem aut vero corrupti, accusamus reprehenderit repellendus?"
        />
      </div>
    </Layout>
  );
};

export default Service;
