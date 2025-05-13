export const users = [
  {
    id: '1',
    name: 'Michael Speed',
    initials: 'MS',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    initials: 'SJ',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '3',
    name: 'David Lee',
    initials: 'DL',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

export const currentUser = users[0];

export const clients = [
  {
    id: '1',
    name: 'Chandan Kalita',
    company: 'Chandan',
    initials: 'CK',
  },
  {
    id: '2',
    name: 'Michael Speed',
    company: 'Michael',
    initials: 'MS',
  },
  {
    id: '3',
    name: 'John Smith',
    company: 'ABC Corp',
    initials: 'JS',
  },
  {
    id: '4',
    name: 'Emily Davis',
    company: 'Tech Innovations',
    initials: 'ED',
  },
  {
    id: '5',
    name: 'Alex Wong',
    company: 'Global Solutions',
    initials: 'AW',
  },
];

export const deals = [
  {
    id: '1',
    name: 'Chandan Deal',
    clientId: '1',
    stage: 'Negotiating',
    budget: 5000,
    assigneeId: '1',
    createdAt: new Date('2023-05-15'),
    updatedAt: new Date('2023-06-01'),
  },
  {
    id: '2',
    name: 'Some deal 4',
    clientId: '2',
    stage: 'Negotiating',
    budget: 7000,
    assigneeId: '1',
    createdAt: new Date('2023-06-10'),
    updatedAt: new Date('2023-06-15'),
  },
  {
    id: '3',
    name: 'Software Implementation',
    clientId: '3',
    stage: 'Kickback',
    budget: 50000,
    assigneeId: '2',
    createdAt: new Date('2023-04-20'),
    updatedAt: new Date('2023-05-15'),
  },
  {
    id: '4',
    name: 'Website Redesign',
    clientId: '4',
    stage: 'Negotiating',
    budget: 12000,
    assigneeId: '3',
    createdAt: new Date('2023-06-22'),
    updatedAt: new Date('2023-06-25'),
  },
  {
    id: '5',
    name: 'Marketing Campaign',
    clientId: '5',
    stage: 'Negotiating',
    budget: 8500,
    assigneeId: '2',
    createdAt: new Date('2023-06-18'),
    updatedAt: new Date('2023-06-20'),
  },
];

// Helper to get deals with client and assignee data included
export const getDealsWithRelations = () => {
  return deals.map(deal => {
    const client = clients.find(c => c.id === deal.clientId);
    const assignee = users.find(u => u.id === deal.assigneeId);
    return { ...deal, client, assignee };
  });
};

// Group deals by stage
export const getGroupedDealsByStage = () => {
  const dealsWithRelations = getDealsWithRelations();
  const stages = ['Negotiating', 'Kickback', 'Closed', 'Lost'];
  
  return stages.map(stage => {
    const stageDeals = dealsWithRelations.filter(deal => deal.stage === stage);
    const totalValue = stageDeals.reduce((sum, deal) => sum + deal.budget, 0);
    
    return {
      stage,
      deals: stageDeals,
      totalValue,
      count: stageDeals.length,
      isExpanded: stage === 'Negotiating' || stage === 'Kickback' // Default expand these stages
    };
  });
};

// Calculate total pipeline value
export const getTotalPipelineValue = () => {
  return deals.reduce((sum, deal) => sum + deal.budget, 0);
};