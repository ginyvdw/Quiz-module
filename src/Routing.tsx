import { Route, Switch } from 'react-router-dom';
import { OverviewPage } from './pages/OverviewPage/OverviewPage';
import { QuestionsPage } from './pages/QuestionsPage/QuestionsPage';
import { RankingPage } from './pages/RankingPage/RankingPage';
import { ResultPage } from './pages/ResultPage/ResultPage';
import { StartPage } from './pages/StartPage/StartPage';

export const Routing = () => {
    return (
        <Switch>
        <Route path="/questionspage" component={QuestionsPage} />
        <Route path="/resultpage/:score" component={ResultPage} />
        <Route path="/question-overview/:score" component={OverviewPage} />
        <Route path="/rankingpage/:score" component={RankingPage} />
        <Route path="/" component={StartPage} />
      </Switch>
    )
}