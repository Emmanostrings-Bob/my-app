

/* eslint-disable react/no-unescaped-entities */
import React from 'react';

type Feature = {
  id: string;
  title: string;
  content: string;
};

const features: Feature[] = [
  { id: 'connect', title: 'Connect & Learn', content: 'Swap stories, share advice, and learn from fellow photographers. Our community is a safe space to connect and grow together.' },
  { id: 'exposure', title: 'Boundless Exposure', content: 'Show the world your perspective and get discovered beyond borders. Your work deserves a global stage.' },
  { id: 'resources', title: 'Pack Up Resources', content: 'Dive into a treasure trove of resources to fine-tune your skills. From composition tips to editing tricks, we’ve got your back.' },
  { id: 'skill', title: 'Skill Sharpener', content: 'Looking to level up? Regular challenges and workshops will keep your creativity flowing and skills razor-sharp.' },
  { id: 'gigs', title: 'New Gigs, Who Dis?', content: 'Say goodbye to hustling solo. Photoruum is your backstage pass to new opportunities and photography gigs across Africa.' },
  { id: 'showcase', title: 'Showcase on the web', content: 'Ever dreamt of seeing your shots featured on an African platform? Join us and make it a reality!' },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 pr-4 border-r border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-light text-black mb-2">PHOTORUUM FEATURES</h4>
            <h3 className="text-3xl font-bold text-black mb-6">
              What does our <br /> community offer <br /> you?
            </h3>
            <ul>
              {features.map((feature) => (
                <li key={feature.id} className="cursor-pointer py-4 px-2 hover:bg-gray-100">
                  <a className="text-lg font-medium text-gray-900">{feature.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-2/3 pl-4 overflow-y-auto custom-scrollbar" style={{ maxHeight: 'calc(100vh - 144px)' }}>
            {features.map((feature) => (
              <div key={feature.id} className="py-4">
                <h4 className="text-xl font-semibold mb-2 text-black max-w-lg mx-auto">{feature.title}</h4>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">{feature.content}</p>
              </div>
            ))}
            <h4 className="text-xl font-semibold mb-2 text-black max-w-lg mx-auto">Unleash your photography potential<br /> with Photoruum. Join today!<br/><button className="bg-black text-white px-4 py-2 rounded-full mt-3">Unlock your lens' potential</button></h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
