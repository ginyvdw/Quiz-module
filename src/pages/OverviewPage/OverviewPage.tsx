// Core
import { Link, useParams } from "react-router-dom";
import { questionsData } from "../../API/questionsData";
import { Button } from "../../components/Button/Button";

// Components
import { Card } from "../../components/Card/Card";
import { Label } from "../../components/Label/Label";

// Style
import "./style/OverViewPage.scss"

export const OverviewPage = () => {
    const { score }: any = useParams();

    return (
        <div className="overview-page__container">
            <Card height={400}>
                <div className="overview-page__content">
                    <Label text="Question overview" caps boldFont fontSize={25} />
                    <div className="overview-page__all-questions">
                        {questionsData.map((data, key) => {
                            return (
                                <div className="overview-page__question-block" key={key}>
                                    {data.question}
                                    {data.anwsers.map((data, key) => {
                                        return (
                                            <div key={key} className={`overview-page__anwser overview-page__anwser--${data.isCorrect}`}>{data.anwserText}</div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    <Link to={`/rankingpage/${score}`}>
                        <div className="overview-page__ranking-button">
                            <Button buttonText="Go to ranking!" onClick={() => { }} />
                        </div>
                    </Link>
                </div>
            </Card>
        </div>
    )
};