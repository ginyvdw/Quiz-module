// Core
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";

// Components
import { Card } from "../../components/Card/Card"
import { Label } from "../../components/Label/Label";

// Style
import "./style/RankingPage.scss";

export const RankingPage = () => {
    const { score }: any = useParams();
    const [value, setValue] = useState('');

    const onChange = (e: any) => {
        localStorage.setItem('myRanking', e.target.value + ' ' + score);

        setValue(e.target.value)
    }

    return (
        <div className="ranking-page__container">
            <Card height={400}>
                <div className="ranking-page__all-ranking">
                    <div className="ranking-page__first-part">
                        <div className="card__left-side">
                            <Label text={`You scored ${score}/5!`} boldFont fontSize={25} />
                            <Label text="You can save it here on the right" boldFont fontSize={25} />
                            <input placeholder="your name here" className="ranking-page__input" value={value} type="text" onChange={onChange} />
                        </div>
                        <div className="ranking-page__ranking">
                            <table>
                                <thead>
                                    <th>Ranking</th>
                                    <th>Name</th>
                                    <th>Score</th>
                                </thead>
                                <tbody>
                                    <td><Label text="1" boldFont fontSize={20} /></td>
                                    <td><Label text={value} boldFont fontSize={20} /></td>
                                    <td><Label text={score} boldFont fontSize={20} /></td>
                                </tbody>
                            </table>
                            <Link to="/">
                                <div className="ranking-page__start-button">
                                    <Button buttonText="Go back to the start" onClick={() => { }} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
// const mapStateToProps = (state: any) => {
//     const { rankings } = state;
//     return {
//         rankingList: rankings.byIds
//     }
// }

// const mapDispatchToProps = { }

// export default connect(mapStateToProps, mapDispatchToProps)(RankingPage)