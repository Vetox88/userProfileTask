import Header from './components/ProfileHeader';
import PersonalInfo from './components/UserProfile';
import InterestsSection from './components/Interest';
import theme from './theme';

function App() {
  
  return (
    <div style={theme.palette.container}>
      <Header />
      <PersonalInfo />
      <InterestsSection />
    </div>
  );
}

export default App;
