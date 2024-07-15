// pages/api/search.js

export default async (req, res) => {
  const { query } = req.query;

  // Replace this with your actual data fetching logic
  const articles = [
    {
      title: 'Design Trend Report: Jazz Style',
      description: 'Description of the first article',
    },
    {
      title: 'Second Article',
      description: 'Description of the second article',
    },
    { title: 'Third Article', description: 'Description of the third article' },
  ];

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(query.toLowerCase()),
  );

  res.status(200).json(filteredArticles);
};
