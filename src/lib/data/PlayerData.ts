export type Player = {
  id: number;
  name: string;
  position: string;
  stats: {
    goals: number;
    assists: number;
    accuracy: number;
    fitness: number;
    form: string;
  };
};

export const players: Player[] = [
    {
      id: 1,
      name: 'Marcus Johnson',
      position: 'Forward',
      stats: {
        goals: 12,
        assists: 8,
        accuracy: 78,
        fitness: 92,
        form: 'Excellent'
      }
    },
    {
      id: 2,
      name: 'David Chen',
      position: 'Midfielder',
      stats: {
        goals: 5,
        assists: 15,
        accuracy: 85,
        fitness: 88,
        form: 'Good'
      }
    },
    {
      id: 3,
      name: 'James Wilson',
      position: 'Defender',
      stats: {
        goals: 2,
        assists: 4,
        accuracy: 90,
        fitness: 95,
        form: 'Excellent'
      }
    },
    {
      id: 4,
      name: 'Sarah Thompson',
      position: 'Midfielder',
      stats: {
        goals: 7,
        assists: 12,
        accuracy: 82,
        fitness: 90,
        form: 'Good'
      }
    },
    {
      id: 5,
      name: 'Alex Rodriguez',
      position: 'Forward',
      stats: {
        goals: 15,
        assists: 6,
        accuracy: 75,
        fitness: 87,
        form: 'Excellent'
      }
    },
    {
      id: 6,
      name: 'Emma Patel',
      position: 'Defender',
      stats: {
        goals: 1,
        assists: 3,
        accuracy: 88,
        fitness: 93,
        form: 'Good'
      }
    },
    {
      id: 7,
      name: 'Liam O\'Connor',
      position: 'Goalkeeper',
      stats: {
        goals: 0,
        assists: 1,
        accuracy: 95,
        fitness: 89,
        form: 'Excellent'
      }
    },
    {
      id: 8,
      name: 'Olivia Kim',
      position: 'Midfielder',
      stats: {
        goals: 4,
        assists: 10,
        accuracy: 87,
        fitness: 91,
        form: 'Good'
      }
    },
    {
      id: 9,
      name: 'Jamal Hassan',
      position: 'Defender',
      stats: {
        goals: 0,
        assists: 2,
        accuracy: 92,
        fitness: 94,
        form: 'Good'
      }
    },
    {
      id: 10,
      name: 'Sofia Garcia',
      position: 'Forward',
      stats: {
        goals: 10,
        assists: 7,
        accuracy: 80,
        fitness: 88,
        form: 'Good'
      }
    },
    {
      id: 11,
      name: 'Ethan Nguyen',
      position: 'Defender',
      stats: {
        goals: 1,
        assists: 1,
        accuracy: 89,
        fitness: 92,
        form: 'Good'
      }
    }
];
