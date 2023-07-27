import ClipLoader from "react-spinners/ClipLoader";

const Spinner = (props) => {
    return (
       <ClipLoader color={'D0021B'} loading={true} size={props.size} />
    )
}

export default Spinner;