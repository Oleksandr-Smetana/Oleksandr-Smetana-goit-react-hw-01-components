import user from './components/socialProfile/user.json';
import Profile from './components/socialProfile/Profile';

import statisticalData from './components/statistics/statistical-data.json';
import Statistics from './components/statistics/Statistics';

import friends from './components/FriendListItem/friends.json';
import FriendList from './components/FriendList/FriendList';

import transactions from './components/TransactionHistory/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div className="container">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
