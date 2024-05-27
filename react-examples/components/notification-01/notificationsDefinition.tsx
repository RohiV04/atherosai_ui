const notificationsDefinition = [
  {
    user: {
      name: 'Eva Green',
      avatar: '/users/anna.jpg',
      status: 'online'
    },
    title: <><strong>Eva Green</strong> started following you!</>,
    dateTime: '2023-04-15T14:00:00Z',
    notificationType: 'following',
    read: false
  },
  {
    user: {
      name: 'John Doe',
      avatar: '/users/james.jpg',
      status: 'pending'
    },
    title: <><strong>John Doe</strong> liked your post</>,
    dateTime: '2023-04-13T13:00:00Z',
    notificationType: 'liked',
    read: false
  },
  {
    user: {
      name: 'Jane Doe',
      avatar: '/users/jane.jpg',
      status: 'pending'
    },
    title: <><strong>Jane Doe</strong> commented on your post!</>,
    dateTime: '2023-04-10T11:00:00Z',
    notificationType: 'commented',
    read: true
  },
  {
    user: {
      name: 'Eva Monroe',
      avatar: '/users/eva.jpg',
      status: 'offline'
    },
    title: <><strong>Eva Monroe</strong> commented on your post!</>,
    dateTime: '2023-04-09T10:00:00Z',
    notificationType: 'commented',
    read: true
  }
];

export default notificationsDefinition;
