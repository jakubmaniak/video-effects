import '../styles/Preset.css';

function Preset(props) {
    function getItemClassName() {
        return 'preset' + (
            props.selected ? ' preset--selected' : ''
        );
    }

    return (
        <button className={getItemClassName()} onClick={props.onClick}>{props.name}</button>
    );
}

export default Preset;