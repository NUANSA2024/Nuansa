import HorizontalSlider from "react-horizontal-slider";
export default class App extends React.Component {
    render() {
        return (
            <HorizontalSlider
                title="Menu 1"
                data={items1}
                height={300}
                width={300}
                id={1}
            />
        );
    }
}
