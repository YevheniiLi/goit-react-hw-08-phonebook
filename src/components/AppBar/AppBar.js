import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';


export const AppBar = () => {
    const {isLoggedIn} =useSelector(selectAuth);
    
    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}