import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const blogPosts = [
  {
    title: "The Future of AI in Sustainable Energy",
    date: "March 15, 2024",
    excerpt: "Exploring how artificial intelligence is revolutionizing the renewable energy sector...",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&h=300&fit=crop"
  },
  {
    title: "Advancing Solar Technology Through Machine Learning",
    date: "March 1, 2024",
    excerpt: "How machine learning algorithms are optimizing solar panel efficiency and energy distribution...",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop"
  },
  {
    title: "Neural Networks in Environmental Science",
    date: "February 15, 2024",
    excerpt: "Implementing neural networks to predict and improve environmental sustainability metrics...",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop"
  }
];

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      id="blog"
      ref={ref}
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            className="bg-[#112240] rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-[#64ffda] text-sm">{post.date}</span>
              <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
              <p className="text-gray-400">{post.excerpt}</p>
              <a
                href="#"
                className="inline-block mt-4 text-[#64ffda] hover:underline"
              >
                Read more →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Blog;