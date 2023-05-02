import css from "./Button.module.css";
import { ThreeDots } from "react-loader-spinner";

export const Button = ({ onClickLoadMore, isVizibleLoadMore }) => {

    return (
        <button className={css.Button} onClick={onClickLoadMore} disabled={isVizibleLoadMore}>
            {isVizibleLoadMore
                ? <ThreeDots
                    height="23"
                    width="140"
                    radius="9"
                    color="#4fa94d"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
                : "load more"
            }
        </button>
    );
};