// Dummy data for chat rooms (roomsData) - Hospitality focused

export const dummyRoomsData = [
  {
    _id: "room1",
    users: [
      {
        userId: {
          _id: "guest1",
          name: "Sarah Johnson",
          photo: "/images/user-3.png",
        },
        unreadCount: 3,
      },
    ],
    lastMessage: {
      message:
        "Thank you for the quick response! The WiFi is working perfectly now.",
      media: [],
      updatedAt: "2024-01-15T14:30:00Z",
    },
    messages: [
      {
        _id: "msg1",
        message:
          "Hello! I'm having trouble connecting to the WiFi in my room. Could you please help?",
        media: [],
        from: {
          _id: "guest1",
          name: "Sarah Johnson",
          photo: "/images/user-3.png",
        },
        createdAt: "2024-01-15T10:00:00Z",
      },
      {
        _id: "msg2",
        message:
          "Hello Sarah! I'm sorry to hear about the WiFi issue. Let me help you with that. Can you please try connecting to 'Hotel_Guest_Network' with the password 'Welcome2024'?",
        media: [],
        from: {
          _id: "me",
          name: "You",
          photo: "/images/profile.png",
        },
        createdAt: "2024-01-15T10:05:00Z",
      },
      {
        _id: "msg3",
        message:
          "I tried that but it's still not working. The network doesn't appear in my available networks list.",
        media: [],
        from: {
          _id: "guest1",
          name: "Sarah Johnson",
          photo: "/images/user-3.png",
        },
        createdAt: "2024-01-15T10:10:00Z",
      },
      {
        _id: "msg4",
        message:
          "I understand. Let me send our technical team to your room. They should be there within 10 minutes. In the meantime, you can use our business center on the 2nd floor which has a strong WiFi connection.",
        media: [],
        from: {
          _id: "me",
          name: "You",
          photo: "/images/profile.png",
        },
        createdAt: "2024-01-15T10:15:00Z",
      },
      {
        _id: "msg5",
        message:
          "Thank you for the quick response! The WiFi is working perfectly now.",
        media: [],
        from: {
          _id: "guest1",
          name: "Sarah Johnson",
          photo: "/images/user-3.png",
        },
        createdAt: "2024-01-15T14:30:00Z",
      },
    ],
    reference: "support",
    support: {
      _id: "support1",
      status: "open",
    },
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    _id: "room2",
    users: [
      {
        userId: {
          _id: "guest2",
          name: "Michael Chen",
          photo: "/images/user-2.png",
        },
        unreadCount: 0,
      },
    ],
    lastMessage: {
      message: "Could you please arrange a late checkout for tomorrow?",
      media: [],
      updatedAt: "2024-01-15T13:45:00Z",
    },
    messages: [
      {
        _id: "msg6",
        message:
          "Good morning! I would like to request a late checkout for tomorrow. Is it possible to extend until 2 PM?",
        media: [],
        from: {
          _id: "guest2",
          name: "Michael Chen",
          photo: "/images/user-2.png",
        },
        createdAt: "2024-01-15T13:30:00Z",
      },
      {
        _id: "msg7",
        message:
          "Good morning Michael! I'll check with housekeeping and get back to you shortly. What's your room number?",
        media: [],
        from: {
          _id: "me",
          name: "You",
          photo: "/images/profile.png",
        },
        createdAt: "2024-01-15T13:32:00Z",
      },
      {
        _id: "msg8",
        message: "Room 1205. Thank you!",
        media: [],
        from: {
          _id: "guest2",
          name: "Michael Chen",
          photo: "/images/user-2.png",
        },
        createdAt: "2024-01-15T13:35:00Z",
      },
      {
        _id: "msg9",
        message:
          "Perfect! I've confirmed with housekeeping. Your late checkout until 2 PM has been approved. You'll receive a confirmation email shortly.",
        media: [],
        from: {
          _id: "me",
          name: "You",
          photo: "/images/profile.png",
        },
        createdAt: "2024-01-15T13:45:00Z",
      },
    ],
    reference: "support",
    support: {
      _id: "support2",
      status: "open",
    },
    createdAt: "2024-01-15T13:30:00Z",
  },
  {
    _id: "room3",
    users: [
      {
        userId: {
          _id: "guest3",
          name: "Emma Rodriguez",
          photo: "/images/user-3.png",
        },
        unreadCount: 1,
      },
    ],
    lastMessage: {
      message:
        "I've attached the room service menu. Please let me know your order.",
      media: [],
      updatedAt: "2024-01-15T12:15:00Z",
    },
    messages: [
      {
        _id: "msg10",
        message:
          "Hi! I'd like to order room service. Could you please send me the menu?",
        media: [],
        from: {
          _id: "guest3",
          name: "Emma Rodriguez",
          photo: "/images/user-3.png",
        },
        createdAt: "2024-01-15T12:00:00Z",
      },
      {
        _id: "msg11",
        message:
          "I've attached the room service menu. Please let me know your order.",
        media: [],
        from: {
          _id: "me",
          name: "You",
          photo: "/images/profile.png",
        },
        createdAt: "2024-01-15T12:15:00Z",
      },
    ],
    reference: "support",
    support: {
      _id: "support3",
      status: "open",
    },
    createdAt: "2024-01-15T12:00:00Z",
  },
  {
    _id: "room4",
    users: [
      {
        userId: {
          _id: "guest4",
          name: "David Thompson",
          photo: "/images/user-1.png",
        },
        unreadCount: 0,
      },
    ],
    lastMessage: {
      message: "The issue has been resolved. Thank you for your patience!",
      media: [],
      updatedAt: "2024-01-15T11:20:00Z",
    },
    messages: [
      {
        _id: "msg12",
        message:
          "Hi, I'm having issues with the air conditioning in my room. It's not cooling properly.",
        media: [],
        from: {
          _id: "guest4",
          name: "David Thompson",
          photo: "/images/user-1.png",
        },
        createdAt: "2024-01-15T09:00:00Z",
      },
      {
        _id: "msg13",
        message:
          "I'm sorry to hear about the AC issue. Let me send our maintenance team to check it right away. What's your room number?",
        media: [],
        from: {
          _id: "me",
          name: "You",
          photo: "/images/profile.png",
        },
        createdAt: "2024-01-15T09:05:00Z",
      },
      {
        _id: "msg14",
        message: "Room 805. Thank you!",
        media: [],
        from: {
          _id: "guest4",
          name: "David Thompson",
          photo: "/images/user-1.png",
        },
        createdAt: "2024-01-15T09:10:00Z",
      },
      {
        _id: "msg15",
        message: "The issue has been resolved. Thank you for your patience!",
        media: [],
        from: {
          _id: "me",
          name: "You",
          photo: "/images/profile.png",
        },
        createdAt: "2024-01-15T11:20:00Z",
      },
    ],
    reference: "support",
    support: {
      _id: "support4",
      status: "open",
    },
    createdAt: "2024-01-15T09:00:00Z",
  },
  {
    _id: "room5",
    users: [
      {
        userId: {
          _id: "guest5",
          name: "Lisa Anderson",
          photo: "/images/user-2.png",
        },
        unreadCount: 2,
      },
    ],
    lastMessage: {
      message: "Here are the photos of the room condition as requested.",
      media: [],
      updatedAt: "2024-01-15T15:00:00Z",
    },
    messages: [
      {
        _id: "msg16",
        message:
          "I noticed some issues with the room condition. There's a stain on the carpet and the bathroom door doesn't close properly.",
        media: [],
        from: {
          _id: "guest5",
          name: "Lisa Anderson",
          photo: "/images/user-2.png",
        },
        createdAt: "2024-01-15T14:30:00Z",
      },
      {
        _id: "msg17",
        message:
          "I'm sorry to hear about these issues. Could you please take some photos so I can better understand the problems and arrange for maintenance?",
        media: [],
        from: {
          _id: "me",
          name: "You",
          photo: "/images/profile.png",
        },
        createdAt: "2024-01-15T14:35:00Z",
      },
      {
        _id: "msg18",
        message: "Here are the photos of the room condition as requested.",
        media: [],
        from: {
          _id: "guest5",
          name: "Lisa Anderson",
          photo: "/images/user-2.png",
        },
        createdAt: "2024-01-15T15:00:00Z",
      },
    ],
    reference: "support",
    support: {
      _id: "support5",
      status: "open",
    },
    createdAt: "2024-01-15T14:30:00Z",
  },
  {
    _id: "room6",
    users: [
      {
        userId: {
          _id: "guest6",
          name: "Robert Wilson",
          photo: "/images/user-1.png",
        },
        unreadCount: 0,
      },
    ],
    lastMessage: {
      message: "I need assistance with the TV remote. It's not responding.",
      media: [],
      updatedAt: "2024-01-15T16:30:00Z",
    },
    messages: [
      {
        _id: "msg19",
        message:
          "I need assistance with the TV remote. It's not responding to any buttons.",
        media: [],
        from: {
          _id: "guest6",
          name: "Robert Wilson",
          photo: "/images/user-1.png",
        },
        createdAt: "2024-01-15T16:15:00Z",
      },
      {
        _id: "msg20",
        message:
          "I'll send maintenance to your room right away. In the meantime, you can try pressing the power button for 5 seconds to reset the remote. What's your room number?",
        media: [],
        from: {
          _id: "me",
          name: "You",
          photo: "/images/profile.png",
        },
        createdAt: "2024-01-15T16:30:00Z",
      },
    ],
    reference: "support",
    support: {
      _id: "support6",
      status: "open",
    },
    createdAt: "2024-01-15T16:15:00Z",
  },
];

