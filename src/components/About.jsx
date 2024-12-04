import React from "react";
import Layout from "../Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header Section */}
        <header className="bg-blue-600 text-white py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              About Us
            </h1>
            <p className="mt-4 text-center text-lg md:text-xl">
              Learn more about who we are and what we do.
            </p>
          </div>
        </header>

        {/* Team Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-6">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Team Member Card */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img
                  className="w-32 h-32 mx-auto rounded-full"
                  src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
                  alt="Team Member"
                />
                <h3 className="text-xl font-semibold text-center mt-4">
                  John Doe
                </h3>
                <p className="text-gray-600 text-center">CEO & Founder</p>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6">
                <img
                  className="w-32 h-32 mx-auto rounded-full"
                  src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                  alt="Team Member"
                />
                <h3 className="text-xl font-semibold text-center mt-4">
                  Jane Smith
                </h3>
                <p className="text-gray-600 text-center">Lead Developer</p>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6">
                <img
                  className="w-32 h-32 mx-auto rounded-full"
                  src="https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                  alt="Team Member"
                />
                <h3 className="text-xl font-semibold text-center mt-4">
                  Mike Johnson
                </h3>
                <p className="text-gray-600 text-center">Project Manager</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}

        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
            <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto">
              Our mission is to provide high-quality, innovative solutions that
              meet the needs of our customers while contributing to the
              betterment of the community.
            </p>
            <h2 className="text-3xl font-bold text-center mt-12 mb-6 pt-5">
              Our Vision
            </h2>
            <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto">
              Our vision is to be the leading provider of cutting-edge solutions
              that empower businesses and individuals to thrive in the digital
              age.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
