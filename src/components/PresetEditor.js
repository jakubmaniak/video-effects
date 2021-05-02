import '../styles/PresetEditor.css';

function PresetEditor() {
    return (
        <textarea className="preset-editor__code" spellCheck="false">fps(30);</textarea>
    );
}

export default PresetEditor;