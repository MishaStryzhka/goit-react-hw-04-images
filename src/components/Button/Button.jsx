import { Component } from "react";
import css from "./Button.module.css";
import { ThreeDots } from "react-loader-spinner";

export class Button extends Component {

    hendelClick = () => {
        // this.setState({ isLoading: false, })
        this.props.onClickLoadMore()
    }

    render() {
        return (
            <button className={css.Button} onClick={this.hendelClick} disabled={this.props.isVizibleLoadMore}>
                {this.props.isVizibleLoadMore
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
        )
    }
}