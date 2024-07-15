export default function handler(req, res) {
  const articles = [
    {
      id: '1',
      title: 'Design Trend Report: Jazz Style',
      content: 'Ovo je prvi clanak',
      category: 'DESIGN TRENDS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '2',
      title:
        'Stunning Mockups for Interior Designers: Walls, Pillows, Posters & ...',
      content: 'By Marc Sebasttian',
      category: 'INSPARATION',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Molestie at elementum eu facilisis. Viverra tellus in hac habitasse. Consequat id porta nibh venenatis cras. Sit amet purus gravida quis. Adipiscing bibendum est ultricies integer quis. Malesuada fames ac turpis egestas integer eget aliquet. Maecenas ultricies mi eget mauris pharetra et ultrices. Nunc sed augue lacus viverra vitae congue. Et egestas quis ipsum suspendisse ultrices. Pellentesque sit amet porttitor eget dolor morbi non arcu. Netus et malesuada fames ac. Ut ornare lectus sit amet est placerat in egestas erat.',
    },
    {
      id: '3',
      title: 'Design Trend Report: Pop Art Design',
      content: 'Ovo je treci clanak',
      category: 'DESIGN TRENDS',
      description:
        'At tempor commodo ullamcorper a lacus vestibulum sed arcu. Elementum tempus egestas sed sed risus pretium quam. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Nisl vel pretium lectus quam id leo in vitae. Scelerisque fermentum dui faucibus in ornare quam viverra. Condimentum id venenatis a condimentum vitae. Mauris a diam maecenas sed. Consectetur adipiscing elit ut aliquam. Enim sit amet venenatis urna cursus. Enim facilisis gravida neque convallis a cras semper auctor.',
    },
    {
      id: '4',
      title: 'Latest Updates: News Hub',
      content: 'Ovo je cetvrti clanak',
      category: 'NEWS',
      description:
        'Tortor id aliquet lectus proin nibh nisl condimentum id. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Pellentesque id nibh tortor id aliquet. Nisi porta lorem mollis aliquam ut porttitor leo a. Duis convallis convallis tellus id interdum. Convallis convallis tellus id interdum velit laoreet.  Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Convallis aenean et tortor at risus.',
    },
    {
      id: '5',
      title: 'Inspiration Station',
      content: 'Ovo je peti clanak',
      category: 'INSPARATION',
      description:
        'Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Proin sed libero enim sed faucibus turpis in eu mi. Vel pretium lectus quam id leo. Orci eu lobortis elementum nibh. Ornare aenean euismod elementum nisi quis eleifend. Enim nec dui nunc mattis enim ut tellus elementum. In nisl nisi scelerisque eu ultrices vitae.',
    },
    {
      id: '6',
      title: 'Current Affairs Corner',
      content: 'Ovo je sesti clanak',
      category: 'NEWS',
      description:
        'Cras semper auctor neque vitae tempus quam pellentesque nec nam. Massa sed elementum tempus egestas sed sed risus. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Ultricies mi quis hendrerit dolor magna. Aenean et tortor at risus viverra adipiscing at in.',
    },
  ];
  res.status(200).json(articles);
}
