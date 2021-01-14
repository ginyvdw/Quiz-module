// Core
import { Link, useParams } from "react-router-dom"

// Components
import { Button } from "../../components/Button/Button"
import { Card } from "../../components/Card/Card"
import { Label } from "../../components/Label/Label"

// Style
import "./style/ResultPage.scss";

export const ResultPage = () => {
    const { score }: any = useParams();

    return (
        <div className="result-page__container">
            <Card height={400}>
                <div className="card__left-side">
                    <Label fontSize={50} boldFont caps text="Result" />
                </div>
                <div className="card__right-side">
                    <Label fontSize={25} boldFont text={`You scored ${score}/5!`} />
                    <Link to={`/question-overview/${score}`}>
                        <div className="result-page__button">
                            <Button buttonText="Go to question overview" onClick={() => { }} />
                        </div>
                    </Link>
                </div>
            </Card>
        </div>
    )
}