// Dummy chat messages data for testing
export const dummyChatMessages = {
  room1: [
    {
      _id: "msg1",
      message:
        "Hello! I'm having trouble connecting to the WiFi in my room. Could you please help?",
      media: [],
      from: {
        _id: "guest1",
        name: "Sarah Johnson",
        photo: "/images/user-3.png",
      },
      createdAt: "2024-01-15T10:00:00Z",
    },
    {
      _id: "msg2",
      message:
        "Hello Sarah! I'm sorry to hear about the WiFi issue. Let me help you with that. Can you please try connecting to 'Hotel_Guest_Network' with the password 'Welcome2024'?",
      media: [],
      from: {
        _id: "support_agent",
        name: "Hotel Support",
        photo: "/images/profile.png",
      },
      createdAt: "2024-01-15T10:05:00Z",
    },
    {
      _id: "msg3",
      message:
        "I tried that but it's still not working. The network doesn't appear in my available networks list.",
      media: [],
      from: {
        _id: "guest1",
        name: "Sarah Johnson",
        photo: "/images/user-3.png",
      },
      createdAt: "2024-01-15T10:10:00Z",
    },
    {
      _id: "msg4",
      message:
        "I understand. Let me send our technical team to your room. They should be there within 10 minutes. In the meantime, you can use our business center on the 2nd floor which has a strong WiFi connection.",
      media: [],
      from: {
        _id: "support_agent",
        name: "Hotel Support",
        photo: "/images/profile.png",
      },
      createdAt: "2024-01-15T10:15:00Z",
    },
    {
      _id: "msg5",
      message:
        "Thank you for the quick response! The WiFi is working perfectly now.",
      media: [],
      from: {
        _id: "guest1",
        name: "Sarah Johnson",
        photo: "/images/user-3.png",
      },
      createdAt: "2024-01-15T14:30:00Z",
    },
  ],
  room2: [
    {
      _id: "msg6",
      message:
        "Good morning! I would like to request a late checkout for tomorrow. Is it possible to extend until 2 PM?",
      media: [],
      from: {
        _id: "guest2",
        name: "Michael Chen",
        photo: "/images/user-2.png",
      },
      createdAt: "2024-01-15T13:30:00Z",
    },
    {
      _id: "msg7",
      message:
        "Good morning Michael! I'll check with housekeeping and get back to you shortly. What's your room number?",
      media: [],
      from: {
        _id: "support_agent",
        name: "Hotel Support",
        photo: "/images/profile.png",
      },
      createdAt: "2024-01-15T13:32:00Z",
    },
    {
      _id: "msg8",
      message: "Room 1205. Thank you!",
      media: [],
      from: {
        _id: "guest2",
        name: "Michael Chen",
        photo: "/images/user-2.png",
      },
      createdAt: "2024-01-15T13:35:00Z",
    },
    {
      _id: "msg9",
      message:
        "Perfect! I've confirmed with housekeeping. Your late checkout until 2 PM has been approved. You'll receive a confirmation email shortly.",
      media: [],
      from: {
        _id: "support_agent",
        name: "Hotel Support",
        photo: "/images/profile.png",
      },
      createdAt: "2024-01-15T13:45:00Z",
    },
  ],
  room3: [
    {
      _id: "msg10",
      message:
        "Hi! I'd like to order room service. Could you please send me the menu?",
      media: [],
      from: {
        _id: "guest3",
        name: "Emma Rodriguez",
        photo: "/images/user-3.png",
      },
      createdAt: "2024-01-15T12:00:00Z",
    },
    {
      _id: "msg11",
      message:
        "I've attached the room service menu. Please let me know your order.",
      media: [],
      from: {
        _id: "support_agent",
        name: "Hotel Support",
        photo: "/images/profile.png",
      },
      createdAt: "2024-01-15T12:15:00Z",
    },
  ],
  room5: [
    {
      _id: "msg12",
      message:
        "I noticed some issues with the room condition. There's a stain on the carpet and the bathroom door doesn't close properly.",
      media: [],
      from: {
        _id: "guest5",
        name: "Lisa Anderson",
        photo: "/images/user-2.png",
      },
      createdAt: "2024-01-15T14:30:00Z",
    },
    {
      _id: "msg13",
      message:
        "I'm sorry to hear about these issues. Could you please take some photos so I can better understand the problems and arrange for maintenance?",
      media: [],
      from: {
        _id: "support_agent",
        name: "Hotel Support",
        photo: "/images/profile.png",
      },
      createdAt: "2024-01-15T14:35:00Z",
    },
    {
      _id: "msg14",
      message: "Here are the photos of the room condition as requested.",
      media: [],
      from: {
        _id: "guest5",
        name: "Lisa Anderson",
        photo: "/images/user-2.png",
      },
      createdAt: "2024-01-15T15:00:00Z",
    },
  ],
  room6: [
    {
      _id: "msg15",
      message:
        "I need assistance with the TV remote. It's not responding to any buttons.",
      media: [],
      from: {
        _id: "guest6",
        name: "Robert Wilson",
        photo: "/images/user-1.png",
      },
      createdAt: "2024-01-15T16:15:00Z",
    },
    {
      _id: "msg16",
      message:
        "I'll send maintenance to your room right away. In the meantime, you can try pressing the power button for 5 seconds to reset the remote. What's your room number?",
      media: [],
      from: {
        _id: "support_agent",
        name: "Hotel Support",
        photo: "/images/profile.png",
      },
      createdAt: "2024-01-15T16:30:00Z",
    },
  ],
};
