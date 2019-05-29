import React from 'react';
import Profile from './Profile/Profile';
import src from './Profile/Image/profile.png';
import Stats from './Stats/Stats';
import PricingPlan from './PricingPlan/PricingPlan';
import pricingList from './PricingPlan/pricing-plan.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

const user = {
  name: 'Timothy Grant',
  tag: 'tgrant',
  location: 'Sao Paulo, Brazil',
  avatar: src,
  stats: {
    followers: 198,
    views: 3685,
    likes: 492,
  },
};
const stats = [
  {
    id: 'id-1',
    label: '.docx',
    percentage: 22,
  },
  {
    id: 'id-2',
    label: '.pdf',
    percentage: 4,
  },
  {
    id: 'id-3',
    label: '.mp3',
    percentage: 17,
  },
  {
    id: 'id-4',
    label: '.psd',
    percentage: 47,
  },
  {
    id: 'id-5',
    label: '.pdf',
    percentage: 10,
  },
];

const App = () => (
  <>
    <Profile user={user} /> <Stats title="Upload stats" stats={stats} />{' '}
    <PricingPlan items={pricingList} />{' '}
    <TransactionHistory items={transactions} />{' '}
  </>
);
export default App;
