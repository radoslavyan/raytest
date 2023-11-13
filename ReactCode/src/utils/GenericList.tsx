import { ReactElement } from "react";
import Loading from "./Loading";

//use generic list to centralize the displaying of the different states of the list of movies being fetched
export default function GenericList<T>(props: genericListProps) {

    if (!props.list) {
        if (props.loadingUI) {
            return props.loadingUI;
        }
        //if the movies are not loaded yet, display a loading
        return <Loading />

    } else if (props.list.length === 0) {
        if (props.emptyListUI) {
            return props.emptyListUI;
        }
        return <>There are no elements to display</>
    } else {
        return props.children;
    }

}


interface genericListProps {
    list: any;
    loadingUI?: ReactElement;
    emptyListUI?: ReactElement;
    children: ReactElement;
}