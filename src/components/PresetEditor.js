import '../styles/PresetEditor.css';

function PresetEditor(props) {
    function passCodeChangeEvent(ev) {
        props.onCodeChange?.(ev.target.value);
    }

    return (
        <textarea
            className="preset-editor__code"
            spellCheck="false"
            value={props.code ?? ''}
            onInput={passCodeChangeEvent}
        ></textarea>
    );
}

export default PresetEditor;