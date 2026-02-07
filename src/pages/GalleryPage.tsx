import { useState } from 'react';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryCategories = [
    {
      category: 'Web & Digital Development',
      services: [
        {
          title: 'Web Development',
          images: ['/branding1.PNG', '/graphic.PNG', '/billboard.jpg', '/large.jpg'],
        },
        {
          title: 'Website Design',
          images: ['/branding1.PNG', '/graphic.PNG', '/billboard.jpg', '/large.jpg'],
        },
        {
          title: 'Entertainment Websites',
          images: ['/branding1.PNG', '/graphic.PNG', '/billboard.jpg', '/large.jpg'],
        },
        {
          title: 'Informational Websites',
          images: ['/branding1.PNG', '/graphic.PNG', '/billboard.jpg', '/large.jpg'],
        },
        {
          title: 'E-commerce Websites',
          images: ['/branding1.PNG', '/graphic.PNG', '/billboard.jpg', '/large.jpg'],
        },
        {
          title: 'App Development',
          images: ['/branding1.PNG', '/graphic.PNG', '/billboard.jpg', '/large.jpg'],
        },
      ],
    },
    {
      category: 'Advertising & Printing',
      services: [
        {
          title: 'Billboard Installation',
          images: ['/billboard.jpg', '/bill.jpg', '/bill1.jpg', '/bill2.jpg'],
        },
        {
          title: 'Signage',
          images: ['/signage.jpg', '/sinage1.jpg', '/billboard.jpg', '/large.jpg'],
        },
         {
          title: 'Teardrops',
          images: ['/teardrops.jpg', '/bill.jpg', '/bill1.jpg', '/bill2.jpg'],
        },
        {
          title: 'DTF Printing',
          images: ['/large.jpg', '/graphic.PNG', '/branding1.PNG', '/billboard.jpg'],
        },
         {
          title: 'Mats',
          images: ['/mats.jpg', '/bill.jpg', '/bill1.jpg', '/bill2.jpg'],
        },
      ],
    },
    {
      category: 'Graphic & Visual Design',
      services: [
        {
          title: 'Graphic Design',
          images: ['/graphic.PNG', '/branding1.PNG', '/large.jpg', '/billboard.jpg'],
        },
        {
          title: 'Social Media Design',
          images: ['/graphic.PNG', '/branding1.PNG', '/large.jpg', '/billboard.jpg'],
        },
        {
          title: 'Blog Graphics',
          images: ['/large.jpg', '/branding1.PNG', '/large.jpg', '/billboard.jpg'],
        },
        {
          title: 'Logo Design',
          images: ['/logos.jpg', '/branding1.PNG', '/large.jpg', '/billboard.jpg'],
        },
        {
          title: 'Portfolios',
          images: ['/branding1.PNG', '/graphic.PNG', '/large.jpg', '/billboard.jpg'],
        },
        {
          title: 'Flyers',
          images: ['/graphic.PNG', '/branding1.PNG', '/large.jpg', '/billboard.jpg'],
        },
        {
          title: 'Educational Materials',
          images: ['/graphic.PNG', '/branding1.PNG', '/large.jpg', '/billboard.jpg'],
        },
        {
          title: 'Business Cards',
          images: ['/graphic.PNG', '/branding1.PNG', '/large.jpg', '/billboard.jpg'],
        },
        {
          title: 'News Graphics',
          images: ['/graphic.PNG', '/branding1.PNG', '/large.jpg', '/billboard.jpg'],
        },
      ],
    },
    {
      category: 'Branding & Strategy',
      services: [
        {
          title: 'Brand Strategy & Positioning',
          images: ['/branding1.PNG', '/graphic.PNG', '/large.jpg', '/billboard.jpg'],
        },
        {
          title: 'Visual Identity & Design',
          images: ['/branding1.PNG', '/graphic.PNG', '/large.jpg', '/billboard.jpg'],
        },
        {
          title: 'Messaging & Tone of Voice',
          images: ['/graphic.PNG', '/branding1.PNG', '/large.jpg', '/billboard.jpg'],
        },
        {
          title: 'Digital Branding & Experience',
          images: ['/branding1.PNG', '/graphic.PNG', '/large.jpg', '/billboard.jpg'],
        },
        {
          title: 'Brand Roll-out & Management',
          images: ['/branding1.PNG', '/graphic.PNG', '/large.jpg', '/billboard.jpg'],
        },
      ],
    },
    {
      category: 'Media Production',
      services: [
        {
          title: 'Photography & Videography',
          images: ['/photo.jpg', '/photo1.jpg', '/large.jpg', '/billboard.jpg'],
        },
      ],
    },
  ];

  return (
    <>
      <section className="pt-32 pb-24 bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="h-1 w-20 bg-orange-500 mb-6 mx-auto"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Gallery
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Explore our portfolio of stunning work across all our service categories
            </p>
          </div>

          <div className="space-y-24">
            {galleryCategories.map((categoryGroup, catIndex) => (
              <div
                key={catIndex}
                className="animate-fade-in"
                style={{
                  animationDelay: `${catIndex * 100}ms`,
                }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 pb-4 border-b-2 border-orange-500">
                  {categoryGroup.category}
                </h2>

                <div className="space-y-16">
                  {categoryGroup.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="animate-slide-up">
                      <h3 className="text-xl md:text-2xl font-semibold text-orange-500 mb-6">
                        {service.title}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.images.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            onClick={() => setActiveImage(image)}
                            className="group relative overflow-hidden rounded-xl cursor-pointer bg-black aspect-square hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300"
                            style={{
                              animationDelay: `${(serviceIndex + imgIndex) * 50}ms`,
                            }}
                          >
                            <img
                              src={image}
                              alt={`${service.title} image ${imgIndex + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg
                                  className="w-12 h-12 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Gallery preview"
            className="max-w-4xl w-full max-h-[80vh] object-contain rounded-lg"
          />
        </div>
      )}

      <Footer />
    </>
  );
};

export default GalleryPage;
